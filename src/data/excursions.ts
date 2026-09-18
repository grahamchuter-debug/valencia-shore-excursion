import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships berth at the Port of Valencia (Puerto de Valencia) passenger terminal area. The historic centre is typically 15–25 minutes away by shuttle, taxi or metro depending on berth and routing — many guests transfer toward Plaza del Ayuntamiento and the Old Town rather than walking the full port corridor. Turia Gardens forms a green link between the centre and the City of Arts and Sciences. For Sagunto, canyon hikes or interior day trips, confirm meeting instructions and plan from your ship's all-aboard time, not merely the published departure. Aim to be back at the terminal 60–90 minutes early; longer countryside days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Valencia cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "valencia-highlights-city-of-arts",
    title: "Valencia Highlights & City of Arts and Sciences",
    seoTitle: "Valencia Highlights & City of Arts and Sciences | Editor's Choice",
    metaDescription:
      "Editor's Choice Valencia shore excursion combining the historic centre with the City of Arts and Sciences — small-group city highlights for cruise passengers.",
    category: "Editor's Choice",
    tagline:
      "The best cruise-day combination of medieval Valencia and the Ciudad de las Artes y las Ciencias.",
    duration: "Approximately 4–5 hours",
    pace: "Moderate",
    bestFor:
      "First-time cruise visitors who want both the historic centre and the City of Arts in one well-paced day",
    overview:
      "Valencia's genius is the contrast between its medieval streets and Santiago Calatrava's futuristic skyline. This Editor's Choice small-group day links the historic centre — Central Market, La Lonja and cathedral quarter — with the City of Arts and Sciences, sequenced for cruise timing rather than a rushed checklist.",
    body: [
      "We chose this tour because Valencia rewards two moods in one call: Gothic silk merchants' halls and orange-tree squares, then the white curves of the Hemisfèric and Oceanogràfic from across Turia Gardens.",
      "A knowledgeable guide helps you understand why Valencia feels less crowded than Barcelona while still delivering world-class architecture — both centuries old and strikingly modern.",
      "Guests who prefer a slower café-led wander through the Old Town alone may be happier walking independently — and that is a perfectly good choice from this port.",
      "Expect moderate walking on historic surfaces and a transfer or garden walk toward the City of Arts. Exact sequencing flexes with group pace, traffic and ship timing.",
    ],
    highlights: [
      "Historic centre orientation — market, Lonja and cathedral quarter",
      "Turia Gardens corridor toward modern Valencia",
      "City of Arts and Sciences exteriors and photography time",
      "Small-group pacing designed for cruise passengers",
      "Return planned around your ship's all-aboard",
    ],
    itinerary: [
      {
        title: "Meet near the cruise port",
        detail:
          "Join your guide at the confirmed meeting point and transfer toward the historic centre.",
      },
      {
        title: "Historic Valencia highlights",
        detail:
          "Explore Plaza del Ayuntamiento, Central Market surroundings, La Lonja de la Seda and the cathedral quarter with commentary.",
      },
      {
        title: "Turia Gardens and modern Valencia",
        detail:
          "Follow the garden corridor toward the City of Arts and Sciences for exterior architecture and viewpoints.",
      },
      {
        title: "Return to ship",
        detail:
          "Return toward the cruise terminal with a deliberate buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Valencia",
      "English-speaking guide commentary",
      "Historic centre and City of Arts orientation",
      "Transport or routing as stated on your voucher",
      "Return planned around the ship's all-aboard",
    ],
    notIncluded: [
      "Entrance fees for museums, the Oceanogràfic or cathedral interiors unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — historic cobbles and longer garden walks",
      "Bring a light layer; Turia can feel breezy",
      "If you want maximum unstructured wandering, consider exploring independently instead",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It is the strongest cruise-day combination of Valencia's historic centre and the City of Arts and Sciences — the contrast that defines the city, in one well-paced small-group format.",
      },
      {
        question: "Do I need this tour, or can I walk alone?",
        answer:
          "You can explore much of the centre independently. Choose the tour when you want both historic and modern Valencia combined efficiently with commentary; choose independence when you prefer flexible pacing and café stops.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Moderate walking on historic surfaces plus the Turia corridor. Guests with limited mobility should ask about step-heavy sections and alternative pacing in advance.",
      },
    ],
    relatedExcursionSlugs: [
      "experiencing-valencia-like-a-local",
      "private-half-day-valencia",
      "valencia-and-sagunto-highlights",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic streets and garden paths",
    cruiseSuitability: "Best with a solid half day or more usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "Valencia's greatest cruise-day story is the contrast between medieval streets and the City of Arts — best experienced in one composed itinerary.",
      whyRecommended:
        "First-time visitors often want both halves of the city but underestimate the walking and routing between them. This experience delivers historic context and modern architecture without turning the day into a self-navigated marathon.",
      whoItSuits:
        "Curious first-timers, architecture lovers and guests who want Old Town depth plus the Ciudad de las Artes y las Ciencias within realistic cruise hours.",
      whatMakesItSpecial:
        "You leave with stories behind La Lonja and the market — not only photographs of white curves — and still return with composure.",
      cruiseFit:
        "Small-group city routing keeps the historic core and City of Arts within one disciplined half-day or full-day window — more practical than juggling separate taxis on your own.",
      theExperience:
        "You understand why Valencia is one of Spain's most rewarding Mediterranean cruise ports — medieval, modern and unmistakably Valencian.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "experiencing-valencia-like-a-local",
    title: "Experiencing Valencia Like a Local",
    seoTitle: "Experiencing Valencia Like a Local — Shore Excursion",
    metaDescription:
      "Small-group Valencia shore excursion for cruise passengers — local neighbourhoods, authentic stops and Mediterranean rhythm away from the obvious checklist.",
    category: "Walk It Yourself",
    tagline: "Neighbourhood rhythm, local stops and Valencia beyond the postcard.",
    duration: "Approximately 5 hours",
    pace: "Relaxed",
    bestFor: "Guests who want authentic Valencian life rather than a monuments-only circuit",
    overview:
      "This small-group experience leans into Valencia as a lived-in Mediterranean city — markets, bars, everyday squares and the kind of local detail a checklist tour skips.",
    body: [
      "Valencia is walkable and rewarding at human pace. This format helps you find the rhythm — where locals eat, how the city breathes between monuments.",
      "It suits guests who already know the headline sights or who prefer atmosphere over museum interiors.",
      "If you want maximum independence with zero commentary, our Walk It Yourself guide is the honest alternative.",
    ],
    highlights: [
      "Small-group local orientation",
      "Authentic neighbourhoods and everyday Valencia",
      "Market and café culture context",
      "Cruise-timed meeting near the port",
      "Less checklist, more character",
    ],
    itinerary: [
      {
        title: "Meet and orient",
        detail: "Join your guide and outline the day's local-focused route against your all-aboard.",
      },
      {
        title: "Neighbourhood exploration",
        detail: "Walk selected districts with commentary on Valencian daily life and culture.",
      },
      {
        title: "Local stops",
        detail: "Pause at market, bar or tasting stops as the confirmed itinerary allows.",
      },
      {
        title: "Return buffer",
        detail: "Finish with time to return toward the cruise terminal.",
      },
    ],
    included: [
      "English-speaking local guide",
      "Small-group city routing",
      "Included stops as stated on your voucher",
    ],
    notIncluded: [
      "Additional food and drinks beyond included stops",
      "Museum entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention dietary requirements when you enquire",
      "Comfortable shoes for urban walking",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this different from Editor's Choice?",
        answer:
          "Yes. Editor's Choice combines historic centre and City of Arts highlights. This experience emphasises local life and neighbourhood texture.",
      },
    ],
    relatedExcursionSlugs: [
      "valencia-highlights-city-of-arts",
      "local-beach-bars-city-exploration",
      "valencia-culinary-history",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed to moderate — urban streets",
    cruiseSuitability: "Best with at least a half day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "valencia-and-sagunto-highlights",
    title: "Valencia and Sagunto Highlights",
    seoTitle: "Valencia and Sagunto Highlights Shore Excursion",
    metaDescription:
      "Full-day small-group shore excursion — Valencia City of Arts, La Lonja, Cathedral and ancient Sagunto Roman heritage for cruise passengers.",
    category: "History",
    tagline: "Roman Sagunto and Valencia's greatest monuments in one long cruise day.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    bestFor: "Guests with a full port call who want both Valencia city highlights and Sagunto's Roman hill",
    overview:
      "This longer small-group day pairs Valencia's Lonja, cathedral quarter and City of Arts with Sagunto's Roman theatre and castle hill — for passengers who accept meaningful road time.",
    body: [
      "Be honest with the clock: Sagunto adds transfer time. If your call is short, stay in Valencia independently or choose Editor's Choice instead.",
      "The reward is a rare combination — UNESCO silk exchange and futuristic architecture, then Roman stones above the Mediterranean plain.",
      "Guests who prefer a single-city day should not force both.",
    ],
    highlights: [
      "La Lonja de la Seda and cathedral quarter",
      "City of Arts and Sciences",
      "Sagunto Roman theatre and castle",
      "Small-group pacing",
      "Full-day cruise-aware routing",
    ],
    itinerary: [
      {
        title: "Valencia city highlights",
        detail: "Explore key historic and modern landmarks with guided commentary.",
      },
      {
        title: "Transfer to Sagunto",
        detail: "Drive to Sagunto with orientation en route.",
      },
      {
        title: "Sagunto exploration",
        detail: "Visit Roman and medieval highlights on the hill as timing allows.",
      },
      {
        title: "Return to port",
        detail: "Drive back with a generous buffer before all-aboard.",
      },
    ],
    included: [
      "Round-trip transport from Valencia cruise port area",
      "English-speaking guide",
      "Valencia and Sagunto orientation",
    ],
    notIncluded: [
      "Lunch unless stated on your voucher",
      "Entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only choose this with a solid full day ashore",
      "Keep a Plan B city day if your call is shortened",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How much time do I need?",
        answer:
          "A full port call. Shorter windows are better spent in Valencia on foot or on a half-day city tour.",
      },
    ],
    relatedExcursionSlugs: [
      "private-full-day-sagunto-valencia",
      "valencia-highlights-city-of-arts",
      "private-half-day-valencia",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — city walking and Sagunto slopes",
    cruiseSuitability: "Requires a long, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "small-group-cooking-class",
    title: "Small Group Cooking Class in Valencia",
    seoTitle: "Small Group Cooking Class Valencia — Shore Excursion",
    metaDescription:
      "Learn Valencian cooking on a cruise-friendly small-group class — paella culture, local ingredients and a memorable half-day ashore.",
    category: "Food",
    tagline: "Hands-on Valencian cooking in the city that claims paella.",
    duration: "Approximately 3 hours",
    pace: "Relaxed",
    bestFor: "Food-curious guests who want a tactile, memorable experience close to the city",
    overview:
      "Valencia is the spiritual home of paella. This small-group cooking class keeps you close to the ship while learning techniques, ingredients and the stories behind the region's most famous dish.",
    body: [
      "A class suits guests who want to eat Valencia rather than only photograph it.",
      "Dietary requirements should be raised at booking. Exact menus flex with season and group size.",
      "Guests seeking maximum sightseeing should choose a city highlights tour or walk independently instead.",
    ],
    highlights: [
      "Hands-on Valencian cooking instruction",
      "Small-group format",
      "Local ingredients and culinary context",
      "Short duration protects return buffer",
      "Memorable alternative to a monuments-only day",
    ],
    itinerary: [
      {
        title: "Meet at the cooking venue",
        detail: "Join your instructor and review the menu for the session.",
      },
      {
        title: "Prepare and cook",
        detail: "Work through selected dishes with guidance on Valencian technique.",
      },
      {
        title: "Taste and finish",
        detail: "Enjoy what you have prepared before returning toward the port.",
      },
    ],
    included: [
      "Cooking instruction as stated on your voucher",
      "Included tastings or meal components",
      "English-speaking host or chef",
    ],
    notIncluded: [
      "Additional drinks beyond included components",
      "Gratuities",
      "Transport unless stated on your voucher",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention allergies when you enquire",
      "Allow time to return to the terminal after the class",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is paella always on the menu?",
        answer:
          "Valencian rice dishes are typically central, but exact menus depend on the confirmed class and season.",
      },
    ],
    relatedExcursionSlugs: [
      "valencia-culinary-history",
      "valencia-rooftop-terrace-fiesta",
      "experiencing-valencia-like-a-local",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Light — mostly standing in a kitchen setting",
    cruiseSuitability: "Strong option for shorter or flexible calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "local-beach-bars-city-exploration",
    title: "Local Beach Bars and Guided Valencia City Exploration",
    seoTitle: "Local Beach Bars & Valencia City Exploration Shore Excursion",
    metaDescription:
      "Combine Valencia city exploration with local beach bar culture — Mediterranean lifestyle and guided orientation for cruise passengers.",
    category: "Food",
    tagline: "City sights and seaside chiringuito culture in one relaxed day.",
    duration: "Approximately 5 hours",
    pace: "Relaxed",
    bestFor: "Guests who want urban highlights plus a taste of Valencia's beach-side social life",
    overview:
      "Valencia lives between its historic centre and the Mediterranean. This experience balances guided city exploration with local beach bar stops — atmosphere, not only monuments.",
    body: [
      "The format suits warm-weather calls when you want sea air as well as La Lonja and market streets.",
      "Exact beach stops depend on season and voucher details.",
      "Pure history enthusiasts may prefer Editor's Choice or an independent Old Town walk.",
    ],
    highlights: [
      "Guided Valencia city orientation",
      "Local beach bar culture",
      "Mediterranean lifestyle context",
      "Relaxed pacing",
      "Cruise-timed return",
    ],
    itinerary: [
      {
        title: "City exploration",
        detail: "Walk selected historic highlights with your guide.",
      },
      {
        title: "Beach-side stop",
        detail: "Pause at a local beach bar for refreshments (own expense unless stated).",
      },
      {
        title: "Return",
        detail: "Return toward the cruise terminal with buffer time.",
      },
    ],
    included: [
      "English-speaking guide",
      "City orientation routing",
      "Beach bar visit as stated on voucher",
    ],
    notIncluded: [
      "Food and drinks unless stated",
      "Entrance fees",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring sun protection in summer",
      "Swimwear optional — this is a social stop, not a beach day",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is swimming included?",
        answer:
          "Typically no. The focus is beach-bar culture and city exploration within cruise timing.",
      },
    ],
    relatedExcursionSlugs: [
      "experiencing-valencia-like-a-local",
      "valencia-rooftop-terrace-fiesta",
      "valencia-culinary-history",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed to moderate",
    cruiseSuitability: "Best with at least a half day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "valencia-fashion-falleras",
    title: "Valencia Fashion and Falleras with Tapas and Wine",
    seoTitle: "Valencia Fashion & Falleras with Tapas and Wine",
    metaDescription:
      "Discover Fallas culture, Valencian fashion and fallera traditions with tapas and wine on a cruise-friendly shore excursion.",
    category: "Food",
    tagline: "Fallas heritage, fallera elegance and Valencian flavours.",
    duration: "Approximately 5 hours",
    pace: "Relaxed",
    bestFor: "Culture and food lovers curious about Fallas, fashion and Valencian identity",
    overview:
      "Fallas defines Valencia's soul — even outside March. This experience explores fallera culture, fashion and tradition through guided stops, tapas and wine.",
    body: [
      "You learn why Valencia's festival identity matters year-round, not only during the pyrotechnic weeks.",
      "Tapas and wine stops weave culture and flavour together.",
      "Guests wanting pure architecture should consider Editor's Choice instead.",
    ],
    highlights: [
      "Fallas and fallera cultural context",
      "Fashion and tradition stops",
      "Tapas and wine tastings",
      "Small-group atmosphere",
      "Distinctive Valencian identity",
    ],
    itinerary: [
      {
        title: "Cultural introduction",
        detail: "Meet your guide and outline Fallas and fallera heritage.",
      },
      {
        title: "Fashion and tradition stops",
        detail: "Visit selected venues or workshops as the itinerary allows.",
      },
      {
        title: "Tapas and wine",
        detail: "Enjoy guided tastings with local commentary.",
      },
      {
        title: "Return",
        detail: "Finish with time toward the cruise terminal.",
      },
    ],
    included: [
      "English-speaking guide",
      "Included tastings as stated on voucher",
      "Cultural orientation",
    ],
    notIncluded: [
      "Additional food and wine beyond included tastings",
      "Gratuities",
      "Personal shopping",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Raise dietary requirements at booking",
      "A distinctive choice when you have already seen the headline monuments",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Do I need to visit during Fallas?",
        answer:
          "No. The experience explores year-round culture and traditions, though March visits feel especially atmospheric.",
      },
    ],
    relatedExcursionSlugs: [
      "valencia-culinary-history",
      "valencia-rooftop-terrace-fiesta",
      "experiencing-valencia-like-a-local",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed — short walks between stops",
    cruiseSuitability: "Best with at least a half day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "valencia-rooftop-terrace-fiesta",
    title: "Valencia Rooftop Terrace Fiesta, Culinary Delights, and Arts Discovery",
    seoTitle: "Valencia Rooftop Terrace Fiesta & Arts Discovery Shore Excursion",
    metaDescription:
      "Rooftop terraces, culinary delights and arts discovery on a Valencia shore excursion — elegant Mediterranean pacing for cruise guests.",
    category: "Food",
    tagline: "Rooftop views, culinary stops and Valencia's creative side.",
    duration: "Approximately 5 hours",
    pace: "Relaxed",
    bestFor: "Guests who want elevated atmosphere, food and architecture without a strenuous walking day",
    overview:
      "This experience leans into Valencia's elegant side — rooftop terraces, curated culinary stops and arts discovery — paced for a composed cruise afternoon.",
    body: [
      "Rooftop perspectives reveal the city's layered skyline — medieval towers beside modern lines.",
      "Culinary stops are part of the narrative, not an afterthought.",
      "Guests seeking maximum monument coverage should compare Editor's Choice.",
    ],
    highlights: [
      "Rooftop terrace access or viewpoints",
      "Curated culinary delights",
      "Arts and architecture discovery",
      "Relaxed premium pacing",
      "Small-group format",
    ],
    itinerary: [
      {
        title: "Meet and orient",
        detail: "Join your guide and confirm timing against all-aboard.",
      },
      {
        title: "Terrace and arts stops",
        detail: "Visit rooftop and arts-related venues as confirmed on your voucher.",
      },
      {
        title: "Culinary delights",
        detail: "Enjoy selected food stops with local context.",
      },
      {
        title: "Return",
        detail: "Return toward the cruise terminal with buffer time.",
      },
    ],
    included: [
      "English-speaking guide",
      "Included tastings or venue access as stated",
      "Curated routing",
    ],
    notIncluded: [
      "Additional food and drinks beyond inclusions",
      "Gratuities",
      "Entrance fees unless stated",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Dress comfortably but consider smart-casual for terrace venues",
      "Photography-friendly — bring a charged phone or camera",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Are rooftop visits weather-dependent?",
        answer:
          "Yes. Operators may adjust routing in high winds or rain while preserving the culinary and arts focus.",
      },
    ],
    relatedExcursionSlugs: [
      "valencia-fashion-falleras",
      "valencia-culinary-history",
      "valencia-highlights-city-of-arts",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Light to moderate",
    cruiseSuitability: "Best with at least a half day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "valencia-culinary-history",
    title: "Valencia's Culinary History with Traditional Food Tastings",
    seoTitle: "Valencia Culinary History & Food Tastings Shore Excursion",
    metaDescription:
      "Valencia culinary history shore excursion — traditional food tastings, market culture and the story of paella's homeland.",
    category: "Food",
    tagline: "Centuries of Valencian flavour in thoughtful tasting stops.",
    duration: "Approximately 3 hours",
    pace: "Relaxed",
    bestFor: "Food-focused guests who want history you can taste without a full cooking class",
    overview:
      "Valencia's table tells its history — rice, horchata, market produce and Mediterranean trade. This shorter tasting experience keeps you central while exploring culinary heritage.",
    body: [
      "Ideal when you want food depth but still have independent time for the Old Town.",
      "Tastings are the core; exact venues flex with season.",
      "Hungry guests may still want a later tapas stop on their own.",
    ],
    highlights: [
      "Valencian culinary history commentary",
      "Traditional food tastings",
      "Market and local food culture",
      "Short format near the centre",
      "Cruise-aware pacing",
    ],
    itinerary: [
      {
        title: "Meet in the centre",
        detail: "Join near the historic core and outline the tasting route.",
      },
      {
        title: "Tasting stops",
        detail: "Sample traditional flavours with historical context.",
      },
      {
        title: "Finish near the centre",
        detail: "End within easy reach of independent time or return transport.",
      },
    ],
    included: [
      "English-speaking food guide",
      "Included tastings as stated on voucher",
      "Central Valencia routing",
    ],
    notIncluded: [
      "Additional food and drinks beyond tastings",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention allergies when you enquire",
      "Pairs well with an independent afternoon in Turia Gardens",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this a full meal?",
        answer:
          "It is a tasting experience rather than a formal restaurant lunch. Expect several samples.",
      },
    ],
    relatedExcursionSlugs: [
      "small-group-cooking-class",
      "experiencing-valencia-like-a-local",
      "private-horchata-origins",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed — short distances between stops",
    cruiseSuitability: "Strong option for shorter or flexible calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-chulilla-canyon",
    title: "Private Chulilla Canyon Hike and Village Day Trip",
    seoTitle: "Private Chulilla Canyon Hike from Valencia Cruise Port",
    metaDescription:
      "Private Chulilla canyon hike and village day trip from Valencia — dramatic landscapes beyond the city for active cruise passengers.",
    category: "Walking",
    tagline: "Dramatic canyon trails and a whitewashed village beyond Valencia.",
    duration: "Approximately 7 hours",
    pace: "Moderate",
    bestFor: "Active guests with a full port call who want nature instead of city monuments",
    overview:
      "Chulilla's canyon trails and hanging bridges offer one of the region's most dramatic escapes. This private day is for passengers who deliberately trade city time for landscape — and accept road time.",
    body: [
      "Choose Chulilla when nature matters more than La Lonja. Choose the city when time is tight.",
      "Private pacing lets the guide adjust to fitness and weather.",
      "This is not an independent walk-from-port option — organised transport is essential.",
    ],
    highlights: [
      "Private guide and vehicle",
      "Chulilla canyon hiking",
      "Village atmosphere and viewpoints",
      "Active day beyond the urban core",
      "Conservative return planning",
    ],
    itinerary: [
      {
        title: "Depart Valencia",
        detail: "Meet at the cruise port area and drive to Chulilla.",
      },
      {
        title: "Canyon hike",
        detail: "Hike selected trails with safety briefing and commentary.",
      },
      {
        title: "Village time",
        detail: "Explore the village and pause for refreshments as timing allows.",
      },
      {
        title: "Return to ship",
        detail: "Drive back with a generous buffer before all-aboard.",
      },
    ],
    included: [
      "Private transport from Valencia cruise port area",
      "English-speaking guide",
      "Hiking orientation on confirmed trails",
    ],
    notIncluded: [
      "Lunch unless stated",
      "Hiking gear beyond basic requirements",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear proper walking shoes — trails can be uneven",
      "Only choose with a solid full day ashore",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How strenuous is the hike?",
        answer:
          "Moderate for most active guests. Ask about trail options and fitness requirements before booking.",
      },
    ],
    relatedExcursionSlugs: [
      "private-montanejos-hike",
      "valencia-highlights-city-of-arts",
      "private-half-day-valencia",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate to active — canyon trails",
    cruiseSuitability: "Requires a long, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-full-day-sagunto-valencia",
    title: "Private Full Day Sagunto and Valencia",
    seoTitle: "Private Full Day Sagunto and Valencia Shore Excursion",
    metaDescription:
      "Private full-day shore excursion combining Sagunto Roman heritage with Valencia city highlights — flexible pacing for your party.",
    category: "History",
    tagline: "Your party, your pace — Roman Sagunto and Valencia in one private day.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    bestFor: "Private groups with a full port call wanting both Sagunto and Valencia without sharing a coach",
    overview:
      "The private format lets your party shape the balance between Sagunto's Roman hill and Valencia's Lonja, cathedral quarter and City of Arts — with transport and timing built around your ship.",
    body: [
      "Private pacing suits families and friends who want flexibility without a large group schedule.",
      "Road time between Sagunto and Valencia still applies — plan honestly.",
      "Shorter calls should stay in the city.",
    ],
    highlights: [
      "Private vehicle and guide",
      "Sagunto Roman and medieval highlights",
      "Valencia city monuments",
      "Flexible sequencing",
      "Cruise-timed return",
    ],
    itinerary: [
      {
        title: "Meet at port",
        detail: "Join your private guide and confirm priorities for the day.",
      },
      {
        title: "Sagunto",
        detail: "Explore Roman theatre and castle hill as timing allows.",
      },
      {
        title: "Valencia highlights",
        detail: "Visit selected city landmarks with your party's interests in mind.",
      },
      {
        title: "Return",
        detail: "Drive back with a conservative buffer.",
      },
    ],
    included: [
      "Private transport from cruise port area",
      "English-speaking private guide",
      "Customisable city and Sagunto routing",
    ],
    notIncluded: [
      "Lunch and entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share priorities when you enquire — Roman history vs modern architecture",
      "Full day only",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How is this different from the small-group Sagunto tour?",
        answer:
          "Same geography, private vehicle and flexible pacing for your party alone.",
      },
    ],
    relatedExcursionSlugs: [
      "valencia-and-sagunto-highlights",
      "private-half-day-valencia",
      "valencia-highlights-city-of-arts",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — city and hill walking",
    cruiseSuitability: "Requires a long full day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-half-day-valencia",
    title: "Private Half Day Valencia",
    seoTitle: "Private Half Day Valencia Shore Excursion",
    metaDescription:
      "Private half-day Valencia shore excursion — flexible historic centre routing for cruise passengers who want personalised pacing.",
    category: "History",
    tagline: "A private introduction to Valencia's historic heart — on your schedule.",
    duration: "Approximately 4 hours",
    pace: "Relaxed",
    bestFor: "Private groups wanting historic Valencia with flexible pacing and minimal group compromise",
    overview:
      "This private half-day focuses on Valencia's walkable core — Ayuntamiento, market quarter, Lonja and cathedral surroundings — shaped around your party's interests and ship timing.",
    body: [
      "Private format suits mixed mobility, photography stops and unhurried market time.",
      "It does not automatically include the City of Arts — compare Editor's Choice if you want both halves.",
      "Independent explorers may not need a guide for the same geography.",
    ],
    highlights: [
      "Private guide and routing",
      "Historic centre flexibility",
      "Market and Lonja orientation",
      "Half-day format protects buffer",
      "Personalised pacing",
    ],
    itinerary: [
      {
        title: "Meet at port or centre",
        detail: "Confirm meeting point and priorities against all-aboard.",
      },
      {
        title: "Historic highlights",
        detail: "Explore selected Old Town landmarks at your party's pace.",
      },
      {
        title: "Return",
        detail: "Finish with clear time toward the cruise terminal.",
      },
    ],
    included: [
      "Private guide",
      "Historic centre orientation",
      "Transport as stated on voucher",
    ],
    notIncluded: [
      "Entrance fees unless stated",
      "Lunch and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Tell your guide if Central Market interior time is a priority",
      "Excellent when you want narrative without a large group",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Can we add the City of Arts?",
        answer:
          "Sometimes within a longer private day. On a strict half-day, prioritise the historic core.",
      },
    ],
    relatedExcursionSlugs: [
      "valencia-highlights-city-of-arts",
      "experiencing-valencia-like-a-local",
      "private-full-day-sagunto-valencia",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed to moderate — historic streets",
    cruiseSuitability: "Works well on half-day or flexible calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-horchata-origins",
    title: "Private Horchata Origins and Scenic Valencia by Car",
    seoTitle: "Private Horchata Origins & Scenic Valencia Shore Excursion",
    metaDescription:
      "Private horchata origins tour and scenic Valencia by car — orchards, tradition and city viewpoints for cruise passengers.",
    category: "Food",
    tagline: "From tiger-nut orchards to the city — horchata heritage by private car.",
    duration: "Approximately 7 hours",
    pace: "Relaxed",
    bestFor: "Guests curious about horchata culture who want a scenic private day beyond walking distance",
    overview:
      "Horchata is Valencia's beloved drink — rooted in Huerta orchards outside the centre. This private car day explores origins, tradition and scenic viewpoints with less walking than a full urban trek.",
    body: [
      "Ideal for guests who want food heritage without a kitchen class format.",
      "Road time applies — choose only with enough hours ashore.",
      "City-only guests may prefer culinary tastings in the centre instead.",
    ],
    highlights: [
      "Private vehicle and guide",
      "Horchata origins and orchard context",
      "Scenic Valencia routing",
      "Traditional tasting stops",
      "Lower walking demand than a full city trek",
    ],
    itinerary: [
      {
        title: "Depart from port",
        detail: "Meet and drive toward horchata-producing areas.",
      },
      {
        title: "Origins and tastings",
        detail: "Visit selected orchards or horchaterías with commentary.",
      },
      {
        title: "Scenic city stops",
        detail: "Include viewpoints or exterior landmarks as timing allows.",
      },
      {
        title: "Return",
        detail: "Drive back with buffer before all-aboard.",
      },
    ],
    included: [
      "Private transport",
      "English-speaking guide",
      "Included tastings as stated on voucher",
    ],
    notIncluded: [
      "Additional food and drinks",
      "Gratuities",
      "Entrance fees unless stated",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention dietary requirements at booking",
      "A distinctive choice for repeat visitors",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "What is horchata?",
        answer:
          "A refreshing Valencian drink traditionally made from tiger nuts (chufa), especially associated with the Huerta region.",
      },
    ],
    relatedExcursionSlugs: [
      "valencia-culinary-history",
      "experiencing-valencia-like-a-local",
      "private-half-day-valencia",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Light to moderate at stops",
    cruiseSuitability: "Best with a longer port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-montanejos-hike",
    title: "Private Montanejos Hike and Thermal Springs Relaxation",
    seoTitle: "Private Montanejos Hike & Thermal Springs from Valencia",
    metaDescription:
      "Private Montanejos canyon hike and thermal springs relaxation — nature day beyond Valencia for active cruise passengers.",
    category: "Walking",
    tagline: "Canyon trails and thermal springs — Valencia's wilder hinterland.",
    duration: "Approximately 7 hours",
    pace: "Moderate",
    bestFor: "Active guests with a full port call who want hiking and thermal relaxation beyond the city",
    overview:
      "Montanejos offers crystal-clear pools, canyon scenery and thermal springs east of Valencia. This private day trades urban monuments for landscape — with honest road time and return planning.",
    body: [
      "Choose Montanejos when nature and relaxation outweigh cathedral squares.",
      "Weather and season affect spring conditions — confirm before booking.",
      "Not suitable for short port calls or guests who prioritise the Old Town.",
    ],
    highlights: [
      "Private guide and transport",
      "Montanejos canyon hiking",
      "Thermal springs relaxation time",
      "Dramatic natural scenery",
      "Conservative cruise return planning",
    ],
    itinerary: [
      {
        title: "Drive to Montanejos",
        detail: "Depart the Valencia port area for the interior.",
      },
      {
        title: "Hike and explore",
        detail: "Walk selected trails with safety guidance.",
      },
      {
        title: "Thermal springs",
        detail: "Relax at thermal pools as itinerary and season allow.",
      },
      {
        title: "Return to ship",
        detail: "Drive back with generous buffer.",
      },
    ],
    included: [
      "Private round-trip transport",
      "English-speaking guide",
      "Hiking and springs orientation",
    ],
    notIncluded: [
      "Lunch unless stated",
      "Swimwear and towels",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring swimwear if springs are on your voucher",
      "Full day only — do not attempt on a short call",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is swimming always possible?",
        answer:
          "Season and conditions vary. Your confirmation states what is realistic for your sailing date.",
      },
    ],
    relatedExcursionSlugs: [
      "private-chulilla-canyon",
      "valencia-highlights-city-of-arts",
      "private-half-day-valencia",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — trails and uneven ground",
    cruiseSuitability: "Requires a long, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice === true);
}
