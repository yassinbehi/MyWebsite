import Reveal from '@/components/Reveal';
import SectionHeading from './SectionHeading';
import { process } from '@/content/site';

/**
 * The section that converts non-technical clients. It answers the unspoken
 * question — "what is this actually like to buy?" — before they have to ask.
 */
export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="How it works"
          title="No surprises, at any point."
          lead="You don't need to speak developer to work with me. Here's the whole process."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100} as="li" className="group bg-bone">
              <div className="h-full p-6 transition-colors duration-500 group-hover:bg-bone-400 lg:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-semibold text-ink/15 transition-colors duration-500 group-hover:text-accent/60">
                    {p.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
