import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    client: "קמפיין חורף 2024",
    company: "פאבליק",
    brief: "העלאת מודעות למותג בקרב קהל צעיר",
    solution: "סדרת תכנים ויראליים ברשתות החברתיות עם שיתופי פעולה של משפיענים מובילים",
    accent: "bg-foreground",
    tag: "Digital",
  },
  {
    client: "השקת מוצר חדש",
    company: "שואו",
    brief: "הפקת אירוע השקה ייחודי ובלתי נשכח",
    solution: "חוויה אינטראקטיבית ב-360 מעלות עם שידור חי לאלפי צופים ברחבי הארץ",
    accent: "bg-primary",
    tag: "Production",
  },
  {
    client: "מיתוג מחדש",
    company: "טווינס",
    brief: "רענון זהות ויזואלית למותג ותיק",
    solution: "שפה עיצובית חדשה שמכבדת את המורשת תוך פנייה לדור חדש של צרכנים",
    accent: "bg-foreground",
    tag: "Branding",
  },
  {
    client: "קמפיין דיגיטלי",
    company: "פאבליק",
    brief: "הגדלת לידים ב-40% תוך 3 חודשים",
    solution: "אסטרטגיית PPC רב-ערוצית עם דפי נחיתה מותאמים ומעקב קונברז׳ן מדויק",
    accent: "bg-primary",
    tag: "Performance",
  },
  {
    client: "קמפיין ברנד",
    company: "שואו",
    brief: "ביסוס עמדת מנהיגות קטגוריה",
    solution: "סדרת פרסומות TV ודיגיטל עם קריאייטיב חדשני שכבש את שיח המותגים",
    accent: "bg-foreground",
    tag: "Creative",
  },
];

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="cases"
      ref={ref}
      className="relative z-10 bg-background py-28 md:py-40"
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-14">
        <div className="flex items-end justify-between border-b border-border pb-8">
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
                Case Studies
              </p>
            </div>
            <h2
              className={`text-heading text-3xl md:text-5xl text-foreground ${
                isVisible ? "animate-mask-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              דברים שעשינו והצליחו
            </h2>
          </div>
          <p
            className={`text-label text-xs text-muted-foreground hidden md:block transition-all duration-600 power-ease ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            גלול לצד לעוד ←
          </p>
        </div>
      </div>

      {/* Horizontal scrollable strip */}
      <div className="overflow-x-auto pb-8 scrollbar-hide">
        <div className="flex gap-px px-8 md:px-16" style={{ width: "max-content" }}>
          {cases.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[300px] md:w-[380px] group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              {/* Visual panel */}
              <div
                className={`${item.accent} h-52 md:h-64 mb-6 relative overflow-hidden group-hover:scale-[1.02] power-ease transition-transform`}
              >
                {/* Diagonal stripe pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 12px)",
                    color: "white",
                  }}
                />

                {/* Large number */}
                <span className="absolute top-6 right-6 text-display text-6xl text-white/8 font-black select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Tag badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-label text-[0.6rem] text-white/60 border border-white/20 px-2.5 py-1 tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Company name */}
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="h-px w-8 bg-white/30 mb-3" />
                  <span className="text-label text-[0.7rem] text-white/70 tracking-widest">
                    {item.company}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 power-ease" />
              </div>

              {/* Text content */}
              <h3 className="text-subhead text-lg text-foreground mb-3">{item.client}</h3>
              <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                <span className="text-foreground font-semibold">הבריף: </span>
                {item.brief}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">הפיצוח: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
