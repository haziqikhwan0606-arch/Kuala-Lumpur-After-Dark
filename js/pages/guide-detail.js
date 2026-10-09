// Kuala Lumpur After Dark - Guide Detail Article View
import { getGuideById } from "../data/guides.js";
import { getVenueById } from "../data/venues.js";
import { renderVenueCard } from "../components/venue-card.js";
import { storage } from "../utils/storage.js";
import { showToast } from "../components/toast.js";

export function renderGuideDetailPage(slugOrId) {
  const container = document.createElement("div");
  container.className = "page-guide-detail fade-in";

  const guide = getGuideById(slugOrId);

  if (!guide) {
    container.innerHTML = `
      <div class="container section" style="text-align:center; padding: 6rem 1rem;">
        <h1 style="font-size:2rem; margin-bottom:1rem;">Guide Not Found</h1>
        <p style="margin-bottom:2rem;">The requested story could not be found in our editorial archives.</p>
        <a href="#/guides" class="btn btn-primary">Return to Guides</a>
      </div>
    `;
    return container;
  }

  const isSaved = storage.isGuideSaved(guide.id);
  const mentionedVenues = (guide.venuesMentioned || []).map(id => getVenueById(id)).filter(Boolean);

  container.innerHTML = `
    <!-- ARTICLE HEADER -->
    <header class="article-hero">
      <a href="#/guides" class="mono-meta" style="color:var(--text-secondary); display:inline-flex; align-items:center; gap:6px; margin-bottom:1.5rem;">
        ← Back to Guides Archive
      </a>

      <div style="display:flex; justify-content:center; align-items:center; gap:0.75rem; margin-bottom:1rem;">
        <span class="tag tag-accent">${guide.category}</span>
        <span class="mono-meta">${guide.readingTime}</span>
        <span class="mono-meta" style="color:var(--text-tertiary);">•</span>
        <span class="mono-meta">${guide.date}</span>
      </div>

      <h1 style="font-size:clamp(2.2rem, 5vw, 3.8rem); line-height:1.05; margin-bottom:1.25rem;">
        ${guide.title}
      </h1>

      <p class="lead" style="max-width:700px; margin:0 auto 2rem; color:var(--text-secondary);">
        ${guide.subtitle}
      </p>

      <div style="display:flex; justify-content:center; align-items:center; gap:1.5rem; margin-bottom:2.5rem; flex-wrap:wrap;">
        <div style="text-align:left;">
          <div style="font-weight:600; font-size:0.95rem; color:var(--text-primary);">${guide.author}</div>
          <div class="mono-meta" style="font-size:0.75rem;">${guide.authorRole}</div>
        </div>
        <button id="btn-save-guide" class="btn btn-secondary ${isSaved ? 'active' : ''}" style="padding:0.5rem 1rem; font-size:0.78rem;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? '#fff' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
          <span id="guide-save-text">${isSaved ? 'SAVED TO ARCHIVE' : 'BOOKMARK GUIDE'}</span>
        </button>
      </div>

      <!-- MAIN FEATURED IMAGE -->
      <div style="max-width:1100px; margin:0 auto; border-radius:var(--radius-xs); overflow:hidden; border:1px solid var(--border-subtle);">
        <img src="${guide.heroImage}" alt="${guide.title}" style="width:100%; max-height:550px; object-fit:cover;" />
      </div>
    </header>

    <!-- ARTICLE BODY -->
    <article class="article-body">
      <!-- PULL QUOTE -->
      <blockquote class="editorial-quote">
        ${guide.pullQuote}
      </blockquote>

      <!-- SECTIONS -->
      ${guide.sections.map(sec => `
        <section>
          <h2>${sec.heading}</h2>
          <p>${sec.body}</p>
        </section>
      `).join("")}

      <!-- CURATOR'S FIELD TIPS -->
      ${guide.curatorTips ? `
        <div class="curator-box">
          <div class="curator-box-title">⚡ CURATOR FIELD PROTOCOL</div>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.75rem;">
            ${guide.curatorTips.map(tip => `
              <li style="display:flex; gap:0.75rem; font-size:0.95rem; color:var(--text-primary);">
                <span style="color:var(--accent-light);">•</span>
                <span>${tip}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      ` : ""}
    </article>

    <!-- VENUES MENTIONED IN THIS ARTICLE -->
    ${mentionedVenues.length > 0 ? `
      <section class="section" style="background:var(--bg-surface); border-top:1px solid var(--border-subtle);">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="tagline-sub">Field Coordinates</span>
              <h2 class="section-title">VENUES MENTIONED IN THIS STORY</h2>
            </div>
            <span class="mono-meta">${mentionedVenues.length} Direct Links</span>
          </div>

          <div class="venues-grid" id="guide-venues-grid"></div>
        </div>
      </section>
    ` : ""}
  `;

  // Render mentioned venue cards
  const grid = container.querySelector("#guide-venues-grid");
  if (grid) {
    mentionedVenues.forEach(v => {
      grid.appendChild(renderVenueCard(v));
    });
  }

  // Bookmark guide listener
  const saveBtn = container.querySelector("#btn-save-guide");
  saveBtn.addEventListener("click", () => {
    const saved = storage.toggleSaveGuide(guide.id);
    saveBtn.classList.toggle("active", saved);
    const svg = saveBtn.querySelector("svg");
    if (svg) svg.setAttribute("fill", saved ? "#fff" : "none");
    container.querySelector("#guide-save-text").textContent = saved ? "SAVED TO ARCHIVE" : "BOOKMARK GUIDE";
    showToast(saved ? `Saved article to reading list` : `Removed article from reading list`, "info");
  });

  return container;
}
