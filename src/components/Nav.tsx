'use client';

import { useEffect, useState } from 'react';

const links = [
  { name: 'Services', id: 'services' },
  { name: 'Work', id: 'work' },
  { name: 'Process', id: 'process' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy via observer rather than a scroll handler doing getBoundingClientRect
  // on every frame.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Reading progress — a single hairline, the least intrusive way to
          tell a visitor how much is left. */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink/12 bg-bone/85 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        {/* No wordmark: the headline three lines below already says who this is,
            and the nav's only job here is to move people to the work and the ask. */}
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    active === l.id ? 'text-accent' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.name}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-center bg-accent transition-transform duration-400 ${
                      active === l.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Spacer keeps the CTA right-aligned once the links collapse */}
          <span className="md:hidden" aria-hidden />

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn btn-primary hidden !px-5 !py-2.5 !text-[0.85rem] sm:inline-flex">
              Start a project
            </a>

            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-ink/20 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-px w-full bg-ink transition-transform duration-300 ${
                    open ? 'translate-y-[6px] rotate-45' : ''
                  }`}
                />
                <span className={`h-px w-full bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
                <span
                  className={`h-px w-full bg-ink transition-transform duration-300 ${
                    open ? '-translate-y-[6px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-bone/97 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="flex min-h-full flex-col justify-center gap-2 px-6 py-24 sm:px-8">
          {[...links, { name: 'Contact', id: 'contact' }].map((l, i) => (
            <li
              key={l.id}
              style={{ transitionDelay: `${open ? i * 55 : 0}ms` }}
              className={`transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-3.5 font-display text-2xl tracking-tight text-ink sm:py-4 sm:text-3xl"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
