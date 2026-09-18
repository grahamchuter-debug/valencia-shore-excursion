import type { GuidePage } from "./types";

export const experiencePages: GuidePage[] = [
  {
    slug: "walking-from-port",
    title: "Walking From The Cruise Port",
    seoTitle: "Walking From Valencia Cruise Port to the Historic Centre",
    metaDescription:
      "How to reach Valencia's historic centre from the cruise port — shuttle, metro, taxi timing and when independence works best.",
    tagline:
      "Valencia's historic centre is a short transfer from the passenger terminal — not usually a long walk through the port corridor.",
    overview:
      "Cruise ships berth at the Port of Valencia (Puerto de Valencia). Most guests reach Plaza del Ayuntamiento and the Old Town by shuttle, taxi or metro rather than walking the full industrial port approach.",
    body: [
      "Follow terminal signage toward official shuttles or the taxi rank rather than wandering the working port.",
      "Allow roughly 15–25 minutes for transfer to the historic centre depending on berth, traffic and mode.",
      "If heat, luggage or limited mobility are factors, take a taxi or shuttle instead of proving a point.",
      "Always leave a buffer to re-clear terminal security before all-aboard.",
    ],
    highlights: [
      "Shuttle and taxi options from terminal",
      "Metro access toward the centre on many calls",
      "Historic core within realistic transfer time",
      "Turia Gardens link toward City of Arts",
    ],
    tips: [
      "Wear shoes suited to cobbles once you reach the Old Town",
      "Mark the terminal entrance on your map before you explore",
      "Morning market hours suit Central Market visits",
    ],
    faqs: [
      {
        question: "Do I need a tour to see Valencia itself?",
        answer:
          "Not necessarily. A tour adds context and efficient routing between historic and modern highlights; independent exploration works well when your call is flexible and you prefer your own pace.",
      },
      {
        question: "How long does the transfer take?",
        answer:
          "Often around 15–25 minutes to the historic centre by shuttle, taxi or metro, depending on berth and traffic.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "Self-guided historic Valencia when independence is genuinely the best advice.",
        href: "/guides/explore-independently",
      },
    ],
    relatedSlugs: ["explore-independently", "old-town-guide", "cruise-tips"],
    imageKey: "walking",
    hubPath: "/guides",
  },
  {
    slug: "explore-independently",
    title: "Walk It Yourself",
    seoTitle: "Walk It Yourself | Independent Valencia Walking Guide",
    metaDescription:
      "Walk It Yourself in Valencia — cruise-friendly independent route through the historic centre, Central Market, La Lonja, Turia Gardens and optional City of Arts.",
    tagline:
      "Historic Valencia is close enough to explore on your own after a short transfer — often the finest day ashore of all.",
    overview:
      "If you have a clear head, comfortable shoes and a few hours ashore, Valencia rewards independent exploration unusually well. Central Market, La Lonja, the cathedral quarter and Turia Gardens sit within a compact walkable core. This guide helps you choose that honest option — without pretending a tour is always necessary.",
    body: [
      "Exit the passenger terminal and take the official shuttle, taxi or metro toward the historic centre — typically 15–25 minutes depending on berth and routing.",
      "Orient at Plaza del Ayuntamiento, then drift through Central Market, La Lonja and the cathedral quarter before following Turia Gardens toward the City of Arts if time allows.",
      "Save Sagunto, canyon hikes and interior day trips for organised transport — the walkable core is richest at a human pace.",
      "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
    ],
    highlights: [
      "Historic centre within short transfer",
      "Flexible pacing and market stops",
      "Turia corridor toward modern Valencia",
      "Generous return buffer still essential",
    ],
    tips: [
      "Confirm your all-aboard time before you leave the terminal — then plan backwards",
      "Wear shoes for cobbles; Turia paths are easier but still require time",
      "Do not cut the return to terminal fine",
    ],
    faqs: [
      {
        question: "Is Valencia safe to explore independently?",
        answer:
          "The historic centre is generally straightforward for cruise visitors using normal city awareness. Crowds thicken around Central Market and the cathedral at peak hours.",
      },
      {
        question: "When should I book an excursion instead?",
        answer:
          "When you want to combine historic and City of Arts highlights efficiently, prefer guided food experiences, need mobility support, or plan Sagunto or interior day trips. Valencia Highlights & City of Arts and Sciences is the natural next step when a walk alone is not quite enough.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Valencia Highlights & City of Arts and Sciences",
        description:
          "When a self-guided loop is not quite enough — both halves of Valencia with cruise-timed routing.",
        href: "/shore-excursions/valencia-highlights-city-of-arts",
      },
    ],
    relatedSlugs: ["walking-from-port", "one-day-in-valencia", "best-viewpoints"],
    imageKey: "walking",
    hubPath: "/guides",
    independentWalk: {
      eyebrow: "Free self-guided route",
      idealFor: [
        "Cruise passengers with 4+ hours ashore",
        "First-time visitors who enjoy walking at their own pace",
        "Market lovers, photographers and café explorers",
        "Guests who want historic Valencia without a fixed tour schedule",
      ],
      duration: "3–5 hours",
      distance: "Approximately 4–6 km",
      difficulty: "Easy to moderate — cobbles in the Old Town; flatter Turia paths",
      bestFor: [
        "Independent explorers",
        "Families comfortable with urban walking",
        "Anyone who prefers market pauses over a fixed itinerary",
      ],
      familyFriendly: true,
      wheelchairFriendly: false,
      recommendedReturnBuffer:
        "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
      route: [
        {
          number: 1,
          title: "Cruise terminal",
          description:
            "Exit the Valencia passenger terminal and confirm your all-aboard time before you leave. Note shuttle departure points, taxi ranks and any metro guidance on terminal signage — you will need a clear route back.",
          durationMinutes: 10,
          tip: "Screenshot offline maps and save the terminal location before you transfer toward the city.",
        },
        {
          number: 2,
          title: "Shuttle or public transport toward the centre",
          description:
            "Take the official port shuttle, a taxi or metro toward the historic centre — typically 15–25 minutes depending on berth and traffic. Aim for Plaza del Ayuntamiento or nearby stops as your orientation anchor.",
          durationMinutes: 25,
          tip: "If several ships are in port, shuttles can queue — allow contingency time on both legs.",
        },
        {
          number: 3,
          title: "Plaza del Ayuntamiento",
          description:
            "Valencia's grand civic square sets the tone — ornate façades, fountain light and the rhythm of a city that feels Mediterranean rather than overwhelmed. Take a moment to orient before diving into lanes.",
          durationMinutes: 20,
          tip: "This is a practical meeting point if your party splits up later.",
        },
        {
          number: 4,
          title: "Central Market (Mercado Central)",
          description:
            "One of Europe's great market halls — art nouveau ironwork, produce pyramids and the sensory overload of Valencian daily life. You do not need to buy much; walking the aisles is the experience.",
          durationMinutes: 35,
          tip: "Morning visits feel liveliest. Step one aisle off the main flow if crowds thicken.",
        },
        {
          number: 5,
          title: "La Lonja de la Seda (UNESCO Silk Exchange)",
          description:
            "Gothic merchant halls that whisper of Valencia's trading golden age — spiralling columns, vaulted ceilings and a courtyard of orange trees. Exterior admiration is rewarding; interior access depends on hours and tickets.",
          durationMinutes: 25,
          tip: "Check opening times on the day — cruise mornings usually align well.",
        },
        {
          number: 6,
          title: "Valencia Cathedral",
          description:
            "The cathedral and its Miguelete tower anchor the sacred heart of the city. Choose an interior visit if time and queues allow; otherwise enjoy the square and the blend of Romanesque, Gothic and Baroque layers from outside.",
          durationMinutes: 30,
          tip: "Tower climbs add steps and time — budget honestly if you attempt them.",
        },
        {
          number: 7,
          title: "Plaza de la Virgen",
          description:
            "A quieter, more contemplative square beside the cathedral — fountains, café terraces and the sense of Valencia as a lived-in city rather than a checklist. A natural pause before moving toward Turia.",
          durationMinutes: 20,
        },
        {
          number: 8,
          title: "Turia Gardens",
          description:
            "Follow the former riverbed turned green corridor — shaded paths, bridges and open space linking the historic centre toward modern Valencia. This is where the city breathes between medieval stone and white futuristic curves.",
          durationMinutes: 40,
          tip: "Renting bikes can speed this section, but walking keeps the pace human and controllable.",
        },
        {
          number: 9,
          title: "Optional City of Arts and Sciences",
          description:
            "If time and energy remain, continue through Turia to the Ciudad de las Artes y las Ciencias for exterior architecture and photography — the Hemisfèric, Science Museum and Oceanogràfic form one of Europe's most striking modern ensembles. Skip this stop if your buffer is tightening.",
          durationMinutes: 45,
          tip: "Exterior photography is free and spectacular; interior attractions need tickets and additional hours.",
        },
        {
          number: 10,
          title: "Return safely to ship",
          description:
            "Retrace your transfer plan toward the cruise terminal — shuttle, taxi or metro — and keep your personal buffer sacred. Do not squeeze one last stop once all-aboard is approaching.",
          durationMinutes: 30,
          tip: "Leave the City of Arts early if you went that far — the return leg plus terminal security takes longer than maps suggest.",
        },
      ],
      dontMiss: [
        {
          category: "Architecture",
          title: "La Lonja de la Seda",
          description:
            "UNESCO Gothic silk exchange — Valencia's most eloquent monument to Mediterranean trade.",
        },
        {
          category: "Markets & museums",
          title: "Mercado Central",
          description:
            "Art nouveau market hall where Valencian food culture feels immediate and generous.",
        },
        {
          category: "Architecture",
          title: "City of Arts and Sciences",
          description:
            "Even from outside, Calatrava's white curves justify the Turia walk — if your clock allows.",
        },
        {
          category: "Hidden streets",
          title: "Lanes behind the cathedral quarter",
          description:
            "A few turns off the main flow, Valencia still feels residential and calm.",
        },
        {
          category: "Photo spots",
          title: "Plaza del Ayuntamiento",
          description:
            "Late-morning light on the façades — step back for the full civic scale.",
        },
        {
          category: "Photo spots",
          title: "Turia bridges toward the City of Arts",
          description:
            "Contrast shots between green canopy and futuristic architecture.",
        },
        {
          category: "Churches",
          title: "Valencia Cathedral and Miguelete",
          description:
            "Choose the tower climb if time allows; otherwise enjoy the square atmosphere.",
        },
        {
          category: "Best viewpoints",
          title: "Miguelete tower (optional)",
          description:
            "Panoramic Old Town views reward the stair climb when queues cooperate.",
        },
      ],
      coffeeStops: [
        {
          name: "Café near Plaza de la Virgen",
          description:
            "Choose a terrace on or near Plaza de la Virgen for a classic pause — horchata or coffee with cathedral views rather than a generic chain menu.",
          specialty: "Horchata, coffee and light pastries",
          nearStop: "Plaza de la Virgen",
        },
        {
          name: "Market-adjacent bar",
          description:
            "If the main market cafés are packed, step one block from Mercado Central and follow local custom — a short tapas and cerveza pause refuels without derailing timing.",
          specialty: "Tapas and a quick cerveza",
          nearStop: "Near Central Market",
        },
      ],
      localTips: [
        {
          label: "Public toilets",
          detail:
            "Use terminal facilities before you leave. In the centre, cafés, department stores and some monuments are the practical options.",
        },
        {
          label: "Cash / card",
          detail:
            "Cards are widely accepted in Valencia. A little cash still helps for small market stalls.",
        },
        {
          label: "Water",
          detail:
            "Bring a bottle from the ship. Turia has fountains in season; cafés are easy near the market.",
        },
        {
          label: "Wi-Fi",
          detail:
            "Ship Wi-Fi fades once you leave the terminal. Cafés offer connection if you need a quick schedule check.",
        },
        {
          label: "Safety",
          detail:
            "Valencia's historic centre is generally comfortable by day. Use normal city awareness in crowds around the market and cathedral.",
        },
        {
          label: "Accessibility",
          detail:
            "Cobbles and cathedral steps limit wheelchair access in the Old Town. Turia paths are flatter but still require time and distance.",
        },
        {
          label: "Best time to walk",
          detail:
            "Earlier morning suits Central Market and cooler Turia walking. Midday heat can feel intense in summer.",
        },
      ],
      backToShip: {
        latestDeparture:
          "Leave your furthest point — especially the City of Arts — early enough for transfer back plus your personal buffer.",
        walkingTime:
          "Budget 15–25 minutes for shuttle, taxi or metro from the historic centre to the terminal, plus queue time when multiple ships are in port.",
        taxiAlternative:
          "Taxis are reliable from major squares and near Turia exits — show the cruise terminal or your ship name clearly.",
        safetyMargin:
          "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
        notes:
          "If you visited the City of Arts, start your return leg earlier than feels comfortable. Terminal security queues add friction at peak turnaround.",
      },
      exploreFurther: {
        excursionSlug: "valencia-highlights-city-of-arts",
        title: "Want more than a self-guided loop?",
        body: "If you'd like to experience more than a self-guided loop — combining historic Valencia and the City of Arts with commentary and cruise-timed routing — our Editor's Choice excursion, Valencia Highlights & City of Arts and Sciences, is the natural next step. It is never required; it is simply the day we recommend when a walk alone is not quite enough.",
        href: "/shore-excursions/valencia-highlights-city-of-arts",
        ctaLabel: "Read about Editor's Choice",
      },
    },
  },
  {
    slug: "one-day-in-valencia",
    title: "One Day In Valencia",
    seoTitle: "One Day in Valencia from a Cruise Ship",
    metaDescription:
      "How to spend one day in Valencia on a cruise: Old Town, Central Market, Turia Gardens, City of Arts, timing and when to stay independent versus book a tour.",
    tagline: "A realistic cruise-day plan for Valencia — without pretending you can see all of Spain.",
    overview:
      "One day in Valencia is enough for a memorable historic core and, with discipline, the City of Arts. It is not enough for Sagunto, canyon hikes and deep museum time. Choose a priority.",
    body: [
      "Morning: transfer to the centre, Central Market and La Lonja.",
      "Late morning: cathedral quarter and Plaza de la Virgen.",
      "Afternoon: Turia Gardens walk toward the City of Arts — or café time if your buffer is tight.",
      "Leave Sagunto and interior day trips for fuller calls only.",
    ],
    highlights: [
      "Historic centre first",
      "Turia and optional City of Arts",
      "Market and café buffer time",
      "Honest scope for one call",
    ],
    tips: [
      "Pick one beyond-city option at most — never two",
      "Confirm all-aboard before you leave the terminal",
    ],
    faqs: [
      {
        question: "Is one day enough?",
        answer:
          "Yes for the historic centre and Turia. Adding the City of Arts properly needs disciplined timing. No for Sagunto plus full city depth.",
      },
    ],
    relatedSlugs: ["explore-independently", "cruise-tips", "tour-or-independent"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "city-of-arts-and-sciences",
    title: "City of Arts and Sciences Guide",
    seoTitle: "City of Arts and Sciences Valencia — Cruise Visitor Guide",
    metaDescription:
      "Visit the City of Arts and Sciences from Valencia cruise port — architecture, Turia access, timing tips and honest cruise-day advice.",
    tagline: "Santiago Calatrava's futuristic Valencia — best reached through Turia Gardens.",
    overview:
      "The Ciudad de las Artes y las Ciencias is Valencia's modern icon: the Hemisfèric, Science Museum, Oceanogràfic and surrounding pools. Exterior admiration is free; interiors need tickets and time.",
    body: [
      "Most cruise guests approach through Turia Gardens from the historic centre — a flat, pleasant walk or bike ride.",
      "Photography is spectacular at any hour; midday sun can be harsh on white surfaces.",
      "Combine with a morning in the Old Town rather than treating the City of Arts as an isolated stop.",
    ],
    highlights: [
      "Iconic Calatrava architecture",
      "Turia Gardens approach",
      "Exterior photography",
      "Optional Oceanogràfic or museum interiors",
    ],
    tips: [
      "Start the return leg early if you come this far",
      "Editor's Choice links historic and modern halves efficiently",
    ],
    faqs: [
      {
        question: "Do I need a tour to see the City of Arts?",
        answer:
          "No for exteriors. A tour helps when you want historic and modern Valencia combined in one cruise-timed day.",
      },
    ],
    relatedSlugs: ["explore-independently", "best-viewpoints", "one-day-in-valencia"],
    imageKey: "city-of-arts",
    hubPath: "/guides",
  },
  {
    slug: "central-market-guide",
    title: "Central Market Guide",
    seoTitle: "Central Market Valencia — Cruise Visitor Guide",
    metaDescription:
      "Mercado Central for cruise passengers — art nouveau halls, Valencian produce, timing tips and how to include the market in your port day.",
    tagline: "Europe's great market halls — Valencian flavour under iron and glass.",
    overview:
      "Mercado Central is more than a photo stop. It is where paella ingredients, horchata culture and everyday Valencian life converge under a spectacular art nouveau roof.",
    body: [
      "Visit in the morning when stalls are liveliest.",
      "Combine with La Lonja next door for a compact historic core loop.",
      "A guided food experience helps if you want curated tastings; otherwise browse independently.",
    ],
    highlights: [
      "Art nouveau architecture",
      "Produce, fish and local specialities",
      "Steps from La Lonja",
      "Authentic Valencian atmosphere",
    ],
    tips: [
      "Watch belongings in crowded aisles",
      "Try horchata or fresh juice if time allows",
    ],
    faqs: [
      {
        question: "How long should I spend in the market?",
        answer:
          "Thirty to sixty minutes covers highlights; longer if you sit for tapas nearby.",
      },
    ],
    relatedSlugs: ["food-guide", "old-town-guide", "explore-independently"],
    imageKey: "central-market",
    hubPath: "/guides",
  },
  {
    slug: "old-town-guide",
    title: "Old Town Guide",
    seoTitle: "Valencia Old Town Guide for Cruise Passengers",
    metaDescription:
      "Cruise guide to Valencia's Old Town — La Lonja, cathedral quarter, historic lanes and how to enjoy the Ciutat Vella on a port day.",
    tagline: "Medieval lanes, silk merchants' halls and cathedral quiet — Valencia's Ciutat Vella.",
    overview:
      "Valencia's Old Town is compact, atmospheric and rich enough to fill a morning or a full day — the essential first stop for most cruise calls.",
    body: [
      "Anchor at Plaza del Ayuntamiento, then loop through market, Lonja and cathedral quarter.",
      "Cobbles are uneven — choose footwear carefully.",
      "You can explore independently or join a guided highlights tour for historical context.",
    ],
    highlights: [
      "La Lonja de la Seda UNESCO site",
      "Cathedral and Plaza de la Virgen",
      "Historic lanes and hidden squares",
      "Walkable after short port transfer",
    ],
    tips: [
      "Visit La Lonja early if interiors matter to you",
      "Afternoon café time suits Plaza de la Virgen",
    ],
    faqs: [
      {
        question: "How much time do I need in the Old Town?",
        answer:
          "Two to three hours covers highlights without rushing. A full day lets you add Turia and the City of Arts.",
      },
    ],
    relatedSlugs: ["central-market-guide", "best-viewpoints", "explore-independently"],
    imageKey: "old-town",
    hubPath: "/guides",
  },
  {
    slug: "food-guide",
    title: "Food Guide",
    seoTitle: "Valencia Food Guide for Cruise Passengers",
    metaDescription:
      "What to eat in Valencia on a cruise day — paella origins, Central Market, tapas, horchata and how to taste the city without missing the ship.",
    tagline: "Paella's homeland, market freshness and Mediterranean tapas culture.",
    overview:
      "You can eat exceptionally well without leaving the walkable core. Markets, horchaterías and terrace tapas sit close enough to protect a cruise return buffer.",
    body: [
      "Build lunch into your Old Town loop rather than treating food as an afterthought.",
      "Authentic paella is a lunch dish in Valencia — not a rushed midnight cliché.",
      "A guided food or cooking experience helps if you want curated tastings; otherwise independent market hopping works well.",
    ],
    highlights: [
      "Central Market produce and stalls",
      "Tapas and horchata culture",
      "Paella and rice traditions",
      "Easy to combine with sightseeing",
    ],
    tips: [
      "Avoid overlong restaurant sittings close to all-aboard",
      "Mention allergies early if joining a tasting tour",
    ],
    faqs: [
      {
        question: "Should I book a food tour?",
        answer:
          "Book when you want curated tastings and commentary. Explore independently when you prefer choosing stalls and terraces as you go.",
      },
    ],
    relatedSlugs: ["central-market-guide", "explore-independently", "one-day-in-valencia"],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Valencia for Cruise Visitors",
    metaDescription:
      "Best Valencia viewpoints for cruise passengers — Miguelete tower, Turia bridges, City of Arts angles and Old Town rooftops.",
    tagline: "Medieval towers, garden bridges and futuristic curves — Valencia in panorama.",
    overview:
      "Valencia rewards photographers who climb a tower, pause on Turia bridges or step back from the City of Arts pools.",
    body: [
      "Miguelete tower delivers classic Old Town rooftops when queues allow.",
      "Turia bridges frame the City of Arts against green canopy.",
      "A guided tour helps guests who want viewpoints with less navigation effort.",
    ],
    highlights: [
      "Miguelete tower outlook",
      "Turia bridge angles",
      "City of Arts reflections",
      "Plaza del Ayuntamiento façades",
    ],
    tips: [
      "Keep cameras secured on tower climbs",
      "Do not sacrifice your ship buffer for one more panorama",
    ],
    faqs: [
      {
        question: "What is the single best viewpoint?",
        answer:
          "Miguelete tower for Old Town rooftops; Turia bridges for modern architecture — choose based on your day's route.",
      },
    ],
    relatedSlugs: ["city-of-arts-and-sciences", "old-town-guide", "explore-independently"],
    imageKey: "photography",
    hubPath: "/guides",
  },
  {
    slug: "cruise-tips",
    title: "Valencia Cruise Tips",
    seoTitle: "Valencia Cruise Tips — Port Day Advice",
    metaDescription:
      "Practical Valencia cruise tips: port transfer, weather, money, timing, mobility and how to protect your return to the ship.",
    tagline: "Practical advice for a composed Valencia port day.",
    overview:
      "Valencia is welcoming and walkable in the centre, but heat, transfer timing and all-aboard still decide whether the day feels elegant or stressed.",
    body: [
      "Plan from all-aboard, not published departure.",
      "Wear shoes for cobbles; carry sun protection in summer.",
      "Independent exploration is realistic; organised tours help combine historic and modern highlights efficiently.",
    ],
    highlights: [
      "All-aboard first",
      "Cobble-ready footwear",
      "Short transfer to historic core",
      "Taxi and shuttle backup",
    ],
    tips: [
      "Screenshot offline maps",
      "Keep a Plan B if heat or queues slow you",
    ],
    faqs: [
      {
        question: "What should I pack for a Valencia shore day?",
        answer:
          "Comfortable walking shoes, sun protection, water, and offline confirmation of your all-aboard time.",
      },
    ],
    relatedSlugs: ["cruise-faq", "walking-from-port", "explore-independently"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "cruise-faq",
    title: "Valencia Cruise FAQ",
    seoTitle: "Valencia Cruise FAQ — Shore Day Questions Answered",
    metaDescription:
      "Valencia cruise FAQ: Can I explore without a tour? How far is the centre? How much walking? Is Valencia suitable for limited mobility?",
    tagline: "Straight answers for cruise passengers planning Valencia.",
    overview:
      "These are the questions we hear most often from guests deciding between independence and an organised Valencia day.",
    body: [
      "Valencia is unusually rewarding to explore without an excursion — that honesty is intentional.",
      "Tours still help for efficient historic-plus-modern combinations, food experiences and destinations beyond the city.",
      "Never trade your return buffer for one more stop.",
    ],
    highlights: [
      "Independent exploration is viable",
      "Historic centre is a short transfer away",
      "Tours add context and routing",
      "Mobility needs planning",
    ],
    tips: [
      "Read walking-from-port before you decide",
      "Compare tour vs independent honestly",
    ],
    faqs: [
      {
        question: "Can I explore Valencia without an excursion?",
        answer:
          "Yes. Many visitors reach the historic centre independently and have an excellent day.",
      },
      {
        question: "How far is the historic centre from the cruise port?",
        answer:
          "Often around 15–25 minutes by shuttle, taxi or metro from the passenger terminal area, depending on berth and traffic.",
      },
      {
        question: "Should I book a tour?",
        answer:
          "Book for efficient historic-plus-City of Arts combinations, food experiences, structured pacing, limited mobility support, or days beyond Valencia. Skip if you prefer flexible wandering.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Cobbles in the Old Town and longer Turia walks are normal. Food tours and private half-days reduce navigation stress.",
      },
      {
        question: "Is Valencia suitable for limited mobility?",
        answer:
          "Old Town cobbles and steps are challenging. Ask about private or transport-assisted options and consider staying in flatter Turia areas.",
      },
      {
        question: "How much free time should I allow?",
        answer:
          "Protect 60–90 minutes before all-aboard after sightseeing. Longer Sagunto or interior days need the larger buffer.",
      },
    ],
    relatedSlugs: ["cruise-tips", "explore-independently", "walking-from-port"],
    imageKey: "compare",
    hubPath: "/guides",
  },
];

export function getExperienceBySlug(slug: string): GuidePage | undefined {
  return experiencePages.find((p) => p.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencePages.map((p) => p.slug);
}
