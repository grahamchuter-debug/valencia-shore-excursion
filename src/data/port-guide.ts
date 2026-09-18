import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Valencia Cruise Port Guide",
  subtitle:
    "Terminal access, transfer times to the historic centre, Central Market, Turia Gardens, City of Arts and Sciences, food, transport and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Valencia cruise passenger terminal",
      quay: "Cruise berths at the Port of Valencia (Puerto de Valencia) passenger area",
      usedBy: "Most cruise ships calling at Valencia on Mediterranean and Atlantic itineraries",
      cityAccess:
        "Typically 15–25 minutes by shuttle, taxi or metro to the historic centre depending on berth and traffic",
    },
    {
      name: "Alternative berth positions",
      quay: "Occasional alternative positions within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Transfer times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Valencia",
      paragraphs: [
        "Cruise ships use the Port of Valencia passenger terminal area. Unlike walk-off-into-the-centre ports, Valencia usually requires a short shuttle, taxi or metro ride to reach Plaza del Ayuntamiento and the Ciutat Vella — but the transfer is typically modest compared with many Mediterranean mega-ports.",
        "Check the ship's daily programme and terminal signage on arrival. Shuttle arrangements vary by cruise line and berth; taxis and metro access are usually available when ships are in port.",
        "Valencia is an excellent base for a city day combining medieval streets, market life and the City of Arts. Sagunto, canyon hikes and interior day trips are separate journeys requiring road time and different timing.",
      ],
    },
    {
      heading: "Reaching the historic centre",
      paragraphs: [
        "From the passenger terminal, follow signage toward official shuttles, the taxi rank or metro guidance rather than walking the working port corridor.",
        "Allow roughly 15–25 minutes to reach the historic centre in normal conditions. Routes include urban streets before you reach the cobbled Old Town.",
        "If mobility, heat or luggage are factors, take a taxi or shuttle instead of improvising on foot through the port.",
      ],
    },
    {
      heading: "Valencia historic centre highlights",
      paragraphs: [
        "Plaza del Ayuntamiento anchors many visits — allow time to absorb the civic scale rather than a single exterior photograph.",
        "Central Market and La Lonja de la Seda sit minutes apart — the natural core of a morning loop.",
        "The cathedral quarter and Plaza de la Virgen lead toward Turia Gardens and, with time, the City of Arts and Sciences.",
      ],
    },
    {
      heading: "Food and Valencian flavour",
      paragraphs: [
        "Market halls, horchaterías and terrace tapas sit inside a compact historic core — you do not need a long transfer to eat well.",
        "Build lunch into your Old Town loop so you stay oriented toward the ship.",
        "A guided food or cooking experience helps if you want curated tastings; otherwise independent market hopping works well.",
      ],
    },
    {
      heading: "Transport beyond the centre",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver the cruise terminal or your ship name for the return.",
        "Metro and local buses help toward Turia and the City of Arts, but cruise windows favour simple plans.",
        "Sagunto, Chulilla, Montanejos and horchata orchard days need operators who plan backwards from all-aboard — a best-case journey time is not an adequate return plan.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Transfer to the centre before coach groups concentrate at Central Market.",
        "Loop through Lonja and the cathedral quarter, then follow Turia toward the City of Arts if your buffer allows.",
        "Keep the final hour ashore oriented toward the terminal so an unexpected queue does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm all-aboard time — earlier than published departure. For a Valencia city day, reach the terminal 60–90 minutes before all-aboard.",
        "For Sagunto or interior drives, the operator should plan with road traffic contingency.",
        "Independent travellers are responsible for reaching the ship. If a long road trip does not leave a conservative margin, choose the historic centre instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Valencia from the cruise terminal?",
      answer:
        "Usually not directly into the historic centre. Most guests take a shuttle, taxi or metro — typically around 15–25 minutes to the city core.",
    },
    {
      question: "What can I see close to Valencia port?",
      answer:
        "The port area itself is industrial. The historic centre, Central Market, La Lonja, Turia Gardens and City of Arts are reached via a short transfer.",
    },
    {
      question: "Do I need transport for the Old Town?",
      answer:
        "You need a transfer from the terminal to the centre. Once there, the Old Town is compact and walkable.",
    },
    {
      question: "Is Sagunto an easy independent trip from the port?",
      answer:
        "Rarely on a cruise day. Road time and return risk make an organised excursion the more realistic approach.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for Sagunto or interior trips.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
