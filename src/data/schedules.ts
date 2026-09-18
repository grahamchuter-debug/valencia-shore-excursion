import valenciaSchedule from "./imported-schedules/valencia.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";

/** Wave 1C — authority-synced Valencia schedules. */
const SCHEDULE_FAQS = [
  {
    question: "How accurate are Valencia cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times and dates can change — always confirm arrival, departure and all-aboard with your cruise line before booking shore excursions.",
  },
  {
    question: "Where do cruise ships berth in Valencia?",
    answer:
      "Cruise ships use the Port of Valencia passenger terminal area. Transfer time to the historic centre is typically around 15–25 minutes by shuttle, taxi or metro; follow terminal signage on the day.",
  },
  {
    question: "Is a Valencia call long enough for Sagunto?",
    answer:
      "A full day in port can support a cruise-timed Sagunto excursion, but road time is longer than a city half day. Shorter calls are better suited to historic-centre walking or Editor's Choice city highlights.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow a generous buffer when returning from Sagunto or interior day trips",
  "Keep a lighter Plan B (historic centre on foot) if your call is shortened",
  "The historic centre is a short transfer — independent exploration works well on shorter windows",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "valencia",
    name: "Valencia",
    country: "Spain",
    seoTitle: "Valencia Cruise Ship Schedule — Mediterranean Port Calls",
    metaDescription:
      "Valencia cruise ship schedule for planning historic centre, City of Arts, food and Sagunto shore days around published arrival and departure times.",
    intro:
      "Valencia is one of Spain's most rewarding Mediterranean cruise cities — medieval streets, market life and the City of Arts beside a manageable port transfer.",
    description:
      "Historic Ciutat Vella, Turia Gardens and the Ciudad de las Artes y las Ciencias, with optional Sagunto and interior day trips when hours allow.",
    scheduleOverview:
      "Verified published calls for this planning window, including a validated 2028 itinerary subset. Always confirm arrival, departure and all-aboard times with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  valencia: valenciaSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getScheduleMonths(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function getScheduleYears(slug: string): ScheduleYear[] {
  const years = new Set<ScheduleYear>();
  for (const entry of getScheduleEntries(slug)) {
    const y = Number(entry.date.slice(0, 4)) as ScheduleYear;
    if (y) years.add(y);
  }
  return [...years].sort();
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
