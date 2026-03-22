import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  "בנק לאומי", "סלקום", "שטראוס", "אל על", "פלאפון",
  "בזק", "הוט", "תנובה", "ויקטורי", "משרד הביטחון",
  "ישראכרט", "אמדוקס", "מכבי", "אגד", "סונול",
];

export default function ClientsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="clients"
      ref={ref}
      className="relative z-10 bg-background py-32 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        <h2
          className={`text-heading text-3xl md:text-5xl text-foreground mb-16 ${
            isVisible ? "animate-mask-reveal" : "opacity-0"
          }`}
        >
          שותפים לדרך
        </h2>

        {/* Logo strip — non-clickable */}
        <div className="flex flex-wrap gap-px">
          {clients.map((client, i) => (
            <div
              key={client}
              className={`bg-surface flex items-center justify-center px-8 py-6 min-w-[140px] flex-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <span className="text-subhead text-base text-muted-foreground whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
