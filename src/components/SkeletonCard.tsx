export const SkeletonCard = () => (
  <div className="animate-pulse overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-premium dark:border-white/10 dark:bg-zinc-950">
    <div className="aspect-[4/3] bg-zinc-200 dark:bg-white/10" />
    <div className="space-y-4 p-5">
      <div className="h-5 w-3/4 rounded-full bg-zinc-200 dark:bg-white/10" />
      <div className="space-y-2">
        <div className="h-3 rounded-full bg-zinc-200 dark:bg-white/10" />
        <div className="h-3 w-5/6 rounded-full bg-zinc-200 dark:bg-white/10" />
      </div>
      <div className="flex justify-between">
        <div className="h-8 w-20 rounded-full bg-zinc-200 dark:bg-white/10" />
        <div className="h-11 w-24 rounded-full bg-zinc-200 dark:bg-white/10" />
      </div>
    </div>
  </div>
);
