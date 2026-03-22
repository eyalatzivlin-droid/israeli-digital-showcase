import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { title: "אסטרטגיה", desc: "בניית תכניות שיווק ומיתוג מותאמות אישית" },
  { title: "רכש מדיה", desc: "ניהול ורכישת מדיה בכל הפלטפורמות" },
  { title: "קריאייטיב ועיצוב", desc: "עיצוב ויזואלי, מיתוג וזהות גרפית" },
  { title: "סושיאל מדיה", desc: "ניהול נוכחות דיגיטלית ברשתות החברתיות" },
  { title: "PPC", desc: "קמפיינים ממומנים בגוגל ובפלטפורמות נוספות" },
  { title: "בקרת מדיה", desc: "מעקב וניתוח ביצועי קמפיינים" },
  { title: "סקרי דעת קהל", desc: "מחקר שוק וניתוח תובנות צרכנים" },
  { title: "הפקות", desc: "הפקות וידאו, אירועים ותוכן מותאם" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="services"
      ref={ref}
      className="relative z-10 bg-surface py-32 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        <p
          className={`text-label text-primary mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          One Stop Shop
        </p>
        <h2
          className={`text-heading text-3xl md:text-5xl text-foreground mb-16 ${
            isVisible ? "animate-mask-reveal" : "opacity-0"
          }`}
          style={{ animationDelay: "100ms" }}
        >
          מה אנחנו יודעים לעשות
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-surface p-8 group hover:bg-primary power-ease transition-colors ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <span className="text-display text-4xl text-border group-hover:text-primary-foreground/20 power-ease transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-subhead text-xl text-foreground mt-4 mb-2 group-hover:text-primary-foreground power-ease transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 power-ease transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
