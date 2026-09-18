import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Valencia without an excursion?",
    answer:
      "Yes. Valencia is one of Spain's easiest major cruise cities for independent exploration. Many visitors reach the historic centre and enjoy a flexible day on foot after a short transfer.",
  },
  {
    question: "How far is the historic centre from the cruise port?",
    answer:
      "Often around 15–25 minutes by shuttle, taxi or metro from the passenger terminal area, depending on berth and traffic.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want to combine historic and City of Arts highlights efficiently, prefer food or cultural experiences, need mobility support, or plan Sagunto or interior day trips. Skip when you prefer self-paced wandering and market time.",
  },
  {
    question: "How much walking is involved in Valencia?",
    answer:
      "Cobbles in the Old Town and longer Turia walks are normal. Food tours and private half-days reduce navigation stress while keeping you central.",
  },
  {
    question: "Is Valencia suitable for limited mobility?",
    answer:
      "Old Town cobbles and cathedral steps are challenging. Ask about private or transport-assisted options and consider flatter Turia paths with fewer historic interiors.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Longer Sagunto or interior days need the larger end of that buffer.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Valencia Highlights & City of Arts and Sciences — the best cruise-day combination of historic centre and Ciudad de las Artes y las Ciencias.",
  },
  {
    question: "What currency is used?",
    answer:
      "Spain uses the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
