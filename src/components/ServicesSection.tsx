import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { title: "אסטרטגיה", desc: "בניית תכניות שיווק ומיתוג מותאמות אישית לכל לקוח" },
  { title: "רכש מדיה", desc: "ניהול ורכישת מדיה בכל הפלטפורמות עם מקסום ROI" },
  { title: "קריאייטיב ועיצוב", desc: "עיצוב ויזואלי, מיתוג וזהות גרפית מנצחת" },
  { title: "סושיאל מדיה", desc: "ניהול נוכחות דיגיטלית ברשתות עם תוכן שמושך תשומת לב" },
  { title: "PPC", desc: "קמפיינים ממומנים בגוגל ובכל פלטפורמות הדיגיטל" },
  { title: "בקרת מדיה", desc: "מעקב וניתוח ביצועי קמפיינים בזמן אמת" },
  { title: "סקרי דעת קהל", desc: "מחקר שוק וניתוח תובנות צרכנים מעמיק" },
  { title: "הפקות", desc: "הפקות וידאו, אירועים ותוכן מותאם לכל פלטפורמה" },
];

function TiltServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; desc: string };
  index: number;
  isVisible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s ease";
    card.style.zIndex = "2";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    card.style.zIndex = "1";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative bg-surface p-8 hover:bg-foreground power-ease transition-colors overflow-hidden ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        animationDelay: `${200 + index * 70}ms`,
        willChange: "transform",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Hover shimmer line */}
      <div className="absolute top-0 right-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 power-ease" />

      <span className="text-display text-3xl text-border/70 group-hover:text-background/15 power-ease transition-colors block mb-5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-subhead text-lg text-foreground group-hover:text-background power-ease transition-colors mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-background/55 power-ease transition-colors">
        {service.desc}
      </p>

      {/* Arrow that appears on hover */}
      <span className="absolute bottom-6 left-6 text-background/0 group-hover:text-background/40 text-xs text-label tracking-widest transition-all duration-300 power-ease translate-x-2 group-hover:translate-x-0">
        ←
      </span>
    </div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="services"
      ref={ref}
      className="relative z-10 bg-surface py-28 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-px bg-primary"
                style={{
                  width: isVisible ? "36px" : "0px",
                  transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: "50ms",
                }}
              />
              <p
                className={`text-label text-xs text-primary tracking-widest uppercase ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                One Stop Shop
              </p>
            </div>
            <h2
              className={`text-heading text-3xl md:text-5xl text-foreground ${
                isVisible ? "animate-mask-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              מה אנחנו יודעים לעשות
            </h2>
          </div>
          <span
            className={`text-display text-6xl md:text-9xl text-border/40 hidden md:block select-none ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms", lineHeight: 1 }}
          >
            08
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border" style={{ perspective: "1000px" }}>
          {services.map((service, i) => (
            <TiltServiceCard
              key={service.title}
              service={service}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
