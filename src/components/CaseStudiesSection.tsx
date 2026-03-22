import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    client: "קמפיין חורף 2024",
    company: "פאבליק",
    companyHref: "#cases-public",
    brief: "העלאת מודעות למותג בקרב קהל צעיר",
    solution: "סדרת תכנים ויראליים ברשתות החברתיות עם שיתופי פעולה של משפיענים מובילים",
    accent: "bg-primary",
  },
  {
    client: "השקת מוצר חדש",
    company: "שואו",
    companyHref: "#cases-show",
    brief: "הפקת אירוע השקה ייחודי ובלתי נשכח",
    solution: "חוויה אינטראקטיבית ב-360 מעלות עם שידור חי לאלפי צופים ברחבי הארץ",
    accent: "bg-foreground",
  },
  {
    client: "מיתוג מחדש",
    company: "טווינס",
    companyHref: "#cases-twins",
    brief: "רענון זהות ויזואלית למותג ותיק",
    solution: "שפה עיצובית חדשה שמכבדת את המורשת תוך פנייה לדור חדש של צרכנים",
    accent: "bg-primary",
  },
  {
    client: "קמפיין דיגיטלי",
    company: "פאבליק",
    companyHref: "#cases-public",
    brief: "הגדלת לידים ב-40% תוך 3 חודשים",
    solution: "אסטרטגיית PPC רב-ערוצית עם דפי נחיתה מותאמים ומעקב קונברז׳ן מדויק",
    accent: "bg-foreground",
  },
  {
    client: "קמפיין ברנד",
    company: "שואו",
    companyHref: "#cases-show",
    brief: "ביסוס עמדת מנהיגות קטגוריה",
    solution: "סדרת פרסומות TV ודיגיטל עם קריאייטיב חדשני שכבש את שיח המותגים",
    accent: "bg-primary",
  },
];

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="cases"
      ref={ref}
      className="relative z-10 bg-background py-28 md:py-36"
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-12">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <p
              className={`text-label text-xs text-primary mb-3 tracking-widest ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Case Studies
            </p>
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
            className={`text-label text-xs text-muted-foreground hidden md:block ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
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
                className={`${item.accent} h-52 md:h-64 mb-6 flex flex-col justify-between p-6 group-hover:scale-[1.02] power-ease transition-transform`}
              >
                <span className="text-display text-5xl text-white/10 font-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Clickable company tag */}
                <a
                  href={item.companyHref}
                  onClick={(e) => e.preventDefault()}
                  className="text-label text-[0.7rem] text-white/80 hover:text-white power-ease transition-colors border border-white/20 hover:border-white/60 inline-block px-3 py-1.5 self-start"
                >
                  {item.company} ↗
                </a>
              </div>

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
