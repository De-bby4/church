import { useState } from "react";
import plan from "../assets/welcome.jpg";

export default function NewHerePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch("https://formspree.io/f/xojoajek", {
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
    <div className="pt-20 bg-ink">
      {/* Page title banner */}
      
        <section className="relative py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden">
          <img src={plan} alt="" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: "center 30%"}} />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="relative z-10">
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
          Welcome Home
        </h1>

<p className="text-white/75 text-[15px] italic mt-4">
  Welcome one another as Christ has welcomed you.
</p>

<p className="text-brand-light text-[13px] mt-2">
  Romans 15:7
</p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28 px-6 md:px-10">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: welcome text */}
         <div className="lg:sticky lg:top-24">
  <h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(28px,3.5vw,40px)] pb-4">
    We're glad you're here.
  </h2>    <p className="text-subtle text-[16px] leading-[1.5] mb-8">
              God has a purpose for your life, and we're honored to be part of
              your journey. Whether you're exploring faith for the first time
              or looking for a new church home, there's a place for you at
              Citadel Fellowship.
            </p>
            <p className="text-subtle text-[16px] leading-[1.5] mb-8">
              Fill out the form and we'll reach out to welcome you personally,
              answer any questions, and help you get connected.
            </p>

            {/* What to expect */}
            <div className="flex flex-col gap-5 pt-5">
              <div className="flex items-start gap-4 ">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-[15px]">Warm & welcoming</p>
                  <p className="text-subtle text-[14px] mt-0.5">Come as you are — no dress code, no pressure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-[15px]">Children's Church</p>
                  <p className="text-subtle text-[14px] mt-0.5">Kids enjoy their own program every Sunday while you worship.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-[15px]">Three weekly gatherings</p>
                  <p className="text-subtle text-[14px] mt-0.5">Sunday (in person), Wednesday (online), and Prayerville (2nd Saturday monthly).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: sign-up form */}
          <div className="bg-white border border-line rounded-2xl p-7 md:p-9 shadow-soft" style={{ position: "sticky", top: "6rem" }}>
            <h3 className="font-display font-bold text-ink text-[25px] mb-2 text-center">
              Newcomer Sign-Up
            </h3>
            <p className="text-subtle text-[14px] pb-8 text-center">
              Let us get to know you — we'd love to connect with you.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center" style={{ margin: "0 auto 20px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="font-display font-semibold text-ink text-[20px] mb-2">
                  Welcome to the family!
                </p>
                <p className="text-subtle text-[15px]">
                  We'll be in touch soon. See you at service!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-ink text-[13px] font-semibold mb-1.5 block">First Name</label>
                      <input type="text" name="firstName" required placeholder="John" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                    </div>
                    <div>
                      <label className="text-ink text-[13px] font-semibold mb-1.5 block">Last Name</label>
                      <input type="text" name="lastName" required placeholder="Smith" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-ink text-[13px] font-semibold mb-1.5 block">Gender</label>
                    <select name="gender" required defaultValue="" className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-line bg-surface text-ink text-sm md:text-[14px] outline-none focus:border-brand transition-all appearance-none">
                      <option value="" disabled>Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-ink text-[13px] font-semibold mb-1.5 block">Email Address</label>
                    <input type="email" name="email" required placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                  </div>
                  <div>
                    <label className="text-ink text-[13px] font-semibold mb-1.5 block">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="+1 234 567 890" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                  </div>

                  {/* Home Address */}
                  <div>
                    <label className="text-ink text-[13px] font-semibold mb-1.5 block">Street Address</label>
                    <input type="text" name="street" required placeholder="123 Main Street" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-ink text-[13px] font-semibold mb-1.5 block">City</label>
                      <input type="text" name="city" required placeholder="Guelph" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                    </div>
                   <div>
  <label className="text-ink text-[13px] font-semibold mb-1.5 block">Province</label>
  <select name="province" required defaultValue="" className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-line bg-surface text-ink text-sm md:text-[14px] outline-none focus:border-brand transition-all appearance-none">
    <option value="" disabled>Select</option>
    <option value="Alberta">Alberta</option>
    <option value="British Columbia">British Columbia</option>
    <option value="Manitoba">Manitoba</option>
    <option value="New Brunswick">New Brunswick</option>
    <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
    <option value="Nova Scotia">Nova Scotia</option>
    <option value="Ontario">Ontario</option>
    <option value="Prince Edward Island">Prince Edward Island</option>
    <option value="Quebec">Quebec</option>
    <option value="Saskatchewan">Saskatchewan</option>
    <option value="Northwest Territories">Northwest Territories</option>
    <option value="Nunavut">Nunavut</option>
    <option value="Yukon">Yukon</option>
  </select>
</div>
                  </div>
                  <div>
                    <label className="text-ink text-[13px] font-semibold mb-1.5 block">Postal Code</label>
                    <input type="text" name="postalCode" required placeholder="N1G 1T3" className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-[14px] outline-none focus:border-brand transition-all" />
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors mt-1">
                    Sign Up
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}