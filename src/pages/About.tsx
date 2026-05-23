import { Award, Coffee, Leaf, Users } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeader } from '../components/SectionHeader';
import { timeline } from '../data/products';

const team = [
  {
    name: 'Elena Park',
    role: 'Head of Coffee',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=82'
  },
  {
    name: 'Rafi Mahendra',
    role: 'Experience Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=82'
  },
  {
    name: 'Nadia Sol',
    role: 'Pastry Lead',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=82'
  }
];

const gallery = [
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=82',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=82'
];

export const About = () => (
  <div className="pt-32">
    <section className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 pb-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Brewora story"
          title="A premium coffee house shaped by mood, craft, and calm design."
          copy="Brewora began with one belief: coffee should meet the emotional texture of the day. Our cafes pair careful sourcing with serene service, modern interiors, and drinks that feel beautifully intentional."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { icon: Coffee, label: '18 origin partners' },
            { icon: Leaf, label: 'Plant-forward menu' },
            { icon: Users, label: 'Hospitality-first team' },
            { icon: Award, label: 'Reserve roast program' }
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-premium dark:border-white/10 dark:bg-zinc-950">
              <Icon className="h-6 w-6 text-brew-700 dark:text-brew-300" />
              <p className="mt-4 font-extrabold text-zinc-950 dark:text-white">{label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <div className="grid grid-cols-2 gap-4">
          <img src={gallery[0]} alt="Brewora cafe counter" className="h-72 w-full rounded-2xl object-cover shadow-premium" />
          <img src={gallery[1]} alt="Coffee preparation" className="mt-10 h-72 w-full rounded-2xl object-cover shadow-premium" />
        </div>
      </ScrollReveal>
    </section>

    <section className="bg-white/70 py-20 dark:bg-zinc-950/60">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <ScrollReveal>
          <SectionHeader align="center" eyebrow="Team" title="People behind the ritual." />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.05}>
              <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-premium dark:border-white/10 dark:bg-zinc-950">
                <img src={member.image} alt={member.name} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brew-700 dark:text-brew-300">{member.role}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto w-[min(1180px,calc(100%-2rem))] py-20">
      <ScrollReveal>
        <SectionHeader eyebrow="Gallery" title="Warm minimalism, precise craft." />
      </ScrollReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((image, index) => (
          <ScrollReveal key={image} delay={index * 0.04}>
            <img src={image} alt="Brewora brand gallery" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-premium" />
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="mx-auto w-[min(1180px,calc(100%-2rem))] pb-20">
      <ScrollReveal>
        <SectionHeader align="center" eyebrow="Timeline" title="From pop-up bar to modern coffee brand." />
      </ScrollReveal>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {timeline.map((item, index) => (
          <ScrollReveal key={item.year} delay={index * 0.05}>
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-zinc-950">
              <p className="text-3xl font-extrabold text-brew-700 dark:text-brew-300">{item.year}</p>
              <h3 className="mt-4 text-xl font-extrabold text-zinc-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.copy}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </div>
);
