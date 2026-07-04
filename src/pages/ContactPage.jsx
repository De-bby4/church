import { Link } from "react-router-dom";
import contact from "../assets/contact.jpeg"

const ADDRESS = "College Heights Secondary School, 371 College Ave W, Guelph, ON N1G 1T3";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const CONTACT_DETAILS = [
  {
    label: "Location",
    value: ADDRESS,
    href: MAPS_URL,
    icon: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    ),
  },
  {
    label: "Email",
    value: "cfadmin@citadelfellowship.com",
    href: "mailto:cfadmin@citadelfellowship.com",
    icon: <path d="M3 6h18v12H3V6Zm0 0 9 7 9-7" />,
  },
  {
    label: "Phone",
    value: "1 (905) 325-1989",
    href: "tel:+19053251989",
    icon: <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1L6.6 10.8Z" />,
  },
  {
    label: "Website",
    value: "www.citadelfellowship.com",
    href: "https://www.citadelfellowship.com",
    icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c-2.5 0-4.5-4-4.5-9s2-9 4.5-9 4.5 4 4.5 9-2 9-4.5 9ZM3.5 9h17M3.5 15h17" />,
  },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/citadelfellowship",
    icon: (
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.6v2.2H8.3V14h2.4v7h2.8Z" fill="currentColor" stroke="none" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/citadelfellowship?igsh=eXM0YTVlbTB1YmU4",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@citadelfellowship",
    icon: (
      <path d="M16 3v9.5a3.5 3.5 0 1 1-3-3.46V6.5A6.5 6.5 0 1 0 19 13V8.8a6 6 0 0 0 3-.8V5a4 4 0 0 1-3-2" fill="none" />
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@citadelfellowship",
    icon: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" fill="currentColor" stroke="none" />
    ),
  },
  {
    name: "X",
    href: "https://x.com/citadelfellowship",
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-7.3L4.3 22H1.2l8.1-9.3L1 2h7.3l5 6.7L18.9 2Z" fill="currentColor" stroke="none" />
    ),
  },
];

function IconBadge({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      {children}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-20 bg-ink">
      {/* Page title banner */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 text-center" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
         <img src={contact} alt="" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: "center 56%"}} />
                  <div className="absolute inset-0 bg-ink/80" />
                  <div className="relative z-10 flex flex-col items-center text-center">

        <p className="text-brand-light text-[12px] font-bold tracking-[3px] uppercase mb-4">
          Get In Touch
        </p>
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
          Contact Us
        </h1>
        <p className="text-white/60 text-[16px] leading-[1.6] mt-4" style={{ maxWidth: "560px", margin: "16px auto 0" }}>
          Have a question, need prayer, or just want to say hi? We'd love to
          hear from you.
        </p>
        </div>
      </section>

      {/* Contact details + map */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Details card */}
          <div className="bg-white rounded-2xl border border-line shadow-soft p-7 md:p-9">
            <h2 className="font-display font-bold text-ink text-[25px] tracking-tight pb-4">
              Reach Us
            </h2>

            <div className="flex flex-col gap-5 pb-5">
              {CONTACT_DETAILS.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.label === "Location" || detail.label === "Website" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                    <IconBadge>{detail.icon}</IconBadge>
                  </div>
                  <div>
                    <p className="text-subtle text-[12px] font-semibold uppercase tracking-wide">
                      {detail.label}
                    </p>
                    <p className="text-ink text-[15px] font-medium leading-[1.4] group-hover:text-brand transition-colors ">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-8 pt-7 border-t border-line">
              <p className="text-subtle text-[12px] font-semibold uppercase tracking-wide pb-2">
                Follow Us
              </p>
              <div className="flex items-center gap-3 pb-2">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition-colors"
                  >
                    <IconBadge>{social.icon}</IconBadge>
                  </a>
                ))}
              </div>
              <p className="text-subtle text-[14px] mt-3">@citadelfellowship</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-line shadow-soft h-[380px] lg:h-full">
            <iframe
              src={MAPS_EMBED_URL}
              title="Citadel Fellowship location"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display font-bold text-white text-[clamp(24px,3vw,34px)] tracking-tight mb-4">
            Come see us this Sunday.
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed pb-5">
            We'd love to have you join us in person or online.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
          >
            View Service Times
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}