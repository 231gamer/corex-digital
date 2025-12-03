"use client";

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string; // original display value like '205+' or '08+'
  startFrom?: number; // starting numeric value
  duration?: number; // ms
  className?: string;
}

const parseNumeric = (val: string) => {
  const numericStr = (val || '').toString().match(/\d+/)?.[0] ?? '0';
  return {
    numeric: parseInt(numericStr, 10),
    numericStr,
    suffix: val.replace(/\d+/g, ''),
  };
};

export default function CountUp({ value, startFrom = 0, duration = 1200, className = '' }: CountUpProps) {
  const { numeric: endValue, numericStr, suffix } = parseNumeric(value);
  const padLen = numericStr.length;
  const [display, setDisplay] = useState(startFrom);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let rafId: number;
    const startTime = performance.now();
    const from = startFrom;
    const to = endValue;
    const delta = to - from;

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOutQuad-ish
      const current = Math.round(from + delta * eased);
      setDisplay(current);
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        // ensure final value
        setDisplay(to);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, startFrom, endValue, duration]);

  const formatted = String(display).padStart(padLen, '0') + suffix;

  return (
    <div ref={ref} className={className}>
      {formatted}
    </div>
  );
}
