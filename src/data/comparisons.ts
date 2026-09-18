import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Valencia Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Valencia shore excursion or explore independently? Honest cruise-day comparison of Old Town walks, City of Arts timing and return buffers.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Valencia is one of Spain's easiest major cruise cities to explore. Independence wins for flexible market-and-café days; a guided tour wins for combining historic and City of Arts highlights efficiently, food experiences and destinations beyond the city.",
    verdict:
      "Choose independence when the historic centre is your priority and you enjoy self-paced walking. Choose a tour when you want both halves of Valencia in one day, curated food experiences, structured pacing, or Sagunto and interior trips.",
    overview: [
      "Many guests reach the historic centre with a short transfer and explore Central Market, La Lonja and the cathedral quarter without an organised excursion.",
      "Editor's Choice links medieval streets with the City of Arts in one cruise-timed format.",
      "Beyond-city days almost always need organised transport to protect return timing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible Old Town wandering", optionB: "Historic + City of Arts efficiency" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced cobbles and Turia", optionB: "Guided pace with routing support" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond the city", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Valencia without an excursion?",
        answer:
          "Yes. Independent historic-centre days are common and often excellent.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want historic and City of Arts highlights combined efficiently, food or cooking experiences, limited-mobility support, or Sagunto and interior landscapes within limited hours.",
      },
    ],
    relatedSlugs: ["first-time-valencia-day", "best-shore-excursions", "historic-or-modern"],
    imageKey: "compare",
  },
  {
    slug: "historic-or-modern",
    title: "Historic or Modern?",
    seoTitle: "Valencia Old Town or City of Arts and Sciences?",
    metaDescription:
      "Compare historic Valencia and the City of Arts for a cruise day — walking, atmosphere, timing and which to prioritise with a realistic return-to-ship buffer.",
    kind: "versus",
    optionA: "Old Town",
    optionB: "City of Arts",
    summary:
      "The Old Town is Valencia's essential medieval and market experience. The City of Arts adds Santiago Calatrava's futuristic architecture across Turia Gardens.",
    verdict:
      "First-time visitors should prioritise the Old Town. Add the City of Arts when you have half a day remaining or when modern architecture matters more than another historic lane. Editor's Choice combines both when time is disciplined.",
    overview: [
      "Old Town needs a short transfer then walking; City of Arts is best reached through Turia or a direct transfer.",
      "Trying both deeply on a short call creates unnecessary stress.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "Medieval centre and markets", optionB: "Futuristic architecture" },
      { category: "From port", optionA: "Short transfer + walk", optionB: "Turia walk or taxi from centre" },
      { category: "Atmosphere", optionA: "Cobbled, historic, sensory", optionB: "Open, modern, photographic" },
      { category: "Best for", optionA: "First-time Valencia", optionB: "Architecture lovers" },
    ],
    faqs: [
      {
        question: "Can I do both?",
        answer:
          "Yes on a longer call with disciplined timing — or on Editor's Choice. On shorter calls, choose the Old Town.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-valencia-day"],
    imageKey: "city-of-arts",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Valencia Shore Excursions for Cruise Passengers",
    metaDescription:
      "Best Valencia shore excursions compared: Editor's Choice city highlights, local experiences, food tours, private days and Sagunto trips.",
    kind: "guide",
    summary:
      "Start with Valencia Highlights & City of Arts and Sciences for first-timers. Choose food and local experiences for flavour, private days for flexibility, and Sagunto only on long calls.",
    verdict:
      "Editor's Choice remains the clearest first-time pick. Match everything else to hours ashore and appetite for walking versus road time.",
    overview: [
      "City experiences stay close to the ship and protect timing.",
      "Interior and Sagunto days need honest clock management.",
    ],
    guideItems: [
      {
        name: "Valencia Highlights & City of Arts and Sciences",
        slug: "valencia-highlights-city-of-arts",
        href: "/shore-excursions/valencia-highlights-city-of-arts",
        reason: "Best introduction — historic centre plus City of Arts in one day.",
        topExcursion: "Valencia Highlights & City of Arts and Sciences",
        returnConfidence: "High",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Experiencing Valencia Like a Local",
        slug: "experiencing-valencia-like-a-local",
        href: "/shore-excursions/experiencing-valencia-like-a-local",
        reason: "Authentic neighbourhood rhythm beyond the monument checklist.",
        topExcursion: "Experiencing Valencia Like a Local",
        returnConfidence: "High",
        walkingDifficulty: "Relaxed–moderate",
      },
      {
        name: "Valencia and Sagunto Highlights",
        slug: "valencia-and-sagunto-highlights",
        href: "/shore-excursions/valencia-and-sagunto-highlights",
        reason: "Roman Sagunto plus city monuments when your call is long enough.",
        topExcursion: "Valencia and Sagunto Highlights",
        returnConfidence: "Good with generous buffer",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "What is Editor's Choice?",
        answer:
          "Valencia Highlights & City of Arts and Sciences — selected for first-time cruise visitors who want both historic and modern Valencia in one composed day.",
      },
    ],
    relatedSlugs: ["first-time-valencia-day", "tour-or-independent"],
    imageKey: "highlights",
  },
  {
    slug: "first-time-valencia-day",
    title: "First-Time Valencia Day",
    seoTitle: "First Time in Valencia on a Cruise — How to Spend the Day",
    metaDescription:
      "First-time Valencia cruise day plan: Old Town priorities, Central Market, Turia, City of Arts, independent vs tour, and what to skip.",
    kind: "guide",
    summary:
      "First-timers should anchor the day in the historic centre — market, Lonja and cathedral quarter. Add the City of Arts when hours remain.",
    verdict:
      "Do not try to see all of eastern Spain. See Valencia well — then decide if a future call deserves Sagunto or the interior.",
    overview: [
      "Transfer from the terminals toward Plaza del Ayuntamiento.",
      "Use Central Market and La Lonja for orientation, then consider Turia toward the City of Arts.",
      "Consider Editor's Choice if you want guided context with both historic and modern highlights.",
    ],
    guideItems: [
      {
        name: "Old Town",
        slug: "valencia-old-town",
        href: "/guides/old-town-guide",
        reason: "The essential first Valencia experience.",
        topExcursion: "Valencia Highlights & City of Arts and Sciences",
        returnConfidence: "Very high with buffer",
        walkingDifficulty: "Moderate",
      },
      {
        name: "City of Arts",
        slug: "city-of-arts-and-sciences",
        href: "/guides/city-of-arts-and-sciences",
        reason: "Modern architecture and photography.",
        topExcursion: "Valencia Highlights & City of Arts and Sciences",
        returnConfidence: "High if time disciplined",
        walkingDifficulty: "Moderate via Turia",
      },
      {
        name: "Independent plan",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "DIY routes when you prefer flexibility.",
        topExcursion: "Experiencing Valencia Like a Local",
        returnConfidence: "Your discipline",
        walkingDifficulty: "Self-paced",
      },
    ],
    faqs: [
      {
        question: "Should first-timers book a tour?",
        answer:
          "Optional. Book for efficient historic-plus-modern combination; explore independently if you prefer markets and flexible photography time.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "historic-or-modern"],
    imageKey: "old-town",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
