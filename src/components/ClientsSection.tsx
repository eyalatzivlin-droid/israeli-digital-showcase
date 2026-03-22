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

// Duplicate for seamless infinite marquee loop
const marqueeItems = [...clients, ...clients];

export default function ClientsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="clients"
      ref={ref}
      className="relative z-10 bg-surface py-28 md:py-36"
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-12">
        <div className="flex items-end gap-6">
          <h2
            className={`text-heading text-3xl md:text-5xl text-foreground ${
              isVisible ? "animate-mask-reveal" : "opacity-0"
            }`}
          >
            שותפים לדרך
          </h2>
          <p
            className={`text-label text-xs text-muted-foreground mb-1 hidden md:block ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            75+ לקוחות פעילים
          </p>
        </div>
      </div>

      {/* Scrolling logo strip */}
      <div
        className={`overflow-hidden border-y border-border transition-opacity duration-700 ${
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
              <span className="text-subhead text-base md:text-lg text-foreground/70 whitespace-nowrap select-none">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
