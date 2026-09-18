import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "valencia-old-town",
    title: "Valencia Old Town",
    seoTitle: "Valencia Old Town from the Cruise Port",
    metaDescription:
      "Visit Valencia's Ciutat Vella from the cruise port — historic lanes, La Lonja, cathedral quarter and how long you need ashore.",
    attractionName: "Valencia Old Town",
    tagline: "Medieval lanes and merchant halls — the essential first stop.",
    overview:
      "Valencia's Old Town is the heart of most cruise calls: La Lonja, cathedral towers, hidden squares and market life within a compact walkable core.",
    body: [
      "Anchor at Plaza del Ayuntamiento, then loop through market, Lonja and the cathedral quarter.",
      "Many cruise guests reach the centre with a short shuttle or taxi from the passenger terminal.",
      "A guided highlights tour adds historical context; independent wandering is equally valid.",
    ],
    distanceFromPort: "Short transfer from cruise terminal",
    travelTime: "Often 15–25 minutes by shuttle, taxi or metro",
    timeNeeded: "2–3 hours for highlights; longer with Turia and City of Arts",
    gettingThere: [
      {
        method: "Shuttle / taxi / metro",
        detail: "Follow terminal signage toward official transfer options to the historic centre.",
        time: "15–25 min typical",
        cost: "Low–moderate",
      },
    ],
    highlights: [
      "Ciutat Vella historic core",
      "La Lonja and market quarter",
      "Cathedral and Plaza de la Virgen",
      "Café culture in historic lanes",
    ],
    tips: [
      "Wear cobble-ready shoes",
      "Protect a return buffer before all-aboard",
    ],
    faqs: [
      {
        question: "Can I see the Old Town without a tour?",
        answer:
          "Yes. Many passengers explore independently. Book a tour when you want historical narrative or efficient City of Arts combination.",
      },
    ],
    relatedAttractionSlugs: ["central-market", "la-lonja", "cathedral"],
    relatedExcursionSlug: "valencia-highlights-city-of-arts",
  },
  {
    slug: "central-market",
    title: "Central Market",
    seoTitle: "Mercado Central Valencia — Cruise Visitor Guide",
    metaDescription:
      "Valencia Central Market for cruise visitors — art nouveau halls, produce, timing tips and how to include Mercado Central in your port day.",
    attractionName: "Mercado Central",
    tagline: "Art nouveau ironwork and Valencian produce under one spectacular roof.",
    overview:
      "Mercado Central is where Valencian food culture feels most immediate — a sensory anchor for any historic centre day.",
    body: [
      "Visit in the morning when stalls are at their liveliest.",
      "It sits beside La Lonja — combine both in one compact loop.",
      "Independent browsing works well; food tours add curated context.",
    ],
    distanceFromPort: "Inside historic centre after port transfer",
    travelTime: "Included in centre transfer",
    timeNeeded: "30–60 minutes, or longer with nearby tapas",
    gettingThere: [
      {
        method: "Transfer to historic centre",
        detail: "Shuttle, taxi or metro to the centre, then walk to Mercado Central.",
        time: "15–25 min transfer plus short walk",
        cost: "Low–moderate",
      },
    ],
    highlights: [
      "Art nouveau architecture",
      "Fresh produce and local specialities",
      "Steps from La Lonja",
      "Authentic market atmosphere",
    ],
    tips: [
      "Morning is best for stall life",
      "Watch belongings in crowded aisles",
    ],
    faqs: [
      {
        question: "Is the market open on cruise days?",
        answer:
          "Usually yes on weekdays and Saturday mornings, but hours vary — check on the day.",
      },
    ],
    relatedAttractionSlugs: ["la-lonja", "valencia-old-town"],
    relatedExcursionSlug: "valencia-culinary-history",
  },
  {
    slug: "la-lonja",
    title: "La Lonja de la Seda",
    seoTitle: "La Lonja de la Seda Valencia — UNESCO Silk Exchange Guide",
    metaDescription:
      "La Lonja de la Seda for cruise passengers — Gothic merchant halls, UNESCO heritage and how to visit from Valencia cruise port.",
    attractionName: "La Lonja de la Seda",
    tagline: "Gothic merchant halls — Valencia's UNESCO silk exchange.",
    overview:
      "La Lonja is Valencia's most eloquent monument to Mediterranean trade — spiralling columns, vaulted halls and an orange-tree courtyard.",
    body: [
      "Exterior admiration is always possible; interior access depends on opening hours.",
      "It pairs naturally with Central Market next door.",
      "A guided tour adds context on Valencia's mercantile golden age.",
    ],
    distanceFromPort: "Historic centre after port transfer",
    travelTime: "Included in centre visit",
    timeNeeded: "20–40 minutes",
    gettingThere: [
      {
        method: "Walk from historic centre",
        detail: "La Lonja sits beside Mercado Central in the Ciutat Vella.",
        time: "Part of Old Town loop",
        cost: "Free exterior; ticketed interior",
      },
    ],
    highlights: [
      "UNESCO World Heritage site",
      "Gothic trading hall architecture",
      "Orange-tree courtyard",
      "Beside Central Market",
    ],
    tips: [
      "Check interior hours on arrival",
      "Combine with market visit in one loop",
    ],
    faqs: [
      {
        question: "Do I need tickets?",
        answer:
          "Interior visits typically require a modest ticket; façades and courtyard may be viewed without full entry depending on access.",
      },
    ],
    relatedAttractionSlugs: ["central-market", "valencia-old-town", "cathedral"],
    relatedExcursionSlug: "valencia-highlights-city-of-arts",
  },
  {
    slug: "cathedral",
    title: "Valencia Cathedral",
    seoTitle: "Valencia Cathedral — Cruise Visitor Guide",
    metaDescription:
      "Valencia Cathedral and Miguelete tower for cruise guests — Plaza de la Virgen, timing tips and how to include the cathedral in your port day.",
    attractionName: "Valencia Cathedral",
    tagline: "Romanesque, Gothic and Baroque layers beside Plaza de la Virgen.",
    overview:
      "The cathedral anchors Valencia's sacred heart — with the Miguelete tower offering classic rooftop views when queues and time allow.",
    body: [
      "Plaza de la Virgen offers atmosphere even if you skip interiors.",
      "Tower climbs add steps and time — budget honestly.",
      "Independent visitors reach the quarter easily after centre transfer.",
    ],
    distanceFromPort: "Historic centre after port transfer",
    travelTime: "Included in Old Town loop",
    timeNeeded: "30–60 minutes, longer with tower climb",
    gettingThere: [
      {
        method: "Walk from historic centre",
        detail: "Short walk from La Lonja and Central Market toward Plaza de la Virgen.",
        time: "Part of Old Town stroll",
        cost: "Free exterior; ticketed interior/tower",
      },
    ],
    highlights: [
      "Cathedral architecture",
      "Plaza de la Virgen setting",
      "Optional Miguelete tower views",
      "Historic quarter atmosphere",
    ],
    tips: [
      "Dress modestly if entering",
      "Tower queues vary by season",
    ],
    faqs: [
      {
        question: "Is the Holy Grail really here?",
        answer:
          "Tradition claims a chalice in the cathedral; whether you prioritise that story is a personal choice with limited time ashore.",
      },
    ],
    relatedAttractionSlugs: ["plaza-de-la-virgen", "valencia-old-town", "viewpoints"],
    relatedExcursionSlug: "private-half-day-valencia",
  },
  {
    slug: "plaza-de-la-virgen",
    title: "Plaza de la Virgen",
    seoTitle: "Plaza de la Virgen Valencia — Cruise Guide",
    metaDescription:
      "Plaza de la Virgen for cruise visitors — fountains, cathedral façades and a calmer café pause in Valencia’s historic centre between market and Turia walks.",
    attractionName: "Plaza de la Virgen",
    tagline: "Fountains, cathedral façades and a gentler Old Town rhythm.",
    overview:
      "Plaza de la Virgen is where Valencia feels contemplative — a natural café pause between market bustle and Turia walks.",
    body: [
      "Use it as a breathing stop before heading toward Turia Gardens.",
      "Terrace cafés suit a short rest without a long restaurant sitting.",
      "Photography is rewarding in softer morning or late-afternoon light.",
    ],
    distanceFromPort: "Historic centre after port transfer",
    travelTime: "Included in cathedral quarter walk",
    timeNeeded: "15–30 minutes, or longer with café stop",
    gettingThere: [
      {
        method: "Walk from cathedral quarter",
        detail: "Beside Valencia Cathedral in the Ciutat Vella.",
        time: "Part of Old Town loop",
        cost: "Free",
      },
    ],
    highlights: [
      "Fountain and square atmosphere",
      "Cathedral backdrop",
      "Café terraces",
      "Quieter than market crowds",
    ],
    tips: [
      "Good mid-route pause before Turia",
      "Try horchata at a nearby horchatería",
    ],
    faqs: [
      {
        question: "Is this the same as Plaza del Ayuntamiento?",
        answer:
          "No. Ayuntamiento is the grand civic square; Virgen is the cathedral square — both reward a visit on different moods.",
      },
    ],
    relatedAttractionSlugs: ["cathedral", "valencia-old-town"],
    relatedExcursionSlug: "experiencing-valencia-like-a-local",
  },
  {
    slug: "turia-gardens",
    title: "Turia Gardens",
    seoTitle: "Turia Gardens Valencia — Cruise Visitor Guide",
    metaDescription:
      "Turia Gardens for cruise passengers — the green corridor linking historic Valencia to the City of Arts and Sciences, with pacing tips for a port day.",
    attractionName: "Turia Gardens",
    tagline: "A former riverbed turned park — Valencia's green spine.",
    overview:
      "Turia Gardens links the historic centre to modern Valencia along shaded paths, bridges and open space — the essential walk toward the City of Arts.",
    body: [
      "Flat paths suit most walkers; distance to the City of Arts still requires honest timing.",
      "Bikes can speed the corridor; walking keeps pacing controllable.",
      "Start your return leg early if you continue to the Hemisfèric.",
    ],
    distanceFromPort: "From historic centre after port transfer",
    travelTime: "Walk from Old Town; 30–45 min to City of Arts on foot",
    timeNeeded: "40–90 minutes depending on how far you go",
    gettingThere: [
      {
        method: "Walk from cathedral quarter",
        detail: "Enter Turia from the Old Town side and follow east toward the City of Arts.",
        time: "Part of city day route",
        cost: "Free",
      },
    ],
    highlights: [
      "Shaded walking and cycling paths",
      "Bridges and open lawns",
      "Link to City of Arts",
      "Family-friendly open space",
    ],
    tips: [
      "Carry water in summer",
      "Do not underestimate distance to the City of Arts",
    ],
    faqs: [
      {
        question: "Can I skip Turia and taxi to the City of Arts?",
        answer:
          "Yes. Taxis and buses can shorten the link, but walking Turia is part of Valencia's charm.",
      },
    ],
    relatedAttractionSlugs: ["city-of-arts-and-sciences", "valencia-old-town"],
    relatedExcursionSlug: "valencia-highlights-city-of-arts",
  },
  {
    slug: "city-of-arts-and-sciences",
    title: "City of Arts and Sciences",
    seoTitle: "City of Arts and Sciences Valencia — Cruise Guide",
    metaDescription:
      "Ciudad de las Artes y las Ciencias for cruise visitors — architecture, Turia access, Oceanogràfic and honest timing from Valencia port.",
    attractionName: "City of Arts and Sciences",
    tagline: "Calatrava's white curves — Valencia's futuristic icon.",
    overview:
      "The Ciudad de las Artes y las Ciencias is among Europe's most striking modern ensembles — best approached through Turia Gardens with time to photograph and, optionally, visit interiors.",
    body: [
      "Exterior admiration is free and spectacular.",
      "Oceanogràfic and museum interiors need tickets and additional hours.",
      "Editor's Choice combines historic Valencia with the City of Arts in one cruise-timed day.",
    ],
    distanceFromPort: "Beyond historic centre via Turia",
    travelTime: "30–45 min walk from Old Town through Turia, or short taxi",
    timeNeeded: "1–3 hours for exteriors; half day with Oceanogràfic",
    gettingThere: [
      {
        method: "Walk via Turia Gardens",
        detail: "Follow the garden corridor from the historic centre.",
        time: "30–45 min walk",
        cost: "Free exteriors",
      },
      {
        method: "Taxi",
        detail: "Direct transfer from centre or port area if time is tight.",
        time: "10–20 min from centre",
        cost: "Moderate",
      },
    ],
    highlights: [
      "Hemisfèric and Science Museum exteriors",
      "Reflecting pools and photography angles",
      "Optional Oceanogràfic",
      "Stark contrast with medieval Valencia",
    ],
    tips: [
      "Start return planning before you arrive",
      "Midday sun is harsh on white surfaces — morning or late afternoon can photograph better",
    ],
    faqs: [
      {
        question: "Can I do Old Town and City of Arts in one independent day?",
        answer:
          "Yes with discipline and a long call. Many guests prefer Editor's Choice or a guided day for efficient routing.",
      },
    ],
    relatedAttractionSlugs: ["turia-gardens", "viewpoints"],
    relatedExcursionSlug: "valencia-highlights-city-of-arts",
  },
  {
    slug: "viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Valencia — Cruise Visitor Guide",
    metaDescription:
      "Best Valencia viewpoints for cruise passengers — Miguelete tower, Turia bridges and City of Arts angles, with honest timing for a day ashore.",
    attractionName: "Valencia Viewpoints",
    tagline: "Rooftops, garden bridges and reflective pools.",
    overview:
      "Valencia rewards climbers and photographers — Miguelete for Old Town panoramas, Turia bridges for modern architecture, and pool reflections at the City of Arts.",
    body: [
      "Choose one or two viewpoints rather than chasing every angle.",
      "Tower climbs involve queues and steps.",
      "Protect your ship buffer before attempting distant City of Arts photography late in the day.",
    ],
    distanceFromPort: "Historic centre and Turia after port transfer",
    travelTime: "Varies by viewpoint",
    timeNeeded: "20–60 minutes per stop",
    gettingThere: [
      {
        method: "Walk",
        detail: "Miguelete in Old Town; Turia bridges toward City of Arts.",
        time: "Part of city route",
        cost: "Tower ticket where applicable",
      },
    ],
    highlights: [
      "Miguelete tower panoramas",
      "Turia bridge framing",
      "City of Arts reflections",
      "Plaza del Ayuntamiento façades",
    ],
    tips: [
      "Arrive early at Miguelete if queues form",
      "Do not sacrifice all-aboard for one more shot",
    ],
    faqs: [
      {
        question: "What is the best single viewpoint?",
        answer:
          "Miguelete for Old Town; Turia bridges for City of Arts — match to your route.",
      },
    ],
    relatedAttractionSlugs: ["cathedral", "city-of-arts-and-sciences", "turia-gardens"],
    relatedExcursionSlug: "valencia-highlights-city-of-arts",
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
