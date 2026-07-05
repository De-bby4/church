import { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

const YT_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_HANDLE = "citadelfellowship";

const SERVICES = [
  {
    day: "WEDNESDAY",
    time: "7PM",
    detail: "On Microsoft Teams",
    link: "https://bit.ly/4lQtFbJ",
    linkLabel: "bit.ly/4lQtFbJ",
  },
  {
    day: "SUNDAY",
    time: "4PM",
    detail: "College Heights Secondary School, 371 College Ave W, Guelph",
  },
  {
    day: "PRAVIRVILLE",
    time: "7AM – 12NOON",
    detail: "2nd Saturday of the month · College Heights Secondary School, Guelph",
  },
];

export default function Hero() {
  const [loading, setLoading] = useState(false);

  const handleWatchLive = async () => {
    setLoading(true);
    try {
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${YT_API_KEY}`
      );
      const channelData = await channelRes.json();
      const channelId = channelData.items?.[0]?.id;

      if (!channelId) {
        window.open(`https://youtube.com/@${CHANNEL_HANDLE}`, "_blank");
        return;
      }

      const liveRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${YT_API_KEY}`
      );
      const liveData = await liveRes.json();
      const liveVideo = liveData.items?.[0];

      if (liveVideo) {
        window.open(`https://www.youtube.com/watch?v=${liveVideo.id.videoId}`, "_blank");
        return;
      }

      const recentRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${YT_API_KEY}`
      );
      const recentData = await recentRes.json();
      const lastBroadcast = recentData.items?.[0];

      if (lastBroadcast) {
        window.open(`https://www.youtube.com/watch?v=${lastBroadcast.id.videoId}`, "_blank");
      } else {
        window.open(`https://youtube.com/@${CHANNEL_HANDLE}`, "_blank");
      }
    } catch (err) {
      window.open(`https://youtube.com/@${CHANNEL_HANDLE}`, "_blank");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <section
        id="top"
        className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink"
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover object-[center_1%]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,10,62,0.85), rgba(12,29,61,0.4), rgba(22,45,90,0.15))" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-10 pb-10 md:pb-20 pt-32 max-w-[1200px] mx-auto w-full animate-fadeUp">
          <h1 className="font-display font-bold text-white leading-[1.05] tracking-tight text-[clamp(40px,7vw,70px)] max-w-[820px]">
            THE DWELLING PLACE
          </h1>
          <p className="text-white/70 text-[13px] md:text-[16px] leading-[1.75] max-w-[750px] pt-1">
            Welcome to Citadel Fellowship. The name Citadel is deeply significant as it reflects the divine function and mandate entrusted to the ministry, to stand as a spiritual fortress and stronghold in the land. The name embodies the purpose for which God has established this ministry.
            <br />We are glad you are here. May you find purpose as you journey with us in Jesus Name.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-7">
            <button
              onClick={handleWatchLive}
              disabled={loading}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-ink font-semibold text-[15px] hover:bg-brand-light transition-colors disabled:opacity-70"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M8 5v14l11-7z" />
              </svg>
              {loading ? "Checking..." : "Watch Live"}
            </button>
            <Link
              to="/#quick-links"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/35 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Quick Links
            </Link>
          </div>

          {/* Service times — mobile only */}
          <div className="md:hidden mt-8 -mx-6 px-6 pt-5">
            <p className="text-brand-light text-[11px] font-bold tracking-[2px] uppercase mb-3">
              Join Us This Week
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth scrollbar-hide">
              {SERVICES.map((s) => (
                <div
                  key={s.day}
                  className="flex-shrink-0 snap-start bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4"
                  style={{ width: "78%" }}
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <p className="text-white text-[14px] font-display font-semibold">{s.day}</p>
                    <span className="text-brand-light text-[11px] font-bold">{s.time}</span>
                  </div>
                  <p className="text-white/55 text-[12px] leading-[1.5]">
                    {s.detail}
                    {s.link && (
                      <>
                        {" "}
                        —{" "}
                        <a href={s.link} target="_blank" rel="noreferrer" className="text-brand-light hover:underline">
                          {s.linkLabel}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service times card — desktop only, floating bottom-right */}
        <div className="hidden md:block absolute bottom-8 right-8 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6" style={{ maxWidth: "300px" }}>
          <p className="text-brand-light text-[11px] font-bold tracking-[2px] uppercase mb-4">
            Join Us This Week
          </p>
          <div className="flex flex-col gap-3.5">
            {SERVICES.map((s) => (
              <div key={s.day}>
                <p className="text-white text-[13px] font-semibold">
                  {s.day.toUpperCase()} - {s.time}
                </p>
                <p className="text-white/60 text-[12px] mt-0.5">
                  {s.detail}
                  {s.link && (
                    <>
                      :{" "}
                      <a href={s.link} target="_blank" rel="noreferrer" className="text-brand-light hover:underline">
                        {s.linkLabel}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}