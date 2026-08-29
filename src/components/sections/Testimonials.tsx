import Reveal from '@/components/Reveal';
import { testimonials } from '@/content/site';

/**
 * Renders nothing until real quotes exist. Add entries to `testimonials`
 * in src/content/site.ts — one per client, with their permission — and the
 * section appears on its own. Never seed this with invented praise.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative border-y border-ink/12 bg-bone-600/45 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden />
          <span className="label">In their words</span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 110}>
              <figure className="card h-full p-7">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent/40" fill="currentColor" aria-hidden>
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7Zm11 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" />
                </svg>
                <blockquote className="mt-5 text-[0.98rem] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/12 pt-5">
                  <span className="block text-[0.9rem] font-semibold">{t.author}</span>
                  <span className="mt-1 block text-[0.8rem] text-faint">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
