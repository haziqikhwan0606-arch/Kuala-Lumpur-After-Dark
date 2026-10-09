// Kuala Lumpur After Dark - Navigation Header & Mobile Bottom Bar
import { getKLCurrentTime } from "../utils/formatters.js";
import { storage } from "../utils/storage.js";

export function renderNavbar(currentRoute = "") {
  const savedCount = storage.getSavedVenues().length + storage.getSavedGuides().length;

  // Header HTML
  const headerHtml = `
    <header class="site-header" id="site-header">
      <div class="container nav-container">
        <a href="#/" class="brand-logo" aria-label="KL After Dark Home">
          <span class="brand-dot"></span>
          <span>KL AFTER DARK</span>
        </a>

        <nav class="nav-menu" aria-label="Main Navigation">
          <ul class="nav-links">
            <li><a href="#/explore" class="nav-link ${currentRoute === 'explore' ? 'active' : ''}">Explore</a></li>
            <li><a href="#/tonight" class="nav-link ${currentRoute === 'tonight' ? 'active' : ''}">Tonight</a></li>
            <li><a href="#/planner" class="nav-link ${currentRoute === 'planner' ? 'active' : ''}">Planner</a></li>
            <li><a href="#/map" class="nav-link ${currentRoute === 'map' ? 'active' : ''}">Map</a></li>
            <li><a href="#/guides" class="nav-link ${currentRoute === 'guides' ? 'active' : ''}">Guides</a></li>
            <li>
              <a href="#/saved" class="nav-link ${currentRoute === 'saved' ? 'active' : ''}">
                Saved
                <span class="nav-badge" id="header-saved-count">${savedCount}</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="nav-actions">
          <button class="search-trigger" id="btn-open-search" aria-label="Open search dialog">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span>Search</span>
            <kbd class="search-shortcut">⌘K</kbd>
          </button>
          
          <div class="location-indicator" title="Local Time in Kuala Lumpur">
            <span class="status-dot"></span>
            <span id="nav-live-clock">${getKLCurrentTime()}</span>
          </div>
        </div>
      </div>
    </header>
  `;

  // Mobile Bottom Navigation Bar HTML
  const bottomNavHtml = `
    <nav class="mobile-bottom-nav" aria-label="Mobile Navigation">
      <a href="#/" class="bottom-nav-item ${currentRoute === '' ? 'active' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        <span>Home</span>
      </a>
      <a href="#/explore" class="bottom-nav-item ${currentRoute === 'explore' ? 'active' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Explore</span>
      </a>
      <a href="#/tonight" class="bottom-nav-item ${currentRoute === 'tonight' ? 'active' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        <span>Tonight</span>
      </a>
      <a href="#/planner" class="bottom-nav-item ${currentRoute === 'planner' ? 'active' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span>Planner</span>
      </a>
      <a href="#/map" class="bottom-nav-item ${currentRoute === 'map' ? 'active' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
        <span>Map</span>
      </a>
      <a href="#/saved" class="bottom-nav-item ${currentRoute === 'saved' ? 'active' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        <span>Saved</span>
        <span class="bottom-nav-badge" id="bottom-saved-count">${savedCount}</span>
      </a>
    </nav>
  `;

  return { headerHtml, bottomNavHtml };
}

export function setupNavListeners() {
  // Live clock ticker
  setInterval(() => {
    const clockEl = document.getElementById("nav-live-clock");
    if (clockEl) clockEl.textContent = getKLCurrentTime();
  }, 10000);

  // Subscribe to storage changes to update saved badges reactively
  storage.subscribe(() => {
    const count = storage.getSavedVenues().length + storage.getSavedGuides().length;
    const headerBadge = document.getElementById("header-saved-count");
    const bottomBadge = document.getElementById("bottom-saved-count");
    if (headerBadge) headerBadge.textContent = count;
    if (bottomBadge) bottomBadge.textContent = count;
  });

  // Header scroll blur effect
  window.addEventListener("scroll", () => {
    const header = document.getElementById("site-header");
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}
