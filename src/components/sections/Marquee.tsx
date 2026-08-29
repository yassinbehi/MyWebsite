const stack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Python', 'Flask', 'SQL', 'Claude Code', 'LLM apps', 'Git', 'REST APIs',
];

/** Quiet tech strip between hero and services — pauses on hover so it can be read. */
export default function Marquee() {
  return (
    <div className="marquee relative overflow-hidden border-y border-ink/12 bg-bone-600/55 py-5">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(90deg, var(--color-bone), transparent 12%, transparent 88%, var(--color-bone))',
        }}
        aria-hidden
      />
      <div className="marquee-track flex w-max gap-10">
        {[...stack, ...stack].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-[0.78rem] uppercase tracking-[0.16em] text-faint"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
