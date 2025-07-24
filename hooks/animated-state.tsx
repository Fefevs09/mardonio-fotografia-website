"use client";
import { useEffect, useRef, useState } from "react";

export function AnimatedStat({
  number,
  suffix,
  label,
}: {
  number: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500; // 1.5 seconds
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function para movimento mais suave
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(number * easeOutQuart);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(number); // Garante o valor final exato
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-serif font-normal text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 font-medium tracking-wide">{label}</div>
    </div>
  );
}
