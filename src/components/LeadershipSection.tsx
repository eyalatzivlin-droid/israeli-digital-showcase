import { useScrollReveal } from "@/hooks/useScrollReveal";

const leaders = [
  { name: "אורן צבילין", role: "מנכ\"ל צבילין גרופ", company: "צבילין גרופ", initials: "א.צ" },
  { name: "אודי צבילין", role: "סמנכ\"ל", company: "פאבליק", initials: "א.צ" },
  { name: "גלי כהן", role: "מנהלת שואו", company: "שואו", initials: "ג.כ" },
  { name: "אוהד לוי", role: "מנהל טווינס", company: "טווינס", initials: "א.ל" },
  { name: "איריס דוד", role: "מנהלת נטו", company: "נטו", initials: "א.ד" },
  { name: "איתמר שרון", role: "מנהל ביטחוני", company: "הוצאה לאור", initials: "א.ש" },
];

export default function LeadershipSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="relative z-10 bg-background py-32 md:py-40 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <h2
          className={`text-heading text-3xl md:text-5xl text-foreground mb-16 ${
            isVisible ? "animate-mask-reveal" : "opacity-0"
          }`}
        >
          ההנהלה
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className={`group relative bg-surface p-8 hover:bg-muted power-ease transition-colors cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 bg-muted flex items-center justify-center mb-6 group-hover:bg-primary power-ease transition-colors">
                <span className="text-display text-xl text-muted-foreground group-hover:text-primary-foreground power-ease transition-colors">
                  {leader.initials}
                </span>
              </div>
              <h3 className="text-subhead text-xl text-foreground mb-1">{leader.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{leader.role}</p>
              <p className="text-label text-primary text-xs">{leader.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
