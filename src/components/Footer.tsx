import { Facebook, Instagram, MapPin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const footerLinks = ['Menu', 'About', 'Contact'];
const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' }
];

export const Footer = () => (
  <footer className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950">
    <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <Logo />
        <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          Brewora crafts premium coffee rituals for every mood, blending thoughtful sourcing, elegant spaces,
          and seamless digital ordering.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-extrabold uppercase text-zinc-950 dark:text-white">Explore</h3>
        <div className="mt-4 grid gap-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
          {footerLinks.map((link) => (
            <Link key={link} to={`/${link.toLowerCase()}`} className="transition hover:text-brew-700 dark:hover:text-brew-300">
              {link}
            </Link>
          ))}
          <Link to="/cart" className="transition hover:text-brew-700 dark:hover:text-brew-300">
            Cart
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-extrabold uppercase text-zinc-950 dark:text-white">Flagship</h3>
        <p className="mt-4 flex items-start gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-brew-700 dark:text-brew-300" />
          88 Emerald Avenue, Jakarta Creative District
        </p>
        <div className="mt-5 flex gap-2">
          {socials.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full bg-zinc-100 text-zinc-700 transition hover:bg-brew-700 hover:text-white dark:bg-white/5 dark:text-zinc-200"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-zinc-200 py-5 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      (c) 2026 Brewora Coffee. Crafted with emerald energy.
    </div>
  </footer>
);
