// Kuala Lumpur After Dark - Home Page View
import { VENUES } from "../data/venues.js";
import { GUIDES } from "../data/guides.js";
import { renderVenueCard } from "../components/venue-card.js";
import { getKLCurrentTime } from "../utils/formatters.js";

export function renderHomePage() {
  const container = document.createElement("div");
  container.className = "page-home fade-in";

  // Areas data with custom taglines
  const areas = [
    { name: "TREC", tagline: "Spark mega-club, Face 3, Nono Club & Electric Boulevard" },
    { name: "TRX", tagline: "Lane 23 L-Acoustics electronic club & Market Lane" },
    { name: "Bukit Damansara", tagline: "Plaza Damansara speakeasies (Benang, JungleBird)" },
    { name: "Bukit Bintang", tagline: "Pitt Club superclub, Changkat & Jalan Alor supper" },
    { name: "Chinatown", tagline: "Pre-war heritage speakeasies & underground techno" },
    { name: "KLCC", tagline: "Kyo basement club & high-altitude skyline decks" },
    { name: "Bangsar", tagline: "Telawi prohibition vaults & 24/7 supper rituals" },
    { name: "Changkat", tagline: "The Rabbit Hole, Pisco Bar & indie disco" },
    { name: "Petaling Jaya", tagline: "Analog vinyl kissatens & Japanese highballs" }
  ].map(a => ({
    ...a,
    count: VENUES.filter(v => v.area.toLowerCase() === a.name.toLowerCase()).length
  }));

  // Vibes list
  const vibes = [
    { name: "TECHNO", icon: "⚡" },
    { name: "HOUSE", icon: "✦" },
    { name: "COCKTAILS", icon: "🍸" },
    { name: "ROOFTOP", icon: "🌆" },
    { name: "HIP-HOP", icon: "🎤" },
    { name: "LIVE", icon: "🎷" },
    { name: "LATE NIGHT", icon: "🌙" },
    { name: "UNDERGROUND", icon: "👁️" }
  ].map(v => ({
    ...v,
    count: VENUES.filter(ven => 
      ven.vibe.some(vb => vb.toLowerCase() === v.name.toLowerCase()) ||
      ven.music.some(m => m.toLowerCase() === v.name.toLowerCase())
    ).length
  }));

  container.innerHTML = `
    <!-- HERO SECTION -->
    <section class="home-hero">
      <div class="home-hero-bg">
        <img class="home-hero-bg-img" 
             src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=85" 
             alt="Kuala Lumpur Nightlife Atmosphere" />
        <div class="home-hero-gradient"></div>
      </div>

      <div class="container home-hero-content">
        <div class="hero-live-pill">
          <span class="status-dot"></span>
          <span>LIVE IN KL • ${getKLCurrentTime()} • 28°C CLEAR NIGHT</span>
        </div>

        <h1 class="hero-title">
          KUALA LUMPUR
          <span class="hero-title-accent">AFTER DARK</span>
        </h1>

        <p class="hero-tagline">
          “The city doesn't sleep. Neither should your plans.”
        </p>

        <div class="hero-cta-group">
          <a href="#/tonight" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            EXPLORE TONIGHT
          </a>
          <a href="#/explore" class="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            FIND A PLACE
          </a>
          <a href="#/planner" class="btn btn-ghost" style="color:var(--accent-light);">
            Build Night Plan →
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION: TONIGHT IN KL CURATED STRIP -->
    <div class="tonight-strip">
      <div class="container tonight-strip-inner">
        <div class="tonight-strip-label">
          <span class="status-dot"></span>
          <span>TONIGHT IN KL</span>
        </div>
        <div class="tonight-strip-items">
          <div class="strip-item">
            <span class="strip-time">10:00 PM</span>
            <span class="strip-genre">House / Deep Grooves</span>
            <span class="strip-area">Bukit Bintang</span>
          </div>
          <span style="color:var(--border-medium)">•</span>
          <div class="strip-item">
            <span class="strip-time">12:00 AM</span>
            <span class="strip-genre">Techno (138 BPM)</span>
            <span class="strip-area">TREC & Underground</span>
          </div>
          <span style="color:var(--border-medium)">•</span>
          <div class="strip-item">
            <span class="strip-time">02:30 AM</span>
            <span class="strip-genre">Late Night Wok & Supper</span>
            <span class="strip-area">Chinatown & Bangsar</span>
          </div>
        </div>
        <a href="#/tonight" class="mono-meta" style="color:var(--accent-light); font-weight:700;">VIEW FULL SCHEDULE →</a>
      </div>
    </div>

    <!-- SECTION: TRENDING TONIGHT -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="tagline-sub">Live Recommendations</span>
            <h2 class="section-title">TRENDING TONIGHT</h2>
          </div>
          <a href="#/explore" class="btn btn-ghost">Browse all ${VENUES.length} venues →</a>
        </div>

        <div class="venues-grid" id="home-trending-grid">
          <!-- Venue cards injected via JS -->
        </div>
      </div>
    </section>

    <!-- SECTION: DISCOVER BY AREA -->
    <section class="section" style="background:var(--bg-surface); border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="tagline-sub">Geographic Subcultures</span>
            <h2 class="section-title">DISCOVER BY AREA</h2>
          </div>
          <span class="mono-meta">Greater Kuala Lumpur</span>
        </div>

        <div class="area-grid">
          ${areas.map(a => `
            <div class="area-card" data-area="${a.name}">
              <div>
                <h3 class="area-card-title">${a.name}</h3>
                <p class="area-card-desc">${a.tagline}</p>
              </div>
              <div class="area-card-footer">
                <span class="area-card-count">${a.count} Curated Venues</span>
                <span class="area-card-arrow">→</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- SECTION: EXPLORE BY VIBE -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="tagline-sub">Sound & Atmosphere</span>
            <h2 class="section-title">EXPLORE BY VIBE</h2>
          </div>
          <span class="mono-meta">Filtered Selection</span>
        </div>

        <div class="vibe-grid">
          ${vibes.map(v => `
            <div class="vibe-card" data-vibe="${v.name}">
              <span style="font-size:1.4rem;">${v.icon}</span>
              <span class="vibe-name">${v.name}</span>
              <span class="vibe-count">${v.count} spots</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- SECTION: EDITORIAL GUIDES PREVIEW -->
    <section class="section" style="background:var(--bg-surface); border-top:1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="tagline-sub">Editorial & Field Notes</span>
            <h2 class="section-title">EDITORIAL GUIDES</h2>
          </div>
          <a href="#/guides" class="btn btn-ghost">All Guides →</a>
        </div>

        <!-- Featured Big Story -->
        <div class="guide-card-featured">
          <img src="${GUIDES[0].heroImage}" alt="${GUIDES[0].title}" class="guide-card-featured-img" />
          <div class="guide-card-featured-body">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="tag tag-accent">${GUIDES[0].category}</span>
              <span class="mono-meta">${GUIDES[0].readingTime}</span>
            </div>
            <h3 style="font-size:clamp(1.5rem, 3vw, 2.2rem); margin: 0.5rem 0;">${GUIDES[0].title}</h3>
            <p style="color:var(--text-secondary); line-height:1.6;">${GUIDES[0].excerpt}</p>
            <div style="margin-top:1.5rem;">
              <a href="#/guide/${GUIDES[0].slug}" class="btn btn-secondary">Read Full Story →</a>
            </div>
          </div>
        </div>

        <!-- Secondary Guides Grid -->
        <div class="guides-grid" style="margin-top:2rem;">
          ${GUIDES.slice(1, 4).map(g => `
            <article class="venue-card">
              <div class="venue-card-media" style="aspect-ratio:16/9;">
                <img src="${g.heroImage}" alt="${g.title}" class="venue-card-img" />
                <div class="venue-card-badge-row">
                  <span class="tag tag-accent">${g.category}</span>
                  <span class="mono-meta" style="background:rgba(0,0,0,0.6); padding:2px 6px; border-radius:3px;">${g.readingTime}</span>
                </div>
              </div>
              <div class="venue-card-content">
                <a href="#/guide/${g.slug}">
                  <h3 class="venue-card-title">${g.title}</h3>
                </a>
                <p class="venue-card-desc">${g.subtitle}</p>
                <div class="venue-card-footer">
                  <span class="mono-meta">By ${g.author}</span>
                  <a href="#/guide/${g.slug}" class="mono-meta" style="color:var(--accent-light); font-weight:600;">Read →</a>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;

  // Populate trending cards
  const trendingGrid = container.querySelector("#home-trending-grid");
  // Pick top 6 distinct trending venues
  const trendingVenues = [
    VENUES.find(v => v.id === "lane-23-trx"),
    VENUES.find(v => v.id === "benang-damansara"),
    VENUES.find(v => v.id === "pitt-club-kl"),
    VENUES.find(v => v.id === "spark-club-trec"),
    VENUES.find(v => v.id === "ps150-chinatown"),
    VENUES.find(v => v.id === "iron-fairies-trec")
  ].filter(Boolean);

  trendingVenues.forEach(v => {
    trendingGrid.appendChild(renderVenueCard(v));
  });

  // Attach Area Card click listeners -> redirect to explore with area filter
  container.querySelectorAll(".area-card").forEach(card => {
    card.addEventListener("click", () => {
      const area = card.getAttribute("data-area");
      window.location.hash = `#/explore?area=${encodeURIComponent(area)}`;
    });
  });

  // Attach Vibe Card click listeners -> redirect to explore with vibe filter
  container.querySelectorAll(".vibe-card").forEach(card => {
    card.addEventListener("click", () => {
      const vibe = card.getAttribute("data-vibe");
      window.location.hash = `#/explore?vibe=${encodeURIComponent(vibe)}`;
    });
  });

  return container;
}
