import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "Where medieval streets meet the future on the Mediterranean.";

export const homepageSubheading =
  "Explore Valencia's historic centre, Central Market, La Lonja, Turia Gardens and the City of Arts and Sciences — one of Spain's most walkable and rewarding cruise cities.";

export const homepageDestinationLine =
  "Old Town · Central Market · La Lonja · Turia Gardens · City of Arts and Sciences";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Valencia for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to the historic centre, City of Arts, food experiences or a longer Sagunto day — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Valencia",
    shortLabel: "First visit",
    description:
      "Compare walking the Old Town independently, a guided highlights tour, or modern architecture at the City of Arts before you choose.",
    href: "/compare/first-time-valencia-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Valencia is one of Spain's easiest major cruise cities to explore on foot — many guests reach the historic centre with a short transfer.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Valencia plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across historic Valencia, the City of Arts, culinary days and scenic escapes — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on the cruise port, Central Market, Old Town, Turia Gardens, City of Arts and when an organised tour actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Valencia will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Valencia. Mediterranean soul. Modern vision.",
  body: [
    "Valencia is the birthplace of paella and one of Spain's most elegant cruise cities — less crowded than Barcelona, yet rich with UNESCO heritage, market life and the startling white curves of the City of Arts and Sciences.",
    "We write like an independent cruise concierge: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. Guided days add reach and context; walking independently through the historic centre is often the finest choice of all.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "The historic centre is genuinely accessible",
    body: "Many cruise passengers reach Valencia's Old Town with a short shuttle, taxi or metro ride. Independent exploration is a first-class option — not a consolation prize.",
  },
  {
    title: "Guides shine when you want both halves of the city",
    body: "A knowledgeable guide helps you link medieval streets with the City of Arts efficiently. Organised transport matters most for Sagunto, canyon hikes and interior day trips.",
  },
  {
    title: "All-aboard beats published departure",
    body: "Plan from the moment you must be aboard, then add a buffer. The ship will not wait for one more photograph at the Hemisfèric.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Valencia without an excursion?",
      answer:
        "Yes. Valencia is one of Spain's easiest major cruise cities for independent exploration. Many visitors reach the historic centre, Central Market and Turia Gardens with a sensible transfer and return buffer. An organised excursion becomes especially useful for combining historic and modern highlights efficiently, limited mobility, or destinations beyond the city.",
    },
    {
      question: "How far is the historic centre from the cruise port?",
      answer:
        "Typically around 15–25 minutes by shuttle, taxi or metro depending on berth and routing — not usually a long walk from the terminal corridor. Exact timing varies; follow port signage and allow extra time if mobility is limited.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when you want to maximise time combining the historic centre and City of Arts, prefer guided food or cultural experiences, or need transport to Sagunto or the interior. Skip a tour when you enjoy flexible wandering, market stops and self-paced photography in the Old Town.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Valencia Highlights & City of Arts and Sciences — the best cruise-day combination of medieval Valencia and the Ciudad de las Artes y las Ciencias.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice",
    type: "guided",
    title: "Editor's Choice",
    eyebrow: "Our top pick",
    description:
      "Valencia Highlights & City of Arts and Sciences — historic centre and modern architecture in one well-paced small-group day.",
    href: "/shore-excursions/valencia-highlights-city-of-arts",
    cta: "View Editor's Choice",
    imageKey: "city-of-arts",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Historic Valencia at your own pace — often the finest day ashore from the cruise port.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "3–5 hours",
    distance: "Approximately 4–6 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "history",
    type: "history",
    title: "History & Heritage",
    description:
      "Cathedral, Silk Exchange and Old Town — guided context when you want the stories behind the stones.",
    href: "/guides/old-town-guide",
    cta: "Explore historic Valencia",
    imageKey: "historic",
  },
  {
    slug: "modern-valencia",
    type: "custom",
    title: "Modern Valencia",
    description:
      "The City of Arts and Sciences — Santiago Calatrava's futuristic Valencia across Turia Gardens.",
    href: "/guides/city-of-arts-and-sciences",
    cta: "Discover modern Valencia",
    imageKey: "city-of-arts",
  },
  {
    slug: "food-wine",
    type: "food-wine",
    title: "Food & Local Life",
    description:
      "Central Market, tapas and authentic Valencian cuisine without leaving the walkable core.",
    href: "/guides/food-guide",
    cta: "Taste Valencia",
    imageKey: "food",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Self-guided historic Valencia route for one of Spain's easiest major cruise cities to explore.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
    imageKey: "walking",
    duration: "3–5 hours",
    distance: "4–6 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent explorers",
  },
  {
    slug: "editors-choice",
    type: "guided",
    title: "Editor's Choice",
    description: "Historic centre and City of Arts in one cruise-timed day.",
    href: "/shore-excursions/valencia-highlights-city-of-arts",
    cta: "View top pick",
    imageKey: "city-of-arts",
  },
  {
    slug: "history",
    type: "history",
    title: "History",
    description: "La Lonja, cathedral quarter and medieval lanes in the Old Town.",
    href: "/guides/old-town-guide",
    cta: "Explore history",
    imageKey: "historic",
  },
  {
    slug: "modern-architecture",
    type: "custom",
    title: "Modern Architecture",
    description: "City of Arts and Sciences — Valencia's striking contemporary skyline.",
    href: "/guides/city-of-arts-and-sciences",
    cta: "See the City of Arts",
    imageKey: "city-of-arts",
  },
  {
    slug: "photography",
    type: "photography",
    title: "Photography",
    description: "Medieval towers, market domes and white futuristic curves.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "food-wine",
    type: "food-wine",
    title: "Food & Wine",
    description: "Central Market, paella culture and Valencian tapas.",
    href: "/shore-excursions/valencia-culinary-history",
    cta: "Taste Valencia",
    imageKey: "food",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Turia Gardens, manageable walks and Oceanogràfic time when hours allow.",
    href: "/guides/one-day-in-valencia",
    cta: "Family-friendly days",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "Flexible private pacing when your party wants the day shaped around you.",
    href: "/shore-excursions/private-half-day-valencia",
    cta: "Browse private options",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Valencia Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Valencia?",
  subtitle:
    "Medieval streets, market life, Turia Gardens or the City of Arts — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "historic-valencia",
      emoji: "🏛",
      title: "Explore Historic Valencia",
      tagline:
        "La Lonja, Central Market, cathedral quarter and Plaza de la Virgen — at your pace or with a guide when you want context.",
      highlights: [
        "UNESCO Silk Exchange and Old Town lanes",
        "Central Market and Valencian food culture",
        "Cathedral and Plaza de la Virgen",
        "Walkable historic core after a short transfer",
        "Ideal when history and markets are your priority",
      ],
      cta: "Explore the Old Town",
      href: "/guides/old-town-guide",
      imageKey: "historic",
      wide: true,
    },
    {
      slug: "modern-valencia",
      emoji: "🎨",
      title: "Discover Modern Valencia",
      tagline:
        "Turia Gardens and the City of Arts and Sciences — the futuristic half of Valencia's story.",
      highlights: [
        "Santiago Calatrava's iconic architecture",
        "Turia Gardens green corridor",
        "Photography time at the Hemisfèric and surrounding structures",
        "Best combined with a morning in the historic centre",
        "Allow honest time for the garden walk or transfer",
      ],
      cta: "See the City of Arts",
      href: "/guides/city-of-arts-and-sciences",
      imageKey: "city-of-arts",
      wide: true,
    },
    {
      slug: "editors-choice",
      emoji: "⭐",
      title: "Editor's Choice Adventure",
      tagline:
        "Our recommended small-group day linking historic Valencia with the City of Arts and Sciences — when you want both without the logistics stress.",
      highlights: [
        "Historic centre highlights with commentary",
        "Turia corridor toward modern Valencia",
        "City of Arts exteriors and photography time",
        "Small-group cruise-timed pacing",
        "Best when you want both halves in one composed day",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/valencia-highlights-city-of-arts",
      imageKey: "city-of-arts",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Valencia?",
  subtitle:
    "The honest answer: Valencia is one of Spain's easiest major cruise cities to explore independently. If you enjoy walking, history, markets and cafés, you can have an outstanding day without an excursion. If you want to maximise time combining the historic centre and City of Arts, a guided excursion provides excellent value. Neither choice is automatically correct.",
  independent: {
    title: "You can explore Valencia independently — and many passengers do",
    body: "The historic centre sits a short transfer from the cruise port, making a flexible, lower-cost day realistic for most guests:",
    items: [
      "Plaza del Ayuntamiento and Old Town lanes",
      "Central Market and La Lonja de la Seda",
      "Valencia Cathedral and Plaza de la Virgen",
      "Turia Gardens toward the City of Arts",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "Organised commentary and routing matter when you want more than wandering — or when distance and timing need discipline:",
    items: [
      {
        label: "Historic + City of Arts",
        detail: "both halves of Valencia in one cruise-timed day — our Editor's Choice format",
      },
      {
        label: "Food and culture",
        detail: "cooking classes, culinary history and local experiences with curated stops",
      },
      {
        label: "Sagunto and beyond",
        detail: "Roman heritage and interior landscapes with organised transport",
      },
      {
        label: "Private pacing",
        detail: "flexible half-days when your party wants personalised routing",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/walking-from-port", label: "Walking from the cruise port" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Valencia experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
