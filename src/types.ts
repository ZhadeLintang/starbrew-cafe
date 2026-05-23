import type { LucideIcon } from 'lucide-react';

export type DrinkCategory = 'Signature' | 'Cold Brew' | 'Espresso' | 'Tea' | 'Bakery';

export type DrinkSize = 'Short' | 'Tall' | 'Grande' | 'Venti';

export interface Product {
  id: string;
  name: string;
  category: DrinkCategory;
  description: string;
  longDescription: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  mood: string;
  calories: number;
  caffeine: string;
  tags: string[];
}

export interface CartItem {
  id: string;
  size: DrinkSize;
  quantity: number;
  customizations: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  copy: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}
