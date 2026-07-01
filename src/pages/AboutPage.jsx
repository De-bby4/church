import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutus.jpg";
import aboutbigImg from "../assets/aboutbig.png";
import husband from "../assets/husband.jpg";
import wife from "../assets/wife.jpg";
import slide1 from "../assets/slide1.JPG";
import slide2 from "../assets/slide2.JPG";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const SLIDES = [aboutImg, slide1, slide2, slide3, slide4];

function CardSlideshow() {
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCenter((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset) => (center + offset + SLIDES.length) % SLIDES.length;

  const positions = [
    {
      idx: getIndex(-1),
      style: {
        transform: "translateX(-55%) translateY(-16px) scale(0.78) rotate(-4deg)",
        zIndex: 1,
        opacity: 0.7,
        filter: "brightness(0.8)",
      },
    },
    {
      idx: getIndex(0),
      style: {
        transform: "translateX(0) translateY(0) scale(1) rotate(0deg)",
        zIndex: 3,
        opacity: 1,
        filter: "brightness(1)",
      },
    },
    {
      idx: getIndex(1),
      style: {
        transform: "translateX(55%) translateY(-16px) scale(0.78) rotate(4deg)",
        zIndex: 1,
        opacity: 0.7,
        filter: "brightness(0.8)",
      },
    },
  ];

  return (
    <div className="w-full" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <div className="relative flex items-center justify-center" style={{ height: "clamp(280px, 50vw, 420px)" }}>
        {positions.map((pos, i) => (
          <div
            key={i}
            className="absolute rounded-2xl overflow-hidden border-2 border-white shadow-lg"
            style={{
              width: "clamp(180px, 40vw, 280px)",
              height: "clamp(240px, 48vw, 370px)",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              ...pos.style,
            }}
            onClick={() => setCenter(pos.idx)}
          >
            <img
              src={SLIDES[pos.idx]}
              alt={`Citadel Fellowship ${pos.idx + 1}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCenter(i)}
            className="w-2.5 h-2.5 rounded-full transition-all duration-300"
            style={{
              background: center === i ? "#c8102e" : "#e3e8f0",
              transform: center === i ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-20 bg-ink">

      <section className="relative py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden">
        <img src={aboutbigImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10">
          <p className="text-brand-light text-[12px] font-bold tracking-[3px] uppercase mb-4">
            Who We Are
          </p>
          <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
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
      <section className="bg-white py-20 md:py-28 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
              Who Are We?
            </p>
            <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(28px,3.5vw,40px)] pb-5">
              A spiritual fortress, rooted in God's presence.
            </h2>
            <div className="flex flex-col gap-4 text-subtle text-[15.5px] leading-[1.7]">
              <p>
                Citadel Fellowship holds a spiritual significance as a hub of
                God's presence built on the platform of intercession for the
                land. Our journey began in January 2022 as a prayer group, and
                continued until it pleased the Lord to metamorphose into a
                full-blown ministry in August 2025.
              </p>
              <p>
                We are dedicated to raising believers who serve the agenda of
                God until it finds expression here on the earth. Our identity
                is rooted in the revelation that God Himself is our Citadel.
              </p>
              <p className="text-ink/70 italic text-[14.5px] border-l-[3px] border-brand pl-5">
                "Because the Lord is our Fortress and Stronghold, we are called
                to reflect His nature by becoming a people through whom His
                strength, protection, truth, and Kingdom are made manifest in
                our generation."
                <span className="block text-brand text-[12px] font-semibold mt-2 not-italic">
                  — Psalm 18:2 (ESV)
                </span>
              </p>
            </div>
          </div>

          {/* Card Slideshow */}
          <CardSlideshow />
        </div>
      </section>

     {/* Mandate & Vision */}
<section className="py-20 md:py-28 px-6 md:px-10" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
  <div style={{ maxWidth: "750px", margin: "0 auto", textAlign: "center" }}>

    <p className="text-brand-light text-[11px] font-bold tracking-[3px] uppercase mb-4">
      Our Mandate
    </p>
    <p className="font-display font-bold text-white text-[20px] md:text-[26px] leading-[1.5]">
      To position God's Kingdom agenda in the heart of every man and
      enable them to be established in it.
    </p>

    <div className="w-12 h-[2px] bg-brand rounded-full" style={{ margin: "40px auto" }} />

    <p className="text-brand-light text-[11px] font-bold tracking-[3px] uppercase mb-4">
      Our Vision
    </p>
    <p className="font-display font-bold text-white text-[20px] md:text-[26px] leading-[1.5]">
      To cultivate a place where the Spirit of God flourishes, shaping
      and transforming lives until Christ is fully formed in all of us.
    </p>

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
          <p className="text-subtle text-[16px] leading-[1.5] max-w-[620px] mx-auto mb-14" style={{ maxWidth: "620px", margin: "0 auto 56px" }}>
            With hearts for God and people, our pastors faithfully serve and lead
            the Citadel Fellowship family in faith, love, and purpose.
          </p>

          {/* MOBILE — horizontal swipe */}
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

          {/* DESKTOP — centered flex */}
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand text-white hover:bg-brand-dark font-semibold text-[15px] transition-colors"
          >
            New Here? Start Here
          </Link>
        </div>
      </section>
    </div>
  );
}