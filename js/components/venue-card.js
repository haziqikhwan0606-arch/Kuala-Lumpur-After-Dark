// Kuala Lumpur After Dark - Reusable Venue Card Component
import { storage } from "../utils/storage.js";
import { showToast } from "./toast.js";

export function renderVenueCard(venue) {
  const isSaved = storage.isVenueSaved(venue.id);
  const activePlan = storage.getActivePlan();
  const inPlan = activePlan.some(stop => stop.venueId === venue.id);

  const card = document.createElement("article");
  card.className = "venue-card";
  card.setAttribute("data-venue-id", venue.id);

  card.innerHTML = `
    <div class="venue-card-media">
      <a href="#/venue/${venue.slug}" aria-label="View ${venue.name}">
        <img class="venue-card-img" src="${venue.heroImage}" alt="${venue.name} in ${venue.area}" loading="lazy" />
      </a>
      <div class="venue-card-badge-row">
        <span class="tag tag-status-open">
          <span class="status-dot"></span>
          ${venue.isOpenNow ? "Open Now" : "Opens Tonight"}
        </span>
        <button class="venue-card-bookmark-btn ${isSaved ? 'saved' : ''}" 
                aria-label="${isSaved ? 'Remove from saved' : 'Save venue'}"
                data-action="toggle-save" 
                data-id="${venue.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? '#fff' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="venue-card-content">
      <div class="venue-card-header">
        <a href="#/venue/${venue.slug}">
          <h3 class="venue-card-title">${venue.name}</h3>
        </a>
        <span class="venue-card-price">${venue.price}</span>
      </div>
      <div class="venue-card-meta">
        <span class="venue-card-area">${venue.area}</span>
        <span class="venue-card-dot"></span>
        <span>${venue.music.slice(0, 2).join(" / ")}</span>
      </div>
      <p class="venue-card-desc">${venue.tagline}</p>
      <div class="venue-card-footer">
        <div class="venue-card-status">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>${venue.statusText}</span>
        </div>
        <div class="venue-card-actions">
          <button class="btn-add-night ${inPlan ? 'in-plan' : ''}" 
                  data-action="add-to-plan" 
                  data-id="${venue.id}">
            ${inPlan ? '✓ In Night' : '+ Add to Night'}
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach card interaction listeners
  const bookmarkBtn = card.querySelector('[data-action="toggle-save"]');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const saved = storage.toggleSaveVenue(venue.id);
      bookmarkBtn.classList.toggle("saved", saved);
      const svgPath = bookmarkBtn.querySelector("svg");
      if (svgPath) svgPath.setAttribute("fill", saved ? "#fff" : "none");
      showToast(saved ? `Saved ${venue.name} to bookmarks` : `Removed ${venue.name}`, "info");
    });
  }

  const addPlanBtn = card.querySelector('[data-action="add-to-plan"]');
  if (addPlanBtn) {
    addPlanBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const result = storage.addToActivePlan(venue.id);
      if (result.success) {
        addPlanBtn.classList.add("in-plan");
        addPlanBtn.textContent = "✓ In Night";
        showToast(`Added ${venue.name} to your Night Plan!`, "success");
      } else {
        showToast(result.message, "info");
      }
    });
  }

  return card;
}
