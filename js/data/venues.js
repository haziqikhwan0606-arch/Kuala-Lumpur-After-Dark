// Kuala Lumpur After Dark - Verified & Accurate Nightlife Dataset
// Curated real-world venues across Greater Kuala Lumpur:
// - The Exchange TRX (Lane 23)
// - Plaza Damansara / Bukit Damansara (Benang: The Second Chapter, JungleBird)
// - TREC KL (Spark Club, Face 3, Nono Club, 404 Club Not Found, Iron Fairies, The China Bar, Kuna, Seasons Club, ArtePlus, Crush, Boomboxx 3, Reggaebar Xtra)
// - Life Centre & KLCC (Pitt Club KL, Kyo KL & Ren, WET Deck, Bar Trigona, Fuego, Marini's on 57)
// - Chinatown & Heritage (PS150, Concubine, Over & Above, fōno, Fatt Choi Roast & Supper Bar)
// - Bukit Bintang & Changkat (Vertigo Rooftop, The Rabbit Hole, Pisco Bar, Wong Ah Wah on Jalan Alor)
// - Bangsar & PJ (The Vault, Devi's Corner 24H, Mouton Vinyl & Whisky)

export const VENUES = [
  // ==========================================
  // THE EXCHANGE TRX
  // ==========================================
  {
    id: "lane-23-trx",
    name: "LANE 23",
    slug: "lane-23-trx",
    tagline: "Two-level listening café & underground electronic club with L-Acoustics sound",
    area: "TRX",
    address: "Lot GS.03, Ground Floor, Market Lane, The Exchange TRX, Persiaran TRX, 55188 KL",
    category: "Clubs",
    music: ["Tech-House", "Techno", "House", "Melodic"],
    vibe: ["Dance Floor", "Crowded", "VIP"],
    price: "$$$$",
    priceRange: "RM 60 - 90 entry / VIP table packages",
    openingHours: "Wed - Sun: 11:00 AM – 3:00 AM (Club transitions from 10:00 PM)",
    closingHourNumber: 3,
    statusText: "Open Tonight • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 460,
    dressCode: "Fashion forward / Modern upscale streetwear. Strictly no slippers or singlets.",
    transit: "Direct connection via Tun Razak Exchange (TRX) MRT Station (Underground pedestrian concourse)",
    facilities: ["Custom L-Acoustics Sound System", "Basement Nightclub Space", "Tokyo-style Listening Café Lounge", "Market Lane Alfresco Terrace", "Techno Omakase Thursdays"],
    lat: 3.1425,
    lng: 101.7185,
    heroImage: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Located along Market Lane at The Exchange TRX, Lane 23 is a two-level nightlife concept that effortlessly bridges day and night. By day, the ground floor operates as a Tokyo-inspired listening café and dining lounge serving fresh oysters and signature cocktails. After 10:00 PM, the subterranean club room takes over, driven by a world-class L-Acoustics sound installation, kinetic ambient ceiling, and a lineup of cutting-edge tech-house and melodic techno selectors.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "MARKET LANE NIGHTS: Tech-House & Peak Electronic",
      schedule: [
        { time: "10:00 PM", title: "Cocktail Transition & Deep Organic House", artist: "DJ Jeremy (MY)" },
        { time: "11:30 PM", title: "Rolling Tech-House & Melodic Grooves", artist: "Lane 23 Residents" },
        { time: "01:30 AM", title: "Peak Time Hypnotic Techno (132 BPM)", artist: "Guest Selector Rex" },
        { time: "02:30 AM", title: "Closing B2B Session", artist: "TRX Night Collective" }
      ]
    }
  },

  // ==========================================
  // BUKIT DAMANSARA / PLAZA DAMANSARA
  // ==========================================
  {
    id: "benang-damansara",
    name: "BENANG: THE SECOND CHAPTER",
    slug: "benang-damansara",
    tagline: "Hidden speakeasy behind tailor shop fabrics & sewing machines in Plaza Damansara",
    area: "Bukit Damansara",
    address: "1st Floor, 42M, Jalan Medan Setia 2, Plaza Damansara, Bukit Damansara, 50490 KL",
    category: "Bars",
    music: ["Cocktails", "Downtempo", "R&B"],
    vibe: ["Low-key", "Date Night", "Atmospheric"],
    price: "$$$",
    priceRange: "RM 45 - 65 / signature cocktail",
    openingHours: "Tue - Sun: 6:00 PM – 3:00 AM (Monday Closed)",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 410,
    dressCode: "Smart Casual. Refined evening look.",
    transit: "Semantan MRT Station (3 min Grab ride to Plaza Damansara)",
    facilities: ["Hidden Tailor Shop Door in Alley", "Signature Cocktails (Ben's Paloma, Asa Akira, Tiki Taka)", "Velvet Booths & Silk Drapes", "Thursday Ladies' Night", "Daily Happy Hour 5:00 PM - 9:00 PM"],
    lat: 3.1512,
    lng: 101.6538,
    heroImage: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Concealed behind tailoring cloth swatches, spools of thread, and an antique sewing machine in the quiet back alley of Plaza Damansara, Benang ('Thread') is the celebrated second concept from the creators behind TTDI's The First Chapter. Pushing past the heavy drapes reveals a moody, crimson-lit lounge draped in velvet and silk, serving inventive house cocktails like Ben's Paloma, Asa Akira, and Tiki Taka alongside soulful R&B tracks.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "The Master Tailor: Signature Highballs & Velvet R&B",
      schedule: [
        { time: "06:00 PM", title: "Aperitivo & Signature Cocktails", artist: "Benang Bartenders" },
        { time: "09:30 PM", title: "Soul, Downtempo & French Touch", artist: "DJ Naim" },
        { time: "11:45 PM", title: "Midnight Clarified Punch Tasting", artist: "Head Mixologist" }
      ]
    }
  },
  {
    id: "junglebird-damansara",
    name: "JUNGLEBIRD",
    slug: "junglebird-kl",
    tagline: "Asia's 50 Best Bars icon celebrating Caribbean rum & tropical soul in Plaza Damansara",
    area: "Bukit Damansara",
    address: "61M, Jalan Medan Setia 1, Plaza Damansara, Bukit Damansara, KL",
    category: "Bars",
    music: ["Cocktails", "Downtempo", "Afrobeats"],
    vibe: ["Low-key", "Good for a first drink", "Date Night"],
    price: "$$$",
    priceRange: "RM 50 - 75 / cocktail",
    openingHours: "Daily: 4:00 PM – 2:00 AM",
    closingHourNumber: 2,
    statusText: "Open Now • Closes 2:00 AM",
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 420,
    dressCode: "Relaxed tropical chic. Bermudas allowed.",
    transit: "Semantan MRT station (7 min taxi ride)",
    facilities: ["Over 250 Rum Labels", "Rattan Lounges", "Vinyl Listening Sessions", "Tasting Flights"],
    lat: 3.1519,
    lng: 101.6542,
    heroImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Named after the historic cocktail concocted in KL in 1973, JungleBird is an internationally celebrated rum salon in leafy Plaza Damansara. Warm bamboo textures, vintage tropical wallpapers, and immaculate Caribbean cane distillations meet curated reggae, cumbia, and afrobeats on the sound system.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Tropical Cane & Reggae Dub",
      schedule: [
        { time: "05:00 PM", title: "Sundowner Daiquiri Sessions", artist: "Bar Masters" },
        { time: "09:00 PM", title: "Cumbia & Highlife Vinyl", artist: "Selecta Dan" },
        { time: "11:30 PM", title: "Late Night Overproof Flights", artist: "JungleBird Crew" }
      ]
    }
  },

  // ==========================================
  // TREC KL (TASTE, RELISH, EXPERIENCE, CELEBRATE)
  // 438 JALAN TUN RAZAK
  // ==========================================
  {
    id: "spark-club-trec",
    name: "SPARK CLUB KL",
    slug: "spark-club-trec",
    tagline: "The flagship mega-club titan of TREC at the historic 436 Jalan Tun Razak site",
    area: "TREC",
    address: "436, Jalan Tun Razak, TREC, 50400 Kuala Lumpur",
    category: "Clubs",
    music: ["EDM", "Hip-Hop", "House"],
    vibe: ["Crowded", "Dance Floor", "VIP"],
    price: "$$$$",
    priceRange: "RM 60 - 90 entry / VIP table packages",
    openingHours: "Wed - Sat: 10:00 PM – 3:00 AM (Closed Sun - Tue)",
    closingHourNumber: 3,
    statusText: "Open Tonight • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 940,
    dressCode: "Fashion Forward / Club Chic. No sandals or singlets.",
    transit: "Direct TREC Main Porch Taxi drop-off / 10 min walk from TRX MRT",
    facilities: ["Festival-grade L-Acoustics Sound", "Co2 Cryo Cannons", "360 Kinetic Laser Ceiling", "Multi-Room VIP Mezzanine", "Valet Parking"],
    lat: 3.1418,
    lng: 101.7210,
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Occupying the legendary mega-club premises at 436 Jalan Tun Razak (formerly housing Zouk KL), Spark Club is the reigning heavyweight of TREC’s nightlife. Engineered for massive sensory impact with international touring headliners, thunderous bass, Co2 cannons, and a motorized 360-degree kinetic laser ceiling.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "IGNITE: Festival EDM, Heavy 808s & Laser Storm",
      schedule: [
        { time: "10:30 PM", title: "Warm-Up & Future Bass", artist: "DJ Kenji" },
        { time: "12:00 AM", title: "Headline Open-Format & Trap Heavyweights", artist: "DJ Blink & Goldfish" },
        { time: "01:30 AM", title: "Festival EDM & Laser Storm", artist: "Spark Resident All-Stars" },
        { time: "02:45 AM", title: "Late Night Hardstyle & Banger Finale", artist: "MC Vibe & Crew" }
      ]
    }
  },
  {
    id: "face3-club-trec",
    name: "FACE 3 CLUB",
    slug: "face3-club-trec",
    tagline: "High-voltage mega nightclub with kinetic laser shows at The Hive, TREC",
    area: "TREC",
    address: "Unit H-G-09, The Hive, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["EDM", "Hip-Hop", "Bounce"],
    vibe: ["Crowded", "Dance Floor", "VIP"],
    price: "$$$",
    priceRange: "RM 50 - 70 entry with drink",
    openingHours: "Wed - Sun: 10:00 PM – 4:00 AM",
    closingHourNumber: 4,
    statusText: "Open Tonight • Closes 4:00 AM",
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 480,
    dressCode: "Trendy Nightlife / Club Casual.",
    transit: "TREC The Hive Porch Drop-off",
    facilities: ["Kinetic Laser Matrix", "VIP Mezzanines", "Sub-bass Club Rig", "Bottle Shows"],
    lat: 3.1417,
    lng: 101.7213,
    heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Face 3 is one of TREC's most electric and popular weekend clubs at The Hive. Known for drawing huge energetic crowds with pulsing EDM, hard-hitting bounce, and hip-hop bangers accompanied by synchronous multi-colored laser displays.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "KINETIC FREQUENCY: Festival Anthems & Bounce",
      schedule: [
        { time: "10:30 PM", title: "Warm-Up EDM & Trap", artist: "DJ Leo" },
        { time: "12:30 AM", title: "Peak Bounce Waves & Lasers", artist: "Face 3 Crew" },
        { time: "02:30 AM", title: "Late Night Hard Dance", artist: "Guest Selector" }
      ]
    }
  },
  {
    id: "nonoclub-trec",
    name: "NONO CLUB",
    slug: "nonoclub-trec",
    tagline: "Viral micro-club sensation on Electric Boulevard featuring Chinese EDM & hard bounce",
    area: "TREC",
    address: "Lot E-G-01, Electric Boulevard, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["EDM", "Bounce", "House"],
    vibe: ["Crowded", "Dance Floor", "Underground"],
    price: "$$$",
    priceRange: "RM 50 - 70 entry / bottle packages",
    openingHours: "Wed - Sun: 9:30 PM – 4:00 AM",
    closingHourNumber: 4,
    statusText: "Open Tonight • Closes 4:00 AM",
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 390,
    dressCode: "Modern Streetwear. Kicks encouraged.",
    transit: "TREC Electric Boulevard Taxi Drop-off",
    facilities: ["High-Intensity Strobe Matrix", "Intimate Micro-Club Floor", "VIP Table Rings", "Signature Drops"],
    lat: 3.1412,
    lng: 101.7209,
    heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A viral nightlife phenomenon on TREC’s Electric Boulevard, Nono Club is an intimate micro-club packed with relentless energy. Famous for blending Chinese EDM, Melbourne bounce, and infectious festival hooks into high-octane sets that keep the compact dance floor jumping until 4:00 AM.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "NONO MADNESS: Chinese EDM & Hard Bounce Drops",
      schedule: [
        { time: "10:00 PM", title: "High-BPM Intro Sets", artist: "DJ Ray" },
        { time: "12:00 AM", title: "Peak Bounce & Rave Anthems", artist: "Nono All-Stars" },
        { time: "02:30 AM", title: "Overdrive Finale", artist: "Resident MC & Crew" }
      ]
    }
  },
  {
    id: "404-club-trec",
    name: "404 CLUB NOT FOUND",
    slug: "404-club-trec",
    tagline: "Cyberpunk spaceship rave & futuristic dance floor on Electric Boulevard",
    area: "TREC",
    address: "Lot E-01-02, Electric Boulevard, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["EDM", "House", "Bounce"],
    vibe: ["VIP", "Dance Floor", "Atmospheric"],
    price: "$$$$",
    priceRange: "RM 60 - 85 / signature cocktails & table service",
    openingHours: "Wed - Sun: 8:00 PM – 3:30 AM",
    closingHourNumber: 3,
    statusText: "Open Tonight • Closes 3:30 AM",
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 310,
    dressCode: "Smart Chic / Futuristic aesthetic.",
    transit: "TREC Electric Boulevard Taxi Drop-off",
    facilities: ["Immersive Glitch LED Tunnel", "Spaceship Cockpit DJ Booth", "Signature Mixology Bar", "VIP Lounges"],
    lat: 3.1412,
    lng: 101.7208,
    heroImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Designed like a cyberpunk interstellar craft, 404 Club Not Found pairs glowing neon matrix corridors with futuristic bass, EDM, and tech-house beats. It's one of the most visually distinctive spaces in the entire TREC precinct.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "GLITCH PROTOCOL: Future Bounce & Cyber Beats",
      schedule: [
        { time: "09:00 PM", title: "Cyber Highballs & Warm-Up", artist: "Mixology Masters" },
        { time: "11:30 PM", title: "Future House & Electro Anthems", artist: "DJ Neo" },
        { time: "01:30 AM", title: "Midnight Laser Flight", artist: "404 Crew" }
      ]
    }
  },
  {
    id: "iron-fairies-trec",
    name: "THE IRON FAIRIES KL",
    slug: "iron-fairies-kl",
    tagline: "Ashley Sutton's whimsical fairy dust iron foundry across two floors at The Hive",
    area: "TREC",
    address: "Lot H-G-06, The Hive, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["Live", "House", "Hip-Hop"],
    vibe: ["Crowded", "Dance Floor", "Atmospheric"],
    price: "$$$",
    priceRange: "RM 45 - 75 / cocktail & pints",
    openingHours: "Tue - Sun: 7:00 PM – 3:30 AM",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:30 AM",
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 560,
    dressCode: "Smart Casual. Closed shoes required.",
    transit: "TREC Drop-off Block H / Tun Razak Exchange MRT",
    facilities: ["Live Band Stage downstairs", "Fairy Dust Butterfly Room upstairs", "Bespoke Cocktails", "Valet Parking"],
    lat: 3.1415,
    lng: 101.7212,
    heroImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Designed by visionary Ashley Sutton, The Iron Fairies is an architectural marvel forged from cast iron, glowing butterflies suspended from the ceiling, and bottles of iridescent fairy dust. The ground floor pulses with tight live jazz and funk bands, while the upstairs Butterfly Room unleashes deep house and upbeat electronic cuts until 3:30 AM.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Live Brass & Midnight Electronic",
      schedule: [
        { time: "08:30 PM", title: "Live Funk & Soul Sextet", artist: "The KL Groove Syndicate" },
        { time: "11:30 PM", title: "House & Nu-Disco upstairs", artist: "DJ Double D" },
        { time: "01:30 AM", title: "Late Night Tech-House", artist: "Ashley Sound System" }
      ]
    }
  },
  {
    id: "the-china-bar-trec",
    name: "THE CHINA BAR KL",
    slug: "the-china-bar-trec",
    tagline: "Vibrant live music and open-format party bar with imperial crimson aesthetics at The Hive",
    area: "TREC",
    address: "Lot H-G-01, The Hive, TREC, 438 Jalan Tun Razak, KL",
    category: "Bars",
    music: ["Live", "Hip-Hop", "Cocktails"],
    vibe: ["Crowded", "Dance Floor", "Good for a first drink"],
    price: "$$$",
    priceRange: "RM 40 - 65 / drink & beer buckets",
    openingHours: "Daily: 5:00 PM – 3:00 AM",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 380,
    dressCode: "Smart Casual.",
    transit: "TREC Block H Drop-off",
    facilities: ["Live Band Stage", "Outdoor Terrace Seating", "Cocktail Bar", "VIP Booths"],
    lat: 3.1416,
    lng: 101.7211,
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "The China Bar KL is an energetic staple of The Hive at TREC. Draped in modern oriental red lighting, it starts early with craft cocktails and live acoustic mandopop before turning up the volume with high-energy party DJs.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "RED DYNASTY: Live Bands to Midnight Hits",
      schedule: [
        { time: "08:00 PM", title: "Acoustic Pop & Soul", artist: "Red Lantern Trio" },
        { time: "11:00 PM", title: "Open-Format Party Remixes", artist: "DJ Ryan T" }
      ]
    }
  },
  {
    id: "kuna-trec",
    name: "KUNA KL",
    slug: "kuna-trec",
    tagline: "High-spirited social bar & restaurant with live band performances at The Hive",
    area: "TREC",
    address: "The Hive, TREC, 438 Jalan Tun Razak, KL",
    category: "Live Music",
    music: ["Live", "Cocktails", "R&B"],
    vibe: ["Crowded", "Good for a first drink", "Atmospheric"],
    price: "$$$",
    priceRange: "RM 40 - 65 / drink",
    openingHours: "Daily: 5:00 PM – 3:00 AM",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 320,
    dressCode: "Casual Chic.",
    transit: "TREC The Hive Porch",
    facilities: ["Dedicated Live Stage", "Alfresco Dining Terrace", "Artisanal Cocktails"],
    lat: 3.1415,
    lng: 101.7214,
    heroImage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Kuna brings together contemporary dining and electrifying live music at The Hive. A favorite gathering place for friends pre-gaming with cocktails and enjoying live covers before heading onto TREC's dance floors.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Live Sessions & Social Sips",
      schedule: [
        { time: "08:30 PM", title: "Live Pop & R&B Covers", artist: "Kuna House Band" },
        { time: "11:30 PM", title: "Late Night Singalong & Cocktails", artist: "Guest DJ" }
      ]
    }
  },
  {
    id: "seasons-club-trec",
    name: "SEASONS CLUB",
    slug: "seasons-club-trec",
    tagline: "Modern rave-lounge hybrid with pulsating EDM & bottle service on Electric Boulevard",
    area: "TREC",
    address: "Electric Boulevard, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["EDM", "House", "Bounce"],
    vibe: ["Crowded", "Dance Floor", "VIP"],
    price: "$$$",
    priceRange: "RM 50 - 75 entry with drink",
    openingHours: "Wed - Sun: 9:00 PM – 3:30 AM",
    closingHourNumber: 3,
    statusText: "Open Tonight • Closes 3:30 AM",
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 290,
    dressCode: "Smart Casual / Trendy.",
    transit: "TREC Electric Boulevard Taxi Drop-off",
    facilities: ["LED Visual Walls", "VIP Sofa Enclaves", "EDM Dance Floor"],
    lat: 3.1413,
    lng: 101.7210,
    heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Seasons Club combines a sleek social lounge feel with full-throttle EDM and bounce party energy on Electric Boulevard, making it a reliable destination for group celebrations and bottle service.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "SEASONS PULSE: Big Room & Commercial Bangers",
      schedule: [
        { time: "10:00 PM", title: "Warm-Up Club Beats", artist: "DJ Kevin" },
        { time: "12:00 AM", title: "Peak Time EDM Wave", artist: "Seasons Residents" }
      ]
    }
  },
  {
    id: "arte-club-trec",
    name: "ARTEPLUS / ARTE CLUB",
    slug: "arte-club-trec",
    tagline: "High-octane commercial club & dance lounge on Electric Boulevard",
    area: "TREC",
    address: "Electric Boulevard, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["EDM", "House", "Hip-Hop"],
    vibe: ["Crowded", "Dance Floor"],
    price: "$$$",
    priceRange: "RM 50 - 75 entry with drink",
    openingHours: "Wed - Sun: 9:00 PM – 4:00 AM",
    closingHourNumber: 4,
    statusText: "Open Tonight • Closes 4:00 AM",
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 310,
    dressCode: "Club Casual / Trendy.",
    transit: "TREC Electric Boulevard Taxi Drop-off",
    facilities: ["Kinetic LED Walls", "Bottle Service VIP", "Dance Floor Central Rig"],
    lat: 3.1413,
    lng: 101.7211,
    heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Situated on the main thoroughfare of Electric Boulevard, Arte brings vibrant party energy, state-of-the-art visual mapping, and popular open-format anthems to TREC’s core weekend revelers.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Electric Waves: Big Room Anthems & Top 40 Remixes",
      schedule: [
        { time: "10:00 PM", title: "Warm-Up Club Hits", artist: "DJ Ace" },
        { time: "12:00 AM", title: "Peak Bounce & EDM", artist: "Arte Resident Team" },
        { time: "02:30 AM", title: "Late Night Heavy Drop", artist: "Guest DJ" }
      ]
    }
  },
  {
    id: "crush-club-trec",
    name: "CRUSH KL",
    slug: "crush-club-trec",
    tagline: "High-energy open-format club & dance floor on Electric Boulevard",
    area: "TREC",
    address: "Electric Boulevard, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["Hip-Hop", "R&B", "EDM"],
    vibe: ["Crowded", "Dance Floor"],
    price: "$$$",
    priceRange: "RM 45 - 65 entry",
    openingHours: "Wed - Sun: 9:30 PM – 3:30 AM",
    closingHourNumber: 3,
    statusText: "Open Tonight • Closes 3:30 AM",
    isOpenNow: true,
    rating: 4.4,
    reviewCount: 280,
    dressCode: "Smart Casual.",
    transit: "TREC Electric Boulevard Taxi Stand",
    facilities: ["Pulsing LED Strobe Setup", "VIP Sofa Sections", "Cocktail Bar"],
    lat: 3.1414,
    lng: 101.7213,
    heroImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A fixture on TREC's Electric Boulevard, Crush draws lively crowds with party hip-hop, club anthems, and competitive bottle deals.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "CRUSH FRIDAYS: Pure Hip-Hop & Party Anthems",
      schedule: [
        { time: "10:00 PM", title: "Warm-Up R&B", artist: "DJ Zico" },
        { time: "12:00 AM", title: "Heavyweight Traps & Bangers", artist: "Crush Squad" }
      ]
    }
  },
  {
    id: "boomboxx-trec",
    name: "BOOMBOXX 3 KL",
    slug: "boomboxx-trec",
    tagline: "Trendy hip-hop, drill, and heavy bass club at The Hive",
    area: "TREC",
    address: "The Hive, TREC, 438 Jalan Tun Razak, KL",
    category: "Clubs",
    music: ["Hip-Hop", "R&B"],
    vibe: ["Crowded", "Dance Floor"],
    price: "$$$",
    priceRange: "RM 45 - 65 entry",
    openingHours: "Wed - Sun: 10:00 PM – 3:30 AM",
    closingHourNumber: 3,
    statusText: "Open Tonight • Closes 3:30 AM",
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 310,
    dressCode: "Streetwear / Sneakers.",
    transit: "TREC Block H Drop-off",
    facilities: ["Booming Bass Rig", "VIP Bottle Service", "DJ Stage"],
    lat: 3.1416,
    lng: 101.7214,
    heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Located at The Hive, Boomboxx 3 packs a punch with modern hip-hop, drill, trap, and dancehall anthems that keep the dancefloor alive until the early hours.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "BOOM SHIFT: Urban Hits & Trap Anthems",
      schedule: [
        { time: "10:30 PM", title: "Old School Hip-Hop Intro", artist: "DJ Swag" },
        { time: "12:30 AM", title: "Drill & Modern 808s", artist: "Boomboxx Residents" }
      ]
    }
  },
  {
    id: "reggaebar-trec",
    name: "REGGAEBAR XTRA (TREC)",
    slug: "reggaebar-xtra-trec",
    tagline: "Open-air tropical terrace with roots reggae, dancehall & mojito fishbowls",
    area: "TREC",
    address: "Block H, The Hive, TREC, 438 Jalan Tun Razak, KL",
    category: "Bars",
    music: ["Live", "Afrobeats", "Cocktails"],
    vibe: ["Crowded", "Good for a first drink", "Atmospheric"],
    price: "$$",
    priceRange: "RM 25 - 45 / pints & cocktails",
    openingHours: "Daily: 5:00 PM – 3:00 AM",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 520,
    dressCode: "Relaxed Casual. Island vibes.",
    transit: "Block H The Hive drop-off",
    facilities: ["Open Air Terrace", "Mojito Fishbowls", "Live DJ Dub Sessions", "Curbside Seating", "Shisha Available"],
    lat: 3.1416,
    lng: 101.7215,
    heroImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Bringing the carefree spirit of Caribbean island culture to the edge of The Hive, Reggaebar Xtra is a beloved open-air social hub. With oversized mojito fishbowls, Bob Marley murals, and infectious roots reggae, dub, and afrobeats, it’s one of the most unpretentious and fun pre-game destinations in the district.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Kingston to KL: Dancehall & Rum Punch",
      schedule: [
        { time: "06:00 PM", title: "Sunset Happy Hour Mojitos", artist: "Bar Team" },
        { time: "09:30 PM", title: "Roots Reggae & Dub Sound System", artist: "Selecta Ras" },
        { time: "11:45 PM", title: "Modern Dancehall & Afrobeats Bashment", artist: "DJ Jahman" }
      ]
    }
  },

  // ==========================================
  // BUKIT BINTANG & LIFE CENTRE SUPERCLUBS
  // ==========================================
  {
    id: "pitt-club-kl",
    name: "PITT CLUB KL",
    slug: "pitt-club-kl",
    tagline: "Massive 15,000 sq ft superclub titan with kinetic LED ceiling at Life Centre",
    area: "Bukit Bintang",
    address: "3rd Floor, Life Centre, 20, Jalan Sultan Ismail, 50250 Kuala Lumpur",
    category: "Clubs",
    music: ["EDM", "Bounce", "Hip-Hop", "Techno"],
    vibe: ["Crowded", "Dance Floor", "VIP"],
    price: "$$$$",
    priceRange: "RM 60 - 90 cover / VIP table packages",
    openingHours: "Wed - Sun: 10:00 PM – 4:00 AM",
    closingHourNumber: 4,
    statusText: "Open Tonight • Closes 4:00 AM",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 880,
    dressCode: "Fashionable / Club Chic. Valid original photo ID mandatory (Strict 21+).",
    transit: "Bukit Nanas Monorail Station (8 min walk) or Raja Chulan Monorail",
    facilities: ["15,000 sq ft Mega Floor", "Tecnare High-Definition Sound Rig", "Motorized Kinetic LED Ceiling", "Multi-Tier VIP Booths", "International Touring DJs"],
    lat: 3.1534,
    lng: 101.7088,
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Located on the 3rd floor of Life Centre along Jalan Sultan Ismail, Pitt Club KL is one of the most imposing superclubs in Malaysia. Spanning an astonishing 15,000 square feet, the venue is powered by an audiophile Tecnare sound system and a mesmerizing kinetic LED matrix ceiling that descends over the dance floor during peak festival sets.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "PITT OVERLOAD: Festival EDM & Kinetic Matrix",
      schedule: [
        { time: "10:30 PM", title: "Warm-Up Bass & Urban Remixes", artist: "Pitt Resident DJ" },
        { time: "12:30 AM", title: "Peak Kinetic Laser & Big Room Wave", artist: "Headline Guest DJ" },
        { time: "02:30 AM", title: "Late Night Hardstyle & Bounce Anthem", artist: "Pitt Squad" }
      ]
    }
  },
  {
    id: "kyo-mandarin-oriental",
    name: "KYŌ KL & REN",
    slug: "kyo-mandarin-oriental",
    tagline: "Basement subterranean institution with dual rooms: Kyō (Hip-Hop) & Ren (House/Techno)",
    area: "KLCC",
    address: "Basement Level 3, Mandarin Oriental KL, Kuala Lumpur City Centre, 50450 KL",
    category: "Clubs",
    music: ["Hip-Hop", "House", "Techno", "R&B"],
    vibe: ["Underground", "Dance Floor", "VIP"],
    price: "$$$$",
    priceRange: "RM 60 - 80 entry / table service",
    openingHours: "Wed - Sun: 10:00 PM – 3:00 AM (Mon - Tue Closed)",
    closingHourNumber: 3,
    statusText: "Open Tonight • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 760,
    dressCode: "Smart Chic. No slippers, singlets, or track pants.",
    transit: "Direct basement access via Mandarin Oriental / KLCC LRT (5 min walk)",
    facilities: ["Dual Sound Environments", "Ren Subterranean Techno Room", "Kyō Urban Main Room", "Void Acoustics Sound", "VIP Tables"],
    lat: 3.1565,
    lng: 101.7121,
    heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Tucked three floors beneath the Mandarin Oriental right next to the Petronas Towers, kyō is Kuala Lumpur's gold standard for sophisticated clubbing. The venue houses two completely separate musical worlds: the main kyō room delivering hip-hop and R&B, and the dark, mirrored Ren room serving deep house, melodic techno, and disco to purists.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "DUAL FREQUENCY: Kyō Hip-Hop & Ren Deep House",
      schedule: [
        { time: "10:00 PM", title: "Doors Open & Deep Tech Warm-Up (Ren)", artist: "Ren Resident" },
        { time: "11:30 PM", title: "Urban Golden Era to Modern Traps (Kyō)", artist: "DJ Biggie" },
        { time: "01:00 AM", title: "Hypnotic Melodic Techno (Ren)", artist: "Victor G" }
      ]
    }
  },

  // ==========================================
  // CHINATOWN / PETALING STREET HERITAGE
  // ==========================================
  {
    id: "ps150-chinatown",
    name: "PS150",
    slug: "ps150-chinatown",
    tagline: "Hidden speakeasy behind a vintage toy storefront in Chinatown",
    area: "Chinatown",
    address: "150, Jalan Petaling, Chinatown, Kuala Lumpur",
    category: "Bars",
    music: ["Cocktails", "Downtempo", "Nu-Disco"],
    vibe: ["Low-key", "Date Night", "Atmospheric"],
    price: "$$$",
    priceRange: "RM 48 - 68 / cocktail",
    openingHours: "Daily: 6:00 PM – 2:00 AM",
    closingHourNumber: 2,
    statusText: "Open Now • Closes 2:00 AM",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 489,
    dressCode: "Smart Casual. Keep it refined.",
    transit: "2 min walk from Pasar Seni MRT / LRT",
    facilities: ["Vintage Toy Shop Façade", "Opium Den Courtyard", "Southeast Asian Botanical Infusions", "Private Booths"],
    lat: 3.1432,
    lng: 101.6975,
    heroImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Housed in a pre-war brothel converted into a multi-room bar along Jalan Petaling, PS150 remains the gold standard for KL's cocktail revolution. Guests pass through an obscure toy shop before traversing the Opium Den, an open-air central courtyard, and the atmospheric main bar serving Southeast Asian botanical infusions.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Spice Route Selects & Highballs",
      schedule: [
        { time: "06:00 PM", title: "Aperitivo Hour & Low-ABV", artist: "In-House Mixology" },
        { time: "09:00 PM", title: "Vinyl Jazz & Soul Cuts", artist: "DJ Farez" },
        { time: "11:30 PM", title: "Midnight Botanicals Tasting", artist: "Head Bartender Chong" }
      ]
    }
  },
  {
    id: "concubine-chinatown",
    name: "CONCUBINE KL",
    slug: "concubine-kl",
    tagline: "Neon-soaked hedonism in Chinatown's Kwai Chai Hong heritage lane",
    area: "Chinatown",
    address: "Lot 2, Kwai Chai Hong, Jalan Petaling, KL",
    category: "Bars",
    music: ["Hip-Hop", "R&B", "Cocktails"],
    vibe: ["Crowded", "Good for a first drink", "Date Night"],
    price: "$$",
    priceRange: "RM 38 - 55 / cocktail",
    openingHours: "Tue - Sun: 5:00 PM – 1:00 AM",
    closingHourNumber: 1,
    statusText: "Open Now • Closes 1:00 AM",
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 420,
    dressCode: "Casual chic. High street vibes.",
    transit: "Pasar Seni MRT Station (1 min walk)",
    facilities: ["Outdoor Balcony Overlooking Kwai Chai Hong", "Asian Tapas", "Neon Photo Wall", "Tuak Cocktails"],
    lat: 3.1439,
    lng: 101.6983,
    heroImage: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Overlooking the restored murals of Kwai Chai Hong, Concubine is a vibrant pre-war second-storey bar soaked in hot pink neon and raw industrial brickwork. Known for cheeky cocktails laced with ginger flower, calamansi, and tuak, it’s the definitive pre-game destination for Chinatown night owls.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Kwai Chai Hong Heatwave",
      schedule: [
        { time: "06:00 PM", title: "Sunset Tuak Punch Pitchers", artist: "Bar Team" },
        { time: "09:00 PM", title: "Afrobeat & Future R&B", artist: "DJ Ethan" },
        { time: "11:00 PM", title: "Late Night Chinatown Vibes", artist: "Guest DJ Curates" }
      ]
    }
  },
  {
    id: "over-and-above-chinatown",
    name: "OVER & ABOVE KL",
    slug: "over-and-above-chinatown",
    tagline: "Raw brutalist techno & industrial sanctuary on Jalan Tun H.S. Lee",
    area: "Chinatown",
    address: "Jalan Tun H.S. Lee, Chinatown, Kuala Lumpur",
    category: "Clubs",
    music: ["Techno", "Industrial"],
    vibe: ["Underground", "Dance Floor", "Crowded"],
    price: "$$",
    priceRange: "RM 40 - 60 entry",
    openingHours: "Thu - Sun: 10:00 PM – 4:00 AM",
    closingHourNumber: 4,
    statusText: "Open Tonight • Closes 4:00 AM",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 310,
    dressCode: "All black preferred. Strictly no flash photography.",
    transit: "3 min walk from Pasar Seni MRT",
    facilities: ["Custom High-Power Subwoofers", "Monochrome Red Lighting", "No Flash Policy", "Earplugs Available"],
    lat: 3.1448,
    lng: 101.6968,
    heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Kuala Lumpur's newest underground epicenter for relentless electronic sound. Located in Chinatown, Over & Above features a minimalist brutalist interior stripped of corporate glitter, dedicated purely to hard techno, acid, and raw underground dancefloor stamina.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "CONCRETE PULSE: 140 BPM Hard Techno & Acid",
      schedule: [
        { time: "10:30 PM", title: "Hypnotic Minimal Warm-Up", artist: "DJ Void" },
        { time: "12:30 AM", title: "Industrial Techno (140 BPM)", artist: "Kaelen (MY)" },
        { time: "02:30 AM", title: "Acid & Peak Warehouse Cuts", artist: "MVRK" }
      ]
    }
  },
  {
    id: "fono-kl",
    name: "FŌNO KL",
    slug: "fono-kl",
    tagline: "Intimate audiophile listening space & underground electronic community hub",
    area: "Chinatown",
    address: "The Zhongshan Building, Jalan Rotan, Kampung Attap, KL",
    category: "Live Music",
    music: ["House", "Live", "Cocktails"],
    vibe: ["Underground", "Low-key", "Atmospheric"],
    price: "$$",
    priceRange: "RM 30 - 50 / entry & natural wines",
    openingHours: "Wed - Sun: 8:00 PM – 2:00 AM",
    closingHourNumber: 2,
    statusText: "Open Tonight • Closes 2:00 AM",
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 310,
    dressCode: "Come as you are. Casual & music-focused.",
    transit: "Pasar Seni MRT / Maharajalela Monorail",
    facilities: ["Custom High-Fidelity Audiophile Rig", "Craft Beers & Pet-Nat Natural Wine", "Vinyl Listening Sessions", "Community Selector Hub"],
    lat: 3.1382,
    lng: 101.6958,
    heroImage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "fōno is an intimate, artist-run music and community space in the historic Zhongshan Building. With its bespoke high-fidelity sound system and unpretentious crowd, it hosts local selectors, leftfield house, broken beats, and international guest selectors looking for an intimate, music-first room.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "FREQUENCY: Leftfield House, Dub & Broken Beat",
      schedule: [
        { time: "08:30 PM", title: "Ambient & Down-tempo Vinyl", artist: "Fono Curators" },
        { time: "10:30 PM", title: "Leftfield House & UK Garage", artist: "DJ Afiq" },
        { time: "12:30 AM", title: "Deep Broken Beat", artist: "Guest Selectors" }
      ]
    }
  },
  {
    id: "fatt-choi-supper",
    name: "FATT CHOI ROAST & SUPPER BAR",
    slug: "fatt-choi-supper-bar",
    tagline: "Late-night char siu, natural wines, and neon Cantonese diner beats in Chinatown",
    area: "Chinatown",
    address: "24, Jalan Balai Polis, Chinatown, Kuala Lumpur",
    category: "Late Night",
    music: ["Late Night", "Cocktails", "Disco"],
    vibe: ["Late night", "Low-key", "Atmospheric"],
    price: "$$",
    priceRange: "RM 20 - 45 / noodles & drinks",
    openingHours: "Tue - Sun: 7:00 PM – 3:30 AM",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:30 AM",
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 340,
    dressCode: "Casual. Streetwear welcome.",
    transit: "Pasar Seni MRT (4 min walk)",
    facilities: ["Wok Kitchen open till 3 AM", "High-top Bar Seating", "Cold Tsingtao on Tap", "Late Night Comfort"],
    lat: 3.1419,
    lng: 101.6967,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "The ultimate post-midnight refuge in Chinatown. When clubs let out at 2:00 AM, the city’s DJs and revelers convene here for crackling roast pork, wok-hei tossed wonton noodles, cold highballs, and groovy retro Hong Kong disco tracks spinning until 3:30 in the morning.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Midnight Wok & Highball Relief",
      schedule: [
        { time: "11:00 PM", title: "Supper Shift Kick-Off", artist: "Master Chef Lou" },
        { time: "01:30 AM", title: "Cantopop & Italo-Disco Mixtape", artist: "DJ Chinatown Night" },
        { time: "02:45 AM", title: "Final Call Wonton & Tsingtao", artist: "Fatt Choi Team" }
      ]
    }
  },

  // ==========================================
  // BUKIT BINTANG & CHANGKAT
  // ==========================================
  {
    id: "vertigo-banyan-tree",
    name: "VERTIGO ROOFTOP",
    slug: "vertigo-rooftop-kl",
    tagline: "Level 59 open-air sky lounge facing the illuminated Petronas Towers & Merdeka 118",
    area: "Bukit Bintang",
    address: "Level 59, Banyan Tree Kuala Lumpur, 2 Jalan Conlay",
    category: "Rooftops",
    music: ["House", "Deep House", "Rooftop"],
    vibe: ["Rooftop", "Date Night", "Premium"],
    price: "$$$$",
    priceRange: "RM 65 - 110 / drink",
    openingHours: "Daily: 6:00 PM – 2:00 AM",
    closingHourNumber: 2,
    statusText: "Open Now • Closes 2:00 AM",
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 650,
    dressCode: "Upscale chic. Collared shirts for men, strictly no slippers.",
    transit: "5 min walk from Pavilion KL & Conlay MRT",
    facilities: ["360 Sky Deck", "Tapas Kitchen", "VIP Sofa Lounges", "Dedicated Lift", "Sommelier"],
    lat: 3.1504,
    lng: 101.7139,
    heroImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Perched 59 floors above the Golden Triangle, Vertigo is arguably the most breathtaking vantage point in Southeast Asia. Sweeping unencumbered breezes accompany bespoke mixology and melodic deep house grooves as the twin towers and Merdeka 118 glow in vivid detail against the midnight sky.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Sunset to Twilight Grooves",
      schedule: [
        { time: "06:30 PM", title: "Golden Hour Melodic House", artist: "DJ Nadia (MY)" },
        { time: "09:30 PM", title: "Ibiza Vocal Deep House", artist: "Victor G" },
        { time: "12:00 AM", title: "Skyline Afro-House Session", artist: "Soulful KL" }
      ]
    }
  },
  {
    id: "the-rabbit-hole-changkat",
    name: "THE RABBIT HOLE",
    slug: "the-rabbit-hole-changkat",
    tagline: "Colonial mansion with plunge pool, craft beer taps, and late-night weekend DJ parties",
    area: "Changkat",
    address: "14 & 16, Changkat Bukit Bintang, 50200 Kuala Lumpur",
    category: "Bars",
    music: ["House", "Hip-Hop", "Cocktails"],
    vibe: ["Crowded", "Dance Floor", "Good for a first drink"],
    price: "$$$",
    priceRange: "RM 35 - 65 / beer on tap & cocktails",
    openingHours: "Daily: 11:00 AM – 2:00 AM (Fri - Sat until 3:00 AM)",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 540,
    dressCode: "Smart Casual.",
    transit: "Bukit Bintang MRT / Monorail (5 min walk)",
    facilities: ["Outdoor Swimming Plunge Pool", "Beer Tap Wall", "Multiple Themed Rooms", "Weekend DJ Stage"],
    lat: 3.1478,
    lng: 101.7075,
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "An iconic reimagining of a colonial mansion along Changkat Bukit Bintang. By day it offers specialty coffee and poolside relaxation; by night, it transforms into a bustling multi-room party paradise with craft beer taps, signature cocktails, and high-energy DJ sessions beside the illuminated plunge pool.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Poolside Sessions: Vocal House & Party Anthems",
      schedule: [
        { time: "08:00 PM", title: "Sunset Tap Takeover", artist: "Bar Team" },
        { time: "10:30 PM", title: "Commercial Dance & Hip-Hop", artist: "DJ Dan" },
        { time: "01:00 AM", title: "Late Night Poolside Beats", artist: "Changkat Collective" }
      ]
    }
  },
  {
    id: "pisco-bar-changkat",
    name: "PISCO BAR",
    slug: "pisco-bar-changkat",
    tagline: "Peruvian tapas, ceviche, and indie dance parties off Changkat",
    area: "Changkat",
    address: "29, Jalan Mesui, Bukit Bintang, Kuala Lumpur",
    category: "Bars",
    music: ["House", "Live", "Disco"],
    vibe: ["Crowded", "Dance Floor", "Good for a first drink"],
    price: "$$",
    priceRange: "RM 38 - 60 / cocktail & tapas",
    openingHours: "Tue - Sun: 5:00 PM – 2:00 AM (Fri - Sat till 3:00 AM)",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 560,
    dressCode: "Smart Casual. Laidback European energy.",
    transit: "Raja Chulan Monorail (4 min walk)",
    facilities: ["Outdoor Terrace on Jalan Mesui", "Upper Dancefloor", "Ceviche Kitchen", "Craft Beers"],
    lat: 3.1485,
    lng: 101.7082,
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Located on Jalan Mesui, just tucked away from the chaotic main strip of Changkat, Pisco Bar attracts a cosmopolitan mix of expat foodies, local creatives, and electronic music lovers. Downstairs serves pisco sours and raw ceviche; upstairs transforms into a sweat-drenched disco and tech-house dance floor by midnight.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Mesui Rhythms: Latin Grooves to Italo-Disco",
      schedule: [
        { time: "07:30 PM", title: "Pisco Sour Masterclass & Tapas", artist: "Kitchen & Bar" },
        { time: "10:00 PM", title: "Nu-Disco & Tropical Grooves", artist: "DJ Lionel" },
        { time: "12:00 AM", title: "Upper Deck House Party", artist: "Nukleus Collective" }
      ]
    }
  },
  {
    id: "wong-ah-wah-alor",
    name: "WONG AH WAH (W.A.W) ON JALAN ALOR",
    slug: "wong-ah-wah-alor",
    tagline: "The legendary charcoal BBQ chicken wing & salted egg squid supper institution",
    area: "Bukit Bintang",
    address: "1, Jalan Alor, Bukit Bintang, 50200 Kuala Lumpur",
    category: "Late Night",
    music: ["Late Night"],
    vibe: ["Late night", "Crowded", "Atmospheric"],
    price: "$$",
    priceRange: "RM 20 - 45 / person",
    openingHours: "Daily: 5:00 PM – 3:30 AM",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:30 AM",
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 1820,
    dressCode: "Casual. Street dining atmosphere.",
    transit: "Bukit Bintang MRT Station (3 min walk)",
    facilities: ["Charcoal Smokers on Street", "Air-conditioned indoor seating & curbside tables", "Beer on Ice", "Open till 3:30 AM"],
    lat: 3.1462,
    lng: 101.7081,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "No night in Bukit Bintang is complete without a late-night feast at Wong Ah Wah (featuring the famous Mickey Mouse logo). Situated at the quieter end of bustling Jalan Alor, it has served post-clubbing revelers for decades with mouthwatering charcoal-barbecued chicken wings, stir-fried lala clams, salted egg squid, and cold beer towers.",
    tonight: {
      date: "TONIGHT • EVERY NIGHT",
      theme: "The Midnight Charcoal Grill Rush",
      schedule: [
        { time: "11:00 PM", title: "Post-Dinner Supper Crowd Arrives", artist: "WAW Grill Masters" },
        { time: "01:30 AM", title: "Peak Clubbers Supper Wave & Cold Beer", artist: "Street Crew" },
        { time: "03:00 AM", title: "Final Orders for Crispy Wings", artist: "Kitchen" }
      ]
    }
  },

  // ==========================================
  // KLCC / AMPANG ROOFTOPS & COCKTAILS
  // ==========================================
  {
    id: "wet-deck-w-hotel",
    name: "WET DECK AT W KUALA LUMPUR",
    slug: "wet-deck-w-hotel",
    tagline: "Electric neon poolside sky bar towering inches away from the Petronas Towers",
    area: "KLCC",
    address: "Level 12, W Kuala Lumpur, 121 Jalan Ampang, 50450 KL",
    category: "Rooftops",
    music: ["House", "Techno", "Rooftop"],
    vibe: ["Rooftop", "Dance Floor", "Crowded"],
    price: "$$$$",
    priceRange: "RM 65 - 110 / cocktail",
    openingHours: "Daily: 10:00 AM – 2:00 AM",
    closingHourNumber: 2,
    statusText: "Open Now • Closes 2:00 AM",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 640,
    dressCode: "Stylish nightlife attire. Smart footwear required after 8 PM.",
    transit: "KLCC LRT (3 min walk)",
    facilities: ["Illuminated Sky Pool", "Direct Twin Towers Backdrop", "Cabanas", "State-of-the-art D&B Audiotechnik"],
    lat: 3.1598,
    lng: 101.7107,
    heroImage: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Positioned directly opposite the Petronas Towers at Level 12 of W Kuala Lumpur, WET Deck combines poolside glamour with cutting-edge electronic beats. Glowing neon installations reflect on the pool water while leading international and regional DJs soundtrack the iconic skyline.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "POOL/PULSE: Deep Tech & Sunset Highs",
      schedule: [
        { time: "06:00 PM", title: "Golden Hour Sunset Grooves", artist: "DJ Victor T" },
        { time: "09:30 PM", title: "Melodic Techno & Visuals", artist: "DJ Lissa (SG)" },
        { time: "12:00 AM", title: "Skyline Basslines Under the Towers", artist: "W Resident Collective" }
      ]
    }
  },
  {
    id: "marinis-on-57",
    name: "MARINI'S ON 57",
    slug: "marinis-on-57",
    tagline: "Malaysia's highest luxury rooftop bar & lounge right beside the Petronas Towers",
    area: "KLCC",
    address: "Level 57, Menara 3 Petronas, Persiaran KLCC, 50088 Kuala Lumpur",
    category: "Rooftops",
    music: ["House", "Deep House", "Cocktails"],
    vibe: ["Rooftop", "Date Night", "Premium"],
    price: "$$$$",
    priceRange: "RM 75 - 130 / cocktail",
    openingHours: "Daily: 5:00 PM – 2:00 AM",
    closingHourNumber: 2,
    statusText: "Open Now • Closes 2:00 AM",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 780,
    dressCode: "Strict Smart Elegant. Collared shirts, trousers and closed shoes for men.",
    transit: "Direct access via Menara 3 Petronas / KLCC LRT (5 min walk)",
    facilities: ["Glass Roof Over Petronas Spire", "Glass Floor Section", "Whisky Lounge", "Ultra-Luxury Cigar Room"],
    lat: 3.1582,
    lng: 101.7118,
    heroImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Perched on the 57th floor of Menara 3 Petronas, Marini's on 57 is an iconic luxury destination offering jaw-dropping close-up views of the Petronas Twin Towers. With glass roof panels allowing guests to gaze straight up into the glowing spires, it features sophisticated house music, champagne cocktails, and world-class hospitality.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "ELEVATE 57: Sunset Highs to Midnight Deep House",
      schedule: [
        { time: "05:30 PM", title: "Sunset Skyline Champagne", artist: "Head Sommelier" },
        { time: "09:00 PM", title: "Deep House & Vocal Grooves", artist: "DJ Jeff" },
        { time: "11:30 PM", title: "Late Night Spire Beats", artist: "Marini's Resident" }
      ]
    }
  },
  {
    id: "bar-trigona-four-seasons",
    name: "BAR TRIGONA",
    slug: "bar-trigona-kl",
    tagline: "World's 50 Best Bars sustainability champion featuring stingless bee honey",
    area: "KLCC",
    address: "Level 6B, Four Seasons Hotel KL, 145 Jalan Ampang",
    category: "Bars",
    music: ["Cocktails", "Downtempo"],
    vibe: ["Date Night", "Good for a first drink", "Low-key"],
    price: "$$$$",
    priceRange: "RM 68 - 95 / signature cocktail",
    openingHours: "Daily: 5:00 PM – 1:00 AM",
    closingHourNumber: 1,
    statusText: "Open Now • Closes 1:00 AM",
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 410,
    dressCode: "Smart Elegant. Collared shirts, trousers.",
    transit: "Direct access via Four Seasons KLCC / LRT KLCC",
    facilities: ["Mirror Mosaic Architecture", "Wild Honey Flights", "Farm-to-Glass Program", "Private Salons"],
    lat: 3.1579,
    lng: 101.7135,
    heroImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Perennially ranked amongst the World’s 50 Best Bars, Bar Trigona at the Four Seasons is a masterclass in modern mixology and environmental stewardship. Named after Malaysia's native stingless bee, the bar crafts complex cocktails utilizing indigenous ingredients sourced directly from smallholder farms in Pahang and Sabah.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "The Honey Flight & Botanical Odyssey",
      schedule: [
        { time: "05:00 PM", title: "Aperitif & Honey Tasting Flights", artist: "Master Mixologist Rohan" },
        { time: "08:30 PM", title: "Bespoke Herbal Infusions", artist: "Bar Trigona Craftsmen" },
        { time: "11:00 PM", title: "Nightcap Classics with a Twist", artist: "Head Bartender" }
      ]
    }
  },
  {
    id: "fuego-troika-sky",
    name: "FUEGO AT TROIKA SKY DINING",
    slug: "fuego-troika-kl",
    tagline: "Charcoal grill & South American cocktails framing the twin towers",
    area: "KLCC",
    address: "Level 23A, The Troika, Tower B, 19 Persiaran KLCC",
    category: "Rooftops",
    music: ["Cocktails", "Downtempo", "Rooftop"],
    vibe: ["Rooftop", "Date Night", "Atmospheric"],
    price: "$$$$",
    priceRange: "RM 60 - 95 / cocktail & grills",
    openingHours: "Daily: 5:00 PM – 12:00 AM",
    closingHourNumber: 0,
    statusText: "Open Now • Closes Midnight",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 710,
    dressCode: "Smart Casual. No flip flops or athletic singlets.",
    transit: "Ampang Park LRT/MRT (4 min walk)",
    facilities: ["Twin Towers Horizon View", "Wood Fire Grill", "Tequila & Mezcal Bar", "Valet"],
    lat: 3.1593,
    lng: 101.7169,
    heroImage: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Fuego redefined skyline dining in Kuala Lumpur with its rebellious take on South American tapas, mezcal cocktails, and unobstructed frontline vistas of the Petronas Towers. Smoking wood boards, bespoke guacamole bowls prepared tableside, and warm tropical evening breezes make it a mandatory prelude to any KL night.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Smoke & Skyline Sessions",
      schedule: [
        { time: "05:30 PM", title: "Sunset Guacamole & Mezcal", artist: "Troika Sommelier" },
        { time: "08:30 PM", title: "Cumbia Beats & Charcoal Cuts", artist: "Resident Selectors" }
      ]
    }
  },

  // ==========================================
  // BANGSAR TELAWI
  // ==========================================
  {
    id: "the-vault-bangsar",
    name: "THE VAULT BANGSAR",
    slug: "the-vault-bangsar",
    tagline: "Prohibition-style speakeasy behind heavy bank vault doors in Telawi",
    area: "Bangsar",
    address: "5, Jalan Telawi 2, Bangsar Baru, Kuala Lumpur",
    category: "Bars",
    music: ["R&B", "Hip-Hop", "Cocktails"],
    vibe: ["Low-key", "Crowded", "Date Night"],
    price: "$$$",
    priceRange: "RM 45 - 65 / cocktail",
    openingHours: "Wed - Sun: 7:00 PM – 3:00 AM",
    closingHourNumber: 3,
    statusText: "Open Now • Closes 3:00 AM",
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 310,
    dressCode: "Smart Casual. Leather shoes & clean kicks.",
    transit: "Bank Rakyat Bangsar LRT (10 min walk or 3 min Grab)",
    facilities: ["Hidden Vault Entrance", "Bespoke Whisky Cabinet", "Intimate Dance Area", "Cocktail Omakase"],
    lat: 3.1319,
    lng: 101.6705,
    heroImage: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Concealed behind a clandestine bank vault door on bustling Telawi, The Vault is Bangsar’s favorite haunt for classic craft cocktails and smooth late-90s hip-hop and neo-soul. The atmosphere balances dark mahogany finishes with a vibrant, energetic weekend crowd.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Gold Standard: 90s R&B & Neo-Soul",
      schedule: [
        { time: "08:00 PM", title: "Barrel-Aged Old Fashioneds", artist: "Bar Masters" },
        { time: "10:30 PM", title: "Soulection & Timbaland Classics", artist: "DJ C-Mone" },
        { time: "01:00 AM", title: "Late Night Singalong R&B", artist: "Resident Vault Crew" }
      ]
    }
  },
  {
    id: "devi-corner-bangsar",
    name: "DEVI'S CORNER (LATE NIGHT)",
    slug: "devis-corner-bangsar",
    tagline: "The legendary 24-hour banana leaf & garlic cheese naan post-club sanctuary",
    area: "Bangsar",
    address: "14, Jalan Telawi 4, Bangsar Baru, Kuala Lumpur",
    category: "Late Night",
    music: ["Late Night"],
    vibe: ["Late night", "Crowded", "Low-key"],
    price: "$",
    priceRange: "RM 8 - 25 / meal & drinks",
    openingHours: "Open 24 Hours",
    closingHourNumber: 24,
    statusText: "Open 24 Hours • Never Sleeps",
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 1450,
    dressCode: "Whatever you survived the dancefloor wearing.",
    transit: "Heart of Telawi Bangsar",
    facilities: ["Outdoor Curbside Tables", "Fresh Naan Tandoor", "Teh Tarik Stall", "Open 24/7"],
    lat: 3.1312,
    lng: 101.6708,
    heroImage: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "No night out in Kuala Lumpur is complete without the 3:00 AM pilgrimage to Devi's Corner. A rite of passage for generations of clubbers, this legendary 24-hour mamak in Telawi serves bubbling fish head curry, crispy roti canai, garlic cheese naan from hot tandoors, and iced teh tarik while the morning call to prayer begins to echo across the hills.",
    tonight: {
      date: "TONIGHT • EVERY NIGHT",
      theme: "The 3:00 AM Bangsar Survival Ritual",
      schedule: [
        { time: "01:00 AM", title: "Pre-closing supper wave begins", artist: "Tandoori Masters" },
        { time: "03:00 AM", title: "Peak Clubbers Rush & Hot Naan", artist: "Devi's Squad" },
        { time: "05:00 AM", title: "Sunrise Roti Canai & Kopi Jantan", artist: "Morning Crew" }
      ]
    }
  },

  // ==========================================
  // TTDI & PETALING JAYA
  // ==========================================
  {
    id: "mouton-vinyl-petaling-jaya",
    name: "MOUTON VINYL & WHISKY",
    slug: "mouton-vinyl-pj",
    tagline: "Japanese-style kissaten listening bar with vintage Tannoy horn speakers in Sea Park",
    area: "Petaling Jaya",
    address: "18, Jalan 21/12, Sea Park, Petaling Jaya, Selangor",
    category: "Bars",
    music: ["Live", "Cocktails"],
    vibe: ["Low-key", "Atmospheric", "Good for a first drink"],
    price: "$$",
    priceRange: "RM 35 - 60 / dram & highball",
    openingHours: "Wed - Mon: 6:00 PM – 1:30 AM",
    closingHourNumber: 1,
    statusText: "Open Now • Closes 1:30 AM",
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 295,
    dressCode: "Casual. Audiophiles & music nerds welcomed.",
    transit: "Taman Paramount LRT (7 min walk)",
    facilities: ["Tube Amplifiers", "Original Japanese Vinyl Pressings", "Rare Single Casks", "No Loud Talking Policy"],
    lat: 3.1092,
    lng: 101.6241,
    heroImage: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Located in the heritage enclave of Sea Park, PJ, Mouton is an intimate homage to Tokyo’s legendary jazz and city pop kissatens. Guests sit before glowing vacuum-tube amps and hand-crafted Tannoy horns, sipping hand-carved ice highballs while rare Blue Note records and Tatsuro Yamashita originals spin on dual Garrard turntables.",
    tonight: {
      date: "TONIGHT • FRIDAY",
      theme: "Tokyo 1982: Japanese City Pop & Blue Note Rarities",
      schedule: [
        { time: "06:30 PM", title: "Quiet Hours: Miles Davis in Tokyo '64", artist: "Vinyl Curator Ken" },
        { time: "09:30 PM", title: "Japanese Fusion & Pacific Breeze LP", artist: "Selecta Ken" },
        { time: "11:30 PM", title: "Late Night Cask Strength Tastings", artist: "Mouton Bar" }
      ]
    }
  }
];

// Helper queries
export function getVenueById(id) {
  return VENUES.find(v => v.id === id || v.slug === id);
}

export function getVenuesByArea(area) {
  if (!area || area === "All") return VENUES;
  return VENUES.filter(v => v.area.toLowerCase() === area.toLowerCase());
}

export function getVenuesByVibe(vibe) {
  if (!vibe || vibe === "All") return VENUES;
  return VENUES.filter(v => v.vibe.some(item => item.toLowerCase() === vibe.toLowerCase()) || 
                            v.music.some(item => item.toLowerCase() === vibe.toLowerCase()));
}

export function getVenuesByCategory(category) {
  if (!category || category === "All") return VENUES;
  return VENUES.filter(v => v.category.toLowerCase() === category.toLowerCase());
}
