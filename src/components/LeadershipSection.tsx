import { useScrollReveal } from "@/hooks/useScrollReveal";

const leaders = [
  {
    name: "אורן ציבלין",
    role: "מנכ\"ל",
    company: "ציבלין גרופ",
    bio: "מייסד הקבוצה עם ניסיון של 26 שנים בעולם הפרסום הישראלי. מוביל את החזון האסטרטגי של כלל חברות הקבוצה.",
    initials: "א.צ",
  },
  {
    name: "אודי ציבלין",
    role: "מנהל",
    company: "פאבליק",
    bio: "מנהל פעילות פאבליק, המתמחה בקמפיינים דיגיטליים ואסטרטגיה ממוקדת תוצאות עבור מותגים מובילים.",
    initials: "א.צ",
  },
  {
    name: "גלי כהן",
    role: "מנהלת",
    company: "שואו",
    bio: "אחראית על מחלקת ההפקות והאירועים. מביאה ניסיון עשיר בהפקות סקייל גדול ואירועי מיתוג.",
    initials: "ג.כ",
  },
  {
    name: "אוהד לוי",
    role: "מנהל",
    company: "טווינס",
    bio: "מנהל מחלקת המדיה הדיגיטלית. מתמחה בסושיאל, בניית קהילות מותג ותוכן ויראלי.",
    initials: "א.ל",
  },
  {
    name: "איריס דוד",
    role: "מנהלת",
    company: "נטו",
    bio: "מובילה את חטיבת הלקוחות הממשלתיים עם ניסיון ייחודי בשוק הציבורי ובמכרזים.",
    initials: "א.ד",
  },
  {
    name: "איתמר שרון",
    role: "מנהל",
    company: "הוצאה לאור",
    bio: "מנהל את פעילות הוצאה לאור והתוכן השיווקי. מביא פרספקטיבה קריאייטיבית ייחודית לכל פרויקט.",
    initials: "א.ש",
  },
];

export default function LeadershipSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative z-10 bg-background py-28 md:py-36 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <h2
            className={`text-heading text-3xl md:text-5xl text-foreground ${
              isVisible ? "animate-mask-reveal" : "opacity-0"
            }`}
          >
            ההנהלה
          </h2>
          <p
            className={`text-label text-xs text-muted-foreground hidden md:block ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            7 חברות · מגוון תחומי מומחיות
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className={`group relative bg-background p-8 hover:bg-foreground power-ease transition-colors cursor-default ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + i * 90}ms` }}
            >
              {/* Photo placeholder */}
              <div className="w-16 h-16 bg-muted group-hover:bg-primary power-ease transition-colors flex items-center justify-center mb-6">
                <span className="text-subhead text-sm text-muted-foreground group-hover:text-primary-foreground power-ease transition-colors">
                  {leader.initials}
                </span>
              </div>

              <div className="mb-1 flex items-baseline gap-2">
                <h3 className="text-subhead text-lg text-foreground group-hover:text-background power-ease transition-colors">
                  {leader.name}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground group-hover:text-background/50 power-ease transition-colors mb-1">
                {leader.role}
              </p>
              <p className="text-label text-primary text-[0.7rem] mb-4 group-hover:text-primary power-ease transition-colors">
                {leader.company}
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-background/60 power-ease transition-colors leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
