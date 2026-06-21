// import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutus.jpg";
// import visitImg from "../assets/visit.png";
import aboutbigImg from "../assets/aboutbig.png";
import husband from "../assets/husband.jpg";
import wife from "../assets/wife.jpg";

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

    <section className="relative py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden">
    <img src={aboutbigImg} alt="" className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0 bg-ink/80"  />  
    <div className="relative z-10">
    <p className="text-brand-light text-[12px] font-bold tracking-[3px] uppercase mb-4">
      Who We Are
    </p>
    <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)] ">
      Knowing Christ. Making Him Known.
    </h1>
    <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
    <p className="text-white/65 text-[17px] leading-[1.5] max-w-[600px] mx-auto text-center">
     Helping people find God, grow in faith, and walk in purpose — together.
    </p>
    </div>
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
      <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(28px,3.5vw,40px)] pb-5">
        A family built on faith, grown through people.
      </h2>
      <div className="flex flex-col gap-4 text-subtle text-[15.5px] leading-[1.5]">
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
  Our Pastors
</p>

<h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(28px,3.5vw,42px)] pb-2">
  Meet Our Pastors.
</h2>
{/* <div style={{ width: "40px", height: "3px", background: "#c8102e", borderRadius: "9999px", margin: "0 auto 20px" }} /> */}
<p className="text-subtle text-[16px] leading-[1.5] max-w-[620px] mx-auto mb-14 " style={{ maxWidth: "620px", margin: "0 auto 56px" }}>
  With hearts for God and people, our pastors faithfully serve and lead
  the Citadel Fellowship family in faith, love, and purpose.
</p>

    {/* Pastor + wife cards */}
   {/* MOBILE — horizontal swipe (hidden from sm up) */}
<div className="flex sm:hidden gap-5 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">
  {[
    { name: "Pastor Femmy Joe", role: "Lead Pastor", img: husband },
    { name: "Minister Bola Ilesanmi", role: "First Lady", img: wife },
  ].map((p) => (
    <div key={p.name} className="rounded-2xl overflow-hidden border border-line shadow-soft bg-white flex-shrink-0 w-[75vw] snap-start">
      <div className="aspect-[4/4.5] overflow-hidden">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
      </div>
      <div className="relative">
        <div className="bg-ink pt-5 pb-5 px-5 text-center">
          <p className="font-display font-semibold text-white text-[22px]">{p.name}</p>
          <p className="text-white/55 text-[15px] mt-1.5">{p.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>

{/* DESKTOP — centered flex (hidden below sm) */}
<div className="hidden sm:flex" style={{ justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
  {[
    { name: "Pastor Femmy Joe", role: "Lead Pastor", img: husband },
    { name: "Minister Bola Ilesanmi", role: "First Lady", img: wife },
  ].map((p) => (
    <div key={p.name} style={{ width: "380px" }} className="rounded-2xl overflow-hidden border border-line shadow-soft bg-white">
      <div className="aspect-[4/4.5] overflow-hidden">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
      </div>
      <div className="relative">
        <div className="bg-ink pt-5 pb-5 px-5 text-center">
          <p className="font-display font-semibold text-white text-[22px]">{p.name}</p>
          <p className="text-white/55 text-[15px] mt-1.5">{p.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display font-bold text-white text-[clamp(26px,3.5vw,38px)] tracking-tight mb-4">
            Come see for yourself.
          </h2>
          <p className="text-white/75 text-[15px] leading-relaxed pb-4">
            The best way to know us is to join us. We'd love to have you this week.
          </p>
          <Link
            to="/new-here"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand text-white hover:bg-brand-dark font-semibold text-[15px]  transition-colors"
          >
            New Here? Start Here
          </Link>
        </div>
      </section>
    </div>
  );
}