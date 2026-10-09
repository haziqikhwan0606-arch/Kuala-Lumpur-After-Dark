// Kuala Lumpur After Dark - Interactive Nightlife Map
import { VENUES, getVenueById } from "../data/venues.js";
import { storage } from "../utils/storage.js";
import { showToast } from "../components/toast.js";

export function renderMapPage(params = {}) {
  const container = document.createElement("div");
  container.className = "page-map fade-in";

  const categories = ["ALL", "CLUBS", "BARS", "LIVE MUSIC", "ROOFTOPS", "LATE NIGHT"];
  let activeFilter = "ALL";
  let currentMap = null;
  let markerMap = new Map(); // venue.id -> L.marker
  let isMobileListMode = false;

  container.innerHTML = `
    <div class="map-page-container">
      <!-- SIDEBAR (DESKTOP VENUE LIST OR FILTERED SELECTION) -->
      <aside class="map-sidebar" id="map-sidebar">
        <div class="map-sidebar-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <div>
              <span class="tagline-sub">Geographic Discovery</span>
              <h2 style="font-size:1.35rem; margin:0;">KL NIGHT MAP</h2>
            </div>
            <span class="mono-meta" id="map-venue-count">${VENUES.length} SPOTS</span>
          </div>

          <!-- Category filter chips -->
          <div class="filter-chips" id="map-category-chips">
            ${categories.map(c => `
              <button class="filter-chip ${activeFilter === c ? 'active' : ''}" data-cat="${c}" style="font-size:0.75rem; padding:0.3rem 0.65rem;">
                ${c}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="map-sidebar-list" id="map-venue-list">
          <!-- Sidebar venue mini cards -->
        </div>
      </aside>

      <!-- MAP VIEWPORT -->
      <main class="map-view-wrapper" id="map-view-wrapper">
        <div id="leaflet-map"></div>

        <!-- Floating Mobile Map ↔ List toggle button -->
        <button id="map-list-toggle-btn" class="map-view-toggle-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          <span id="map-toggle-text">SHOW LIST VIEW</span>
        </button>

        <!-- MOBILE BOTTOM SHEET PREVIEW -->
        <div id="map-bottom-sheet" class="mobile-bottom-sheet">
          <div class="sheet-handle"></div>
          <div id="bottom-sheet-content">
            <!-- Injected on pin click -->
          </div>
        </div>
      </main>
    </div>
  `;

  // Resilient initialization with polling & size invalidation
  let initAttempts = 0;
  function scheduleInit() {
    initAttempts++;
    const mapEl = container.querySelector("#leaflet-map");
    // Ensure element is connected to document and Leaflet is ready
    if (mapEl && document.body.contains(mapEl) && window.L) {
      initLeaflet(mapEl);
    } else if (initAttempts < 25) {
      setTimeout(scheduleInit, 60);
    }
  }

  // Start initialization check
  setTimeout(scheduleInit, 30);

  function initLeaflet(mapEl) {
    if (!window.L) return;

    // Reset container if already initialized
    if (mapEl._leaflet_id) {
      mapEl._leaflet_id = null;
    }

    try {
      // Center on Bukit Bintang / KLCC Golden Triangle (3.1466, 101.7050)
      currentMap = window.L.map(mapEl, {
        zoomControl: false,
        attributionControl: false
      }).setView([3.1466, 101.7050], 13);

      // High-performance Dark Gray Canvas (Zero API Key, no watermarks)
      window.L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        maxNativeZoom: 16,
        maxZoom: 19
      }).addTo(currentMap);

      // Clean reference labels
      window.L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
        maxNativeZoom: 16,
        maxZoom: 19
      }).addTo(currentMap);

      // Zoom controls on top right
      window.L.control.zoom({ position: 'topright' }).addTo(currentMap);

      renderVenuePins();
      renderSidebarList();

      // Ensure proper dimensions after layout rendering
      currentMap.invalidateSize();
      setTimeout(() => currentMap && currentMap.invalidateSize(), 150);
      setTimeout(() => currentMap && currentMap.invalidateSize(), 400);

      window.addEventListener('resize', handleMapResize);

      // Check if URL has ?focus=venueId
      if (params.focus) {
        setTimeout(() => focusVenue(params.focus), 200);
      }
    } catch (err) {
      console.error("Leaflet map initialization error:", err);
    }
  }

  function handleMapResize() {
    if (currentMap) currentMap.invalidateSize();
  }

  function getFilteredVenues() {
    if (activeFilter === "ALL") return VENUES;
    return VENUES.filter(v => {
      if (activeFilter === "LIVE MUSIC") return v.category === "Live Music";
      if (activeFilter === "LATE NIGHT") return v.category === "Late Night";
      return v.category.toUpperCase() === activeFilter;
    });
  }

  function createPopupContent(venue) {
    return `
      <div class="klad-map-popup">
        <div class="klad-popup-img-wrap">
          <img src="${venue.heroImage}" alt="${venue.name}" class="klad-popup-img" />
          <span class="klad-popup-category">${venue.category}</span>
          <span class="klad-popup-price">${venue.price}</span>
        </div>
        <div class="klad-popup-body">
          <div class="klad-popup-area">
            <span class="status-dot"></span>
            <span>${venue.area} • ${venue.statusText}</span>
          </div>
          <h3 class="klad-popup-title">${venue.name}</h3>
          <p class="klad-popup-desc">${venue.tagline}</p>
          <div class="klad-popup-sound">Sound: ${venue.music.slice(0, 3).join(", ")}</div>
          <div class="klad-popup-actions">
            <a href="#/venue/${venue.slug}" class="btn btn-primary btn-sm">VIEW DOSSIER →</a>
            <button class="btn btn-secondary btn-sm klad-popup-add-btn" data-venue-id="${venue.id}">+ ADD</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderVenuePins() {
    if (!currentMap || !window.L) return;

    // Clear old markers
    markerMap.forEach(m => currentMap.removeLayer(m));
    markerMap.clear();

    const filtered = getFilteredVenues();
    container.querySelector("#map-venue-count").textContent = `${filtered.length} SPOTS`;

    const latLngs = [];

    filtered.forEach(venue => {
      // Custom dark electric neon pin icon
      const customIcon = window.L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="custom-marker" data-marker-venue="${venue.id}" title="${venue.name}">
            <div class="custom-marker-dot"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -14]
      });

      const marker = window.L.marker([venue.lat, venue.lng], { icon: customIcon }).addTo(currentMap);
      
      // Bind rich popup
      marker.bindPopup(createPopupContent(venue), {
        maxWidth: 300,
        className: 'klad-custom-popup'
      });

      marker.on("click", () => {
        highlightSidebarItem(venue.id);
        openMobileBottomSheet(venue);
        currentMap.panTo([venue.lat, venue.lng]);
      });

      markerMap.set(venue.id, marker);
      latLngs.push([venue.lat, venue.lng]);
    });

    // Delegate "+ ADD" click inside popups
    currentMap.on('popupopen', (e) => {
      const popupEl = e.popup.getElement();
      if (!popupEl) return;
      const addBtn = popupEl.querySelector('.klad-popup-add-btn');
      if (addBtn) {
        addBtn.addEventListener('click', (ev) => {
          ev.preventDefault();
          const vId = addBtn.getAttribute('data-venue-id');
          const v = getVenueById(vId);
          if (v) {
            const res = storage.addToActivePlan(v.id);
            if (res.success) {
              showToast(`Added ${v.name} to your Night Plan!`, "success");
            } else {
              showToast(res.message, "info");
            }
          }
        });
      }
    });
  }

  function renderSidebarList() {
    const listEl = container.querySelector("#map-venue-list");
    if (!listEl) return;
    const filtered = getFilteredVenues();

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div style="padding:2rem 1rem; text-align:center; color:var(--text-tertiary); font-size:0.85rem;">
          No venues match the selected category.
        </div>
      `;
      return;
    }

    listEl.innerHTML = filtered.map(v => `
      <div class="venue-card" style="padding:0.85rem; cursor:pointer;" data-sidebar-venue="${v.id}">
        <div style="display:flex; gap:0.75rem;">
          <img src="${v.heroImage}" alt="${v.name}" style="width:72px; height:54px; object-fit:cover; border-radius:3px;" />
          <div style="flex-grow:1; min-width:0;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; gap:0.5rem;">
              <h4 style="font-size:0.92rem; margin:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${v.name}</h4>
              <span class="mono-meta" style="color:var(--accent-light); font-size:0.7rem; flex-shrink:0;">${v.price}</span>
            </div>
            <div style="font-size:0.76rem; color:var(--text-secondary); margin:2px 0;">${v.area} • ${v.category}</div>
            <div class="mono-meta" style="color:var(--status-open); font-size:0.68rem;">${v.statusText}</div>
          </div>
        </div>
      </div>
    `).join("");

    listEl.querySelectorAll("[data-sidebar-venue]").forEach(item => {
      item.addEventListener("click", () => {
        const vId = item.getAttribute("data-sidebar-venue");
        focusVenue(vId);
      });
    });
  }

  function highlightSidebarItem(venueId) {
    const listEl = container.querySelector("#map-venue-list");
    if (!listEl) return;
    listEl.querySelectorAll(".venue-card").forEach(c => c.classList.remove("selected-venue"));
    const selected = listEl.querySelector(`[data-sidebar-venue="${venueId}"]`);
    if (selected) {
      selected.classList.add("selected-venue");
      selected.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function focusVenue(venueId) {
    const venue = getVenueById(venueId);
    if (!venue || !currentMap) return;

    currentMap.flyTo([venue.lat, venue.lng], 15, { duration: 1.0 });

    const marker = markerMap.get(venue.id);
    if (marker) {
      marker.openPopup();
    }

    highlightSidebarItem(venue.id);
    openMobileBottomSheet(venue);

    // If on mobile list view, switch back to map view so user sees the focused spot
    if (isMobileListMode) {
      const toggleBtn = container.querySelector("#map-list-toggle-btn");
      if (toggleBtn) toggleBtn.click();
    }
  }

  function openMobileBottomSheet(venue) {
    const sheet = container.querySelector("#map-bottom-sheet");
    const content = container.querySelector("#bottom-sheet-content");
    if (!sheet || !content) return;

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
            <span class="tag tag-accent">${venue.category}</span>
            <span class="tag">${venue.area}</span>
            <span class="mono-meta" style="color:var(--status-open); font-size:0.72rem;">${venue.statusText}</span>
          </div>
          <h3 style="font-size:1.2rem; margin:0;"><a href="#/venue/${venue.slug}">${venue.name}</a></h3>
        </div>
        <button id="btn-close-sheet" class="btn-ghost" style="padding:4px 8px; font-size:0.8rem;">✕</button>
      </div>

      <div style="display:grid; grid-template-columns: 80px 1fr; gap:0.75rem; align-items:center; margin-bottom:1rem;">
        <img src="${venue.heroImage}" alt="${venue.name}" style="width:80px; height:60px; object-fit:cover; border-radius:3px;" />
        <div>
          <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.4; margin-bottom:0.3rem;">${venue.tagline}</p>
          <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--text-tertiary);">
            Sound: ${venue.music.slice(0, 2).join(" / ")} • ${venue.price}
          </div>
        </div>
      </div>

      <div style="display:flex; gap:0.75rem;">
        <a href="#/venue/${venue.slug}" class="btn btn-primary" style="flex:1; padding:0.55rem 0.75rem; font-size:0.75rem;">
          VIEW DOSSIER →
        </a>
        <button id="sheet-add-night-btn" class="btn btn-secondary" style="flex:1; padding:0.55rem 0.75rem; font-size:0.75rem;">
          + ADD TO NIGHT
        </button>
      </div>
    `;

    sheet.classList.add("open");

    content.querySelector("#btn-close-sheet")?.addEventListener("click", () => {
      sheet.classList.remove("open");
    });

    content.querySelector("#sheet-add-night-btn")?.addEventListener("click", () => {
      const res = storage.addToActivePlan(venue.id);
      if (res.success) {
        showToast(`Added ${venue.name} to your Night Plan!`, "success");
      } else {
        showToast(res.message, "info");
      }
    });
  }

  // Filter chips click handling
  container.querySelectorAll("#map-category-chips .filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      container.querySelectorAll("#map-category-chips .filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-cat");
      renderVenuePins();
      renderSidebarList();

      // Fit map bounds to show matching spots
      if (currentMap && markerMap.size > 0) {
        const bounds = [];
        markerMap.forEach(m => bounds.push(m.getLatLng()));
        if (bounds.length > 0) {
          currentMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
        }
      }
    });
  });

  // Mobile Map ↔ List toggle
  const toggleBtn = container.querySelector("#map-list-toggle-btn");
  const sidebar = container.querySelector("#map-sidebar");
  const mapWrapper = container.querySelector("#map-view-wrapper");
  const toggleText = container.querySelector("#map-toggle-text");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isMobileListMode = !isMobileListMode;
      if (isMobileListMode) {
        sidebar.classList.add("mobile-active");
        mapWrapper.classList.add("mobile-hidden");
        toggleText.textContent = "SHOW MAP VIEW";
      } else {
        sidebar.classList.remove("mobile-active");
        mapWrapper.classList.remove("mobile-hidden");
        toggleText.textContent = "SHOW LIST VIEW";
        if (currentMap) {
          setTimeout(() => currentMap.invalidateSize(), 50);
        }
      }
    });
  }

  return container;
}
