import { useState } from "react";
import p1 from "../assets/husband.jpg";

const PHOTOS = [
  { src: p1, alt: "Sunday worship" },
  { src: p1, alt: "Fellowship dinner" },
  { src: p1, alt: "Sunday worship" },
  { src: p1, alt: "Fellowship dinner" },
  { src: p1, alt: "Sunday worship" },
  { src: p1, alt: "Fellowship dinner" },
  { src: p1, alt: "Sunday worship" },
  { src: p1, alt: "Fellowship dinner" },
  { src: p1, alt: "Sunday worship" },
];
// Placeholder grid when no photos are added yet
const PLACEHOLDER_COUNT = 9;

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-20 bg-ink">
      {/* Page title banner */}
      <section className="py-16 md:py-20 px-6 md:px-10 text-center" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
        <p className="text-white/50 text-[12px] font-medium mb-3">
          Home <span className="mx-1.5">/</span> <span className="text-white/80">Gallery</span>
        </p>
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
          Our Moments
        </h1>
        <p className="text-white/50 text-[16px] leading-[1.5] mt-4" style={{ maxWidth: "500px", margin: "16px auto 0" }}>
          A glimpse into life at Citadel Fellowship — worship, community, and everything in between.
        </p>
      </section>

      {/* Gallery grid */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {PHOTOS.length > 0 ? (
            <>
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {PHOTOS.map((photo, i) => (
                  <div
                    key={i}
                    className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelected(i)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt || `Citadel Fellowship ${i + 1}`}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Lightbox */}
              {selected !== null && (
                <div
                  className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
                  onClick={() => setSelected(null)}
                >
                  <button
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    onClick={() => setSelected(null)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-4 w-full max-w-4xl">
                    <button
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
                      className="max-h-[80vh] max-w-full rounded-xl object-contain"
                      style={{ margin: "0 auto" }}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
                </div>
              )}
            </>
          ) : (
            /* Placeholder state */
            <div>
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => {
                  const heights = ["h-[220px]", "h-[300px]", "h-[260px]", "h-[340px]", "h-[240px]", "h-[280px]", "h-[320px]", "h-[250px]", "h-[290px]"];
                  return (
                    <div
                      key={i}
                      className={`break-inside-avoid rounded-xl ${heights[i % heights.length]} bg-white border border-line flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#e3e8f0" strokeWidth="1.5" className="w-10 h-10" style={{ margin: "0 auto 8px" }}>
                          <rect x="3" y="3" width="18" height="18" rx="3" />
                          <circle cx="8.5" cy="8.5" r="1.5" fill="#e3e8f0" stroke="none" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <p className="text-line text-[12px]">Photo {i + 1}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-14">
                <p className="text-subtle text-[16px]">Photos coming soon — stay tuned!</p>
              </div>
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
          <p className="text-white/50 text-[15px] leading-[1.7] mb-8">
            Follow us for weekly updates, behind-the-scenes moments, and encouragements.
          </p>
          <a
            href="https://www.instagram.com/citadelfellowship?igsh=eXM0YTVlbTB1YmU4"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-[15px] hover:bg-white/20 transition-colors border border-white/15"
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