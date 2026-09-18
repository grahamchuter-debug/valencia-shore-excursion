import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureValenciaExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Mediterranean Valencia Discovery",
  seoTitle: "Signature Mediterranean Valencia Discovery — Future Private Day",
  metaDescription:
    "Preview a future small-group Valencia shore experience — maximum eight guests, historic centre, City of Arts and flexible discovery. Not currently bookable.",
  tagline:
    "A future small-group journey through Valencia — medieval markets, Turia Gardens and the City of Arts, designed around your ship, not a generic day tour.",
  overview:
    "Signature Mediterranean Valencia Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Valencia through the historic centre, Central Market context and City of Arts viewpoints in a carefully paced format, with optional culinary stops, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🏛",
      title: "Historic Valencia focus",
      description: "La Lonja, market quarter and cathedral context at the heart of the concept.",
    },
    {
      emoji: "🎨",
      title: "City of Arts time",
      description: "Turia approach and architecture photography rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Valencian lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Valencia return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Mediterranean Valencia Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Valencia shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor's Choice is our current recommended introduction. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing.",
    },
  ] as FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    title: signatureValenciaExperience.title,
    description: signatureValenciaExperience.tagline,
    href: SIGNATURE_EXPERIENCE_PATH,
  };
}
