import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, ShoppingBag, Sun, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { useBreworaStore } from '../store/useBreworaStore';
import { cn } from '../utils/format';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useBreworaStore((state) => state.cart);
  const theme = useBreworaStore((state) => state.theme);
  const toggleTheme = useBreworaStore((state) => state.toggleTheme);
  const hydrateTheme = useBreworaStore((state) => state.hydrateTheme);
  const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

  useEffect(() => hydrateTheme(), [hydrateTheme]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex w-[min(1180px,calc(100%-2rem))] items-center justify-between rounded-2xl border border-white/60 bg-white/78 px-4 py-3 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/70">
        <Logo />

        <div className="hidden items-center rounded-full bg-zinc-100/80 p-1 dark:bg-white/5 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-5 py-2 text-sm font-bold transition',
                  isActive
                    ? 'bg-white text-brew-800 shadow-sm dark:bg-white/10 dark:text-white'
                    : 'text-zinc-600 hover:text-brew-800 dark:text-zinc-300 dark:hover:text-white'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-brew-200 hover:text-brew-800 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <NavLink
            to="/cart"
            className="relative grid h-11 w-11 place-items-center rounded-full bg-brew-700 text-white shadow-glow transition hover:bg-brew-800"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-xs font-extrabold text-brew-800">
                {cartCount}
              </span>
            )}
          </NavLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-800 dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed bottom-0 right-0 top-0 z-[60] w-[min(360px,88vw)] border-l border-white/10 bg-white p-5 shadow-premium dark:bg-zinc-950 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo compact />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-zinc-100 text-zinc-800 dark:bg-white/10 dark:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-10 grid gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-2xl px-5 py-4 text-lg font-bold transition',
                        isActive
                          ? 'bg-brew-700 text-white'
                          : 'bg-zinc-100 text-zinc-800 dark:bg-white/5 dark:text-zinc-200'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
