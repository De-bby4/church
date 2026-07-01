import { Link } from "react-router-dom";
import serviceImg from "../assets/service.JPG";
import child from "../assets/child.jpg";
import Sunday from "../assets/sunday.jpg";
import midweek from "../assets/midweek.jpg";
import prayerville from "../assets/prayerville.jpeg";

const SERVICES = [
  {
    title: "Sunday Service",
    mode: "In Person",
    day: "Every Sunday",
    time: "4:00 PM",
    location: "College Heights Secondary School, 371 College Ave W, Guelph, ON N1G 1T3",
    desc: "Our main weekly gathering — worship, the Word, fellowship, and Children's Church for the kids. Come as you are and experience God with us.",
    flyer: Sunday,
    color: "from-[#0c1d3d] to-[#162d5a]",
  },
  {
    title: "Wednesday Service",
    mode: "Online",
    day: "Every Wednesday",
    time: "7:00 PM",
    location: "Microsoft Teams",
    desc: "Join our midweek service to recharge and refocus from the comfort of your home — Bible Study & Prayer.",
    flyer: midweek,
    color: "from-[#162d5a] to-[#1e3a6e]",
  },
  {
    title: "PRAYERVILLE",
    mode: "Monthly",
    day: "Every 2nd Saturday",
    time: "7:00 AM - 12:00 PM",
    location: "College Heights Secondary School, 371 College Ave W, Guelph, ON N1G 1T3" ,
    desc: "PRAYERVILLE is a non-denominational Prayer Convergence and a consecrated gathering designed to bring hearts into alignment with God's eternal purposes, foster deepening intimacy through a lifestyle of consistent prayer, and transform ordinary men into divine instruments through whom God expresses His Glory across the land.",
    flyer: prayerville,
    color: "from-[#1e3a6e] to-[#0c1d3d]",
  },
];


export default function ServicesPage() {
  return (
    <div>
      {/* Page title banner */}
      <section className="relative py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden">
        <img src={serviceImg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 50%" }} />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10">
          <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
            Our Services
          </h1>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <p className="text-white/60 text-[16px] leading-[1.8]">
              Join us as we worship, grow, and encounter God together.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="flex flex-col gap-10">

          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl border border-line shadow-soft overflow-hidden grid md:grid-cols-[1fr_1.2fr]"
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              {/* Flyer */}
              <div className="relative aspect-[16/9] md:aspect-auto">
                {s.flyer ? (
                  <img src={s.flyer} alt={s.title} className="w-full h-full object-cover" style={{ direction: "ltr" }} />
                ) : (
                  <div className={`w-full h-full min-h-[260px] bg-gradient-to-br ${s.color} flex flex-col items-center justify-center gap-4`} style={{ direction: "ltr" }}>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-8 h-8">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.5" fill="white" stroke="none" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-[13px] font-medium">Service flyer goes here</p>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-7 md:p-9 flex flex-col justify-center" style={{ direction: "ltr" }}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-display font-bold text-ink text-[24px] tracking-tight">
                    {s.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-brand/10 text-brand">
                    {s.mode}
                  </span>
                </div>

                <p className="text-subtle text-[15px] leading-[1.4] pb-2 pt-2">
                  {s.desc}
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <p className="text-ink text-[14px] font-medium">{s.day}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <p className="text-ink text-[14px] font-medium">{s.time}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <p className="text-subtle text-[14px]">{s.location}</p>
                  </div>
                </div>

                {/* Join link — Wednesday only */}
                {s.title === "Wednesday Service" && (
                  <>
                    <div className="flex items-center gap-2 pt-3 pb-3">
                      <a
                        href="https://bit.ly/4lQtFbJ"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand text-white font-semibold text-[13px] hover:bg-brand-dark transition-colors"
                      >
                        Join Service
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                    <p className="text-subtle text-[12px] mt-2">
                      Or join via Microsoft Teams — ID: 2266576394298 | PW: 2ji2tf35
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Children's Church note */}
      <section className="bg-white py-14 md:py-16 px-6 md:px-10">
        <div style={{ maxWidth: "700px", margin: "0 auto" }} className="flex items-center gap-5 bg-surface border border-line rounded-2xl px-6 py-5">
          <div className="w-17 h-17 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={child}
              alt="Children's Church"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-display font-semibold text-ink text-[16px]">Children's Church</p>
            <p className="text-subtle text-[14px] mt-0.5">Available every Sunday — kids enjoy their own program while you worship.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-14 md:py-16 px-6 md:px-10">
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="font-display font-bold text-white text-[clamp(24px,3vw,34px)] tracking-tight mb-4">
            Ready to join us?
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed pb-5">
            Let us know you're coming and we'll make sure you feel right at home.
          </p>
          <Link
            to="/new-here"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
          >
            I'm New Here
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}