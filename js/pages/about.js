// Kuala Lumpur After Dark - About & Manifesto Page

export function renderAboutPage() {
  const container = document.createElement("div");
  container.className = "page-about fade-in";

  container.innerHTML = `
    <div class="container" style="max-width:900px; padding-top:4rem; padding-bottom:6rem;">
      <div class="section-title-wrap" style="text-align:center; margin-bottom:3rem;">
        <span class="tagline-sub">The Nocturnal Manifesto</span>
        <h1 style="font-size:clamp(2.5rem, 5.5vw, 4.5rem); margin-bottom:1rem;">KUALA LUMPUR AFTER DARK</h1>
        <p class="lead" style="max-width:700px; margin:0 auto;">
          “The city doesn't sleep. Neither should your plans.”
        </p>
      </div>

      <div style="font-size:1.15rem; line-height:1.8; color:#d1cfc7;">
        <blockquote class="editorial-quote">
          “Kuala Lumpur's nightlife is not defined by corporate bottle-service clubs or tourist sky decks. It is lived in the subterranean basements where techno rolls until 4:00 AM, the restored Chinatown shophouses serving tuak botanicals, and the 24-hour banana leaf tables where the whole city breaks bread before sunrise.”
        </blockquote>

        <h2 style="margin:2.5rem 0 1rem; color:var(--text-primary); font-size:1.8rem;">WHY WE BUILT THIS</h2>
        <p style="margin-bottom:1.5rem;">
          For too long, discovering nightlife in Kuala Lumpur meant relying on fragmented Instagram stories, outdated TripAdvisor tourist traps, or generic map pins that fail to communicate vibe, sound, door culture, or set times.
        </p>
        <p style="margin-bottom:1.5rem;">
          <strong>Kuala Lumpur After Dark (KLAD)</strong> was engineered to bridge that void. We are an editorial-first digital product designed for locals, music obsessives, and curious travelers seeking authentic nocturnal culture across the Klang Valley.
        </p>

        <h2 style="margin:2.5rem 0 1rem; color:var(--text-primary); font-size:1.8rem;">EDITORIAL INDEPENDENCE</h2>
        <p style="margin-bottom:1.5rem;">
          No venue pays to be listed on KLAD. Our directory is curated strictly on musical integrity, acoustic quality, hospitality standard, and community atmosphere. If a venue changes its policy to prioritize commercial VIP greed over music, we remove them from our recommendations.
        </p>

        <div class="curator-box" style="margin:2.5rem 0;">
          <div class="curator-box-title">⚡ THE THREE CORE PRINCIPLES OF KL NIGHTLIFE</div>
          <ol style="padding-left:1.25rem; display:flex; flex-direction:column; gap:0.75rem; font-size:0.95rem; color:var(--text-primary);">
            <li><strong>Sound Over Sparklers:</strong> We champion calibrated acoustic rigs and selectors who read rooms, over VIP hype and champagne fireworks.</li>
            <li><strong>Respect The Safe Floor:</strong> Zero tolerance for harassment or invasive flash photography in underground spaces. Let dancers lose themselves.</li>
            <li><strong>The Sacred 3:00 AM Supper:</strong> A night out without a pilgrimage to a roadside wok or banana leaf tandoor is an unfinished night.</li>
          </ol>
        </div>

        <h2 style="margin:2.5rem 0 1rem; color:var(--text-primary); font-size:1.8rem;">SUBMISSIONS & CURATOR NETWORK</h2>
        <p style="margin-bottom:1.5rem;">
          Are you running an independent sound system, a vinyl listening bar, or a late-night supper sanctuary in the Klang Valley? We are continuously scouring Greater KL for uncompromising spaces.
        </p>
        <div style="background:var(--bg-surface); border:1px solid var(--border-medium); padding:1.5rem; border-radius:var(--radius-xs); margin:1.5rem 0;">
          <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-light); margin-bottom:0.5rem;">SUBMIT A VENUE OR EVENT DOSSIER</div>
          <div style="font-size:0.95rem; color:var(--text-primary);">editorial@klafterdark.my</div>
          <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.35rem;">Instagram: @klafterdark.my</div>
        </div>
      </div>
    </div>
  `;

  return container;
}
