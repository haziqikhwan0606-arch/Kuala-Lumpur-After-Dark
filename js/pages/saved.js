// Kuala Lumpur After Dark - Saved & Bookmarks View
import { storage } from "../utils/storage.js";
import { getVenueById } from "../data/venues.js";
import { getGuideById } from "../data/guides.js";
import { renderVenueCard } from "../components/venue-card.js";
import { showToast } from "../components/toast.js";

export function renderSavedPage() {
  const container = document.createElement("div");
  container.className = "page-saved fade-in";

  let activeTab = "venues"; // "venues" | "guides" | "nights"

  container.innerHTML = `
    <div class="container" style="padding-top:4rem; padding-bottom:2rem;">
      <div class="section-title-wrap">
        <span class="tagline-sub">Personal Vault</span>
        <h1>YOUR SAVED COLLECTION</h1>
        <p>Curated venues, bookmarked dispatches, and customized nocturnal itineraries stored locally on your device.</p>
      </div>

      <!-- SAVED TABS -->
      <div class="saved-tabs" style="margin-top:2.5rem;">
        <button class="saved-tab-btn active" data-tab="venues">SAVED VENUES (<span id="saved-venues-count">0</span>)</button>
        <button class="saved-tab-btn" data-tab="guides">BOOKMARKED GUIDES (<span id="saved-guides-count">0</span>)</button>
        <button class="saved-tab-btn" data-tab="nights">MY NIGHT PLANS (<span id="saved-nights-count">0</span>)</button>
      </div>

      <!-- TAB CONTENT VIEWPORT -->
      <div id="saved-content-viewport" style="margin-bottom:6rem;">
        <!-- Injected via renderTabContent() -->
      </div>
    </div>
  `;

  function renderTabContent() {
    const viewport = container.querySelector("#saved-content-viewport");
    const savedVenuesIds = storage.getSavedVenues();
    const savedGuidesIds = storage.getSavedGuides();
    const savedPlansList = storage.getSavedPlans();

    container.querySelector("#saved-venues-count").textContent = savedVenuesIds.length;
    container.querySelector("#saved-guides-count").textContent = savedGuidesIds.length;
    container.querySelector("#saved-nights-count").textContent = savedPlansList.length;

    if (activeTab === "venues") {
      const venues = savedVenuesIds.map(id => getVenueById(id)).filter(Boolean);
      if (venues.length === 0) {
        viewport.innerHTML = `
          <div class="empty-state">
            <div style="font-size:2.5rem; margin-bottom:1rem;">🔖</div>
            <h3 class="empty-state-title">Nothing saved yet.</h3>
            <p style="margin-bottom:1.5rem;">Your next night starts here. Bookmark your favorite cocktail haunts, underground basements, and late-night supper spots.</p>
            <a href="#/explore" class="btn btn-primary">Discover Venues</a>
          </div>
        `;
      } else {
        viewport.innerHTML = `<div class="venues-grid" id="saved-venues-grid"></div>`;
        const grid = viewport.querySelector("#saved-venues-grid");
        venues.forEach(v => grid.appendChild(renderVenueCard(v)));
      }
    } else if (activeTab === "guides") {
      const guides = savedGuidesIds.map(id => getGuideById(id)).filter(Boolean);
      if (guides.length === 0) {
        viewport.innerHTML = `
          <div class="empty-state">
            <div style="font-size:2.5rem; margin-bottom:1rem;">📖</div>
            <h3 class="empty-state-title">No guides bookmarked.</h3>
            <p style="margin-bottom:1.5rem;">Explore our editorial series covering house music, techno subcultures, and Chinatown cocktails.</p>
            <a href="#/guides" class="btn btn-primary">Read Editorial Guides</a>
          </div>
        `;
      } else {
        viewport.innerHTML = `
          <div class="guides-grid">
            ${guides.map(g => `
              <article class="venue-card">
                <div class="venue-card-media" style="aspect-ratio:16/9;">
                  <a href="#/guide/${g.slug}">
                    <img src="${g.heroImage}" alt="${g.title}" class="venue-card-img" />
                  </a>
                  <div class="venue-card-badge-row">
                    <span class="tag tag-accent">${g.category}</span>
                    <button class="venue-card-bookmark-btn saved" data-action="remove-saved-guide" data-id="${g.id}">
                      ✕
                    </button>
                  </div>
                </div>
                <div class="venue-card-content">
                  <a href="#/guide/${g.slug}">
                    <h3 class="venue-card-title">${g.title}</h3>
                  </a>
                  <p class="venue-card-desc">${g.subtitle}</p>
                  <div class="venue-card-footer">
                    <span class="mono-meta">By ${g.author}</span>
                    <a href="#/guide/${g.slug}" class="mono-meta" style="color:var(--accent-light); font-weight:700;">Read →</a>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        `;

        viewport.querySelectorAll('[data-action="remove-saved-guide"]').forEach(btn => {
          btn.addEventListener("click", () => {
            const gId = btn.getAttribute("data-id");
            storage.toggleSaveGuide(gId);
            showToast("Removed from reading list", "info");
            renderTabContent();
          });
        });
      }
    } else if (activeTab === "nights") {
      if (savedPlansList.length === 0) {
        viewport.innerHTML = `
          <div class="empty-state">
            <div style="font-size:2.5rem; margin-bottom:1rem;">🗺️</div>
            <h3 class="empty-state-title">No saved itineraries.</h3>
            <p style="margin-bottom:1.5rem;">Build your night plan with stops, transit calculations, and budget estimates, then save it here.</p>
            <a href="#/planner" class="btn btn-primary">Open Night Planner</a>
          </div>
        `;
      } else {
        viewport.innerHTML = `
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(340px, 1fr)); gap:1.5rem;">
            ${savedPlansList.map(plan => `
              <div class="sidebar-card" style="display:flex; flex-direction:column; justify-content:space-between; min-height:180px;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
                    <h3 style="font-size:1.15rem; margin:0;">${plan.title}</h3>
                    <span class="mono-meta" style="color:var(--accent-light);">${plan.totalEst || ''}</span>
                  </div>
                  <div class="mono-meta" style="color:var(--text-tertiary); margin-bottom:0.75rem;">
                    ${plan.date} • ${plan.stopsCount} stops scheduled
                  </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-subtle); padding-top:1rem; margin-top:1rem;">
                  <button class="btn btn-primary" style="padding:0.45rem 0.9rem; font-size:0.75rem;" data-action="load-plan" data-id="${plan.id}">
                    LOAD INTO PLANNER →
                  </button>
                  <button class="btn-ghost" style="color:#ef4444; font-size:0.8rem; font-family:var(--font-mono);" data-action="delete-plan" data-id="${plan.id}">
                    Delete
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        `;

        viewport.querySelectorAll('[data-action="load-plan"]').forEach(btn => {
          btn.addEventListener("click", () => {
            const pId = btn.getAttribute("data-id");
            const target = savedPlansList.find(p => p.id === pId);
            if (target && target.stops) {
              storage.saveActivePlan(target.stops);
              showToast(`Loaded "${target.title}" into Planner!`, "success");
              window.location.hash = "#/planner";
            }
          });
        });

        viewport.querySelectorAll('[data-action="delete-plan"]').forEach(btn => {
          btn.addEventListener("click", () => {
            const pId = btn.getAttribute("data-id");
            storage.deleteSavedPlan(pId);
            showToast("Itinerary deleted", "info");
            renderTabContent();
          });
        });
      }
    }
  }

  // Tab switching
  container.querySelectorAll(".saved-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".saved-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTab = btn.getAttribute("data-tab");
      renderTabContent();
    });
  });

  renderTabContent();
  return container;
}
