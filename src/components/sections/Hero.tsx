import HeroPortrait from '@/components/HeroPortrait';
import RotatingWord from '@/components/RotatingWord';
import { hero, site } from '@/content/site';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Static, cheap background: graph grid + two soft blooms. No WebGL, so
          the first paint is immediate. */}
      <div className="grid-bg absolute inset-0 -z-20" aria-hidden />
      <div className="glow-cool absolute -left-40 top-10 -z-10 h-[420px] w-[420px] blur-3xl" aria-hidden />
      <div className="glow-accent absolute -right-32 top-60 -z-10 h-[380px] w-[380px] blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ---------- Left: the message ---------- */}
        <div>
          {/* One colour, one weight. The sentence carries the emphasis, not a gradient. */}
          <h1
            className="rise font-display text-[clamp(2.05rem,8.5vw,2.6rem)] font-semibold leading-[1.04] text-ink sm:text-6xl lg:text-[4.1rem]"
            style={{ '--rise-delay': '90ms' } as React.CSSProperties}
          >
            {hero.headlineLead} {hero.headlineAccent}.
          </h1>

          {/* The rotating line sits under the headline, not inside it: the
              core message is legible in one glance, the motion is secondary. */}
          <p
            className="rise mt-5 flex flex-wrap items-baseline gap-x-2 font-mono text-sm text-muted sm:text-base"
            style={{ '--rise-delay': '170ms' } as React.CSSProperties}
          >
            <span className="text-faint">$</span>
            <span className="text-faint">building</span>
            <RotatingWord words={hero.rotating} className="text-accent" />
          </p>

          <p
            className="rise mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted sm:text-lg"
            style={{ '--rise-delay': '250ms' } as React.CSSProperties}
          >
            {hero.sub}
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ '--rise-delay': '330ms' } as React.CSSProperties}
          >
            <a href={hero.primaryCta.href} className="btn btn-primary group">
              {hero.primaryCta.label}
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
            <a
              href={site.cv}
              download
              className="group inline-flex items-center gap-2 px-2 py-2 text-sm text-faint transition-colors hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Credibility strip — the three facts that answer "why you?" */}
          <ul
            className="rise mt-11 grid gap-3 border-t border-ink/12 pt-7 sm:grid-cols-2 lg:grid-cols-3"
            style={{ '--rise-delay': '420ms' } as React.CSSProperties}
          >
            {hero.credentials.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                <span className="text-[0.82rem] leading-snug text-muted">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Right: the person ---------- */}
        <div className="rise order-first lg:order-last" style={{ '--rise-delay': '160ms' } as React.CSSProperties}>
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
