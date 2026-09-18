import { motion } from 'motion/react';
import { 
  Sparkles, 
  Library, 
  Gamepad2, 
  Bot, 
  X, 
  ExternalLink 
} from 'lucide-react';
import type { Language, ModalType } from '../types';
import { content } from '../data/content';
import { 
  handbookItems, 
  contextHandbookItems, 
  intentHandbookItems, 
  pivPlanItems, 
  pivImplementItems, 
  pivValidateItems 
} from '../data/handbookData';

interface GuideModalProps {
  modalType: ModalType;
  lang: Language;
  onClose: () => void;
}

export default function GuideModal({
  modalType,
  lang,
  onClose
}: GuideModalProps) {
  if (!modalType || modalType === 'quiz' || modalType === 'quiz_category') {
    return null;
  }

  const t = (key: string) => content[key]?.[lang] || key;

  const getTitle = () => {
    switch (modalType) {
      case 'prompting': return t('handbookTitle');
      case 'context': return t('contextTitle');
      case 'intent': return t('intentTitle');
      case 'piv_plan': return t('pivPlanTitle');
      case 'piv_implement': return t('pivImplementTitle');
      case 'piv_validate': return t('pivValidateTitle');
      default: return '';
    }
  };

  const getItems = () => {
    switch (modalType) {
      case 'prompting': return handbookItems;
      case 'context': return contextHandbookItems;
      case 'intent': return intentHandbookItems;
      case 'piv_plan': return pivPlanItems;
      case 'piv_implement': return pivImplementItems;
      case 'piv_validate': return pivValidateItems;
      default: return [];
    }
  };

  const items = getItems();

  const getExternalLink = () => {
    if (modalType === 'prompting') return "https://prompt.komoe.org/";
    if (modalType === 'context') return "https://context.komoe.org/";
    return "https://docs.google.com/document/d/177AqsKT5zDdiBVCjluSmBpatwnym_OhJvkHc-FIa228/edit?usp=sharing";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-lg bg-app-bg border border-app-border rounded-3xl shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between"
      >
        <div className="flex flex-col h-full">
          <div className="p-5 sm:p-6 border-b border-app-border flex justify-between items-center bg-app-card/50">
            <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
              <Sparkles size={18} className="text-blue-500" />
              {getTitle()}
            </h3>
            <button 
              onClick={onClose} 
              className="p-1 rounded-lg text-slate-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
              aria-label="Close guide modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
            {modalType === 'prompting' && (
              <div className="space-y-2 mb-4">
                <a 
                  href="https://chatgpt.com/g/g-68e1fae925b48191a27e7f6e80b27b8e-prompt-guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={t('promptGuide')}
                  className="flex items-center justify-between p-3 rounded-xl border border-app-border bg-app-card hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs font-semibold text-blue-500 group"
                >
                  <div className="flex items-center gap-2">
                    <Bot size={16} />
                    <span>{t('promptGuide')}</span>
                  </div>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="https://prompting.komoe.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={t('promptLibrary')}
                  className="flex items-center justify-between p-3 rounded-xl border border-app-border bg-app-card hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs font-semibold text-blue-500 group"
                >
                  <div className="flex items-center gap-2">
                    <Library size={16} />
                    <span>{t('promptLibrary')}</span>
                  </div>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="https://superdesign.komoe.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={t('superDesignLibrary')}
                  className="flex items-center justify-between p-3 rounded-xl border border-app-border bg-app-card hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs font-semibold text-blue-500 group"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} />
                    <span>{t('superDesignLibrary')}</span>
                  </div>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="https://game.komoe.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={t('promptGame')}
                  className="flex items-center justify-between p-3 rounded-xl border border-app-border bg-app-card hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xs font-semibold text-blue-500 group"
                >
                  <div className="flex items-center gap-2">
                    <Gamepad2 size={16} />
                    <span>{t('promptGame')}</span>
                  </div>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )}

            <div className="space-y-2.5">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 p-3 rounded-xl hover:bg-blue-500/5 transition-colors border border-transparent hover:border-blue-500/20">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title[lang]}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-app-card/50 border-t border-app-border space-y-3">
            {!modalType.startsWith('piv') && (
              <a 
                href={getExternalLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={modalType === 'prompting' ? t('fullHandbook') : t('fullLecture')}
                className="w-full py-2.5 bg-app-card hover:bg-app-bg text-blue-500 text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 border border-app-border focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ExternalLink size={16} />
                <span>{modalType === 'prompting' ? t('fullHandbook') : t('fullLecture')}</span>
              </a>
            )}
            <button 
              onClick={onClose} 
              aria-label={t('closeGuide')}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t('closeGuide')}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
