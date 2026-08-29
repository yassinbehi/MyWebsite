'use client';

import { useEffect, useState } from 'react';

/**
 * Types one phrase, holds, deletes, moves on. Sits *below* the headline so
 * the main message is readable instantly — the motion draws the eye second,
 * not first.
 */
export default function RotatingWord({
  words,
  typeSpeed = 55,
  deleteSpeed = 28,
  hold = 1900,
  className = '',
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  hold?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        ),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold, reduced]);

  // Reserve the line height so nothing below shifts as the word changes.
  return (
    <span className={className} aria-live="polite">
      {reduced ? words[0] : text}
      <span className="caret ml-0.5 inline-block w-[2px] translate-y-[2px] self-stretch bg-accent" aria-hidden>
        &nbsp;
      </span>
    </span>
  );
}
