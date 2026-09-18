import { motion } from 'motion/react';

export default function ModalSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-app-bg border border-app-border rounded-3xl shadow-2xl overflow-hidden min-h-[420px] p-6 sm:p-8 flex flex-col justify-between"
      >
        <div className="space-y-4 animate-pulse">
          <div className="flex items-center justify-between pb-4 border-b border-app-border">
            <div className="h-6 w-48 bg-slate-500/20 rounded-lg" />
            <div className="h-6 w-6 bg-slate-500/20 rounded-md" />
          </div>
          <div className="space-y-3 pt-2">
            <div className="h-4 w-3/4 bg-slate-500/15 rounded-md" />
            <div className="h-16 w-full bg-slate-500/10 rounded-xl" />
            <div className="h-16 w-full bg-slate-500/10 rounded-xl" />
            <div className="h-16 w-full bg-slate-500/10 rounded-xl" />
          </div>
        </div>
        <div className="h-10 w-full bg-slate-500/20 rounded-xl animate-pulse mt-6" />
      </motion.div>
    </div>
  );
}
