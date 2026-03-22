export default function Footer() {
  return (
    <footer className="relative z-10 bg-foreground py-16 md:py-20 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-background leading-[0.88]">
            ציבלין גרופ
          </h2>
          <div className="flex flex-col gap-2 text-sm text-background/40 md:text-right">
            <span>שדרות רוטשילד 45, תל אביב</span>
            <span dir="ltr">+972-3-555-1234</span>
            <a
              href="mailto:info@tzivelin.co.il"
              className="hover:text-background/70 power-ease transition-colors"
            >
              info@tzivelin.co.il
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-8 border-t border-background/10 text-xs text-background/30">
          <span>© {new Date().getFullYear()} ציבלין גרופ. כל הזכויות שמורות.</span>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/60 power-ease transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/60 power-ease transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
