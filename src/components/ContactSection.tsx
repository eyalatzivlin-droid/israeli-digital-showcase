import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [activeTab, setActiveTab] = useState<"contact" | "careers">("contact");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 bg-surface py-28 md:py-36 px-8 md:px-16"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-border pb-8">
          <h2
            className={`text-heading text-3xl md:text-5xl text-foreground ${
              isVisible ? "animate-mask-reveal" : "opacity-0"
            }`}
          >
            בואו נדבר
          </h2>
          <p
            className={`text-label text-xs text-muted-foreground hidden md:block ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            שדרות רוטשילד 45, תל אביב
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className={`flex gap-0 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "150ms" }}
        >
          <button
            onClick={() => setActiveTab("contact")}
            className={`text-label text-xs px-7 py-3 border power-ease transition-all active:scale-[0.97] ${
              activeTab === "contact"
                ? "bg-foreground border-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            צור קשר
          </button>
          <button
            onClick={() => setActiveTab("careers")}
            className={`text-label text-xs px-7 py-3 border border-r-0 power-ease transition-all active:scale-[0.97] ${
              activeTab === "careers"
                ? "bg-foreground border-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            קריירה
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div
            className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "250ms" }}
          >
            {activeTab === "contact" ? (
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="שם מלא"
                  required
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors text-base"
                />
                <input
                  type="email"
                  placeholder="אימייל"
                  required
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors text-base"
                />
                <input
                  type="tel"
                  placeholder="טלפון"
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors text-base"
                />
                <textarea
                  placeholder="הודעה"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors resize-none text-base"
                />
                <button
                  type="submit"
                  className="text-label text-xs bg-foreground text-background px-10 py-4 hover:bg-primary hover:text-primary-foreground power-ease transition-all active:scale-[0.97]"
                >
                  שליחה
                </button>
              </form>
            ) : (
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="שם מלא"
                  required
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors text-base"
                />
                <input
                  type="email"
                  placeholder="אימייל"
                  required
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors text-base"
                />
                <input
                  type="tel"
                  placeholder="טלפון"
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors text-base"
                />
                <textarea
                  placeholder="ספרו לנו על עצמכם ומה אתם מחפשים"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none power-ease transition-colors resize-none text-base"
                />
                <div>
                  <label className="text-label text-xs text-muted-foreground block mb-3">
                    צירוף קורות חיים (PDF / Word)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="text-sm text-muted-foreground file:bg-foreground file:text-background file:border-0 file:px-5 file:py-2 file:text-label file:text-xs file:cursor-pointer hover:file:bg-primary hover:file:text-primary-foreground power-ease"
                  />
                </div>
                <button
                  type="submit"
                  className="text-label text-xs bg-foreground text-background px-10 py-4 hover:bg-primary hover:text-primary-foreground power-ease transition-all active:scale-[0.97]"
                >
                  שליחה
                </button>
              </form>
            )}
          </div>

          {/* Contact info + map */}
          <div
            className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-label text-[0.7rem] text-primary mb-2 tracking-widest">כתובת</p>
                <p className="text-base text-foreground">שדרות רוטשילד 45, תל אביב</p>
              </div>
              <div>
                <p className="text-label text-[0.7rem] text-primary mb-2 tracking-widest">טלפון</p>
                <p className="text-base text-foreground" dir="ltr">+972-3-555-1234</p>
              </div>
              <div>
                <p className="text-label text-[0.7rem] text-primary mb-2 tracking-widest">אימייל</p>
                <a
                  href="mailto:info@tzivelin.co.il"
                  className="text-base text-foreground hover:text-primary power-ease transition-colors"
                >
                  info@tzivelin.co.il
                </a>
              </div>
              <div>
                <p className="text-label text-[0.7rem] text-primary mb-2 tracking-widest">עקבו אחרינו</p>
                <div className="flex gap-5">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground hover:text-primary power-ease transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground hover:text-primary power-ease transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="w-full h-56 md:h-64 overflow-hidden border border-border">
              <iframe
                title="מיקום משרד ציבלין גרופ"
                src="https://maps.google.com/maps?q=Rothschild+Blvd+45+Tel+Aviv&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
