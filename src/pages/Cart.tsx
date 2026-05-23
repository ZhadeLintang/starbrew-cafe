import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { useCartProducts } from '../hooks/useCartProducts';
import { useBreworaStore } from '../store/useBreworaStore';
import { formatCurrency } from '../utils/format';

export const Cart = () => {
  const { items, subtotal, service, tax, total } = useCartProducts();
  const updateQuantity = useBreworaStore((state) => state.updateQuantity);
  const removeFromCart = useBreworaStore((state) => state.removeFromCart);
  const clearCart = useBreworaStore((state) => state.clearCart);
  const pushToast = useBreworaStore((state) => state.pushToast);

  return (
    <div className="pt-32">
      <section className="mx-auto w-[min(1180px,calc(100%-2rem))] pb-20">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brew-700 dark:text-brew-300">Your order</p>
              <h1 className="font-display text-5xl font-bold text-zinc-950 dark:text-white">Cart</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
                Review quantities, remove items, and keep your Brewora run beautifully simple.
              </p>
            </div>
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-extrabold text-zinc-700 transition hover:border-red-200 hover:text-red-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
              >
                Clear cart
              </button>
            )}
          </div>
        </ScrollReveal>

        {items.length === 0 ? (
          <ScrollReveal className="mt-10">
            <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center shadow-premium dark:border-white/10 dark:bg-zinc-950">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brew-100 text-brew-800 dark:bg-brew-900 dark:text-brew-100">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl font-extrabold text-zinc-950 dark:text-white">Your cart is empty</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300">Start with a signature drink or a pastry pairing.</p>
              <Link
                to="/menu"
                className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brew-700 px-6 text-sm font-extrabold text-white shadow-glow transition hover:bg-brew-800"
              >
                Browse menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="grid gap-4">
              {items.map((item) => {
                if (!item) return null;
                return (
                  <ScrollReveal key={item.key}>
                    <article className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-premium dark:border-white/10 dark:bg-zinc-950 md:grid-cols-[128px_1fr_auto] md:items-center">
                      <img src={item.product.image} alt={item.product.name} className="h-32 w-full rounded-2xl object-cover md:w-32" />
                      <div className="min-w-0">
                        <h2 className="text-xl font-extrabold text-zinc-950 dark:text-white">{item.product.name}</h2>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                          {item.size} / {item.customizations.join(', ')}
                        </p>
                        <p className="mt-3 text-lg font-extrabold text-brew-800 dark:text-brew-200">
                          {formatCurrency(item.product.price)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-4 md:justify-end">
                        <div className="inline-flex h-11 items-center rounded-full border border-zinc-200 p-1 dark:border-white/10">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="grid h-9 w-9 place-items-center rounded-full hover:bg-zinc-100 dark:hover:bg-white/10"
                            aria-label="Decrease item quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="grid h-9 w-9 place-items-center text-sm font-extrabold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="grid h-9 w-9 place-items-center rounded-full bg-brew-700 text-white hover:bg-brew-800"
                            aria-label="Increase item quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.key)}
                          className="grid h-11 w-11 place-items-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100 dark:bg-red-500/10"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.08}>
              <aside className="sticky top-28 rounded-2xl border border-zinc-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-zinc-950">
                <h2 className="text-2xl font-extrabold text-zinc-950 dark:text-white">Checkout summary</h2>
                <div className="mt-6 grid gap-4 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service</span>
                    <span>{formatCurrency(service)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>{formatCurrency(tax)}</span>
                  </div>
                </div>
                <div className="mt-6 border-t border-zinc-200 pt-6 dark:border-white/10">
                  <div className="flex items-center justify-between text-xl font-extrabold text-zinc-950 dark:text-white">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => pushToast('Checkout flow is ready for payment integration', 'success')}
                    className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brew-700 px-6 text-sm font-extrabold text-white shadow-glow transition hover:bg-brew-800"
                  >
                    Continue checkout
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </aside>
            </ScrollReveal>
          </div>
        )}
      </section>
    </div>
  );
};
