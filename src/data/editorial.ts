import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Valencia cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "La Lonja, cathedral quarter and Old Town context." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Valencia day within easy reach of the ship — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Modern Valencia", shortLabel: "Modern", description: "City of Arts and Sciences when hours ashore allow the Turia walk or transfer." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Miguelete tower, Turia bridges and City of Arts reflections." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Valencia small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Turia Gardens and manageable city pacing with children." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Medieval towers beside futuristic white curves." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Central Market, paella culture and Valencian tapas." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Local neighbourhoods and quieter squares beyond the busiest market aisles." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Historic centre highlights when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Valencia Highlights & City of Arts and Sciences — historic centre and modern architecture in one cruise-timed day.",
    href: "/shore-excursions/valencia-highlights-city-of-arts",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Editor's Choice for first-time visitors who want both medieval and modern Valencia efficiently.",
    href: "/shore-excursions/valencia-highlights-city-of-arts",
    cta: "Discover Valencia",
  },
  {
    id: "historic",
    emoji: "🏛",
    label: "Best Historic Walk",
    description: "Private Half Day Valencia — flexible Old Town pacing for your party.",
    href: "/shore-excursions/private-half-day-valencia",
    cta: "Explore on foot",
  },
  {
    id: "food-wine",
    emoji: "🍽️",
    label: "Best Food Experience",
    description: "Valencia's Culinary History with Traditional Food Tastings — flavour without a full cooking class.",
    href: "/shore-excursions/valencia-culinary-history",
    cta: "Taste Valencia",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Beyond the City",
    description: "Sagunto or canyon day trips when your port call supports the road time.",
    href: "/compare/historic-or-modern",
    cta: "Compare city options",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "City of Arts angles and Turia bridge viewpoints for medieval-meets-modern contrast.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Turia Gardens and manageable city loops keep mixed-age parties moving without stress.",
    href: "/guides/one-day-in-valencia",
    cta: "Plan a family day",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Historic Valencia — market, Lonja, cathedral quarter and optional Turia with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Mediterranean Valencia Discovery",
    description: "A future maximum-eight-guest Valencia day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
