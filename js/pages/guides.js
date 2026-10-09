// Kuala Lumpur After Dark - Editorial Guides Index Page
import { GUIDES } from "../data/guides.js";

export function renderGuidesPage() {
  const container = document.createElement("div");
  container.className = "page-guides fade-in";

  const featured = GUIDES[0];
  const otherGuides = GUIDES.slice(1);

  container.innerHTML = `
    <div class="container" style="padding-top:4rem; padding-bottom:2rem;">
      <div class="section-title-wrap">
        <span class="tagline-sub">Nocturnal Journalism & Field Notes</span>
        <h1>EDITORIAL GUIDES</h1>
        <p>In-depth roadmaps, subculture essays, and insider chronicles written by Kuala Lumpur music editors and selectors.</p>
      </div>
    </div>

    <div class="container" style="margin-bottom:6rem;">
      <!-- FEATURED COVER STORY HERO -->
      <article class="guide-card-featured" style="margin-bottom:3.5rem;">
        <img src="${featured.heroImage}" alt="${featured.title}" class="guide-card-featured-img" />
        <div class="guide-card-featured-body">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="tag tag-accent">${featured.category}</span>
            <span class="mono-meta">${featured.readingTime}</span>
            <span class="mono-meta" style="color:var(--text-tertiary);">•</span>
            <span class="mono-meta">${featured.date}</span>
          </div>

          <h2 style="font-size:clamp(1.8rem, 3.5vw, 2.8rem); line-height:1.1; margin:0.75rem 0;">
            <a href="#/guide/${featured.slug}">${featured.title}</a>
          </h2>

          <p class="lead" style="color:var(--text-secondary); margin-bottom:1rem;">
            ${featured.subtitle}
          </p>

          <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem;">
            ${featured.excerpt}
          </p>

          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-subtle); padding-top:1.25rem;">
            <div style="font-size:0.85rem;">
              <span style="color:var(--text-primary); font-weight:600;">By ${featured.author}</span>
              <span style="color:var(--text-tertiary); display:block; font-size:0.78rem;">${featured.authorRole}</span>
            </div>
            <a href="#/guide/${featured.slug}" class="btn btn-primary" style="padding:0.6rem 1.4rem; font-size:0.78rem;">
              READ COVER STORY →
            </a>
          </div>
        </div>
      </article>

      <!-- EDITORIAL CURATIONS GRID -->
      <div class="section-header">
        <div>
          <span class="tagline-sub">Curated Dissertations</span>
          <h2 style="font-size:1.8rem;">ESSENTIAL DISPATCHES</h2>
        </div>
        <span class="mono-meta">${otherGuides.length} Curated Stories</span>
      </div>

      <div class="guides-grid">
        ${otherGuides.map(g => `
          <article class="venue-card">
            <div class="venue-card-media" style="aspect-ratio:16/9;">
              <a href="#/guide/${g.slug}">
                <img src="${g.heroImage}" alt="${g.title}" class="venue-card-img" loading="lazy" />
              </a>
              <div class="venue-card-badge-row">
                <span class="tag tag-accent">${g.category}</span>
                <span class="mono-meta" style="background:rgba(0,0,0,0.65); padding:2px 8px; border-radius:3px;">${g.readingTime}</span>
              </div>
            </div>
            <div class="venue-card-content">
              <span class="mono-meta" style="color:var(--text-tertiary); font-size:0.72rem;">${g.date}</span>
              <a href="#/guide/${g.slug}">
                <h3 class="venue-card-title" style="font-size:1.2rem;">${g.title}</h3>
              </a>
              <p class="venue-card-desc">${g.excerpt}</p>
              <div class="venue-card-footer">
                <span class="mono-meta">By ${g.author}</span>
                <a href="#/guide/${g.slug}" class="mono-meta" style="color:var(--accent-light); font-weight:700;">
                  Read Story →
                </a>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  return container;
}
