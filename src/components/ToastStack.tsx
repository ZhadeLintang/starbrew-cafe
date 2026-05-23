import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info, XCircle } from 'lucide-react';
import { useBreworaStore, type ToastKind } from '../store/useBreworaStore';

const iconByKind: Record<ToastKind, typeof CheckCircle2> = {
  success: CheckCircle2,
  info: Info,
  error: XCircle
};

export const ToastStack = () => {
  const toasts = useBreworaStore((state) => state.toasts);

  return (
    <div className="fixed right-4 top-24 z-[70] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = iconByKind[toast.kind];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, scale: 0.96 }}
              className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 p-4 text-sm font-semibold text-zinc-900 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90 dark:text-white"
            >
              <Icon className="h-5 w-5 text-brew-700 dark:text-brew-300" />
              {toast.message}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
