import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { target: 26, suffix: "", label: "שנות ניסיון" },
  { target: 50, suffix: "+", label: "עובדים" },
  { target: 75, suffix: "+", label: "לקוחות פעילים" },
];

function StatItem({
  target,
  suffix,
  label,
  isVisible,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCounter(target, 2400, isVisible);

  return (
    <div
      className={`transition-all duration-700 power-ease ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden">
        <span
          className="text-display text-5xl md:text-8xl block"
          style={{
            backgroundImage: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(12,95%,50%) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-label text-xs text-muted-foreground mt-3 tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 bg-background py-28 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-14 transition-all duration-600 power-ease ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div
            className="h-px bg-primary"
            style={{
              width: isVisible ? "40px" : "0px",
              transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "100ms",
            }}
          />
          <p className="text-label text-xs text-primary tracking-widest uppercase">
            מה הסיפור שלנו
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Heading */}
          <div className="overflow-hidden">
            <h2
              className={`text-heading text-4xl md:text-6xl text-foreground leading-tight ${
                isVisible ? "animate-mask-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              קבוצת תקשורת
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(12,95%,50%) 0%, hsl(28,100%,60%) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                מהגדולות
              </span>
              <br />
              בישראל
            </h2>
          </div>

          {/* Body */}
          <div
            className={`transition-all duration-700 power-ease ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              ציבלין גרופ היא קבוצת התקשורת המובילה בישראל, עם ניסיון של 26 שנים בעולם הפרסום והמדיה.
              הקבוצה מאגדת תחת קורת גג אחת את כל השירותים הנדרשים — מאסטרטגיה ותכנון מדיה, דרך קריאייטיב
              ועיצוב, ועד ביצוע והפקה.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              אנחנו גאים בלקוחות שלנו — מותגים מובילים, ארגונים ממשלתיים וחברות גלובליות שבוחרים בנו שוב ושוב.
            </p>

            {/* Decorative quote mark */}
            <div
              className={`mt-12 pt-8 border-t border-border transition-all duration-700 power-ease ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <p
                className="text-3xl font-black text-border/60 font-display"
                style={{ letterSpacing: "-0.04em" }}
              >
                "אסטרטגיה. קריאייטיב. תוצאות."
              </p>
            </div>
          </div>
        </div>

        {/* Animated Stats row */}
        <div
          className={`grid grid-cols-3 gap-8 mt-20 pt-14 border-t border-border ${
            isVisible ? "" : ""
          }`}
        >
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              delay={400 + i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
