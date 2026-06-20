import { useState } from "react";
import visit from "../assets/plan.png";

const SERVICES = [
  { day: "Wednesday", time: "7:00 PM – 8:30 PM", label: "Midweek Service", mode: "Online" },
  { day: "Sunday",    time: "4:00 PM – 6:00 PM",  label: "Sunday Service",  mode: "In Person" },
];

export default function VisitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Something went wrong — please try again.");
    }
  };

  return (
    <div>
      <section className="relative py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden">
  <img src={visit} alt="" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-ink/80" />
  <div className="relative z-10">
    {/* <p className="text-white/50 text-[12px] font-medium mb-3">
      Home <span className="mx-1.5">/</span> <span className="text-white/80">Plan A Visit</span>
    </p> */}
    <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
      Plan A Visit
    </h1>
  </div>
</section>

      <section className="bg-surface py-20 md:py-28 px-6 md:px-10">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-start">

          <div>
            <h1 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(32px,4vw,48px)] mb-5">
              We'd love to have you this week.
            </h1>
            <p className="text-subtle text-[16px] leading-[1.8] pb-5" style={{ maxWidth: "460px" }}>
              No matter where you are in your faith journey, there's a seat for
              you here. Come as you are — we keep things warm, simple, and easy
              to follow.
            </p>

            <div className="flex flex-col gap-3.5 pb-10">
              {SERVICES.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between bg-white border border-line rounded-xl px-5 py-4 shadow-soft"
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <p className="font-display font-semibold text-ink text-[15px]">
                        {s.label}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-brand/10 text-brand">
                        {s.mode}
                      </span>
                    </div>
                    <p className="text-subtle text-[13px] mt-1">{s.day}</p>
                  </div>
                  <span className="font-display font-bold text-brand text-[16px] text-right">
                    {s.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white border border-line rounded-2xl p-7 shadow-soft">
              <h3 className="font-display font-bold text-ink text-[20px] mb-2">
                Let us know you're coming
              </h3>
              <p className="text-subtle text-[14px] mb-7">
                Fill this out and we'll be ready to welcome you.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center" style={{ margin: "0 auto 16px" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="font-display font-semibold text-ink text-[18px] mb-1">
                    We got it!
                  </p>
                  <p className="text-subtle text-[14px]">
                    We're looking forward to meeting you. See you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-ink text-[13px] font-semibold mb-1.5 block">Your Name</label>
                      <input type="text" name="name" required placeholder="e.g. John Smith" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                    </div>
                    <div>
                      <label className="text-ink text-[13px] font-semibold mb-1.5 block">Email or Phone</label>
                      <input type="text" name="contact" required placeholder="you@email.com or +1 234 567 890" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                    </div>
                    <div>
                      <label className="text-ink text-[13px] font-semibold mb-1.5 block">Which service?</label>
                      <select name="service" required defaultValue="" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all appearance-none">
                        <option value="" disabled>Pick one</option>
                        <option value="Sunday — In Person (4:00 PM)">Sunday — In Person (4:00 PM)</option>
                        <option value="Wednesday — Online (7:00 PM)">Wednesday — Online (7:00 PM)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-ink text-[13px] font-semibold mb-1.5 block">
                        Anything we should know? <span className="text-subtle font-normal">(optional)</span>
                      </label>
                      <textarea name="message" rows={3} placeholder="First time? Have kids? Need directions? Let us know." className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all resize-none" />
                    </div>
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors mt-2">
                      Let Us Know You're Coming
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="bg-ink rounded-2xl overflow-hidden shadow-lift" style={{ position: "sticky", top: "6rem" }}>
            <div className="relative h-[280px] md:h-[320px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0c1d3d 0%, #162d5a 100%)" }}>
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(200,16,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="relative z-10 w-12 h-12 rounded-full bg-brand flex items-center justify-center shadow-lift">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </div>
            </div>

            <div className="p-7 md:p-8 text-white">
              <h3 className="font-display font-semibold text-[18px] mb-1">Citadel Fellowship</h3>
              <p className="text-white/60 text-[14px] leading-relaxed mb-6">
                College Heights Secondary School<br />
                371 College Ave W, Guelph, ON N1G 1T3
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ff5a6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <div>
                    <p className="text-white text-[14px] font-medium">Sunday service is in person</p>
                    <p className="text-white/50 text-[13px] mt-0.5">Join us at College Heights Secondary School, 4-6 PM.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ff5a6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  <div>
                    <p className="text-white text-[14px] font-medium">Wednesday service is online</p>
                    <p className="text-white/50 text-[13px] mt-0.5">Join from anywhere, 7-8:30 PM.</p>
                  </div>
                </div>
              </div>
              <a href="https://maps.google.com/?q=College+Heights+Secondary+School,371+College+Ave+W,+Guelph,+ON+N1G+1T3" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-7 text-brand-light text-[14px] font-semibold hover:text-white transition-colors">
                Get Directions
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}