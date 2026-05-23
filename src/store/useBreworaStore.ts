import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../types';

export type ToastKind = 'success' | 'info' | 'error';

export interface Toast {
  id: string;
  message: string;
  kind: ToastKind;
}

interface BreworaState {
  cart: CartItem[];
  favorites: string[];
  theme: 'light' | 'dark';
  toasts: Toast[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  toggleFavorite: (id: string) => void;
  toggleTheme: () => void;
  hydrateTheme: () => void;
  pushToast: (message: string, kind?: ToastKind) => void;
  removeToast: (id: string) => void;
}

export const makeCartItemKey = (item: CartItem) =>
  `${item.id}-${item.size}-${[...item.customizations].sort().join('|')}`;

export const useBreworaStore = create<BreworaState>()(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],
      theme: 'light',
      toasts: [],
      addToCart: (item) => {
        set((state) => {
          const key = makeCartItemKey(item);
          const exists = state.cart.find((cartItem) => makeCartItemKey(cartItem) === key);
          if (exists) {
            return {
              cart: state.cart.map((cartItem) =>
                makeCartItemKey(cartItem) === key
                  ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                  : cartItem
              )
            };
          }
          return { cart: [...state.cart, item] };
        });
        get().pushToast('Added to cart', 'success');
      },
      updateQuantity: (key, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(key);
          return;
        }
        set((state) => ({
          cart: state.cart.map((item) => (makeCartItemKey(item) === key ? { ...item, quantity } : item))
        }));
      },
      removeFromCart: (key) => {
        set((state) => ({ cart: state.cart.filter((item) => makeCartItemKey(item) !== key) }));
        get().pushToast('Removed from cart', 'info');
      },
      clearCart: () => {
        set({ cart: [] });
        get().pushToast('Cart cleared', 'info');
      },
      toggleFavorite: (id) => {
        set((state) => {
          const active = state.favorites.includes(id);
          return {
            favorites: active
              ? state.favorites.filter((favoriteId) => favoriteId !== id)
              : [...state.favorites, id]
          };
        });
        get().pushToast('Wishlist updated', 'success');
      },
      toggleTheme: () => {
        set((state) => {
          const nextTheme = state.theme === 'light' ? 'dark' : 'light';
          document.documentElement.classList.toggle('dark', nextTheme === 'dark');
          return { theme: nextTheme };
        });
      },
      hydrateTheme: () => {
        const theme = get().theme;
        document.documentElement.classList.toggle('dark', theme === 'dark');
      },
      pushToast: (message, kind = 'info') => {
        const id = crypto.randomUUID();
        set((state) => ({ toasts: [...state.toasts, { id, message, kind }] }));
        window.setTimeout(() => get().removeToast(id), 2800);
      },
      removeToast: (id) => {
        set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }));
      }
    }),
    {
      name: 'brewora-store',
      partialize: (state) => ({
        cart: state.cart,
        favorites: state.favorites,
        theme: state.theme
      })
    }
  )
);
