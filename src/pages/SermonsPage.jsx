import sermonImg from "../assets/sermons.jpg";

export default function SermonsPage() {
  return (
    <div>
      {/* Page title banner */}
      <section className="bg-ink py-24 md:py-36 px-6 md:px-10 text-center overflow-hidden relative">
       <img src={sermonImg} alt="" className="absolute inset-0 w-full h-full object-cover"  style={{ objectPosition: "center 20%" }} />
          <div className="absolute inset-0 bg-ink/80" />
          <div className="relative z-10">
        <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(34px,5vw,52px)]">
          Sermons
        </h1>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p className="text-subtle text-[16px] leading-[1.8]">
    Every message, every service — watch, re-watch, or catch up anytime.
  </p>
  </div>
        </div>
      </section>

      <section className=" flex items-center justify-center px-6 py-32 md:py-40">
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center" style={{ margin: "0 auto 24px" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-ink text-[28px] md:text-[34px] tracking-tight mb-3">
            Coming Soon
          </h2>
          <p className="text-subtle text-[16px] leading-[1.5] pb-8">
            We're working on bringing all our sermons right here.
            In the meantime, catch every message on our YouTube channel.
          </p>
          <a
            href="https://youtube.com/@citadelfellowship?si=czkvIDlUt3l9rw8T"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}