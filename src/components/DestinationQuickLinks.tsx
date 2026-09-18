import Link from "next/link";

const VALENCIA_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Valencia cruise passengers — when to walk alone and when a guide helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "Best Valencia shore excursions",
    description:
      "Our curated collection — Editor's Choice first, with honest trade-offs for every option.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Walk It Yourself",
    description:
      "A self-guided historic Valencia route — market, Lonja, cathedral quarter and optional Turia.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Valencia",
    description:
      "A practical first-call plan: Old Town, City of Arts, or food-focused days ashore.",
    href: "/compare/first-time-valencia-day",
  },
  {
    title: "Historic or modern?",
    description:
      "Compare the Ciutat Vella with the City of Arts and Sciences for your hours ashore.",
    href: "/compare/historic-or-modern",
  },
  {
    title: "Valencia cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/valencia",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Valencia planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in the historic centre or cross Turia toward modern Valencia.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALENCIA_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Valencia planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
