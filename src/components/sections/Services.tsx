import Reveal from '@/components/Reveal';
import SectionHeading from './SectionHeading';
import { services } from '@/content/site';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="What I do"
          title="Three things I build, properly."
          lead="Most clients arrive with a problem rather than a spec. These are the shapes the answer usually takes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 110}>
              <article className="card group h-full p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="label">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-ink/20 transition-colors duration-500 group-hover:bg-accent" aria-hidden />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-muted">{s.lead}</p>

                <ul className="mt-6 space-y-2.5 border-t border-ink/12 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[0.86rem] text-faint">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
