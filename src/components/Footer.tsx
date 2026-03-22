export default function Footer() {
  return (
    <footer className="relative z-10 bg-primary py-20 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-display text-6xl md:text-8xl lg:text-[10rem] text-primary-foreground leading-[0.9]">
          צבילין גרופ
        </h2>
        <div className="flex flex-wrap gap-8 mt-12 text-sm text-primary-foreground/70">
          <span>© {new Date().getFullYear()} צבילין גרופ. כל הזכויות שמורות.</span>
          <span>שדרות רוטשילד 45, תל אביב</span>
          <span dir="ltr">+972-3-555-1234</span>
        </div>
      </div>
    </footer>
  );
}
