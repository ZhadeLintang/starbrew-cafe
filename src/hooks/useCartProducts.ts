import { products } from '../data/products';
import { makeCartItemKey, useBreworaStore } from '../store/useBreworaStore';

export const useCartProducts = () => {
  const cart = useBreworaStore((state) => state.cart);

  const items = cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? { ...item, key: makeCartItemKey(item), product } : null;
    })
    .filter(Boolean);

  const subtotal = items.reduce((total, item) => {
    if (!item) return total;
    return total + item.product.price * item.quantity;
  }, 0);

  const service = subtotal > 0 ? 1.45 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + service + tax;

  return { items, subtotal, service, tax, total };
};
