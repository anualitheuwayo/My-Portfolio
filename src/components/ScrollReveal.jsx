import { useEffect, useRef } from "react";

const DIRECTIONS = ["up", "down", "left", "right", "scale"];

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 60,
  stagger = false,
  staggerDelay = 80,
  staggerSelector = ":scope > *",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      node.style.opacity = "1";
      node.style.transform = "none";
      return;
    }

    const transforms = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(-${distance}px)`,
      right: `translateX(${distance}px)`,
      scale: "scale(0.85)",
    };

    node.style.opacity = "0";
    node.style.transform = transforms[direction] || transforms.up;
    node.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.opacity = "1";
            node.style.transform = "none";

            if (stagger) {
              const children = node.querySelectorAll(staggerSelector);
              children.forEach((child, index) => {
                const childDelay = delay + index * staggerDelay;
                child.style.opacity = "0";
                child.style.transform = "translateY(28px) scale(0.96)";
                child.style.transition = `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${childDelay}ms, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${childDelay}ms`;
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    child.style.opacity = "1";
                    child.style.transform = "none";
                  });
                });
              });
            }

            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [direction, delay, duration, distance, stagger, staggerDelay, staggerSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}