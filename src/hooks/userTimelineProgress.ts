import { useEffect, useRef, useState } from "react";

export function useTimelineProgress(count: number) {
  const tlRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>(() => Array(count).fill(false));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cur = 0;
    let raf = 0;

    const target = () => {
      const r = tl.getBoundingClientRect();
      return Math.max(0, Math.min(r.height, innerHeight * 0.7 - r.top));
    };

    const paint = (h: number) => {
      const top = tl.getBoundingClientRect().top;
      const total = tl.offsetHeight;
      tl.style.setProperty("--p", String(total ? h / total : 0));

      const next = nodeRefs.current.map(
        (n) => !!n && n.getBoundingClientRect().top - top + 11 <= h
      );
      // hanya update state kalau memang berubah
      setActive((prev) => (prev.every((v, i) => v === next[i]) ? prev : next));
      setDone(h >= total - 2);
    };

    const loop = () => {
      const t = target();
      cur += (t - cur) * (reduce ? 1 : 0.14);
      if (Math.abs(t - cur) < 0.5) cur = t;
      paint(cur);
      raf = cur === t ? 0 : requestAnimationFrame(loop);
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    addEventListener("scroll", kick, { passive: true });
    addEventListener("resize", kick);
    kick();

    return () => {
      removeEventListener("scroll", kick);
      removeEventListener("resize", kick);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return { tlRef, nodeRefs, active, done };
}