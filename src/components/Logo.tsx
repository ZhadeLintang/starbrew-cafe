import { Link } from 'react-router-dom';
import mark from '../assets/brewora-mark.svg';

interface LogoProps {
  compact?: boolean;
}

export const Logo = ({ compact = false }: LogoProps) => (
  <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Brewora home">
    <img src={mark} alt="" className="h-11 w-11 shrink-0 rounded-2xl shadow-glow" />
    {!compact && (
      <span className="min-w-0">
        <span className="block font-display text-2xl font-bold leading-none text-brew-950 dark:text-white">
          Brewora
        </span>
        <span className="block text-xs font-semibold uppercase text-brew-700 dark:text-brew-300">
          Crafted coffee
        </span>
      </span>
    )}
  </Link>
);
