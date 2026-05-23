import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeader } from '../components/SectionHeader';
import { useBreworaStore } from '../store/useBreworaStore';

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' }
];

export const Contact = () => {
  const pushToast = useBreworaStore((state) => state.pushToast);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    pushToast('Message sent. Brewora will reply soon.', 'success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-32">
      <section className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 pb-20 lg:grid-cols-[.95fr_1.05fr]">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Visit Brewora"
            title="A calm flagship for coffee, meetings, and daily rituals."
            copy="Book a table, ask about catering, or send a note to the Brewora team. We keep the experience crisp, warm, and quick."
          />

          <div className="mt-8 grid gap-4">
            {[
              { icon: MapPin, label: '88 Emerald Avenue, Jakarta Creative District' },
              { icon: Phone, label: '+62 85819134959' },
              { icon: Mail, label: 'lintang2525@brewora.coffee' }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-premium dark:border-white/10 dark:bg-zinc-950">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brew-100 text-brew-800 dark:bg-brew-900 dark:text-brew-100">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-bold text-zinc-700 dark:text-zinc-200">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="grid h-12 w-12 place-items-center rounded-full bg-brew-700 text-white shadow-glow transition hover:bg-brew-800"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <form onSubmit={submit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-zinc-950 md:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-200">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="h-[52px] rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-zinc-950 outline-none transition focus:border-brew-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-200">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="h-[52px] rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-zinc-950 outline-none transition focus:border-brew-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-200">
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  className="resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-zinc-950 outline-none transition focus:border-brew-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Tell us what you need"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brew-700 px-7 text-sm font-extrabold text-white shadow-glow transition hover:bg-brew-800"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-6 pb-20 lg:grid-cols-[1fr_360px]">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-premium dark:border-white/10 dark:bg-zinc-950">
            <iframe
              title="Brewora Google Maps location"
              src="https://www.google.com/maps?q=Jakarta%20Creative%20District%20coffee&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <aside className="rounded-2xl border border-zinc-200 bg-brew-950 p-6 text-white shadow-glow dark:border-white/10">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12">
              <Clock className="h-6 w-6 text-brew-100" />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold">Opening hours</h2>
            <div className="mt-6 grid gap-4 text-sm font-semibold text-brew-50/86">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>7:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 - 20:00</span>
              </div>
            </div>
          </aside>
        </ScrollReveal>
      </section>
    </div>
  );
};
