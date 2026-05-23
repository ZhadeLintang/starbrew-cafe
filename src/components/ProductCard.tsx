import { Heart, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../types';
import { useBreworaStore } from '../store/useBreworaStore';
import { formatCurrency } from '../utils/format';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const favorites = useBreworaStore((state) => state.favorites);
  const toggleFavorite = useBreworaStore((state) => state.toggleFavorite);
  const addToCart = useBreworaStore((state) => state.addToCart);
  const favorite = favorites.includes(product.id);

  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-premium transition-colors dark:border-white/10 dark:bg-zinc-950"
    >
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-brew-800 backdrop-blur">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-4 left-4 rounded-full bg-brew-950/82 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {product.mood}
        </span>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/product/${product.id}`}
              className="line-clamp-1 text-xl font-bold text-zinc-950 transition hover:text-brew-700 dark:text-white dark:hover:text-brew-300"
            >
              {product.name}
            </Link>
            <p className="mt-1 line-clamp-2 min-h-12 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {product.description}
            </p>
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(product.id)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-brew-200 hover:bg-brew-50 hover:text-brew-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
            aria-label={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={favorite ? 'h-5 w-5 fill-brew-600 text-brew-600' : 'h-5 w-5'} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {product.rating}
              <span className="text-zinc-400">({product.reviews})</span>
            </div>
            <p className="mt-1 text-xl font-extrabold text-brew-800 dark:text-brew-200">
              {formatCurrency(product.price)}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              addToCart({
                id: product.id,
                size: 'Grande',
                quantity: 1,
                customizations: ['Classic']
              })
            }
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brew-700 px-4 text-sm font-bold text-white shadow-glow transition hover:bg-brew-800 focus:outline-none focus:ring-4 focus:ring-brew-300"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
};
