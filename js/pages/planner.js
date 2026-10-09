// Kuala Lumpur After Dark - Night Planner View (Main UX Feature)
import { storage, CURATED_TEMPLATES } from "../utils/storage.js";
import { getVenueById, VENUES } from "../data/venues.js";
import { showToast } from "../components/toast.js";
import { calculateDistanceKm, estimateDriveMinutes } from "../utils/formatters.js";

export function renderPlannerPage() {
  const container = document.createElement("div");
  container.className = "page-planner fade-in";

  let activePlan = storage.getActivePlan();

  container.innerHTML = `
    <div class="container planner-header">
      <div class="section-title-wrap">
        <span class="tagline-sub">Interactive Itinerary Architect</span>
        <h1>BUILD YOUR NIGHT</h1>
        <p>Curate your nocturnal journey across Kuala Lumpur. Calculate drive times, budget your evening, and share with your crew.</p>
      </div>
    </div>

    <div class="container planner-layout" style="margin-bottom:6rem;">
      <!-- LEFT COLUMN: TIMELINE ITINERARY -->
      <div class="planner-timeline-column">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="tag tag-accent">FRIDAY NIGHT</span>
            <span class="mono-meta" id="planner-stop-count">${activePlan.length} STOPS SCHEDULED</span>
          </div>

          <div style="display:flex; gap:0.5rem;">
            <button id="btn-open-venue-picker" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.78rem;">
              + ADD VENUE
            </button>
            <button id="btn-clear-plan" class="btn btn-ghost" style="padding:0.5rem 0.8rem; font-size:0.75rem; color:var(--text-tertiary);">
              Clear
            </button>
          </div>
        </div>

        <!-- TIMELINE CONTAINER -->
        <div id="planner-timeline-root" class="timeline">
          <!-- Injected via renderTimeline() -->
        </div>
      </div>

      <!-- RIGHT COLUMN: SUMMARY, ACTIONS & TEMPLATES -->
      <div class="planner-sidebar-column">
        <!-- ITINERARY STATS SUMMARY CARD -->
        <div class="planner-summary-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="sidebar-title" style="margin:0;">NIGHT SUMMARY</span>
            <span class="status-dot"></span>
          </div>

          <div class="planner-stat-row">
            <span style="color:var(--text-secondary);">Total Stops</span>
            <span class="planner-stat-val" id="stat-stops">${activePlan.length}</span>
          </div>

          <div class="planner-stat-row">
            <span style="color:var(--text-secondary);">Estimated Transit</span>
            <span class="planner-stat-val" id="stat-transit">0 mins</span>
          </div>

          <div class="planner-stat-row">
            <span style="color:var(--text-secondary);">Estimated Spending</span>
            <span class="planner-stat-val" id="stat-spending" style="color:var(--accent-light);">RM 0</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.75rem; margin-top:0.75rem;">
            <button id="btn-save-plan" class="btn btn-primary" style="width:100%;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              SAVE ITINERARY
            </button>
            <button id="btn-share-plan" class="btn btn-secondary" style="width:100%;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              SHARE / EXPORT NIGHT
            </button>
          </div>
        </div>

        <!-- CURATED TEMPLATES ACCORDION -->
        <div style="margin-top:2rem;">
          <div class="sidebar-title">CURATED STARTER TEMPLATES</div>
          <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:1rem;">
            Short on inspiration? Load one of our hand-crafted nocturnal roadmaps:
          </p>

          <div class="template-list">
            ${CURATED_TEMPLATES.map(tpl => `
              <div class="template-card" data-template-id="${tpl.id}">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:0.25rem;">
                  <h4 style="color:var(--text-primary); font-size:0.95rem;">${tpl.title}</h4>
                  <span class="mono-meta" style="color:var(--accent-light);">${tpl.estimatedTotal}</span>
                </div>
                <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.6rem;">${tpl.description}</p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="mono-meta" style="font-size:0.7rem;">${tpl.area}</span>
                  <span style="font-size:0.75rem; font-weight:700; color:var(--accent-light);">LOAD PLAN →</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL FOR ADDING VENUE -->
    <div id="planner-venue-modal" class="search-modal-backdrop">
      <div class="search-modal" style="max-height:80vh; display:flex; flex-direction:column;">
        <div class="search-input-wrap">
          <h3 style="font-size:1.1rem; text-transform:uppercase;">Select Venue to Add</h3>
          <button id="btn-close-venue-modal" class="btn-ghost" style="padding:4px 8px; font-family:var(--font-mono)">CLOSE</button>
        </div>
        <div style="padding:1rem 1.5rem; border-bottom:1px solid var(--border-subtle);">
          <input type="text" id="picker-search" class="search-input" placeholder="Filter by name, area, music..." style="font-size:0.95rem;" />
        </div>
        <div id="picker-list" style="overflow-y:auto; flex-grow:1; padding:0.5rem 0;">
          <!-- Venue options list -->
        </div>
      </div>
    </div>
  `;

  // Render the timeline stops
  function renderTimeline() {
    activePlan = storage.getActivePlan();
    const root = container.querySelector("#planner-timeline-root");
    const countEl = container.querySelector("#planner-stop-count");
    const statStops = container.querySelector("#stat-stops");
    const statTransit = container.querySelector("#stat-transit");
    const statSpending = container.querySelector("#stat-spending");

    countEl.textContent = `${activePlan.length} STOPS SCHEDULED`;
    statStops.textContent = activePlan.length;

    if (activePlan.length === 0) {
      root.innerHTML = `
        <div style="text-align:center; padding: 4rem 1rem; background:var(--bg-card); border:1px dashed var(--border-medium); border-radius:var(--radius-xs);">
          <div style="font-size:2rem; margin-bottom:1rem;">🌙</div>
          <h3 style="margin-bottom:0.5rem;">Your Night Plan is Empty</h3>
          <p style="font-size:0.9rem; margin-bottom:1.5rem;">Browse venues or load a curated template to start designing your evening.</p>
          <button id="empty-add-btn" class="btn btn-primary">+ Add Your First Venue</button>
        </div>
      `;
      root.querySelector("#empty-add-btn")?.addEventListener("click", openPicker);
      statTransit.textContent = "0 mins";
      statSpending.textContent = "RM 0";
      return;
    }

    let totalTransitMins = 0;
    let totalSpend = 0;
    let html = "";

    activePlan.forEach((stop, index) => {
      const venue = getVenueById(stop.venueId);
      if (!venue) return;

      const stopCost = stop.estimatedCost || 50;
      totalSpend += stopCost;

      // Calculate travel estimate to next stop if not last
      let transitBadge = "";
      if (index < activePlan.length - 1) {
        const nextVenue = getVenueById(activePlan[index + 1].venueId);
        if (nextVenue) {
          const dist = calculateDistanceKm(venue.lat, venue.lng, nextVenue.lat, nextVenue.lng);
          const driveMins = estimateDriveMinutes(dist);
          totalTransitMins += driveMins;
          transitBadge = `
            <div class="timeline-connector-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Grab: ~${driveMins} mins (${dist} km to ${nextVenue.name})</span>
            </div>
          `;
        }
      }

      html += `
        <div class="timeline-item" data-index="${index}">
          <div class="timeline-node">${index + 1}</div>
          <div class="timeline-content">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
              <div>
                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
                  <span class="mono-meta" style="color:var(--accent-light); font-weight:700;">${stop.time}</span>
                  <span class="tag tag-accent">${venue.category}</span>
                  <span class="tag">${venue.area}</span>
                </div>
                <h3 style="font-size:1.25rem; margin:0;"><a href="#/venue/${venue.slug}">${venue.name}</a></h3>
              </div>

              <!-- Reorder & Delete Actions -->
              <div style="display:flex; align-items:center; gap:0.35rem;">
                <button class="btn-icon" data-action="move-up" data-index="${index}" title="Move earlier" ${index === 0 ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''}>
                  ↑
                </button>
                <button class="btn-icon" data-action="move-down" data-index="${index}" title="Move later" ${index === activePlan.length - 1 ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''}>
                  ↓
                </button>
                <button class="btn-icon" data-action="remove-stop" data-id="${stop.id}" title="Remove stop" style="color:#ef4444;">
                  ✕
                </button>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 80px 1fr; gap:1rem; align-items:center;">
              <img src="${venue.heroImage}" alt="${venue.name}" style="width:80px; height:60px; object-fit:cover; border-radius:3px;" />
              <div>
                <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.25rem;">${venue.tagline}</div>
                <div style="display:flex; align-items:center; gap:1rem; font-family:var(--font-mono); font-size:0.78rem; color:var(--text-tertiary);">
                  <span>Est: RM ${stopCost}</span>
                  <span>•</span>
                  <span>Sound: ${venue.music.slice(0, 2).join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ${transitBadge}
      `;
    });

    root.innerHTML = html;
    statTransit.textContent = `${totalTransitMins} mins`;
    statSpending.textContent = `RM ${totalSpend} - ${Math.round(totalSpend * 1.35)}`;

    // Re-bind stop actions
    root.querySelectorAll('[data-action="remove-stop"]').forEach(btn => {
      btn.addEventListener("click", () => {
        const stopId = btn.getAttribute("data-id");
        storage.removeFromActivePlan(stopId);
        showToast("Removed stop from itinerary", "info");
        renderTimeline();
      });
    });

    root.querySelectorAll('[data-action="move-up"]').forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        storage.reorderActivePlan(idx, idx - 1);
        renderTimeline();
      });
    });

    root.querySelectorAll('[data-action="move-down"]').forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        storage.reorderActivePlan(idx, idx + 1);
        renderTimeline();
      });
    });
  }

  // Venue Picker Modal logic
  const modal = container.querySelector("#planner-venue-modal");
  const pickerList = container.querySelector("#picker-list");
  const pickerSearch = container.querySelector("#picker-search");

  function openPicker() {
    modal.classList.add("open");
    renderPickerList("");
    setTimeout(() => pickerSearch.focus(), 50);
  }

  function closePicker() {
    modal.classList.remove("open");
  }

  function renderPickerList(query = "") {
    const q = query.toLowerCase();
    const matches = VENUES.filter(v => 
      !q || v.name.toLowerCase().includes(q) || v.area.toLowerCase().includes(q) || v.category.toLowerCase().includes(q)
    );

    pickerList.innerHTML = matches.map(v => {
      const inPlan = activePlan.some(s => s.venueId === v.id);
      return `
        <div class="search-result-item" data-picker-venue="${v.id}">
          <div class="search-result-left">
            <img src="${v.heroImage}" alt="${v.name}" class="search-result-thumb" />
            <div>
              <div class="search-result-title">${v.name}</div>
              <div class="search-result-sub">${v.area} • ${v.category} • ${v.price}</div>
            </div>
          </div>
          <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem;" ${inPlan ? 'disabled style="opacity:0.5;"' : ''}>
            ${inPlan ? 'In Plan' : '+ Add'}
          </button>
        </div>
      `;
    }).join("");

    pickerList.querySelectorAll("[data-picker-venue]").forEach(row => {
      row.addEventListener("click", () => {
        const vId = row.getAttribute("data-picker-venue");
        const res = storage.addToActivePlan(vId);
        if (res.success) {
          showToast(`Added to Night Plan!`, "success");
          closePicker();
          renderTimeline();
        } else {
          showToast(res.message, "info");
        }
      });
    });
  }

  pickerSearch.addEventListener("input", (e) => {
    renderPickerList(e.target.value.trim());
  });

  container.querySelector("#btn-open-venue-picker").addEventListener("click", openPicker);
  container.querySelector("#btn-close-venue-modal").addEventListener("click", closePicker);
  container.querySelector("#btn-clear-plan").addEventListener("click", () => {
    if (confirm("Clear all stops from your night plan?")) {
      storage.clearActivePlan();
      renderTimeline();
      showToast("Night plan cleared", "info");
    }
  });

  // Curated template card click listeners
  container.querySelectorAll(".template-card").forEach(card => {
    card.addEventListener("click", () => {
      const tId = card.getAttribute("data-template-id");
      const loaded = storage.loadTemplate(tId);
      if (loaded) {
        showToast(`Loaded "${loaded.title}" itinerary!`, "success");
        renderTimeline();
      }
    });
  });

  // Save Plan action
  container.querySelector("#btn-save-plan").addEventListener("click", () => {
    const res = storage.saveCurrentPlanAs();
    if (res.success) {
      showToast(`Itinerary saved to your "Saved" vault!`, "success");
    } else {
      showToast(res.message, "info");
    }
  });

  // Share / Export action
  container.querySelector("#btn-share-plan").addEventListener("click", () => {
    const stops = storage.getActivePlan();
    if (!stops.length) {
      showToast("Cannot export an empty night plan", "info");
      return;
    }
    const lines = ["🌙 KUALA LUMPUR AFTER DARK - MY NIGHT PLAN", ""];
    stops.forEach((s, i) => {
      const v = getVenueById(s.venueId);
      lines.push(`Stop ${i + 1} (${s.time}): ${v ? v.name : s.venueId} [${v ? v.area : ''}]`);
    });
    lines.push("");
    lines.push("Curated via Kuala Lumpur After Dark");
    navigator.clipboard?.writeText(lines.join("\n")).then(() => {
      showToast("Itinerary copied to clipboard! Ready to send to friends.", "success");
    }).catch(() => {
      showToast("Itinerary ready for export!", "info");
    });
  });

  // Initial timeline render
  renderTimeline();

  return container;
}
