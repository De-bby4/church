export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink"
    >
      {/* Background placeholder — replace with a real photo later */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(160deg, #0a2622 0%, #103832 45%, #0d2c27 100%)",
          }}
        />
        {/* subtle texture so the placeholder doesn't feel flat */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 35%)",
          }}
        />
        {/* dark gradient overlay so text stays readable, same as reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 pb-16 md:pb-20 pt-32 max-w-[1200px] mx-auto w-full animate-fadeUp">
        <h1 className="font-display font-bold text-white leading-[1.05] tracking-tight text-[clamp(40px,7vw,70px)] max-w-[820px]">
          Making Jesus Known
        </h1>
         <p className="text-white/70 text-[13px] md:text-[16px] leading-[1.75] max-w-[750px] pt-5  ">
          At Citadel Fellowship,
          we grow in our relationship with Him and with each other, helping
          every person discover their purpose in God's kingdom. We'd be
          honored to walk with you as you get connected and become part of
          our church family.
        </p>

        <div className="flex flex-wrap items-center gap-3.5 pt-5">
          <a
           href="https://youtube.com/@citadelfellowship?si=czkvIDlUt3l9rw8T"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-ink font-semibold text-[15px] hover:bg-brand-light transition-colors"
>
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M8 5v14l11-7z" />
  </svg>
  Watch Live
</a>
          <a
            href="#links"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/35 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/60 transition-all"
          >
            Quick Links
          </a>
        </div>
      </div>

      {/* Floating pill, bottom-right — mirrors reference's "Next Steps" bubble */}
     
    </section>
  );
}