// Kuala Lumpur After Dark - LocalStorage State Manager

const STORAGE_KEYS = {
  SAVED_VENUES: "klad_saved_venues",
  SAVED_GUIDES: "klad_saved_guides",
  ACTIVE_PLAN: "klad_active_night_plan",
  SAVED_PLANS: "klad_saved_plans"
};

// Default initial starter plan so the Night Planner is immediately interactive & impressive
const DEFAULT_STARTER_PLAN = [
  {
    id: "stop-1",
    venueId: "benang-damansara",
    time: "08:30 PM",
    category: "Bars",
    targetType: "Tailor Shop Drapes & Botanical Tuak",
    estimatedCost: 60
  },
  {
    id: "stop-2",
    venueId: "lane-23-trx",
    time: "11:30 PM",
    category: "Clubs",
    targetType: "Peak-Time L-Acoustics Electronic Wave",
    estimatedCost: 75
  },
  {
    id: "stop-3",
    venueId: "fatt-choi-supper",
    time: "02:30 AM",
    category: "Late Night",
    targetType: "Supper Noodles & Highball Relief",
    estimatedCost: 35
  }
];

// Pre-built Curated Templates for quick inspiration
export const CURATED_TEMPLATES = [
  {
    id: "techno-purist",
    title: "The Techno Purist",
    description: "Raw brutalist spaces, minimal lighting, and 140 BPM kickdrums from 10 PM until dawn.",
    area: "Chinatown & Pasar Seni",
    estimatedTotal: "RM 135 - 200",
    stops: [
      { venueId: "fono-kl", time: "09:00 PM", targetType: "Warm-Up Leftfield & Audiophile Vinyl", estimatedCost: 40 },
      { venueId: "over-and-above-chinatown", time: "11:30 PM", targetType: "Brutalist Hard Techno (140 BPM)", estimatedCost: 55 },
      { venueId: "fatt-choi-supper", time: "03:00 AM", targetType: "Late Night Chinatown Wok", estimatedCost: 35 }
    ]
  },
  {
    id: "trec-night-conquest",
    title: "TREC Electric Strip & Mega-Club",
    description: "The complete journey through KL's premier entertainment district from Caribbean terrace to Spark titan.",
    area: "TREC Kuala Lumpur",
    estimatedTotal: "RM 180 - 280",
    stops: [
      { venueId: "reggaebar-trec", time: "07:30 PM", targetType: "Sunset Mojito Pitchers & Terrace", estimatedCost: 40 },
      { venueId: "iron-fairies-trec", time: "10:00 PM", targetType: "Live Brass Funk & Fairy Dust Lounge", estimatedCost: 65 },
      { venueId: "arte-club-trec", time: "12:15 AM", targetType: "Electric Boulevard Kinetic Dancefloor", estimatedCost: 65 },
      { venueId: "spark-club-trec", time: "02:15 AM", targetType: "Mega-Club Peak Lasers & Cryo Cannons", estimatedCost: 80 }
    ]
  },
  {
    id: "damansara-to-trx",
    title: "Plaza Damansara to TRX Nightlife",
    description: "Hidden tailor shop drapes at Benang, moving into Lane 23's high-energy L-Acoustics dance floor.",
    area: "Bukit Damansara & TRX",
    estimatedTotal: "RM 170 - 260",
    stops: [
      { venueId: "junglebird-damansara", time: "07:00 PM", targetType: "Asia's 50 Best Rum Masterclass", estimatedCost: 65 },
      { venueId: "benang-damansara", time: "09:30 PM", targetType: "Hidden Tailor Door & Tuak Highballs", estimatedCost: 60 },
      { venueId: "lane-23-trx", time: "11:45 PM", targetType: "Market Lane High-Energy Club & Sound", estimatedCost: 75 }
    ]
  },
  {
    id: "skyline-luxury",
    title: "Skyline & Starlit Highs",
    description: "High-altitude mixology framing the illuminated Petronas Towers & TRX spires.",
    area: "KLCC & Bukit Bintang",
    estimatedTotal: "RM 280 - 450",
    stops: [
      { venueId: "fuego-troika-sky", time: "07:30 PM", targetType: "Twin Towers Mezcal & Tapas", estimatedCost: 120 },
      { venueId: "wet-deck-w-hotel", time: "10:00 PM", targetType: "Poolside Neon & Electronic Waves", estimatedCost: 85 },
      { venueId: "vertigo-banyan-tree", time: "12:00 AM", targetType: "Level 59 Sky Deck Deep House Finale", estimatedCost: 110 }
    ]
  },
  {
    id: "chinatown-speakeasy",
    title: "Chinatown Speakeasy Crawl",
    description: "Concealed entrances, pre-war shophouses, botanical tuak, and Kwai Chai Hong neon.",
    area: "Chinatown Heritage Core",
    estimatedTotal: "RM 160 - 240",
    stops: [
      { venueId: "ps150-chinatown", time: "07:30 PM", targetType: "Opium Den Highballs", estimatedCost: 65 },
      { venueId: "concubine-chinatown", time: "10:00 PM", targetType: "Neon Balcony Tuak Punch", estimatedCost: 55 },
      { venueId: "fatt-choi-supper", time: "01:30 AM", targetType: "Cantonese Wok-Hei & Tsingtao", estimatedCost: 35 }
    ]
  },
  {
    id: "bangsar-indie-ritual",
    title: "Bangsar Sounds & 3AM Naan",
    description: "Intimate speakeasy R&B, craft cocktails, ending with the sacred 24-hr cheese naan.",
    area: "Bangsar Telawi",
    estimatedTotal: "RM 120 - 180",
    stops: [
      { venueId: "the-vault-bangsar", time: "09:30 PM", targetType: "Bank Vault R&B & Old Fashioneds", estimatedCost: 65 },
      { venueId: "devi-corner-bangsar", time: "02:30 AM", targetType: "Legendary Garlic Cheese Naan & Teh Tarik", estimatedCost: 20 }
    ]
  },
  {
    id: "kl-superclub-mayhem",
    title: "KL Superclub EDM & Street Supper",
    description: "Changkat poolside warm-up, Pitt Club's massive 15,000 sq ft kinetic LED spectacle, and 3 AM Jalan Alor chicken wings.",
    area: "Bukit Bintang & Golden Triangle",
    estimatedTotal: "RM 190 - 320",
    stops: [
      { venueId: "the-rabbit-hole-changkat", time: "08:30 PM", targetType: "Poolside Craft Beer & Cocktails", estimatedCost: 55 },
      { venueId: "pitt-club-kl", time: "11:30 PM", targetType: "15,000 sq ft Mega Floor & Kinetic LEDs", estimatedCost: 85 },
      { venueId: "wong-ah-wah-alor", time: "02:45 AM", targetType: "Jalan Alor Charcoal Wings & Cold Beer", estimatedCost: 35 }
    ]
  }
];

class StorageManager {
  constructor() {
    this.listeners = new Set();
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify(event, data) {
    this.listeners.forEach(cb => {
      try { cb(event, data); } catch (e) { console.error(e); }
    });
  }

  // --- Saved Venues ---
  getSavedVenues() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_VENUES);
      return data ? JSON.parse(data) : ["lane-23-trx", "benang-damansara", "spark-club-trec", "ps150-chinatown"];
    } catch {
      return ["lane-23-trx", "benang-damansara", "spark-club-trec", "ps150-chinatown"];
    }
  }

  isVenueSaved(venueId) {
    return this.getSavedVenues().includes(venueId);
  }

  toggleSaveVenue(venueId) {
    const list = this.getSavedVenues();
    let updated;
    let saved;
    if (list.includes(venueId)) {
      updated = list.filter(id => id !== venueId);
      saved = false;
    } else {
      updated = [...list, venueId];
      saved = true;
    }
    localStorage.setItem(STORAGE_KEYS.SAVED_VENUES, JSON.stringify(updated));
    this.notify("saved_venues_changed", { venueId, saved, list: updated });
    return saved;
  }

  // --- Saved Guides ---
  getSavedGuides() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_GUIDES);
      return data ? JSON.parse(data) : ["where-the-city-goes-after-midnight"];
    } catch {
      return ["where-the-city-goes-after-midnight"];
    }
  }

  isGuideSaved(guideId) {
    return this.getSavedGuides().includes(guideId);
  }

  toggleSaveGuide(guideId) {
    const list = this.getSavedGuides();
    let updated;
    let saved;
    if (list.includes(guideId)) {
      updated = list.filter(id => id !== guideId);
      saved = false;
    } else {
      updated = [...list, guideId];
      saved = true;
    }
    localStorage.setItem(STORAGE_KEYS.SAVED_GUIDES, JSON.stringify(updated));
    this.notify("saved_guides_changed", { guideId, saved, list: updated });
    return saved;
  }

  // --- Active Night Plan ---
  getActivePlan() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_PLAN);
      return data ? JSON.parse(data) : DEFAULT_STARTER_PLAN;
    } catch {
      return DEFAULT_STARTER_PLAN;
    }
  }

  saveActivePlan(stops) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PLAN, JSON.stringify(stops));
    this.notify("active_plan_changed", stops);
  }

  addToActivePlan(venueId, time = null) {
    const current = this.getActivePlan();
    // Don't add duplicate if already in plan
    if (current.some(item => item.venueId === venueId)) {
      return { success: false, message: "Venue is already in your night plan" };
    }

    // Determine smart default time
    const defaultTimes = ["08:30 PM", "10:30 PM", "12:30 AM", "02:30 AM"];
    const nextTime = time || defaultTimes[Math.min(current.length, defaultTimes.length - 1)];

    const newStop = {
      id: "stop-" + Date.now(),
      venueId,
      time: nextTime,
      category: "Nightlife",
      targetType: "Curated Stop",
      estimatedCost: 55
    };

    const updated = [...current, newStop];
    this.saveActivePlan(updated);
    return { success: true, message: "Added to your night plan!", stop: newStop };
  }

  removeFromActivePlan(stopId) {
    const current = this.getActivePlan();
    const updated = current.filter(s => s.id !== stopId && s.venueId !== stopId);
    this.saveActivePlan(updated);
  }

  reorderActivePlan(fromIndex, toIndex) {
    const current = [...this.getActivePlan()];
    if (fromIndex < 0 || fromIndex >= current.length || toIndex < 0 || toIndex >= current.length) return;
    const [moved] = current.splice(fromIndex, 1);
    current.splice(toIndex, 0, moved);
    this.saveActivePlan(current);
  }

  loadTemplate(templateId) {
    const tpl = CURATED_TEMPLATES.find(t => t.id === templateId);
    if (!tpl) return;
    const stops = tpl.stops.map((s, idx) => ({
      id: `stop-${Date.now()}-${idx}`,
      venueId: s.venueId,
      time: s.time,
      targetType: s.targetType,
      estimatedCost: s.estimatedCost || 50
    }));
    this.saveActivePlan(stops);
    return tpl;
  }

  clearActivePlan() {
    this.saveActivePlan([]);
  }

  // --- Saved Plans (My Itineraries Archive) ---
  getSavedPlans() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_PLANS);
      return data ? JSON.parse(data) : [
        {
          id: "plan-kl-friday",
          title: "Friday Underground Descent",
          date: "Friday Night",
          stopsCount: 3,
          totalEst: "RM 150",
          createdAt: "2026-10-09"
        }
      ];
    } catch {
      return [];
    }
  }

  saveCurrentPlanAs(title) {
    const currentStops = this.getActivePlan();
    if (!currentStops.length) return { success: false, message: "Cannot save an empty itinerary" };

    const totalEst = currentStops.reduce((sum, s) => sum + (s.estimatedCost || 50), 0);
    const newSavedPlan = {
      id: "saved-plan-" + Date.now(),
      title: title || `Night Out in KL (${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })})`,
      date: new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' }),
      stopsCount: currentStops.length,
      stops: currentStops,
      totalEst: `RM ${totalEst}`,
      createdAt: new Date().toISOString()
    };

    const list = this.getSavedPlans();
    const updated = [newSavedPlan, ...list];
    localStorage.setItem(STORAGE_KEYS.SAVED_PLANS, JSON.stringify(updated));
    this.notify("saved_plans_changed", updated);
    return { success: true, plan: newSavedPlan };
  }

  deleteSavedPlan(planId) {
    const list = this.getSavedPlans();
    const updated = list.filter(p => p.id !== planId);
    localStorage.setItem(STORAGE_KEYS.SAVED_PLANS, JSON.stringify(updated));
    this.notify("saved_plans_changed", updated);
  }
}

export const storage = new StorageManager();
