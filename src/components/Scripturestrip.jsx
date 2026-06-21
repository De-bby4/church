export default function ScriptureStrip() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10" style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #0c1d3d 50%, #162d5a 100%)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div className="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center" style={{ margin: "0 auto 24px" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M4 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z" />
            <path d="M16 3h2a2 2 0 0 1 2 2v14l-6-4" />
          </svg>
        </div>
        <p className="font-display text-white text-[20px] md:text-[26px] leading-[1.5] font-medium italic mb-6">
          "For I know the plans I have for you, declares the Lord, plans to
          prosper you and not to harm you, plans to give you hope and a future."
        </p>
        <p className="text-white/50 text-[14px] font-semibold tracking-wide">
          — Jeremiah 29:11 (NIV)
        </p>
      </div>
    </section>
  );
}