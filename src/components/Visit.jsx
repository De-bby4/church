const SERVICES = [
  { day: "Sunday",   time: "9:00 AM",  label: "First Service" },
  { day: "Sunday",   time: "11:00 AM", label: "Second Service" },
  { day: "Wednesday", time: "6:00 PM", label: "Midweek Service" },
];

export default function Visit() {
  return (
    <section id="visit" className="bg-surface py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">

        {/* Left: heading + service times */}
        <div>
          <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
            Plan A Visit
          </p>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(32px,4vw,48px)] mb-5">
            We'd love to have you this week.
          </h2>
          <p className="text-subtle text-[16px] leading-[1.8] max-w-[460px] mb-10">
            No matter where you are in your faith journey, there's a seat for
            you here. Come as you are — we keep things warm, simple, and easy
            to follow.
          </p>

          <div className="flex flex-col gap-3.5">
            {SERVICES.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between bg-white border border-line rounded-xl px-5 py-4 shadow-soft"
              >
                <div>
                  <p className="font-display font-semibold text-ink text-[15px]">
                    {s.label}
                  </p>
                  <p className="text-subtle text-[13px] mt-0.5">{s.day}</p>
                </div>
                <span className="font-display font-bold text-brand text-[17px]">
                  {s.time}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-lg bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
          >
            Plan Your Visit
          </a>
        </div>

        {/* Right: location card */}
        <div className="bg-ink rounded-2xl overflow-hidden shadow-lift">
          {/* Map placeholder */}
          <div className="relative h-[280px] md:h-[320px] bg-gradient-to-br from-[#103832] to-[#0a2622] flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#5eead4 1px, transparent 1px), linear-gradient(90deg, #5eead4 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10 w-12 h-12 rounded-full bg-brand flex items-center justify-center shadow-lift">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </div>
          </div>

          {/* Address + info */}
          <div className="p-7 md:p-8 text-white">
            <h3 className="font-display font-semibold text-[18px] mb-1">
              Citadel Fellowship
            </h3>
            <p className="text-white/60 text-[14px] leading-relaxed mb-6">
              123 Faith Avenue, Lekki Phase 1, Lagos, Nigeria
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <p className="text-white text-[14px] font-medium">Doors open 30 minutes early</p>
                  <p className="text-white/50 text-[13px] mt-0.5">Come grab a seat and settle in before service starts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div>
                  <p className="text-white text-[14px] font-medium">Kids' church available</p>
                  <p className="text-white/50 text-[13px] mt-0.5">Safe, fun programming for every service, every age group.</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-7 text-brand-light text-[14px] font-semibold hover:text-white transition-colors"
            >
              Get Directions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}