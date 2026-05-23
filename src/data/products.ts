import type { DrinkCategory, Product, Testimonial, TimelineItem } from '../types';

export const categories: Array<DrinkCategory | 'All'> = [
  'All',
  'Signature',
  'Cold Brew',
  'Espresso',
  'Tea',
  'Bakery'
];

export const products: Product[] = [
  {
    id: 'emerald-cloud-latte',
    name: 'Emerald Cloud Latte',
    category: 'Signature',
    description: 'Velvety espresso, pandan vanilla cream, and emerald cold foam.',
    longDescription:
      'A layered signature latte made with slow-pulled espresso, a silky pandan-vanilla crema, and cool emerald foam that finishes clean and aromatic.',
    price: 6.8,
    rating: 4.9,
    reviews: 842,
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=85',
    badge: 'Best Seller',
    mood: 'Calm focus',
    calories: 180,
    caffeine: 'Medium',
    tags: ['Creamy', 'Aromatic', 'Iced or hot']
  },
  {
    id: 'reserve-matcha-macchiato',
    name: 'Reserve Matcha Macchiato',
    category: 'Tea',
    description: 'Ceremonial matcha, oat milk, ristretto drizzle, and leaf dust.',
    longDescription:
      'A smooth matcha-forward drink with oat milk sweetness and a ristretto finish for a bright, grounded cup.',
    price: 7.2,
    rating: 4.8,
    reviews: 513,
    image:
      'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=1200&q=85',
    badge: 'New',
    mood: 'Creative energy',
    calories: 160,
    caffeine: 'Medium',
    tags: ['Oat milk', 'Earthy', 'Balanced']
  },
  {
    id: 'velvet-nitro-cold-brew',
    name: 'Velvet Nitro Cold Brew',
    category: 'Cold Brew',
    description: 'Nitro-infused cold brew with a satin finish and cacao notes.',
    longDescription:
      'Twenty-hour cold brew charged with micro bubbles for a cascading texture, finished with a whisper of cacao.',
    price: 6.4,
    rating: 4.9,
    reviews: 678,
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=85',
    mood: 'Deep work',
    calories: 45,
    caffeine: 'High',
    tags: ['Unsweetened', 'Cacao', 'Smooth']
  },
  {
    id: 'golden-pistachio-flat-white',
    name: 'Golden Pistachio Flat White',
    category: 'Espresso',
    description: 'Double ristretto with steamed milk and salted pistachio praline.',
    longDescription:
      'A compact, luxurious flat white with concentrated ristretto, textured milk, and a salted pistachio finish.',
    price: 6.9,
    rating: 4.7,
    reviews: 392,
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=85',
    mood: 'Slow morning',
    calories: 210,
    caffeine: 'High',
    tags: ['Nutty', 'Silky', 'Warm']
  },
  {
    id: 'citrus-espresso-tonic',
    name: 'Citrus Espresso Tonic',
    category: 'Espresso',
    description: 'Sparkling tonic, orange oil, and a chilled espresso float.',
    longDescription:
      'Crisp tonic water meets orange aromatics and espresso for a bright drink built for afternoon lift.',
    price: 6.5,
    rating: 4.6,
    reviews: 241,
    image:
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85',
    mood: 'Fresh reset',
    calories: 95,
    caffeine: 'Medium',
    tags: ['Sparkling', 'Citrus', 'Refreshing']
  },
  {
    id: 'black-sesame-mocha',
    name: 'Black Sesame Mocha',
    category: 'Signature',
    description: 'Dark chocolate, espresso, toasted sesame, and mineral sugar.',
    longDescription:
      'A rich mocha with a toasted black sesame base that brings a dessert-like depth without feeling heavy.',
    price: 7.4,
    rating: 4.8,
    reviews: 466,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85',
    mood: 'Evening indulgence',
    calories: 240,
    caffeine: 'Medium',
    tags: ['Chocolate', 'Toasted', 'Rich']
  },
  {
    id: 'honey-olive-cortado',
    name: 'Honey Olive Cortado',
    category: 'Espresso',
    description: 'Equal parts espresso and milk, wild honey, and olive oil gloss.',
    longDescription:
      'A compact cortado finished with floral honey and a few drops of olive oil for a round, savory-sweet profile.',
    price: 5.9,
    rating: 4.7,
    reviews: 288,
    image:
      'https://images.unsplash.com/photo-1579888071069-c107a6f79d82?auto=format&fit=crop&w=1200&q=85',
    mood: 'Quiet clarity',
    calories: 130,
    caffeine: 'Medium',
    tags: ['Floral', 'Compact', 'Balanced']
  },
  {
    id: 'almond-croissant',
    name: 'Almond Moon Croissant',
    category: 'Bakery',
    description: 'Buttery laminated pastry with almond cream and espresso sugar.',
    longDescription:
      'A crisp, layered croissant filled with almond cream and finished with espresso sugar crystals.',
    price: 4.9,
    rating: 4.9,
    reviews: 351,
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    mood: 'Treat yourself',
    calories: 320,
    caffeine: 'None',
    tags: ['Buttery', 'Almond', 'Fresh baked']
  }
];

export const featuredProducts = products.slice(0, 4);

export const testimonials: Testimonial[] = [
  {
    name: 'Maya Chen',
    role: 'Creative Director',
    quote:
      'Brewora feels like a calm design studio that happens to serve incredible coffee. The Emerald Cloud Latte is my ritual now.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Andre Malik',
    role: 'Product Lead',
    quote:
      'The menu is polished, the ordering flow is fast, and every drink feels considered. It is premium without trying too hard.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Sofia Hart',
    role: 'Founder',
    quote:
      'I bring clients here because Brewora has that international-brand feeling: beautiful, reliable, and quietly memorable.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80'
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '2021',
    title: 'The First Pour',
    copy: 'Brewora began as a pop-up espresso bar serving mood-led coffee pairings.'
  },
  {
    year: '2022',
    title: 'Signature Roasts',
    copy: 'We partnered with small farms for emerald-profile beans with citrus, cacao, and herbaceous notes.'
  },
  {
    year: '2024',
    title: 'Design-Led Cafes',
    copy: 'Our first flagship introduced warm minimalism, quiet service, and precise brewing rituals.'
  },
  {
    year: '2026',
    title: 'Global Standard',
    copy: 'Brewora now blends hospitality, technology, and craft into a premium daily coffee experience.'
  }
];
