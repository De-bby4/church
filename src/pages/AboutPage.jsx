const VALUES = [
  {
    title: "Authentic Worship",
    desc: "We create space for genuine encounters with God — not performance, just presence.",
  },
  {
    title: "Real Community",
    desc: "Faith grows best in relationship. We do life together, not just Sunday service together.",
  },
  {
    title: "Practical Teaching",
    desc: "The Word, applied to real life — marriage, work, purpose, and everything in between.",
  },
  {
    title: "Everyone Welcome",
    desc: "Wherever you're starting from, there's a seat for you here. No pretending required.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* Hero intro */}
      <section className="bg-ink py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-brand-light text-[12px] font-bold tracking-[3px] uppercase mb-4">
            Who We Are
          </p>
          <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,56px)] mb-6">
            Making Jesus known, one life at a time.
          </h1>
          <p className="text-white/65 text-[17px] leading-[1.85]">
            Citadel Fellowship is a community of ordinary people pursuing an
            extraordinary God. We exist to help people find their way back to
            God, grow in their faith, and discover their purpose — together.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(28px,3.5vw,40px)] mb-5">
              A family built on faith, grown through people.
            </h2>
            <div className="flex flex-col gap-4 text-subtle text-[15.5px] leading-[1.85]">
              <p>
                Citadel Fellowship started with a simple conviction: church
                should feel like home. What began as a small gathering of
                people hungry for genuine community has grown into a family
                that meets weekly to worship, learn, and walk through life
                together.
              </p>
              <p>
                Today, we gather in person every Sunday and online every
                Wednesday — but no matter how we meet, the heart stays the
                same. We want every person who walks through our doors (or
                joins from their living room) to feel seen, welcomed, and
                genuinely cared for.
              </p>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="aspect-[4/3] rounded-2xl bg-surface border border-line flex flex-col items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" className="w-7 h-7">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="#0d9488" stroke="none" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <p className="text-subtle text-[13px] font-medium">Congregation photo goes here</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
              What We Believe
            </p>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(28px,3.5vw,42px)]">
              What shapes everything we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-line p-7 shadow-soft"
              >
                <h3 className="font-display font-semibold text-ink text-[18px] mb-2.5">
                  {v.title}
                </h3>
                <p className="text-subtle text-[14.5px] leading-[1.8]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership teaser */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
            Leadership
          </p>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(28px,3.5vw,42px)] mb-5">
            Led with heart, grounded in the Word.
          </h2>
          <p className="text-subtle text-[16px] leading-[1.8] max-w-[560px] mx-auto mb-10">
            Our pastors and leadership team are committed to shepherding this
            family with integrity, wisdom, and genuine love for every person
            who calls Citadel home.
          </p>

          {/* Photo placeholder */}
          <div className="aspect-[16/7] rounded-2xl bg-surface border border-line flex flex-col items-center justify-center gap-4 max-w-[700px] mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" className="w-7 h-7">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <p className="text-subtle text-[13px] font-medium">Pastor / leadership photo goes here</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display font-bold text-white text-[clamp(26px,3.5vw,38px)] tracking-tight mb-4">
            Come see for yourself.
          </h2>
          <p className="text-white/75 text-[15px] leading-relaxed mb-8">
            The best way to know us is to join us. We'd love to have you this week.
          </p>
          <a
            href="/visit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-brand font-semibold text-[15px] hover:bg-brand-light transition-colors"
          >
            Plan A Visit
          </a>
        </div>
      </section>
    </div>
  );
}