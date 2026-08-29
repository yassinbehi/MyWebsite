'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Portrait with a restrained pointer parallax (max ~10px). The movement is
 * small on purpose: enough to feel alive, never enough to distract from the
 * headline.
 */
export default function HeroPortrait() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        setOffset({
          x: ((e.clientX - cx) / cx) * 10,
          y: ((e.clientY - cy) / cy) * 10,
        });
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[16rem] sm:max-w-[21rem] lg:max-w-[27.5rem]">
      {/* cool bloom behind the subject */}
      <div className="glow-accent absolute -inset-10 -z-10 blur-2xl" aria-hidden />

      <div
        className="relative transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        {/* offset frame — gives the photo a designed edge instead of a plain crop */}
        <div className="absolute -inset-3 rounded-[2rem] border border-accent/35" aria-hidden />

        <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/15 bg-bone-600">
          <img
            src="/profile.jpg"
            alt="Yassin El Behi"
            width={880}
            height={1100}
            className="aspect-[4/5] w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* grounds the photo into the page instead of floating as a rectangle */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-bone/70 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
