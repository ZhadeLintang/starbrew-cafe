import { Minus, Plus } from 'lucide-react';

interface QuantityControlProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
}

export const QuantityControl = ({ value, onChange, min = 1 }: QuantityControlProps) => (
  <div className="inline-flex h-12 items-center rounded-full border border-zinc-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-white/5">
    <button
      type="button"
      onClick={() => onChange(Math.max(min, value - 1))}
      className="grid h-10 w-10 place-items-center rounded-full text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
      aria-label="Decrease quantity"
    >
      <Minus className="h-4 w-4" />
    </button>
    <span className="grid h-10 w-10 place-items-center text-sm font-bold text-zinc-950 dark:text-white">{value}</span>
    <button
      type="button"
      onClick={() => onChange(value + 1)}
      className="grid h-10 w-10 place-items-center rounded-full bg-brew-700 text-white transition hover:bg-brew-800"
      aria-label="Increase quantity"
    >
      <Plus className="h-4 w-4" />
    </button>
  </div>
);
