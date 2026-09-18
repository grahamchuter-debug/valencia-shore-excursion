/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Valencia take you? Choose the experience that fits your hours ashore — then build everything around your ship's schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A self-guided historic Valencia route — market, Lonja, cathedral quarter and optional Turia.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Valencia Highlights & City of Arts and Sciences — our favourite first-time combination.",
    href: "/shore-excursions/valencia-highlights-city-of-arts",
    icon: "luxury",
  },
  {
    id: "history",
    title: "History",
    body: "La Lonja, cathedral quarter and merchant halls in the Ciutat Vella.",
    href: "/guides/old-town-guide",
    icon: "route",
  },
  {
    id: "food",
    title: "Food",
    body: "Central Market, paella culture and Valencian tapas without leaving the walkable core.",
    href: "/guides/food-guide",
    icon: "food",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Medieval towers, market domes and Calatrava curves across Turia.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "families",
    title: "Families",
    body: "Turia Gardens and manageable city loops when travelling with children.",
    href: "/guides/one-day-in-valencia",
    icon: "family",
  },
  {
    id: "modern-architecture",
    title: "Modern Architecture",
    body: "The City of Arts and Sciences — Valencia's striking contemporary skyline.",
    href: "/guides/city-of-arts-and-sciences",
    icon: "viewpoint",
  },
];
