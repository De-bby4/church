export default function SermonsPage() {
  return (
    <div className="pt-20">
      <section className="bg-ink py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-brand-light text-[12px] font-bold tracking-[3px] uppercase mb-3">
            Sermons
          </p>
          <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(32px,4vw,48px)] mb-4">
            Catch up on the Word.
          </h1>
          <p className="text-white/60 text-[16px] leading-[1.8] max-w-[560px] mx-auto">
            Every message goes live during our Sunday service and stays right
            here afterward — so you can watch, re-watch, or catch up anytime.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">

          {/* Latest video / livestream */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-line mb-10">
            <div className="aspect-video w-full">
              {/* This embeds the channel's current livestream when live,
                  and automatically falls back to their most recent past
                  broadcast when offline — perfect for a weekly sermon flow. */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=citadelfellowship"
                title="Citadel Fellowship — Latest Service"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-center text-subtle text-[14px] mb-10">
            Don't see the latest message above?{" "}
            <a
              href="https://youtube.com/@citadelfellowship?si=czkvIDlUt3l9rw8T"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Watch it directly on YouTube
            </a>
            .
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://youtube.com/@citadelfellowship?si=czkvIDlUt3l9rw8T"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-brand text-white font-semibold text-[15px] hover:bg-brand-dark transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" />
              </svg>
              View All Sermons on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}