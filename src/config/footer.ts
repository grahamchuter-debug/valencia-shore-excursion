/**
 * Destination-specific footer link columns.
 * Clone procedure: replace labels/hrefs for the new port only.
 */

export type FooterLink = { href: string; label: string };

export type FooterColumns = {
  blurb: string;
  chooseTitle: string;
  choose: FooterLink[];
  planTitle: string;
  plan: FooterLink[];
  bookTitle: string;
  book: FooterLink[];
  independenceClause: string;
};

export const footerColumns: FooterColumns = {
  blurb:
    "Helping cruise passengers plan a confident day ashore in Valencia — honest advice on the cruise port, the historic centre, Central Market, Turia Gardens and the City of Arts and Sciences.",
  chooseTitle: "Choose your day",
  choose: [
    { href: "/compare/best-shore-excursions", label: "Best excursions" },
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/compare/first-time-valencia-day", label: "First-time Valencia" },
    { href: "/wow-collection", label: "The Wow Collection" },
  ],
  planTitle: "Plan your port day",
  plan: [
    { href: "/cruise-planner", label: "Cruise Planner" },
    { href: "/guides/walking-from-port", label: "Walking from port" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/shore-excursions", label: "Shore Excursions" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  bookTitle: "Book & contact",
  book: [
    { href: "/ship-schedules", label: "Cruise Ship Schedule" },
    { href: "/enquire", label: "Contact concierge" },
  ],
  independenceClause: "not affiliated with any cruise line or the local port authority.",
};
