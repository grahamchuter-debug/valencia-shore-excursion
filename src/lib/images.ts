export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Valencia skyline — historic centre towers and Mediterranean light",
  ),
  ogDefault: img(
    "og-default",
    "Valencia Old Town and City of Arts — Valencia Shore Excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Valencia Shore Excursions",
  },
  port: img("cruise-port", "Valencia cruise port — gateway to the historic centre"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Valencia Old Town historic streets and cathedral quarter"),
  coast: img("coastal", "Valencia Mediterranean coastline and harbour light"),
  coastal: img("coastal", "Valencia Mediterranean coastline and harbour light"),
  walking: img("walking", "Walking Valencia historic centre from the cruise port"),
  food: img("food-and-wine", "Central Market and Valencian tapas culture"),
  "food-and-wine": img("food-and-wine", "Central Market and Valencian tapas culture"),
  private: img("private", "Private Valencia experiences and scenic day trips"),
  photography: img("photography", "Valencia viewpoints — old town rooftops and modern architecture"),
  wine: img("food-and-wine", "Valencian wine and tapas"),
  compare: img("compare", "Comparing Valencia shore excursion options"),
  port: img("cruise-port", "Valencia cruise passenger terminal area"),
  highlights: img("highlights", "Valencia highlights for cruise visitors"),
  city: img("historic", "Valencia city centre from the cruise port"),
  nature: img("nature", "Valencia countryside — canyon hikes and thermal springs"),
  family: img("family", "Turia Gardens and family-friendly Valencia days ashore"),
  "hero-home": img("hero", "Valencia — Spain's city of innovation and tradition"),
  "city-of-arts": img(
    "city-of-arts",
    "City of Arts and Sciences — Valencia's striking modern architecture",
  ),
  "central-market": img(
    "central-market",
    "Mercado Central — Valencia's art nouveau market hall",
  ),
  "la-lonja": img("la-lonja", "La Lonja de la Seda — UNESCO Silk Exchange in Valencia"),
  cathedral: img("cathedral", "Valencia Cathedral and Plaza de la Virgen"),
  "turia-gardens": img("turia-gardens", "Turia Gardens — the green corridor through Valencia"),
  "old-town": img("old-town", "Valencia Old Town lanes and historic façades"),
  "plaza-ayuntamiento": img(
    "plaza-ayuntamiento",
    "Plaza del Ayuntamiento — Valencia's civic heart",
  ),
  viewpoints: img("viewpoints", "Valencia rooftop and architecture viewpoints"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "valencia-highlights-city-of-arts": "city-of-arts",
  "experiencing-valencia-like-a-local": "walking",
  "valencia-and-sagunto-highlights": "historic",
  "small-group-cooking-class": "food",
  "local-beach-bars-city-exploration": "coastal",
  "valencia-fashion-falleras": "food-and-wine",
  "valencia-rooftop-terrace-fiesta": "city-of-arts",
  "valencia-culinary-history": "food",
  "private-chulilla-canyon": "nature",
  "private-full-day-sagunto-valencia": "historic",
  "private-half-day-valencia": "old-town",
  "private-horchata-origins": "food",
  "private-montanejos-hike": "nature",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("old-town");

const highlightImageKeys: Record<string, string> = {
  "valencia-old-town": "old-town",
  "central-market": "central-market",
  "la-lonja": "la-lonja",
  cathedral: "cathedral",
  "plaza-de-la-virgen": "cathedral",
  "turia-gardens": "turia-gardens",
  "city-of-arts-and-sciences": "city-of-arts",
  viewpoints: "viewpoints",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "historic-or-modern": "city-of-arts",
  "best-shore-excursions": "highlights",
  "first-time-valencia-day": "old-town",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "nature",
  photography: "photography",
  "city-of-arts": "city-of-arts",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
