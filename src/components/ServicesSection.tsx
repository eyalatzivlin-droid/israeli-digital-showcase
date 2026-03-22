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

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="services"
      ref={ref}
      className="relative z-10 bg-surface py-28 md:py-36 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <div>
            <p
              className={`text-label text-xs text-primary mb-3 tracking-widest ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              One Stop Shop
            </p>
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
            className={`text-display text-6xl md:text-8xl text-border hidden md:block ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            08
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-surface p-8 hover:bg-foreground power-ease transition-colors ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 70}ms` }}
            >
              <span className="text-display text-3xl text-border group-hover:text-background/20 power-ease transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-subhead text-lg text-foreground mt-5 mb-2 group-hover:text-background power-ease transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-background/60 power-ease transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
