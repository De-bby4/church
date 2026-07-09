import { useState, useEffect } from "react";
import gallery from "../assets/gallery.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";
import p15 from "../assets/p15.jpg";
import p16 from "../assets/p16.jpg";
import p17 from "../assets/p17.jpg";
import p18 from "../assets/p18.jpg";
import p19 from "../assets/p19.jpg";
import p20 from "../assets/p20.jpg";
import p21 from "../assets/p21.jpg";
import p22 from "../assets/p22.jpg";
import p23 from "../assets/p23.jpg";
import p24 from "../assets/p24.jpg";
import p26 from "../assets/p26.jpg";
import p27 from "../assets/p27.jpg";
import p28 from "../assets/p28.jpg";
import p29 from "../assets/p29.jpg";
import p30 from "../assets/p30.jpg";
import p31 from "../assets/p31.jpg";
import p32 from "../assets/p32.jpg";
import p33 from "../assets/p33.jpg";
import p34 from "../assets/p34.jpg";
import p35 from "../assets/p35.jpg";
import cp1 from "../assets/cp1.jpg";
import cp2 from "../assets/cp2.jpg";
import cp3 from "../assets/cp3.jpg";
import cp4 from "../assets/cp4.jpg";
import cp5 from "../assets/cp5.jpg";
import cp6 from "../assets/cp6.jpg";
import cp7 from "../assets/cp7.jpg";
import cp8 from "../assets/cp8.jpg";
import cp9 from "../assets/cp9.jpg";
import cp10 from "../assets/cp10.jpg";
import cp11 from "../assets/cp11.jpg";
import cp12 from "../assets/cp12.jpg";
import cp13 from "../assets/cp13.jpg";
import cp14 from "../assets/cp14.jpg";



// Drop your real photos in here, one per line, in whatever order you like.
// `position` is optional — controls which part of the photo shows if it
// gets cropped by its tile's height. Leave it out for the normal center
// crop. Only add it on photos where the crop is cutting off a head or
// leaving empty space above/below. Options: "top", "center", "bottom".
const PHOTOS = [
  { src: p1, alt: "Citadel Fellowship 1" },
  { src: p2, alt: "Citadel Fellowship 2" },
  { src: p30, alt: "Citadel Fellowship 3" },
  { src: p4, alt: "Citadel Fellowship 4" },
  { src: p5, alt: "Citadel Fellowship 5"},
  { src: p32, alt: "Citadel Fellowship 6", position: "top" },
  { src: p34, alt: "Citadel Fellowship 7" },
  { src: p35, alt: "Citadel Fellowship 8",  },
  { src: p8, alt: "Citadel Fellowship 9" },
  { src: p33, alt: "Citadel Fellowship 10" },
  { src: p11, alt: "Citadel Fellowship 11" },
  { src: p6, alt: "Citadel Fellowship 12", position: "top" },
  { src: p13, alt: "Citadel Fellowship 13" },
  { src: p29, alt: "Citadel Fellowship 14" },
  { src: p15, alt: "Citadel Fellowship 15" },
  { src: p16, alt: "Citadel Fellowship 16" },
  { src: p28, alt: "Citadel Fellowship 17" },
  { src: p18, alt: "Citadel Fellowship 18", position: "top" },
  { src: p19, alt: "Citadel Fellowship 19" },
  { src: p31, alt: "Citadel Fellowship 20" },
  { src: p21, alt: "Citadel Fellowship 21" },
  { src: p22, alt: "Citadel Fellowship 22", position: "top" },
  { src: p26, alt: "Citadel Fellowship 23" },
  { src: p24, alt: "Citadel Fellowship 24" },
  { src: p17, alt: "Citadel Fellowship 25" },
  { src: p14, alt: "Citadel Fellowship 26" },
  { src: p3, alt: "Citadel Fellowship 27" },
  { src: p10, alt: "Citadel Fellowship 28" },
  { src: p7, alt: "Citadel Fellowship 29" },
  { src: p20, alt: "Citadel Fellowship 30" },
];

// Kids Ministry photos — separate, smaller set shown in its own uniform
// grid below the main gallery. Swap these placeholders for real photos
// once you've confirmed parental/photo-release permission for each one.
// Keep captions generic (activity, not full names) for the same reason.
const KIDS_PHOTOS = [
  { src: p23, alt: "Kids Ministry", position: "50% 20%" },
  { src: cp1, alt: "Kids Ministry " },
  { src: p12, alt: "Kids Ministry " },
  { src: cp5, alt: "Kids Ministry " },
  { src: cp3, alt: "Kids Ministry " },
  { src: cp4, alt: "Kids Ministry " },
  { src: cp13, alt: "Kids Ministry " },
  { src: cp6, alt: "Kids Ministry " },
  { src: cp7, alt: "Kids Ministry " },
  { src: cp8, alt: "Kids Ministry " },
  { src: cp9, alt: "Kids Ministry " },
  { src: cp10, alt: "Kids Ministry " },
  { src: cp11, alt: "Kids Ministry " },
  { src: cp12, alt: "Kids Ministry " },
  { src: cp14, alt: "Kids Ministry " },
  { src: cp2, alt: "Kids Ministry " },
];

const HEIGHTS = ["h-[260px] md:h-[480px]", "h-[160px] md:h-[290px]"];

// Maps each photo's optional `position` field to the matching Tailwind class.
const OBJECT_POSITION = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};


function splitIntoColumns(photos, numCols) {
  const cols = Array.from({ length: numCols }, () => []);
  photos.forEach((photo, index) => {
    cols[index % numCols].push({ photo, index });
  });
  return cols;
}

function GalleryColumn({ items, columnOffset, onOpen }) {
  return (
    <div className="flex-1 flex flex-col gap-4 md:gap-5">
      {items.map((item, posInCol) => {
        
        const height = HEIGHTS[(posInCol + columnOffset) % HEIGHTS.length];
        return (
          <div
            key={item.index}
            className={`relative rounded-xl overflow-hidden cursor-pointer group border border-line shadow-soft ${height}`}
            onClick={() => onOpen(item.index)}
          >
            <img
              src={item.photo.src}
              alt={item.photo.alt || `Citadel Fellowship ${item.index + 1}`}
              className={`w-full h-full object-cover ${OBJECT_POSITION[item.photo.position] || "object-center"} transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
          </div>
        );
      })}
    </div>
  );
}

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  const [selectedKid, setSelectedKid] = useState(null);

  // React Router doesn't auto-scroll to a #hash when navigating between
  // pages (only plain HTML links do that natively). This handles it
  // manually — if the URL has a hash matching an element's id, scroll
  // there once the page has rendered.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, []);

  return (
    <div className="pt-20 bg-ink">
      {/* Page title banner */}
      <section className="relative py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
        <img src={gallery} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 50%" }} />
               <div className="absolute inset-0 bg-ink/80" />
               <div className="relative z-10">
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
          Our Moments
        </h1>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <p className="text-white/60 text-[16px] leading-[1.8]">
              A glimpse into life at Citadel Fellowship worship, community, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Mobile: 2 columns */}
          <div className="flex md:hidden gap-4">
            {splitIntoColumns(PHOTOS, 2).map((items, c) => (
              <GalleryColumn key={c} items={items} columnOffset={c} onOpen={setSelected} />
            ))}
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden md:flex gap-5">
            {splitIntoColumns(PHOTOS, 3).map((items, c) => (
              <GalleryColumn key={c} items={items} columnOffset={c} onOpen={setSelected} />
            ))}
          </div>

          {/* Lightbox */}
          {selected !== null && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
              onClick={() => setSelected(null)}
            >
              <button
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelected(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Arrows float over the image instead of sitting beside it —
                  keeps them on-screen no matter how narrow the viewport is. */}
              <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected((selected - 1 + PHOTOS.length) % PHOTOS.length);
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <img
                src={PHOTOS[selected].src}
                alt={PHOTOS[selected].alt}
                className="max-h-[80vh] max-w-[72vw] md:max-w-[80vw] rounded-xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected((selected + 1) % PHOTOS.length);
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Kids Ministry */}
      <section id="kids-ministry" className="bg-white py-16 md:py-24 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3 text-center">
            Kids Ministry
          </p>
          <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(24px,3vw,32px)] text-center pb-4">
            Little Hearts, Growing In Faith.
          </h2>
          <p className="text-subtle text-[15px] leading-[1.6] text-center pb-10" style={{ maxWidth: "560px", margin: "0 auto 40px" }}>
            A peek into our kids' classes worship, Bible stories, crafts,
            and games every Sunday. Shared with parental permission.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {KIDS_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-line shadow-soft aspect-square cursor-pointer group"
                onClick={() => setSelectedKid(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                />
              </div>
            ))}
          </div>

          {/* Kids Ministry lightbox */}
          {selectedKid !== null && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
              onClick={() => setSelectedKid(null)}
            >
              <button
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedKid(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedKid((selectedKid - 1 + KIDS_PHOTOS.length) % KIDS_PHOTOS.length);
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <img
                src={KIDS_PHOTOS[selectedKid].src}
                alt={KIDS_PHOTOS[selectedKid].alt}
                className="max-h-[80vh] max-w-[72vw] md:max-w-[80vw] rounded-xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedKid((selectedKid + 1) % KIDS_PHOTOS.length);
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}

          
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-ink py-14 md:py-16 px-6 md:px-10">
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h3 className="font-display font-bold text-white text-[22px] md:text-[26px] tracking-tight mb-3">
            See more on Instagram
          </h3>
          <p className="text-white/50 text-[15px] leading-[1.7] pb-4">
            Follow us for weekly updates, behind-the-scenes moments, and encouragements.
          </p>
          <a
            href="https://www.instagram.com/citadelfellowship?igsh=eXM0YTVlbTB1YmU4"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            @citadelfellowship
          </a>
        </div>
      </section>
    </div>
  );
}