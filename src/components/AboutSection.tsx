import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { number: "26", label: "שנות ניסיון" },
  { number: "50+", label: "עובדים" },
  { number: "75+", label: "לקוחות פעילים" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 bg-surface py-32 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center md:text-right ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className="text-display text-5xl md:text-8xl text-primary">
                {stat.number}
              </span>
              <p className="text-subhead text-lg md:text-xl text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* About text */}
        <div
          className={`max-w-3xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-heading text-3xl md:text-5xl text-foreground mb-8">
            הסיפור שלנו
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            צבילין גרופ היא קבוצת התקשורת המובילה בישראל, עם ניסיון של 26 שנים בעולם הפרסום והמדיה.
            הקבוצה מאגדת תחת קורת גג אחת את כל השירותים הנדרשים — מאסטרטגיה ותכנון מדיה, דרך קריאייטיב
            ועיצוב, ועד ביצוע והפקה. אנחנו גאים בלקוחות שלנו — מותגים מובילים, ארגונים ממשלתיים
            וחברות גלובליות שבוחרים בנו שוב ושוב.
          </p>
        </div>
      </div>
    </section>
  );
}
