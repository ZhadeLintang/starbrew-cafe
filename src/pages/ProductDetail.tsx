import { ArrowLeft, Flame, Heart, Leaf, ShoppingBag, Star, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { QuantityControl } from '../components/QuantityControl';
import { ScrollReveal } from '../components/ScrollReveal';
import { products } from '../data/products';
import { useBreworaStore } from '../store/useBreworaStore';
import type { DrinkSize } from '../types';
import { cn, formatCurrency } from '../utils/format';

const sizes: DrinkSize[] = ['Short', 'Tall', 'Grande', 'Venti'];
const customizations = ['Classic', 'Oat milk', 'Less sweet', 'Extra shot', 'Cold foam'];

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((entry) => entry.id === id);
  const [size, setSize] = useState<DrinkSize>('Grande');
  const [quantity, setQuantity] = useState(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>(['Classic']);
  const addToCart = useBreworaStore((state) => state.addToCart);
  const favorites = useBreworaStore((state) => state.favorites);
  const toggleFavorite = useBreworaStore((state) => state.toggleFavorite);

  const recommendations = useMemo(() => {
    if (!product) return [];
    return products.filter((entry) => entry.id !== product.id && entry.category === product.category).slice(0, 3);
  }, [product]);

  if (!product) return <Navigate to="/menu" replace />;

  const favorite = favorites.includes(product.id);
  const sizeUpcharge = sizes.indexOf(size) * 0.65;
  const itemPrice = product.price + sizeUpcharge;

  const toggleCustomization = (item: string) => {
    setSelectedCustomizations((current) =>
      current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item]
    );
  };

  return (
    <div className="pt-32">
      <section className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 pb-20 lg:grid-cols-[.96fr_1fr]">
        <ScrollReveal>
          <Link
            to="/menu"
            className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-600 transition hover:text-brew-700 dark:text-zinc-300 dark:hover:text-brew-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to menu
          </Link>
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-premium dark:border-white/10 dark:bg-zinc-950">
            <img src={product.image} alt={product.name} className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-zinc-950 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brew-100 px-3 py-1 text-sm font-bold text-brew-800 dark:bg-brew-900 dark:text-brew-100">
                {product.category}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-zinc-700 dark:text-zinc-200">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-5xl font-bold text-zinc-950 dark:text-white">{product.name}</h1>
                <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">{product.longDescription}</p>
              </div>
              <button
                type="button"
                onClick={() => toggleFavorite(product.id)}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-brew-200 hover:text-brew-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                aria-label={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={favorite ? 'h-5 w-5 fill-brew-600 text-brew-600' : 'h-5 w-5'} />
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Leaf, value: product.mood, label: 'Mood' },
                { icon: Flame, value: `${product.calories} cal`, label: 'Energy' },
                { icon: Zap, value: product.caffeine, label: 'Caffeine' }
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="rounded-2xl bg-zinc-100 p-4 dark:bg-white/5">
                  <Icon className="h-5 w-5 text-brew-700 dark:text-brew-300" />
                  <p className="mt-3 text-sm font-bold text-zinc-500 dark:text-zinc-400">{label}</p>
                  <p className="mt-1 font-extrabold text-zinc-950 dark:text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-extrabold uppercase text-zinc-950 dark:text-white">Size</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {sizes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    className={cn(
                      'rounded-2xl border px-4 py-4 text-sm font-extrabold transition',
                      size === option
                        ? 'border-brew-700 bg-brew-700 text-white shadow-glow'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-brew-200 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200'
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-extrabold uppercase text-zinc-950 dark:text-white">Customize</p>
              <div className="flex flex-wrap gap-3">
                {customizations.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleCustomization(item)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm font-bold transition',
                      selectedCustomizations.includes(item)
                        ? 'border-brew-700 bg-brew-50 text-brew-800 dark:bg-brew-900 dark:text-brew-100'
                        : 'border-zinc-200 bg-white text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300'
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-4 rounded-2xl bg-zinc-100 p-4 dark:bg-white/5 sm:flex-row sm:items-center sm:justify-between">
              <QuantityControl value={quantity} onChange={setQuantity} />
              <button
                type="button"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    size,
                    quantity,
                    customizations: selectedCustomizations.length ? selectedCustomizations : ['Classic']
                  })
                }
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brew-700 px-7 text-sm font-extrabold text-white shadow-glow transition hover:bg-brew-800"
              >
                <ShoppingBag className="h-5 w-5" />
                Add {formatCurrency(itemPrice * quantity)}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-2rem))] pb-20">
        <ScrollReveal>
          <h2 className="font-display text-4xl font-bold text-zinc-950 dark:text-white">Recommended next</h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(recommendations.length ? recommendations : products.filter((entry) => entry.id !== product.id).slice(0, 3)).map(
            (entry, index) => (
              <ScrollReveal key={entry.id} delay={index * 0.05}>
                <ProductCard product={entry} />
              </ScrollReveal>
            )
          )}
        </div>
      </section>
    </div>
  );
};
