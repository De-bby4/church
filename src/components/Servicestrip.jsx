import { Link } from "react-router-dom";

export default function ServiceStrip() {
  return (
    <section className="bg-ink px-6 md:px-10 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Services */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">

          {/* Sunday */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <div>
              <p className="text-white font-display font-semibold text-[16px]">Sunday Service</p>
              <p className="text-white/55 text-[13px] mt-0.5">In Person · 4:00 – 6:00 PM</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-white/10" />

          {/* Wednesday */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div>
              <p className="text-white font-display font-semibold text-[16px]">Wednesday Service</p>
              <p className="text-white/55 text-[13px] mt-0.5">Online · 7:00 – 8:30 PM</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-white/10" />

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <p className="text-white font-display font-semibold text-[16px]">Guelph, ON</p>
              <p className="text-white/55 text-[13px] mt-0.5">College Heights Secondary School</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/visit"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand text-white font-semibold text-[14px] hover:bg-brand-dark transition-colors"
        >
          Plan A Visit
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>

      </div>
    </section>
  );
}