// Kuala Lumpur After Dark - Tonight Real-Time Discovery Page
import { VENUES } from "../data/venues.js";
import { renderVenueCard } from "../components/venue-card.js";
import { getKLCurrentTime } from "../utils/formatters.js";

export function renderTonightPage() {
  const container = document.createElement("div");
  container.className = "page-tonight fade-in";

  // Atmosphere filters
  const atmospheres = ["All", "Good for a first drink", "Crowded", "Low-key", "Dance Floor", "Late night", "Date Night", "Rooftop"];
  let selectedAtmosphere = "All";

  // Partition venues into tonight's time buckets:
  // START HERE: closingHourNumber <= 2 && category is Bars or Rooftops or Live Music
  // AFTER MIDNIGHT: Clubs or high-energy spots closing >= 2:00 AM
  // LATE NIGHT: Spots open till >= 3:30 AM or 24 Hours
  // DONT MISS: Curated top 3 highlights

  container.innerHTML = `
    <div class="container tonight-header">
      <div class="section-title-wrap">
        <span class="tagline-sub">Real-Time Nightlife Feed</span>
        <h1>TONIGHT IN KUALA LUMPUR</h1>
        <p>Curated chronology of the night. From sunset aperitivo to 4:00 AM subterranean techno and supper rituals.</p>
      </div>

      <!-- LIVE TICKER BAR -->
      <div class="tonight-ticker">
        <div class="ticker-item">
          <span class="status-dot"></span>
          <span style="color:var(--text-primary); font-weight:700;">CURRENT TIME:</span>
          <span id="tonight-clock">${getKLCurrentTime()}</span>
        </div>
        <span style="color:var(--border-medium)">|</span>
        <div class="ticker-item">
          <span>WEATHER:</span>
          <span style="color:var(--text-primary);">28°C • Clear Midnight Sky • Humidity 78%</span>
        </div>
        <span style="color:var(--border-medium)">|</span>
        <div class="ticker-item">
          <span>ACTIVE CURATIONS:</span>
          <span style="color:var(--accent-light); font-weight:700;">20 Venues Live</span>
        </div>
      </div>

      <!-- ATMOSPHERE FILTER PILLS -->
      <div style="margin-top:2rem; display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
        <span class="mono-meta" style="color:var(--text-tertiary);">ATMOSPHERE:</span>
        <div class="filter-chips" id="tonight-atmosphere-chips">
          ${atmospheres.map(atm => `
            <button class="filter-chip ${selectedAtmosphere === atm ? 'active' : ''}" data-atm="${atm}">
              ${atm}
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <!-- MAIN TIME-BUCKETED SECTIONS -->
    <div class="container tonight-categories" style="margin-bottom:6rem;">
      <!-- DON'T MISS TONIGHT -->
      <section>
        <div class="section-header">
          <div>
            <span class="tagline-sub" style="color:#f59e0b;">★ Headliner Picks</span>
            <h2>DON'T MISS TONIGHT</h2>
          </div>
          <span class="mono-meta">Curator Special Selection</span>
        </div>
        <div class="venues-grid" id="grid-dont-miss"></div>
      </section>

      <!-- START HERE (6:00 PM - 10:00 PM) -->
      <section>
        <div class="section-header">
          <div>
            <span class="tagline-sub">Phase 1 • 6:00 PM – 10:00 PM</span>
            <h2>START HERE</h2>
            <p style="font-size:0.9rem;">Golden hour skylines, aperitivos, botanical infusions, and warm vinyl listening lounges.</p>
          </div>
          <span class="mono-meta">Pre-Game & Warm-Up</span>
        </div>
        <div class="venues-grid" id="grid-start-here"></div>
      </section>

      <!-- AFTER MIDNIGHT (11:00 PM - 2:00 AM) -->
      <section>
        <div class="section-header">
          <div>
            <span class="tagline-sub">Phase 2 • 11:00 PM – 2:00 AM</span>
            <h2>AFTER MIDNIGHT</h2>
            <p style="font-size:0.9rem;">The city peaks. High-voltage dance floors, heavyweight basslines, and subterranean parties.</p>
          </div>
          <span class="mono-meta">Peak Intensity</span>
        </div>
        <div class="venues-grid" id="grid-after-midnight"></div>
      </section>

      <!-- LATE NIGHT (2:00 AM - DAWN) -->
      <section>
        <div class="section-header">
          <div>
            <span class="tagline-sub">Phase 3 • 2:00 AM – 5:00 AM</span>
            <h2>LATE NIGHT & SUPPER</h2>
            <p style="font-size:0.9rem;">Dark room endurance sessions, neon Chinatown wok noodles, and 24-hr Bangsar cheese naan.</p>
          </div>
          <span class="mono-meta">The Survivors</span>
        </div>
        <div class="venues-grid" id="grid-late-night"></div>
      </section>
    </div>
  `;

  // Render bucketed grids based on filter
  function renderBuckets() {
    const filterAtmosphere = (venueList) => {
      if (selectedAtmosphere === "All") return venueList;
      return venueList.filter(v => 
        v.vibe.some(item => item.toLowerCase() === selectedAtmosphere.toLowerCase()) ||
        v.music.some(item => item.toLowerCase() === selectedAtmosphere.toLowerCase())
      );
    };

    // Don't Miss
    const dontMissVenues = filterAtmosphere([
      VENUES.find(v => v.id === "lane-23-trx"),
      VENUES.find(v => v.id === "benang-damansara"),
      VENUES.find(v => v.id === "spark-club-trec"),
      VENUES.find(v => v.id === "pitt-club-kl"),
      VENUES.find(v => v.id === "over-and-above-chinatown")
    ].filter(Boolean));

    // Start Here (Bars, Lounges, Sunset Rooftops)
    const startHereVenues = filterAtmosphere(
      VENUES.filter(v => ["benang-damansara", "junglebird-damansara", "the-rabbit-hole-changkat", "reggaebar-trec", "the-china-bar-trec", "kuna-trec", "ps150-chinatown", "bar-trigona-four-seasons", "fuego-troika-sky", "mouton-vinyl-petaling-jaya", "concubine-chinatown", "pisco-bar-changkat"].includes(v.id))
    );

    // After Midnight (Clubs, intense dance spots)
    const afterMidnightVenues = filterAtmosphere(
      VENUES.filter(v => ["lane-23-trx", "pitt-club-kl", "spark-club-trec", "kyo-mandarin-oriental", "face3-club-trec", "nonoclub-trec", "404-club-trec", "iron-fairies-trec", "seasons-club-trec", "arte-club-trec", "crush-club-trec", "boomboxx-trec", "wet-deck-w-hotel", "the-vault-bangsar"].includes(v.id))
    );

    // Late Night (After 2 AM / 24 hours)
    const lateNightVenues = filterAtmosphere(
      VENUES.filter(v => ["lane-23-trx", "pitt-club-kl", "spark-club-trec", "face3-club-trec", "nonoclub-trec", "over-and-above-chinatown", "wong-ah-wah-alor", "fatt-choi-supper", "devi-corner-bangsar", "404-club-trec", "reggaebar-trec"].includes(v.id))
    );

    const renderToGrid = (gridId, list) => {
      const g = container.querySelector(gridId);
      if (!g) return;
      g.innerHTML = "";
      if (list.length === 0) {
        g.innerHTML = `<div style="grid-column:1/-1; padding:2rem; text-align:center; color:var(--text-tertiary); font-size:0.9rem;">No venues in this bracket match the "${selectedAtmosphere}" filter.</div>`;
        return;
      }
      list.forEach(v => g.appendChild(renderVenueCard(v)));
    };

    renderToGrid("#grid-dont-miss", dontMissVenues);
    renderToGrid("#grid-start-here", startHereVenues);
    renderToGrid("#grid-after-midnight", afterMidnightVenues);
    renderToGrid("#grid-late-night", lateNightVenues);
  }

  // Bind Atmosphere chips
  container.querySelectorAll("#tonight-atmosphere-chips .filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      container.querySelectorAll("#tonight-atmosphere-chips .filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      selectedAtmosphere = chip.getAttribute("data-atm");
      renderBuckets();
    });
  });

  // Initial render
  renderBuckets();

  // Clock tick on this page
  const clockInterval = setInterval(() => {
    const el = container.querySelector("#tonight-clock");
    if (el) el.textContent = getKLCurrentTime();
    else clearInterval(clockInterval);
  }, 10000);

  return container;
}
