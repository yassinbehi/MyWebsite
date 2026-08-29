import Reveal from '@/components/Reveal';
import SectionHeading from './SectionHeading';
import { about, site } from '@/content/site';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-ink/12 bg-bone-600/45 py-24 sm:py-32">
      <div className="glow-cool absolute -right-40 top-20 -z-10 h-[400px] w-[400px] blur-3xl" aria-hidden />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHeading
              label="About"
              title="A student by title. A builder by practice."
            />

            <div className="mt-8 space-y-5">
              {about.bio.map((para, i) => (
                <Reveal key={i} delay={i * 90}>
                  {/* Plain, readable prose — no scramble effects. A client
                      skimming for ten seconds must be able to read this. */}
                  <p className="max-w-xl text-[1.02rem] leading-relaxed text-muted">{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn btn-primary">Work with me</a>
                <a href={site.cv} download className="btn btn-ghost">Download CV</a>
              </div>
            </Reveal>
          </div>

          {/* Fact panel — scannable in two seconds for anyone who won't read prose */}
          <Reveal delay={140}>
            <dl className="surface divide-y divide-ink/12 overflow-hidden rounded-2xl">
              {about.facts.map((f) => (
                <div key={f.label} className="px-6 py-5">
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-2 text-[0.95rem] font-medium leading-snug text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
