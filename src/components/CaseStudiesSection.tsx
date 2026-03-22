import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    client: "קמפיין חורף 2024",
    company: "פאבליק",
    brief: "העלאת מודעות למותג בקרב קהל צעיר",
    solution: "סדרת תכנים ויראליים ברשתות החברתיות עם שיתופי פעולה של משפיענים",
    color: "bg-primary",
  },
  {
    client: "השקת מוצר חדש",
    company: "שואו",
    brief: "הפקת אירוע השקה ייחודי",
    solution: "חוויה אינטראקטיבית ב-360 מעלות עם שידור חי לאלפי צופים",
    color: "bg-muted",
  },
  {
    client: "מיתוג מחדש",
    company: "טווינס",
    brief: "רענון זהות ויזואלית למותג ותיק",
    solution: "שפה עיצובית חדשה שמכבדת את המורשת תוך פנייה לדור חדש של צרכנים",
    color: "bg-primary",
  },
  {
    client: "קמפיין דיגיטלי",
    company: "פאבליק",
    brief: "הגדלת לידים ב-40%",
    solution: "אסטרטגיית PPC רב-ערוצית עם דפי נחיתה מותאמים ומעקב קונברז׳ן",
    color: "bg-muted",
  },
];

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="cases"
      ref={ref}
      className="relative z-10 bg-surface py-32 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        <h2
          className={`text-heading text-3xl md:text-5xl text-foreground mb-16 ${
            isVisible ? "animate-mask-reveal" : "opacity-0"
          }`}
        >
          דברים שעשינו והצליחו
        </h2>

        {/* Horizontal scrollable strip */}
        <div className="flex gap-4 overflow-x-auto pb-8 -mx-8 px-8 scrollbar-hide">
          {cases.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[340px] md:w-[420px] group cursor-pointer ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              {/* Visual placeholder */}
              <div
                className={`${item.color} h-56 md:h-72 mb-6 group-hover:scale-[1.02] power-ease transition-transform flex items-end p-6`}
              >
                <span className="text-label text-xs text-primary-foreground/60 group-hover:text-primary-foreground power-ease transition-colors">
                  {item.company}
                </span>
              </div>
              <h3 className="text-subhead text-xl text-foreground mb-2">{item.client}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                <strong className="text-foreground">הבריף:</strong> {item.brief}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">הפיצוח:</strong> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
