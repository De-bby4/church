import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV = [
  { label: "About Us", to: "/about" },
  { label: "New Here?", to: "/new-here" },
  { label: "Sermons", to: "/sermons" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="px-6 md:px-10 pt-16 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Logo + about */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="Citadel Fellowship" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-white text-[17px] leading-tight">
                Citadel Fellowship
              </span>
            </Link>
            <p className="text-white/50 text-[14px] leading-[1.75]">
              A community of ordinary people pursuing an extraordinary God. Come as you are.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-[14px] mb-5 tracking-wide uppercase text-white/70">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  className="text-white/50 text-[14px] hover:text-white transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service times */}
          <div>
            <h4 className="font-display font-semibold text-[14px] mb-5 tracking-wide uppercase text-white/70">
              Service Times
            </h4>
            <div className="flex flex-col gap-3.5">
              <div>
                <p className="text-white text-[14px] font-medium">Sunday</p>
                <p className="text-white/50 text-[13px]">In Person · 4:00 PM</p>
              </div>
              <div>
                <p className="text-white text-[14px] font-medium">Wednesday</p>
                <p className="text-white/50 text-[13px]">Online · 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Location + socials */}
          <div>
            <h4 className="font-display font-semibold text-[14px] mb-5 tracking-wide uppercase text-white/70">
              Find Us
            </h4>
            <p className="text-white/50 text-[14px] leading-[1.75] mb-5">
              College Heights Secondary School<br />
              371 College Ave W<br />
              Guelph, ON N1G 1T3
            </p>
            <div className="flex items-center gap-3">
              {/* YouTube */}
              <a
                href="https://youtube.com/@citadelfellowship?si=czkvIDlUt3l9rw8T"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" />
                </svg>
              </a>
              {/* Instagram placeholder */}
              <a
                href="https://www.instagram.com/citadelfellowship"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Facebook placeholder */}
              <a
                href="https://www.facebook.com/citadelfellowship"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/35 text-[13px]">
            &copy; {new Date().getFullYear()} Citadel Fellowship. All rights reserved.
          </p>
          <a
            href="https://maps.google.com/?q=College+Heights+Secondary+School,371+College+Ave+W,+Guelph,+ON+N1G+1T3"
            target="_blank"
            rel="noreferrer"
            className="text-white/35 text-[13px] hover:text-white/60 transition-colors"
          >
            Guelph, Ontario, Canada
          </a>
        </div>
      </div>
    </footer>
  );
}