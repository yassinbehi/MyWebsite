import { site } from '@/content/site';

const explore = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const elsewhere = [
  { name: 'GitHub', href: site.github, external: true },
  { name: 'LinkedIn', href: site.linkedin, external: true },
  { name: 'Download CV', href: site.cv, download: true },
];

const linkClass = 'text-[0.85rem] text-faint transition-colors duration-300 hover:text-accent';

/**
 * The last screen a visitor sees, so it does one job first: give them a way to
 * make contact. Navigation and credits come after that, not before it.
 */
export default function Footer() {
  return (
    <footer className="border-t border-ink/12 bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* The ask — repeated here because this is where scrollers land */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted">
              Got something you need built? Say what the problem is — the fastest
              way in is an email.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group mt-5 inline-flex items-center gap-2 font-medium text-ink transition-colors duration-300 hover:text-accent [overflow-wrap:anywhere]"
            >
              {site.email}
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <p className="mt-3 text-[0.78rem] text-faint">{site.location}</p>
          </div>

          <nav aria-label="Sections">
            <h2 className="label">Explore</h2>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className={linkClass}>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h2 className="label">Elsewhere</h2>
            <ul className="mt-5 space-y-3">
              {elsewhere.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className={linkClass}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(l.download ? { download: true } : {})}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/12 pt-6 sm:flex-row">
          <p className="text-[0.75rem] text-faint">
            © {new Date().getFullYear()} · Built by {site.name}
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[0.75rem] text-faint transition-colors duration-300 hover:text-accent"
          >
            Back to top
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
