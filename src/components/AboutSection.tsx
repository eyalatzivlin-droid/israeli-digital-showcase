import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { number: "26", label: "שנות ניסיון" },
  { number: "50+", label: "עובדים" },
  { number: "75+", label: "לקוחות פעילים" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 bg-background py-28 md:py-36 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section label */}
        <p
          className={`text-label text-xs text-primary mb-12 tracking-widest ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          מה הסיפור שלנו
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Heading */}
          <h2
            className={`text-heading text-4xl md:text-6xl text-foreground leading-tight ${
              isVisible ? "animate-mask-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            קבוצת תקשורת
            <br />
            <span className="text-primary">מהגדולות</span>
            <br />
            בישראל
          </h2>

          {/* Body */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "250ms" }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              ציבלין גרופ היא קבוצת התקשורת המובילה בישראל, עם ניסיון של 26 שנים בעולם הפרסום והמדיה.
              הקבוצה מאגדת תחת קורת גג אחת את כל השירותים הנדרשים — מאסטרטגיה ותכנון מדיה, דרך קריאייטיב
              ועיצוב, ועד ביצוע והפקה.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              אנחנו גאים בלקוחות שלנו — מותגים מובילים, ארגונים ממשלתיים וחברות גלובליות שבוחרים בנו שוב ושוב.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${400 + i * 100}ms` }}
            >
              <span className="text-display text-4xl md:text-7xl text-foreground block">
                {stat.number}
              </span>
              <p className="text-label text-xs text-muted-foreground mt-3 tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
