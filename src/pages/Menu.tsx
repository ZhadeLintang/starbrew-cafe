import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeader } from '../components/SectionHeader';
import { SkeletonCard } from '../components/SkeletonCard';
import { categories, products } from '../data/products';
import type { DrinkCategory } from '../types';
import { cn } from '../utils/format';

export const Menu = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<DrinkCategory | 'All'>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesQuery =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.tags.some((tag) => tag.toLowerCase().includes(normalized));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="pt-32">
      <section className="mx-auto w-[min(1180px,calc(100%-2rem))] pb-12">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <SectionHeader
              eyebrow="Brewora menu"
              title="Choose the drink that matches the moment."
              copy="Search mood-crafted coffees, teas, cold brews, and fresh pastries with a fast, refined ordering flow."
            />
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-premium dark:border-white/10 dark:bg-zinc-950">
              <div className="flex items-center gap-3 rounded-2xl bg-zinc-100 px-4 py-3 dark:bg-white/5">
                <Search className="h-5 w-5 text-zinc-500" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search latte, matcha, tonic..."
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-zinc-950 outline-none placeholder:text-zinc-400 dark:text-white"
                />
                <SlidersHorizontal className="h-5 w-5 text-brew-700 dark:text-brew-300" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  'inline-flex h-12 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-extrabold transition',
                  category === item
                    ? 'border-brew-700 bg-brew-700 text-white shadow-glow'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-brew-200 hover:text-brew-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200'
                )}
              >
                <Filter className="h-4 w-4" />
                {item}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-2rem))] pb-20">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-zinc-600 dark:text-zinc-300">{filtered.length} items available</p>
            </div>
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
            {filtered.length === 0 && (
              <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-premium dark:border-white/10 dark:bg-zinc-950">
                <p className="text-lg font-extrabold text-zinc-950 dark:text-white">No drinks found</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Try a different search or category.</p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};
