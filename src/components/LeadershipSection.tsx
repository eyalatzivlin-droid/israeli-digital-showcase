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
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section ref={ref} className="relative z-10 bg-background py-28 md:py-40 px-8 md:px-16">
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
                className={`text-label text-xs text-primary tracking-widest uppercase transition-all duration-600 power-ease ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                הצוות שלנו
              </p>
            </div>
            <h2
              className={`text-heading text-3xl md:text-5xl text-foreground ${
                isVisible ? "animate-mask-reveal" : "opacity-0"
              }`}
            >
              ההנהלה
            </h2>
          </div>
          <p
            className={`text-label text-xs text-muted-foreground hidden md:block transition-all duration-600 power-ease ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            7 חברות · מגוון תחומי מומחיות
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className={`group relative bg-background p-8 hover:bg-foreground power-ease transition-colors cursor-default overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + i * 90}ms` }}
            >
              {/* Top accent line that grows on hover */}
              <div className="absolute top-0 right-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500 power-ease" />

              {/* Initials avatar */}
              <div className="relative w-14 h-14 mb-7">
                <div className="w-full h-full bg-muted group-hover:bg-primary/20 power-ease transition-colors flex items-center justify-center border border-border group-hover:border-primary/50 transition-all duration-400">
                  <span
                    className="text-subhead text-sm font-bold power-ease transition-all duration-400"
                    style={{
                      backgroundImage: "linear-gradient(135deg, hsl(0,0%,42%) 0%, hsl(12,95%,50%) 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {leader.initials}
                  </span>
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 power-ease" />
              </div>

              {/* Name + role */}
              <div className="mb-1 flex items-baseline gap-2">
                <h3 className="text-subhead text-lg text-foreground group-hover:text-background power-ease transition-colors">
                  {leader.name}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground group-hover:text-background/50 power-ease transition-colors mb-1">
                {leader.role}
              </p>
              <p className="text-label text-primary text-[0.7rem] mb-5 tracking-wider">
                {leader.company}
              </p>
              <p className="text-sm text-muted-foreground group-hover:text-background/60 power-ease transition-colors leading-relaxed">
                {leader.bio}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 group-hover:w-full transition-all duration-700 power-ease" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
