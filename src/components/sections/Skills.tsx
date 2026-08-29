import Reveal from '@/components/Reveal';
import SectionHeading from './SectionHeading';
import { skills } from '@/content/site';

/**
 * Honest tiers instead of invented percentages. A self-scored "React 90%"
 * reads as marketing; "what I build with daily" reads as a fact.
 */
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Toolkit"
          title="What I reach for, and how often."
          lead="Grouped by how much I actually use them, rather than by a percentage bar nobody can verify."
        />

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/12">
          {skills.map((group, i) => (
            <Reveal key={group.tier} delay={i * 90}>
              <div className="grid gap-5 bg-bone px-6 py-7 sm:grid-cols-[170px_1fr] sm:items-baseline sm:px-7 lg:grid-cols-[220px_1fr]">
                <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent/80">
                  {group.tier}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-ink/15 bg-bone-400 px-3.5 py-2 text-[0.85rem] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
