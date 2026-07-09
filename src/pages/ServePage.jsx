import { useState, useEffect } from "react";
import serve from "../assets/serve.jpeg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

const SLIDES = [s1, s2, s3, s4, s5, s6];

const DEPARTMENTS = [
  "Media & Sound",
  "Ushering",
  "Worship Team",
  "Prayer Team",
  "Children's Church",
  "Hospitality",
  "Outreach & Evangelism",
  "Administration",
];

function CardSlideshow() {
  const [center, setCenter] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;
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
              cursor: SLIDES.length > 1 ? "pointer" : "default",
              ...pos.style,
            }}
            onClick={() => setCenter(pos.idx)}
          >
            <img
              src={SLIDES[pos.idx]}
              alt={`Serving at Citadel Fellowship ${pos.idx + 1}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        ))}
      </div>
      {SLIDES.length > 1 && (
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
      )}
    </div>
  );
}

export default function ServePage() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleDept = (dept) => {
    setSelected((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("departments", selected.join(", "));
    formData.append("formType", "Serve Sign-Up");

    try {
      await fetch("https://formspree.io/f/xojoajek", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
      setSelected([]);
    } catch (err) {
      alert("Something went wrong — please try again.");
    }
  };

  return (
    <div className="pt-20 bg-ink">
      {/* Page title banner */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6 md:px-10 text-center" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
        <img src={serve} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10">
          <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
            Serve With Us
          </h1>
          <p className="text-white/50 text-[16px] leading-[1.7] mt-4" style={{ maxWidth: "550px", margin: "16px auto 0" }}>
            Every gift matters. Discover where you can plug in and use what God
            has given you to build His Kingdom.
          </p>
        </div>
      </section>

      {/* Why Serve text + Form */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: Why Serve text */}
          <div className="lg:sticky lg:top-24">
            <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
              Why Serve?
            </p>
            <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(26px,3.2vw,36px)] pb-1">
              You were made for a purpose.
            </h2>

            <p className="text-subtle text-[15.5px] leading-[1.5] pb-3">
              Every member of Citadel Fellowship has a place to belong and a
              part to play. Serving isn't just about filling a role, it's
              about growing in your gifting while helping others encounter
              God. Whether you're behind the scenes or up front, there's a
              team waiting for you.
            </p>
            <p className="text-ink/70 italic text-[14.5px] leading-[1.6] border-l-[3px] border-brand pl-5 mb-6">
              "For we are His workmanship, created in Christ Jesus for good
              works, which God prepared beforehand that we should walk in
              them."
              <span className="block text-brand text-[12px] font-semibold mt-2 not-italic">
                — Ephesians 2:10 NKJV
              </span>
            </p>

            <div className="flex flex-col gap-5 pt-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-[15px]">No experience needed</p>
                  <p className="text-subtle text-[14px] mt-0.5">We'll train and support you every step of the way.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-[15px]">Serve alongside family</p>
                  <p className="text-subtle text-[14px] mt-0.5">Build real relationships while you serve together.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-[15px]">Grow in your gifting</p>
                  <p className="text-subtle text-[14px] mt-0.5">Discover and develop what God has placed in you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface border border-line rounded-2xl p-7 md:p-9 shadow-soft">
            <h3 className="font-display font-bold text-ink text-[22px] mb-2 text-center">
              Get Involved
            </h3>
            <p className="text-subtle text-[14px] pb-8 text-center">
              Fill this out and our team will reach out to help you get started.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center" style={{ margin: "0 auto 20px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="font-display font-semibold text-ink text-[20px] mb-2">
                  Thank you for stepping up!
                </p>
                <p className="text-subtle text-[15px]">
                  We'll be in touch soon to help you get connected.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-ink text-[13px] font-semibold pb-1.5 block">First Name</label>
                      <input type="text" name="firstName" required placeholder="John" className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-[14px] outline-none focus:border-brand transition-all" />
                    </div>
                    <div>
                      <label className="text-ink text-[13px] font-semibold pb-1.5 block">Last Name</label>
                      <input type="text" name="lastName" required placeholder="Smith" className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-[14px] outline-none focus:border-brand transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-ink text-[13px] font-semibold pb-1.5 block">Email Address</label>
                    <input type="email" name="email" required placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-[14px] outline-none focus:border-brand transition-all" />
                  </div>
                  <div>
                    <label className="text-ink text-[13px] font-semibold pb-1.5 block">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="+1 234 567 890" className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-[14px] outline-none focus:border-brand transition-all" />
                  </div>

                  <div>
                    <label className="text-ink text-[13px] font-semibold pb-1.5 block">
                      Which department(s) interest you?
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {DEPARTMENTS.map((dept) => (
                        <button
                          type="button"
                          key={dept}
                          onClick={() => toggleDept(dept)}
                          className="text-left px-3.5 py-2.5 rounded-lg border text-[13px] font-medium transition-all"
                          style={{
                            borderColor: selected.includes(dept) ? "#c8102e" : "#e3e8f0",
                            background: selected.includes(dept) ? "rgba(200,16,46,0.08)" : "#ffffff",
                            color: selected.includes(dept) ? "#c8102e" : "#0c1d3d",
                          }}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-ink text-[13px] font-semibold pb-1.5 block">
                      Anything else you'd like us to know? <span className="text-subtle font-normal">(optional)</span>
                    </label>
                    <textarea name="message" rows={3} placeholder="Skills, availability, questions..." className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-[14px] outline-none focus:border-brand transition-all resize-none" />
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors mt-1">
                    Sign Up to Serve
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Photo slideshow — below */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase mb-3">
            Life At Citadel
          </p>
          <h2 className="font-display font-bold text-ink leading-[1.15] tracking-tight text-[clamp(24px,3vw,34px)] mb-10">
            See what serving looks like.
          </h2>
          <CardSlideshow />
        </div>
      </section>
    </div>
  );
}