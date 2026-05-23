import { ArrowRight, Bean, Coffee, Leaf, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeader } from '../components/SectionHeader';
import { featuredProducts, testimonials } from '../data/products';

const heroImage =
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=90';

export const Home = () => (
  <>
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <img src={heroImage} alt="Premium Brewora coffee bar" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brew-950/94 via-brew-950/72 to-black/24" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8faf8] to-transparent dark:from-[#050b08]" />

      <div className="relative mx-auto grid w-[min(1180px,calc(100%-2rem))] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-sm font-bold text-brew-100 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Crafted coffee
          </div>
          <h1 className="font-display text-6xl font-bold leading-[1.04] text-white md:text-7xl lg:text-8xl">
            Brewed For Your Mood
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brew-50/88 md:text-xl">
            A Starbucks-inspired, Apple-clean coffee experience with emerald roasts, precise rituals,
            and a menu designed around how you want to feel.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-extrabold text-brew-900 shadow-glow transition hover:bg-brew-50"
            >
              Explore menu
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/18"
            >
              Our story
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-white/16 bg-white/12 p-4 shadow-glow backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1100&q=88"
              alt="Latte art in Brewora cup"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-white">
              {[
                ['24h', 'cold brew'],
                ['4.9', 'rating'],
                ['18', 'origins']
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/12 p-4 backdrop-blur">
                  <p className="text-2xl font-extrabold">{value}</p>
                  <p className="text-xs font-semibold text-brew-50/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="relative -mt-12 pb-14">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-4 md:grid-cols-3">
        {[
          { icon: Bean, title: 'Small-lot beans', copy: 'Emerald roast profiles with cacao, citrus, and leafy notes.' },
          { icon: Coffee, title: 'Precision drinks', copy: 'Every cup is balanced for texture, temperature, and mood.' },
          { icon: Leaf, title: 'Plant-forward', copy: 'Oat, almond, and lighter choices built into the core menu.' }
        ].map(({ icon: Icon, title, copy }) => (
          <ScrollReveal key={title}>
            <div className="h-full rounded-2xl border border-zinc-200/80 bg-white/88 p-6 shadow-premium backdrop-blur dark:border-white/10 dark:bg-zinc-950/82">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brew-100 text-brew-800 dark:bg-brew-900 dark:text-brew-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-zinc-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{copy}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Signature drinks"
            title="Designed like a ritual, served like a treat."
            copy="Explore crafted favorites with soft textures, emerald accents, and subtle global flavor profiles."
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.04}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12">
      <ScrollReveal className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="overflow-hidden rounded-2xl bg-brew-950 text-white shadow-glow">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_.72fr] md:p-12">
            <div>
              <p className="text-sm font-bold uppercase text-brew-200">Spring reserve</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Buy any signature drink, get a bakery pairing half off.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-brew-50/82">
                A limited cafe pairing built for slower mornings, focused afternoons, and end-of-day resets.
              </p>
              <Link
                to="/menu"
                className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-extrabold text-brew-900 transition hover:bg-brew-50"
              >
                Order the pairing
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1533089860892-a7c6f10a081a?auto=format&fit=crop&w=1000&q=85"
              alt="Coffee and pastry pairing"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>

    <section className="py-16">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <ScrollReveal>
          <SectionHeader
            align="center"
            eyebrow="Community"
            title="Quietly loved by daily regulars."
            copy="Brewora is built for people who care about the small details: the first sip, the room tone, the last task finished well."
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-zinc-950">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-zinc-700 dark:text-zinc-200">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-extrabold text-zinc-950 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);
