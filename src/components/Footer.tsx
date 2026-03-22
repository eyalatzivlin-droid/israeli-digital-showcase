export default function Footer() {
  return (
    <footer className="relative z-10 bg-foreground py-20 md:py-28 px-8 md:px-16 overflow-hidden">

      {/* Large decorative number */}
      <div
        className="absolute bottom-0 left-0 text-display select-none pointer-events-none"
        style={{
          fontSize: "clamp(8rem, 20vw, 22rem)",
          lineHeight: 0.8,
          color: "rgba(255,255,255,0.025)",
          letterSpacing: "-0.04em",
          fontWeight: 900,
        }}
      >
        26
      </div>

      <div className="max-w-[1600px] mx-auto relative">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-12 border-b border-background/10">
          {/* Logo */}
          <div>
            <p className="text-label text-[0.7rem] text-background/30 tracking-widest mb-4 uppercase">
              קבוצת תקשורת מובילה
            </p>
            <h2
              className="text-display leading-[0.88] text-background"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, hsl(12,95%,65%) 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
              }}
            >
              ציבלין גרופ
            </h2>
          </div>

          {/* Contact block */}
          <div className="flex flex-col gap-3 text-sm text-background/40 md:text-right">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/70 power-ease transition-colors underline-rtl"
            >
              שדרות רוטשילד 45, תל אביב
            </a>
            <a
              href="tel:+97235551234"
              dir="ltr"
              className="hover:text-background/70 power-ease transition-colors"
            >
              +972-3-555-1234
            </a>
            <a
              href="mailto:info@tzivelin.co.il"
              className="hover:text-background/70 power-ease transition-colors"
            >
              info@tzivelin.co.il
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 text-xs text-background/25">
          <span className="text-label tracking-wide">
            © {new Date().getFullYear()} ציבלין גרופ. כל הזכויות שמורות.
          </span>
          <div className="flex gap-8">
            {[
              { label: "Facebook", href: "https://www.facebook.com" },
              { label: "YouTube", href: "https://www.youtube.com" },
              { label: "LinkedIn", href: "https://www.linkedin.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background/60 power-ease transition-colors text-label tracking-wider"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
