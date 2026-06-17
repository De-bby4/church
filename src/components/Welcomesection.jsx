import { Link } from "react-router-dom";

const CARDS = [
  {
    tag: "Who We Are",
    title: "About Us",
    cta: "Learn More",
    to: "/about",
    color: "from-[#0a2622] to-[#103832]",
  },
  {
    tag: "Plan Your First Visit",
    title: "Visit Us",
    cta: "Plan a Visit",
    to: "/visit",
    color: "from-[#0f766e] to-[#0a2622]",
  },
  {
    tag: "Catch Up Anytime",
    title: "Sermons",
    cta: "Watch Now",
    to: "/sermons",
    color: "from-[#103832] to-[#0d9488]",
  },
];

export default function WelcomeSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">

        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand text-white text-[11px] font-bold tracking-[2px] uppercase">
            Welcome to Citadel
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-ink leading-[1.05] tracking-tight text-[clamp(36px,5.5vw,64px)] mb-4">
            Welcome Home!
          </h2>
          <p className="text-subtle text-[16px] leading-[1.8] max-w-[480px] mx-auto">
            Dive into our teachings, services, and community.
            Your journey of faith begins here.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[820px] mx-auto">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group relative rounded-lg overflow-hidden aspect-[4/3.4] flex flex-col justify-end p-5"
            >
              {/* Background gradient placeholder — swap for a real photo later */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} transition-transform duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-white/70 text-[11px] font-bold tracking-[1.5px] uppercase mb-2">
                  {c.tag}
                </p>
                <h3 className="font-display font-bold text-white text-[24px] leading-tight mb-6">
                  {c.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-white text-[12px] font-semibold tracking-wide uppercase">
                  {c.cta}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}