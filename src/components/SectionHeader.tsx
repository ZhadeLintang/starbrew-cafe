interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ eyebrow, title, copy, align = 'left' }: SectionHeaderProps) => (
  <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow && (
      <p className="mb-3 text-sm font-bold uppercase text-brew-700 dark:text-brew-300">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-4xl font-bold text-zinc-950 dark:text-white md:text-5xl">{title}</h2>
    {copy && <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">{copy}</p>}
  </div>
);
