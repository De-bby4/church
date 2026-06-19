import React from "react";
import aboutImg from "../assets/aboutus.jpg";
// import visitImg from "../assets/visit.png";
import aboutbigImg from "../assets/aboutbig.png";

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
    <div >

      {/* Hero intro */}
     <section className="relative py-35 md:py-54 px-6 md:px-10 flex flex-col items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <img
    src={aboutbigImg}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-ink/80" />

  {/* Content */}
  <div className="relative z-10 max-w-[800px] mx-auto text-center">
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
{/* Story */}
<section className="bg-white py-20 md:py-28 px-6 md:px-10">
  <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
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

    {/* Photo */}
    <div className="rounded-2xl overflow-hidden border border-line w-full" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <img src={aboutImg} alt="About Citadel Fellowship" className="w-full h-[450px] object-cover rounded-2xl" style={{ objectPosition: "center 20%" }}/>
    </div>
  </div>
</section>

{/* Leadership — Pastor & Wife */}
<section className="bg-surface py-20 md:py-28 px-6 md:px-10">
  <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
    <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
      Leadership
    </p>
    <h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(28px,3.5vw,42px)] mb-4">
      Led with heart, grounded in the Word.
    </h2>
    <div style={{ width: "40px", height: "3px", background: "#c8102e", borderRadius: "9999px", margin: "0 auto 20px" }} />
    <p className="text-subtle text-[16px] leading-[1.8] mb-14" style={{ maxWidth: "560px", margin: "0 auto 56px" }}>
      Our pastors and leadership team are committed to shepherding this
      family with integrity, wisdom, and genuine love for every person
      who calls Citadel home.
    </p>

    {/* Pastor + wife cards */}
    <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
      {[
        { name: "Pastor [Name]", role: "Lead Pastor" },
        { name: "[Wife's Name]", role: "First Lady" },
      ].map((p) => (
        <div key={p.name} style={{ width: "380px" }} className="rounded-2xl overflow-hidden border border-line shadow-soft bg-white">
          <div className="aspect-[4/4.5] bg-surface flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-brand/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.5" className="w-12 h-12">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-lg bg-brand flex items-center justify-center shadow-md z-10">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M4 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z" />
              </svg>
            </div>
            <div className="bg-ink pt-10 pb-7 px-5 text-center">
              <p className="font-display font-semibold text-white text-[22px]">
                {p.name}
              </p>
              <p className="text-white/55 text-[15px] mt-1.5">{p.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center text-center">
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