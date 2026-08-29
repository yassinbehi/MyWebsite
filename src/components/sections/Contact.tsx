import Reveal from '@/components/Reveal';
import { cta, site } from '@/content/site';

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 .5 9 6 9-6" />
    ),
  },
  {
    label: 'Phone',
    value: site.phone,
    href: site.phoneHref,
    icon: (
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1l-2.22 2.23Z" />
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/yassinbehi',
    href: site.github,
    external: true,
    icon: (
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.6 5.4 2.9 5.4 2.9a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.3c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'in/behi-yassin',
    href: site.linkedin,
    external: true,
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM6 9H2v12h4V9Zm-2-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="grid-bg grid-bg-panel absolute inset-0 -z-20" aria-hidden />
      <div className="glow-accent absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden />
            <span className="label">Next step</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {cta.heading}
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            {cta.body}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-primary group">
              {cta.button}
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={site.phoneHref} className="btn btn-ghost">Call instead</a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 text-[0.82rem] text-faint">
            {site.location} · replies within a day
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-2xl gap-3 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card group flex h-full items-center gap-3.5 p-4 text-left"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-bone-600/60 text-muted transition-colors duration-300 group-hover:bg-accent/15 group-hover:text-accent">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {c.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] uppercase tracking-widest text-faint">{c.label}</span>
                  <span className="block text-[0.86rem] text-ink [overflow-wrap:anywhere]">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
