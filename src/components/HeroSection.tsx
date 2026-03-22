import { useEffect, useState } from "react";
import ParticleField from "./ParticleField";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scanDone, setScanDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 180);
    const t2 = setTimeout(() => setScanDone(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080808] noise-overlay">

      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ zIndex: 1 }}
        autoPlay loop muted playsInline
        src="/hero-reel.mp4"
      />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-transparent" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 to-transparent" style={{ zIndex: 1 }} />

      {/* Particle constellation */}
      <ParticleField />

      {/* Cinematic scan line — fires once on load */}
      {!scanDone && (
        <div
          className="absolute right-0 left-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to left, transparent, rgba(255,255,255,0.18) 50%, transparent)",
            zIndex: 4,
            animation: "scanLine 1.6s ease-out forwards",
            animationDelay: "200ms",
          }}
        />
      )}

      {/* Thin accent line — right edge */}
      <div className="absolute top-0 right-0 w-px h-full bg-primary/40" style={{ zIndex: 5 }} />

      {/* Main content */}
      <div className="relative flex flex-col justify-end h-full px-8 md:px-16 pb-20 md:pb-28" style={{ zIndex: 10 }}>
        <div className="max-w-[1600px] mx-auto w-full">

          {/* Label line with growing rule */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className="h-px bg-primary/50"
              style={{
                width: loaded ? "48px" : "0px",
                transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: "300ms",
              }}
            />
            <p className="text-label text-primary tracking-widest text-[0.7rem] uppercase">
              משרד פרסום מוביל · 26 שנות ניסיון · 50+ עובדים
            </p>
          </div>

          {/* Main headline — staggered reveal */}
          <h1
            className={`text-[clamp(3.2rem,8.5vw,8.5rem)] leading-[0.88] font-black text-white font-display tracking-tight transition-all duration-700 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            ציבלין גרופ.
            <br />
            <span
              className="inline-block"
              style={{
                backgroundImage: "linear-gradient(135deg, hsl(12, 95%, 50%) 0%, hsl(28, 100%, 65%) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              אדריכלות
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 power-ease ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "280ms" }}
            >
              של השפעה_
            </span>
          </h1>

          {/* CTAs */}
          <div
            className={`mt-10 flex items-center gap-8 transition-all duration-700 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "420ms" }}
          >
            <a
              href="#about"
              className="group relative inline-block overflow-hidden border border-white/25 text-white text-label text-[0.75rem] px-8 py-4 hover:border-primary power-ease transition-all active:scale-[0.97]"
            >
              {/* Hover fill */}
              <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 power-ease" />
              <span className="relative">גלו עוד</span>
            </a>
            <a
              href="#contact"
              className="text-label text-[0.75rem] text-white/40 hover:text-white power-ease transition-colors flex items-center gap-2"
            >
              <span>צרו קשר</span>
              <span className="text-primary transition-transform group-hover:-translate-x-1">←</span>
            </a>
          </div>

          {/* Stats strip */}
          <div
            className={`mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg transition-all duration-700 power-ease ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "560ms" }}
          >
            {[
              { n: "26", l: "שנות ניסיון" },
              { n: "50+", l: "עובדים" },
              { n: "75+", l: "לקוחות" },
            ].map((s) => (
              <div key={s.l} className="group">
                <span
                  className="text-display text-3xl md:text-4xl block"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #ffffff 0%, hsl(12,95%,50%) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.n}
                </span>
                <p className="text-[0.68rem] text-white/35 mt-1 text-label tracking-widest">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700 ${
          loaded ? "opacity-40" : "opacity-0"
        }`}
        style={{ transitionDelay: "900ms", zIndex: 10 }}
      >
        <span className="text-white text-[0.6rem] text-label tracking-[0.2em] uppercase">גלול</span>
        <div className="w-px h-8 bg-white animate-float" />
      </div>
    </section>
  );
}
