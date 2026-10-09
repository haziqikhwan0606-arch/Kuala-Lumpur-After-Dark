// Kuala Lumpur After Dark - Venue Detail Page
import { getVenueById, VENUES } from "../data/venues.js";
import { storage } from "../utils/storage.js";
import { showToast } from "../components/toast.js";
import { renderVenueCard } from "../components/venue-card.js";
import { formatPriceLevel } from "../utils/formatters.js";

export function renderVenueDetailPage(slugOrId) {
  const container = document.createElement("div");
  container.className = "page-venue-detail fade-in";

  const venue = getVenueById(slugOrId);

  if (!venue) {
    container.innerHTML = `
      <div class="container section" style="text-align:center; padding: 6rem 1rem;">
        <h1 style="font-size:2rem; margin-bottom:1rem;">Venue Not Found</h1>
        <p style="margin-bottom:2rem;">The requested nightlife destination could not be located in our records.</p>
        <a href="#/explore" class="btn btn-primary">Return to Explore</a>
      </div>
    `;
    return container;
  }

  const isSaved = storage.isVenueSaved(venue.id);
  const activePlan = storage.getActivePlan();
  const inPlan = activePlan.some(stop => stop.venueId === venue.id);

  // Find nearby venues in the same or adjacent neighborhood
  const nearbyVenues = VENUES.filter(v => v.id !== venue.id && (v.area === venue.area || v.category === venue.category)).slice(0, 3);

  container.innerHTML = `
    <!-- IMMERSIVE HERO -->
    <section class="venue-detail-hero">
      <div class="venue-detail-hero-bg">
        <img class="venue-detail-hero-img" src="${venue.heroImage}" alt="${venue.name}" />
        <div class="venue-detail-hero-gradient"></div>
      </div>

      <div class="container venue-detail-hero-content">
        <a href="#/explore" class="mono-meta" style="color:var(--text-secondary); display:inline-flex; align-items:center; gap:6px; margin-bottom:1rem;">
          ← Back to Explore
        </a>

        <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
          <span class="tag tag-accent">${venue.category}</span>
          <span class="tag tag-status-open">
            <span class="status-dot"></span>
            ${venue.isOpenNow ? "Open Now" : "Opens Tonight"}
          </span>
          <span class="mono-meta" style="color:var(--text-secondary);">${venue.area}</span>
        </div>

        <h1 class="venue-detail-title">${venue.name}</h1>

        <div class="venue-detail-meta-row">
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:600;">
            <span style="color:var(--accent-light);">Music:</span>
            <span>${venue.music.join(" • ")}</span>
          </div>
          <span style="color:var(--border-medium)">|</span>
          <div>
            <span style="color:var(--accent-light);">Pricing:</span>
            <span>${venue.price} (${venue.priceRange})</span>
          </div>
          <span style="color:var(--border-medium)">|</span>
          <div style="font-family:var(--font-mono); color:var(--text-secondary);">
            ${venue.statusText}
          </div>
        </div>

        <!-- HERO CTAS -->
        <div class="venue-detail-actions">
          <button id="btn-detail-add-night" class="btn ${inPlan ? 'btn-secondary in-plan' : 'btn-primary'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span id="detail-add-text">${inPlan ? '✓ In Your Night Plan' : '+ ADD TO NIGHT'}</span>
          </button>

          <button id="btn-detail-save" class="btn btn-secondary ${isSaved ? 'active' : ''}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? '#fff' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            <span id="detail-save-text">${isSaved ? 'SAVED TO LIST' : 'SAVE VENUE'}</span>
          </button>

          <a href="#/map?focus=${venue.id}" class="btn btn-ghost" style="color:var(--accent-light);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
            View on Map
          </a>
        </div>
      </div>
    </section>

    <!-- MAIN EDITORIAL CONTENT & SIDEBAR -->
    <div class="container venue-detail-layout">
      <!-- LEFT MAIN COLUMN -->
      <div class="venue-main-column">
        <!-- ABOUT SECTION -->
        <section class="venue-info-section">
          <h2 class="venue-info-heading">ABOUT THE VENUE</h2>
          <p class="lead" style="margin-bottom:1.25rem;">${venue.tagline}</p>
          <p style="margin-bottom:1.5rem; font-size:1.05rem; line-height:1.7;">${venue.description}</p>
        </section>

        <!-- TONIGHT LIVE SCHEDULE -->
        <section class="venue-info-section" style="background:var(--bg-surface); border:1px solid var(--border-medium); border-left:3px solid var(--accent); padding:2rem; border-radius:var(--radius-xs);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
            <div>
              <span class="tagline-sub">Live Set Times</span>
              <h2 style="font-size:1.5rem; margin-top:0.25rem;">${venue.tonight.theme}</h2>
            </div>
            <span class="tag tag-accent">${venue.tonight.date}</span>
          </div>

          <div class="timeline" style="margin-top:1.5rem;">
            ${venue.tonight.schedule.map((slot, idx) => `
              <div class="timeline-item">
                <div class="timeline-node">${idx + 1}</div>
                <div class="timeline-content">
                  <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:0.35rem; flex-wrap:wrap; gap:0.5rem;">
                    <span style="font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-light); font-weight:700;">${slot.time}</span>
                    <span style="font-weight:700; color:var(--text-primary); font-size:0.95rem;">${slot.artist}</span>
                  </div>
                  <div style="font-size:0.88rem; color:var(--text-secondary);">${slot.title}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- PHOTO GALLERY (HORIZONTAL SCROLLING) -->
        <section class="venue-info-section">
          <div class="section-header">
            <div>
              <span class="tagline-sub">Atmosphere & Visuals</span>
              <h2 class="venue-info-heading" style="border:none; margin:0;">PHOTO ARCHIVE</h2>
            </div>
            <span class="mono-meta">Scroll horizontally →</span>
          </div>

          <div class="venue-gallery-scroll">
            ${venue.images.map((imgUrl, i) => `
              <div class="gallery-item">
                <img src="${imgUrl}" alt="${venue.name} interior photo ${i + 1}" class="gallery-img" loading="lazy" />
              </div>
            `).join("")}
          </div>
        </section>

        <!-- LOCATION & ACCESS -->
        <section class="venue-info-section">
          <h2 class="venue-info-heading">LOCATION & ACCESS</h2>
          <div style="background:var(--bg-card); border:1px solid var(--border-subtle); padding:1.5rem; border-radius:var(--radius-xs); margin-bottom:1.25rem;">
            <div style="font-weight:600; color:var(--text-primary); font-size:1.05rem; margin-bottom:0.5rem;">
              📍 ${venue.address}
            </div>
            <div style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1rem;">
              🚇 <strong>Transit:</strong> ${venue.transit}
            </div>
            <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-tertiary);">
              Coordinates: ${venue.lat.toFixed(4)}° N, ${venue.lng.toFixed(4)}° E
            </div>
          </div>
        </section>
      </div>

      <!-- RIGHT SIDEBAR COLUMN -->
      <div class="venue-sidebar-column">
        <!-- Essential Venue Specs -->
        <div class="sidebar-card">
          <div class="sidebar-title">OPERATING HOURS</div>
          <div style="font-weight:600; font-size:0.95rem; margin-bottom:0.35rem;">${venue.openingHours}</div>
          <div class="mono-meta" style="color:var(--status-open);">${venue.statusText}</div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-title">DRESS CODE & DOOR POLICY</div>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">${venue.dressCode}</p>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-title">PRICE LEVEL</div>
          <div style="font-family:var(--font-mono); font-size:1.1rem; font-weight:700; color:var(--text-primary); margin-bottom:0.25rem;">
            ${formatPriceLevel(venue.price)}
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary);">${venue.priceRange}</div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-title">SOUND & VIBE PROFILE</div>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1rem;">
            ${venue.music.map(m => `<span class="tag tag-accent">${m}</span>`).join("")}
            ${venue.vibe.map(vb => `<span class="tag">${vb}</span>`).join("")}
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-title">FACILITIES & AMENITIES</div>
          <div class="facility-list">
            ${venue.facilities.map(f => `<span class="tag" style="background:rgba(255,255,255,0.04);">${f}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION: NEARBY TONIGHT -->
    <section class="section" style="background:var(--bg-surface); border-top:1px solid var(--border-subtle); margin-top:3rem;">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="tagline-sub">Continue The Journey</span>
            <h2 class="section-title">NEARBY TONIGHT</h2>
          </div>
          <span class="mono-meta">${venue.area} & Surrounds</span>
        </div>

        <div class="venues-grid" id="venue-nearby-grid">
          <!-- Rendered via JS -->
        </div>
      </div>
    </section>
  `;

  // Attach nearby cards
  const nearbyGrid = container.querySelector("#venue-nearby-grid");
  nearbyVenues.forEach(nv => {
    nearbyGrid.appendChild(renderVenueCard(nv));
  });

  // Attach Add to Night CTA listener
  const addBtn = container.querySelector("#btn-detail-add-night");
  addBtn.addEventListener("click", () => {
    const res = storage.addToActivePlan(venue.id);
    if (res.success) {
      addBtn.classList.add("btn-secondary", "in-plan");
      addBtn.classList.remove("btn-primary");
      container.querySelector("#detail-add-text").textContent = "✓ In Your Night Plan";
      showToast(`Added ${venue.name} to your Night Plan!`, "success");
    } else {
      showToast(res.message, "info");
    }
  });

  // Attach Save Bookmark listener
  const saveBtn = container.querySelector("#btn-detail-save");
  saveBtn.addEventListener("click", () => {
    const saved = storage.toggleSaveVenue(venue.id);
    saveBtn.classList.toggle("active", saved);
    const svg = saveBtn.querySelector("svg");
    if (svg) svg.setAttribute("fill", saved ? "#fff" : "none");
    container.querySelector("#detail-save-text").textContent = saved ? "SAVED TO LIST" : "SAVE VENUE";
    showToast(saved ? `Saved ${venue.name} to bookmarks` : `Removed ${venue.name}`, "info");
  });

  return container;
}
