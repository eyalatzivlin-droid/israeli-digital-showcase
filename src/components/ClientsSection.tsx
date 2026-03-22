import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  "בנק לאומי",
  "סלקום",
  "שטראוס",
  "אל על",
  "פלאפון",
  "בזק",
  "הוט",
  "תנובה",
  "ויקטורי",
  "משרד הביטחון",
  "ישראכרט",
  "אמדוקס",
  "מכבי",
  "אגד",
  "סונול",
];

const marqueeItems = [...clients, ...clients, ...clients];

export default function ClientsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="clients"
      ref={ref}
      className="relative z-10 bg-surface py-28 md:py-40"
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-14">
        <div className="flex items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px bg-primary"
                style={{
                  width: isVisible ? "36px" : "0px",
                  transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
              <p
                className={`text-label text-xs text-primary tracking-widest uppercase transition-all duration-600 power-ease ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                שותפים לדרך
              </p>
            </div>
            <h2
              className={`text-heading text-3xl md:text-5xl text-foreground ${
                isVisible ? "animate-mask-reveal" : "opacity-0"
              }`}
            >
              הלקוחות שלנו
            </h2>
          </div>
          <p
            className={`text-label text-xs text-muted-foreground mb-1 hidden md:block transition-all duration-700 power-ease ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            75+ לקוחות פעילים
          </p>
        </div>
      </div>

      {/* Scrolling strip with fade edges */}
      <div
        className={`overflow-hidden border-y border-border marquee-fade transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <div className="marquee-track">
          {marqueeItems.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10 md:px-14 py-7 border-r border-border"
            >
              <span className="text-subhead text-base md:text-lg text-foreground/60 whitespace-nowrap select-none hover:text-primary transition-colors duration-300 power-ease">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second marquee — slower, reversed direction */}
      <div
        className={`overflow-hidden border-b border-border marquee-fade transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "450ms" }}
      >
        <div
          className="marquee-track"
          style={{ animationDirection: "reverse", animationDuration: "48s", opacity: 0.4 }}
        >
          {marqueeItems.map((client, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-10 md:px-14 py-4 border-r border-border"
            >
              <span className="text-label text-xs text-foreground/40 whitespace-nowrap select-none tracking-widest">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
