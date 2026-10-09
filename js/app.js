// Kuala Lumpur After Dark - Main Application Bootstrapper
import { router } from "./router.js";
import { initToast } from "./components/toast.js";
import { initSearchModal } from "./components/search-modal.js";

function renderGlobalFooter() {
  const footerEl = document.getElementById("footer-wrapper");
  if (!footerEl) return;

  footerEl.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="brand-logo" style="margin-bottom:0.25rem;">
            <span class="brand-dot"></span>
            <span>KUALA LUMPUR AFTER DARK</span>
          </div>
          <p style="font-size:0.9rem; max-width:360px; color:var(--text-secondary); line-height:1.6;">
            “The city doesn't sleep. Neither should your plans.”
            Curated nocturnal discovery platform for Kuala Lumpur’s underground and skyline cultures.
          </p>
          <div class="mono-meta" style="color:var(--text-tertiary); margin-top:0.5rem;">
            MYT (UTC+8) • KUALA LUMPUR, MALAYSIA
          </div>
        </div>

        <div>
          <div class="footer-col-title">NAVIGATION</div>
          <ul class="footer-list">
            <li><a href="#/explore" class="footer-link">All 20 Venues</a></li>
            <li><a href="#/tonight" class="footer-link">Tonight Real-Time</a></li>
            <li><a href="#/planner" class="footer-link">Night Planner</a></li>
            <li><a href="#/map" class="footer-link">Interactive Map</a></li>
            <li><a href="#/guides" class="footer-link">Editorial Guides</a></li>
            <li><a href="#/saved" class="footer-link">Personal Vault</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">NEIGHBORHOODS</div>
          <ul class="footer-list">
            <li><a href="#/explore?area=Bukit%20Bintang" class="footer-link">Bukit Bintang</a></li>
            <li><a href="#/explore?area=Chinatown" class="footer-link">Chinatown / Petaling</a></li>
            <li><a href="#/explore?area=TREC" class="footer-link">TREC & Electric Blvd</a></li>
            <li><a href="#/explore?area=KLCC" class="footer-link">KLCC & Ampang</a></li>
            <li><a href="#/explore?area=Bangsar" class="footer-link">Bangsar Telawi</a></li>
            <li><a href="#/explore?area=TRX" class="footer-link">The Exchange TRX</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">CURATION & LEGAL</div>
          <ul class="footer-list">
            <li><a href="#/about" class="footer-link">Nocturnal Manifesto</a></li>
            <li><a href="#/about" class="footer-link">Editorial Independence</a></li>
            <li><a href="#/about" class="footer-link">Submit a Venue</a></li>
            <li><a href="#/about" class="footer-link">Curator Protocol</a></li>
            <li><span class="footer-link" style="color:var(--text-tertiary);">Door Discretion Applies</span></li>
          </ul>
        </div>
      </div>

      <div class="container footer-bottom">
        <div>
          © 2026 KUALA LUMPUR AFTER DARK. INDEPENDENT NIGHTLIFE INTELLIGENCE.
        </div>
        <div style="display:flex; gap:1.5rem;">
          <span>Sound Over Sparklers</span>
          <span>•</span>
          <span>Respect The Floor</span>
        </div>
      </div>
    </footer>
  `;
}

// Global initialization on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initToast();
  initSearchModal();
  renderGlobalFooter();
  router.init();
});
