// Kuala Lumpur After Dark - Explore Discovery Page
import { VENUES } from "../data/venues.js";
import { renderVenueCard } from "../components/venue-card.js";

export function renderExplorePage(params = {}) {
  const container = document.createElement("div");
  container.className = "page-explore fade-in";

  // Available filter options
  const categories = ["All", "Clubs", "Bars", "Lounges", "Live Music", "Rooftops", "Late Night"];
  const areas = ["All", "TREC", "Bukit Bintang", "Chinatown", "Bukit Damansara", "KLCC", "Bangsar", "TRX", "Changkat", "TTDI", "Petaling Jaya"];
  const vibes = ["All", "House", "Techno", "R&B", "Hip-Hop", "Live", "Rooftop", "Cocktails", "Late Night", "Underground"];
  const prices = ["All", "$", "$$", "$$$", "$$$$"];

  // State from URL parameters or defaults
  let state = {
    search: params.q || "",
    category: params.category || "All",
    area: params.area || "All",
    vibe: params.vibe || "All",
    price: params.price || "All",
    openNowOnly: params.openNow === "true"
  };

  container.innerHTML = `
    <div class="container explore-header">
      <div class="section-title-wrap">
        <span class="tagline-sub">Directory & Curated Discovery</span>
        <h1>EXPLORE KUALA LUMPUR</h1>
        <p>Filtered nightlife destinations across the capital. Zero filler, strictly curated.</p>
      </div>

      <!-- SEARCH INPUT -->
      <div class="explore-search-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="text" id="explore-search-input" class="explore-search-input" 
               placeholder="What are you looking for tonight? (e.g. speakeasy, techno, rooftop, jazz...)" 
               value="${state.search}" />
        ${state.search ? `<button id="clear-search-btn" class="btn-ghost" style="font-size:0.8rem;">Clear</button>` : ""}
      </div>
    </div>

    <!-- MAIN FILTER BAR -->
    <div class="container">
      <div class="filter-bar">
        <!-- Categories Chips -->
        <div class="filter-row">
          <span class="filter-label">CATEGORY</span>
          <div class="filter-chips" id="filter-categories">
            ${categories.map(c => `
              <button class="filter-chip ${state.category === c ? 'active' : ''}" data-type="category" data-val="${c}">
                ${c}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Areas Chips -->
        <div class="filter-row">
          <span class="filter-label">AREA</span>
          <div class="filter-chips" id="filter-areas">
            ${areas.map(a => `
              <button class="filter-chip ${state.area === a ? 'active' : ''}" data-type="area" data-val="${a}">
                ${a}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Vibe & Sound Chips -->
        <div class="filter-row">
          <span class="filter-label">VIBE</span>
          <div class="filter-chips" id="filter-vibes">
            ${vibes.map(v => `
              <button class="filter-chip ${state.vibe === v ? 'active' : ''}" data-type="vibe" data-val="${v}">
                ${v}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Price & Status Row -->
        <div class="filter-row" style="justify-content: space-between;">
          <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
            <span class="filter-label">PRICE</span>
            <div class="filter-chips" id="filter-prices">
              ${prices.map(p => `
                <button class="filter-chip ${state.price === p ? 'active' : ''}" data-type="price" data-val="${p}">
                  ${p}
                </button>
              `).join("")}
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:1rem;">
            <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer; font-size:0.85rem; font-family:var(--font-mono); color:var(--text-secondary);">
              <input type="checkbox" id="filter-opennow" ${state.openNowOnly ? 'checked' : ''} style="accent-color:var(--accent);" />
              <span class="status-dot"></span>
              <span>Open Now Only</span>
            </label>
            <button id="btn-reset-filters" class="btn-ghost" style="font-size:0.75rem; font-family:var(--font-mono); color:var(--accent-light);">
              Reset All
            </button>
          </div>
        </div>
      </div>

      <!-- RESULTS META BAR -->
      <div class="results-meta-bar">
        <div>
          Showing <span id="results-count" style="color:var(--text-primary); font-weight:700;">20</span> venues
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span>SORT BY:</span>
          <select id="sort-select" style="background:var(--bg-surface); border:1px solid var(--border-subtle); color:var(--text-primary); padding:3px 8px; border-radius:3px;">
            <option value="featured">Featured / Curated</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      <!-- RESULTS GRID -->
      <div class="venues-grid" id="explore-results-grid" style="margin-bottom: 5rem;">
        <!-- Injected via applyFilters() -->
      </div>
    </div>
  `;

  // Filter application logic
  function applyFilters() {
    const grid = container.querySelector("#explore-results-grid");
    const countEl = container.querySelector("#results-count");
    if (!grid) return;

    let filtered = VENUES.filter(v => {
      // Search text
      if (state.search) {
        const q = state.search.toLowerCase();
        const matchSearch =
          v.name.toLowerCase().includes(q) ||
          v.area.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q) ||
          v.music.some(m => m.toLowerCase().includes(q)) ||
          v.vibe.some(vb => vb.toLowerCase().includes(q)) ||
          v.description.toLowerCase().includes(q);
        if (!matchSearch) return false;
      }

      // Category
      if (state.category !== "All" && v.category.toLowerCase() !== state.category.toLowerCase()) {
        return false;
      }

      // Area
      if (state.area !== "All" && v.area.toLowerCase() !== state.area.toLowerCase()) {
        return false;
      }

      // Vibe / Music
      if (state.vibe !== "All") {
        const hasVibe = v.vibe.some(item => item.toLowerCase() === state.vibe.toLowerCase()) ||
                        v.music.some(item => item.toLowerCase() === state.vibe.toLowerCase());
        if (!hasVibe) return false;
      }

      // Price
      if (state.price !== "All" && v.price !== state.price) {
        return false;
      }

      // Open now
      if (state.openNowOnly && !v.isOpenNow) {
        return false;
      }

      return true;
    });

    // Sorting
    const sortVal = container.querySelector("#sort-select")?.value || "featured";
    if (sortVal === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortVal === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Render results
    countEl.textContent = filtered.length;
    grid.innerHTML = "";

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 5rem 1rem; color:var(--text-secondary);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌙</div>
          <h3 style="margin-bottom:0.5rem; color:var(--text-primary);">No venues match these filters</h3>
          <p style="font-size:0.95rem;">Try relaxing your search criteria or resetting filters.</p>
          <button id="empty-reset-btn" class="btn btn-secondary" style="margin-top:1.5rem;">Reset All Filters</button>
        </div>
      `;
      grid.querySelector("#empty-reset-btn")?.addEventListener("click", resetFilters);
      return;
    }

    filtered.forEach(v => {
      grid.appendChild(renderVenueCard(v));
    });
  }

  function resetFilters() {
    state = { search: "", category: "All", area: "All", vibe: "All", price: "All", openNowOnly: false };
    container.querySelectorAll(".filter-chip").forEach(chip => {
      chip.classList.toggle("active", chip.getAttribute("data-val") === "All");
    });
    const searchInp = container.querySelector("#explore-search-input");
    if (searchInp) searchInp.value = "";
    const openNowInp = container.querySelector("#filter-opennow");
    if (openNowInp) openNowInp.checked = false;
    applyFilters();
  }

  // Bind Events
  container.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (chip) {
      const type = chip.getAttribute("data-type");
      const val = chip.getAttribute("data-val");
      state[type] = val;

      // Update chip active classes within that filter group
      chip.parentElement.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      applyFilters();
    }
  });

  const searchInput = container.querySelector("#explore-search-input");
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value.trim();
    applyFilters();
  });

  const openNowCheckbox = container.querySelector("#filter-opennow");
  openNowCheckbox.addEventListener("change", (e) => {
    state.openNowOnly = e.target.checked;
    applyFilters();
  });

  const sortSelect = container.querySelector("#sort-select");
  sortSelect.addEventListener("change", applyFilters);

  container.querySelector("#btn-reset-filters")?.addEventListener("click", resetFilters);
  container.querySelector("#clear-search-btn")?.addEventListener("click", () => {
    searchInput.value = "";
    state.search = "";
    applyFilters();
  });

  // Initial trigger
  applyFilters();

  return container;
}
