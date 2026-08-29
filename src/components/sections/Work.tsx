import Reveal from '@/components/Reveal';
import SectionHeading from './SectionHeading';
import { projects, site } from '@/content/site';

export default function Work() {
  return (
    <section id="work" className="relative border-y border-ink/12 bg-bone-600/45 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Selected work"
          title="Built for a purpose, not a portfolio."
          lead="Each of these started as somebody's actual problem. Open them and look around."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block h-full overflow-hidden"
              >
                {/* 16/7 matches the ~2.29:1 browser screenshots, so object-cover crops nothing */}
                <div className="relative aspect-[16/7] overflow-hidden border-b border-ink/12 bg-bone-600">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.kind}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bone/45 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-0" aria-hidden />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="label">{p.kind}</span>
                    <span className="flex items-center gap-1.5 text-[0.78rem] text-faint transition-colors duration-300 group-hover:text-accent">
                      {p.linkLabel}
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-muted">{p.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[0.7rem] text-faint transition-colors duration-300 group-hover:border-accent/25 group-hover:text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-ink/20 px-6 py-6 text-center sm:flex-row sm:px-7 sm:text-left">
            <p className="text-[0.94rem] text-muted">
              More experiments, coursework and client work live on GitHub.
            </p>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5 !text-[0.85rem]">
              Browse the repositories
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
