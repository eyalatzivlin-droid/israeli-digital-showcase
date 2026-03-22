import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "אודות", href: "#about" },
  { label: "שירותים", href: "#services" },
  { label: "לקוחות", href: "#clients" },
  { label: "פרויקטים", href: "#cases" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-500 power-ease ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className={`text-display text-xl transition-all duration-400 power-ease ${
            scrolled ? "text-foreground" : "text-white"
          } hover:text-primary`}
        >
          ציבלין גרופ
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-label text-[0.78rem] relative group transition-colors duration-300 power-ease ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {link.label}
              {/* Underline from right — RTL */}
              <span className="absolute -bottom-0.5 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-350 power-ease" />
            </a>
          ))}

          {/* CTA button */}
          <a
            href="#contact"
            className={`text-label text-[0.78rem] px-5 py-2.5 border transition-all duration-300 power-ease ${
              scrolled
                ? "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                : "border-white/25 text-white hover:bg-white hover:text-foreground"
            }`}
          >
            דברו איתנו
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className={`md:hidden transition-colors duration-300 power-ease ${
            scrolled ? "text-foreground" : "text-white"
          } hover:text-primary`}
          aria-label="תפריט"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] bg-background flex flex-col items-end justify-center gap-2 px-16 transition-all duration-500 power-ease ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-8 text-foreground hover:text-primary power-ease transition-colors"
          aria-label="סגור"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Large nav items */}
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="group flex items-center gap-4"
            style={{
              transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(20px)",
            }}
          >
            <span className="text-label text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-heading text-4xl md:text-6xl text-foreground hover:text-primary power-ease transition-colors">
              {link.label}
            </span>
          </a>
        ))}

        {/* Bottom contact info */}
        <div
          className="absolute bottom-12 right-16 text-xs text-muted-foreground text-label tracking-wider"
          style={{
            transition: "opacity 0.5s ease 400ms",
            opacity: open ? 1 : 0,
          }}
        >
          <span dir="ltr">+972-3-555-1234</span>
          <span className="mx-3 opacity-30">·</span>
          <span>info@tzivelin.co.il</span>
        </div>
      </div>
    </>
  );
}
