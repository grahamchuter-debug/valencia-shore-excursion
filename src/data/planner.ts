import { SIGNATURE_EXPERIENCE_PATH, signatureValenciaExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Valencia explorer",
    description: "A low-risk city day using transfer, walking, markets and your own return buffer.",
  },
  {
    id: "historic",
    label: "First-time historic Valencia visitor",
    description: "A guided introduction through La Lonja, market quarter and cathedral surroundings.",
  },
  {
    id: "architecture",
    label: "Architecture & City of Arts traveller",
    description: "Historic centre plus Turia and the Ciudad de las Artes y las Ciencias.",
  },
  {
    id: "food",
    label: "Food & culinary traveller",
    description: "Central Market, tastings and Valencian flavour without leaving cruise timing.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "old-town", label: "Valencia Old Town" },
  { id: "city-of-arts", label: "City of Arts and Sciences" },
  { id: "central-market", label: "Central Market" },
  { id: "food", label: "Food experiences" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
  { id: "sagunto", label: "Sagunto & beyond" },
];

type PlanKey = "independent" | "historic" | "architecture" | "food";

export const VALENCIA_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Historic Valencia",
    summary:
      "The most flexible choice: transfer to the centre, Central Market, La Lonja, cathedral quarter and optional Turia toward the City of Arts.",
    minimumHours: 4,
    links: [
      {
        label: "Walking from Valencia Port",
        href: "/guides/walking-from-port",
        why: "Transfer options, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "DIY historic Valencia plan without an organised tour.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Transfer to the historic centre — Plaza del Ayuntamiento, Central Market and La Lonja." },
      { time: "Late morning", text: "Cathedral quarter and Plaza de la Virgen." },
      { time: "Afternoon", text: "Turia Gardens toward City of Arts if time allows — then return with a buffer." },
    ],
  },
  historic: {
    headline: "Historic Valencia introduction",
    summary:
      "Editor's Choice linking historic centre and City of Arts — our favourite first-time format when you want both halves efficiently.",
    minimumHours: 5,
    links: [
      {
        label: "Valencia Highlights & City of Arts and Sciences",
        href: "/shore-excursions/valencia-highlights-city-of-arts",
        why: "Editor's Choice for first-time cruise visitors.",
      },
      {
        label: "Private Half Day Valencia",
        href: "/shore-excursions/private-half-day-valencia",
        why: "Private Old Town alternative with flexible pacing.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide at the confirmed meeting point near the port or centre." },
      { time: "Guided highlights", text: "Historic centre, Turia corridor and City of Arts exteriors." },
      { time: "Return", text: "Return toward the cruise terminal with buffer time." },
    ],
  },
  architecture: {
    headline: "Historic & modern Valencia",
    summary:
      "Medieval streets and Calatrava's City of Arts — by guided tour or disciplined independent routing through Turia.",
    minimumHours: 5,
    links: [
      {
        label: "Valencia Highlights & City of Arts and Sciences",
        href: "/shore-excursions/valencia-highlights-city-of-arts",
        why: "Efficient historic-plus-modern combination.",
      },
      {
        label: "City of Arts and Sciences Guide",
        href: "/guides/city-of-arts-and-sciences",
        why: "Architecture focus and honest timing advice.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Historic centre orientation — Lonja and cathedral quarter." },
      { time: "Midday", text: "Turia walk toward the City of Arts." },
      { time: "Afternoon", text: "Photography time at the Hemisfèric and pools — then early return." },
    ],
  },
  food: {
    headline: "Valencian food & market day",
    summary:
      "Central Market, tastings and culinary experiences when flavour matters as much as façades.",
    minimumHours: 4,
    links: [
      {
        label: "Valencia's Culinary History with Traditional Food Tastings",
        href: "/shore-excursions/valencia-culinary-history",
        why: "Short tasting format near the centre.",
      },
      {
        label: "Small Group Cooking Class in Valencia",
        href: "/shore-excursions/small-group-cooking-class",
        why: "Hands-on paella culture when hours allow.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Central Market and Old Town food context." },
      { time: "Midday", text: "Tasting or cooking experience as chosen." },
      { time: "Afternoon", text: "Optional short stroll or early return to the ship." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("old-town") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 5 && !interests.includes("independent")) {
      return interests.includes("city-of-arts") || interests.includes("photography")
        ? "architecture"
        : "historic";
    }
    return "independent";
  }
  if (interests.includes("food") || interests.includes("central-market")) return "food";
  if (interests.includes("city-of-arts") || interests.includes("photography")) return "architecture";
  if (interests.includes("sagunto") && hours >= 8) return "historic";
  return hours >= 6 ? "historic" : "independent";
}

/** @deprecated Compatibility alias */
export const TALLINN_DAY_PLANS = VALENCIA_DAY_PLANS;

export function generateValenciaPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = VALENCIA_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureValenciaExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Valencia concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("sagunto") && hours >= 8) {
    excursions.push({
      label: "Valencia and Sagunto Highlights",
      href: "/shore-excursions/valencia-and-sagunto-highlights",
      why: "Roman Sagunto plus city monuments on a long port call.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer the historic centre on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Valencia Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal transfer times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Valencia Ship Schedule",
        href: "/ship-schedules/valencia",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Valencia options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long road day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Valencia terminal 60–90 minutes before all-aboard; Sagunto and interior days require additional road traffic contingency.",
      },
    ],
  };
}

/** @deprecated Compatibility aliases */
export function generateTallinnPlan(input: PlannerInput): PlannerResult {
  return generateValenciaPlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateValenciaPlan(input);
}
