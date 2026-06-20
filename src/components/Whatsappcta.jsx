export default function WhatsAppCta() {
  return (
    <section className="bg-surface py-16 md:py-20 px-6 md:px-10">
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>

        <h3 className="font-display font-bold text-ink text-[35px] md:text-[40px] tracking-tight mb-2">
          Join our WhatsApp community
        </h3>
        <p className="text-subtle text-[15px] leading-[1.7] pb-8">
          Stay connected with the Citadel family — get updates on services,
          events, prayer requests, and encouragements throughout the week.
        </p>

        <a
          href="https://chat.whatsapp.com/DMPOPGGdgYQ80mcIx7kfHX"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-[15px] hover:bg-[#1fb855] transition-colors"
        >
          Join Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}