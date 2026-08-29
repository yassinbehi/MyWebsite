import Reveal from '@/components/Reveal';

export default function SectionHeading({
  label,
  title,
  lead,
  align = 'left',
}: {
  label: string;
  title: React.ReactNode;
  lead?: string;
  align?: 'left' | 'center';
}) {
  const center = align === 'center';
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-accent" aria-hidden />
          <span className="label">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-[2.6rem]">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={140}>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
