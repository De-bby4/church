import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";
import visitImg from "../assets/new.jpg";
import sermonImg from "../assets/sermon.jpg";

const CARDS = [
  {
    tag: "Who We Are",
    title: "About Us",
    cta: "Learn More",
    to: "/about",
    image: aboutImg,
  },
  {
    tag: "New Here?",
    title: "I'm New",
    cta: "Sign Up",
    to: "/new-here",
    image: visitImg,
  },
  {
    tag: "Catch Up Anytime",
    title: "Sermons",
    cta: "Watch Now",
    to: "/sermons",
    image: sermonImg,
    color: "from-[#103832] to-[#0d9488]",
  },
];

export default function WelcomeSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-10">
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

    
    <div className="text-center mb-14 px-6">
      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand text-white text-[11px] font-bold tracking-[2px] uppercase mb-6">
        Welcome to Citadel
      </span>
      <h2 className="font-display font-bold text-ink leading-[1.05] tracking-tight text-[clamp(36px,5.5vw,64px)] pt-3">
        Welcome Home!
      </h2>
      <p className="text-subtle text-[16px] leading-[1.5] text-center pb-7" style={{ maxWidth: "480px", margin: "0 auto" }}>
        Dive into our teachings, services, and community. Your journey of
        faith begins here.
      </p>
    </div>

    {/* mobile - horizontal scroll */}
    <div className="flex sm:hidden gap-5 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">
      {CARDS.map((c) => (
        <Link
          key={c.title}
          to={c.to}
          className="group relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-6 flex-shrink-0 w-[78vw] snap-start"
        >
          {c.image ? (
            <img
              src={c.image}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="relative z-10">
            <p className="text-white/70 text-[11px] font-bold tracking-[2px] uppercase mb-2">
              {c.tag}
            </p>
            <h3 className="font-display font-bold text-white text-[26px] leading-tight mb-5">
              {c.title}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-white text-[13px] font-semibold tracking-wide uppercase">
              {c.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>

    {/* DESKTOP — grid layout (hidden below sm) */}
    <div className="hidden sm:grid sm:grid-cols-3 gap-5">
      {CARDS.map((c) => (
        <Link
          key={c.title}
          to={c.to}
          className="group relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-6"
        >
          {c.image ? (
            <img
              src={c.image}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} transition-transform duration-500 group-hover:scale-105`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="relative z-10">
            <p className="text-white/70 text-[11px] font-bold tracking-[2px] uppercase mb-2">
              {c.tag}
            </p>
            <h3 className="font-display font-bold text-white text-[26px] leading-tight mb-5">
              {c.title}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-white text-[13px] font-semibold tracking-wide uppercase">
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