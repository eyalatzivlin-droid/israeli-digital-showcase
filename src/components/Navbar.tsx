import { useState } from "react";
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

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 py-6">
        <a href="#" className="text-display text-2xl text-foreground">
          צבילין גרופ
        </a>
        <button
          onClick={() => setOpen(true)}
          className="text-label text-foreground hover:text-primary power-ease transition-colors"
          aria-label="תפריט"
        >
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-8 transition-all duration-500 power-ease ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 left-8 text-foreground hover:text-primary power-ease transition-colors"
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
