import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video background placeholder — dark cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-muted via-background to-background" />
      
      {/* Decorative accent line */}
      <div className="absolute top-0 right-0 w-1 h-full bg-primary opacity-60" />

      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-[1600px] mx-auto">
        <div
          className={`transition-all duration-1000 power-ease ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <p className="text-label text-primary mb-6">משרד פרסום מוביל · 26 שנות ניסיון</p>
        </div>
        <h1
          className={`text-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-foreground leading-[0.9] transition-all duration-1000 delay-200 power-ease ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ mixBlendMode: "difference" }}
        >
          צבילין גרופ.
          <br />
          <span className="text-primary">אדריכלות</span>
          <br />
          של השפעה_
        </h1>
        <div
          className={`mt-12 transition-all duration-1000 delay-500 power-ease ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <a
            href="#about"
            className="inline-block border-2 border-foreground text-foreground text-label px-8 py-4 hover:bg-primary hover:border-primary hover:text-primary-foreground power-ease transition-all active:scale-[0.97]"
          >
            גלו עוד
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-foreground/30 animate-pulse" />
      </div>
    </section>
  );
}
