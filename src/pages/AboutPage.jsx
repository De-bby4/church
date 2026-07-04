import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutus.jpg";
import a0 from "../assets/try.jpeg";
import husband from "../assets/husband.jpg";
import slide1 from "../assets/slide1.JPG";
import slide2 from "../assets/slide2.JPG";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import a1 from "../assets/about1.jpg";
import a2 from "../assets/about2.jpg";
import a3 from "../assets/about3.jpg";
import a4 from "../assets/about4.jpg";

const SLIDES = [aboutImg, slide1, slide2, slide3, slide4];

const HERO_IMAGES = [
  { src: a0, position: "center 50%" },
  { src: a1, position: "center 50%" },
  { src: a2, position: "center 50%" },
  { src: a3, position: "center 50%" },
  { src: a4, position: " 30%" },
];

function getObjectPositionClass(position) {
  if (!position) return "object-center";
  if (position === "top") return "object-top";
  if (position === "bottom") return "object-bottom";
  if (position === "center") return "object-center";
  // Full CSS-style value like "center 50%" or "bottom 40%" — just needs
  // spaces turned into underscores for Tailwind's arbitrary value syntax.
  if (position.includes(" ")) return `object-[${position.replace(/\s+/g, "_")}]`;
  // A lone value like "30%" — treat it as a vertical focus point.
  return `object-[center_${position}]`;
}

// Crossfades through a set of background images — each one fades in while
// the previous fades out, instead of a hard cut or a slide/swipe motion.
function HeroFadeSlideshow({ images, intervalMs = 3500, fadeMs = 1500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${getObjectPositionClass(img.position)}`}
          style={{
            opacity: i === index ? 1 : 0,
            transform: `scale(${img.zoom || 1})`,
            transition: `opacity ${fadeMs}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

function CardSlideshow() {
  const [center, setCenter] = useState(0);
  const [dragX, setDragX] = useState(0); // live drag offset, px
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const containerWidth = useRef(500);
  const containerRef = useRef(null);

  // Pause autoplay while the user is actively swiping
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setCenter((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isDragging]);

  const getIndex = (offset) => (center + offset + SLIDES.length) % SLIDES.length;

  // Convert the live drag distance into a -1..1 progress value
  const dragProgress = () => {
    const w = containerWidth.current || 500;
    return Math.max(-1, Math.min(1, dragX / (w * 0.45)));
  };

  const buildPositions = () => {
    const progress = dragProgress();

    // Base transform recipe for a slot, shifted by drag progress so cards
    // visibly slide with the finger/cursor instead of snapping at release.
    const slot = (baseX, baseScale, baseRotate, baseOpacity, baseBrightness, shiftWeight) => {
      const x = baseX + progress * shiftWeight;
      const scale = baseScale + Math.abs(progress) * 0.03;
      return {
        transform: `translateX(${x}%) translateY(-16px) scale(${baseScale === 1 ? 1 - Math.abs(progress) * 0.05 : scale}) rotate(${baseRotate}deg)`,
        opacity: baseOpacity,
        filter: `brightness(${baseBrightness})`,
      };
    };

    return [
      {
        idx: getIndex(-1),
        style: {
          zIndex: 1,
          ...slot(-55, 0.78, -4, 0.7, 0.8, 40),
        },
      },
      {
        idx: getIndex(0),
        style: {
          zIndex: 3,
          ...slot(0, 1, 0, 1, 1, 40),
        },
      },
      {
        idx: getIndex(1),
        style: {
          zIndex: 1,
          ...slot(55, 0.78, 4, 0.7, 0.8, 40),
        },
      },
    ];
  };

  const positions = buildPositions();

  const handleDragStart = (clientX) => {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.offsetWidth;
    }
    dragStartX.current = clientX;
    setIsDragging(true);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    setDragX(clientX - dragStartX.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    const threshold = containerWidth.current * 0.15;

    if (dragX <= -threshold) {
      setCenter((prev) => (prev + 1) % SLIDES.length);
    } else if (dragX >= threshold) {
      setCenter((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }

    setIsDragging(false);
    setDragX(0);
  };

  return (
    <div className="w-full" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <div
        ref={containerRef}
        className="relative flex items-center justify-center select-none"
        style={{ height: "clamp(280px, 50vw, 420px)", touchAction: "pan-y" }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          handleDragStart(e.clientX);
        }}
        onPointerMove={(e) => handleDragMove(e.clientX)}
        onPointerUp={handleDragEnd}
        onPointerLeave={() => isDragging && handleDragEnd()}
      >
        {positions.map((pos, i) => (
          <div
            key={i}
            className="absolute rounded-2xl overflow-hidden border-2 border-white shadow-lg"
            style={{
              width: "clamp(180px, 40vw, 280px)",
              height: "clamp(240px, 48vw, 370px)",
              transition: isDragging
                ? "none"
                : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease, filter 0.6s ease",
              cursor: isDragging ? "grabbing" : "grab",
              ...pos.style,
            }}
            onClick={() => !isDragging && setCenter(pos.idx)}
          >
            <img
              src={SLIDES[pos.idx]}
              alt={`Citadel Fellowship ${pos.idx + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              style={{ objectPosition: "center 20%" }}
              draggable={false}
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
        <HeroFadeSlideshow images={HERO_IMAGES} />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10">
          <p className="text-brand-light text-[20px] font-bold tracking-[3px] uppercase mb-4">
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

      {/* Leadership — Pastor Femmy Joe */}
      <section className="bg-surface py-20 md:py-28 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1 relative">
            <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full rounded-2xl bg-brand/15" />
            <div className="relative rounded-2xl overflow-hidden border border-line shadow-soft bg-white max-h-[520px]">
              <img src={husband} alt="Pastor Femmy Joe" className="w-full h-full object-cover" style={{ maxHeight: "520px" }} />
            </div>
          </div>

          {/* Write-up */}
          <div className="order-1 lg:order-2">
            <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
              Meet The Leadership
            </p>
            <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(26px,3.2vw,36px)] pb-5">
              Pastor Femmy Joe
            </h2>

            <p className="text-ink/70 italic text-[14.5px] leading-[1.6] border-l-[3px] border-brand pl-5 mb-6">
              "And I will give you shepherds according to My heart, who will
              feed you with knowledge and understanding."
              <span className="block text-brand text-[12px] font-semibold mt-2 not-italic">
                — Jeremiah 3:15 NKJV
              </span>
            </p>

            <div className="flex flex-col gap-4 text-subtle text-[15.5px] leading-[1.5]">
              <p>
                Pastor Femmy Joe is a minister of the Gospel with a passion
                for awakening genuine love for God and inspiring believers to
                live active, expressive, and Christ-centered lives.
              </p>
              <p>
                He has served in pastoral and media leadership roles across
                several ministries, including The Redeemed Christian Church
                of God, as Music Pastor at River of Life International
                Fellowship, and as Head of the Media Unit for Remnant
                Christian Network North America. He is a graduate of RCN
                Theological Seminary – Adullam (2021).
              </p>
              <p>
                He received the call to pulpit ministry in 2016, and after a
                prolonged season of prayer, the Lord instructed him to raise
                intercessors for the city of Guelph and Wellington County,
                leading to the birth of The Watchmen Prayer Group in January
                2022, a daily prayer movement that continues today.
              </p>
              <p>
                In 2024, the Lord gave clarity for the establishment of
                Citadel Fellowship, which officially began on August 30,
                2025.
              </p>
            </div>
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