import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const isHovering = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only activate on pointer-fine devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    document.addEventListener("mousemove", onMove, { passive: true });

    const interactiveEls = document.querySelectorAll("a, button, [role='button']");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const animate = () => {
      const dot = dotRef.current;
      const ringEl = ringRef.current;

      if (dot && ringEl) {
        dot.style.transform = `translate(${mouse.current.x - 3}px, ${mouse.current.y - 3}px)`;

        ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
        ring.current.y += (mouse.current.y - ring.current.y) * 0.1;

        const scale = isHovering.current ? 1.8 : 1;
        const opacity = isHovering.current ? 0.5 : 0.7;
        ringEl.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px) scale(${scale})`;
        ringEl.style.opacity = String(opacity);
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", onMove);
      interactiveEls.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-white/50 rounded-full pointer-events-none z-[9999]"
        style={{ willChange: "transform", transition: "opacity 0.2s, transform 0.15s cubic-bezier(0.16,1,0.3,1)" }}
      />
    </>
  );
}
