import { useState, useEffect } from "react";

// Drop in your real Shorts here. To get an id: open the Short, tap Share →
// Copy Link. You'll get something like youtube.com/shorts/AbCdEfGhIjK —
// the part after /shorts/ is the id. `title` now shows as the caption text
// under each thumbnail (like the video's actual title), so make each one
// specific — e.g. "Sunday Word: Walking In Faith" instead of a placeholder.
const SHORTS = [
  { id: "cPoXwJ72cnI", title: "Sunday Word" },
  { id: "gmcrbbjpOkk", title: "Sunday Word" },
  { id: "My8o4Q00JAs", title: "Sunday Word" },
  { id: "aUHyDWmlXPg", title: "Sunday Word" },
  { id: "VUvaigkYIoc", title: "Sunday Word" },
  { id: "GaZxtT2BzOE", title: "Sunday Word" },
  { id: "nNpiBB3L1Wk", title: "Sunday Word" },
  { id: "R2OrrKr4oXk", title: "Sunday Word" },
  { id: "sM52LInXWmY", title: "Sunday Word" },
  { id: "ivxxlXBemow", title: "Sunday Word" },
  { id: "Ofts-7gbeFw", title: "Sunday Word" },
  { id: "CEiIhQ1S9Nc", title: "Sunday Word" },
  { id: "RW8TBAzY3jY", title: "Sunday Word" },
  { id: "SwLKG00763Q", title: "Sunday Word" },
  { id: "EHE1VoM8ud0", title: "Sunday Word" },
  { id: "7yknq9xtk9s", title: "Sunday Word" },
  { id: "gp_cLYFLZZw", title: "Sunday Word" },
  { id: "REPLACE_ME_18", title: "Sunday Word" },
  { id: "REPLACE_ME_19", title: "Sunday Word" },
  { id: "REPLACE_ME_20", title: "Sunday Word" },
];

const CHANNEL_URL = "https://youtube.com/@citadelfellowship?si=z9fSZrDviKTDtq6f";

function YouTubeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="1" y="4.5" width="22" height="15" rx="4" fill="#FF0000" />
      <path d="M9.6 15.5V8.5L15.8 12Z" fill="white" />
    </svg>
  );
}

function ShortCard({ short, onOpen }) {
  return (
    <div>
      <button
        onClick={() => onOpen(short)}
        className="group relative rounded-2xl overflow-hidden border border-line shadow-soft bg-black w-full text-left block"
        style={{ aspectRatio: "9 / 16" }}
        aria-label={`Play ${short.title}`}
      >
        <img
          src={`https://i.ytimg.com/vi/${short.id}/maxresdefault.jpg`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`;
          }}
          alt={short.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dim overlay — subtle at rest, darker on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition-colors duration-200" />

        {/* YouTube icon — hidden until hover on desktop, always visible on touch */}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <YouTubeIcon className="w-12 h-12 drop-shadow-lg group-hover:scale-110 transition-transform duration-200" />
        </div>
      </button>

      <p className="text-ink text-[13.5px] font-semibold leading-[1.4] mt-3 line-clamp-2">
        {short.title}
      </p>
    </div>
  );
}

function ShortsGrid({ onOpen }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {SHORTS.map((short, i) => (
        <ShortCard key={i} short={short} onOpen={onOpen} />
      ))}
    </div>
  );
}

function ShortModal({ short, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!short) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(10,10,10,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="rounded-2xl overflow-hidden shadow-2xl bg-black"
        style={{ width: "min(380px, 88vw)", aspectRatio: "9 / 16" }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${short.id}?autoplay=1`}
          title={short.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function SermonsPage() {
  const [activeShort, setActiveShort] = useState(null);

  return (
    <div>
      {/* Page banner */}
      <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center">
        <p className="text-brand-light text-[12px] font-bold tracking-[3px] uppercase mb-4">
          Sermons
        </p>
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(30px,4.5vw,46px)]">
          Words That Build Faith.
        </h1>
        <p className="text-white/65 text-[16px] leading-[1.6] max-w-[560px] mx-auto mt-4">
          Catch quick moments from recent messages below, or watch full
          sermons on our YouTube channel.
        </p>
      </section>

      {/* Shorts */}
      <section className="bg-surface py-20 md:py-28 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3 text-center">
            Latest Shorts
          </p>
          <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(24px,3vw,32px)] text-center pb-12">
            Quick Words, Straight To The Heart.
          </h2>

          <ShortsGrid onOpen={setActiveShort} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center text-center"
        style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}
      >
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display font-bold text-white text-[clamp(24px,3.2vw,32px)] tracking-tight mb-4">
            Want The Full Message?
          </h2>
          <p className="text-white/75 text-[15px] leading-relaxed pb-8">
            Our full sermon library lives on YouTube. Subscribe so you never
            miss a Sunday.
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
          >
            <YouTubeIcon className="w-4 h-4" />
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* Lightbox */}
      <ShortModal short={activeShort} onClose={() => setActiveShort(null)} />
    </div>
  );
}