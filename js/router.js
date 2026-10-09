// Kuala Lumpur After Dark - Client Hash Router
import { renderNavbar, setupNavListeners } from "./components/navbar.js";
import { renderHomePage } from "./pages/home.js";
import { renderExplorePage } from "./pages/explore.js";
import { renderVenueDetailPage } from "./pages/venue-detail.js";
import { renderTonightPage } from "./pages/tonight.js";
import { renderPlannerPage } from "./pages/planner.js";
import { renderMapPage } from "./pages/map.js";
import { renderGuidesPage } from "./pages/guides.js";
import { renderGuideDetailPage } from "./pages/guide-detail.js";
import { renderSavedPage } from "./pages/saved.js";
import { renderAboutPage } from "./pages/about.js";

class Router {
  constructor() {
    this.appEl = null;
    this.navWrapperEl = null;
  }

  init() {
    this.appEl = document.getElementById("app");
    this.navWrapperEl = document.getElementById("nav-wrapper");

    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("DOMContentLoaded", () => this.handleRoute());

    setupNavListeners();
    this.handleRoute();
  }

  parseHash() {
    const rawHash = window.location.hash.slice(1) || "/";
    const [pathWithSlash, queryString] = rawHash.split("?");
    const path = pathWithSlash.replace(/^\/+/, "").replace(/\/+$/, "");

    const params = {};
    if (queryString) {
      new URLSearchParams(queryString).forEach((val, key) => {
        params[key] = val;
      });
    }

    return { path, params };
  }

  handleRoute() {
    const { path, params } = this.parseHash();
    const segments = path.split("/");
    const primaryRoute = segments[0] || "";

    // Update navigation
    if (this.navWrapperEl) {
      const { headerHtml, bottomNavHtml } = renderNavbar(primaryRoute);
      this.navWrapperEl.innerHTML = headerHtml + bottomNavHtml;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });

    // Render corresponding page view
    let viewNode = null;

    if (primaryRoute === "" || primaryRoute === "home") {
      viewNode = renderHomePage();
    } else if (primaryRoute === "explore") {
      viewNode = renderExplorePage(params);
    } else if (primaryRoute === "venue" && segments[1]) {
      viewNode = renderVenueDetailPage(segments[1]);
    } else if (primaryRoute === "tonight") {
      viewNode = renderTonightPage();
    } else if (primaryRoute === "planner") {
      viewNode = renderPlannerPage();
    } else if (primaryRoute === "map") {
      viewNode = renderMapPage(params);
    } else if (primaryRoute === "guides") {
      viewNode = renderGuidesPage();
    } else if (primaryRoute === "guide" && segments[1]) {
      viewNode = renderGuideDetailPage(segments[1]);
    } else if (primaryRoute === "saved") {
      viewNode = renderSavedPage();
    } else if (primaryRoute === "about") {
      viewNode = renderAboutPage();
    } else {
      // 404 Fallback
      viewNode = document.createElement("div");
      viewNode.className = "container section";
      viewNode.innerHTML = `
        <div style="text-align:center; padding:6rem 1rem;">
          <h1 style="font-size:3rem; margin-bottom:1rem;">404</h1>
          <p style="margin-bottom:2rem;">The requested nocturnal route does not exist.</p>
          <a href="#/" class="btn btn-primary">Return to City Center</a>
        </div>
      `;
    }

    if (this.appEl && viewNode) {
      this.appEl.innerHTML = "";
      this.appEl.appendChild(viewNode);
    }
  }
}

export const router = new Router();
