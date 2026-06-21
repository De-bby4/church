import giveImg from "../assets/services.jpg";
 
 export default function GivingPage() {
  return (
    <div className="pt-20 bg-ink">
      {/* Page title banner */}
      <section className="relative py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden">
              <img src={giveImg} alt="" className="absolute inset-0 w-full h-full object-cover"  style={{ objectPosition: "center 20%" }} />
                        <div className="absolute inset-0 bg-ink/80" />
                        <div className="relative z-10">
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
          Giving
        </h1>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p className="text-subtle text-[16px] leading-[1.5]">
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." <br />— 2 Corinthians 9:7
          </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-tight text-[clamp(26px,3.5vw,40px)] mb-5">
            Your generosity makes a difference.
          </h2>
          <p className="text-subtle text-[16px] leading-[1.5]">
            Every gift helps us reach more people, serve our community, and
            build a place where lives are transformed. Thank you for
            partnering with us in what God is doing through Citadel Fellowship.
          </p>
        </div>
      </section>

      {/* Giving methods */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-10">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p className="text-brand text-[12px] font-bold tracking-[3px] uppercase pb-1 text-center">
            Ways To Give
          </p>
          <h3 className="font-display font-bold text-ink text-[clamp(24px,3vw,34px)] tracking-tight text-center pb-7">
            Choose the method that works best for you.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* E-Transfer */}
            <div className="bg-white rounded-2xl border border-line p-7 shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center" style={{ margin: "0 auto 20px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-ink text-[18px] mb-2">
                Interac E-Transfer
              </h4>
              <p className="text-subtle text-[14px] leading-[1.7] pb-5">
                Send an e-transfer through your bank app to:
              </p>
              <div className="bg-surface rounded-xl px-4 py-3.5 ">
                <p className="font-display font-semibold text-ink text-[15px] break-all ">
                  cffinance@citadelfellowship.com
                </p>
              </div>
              <p className="text-subtle text-[12px]  pt-2.8 ">Via any Canadian bank app</p>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white rounded-2xl border border-line p-7 shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center" style={{ margin: "0 auto 20px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-ink text-[18px] mb-2">
                Bank Transfer (RBC)
              </h4>
              <p className="text-subtle text-[14px] leading-[1.7] pb-5">
                Direct deposit to our RBC account:
              </p>
              <div className="bg-surface rounded-xl px-4 py-4 text-left flex flex-col gap-2.5">
                <div className="flex justify-between">
                  <span className="text-subtle text-[13px]">Account Name</span>
                  <span className="font-semibold text-ink text-[13px]">Citadel Fellowship</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle text-[13px]">Account #</span>
                  <span className="font-semibold text-ink text-[13px]">1008432</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle text-[13px]">Institution #</span>
                  <span className="font-semibold text-ink text-[13px]">003</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle text-[13px]">Transit #</span>
                  <span className="font-semibold text-ink text-[13px]">01604</span>
                </div>
              </div>
            </div>

            {/* PayPal */}
            <div className="bg-white rounded-2xl border border-line p-7 shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center" style={{ margin: "0 auto 20px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-ink text-[18px] mb-2">
                PayPal
              </h4>
              <p className="text-subtle text-[14px] leading-[1.5] pb-5">
                Give securely through PayPal — no account needed.
              </p>
              <a
                href="https://paypal.com/paypalme/citadelfellowship"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
              >
                Give via PayPal
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom message */}
      <section className="bg-white py-14 md:py-16 px-6 md:px-10">
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <p className="text-subtle text-[15px] leading-[1.8]">
            If you have any questions about giving or need a tax receipt,
            please reach out to us at{" "}
            <a href="mailto:cffinance@citadelfellowship.com" className="text-brand font-semibold hover:underline">
              cffinance@citadelfellowship.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}