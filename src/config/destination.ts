/**
 * World 2.0 Destination Configuration — Valencia Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "valencia",
  name: "Valencia Shore Excursions",
  destination: "Valencia",
  descriptor: "Shore Excursions",
  strapline: "Spain's City of Innovation and Tradition",
  domain: "valenciashoreexcursion.com",
  url: "https://valenciashoreexcursion.com",
  description:
    "Independent Valencia shore excursions and honest cruise-port guidance — historic centre, Central Market, La Lonja, Turia Gardens and the City of Arts and Sciences.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "VL",
  pagesProject: "valencia-shore-excursions",
  paymentsWorkerName: "valencia-payments",
  d1DatabaseName: "valencia-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@valenciashoreexcursion.com",
    bookings: "bookings@valenciashoreexcursion.com",
    privacy: "privacy@valenciashoreexcursion.com",
  },
  legal: {
    tradingName: "Valencia Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "valencia",
    meetingPointLabel: "Valencia Cruise Port",
    country: "Spain",
  },
  seo: {
    defaultKeywords: [
      "Valencia Shore Excursions",
      "Valencia Cruise Excursions",
      "Valencia Cruise Port Guide",
      "City of Arts and Sciences",
      "Central Market Valencia",
      "La Lonja de la Seda",
      "Walk It Yourself Valencia",
      "Valencia Old Town",
      "Turia Gardens",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "History",
    "Architecture",
    "Walking",
    "Photography",
    "Food",
    "Families",
    "Walk It Yourself",
    "Modern Architecture",
    "Editor's Choice",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
