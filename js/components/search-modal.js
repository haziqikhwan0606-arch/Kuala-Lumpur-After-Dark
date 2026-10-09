// Kuala Lumpur After Dark - Global Search Modal
import { VENUES } from "../data/venues.js";
import { GUIDES } from "../data/guides.js";

let modalBackdrop = null;
let searchInput = null;
let resultsContainer = null;

export function initSearchModal() {
  if (document.getElementById("search-modal-backdrop")) return;

  modalBackdrop = document.createElement("div");
  modalBackdrop.id = "search-modal-backdrop";
  modalBackdrop.className = "search-modal-backdrop";
  modalBackdrop.setAttribute("role", "dialog");
  modalBackdrop.setAttribute("aria-modal", "true");
  modalBackdrop.setAttribute("aria-label", "Global Search");

  modalBackdrop.innerHTML = `
    <div class="search-modal">
      <div class="search-input-wrap">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="text" id="global-search-input" class="search-input" 
               placeholder="Search venues, music (Techno, House, R&B), areas, or guides..." 
               autocomplete="off" />
        <button id="close-search-btn" class="btn-ghost" style="padding:4px 8px; font-size:0.8rem; font-family:var(--font-mono)">ESC</button>
      </div>
      <div class="search-results" id="search-modal-results">
        <div style="padding: 2rem 1.5rem; text-align:center; color: var(--text-tertiary); font-size:0.9rem;">
          Type anything to discover venues, midnight vibes, or editorial stories...
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);

  searchInput = document.getElementById("global-search-input");
  resultsContainer = document.getElementById("search-modal-results");

  // Event Listeners
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeSearch();
  });

  document.getElementById("close-search-btn").addEventListener("click", closeSearch);

  searchInput.addEventListener("input", (e) => {
    handleSearchQuery(e.target.value.trim());
  });

  // Global Keyboard listener: Cmd+K / Ctrl+K / /
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    } else if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeSearch();
    }
  });

  // Document delegated click for open search trigger
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("#btn-open-search");
    if (trigger) {
      e.preventDefault();
      openSearch();
    }
  });
}

export function openSearch(prefill = "") {
  if (!modalBackdrop) initSearchModal();
  modalBackdrop.classList.add("open");
  if (prefill) {
    searchInput.value = prefill;
    handleSearchQuery(prefill);
  } else {
    searchInput.value = "";
    resultsContainer.innerHTML = `
      <div style="padding: 1.5rem; text-align:center; color: var(--text-tertiary); font-size:0.9rem;">
        Popular searches: 
        <a href="#/explore?vibe=Techno" style="color:var(--accent-light); margin:0 4px;" onclick="document.getElementById('search-modal-backdrop').classList.remove('open')">Techno</a> • 
        <a href="#/explore?vibe=Rooftop" style="color:var(--accent-light); margin:0 4px;" onclick="document.getElementById('search-modal-backdrop').classList.remove('open')">Rooftops</a> • 
        <a href="#/explore?area=Chinatown" style="color:var(--accent-light); margin:0 4px;" onclick="document.getElementById('search-modal-backdrop').classList.remove('open')">Chinatown</a> • 
        <a href="#/explore?category=Late%20Night" style="color:var(--accent-light); margin:0 4px;" onclick="document.getElementById('search-modal-backdrop').classList.remove('open')">Late Night</a>
      </div>
    `;
  }
  setTimeout(() => searchInput.focus(), 50);
}

export function closeSearch() {
  if (modalBackdrop) modalBackdrop.classList.remove("open");
}

function handleSearchQuery(query) {
  if (!query || query.length < 2) {
    resultsContainer.innerHTML = `
      <div style="padding: 2rem 1.5rem; text-align:center; color: var(--text-tertiary); font-size:0.9rem;">
        Type at least 2 characters to search KL After Dark...
      </div>
    `;
    return;
  }

  const q = query.toLowerCase();

  // Search venues
  const matchedVenues = VENUES.filter(v => 
    v.name.toLowerCase().includes(q) ||
    v.area.toLowerCase().includes(q) ||
    v.category.toLowerCase().includes(q) ||
    v.music.some(m => m.toLowerCase().includes(q)) ||
    v.vibe.some(vb => vb.toLowerCase().includes(q)) ||
    v.description.toLowerCase().includes(q)
  );

  // Search guides
  const matchedGuides = GUIDES.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.category.toLowerCase().includes(q) ||
    g.excerpt.toLowerCase().includes(q)
  );

  if (matchedVenues.length === 0 && matchedGuides.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 2.5rem 1.5rem; text-align:center; color: var(--text-secondary); font-size:0.95rem;">
        No results found for “<span style="color:var(--text-primary)">${query}</span>”.<br/>
        <span style="font-size:0.82rem; color:var(--text-tertiary)">Try searching for 'Bukit Bintang', 'Techno', 'Cocktails', or 'Late Night'.</span>
      </div>
    `;
    return;
  }

  let html = "";

  // Venues category
  if (matchedVenues.length > 0) {
    html += `<div class="search-group-title">Venues (${matchedVenues.length})</div>`;
    matchedVenues.slice(0, 6).forEach(v => {
      html += `
        <a href="#/venue/${v.slug}" class="search-result-item" onclick="document.getElementById('search-modal-backdrop').classList.remove('open')">
          <div class="search-result-left">
            <img src="${v.heroImage}" alt="${v.name}" class="search-result-thumb" />
            <div>
              <div class="search-result-title">${v.name}</div>
              <div class="search-result-sub">${v.area} • ${v.music.join(", ")} • ${v.price}</div>
            </div>
          </div>
          <span class="tag tag-accent">${v.category}</span>
        </a>
      `;
    });
  }

  // Editorial Guides category
  if (matchedGuides.length > 0) {
    html += `<div class="search-group-title" style="margin-top:1rem;">Editorial Guides (${matchedGuides.length})</div>`;
    matchedGuides.slice(0, 4).forEach(g => {
      html += `
        <a href="#/guide/${g.slug}" class="search-result-item" onclick="document.getElementById('search-modal-backdrop').classList.remove('open')">
          <div class="search-result-left">
            <img src="${g.heroImage}" alt="${g.title}" class="search-result-thumb" />
            <div>
              <div class="search-result-title">${g.title}</div>
              <div class="search-result-sub">${g.category} • ${g.readingTime}</div>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      `;
    });
  }

  resultsContainer.innerHTML = html;
}
