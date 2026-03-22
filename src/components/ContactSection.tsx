import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [activeTab, setActiveTab] = useState<"contact" | "careers">("contact");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 bg-background py-32 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        <h2
          className={`text-heading text-3xl md:text-5xl text-foreground mb-12 ${
            isVisible ? "animate-mask-reveal" : "opacity-0"
          }`}
        >
          בואו נדבר
        </h2>

        {/* Tab switcher */}
        <div className="flex gap-0 mb-12">
          <button
            onClick={() => setActiveTab("contact")}
            className={`text-label px-6 py-3 border-2 power-ease transition-all active:scale-[0.97] ${
              activeTab === "contact"
                ? "bg-primary border-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            צור קשר
          </button>
          <button
            onClick={() => setActiveTab("careers")}
            className={`text-label px-6 py-3 border-2 border-r-0 power-ease transition-all active:scale-[0.97] ${
              activeTab === "careers"
                ? "bg-primary border-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            קריירה
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            {activeTab === "contact" ? (
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="שם מלא"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="אימייל"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="טלפון"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="הודעה"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-label bg-primary text-primary-foreground px-10 py-4 hover:bg-foreground hover:text-background power-ease transition-all active:scale-[0.97]"
                >
                  שליחה
                </button>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="שם מלא"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="אימייל"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="טלפון"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="ספרו לנו על עצמכם"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none power-ease transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="text-label text-sm text-muted-foreground block mb-2">
                    צירוף קורות חיים
                  </label>
                  <input
                    type="file"
                    className="text-sm text-muted-foreground file:bg-surface file:text-foreground file:border-0 file:px-4 file:py-2 file:text-label file:cursor-pointer"
                  />
                </div>
                <button
                  type="submit"
                  className="text-label bg-primary text-primary-foreground px-10 py-4 hover:bg-foreground hover:text-background power-ease transition-all active:scale-[0.97]"
                >
                  שליחה
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div
            className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "500ms" }}
          >
            <div>
              <p className="text-label text-primary mb-2">כתובת</p>
              <p className="text-lg text-foreground">שדרות רוטשילד 45, תל אביב</p>
            </div>
            <div>
              <p className="text-label text-primary mb-2">טלפון</p>
              <p className="text-lg text-foreground" dir="ltr">+972-3-555-1234</p>
            </div>
            <div>
              <p className="text-label text-primary mb-2">אימייל</p>
              <p className="text-lg text-foreground">info@tzivelin.co.il</p>
            </div>
            <div>
              <p className="text-label text-primary mb-2">עקבו אחרינו</p>
              <div className="flex gap-4">
                <a href="#" className="text-foreground hover:text-primary power-ease transition-colors text-lg">
                  Facebook
                </a>
                <a href="#" className="text-foreground hover:text-primary power-ease transition-colors text-lg">
                  YouTube
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-48 bg-surface flex items-center justify-center">
              <span className="text-muted-foreground text-sm">מפה — שדרות רוטשילד 45, תל אביב</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
