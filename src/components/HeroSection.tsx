import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080808]">
      {/* Video background — drop your reel file into /public/hero-reel.mp4 to activate */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        autoPlay
        loop
        muted
        playsInline
        src="/hero-reel.mp4"
      />

      {/* Layered overlays for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />

      {/* Thin accent line — right edge */}
      <div className="absolute top-0 right-0 w-px h-full bg-primary/50" />

      {/* Main content — pinned to bottom */}
      <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-[1600px] mx-auto w-full">
          <div
            className={`transition-all duration-700 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-label text-primary mb-5 tracking-widest text-xs">
              משרד פרסום מוביל · 26 שנות ניסיון · 50+ עובדים
            </p>
          </div>

          <h1
            className={`text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] font-black text-white font-display tracking-tight transition-all duration-700 delay-150 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            ציבלין גרופ.
            <br />
            <span className="text-primary">אדריכלות</span>
            <br />
            של השפעה_
          </h1>

          <div
            className={`mt-10 flex items-center gap-8 transition-all duration-700 delay-300 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#about"
              className="inline-block border border-white/30 text-white text-label text-xs px-8 py-4 hover:bg-primary hover:border-primary power-ease transition-all active:scale-[0.97]"
            >
              גלו עוד
            </a>
            <a
              href="#contact"
              className="text-label text-xs text-white/40 hover:text-white power-ease transition-colors flex items-center gap-2"
            >
              <span>צרו קשר</span>
              <span className="text-primary">←</span>
            </a>
          </div>

          {/* Stats strip */}
          <div
            className={`mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg transition-all duration-700 delay-500 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { n: "26", l: "שנות ניסיון" },
              { n: "50+", l: "עובדים" },
              { n: "75+", l: "לקוחות" },
            ].map((s) => (
              <div key={s.l}>
                <span className="text-display text-3xl md:text-4xl text-primary">{s.n}</span>
                <p className="text-xs text-white/40 mt-1 text-label">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <div className="w-px h-10 bg-white animate-pulse" />
      </div>
    </section>
  );
}
