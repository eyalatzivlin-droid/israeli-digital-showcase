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
        className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-400 power-ease ${
          scrolled
            ? "bg-background/96 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className={`text-display text-xl transition-colors duration-300 power-ease ${
            scrolled ? "text-foreground" : "text-white"
          } hover:text-primary`}
        >
          ציבלין גרופ
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-label text-[0.8rem] transition-colors duration-300 power-ease relative group ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 right-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 power-ease" />
            </a>
          ))}
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
        className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-6 transition-all duration-500 power-ease ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-8 text-foreground hover:text-primary power-ease transition-colors"
          aria-label="סגור"
        >
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-heading text-4xl md:text-6xl text-foreground hover:text-primary power-ease transition-colors"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
