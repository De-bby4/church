import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const LINKS = [
  { label: "About Us",   href: "/about" },
  { label: "New Here?",  href: "/new-here" },
  { label: "Services",   href: "/services" },
  { label: "Media",      href: "https://www.instagram.com/citadelfellowship?igsh=eXM0YTVlbTB1YmU4", external: true },
  { label: "Giving",     href: "/giving" },
  { label: "Sermons",    href: "/sermons" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-10 h-20 transition-all duration-300 ${
        solid || menuOpen ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo + name */}
      <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={handleLinkClick}>
        <img src={logo} alt="Citadel Fellowship" className="w-8 h-12" />
        <span className="font-display font-bold text-white text-[20px] leading-tight tracking-tight">
          Citadel Fellowship
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-9">
        {LINKS.map((l) =>
          l.external ? (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white text-[14px] font-medium transition-colors"
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.label}
              to={l.href}
              className="text-white/80 hover:text-white text-[14px] font-medium transition-colors"
            >
              {l.label}
            </Link>
          )
        )}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="lg:hidden w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white relative z-50"
      >
        {menuOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown panel */}
      <div
        className={`lg:hidden fixed top-20 inset-x-0 bg-ink/98 backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-1">
          {LINKS.map((l) =>
            l.external ? (
              
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                className="text-white/85 hover:text-white text-[16px] font-medium py-3 border-b border-white/8 last:border-b-0 transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onClick={handleLinkClick}
                className="text-white/85 hover:text-white text-[16px] font-medium py-3 border-b border-white/8 last:border-b-0 transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}