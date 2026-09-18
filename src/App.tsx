import { useState, useEffect, lazy, Suspense, startTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  ShieldAlert, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Moon, 
  Sun, 
  Copy, 
  Check, 
  Info 
} from 'lucide-react';
import type { Language, Theme, ModalType } from './types';
import { content, steps } from './data/content';
import ModalSkeleton from './components/ModalSkeleton';

const QuizModal = lazy(() => import('./components/QuizModal'));
const GuideModal = lazy(() => import('./components/GuideModal'));

export default function App() {
  const [lang, setLang] = useState<Language>('mm');
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme');
      return (saved === 'light' || saved === 'dark') ? (saved as Theme) : 'dark';
    } catch {
      return 'dark';
    }
  });
  const [activeStep, setActiveStep] = useState(1);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [quizType, setQuizType] = useState<'intent' | 'ide'>('intent');
  const [copied, setCopied] = useState(false);

  const t = (key: string) => content[key]?.[lang] || key;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalType(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLanguageChange = (newLang: Language) => {
    startTransition(() => {
      setLang(newLang);
    });
  };

  const handleStepChange = (stepId: number) => {
    startTransition(() => {
      setActiveStep(stepId);
    });
  };

  const openQuizCategory = () => {
    setModalType('quiz_category');
  };

  const startQuiz = (type: 'intent' | 'ide') => {
    setQuizType(type);
    setModalType('quiz');
  };

  const copyTemplate = () => {
    const template = steps.map(s => {
      const title = s.title.en.split('. ')[1];
      return `${title}: [Your Input Here]\nExample: ${s.example.en}\n`;
    }).join('\n');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(template).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isQuizModal = modalType === 'quiz' || modalType === 'quiz_category';
  const isGuideModal = modalType && !isQuizModal;

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 bg-app-bg text-app-text transition-colors duration-300">
      {/* Header with explicit min-height to prevent CLS */}
      <header className="border-b border-app-border p-4 sticky top-0 bg-app-bg/80 backdrop-blur-md z-40 min-h-[64px]">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-tight flex items-center gap-2">
            <span className="text-blue-500">◈</span> Intent Architect
          </h1>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a 
              href="https://the-art-of-ai.komoe.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('artOfAiLink')}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-bold text-xs sm:text-sm cursor-pointer"
              title={t('artOfAiLink')}
            >
              <Sparkles size={16} />
              <span className="hidden lg:inline">{t('artOfAiLink')}</span>
            </a>
            <a 
              href="https://english.komoe.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('englishLink')}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all font-bold text-xs sm:text-sm cursor-pointer"
              title={t('englishLink')}
            >
              <BookOpen size={16} />
              <span className="hidden lg:inline">{t('englishLink')}</span>
            </a>
            <button 
              onClick={openQuizCategory}
              aria-label={t('quizStart')}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-xs sm:text-sm cursor-pointer"
            >
              <HelpCircle size={16} />
              <span className="hidden xs:inline">{t('quizStart')}</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-app-card border border-app-border text-app-text hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
              title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div className="flex bg-app-card rounded-lg p-1 border border-app-border" role="group" aria-label="Language selection">
              <button 
                onClick={() => handleLanguageChange('en')} 
                aria-label="Switch language to English"
                aria-pressed={lang === 'en'}
                className={`py-1 px-3 rounded-md text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-blue-500'}`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('mm')} 
                aria-label="Switch language to Myanmar"
                aria-pressed={lang === 'mm'}
                className={`py-1 px-3 rounded-md text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer ${lang === 'mm' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-blue-500'}`}
              >
                MM
              </button>
            </div>
            <a 
              href="https://gemini.google.com/gem/11GtO7CaDsb0qXH1elfJk2t8a01qM3rsN?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t('mentorLink')}
              className="text-slate-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 transition-colors flex items-center gap-2 text-xs font-medium"
              title={t('mentorLink')}
            >
              <span className="hidden sm:inline">{t('mentorLink')}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Exam Reminder Banner with min-height for zero CLS */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/20 shadow-md shadow-blue-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden group min-h-[88px] sm:min-h-[72px]"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-500" />
          <div className="flex items-center gap-3 text-left w-full sm:w-auto">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
              <ShieldAlert size={20} className="stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-wider uppercase text-blue-500 mb-0.5 block">
                {lang === 'en' ? "RECOMMENDED FIRST" : "အရင်ဆုံး လေ့လာရန်"}
              </span>
              <p className="text-sm text-app-text font-bold leading-snug">
                {t('examReminder')}
              </p>
            </div>
          </div>
          <a 
            href="https://quiz.komoe.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('examButton')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-500/25 transition-all text-center shrink-0 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>{t('examButton')}</span>
            <ExternalLink size={15} />
          </a>
        </motion.div>

        {/* Hero Section with explicit min-height for zero CLS */}
        <section className="mb-12 text-center min-h-[140px] sm:min-h-[120px] flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
          >
            <span>{t('heroTitle1')}</span><br />
            <span className="text-blue-500">{t('heroTitle2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed"
          >
            {t('heroDesc')}
          </motion.p>
        </section>

        {/* The 3 Layers Visual with min-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16" role="region" aria-label="3 Layers of AI Interaction">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            onClick={() => setModalType('prompting')}
            aria-label={`${t('layer1')}: ${t('prompting')} - ${t('clickToLearn')}`}
            className="p-5 rounded-xl border border-app-border bg-app-card hover:border-blue-500/50 cursor-pointer transition-all group min-h-[108px] flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">{t('layer1')}</div>
            <h3 className="text-base font-semibold mb-1 flex items-center justify-between w-full">
              <span>{t('prompting')}</span>
              <span className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex items-center gap-1">
                {t('clickToLearn')}
              </span>
            </h3>
            <p className="text-xs text-slate-500">{t('promptingDesc')}</p>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            onClick={() => setModalType('context')}
            aria-label={`${t('layer2')}: ${t('context')} - ${t('clickToLearn')}`}
            className="p-5 rounded-xl border border-app-border bg-app-card hover:border-blue-500/50 cursor-pointer transition-all group min-h-[108px] flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">{t('layer2')}</div>
            <h3 className="text-base font-semibold mb-1 flex items-center justify-between w-full">
              <span>{t('context')}</span>
              <span className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex items-center gap-1">
                {t('clickToLearn')}
              </span>
            </h3>
            <p className="text-xs text-slate-500">{t('contextDesc')}</p>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            onClick={() => setModalType('intent')}
            aria-label={`${t('layer3')}: ${t('intent')} - ${t('clickToLearn')}`}
            className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50 cursor-pointer transition-all group min-h-[108px] flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="text-[10px] font-bold text-blue-400 uppercase mb-1">{t('layer3')}</div>
            <h3 className="text-base font-semibold mb-1 flex items-center justify-between w-full">
              <span>{t('intent')}</span>
              <span className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex items-center gap-1">
                {t('clickToLearn')}
              </span>
            </h3>
            <p className="text-xs text-slate-500">{t('intentDesc')}</p>
          </motion.button>
        </div>

        {/* The 7-Component Workshop with fixed min-height avoiding layout shift on tab change */}
        <section className="mb-16" aria-labelledby="framework-heading">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5 space-y-1" role="tablist" aria-orientation="vertical" aria-labelledby="framework-heading">
              <h3 id="framework-heading" className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 px-2">{t('frameworkTitle')}</h3>
              {steps.map((step) => (
                <button
                  key={step.id}
                  role="tab"
                  aria-selected={activeStep === step.id}
                  aria-label={step.title[lang]}
                  onClick={() => handleStepChange(step.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all cursor-pointer flex items-center gap-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    activeStep === step.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'text-slate-500 hover:text-app-text hover:bg-app-card'
                  }`}
                >
                  <step.icon size={16} className={activeStep === step.id ? 'text-white' : 'text-slate-400'} />
                  <span>{step.title[lang]}</span>
                </button>
              ))}
            </div>

            <div className="md:w-3/5 glass-card p-6 rounded-2xl min-h-[350px] overflow-hidden flex flex-col justify-center relative" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.12 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-500/10 text-blue-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {steps[activeStep - 1].subtitle[lang]}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    {steps[activeStep - 1].title[lang].split('။ ')[1] || steps[activeStep - 1].title[lang].split('. ')[1] || steps[activeStep - 1].title[lang]}
                  </h4>
                  <p className="text-slate-500 leading-relaxed mb-6 text-base">
                    {steps[activeStep - 1].desc[lang]}
                  </p>
                  <div className="bg-app-bg p-4 rounded-xl border border-app-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {lang === 'en' ? 'EXAMPLE' : 'ဥပမာ'}
                      </span>
                    </div>
                    <p className="italic text-sm text-slate-500 leading-relaxed">
                      {steps[activeStep - 1].example[lang]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="mb-16 flex flex-col items-center min-h-[48px]">
          <button 
            onClick={copyTemplate}
            aria-label={copied ? t('copied') : t('copyTemplate')}
            className="flex items-center gap-2 bg-app-card hover:bg-app-bg text-app-text px-6 py-3 rounded-xl border border-app-border transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-slate-400 group-hover:text-blue-500" />}
            <span className="text-sm font-semibold">{copied ? t('copied') : t('copyTemplate')}</span>
          </button>
        </section>

        {/* PIV Loop Summary with min-height cards */}
        <section className="bg-app-card rounded-2xl p-8 border border-app-border mb-16" aria-labelledby="piv-heading">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <div className="h-px w-8 bg-app-border" />
            <h2 id="piv-heading" className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">{t('pivTitle')}</h2>
            <div className="h-px w-8 bg-app-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              onClick={() => setModalType('piv_plan')}
              aria-label={`PLAN: ${t('pivPlan')}`}
              className="p-4 rounded-xl border border-app-border bg-app-bg text-center cursor-pointer hover:border-blue-500/50 transition-all group min-h-[84px] flex flex-col justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="font-bold text-blue-500 mb-1 text-sm flex items-center justify-center gap-2">
                PLAN
                <Info size={12} className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
              </h3>
              <p className="text-[11px] text-slate-500">{t('pivPlan')}</p>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              onClick={() => setModalType('piv_implement')}
              aria-label={`IMPLEMENT: ${t('pivImplement')}`}
              className="p-4 rounded-xl border border-app-border bg-app-bg text-center cursor-pointer hover:border-blue-500/50 transition-all group min-h-[84px] flex flex-col justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="font-bold text-blue-500 mb-1 text-sm flex items-center justify-center gap-2">
                IMPLEMENT
                <Info size={12} className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
              </h3>
              <p className="text-[11px] text-slate-500">{t('pivImplement')}</p>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              onClick={() => setModalType('piv_validate')}
              aria-label={`VALIDATE: ${t('pivValidate')}`}
              className="p-4 rounded-xl border border-app-border bg-app-bg text-center cursor-pointer hover:border-blue-500/50 transition-all group min-h-[84px] flex flex-col justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="font-bold text-blue-500 mb-1 text-sm flex items-center justify-center gap-2">
                VALIDATE
                <Info size={12} className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
              </h3>
              <p className="text-[11px] text-slate-500">{t('pivValidate')}</p>
            </motion.button>
          </div>
        </section>
      </main>

      {/* DYNAMIC CODE SPLITTING MODALS WRAPPED IN SUSPENSE */}
      <AnimatePresence>
        {isQuizModal && (
          <Suspense fallback={<ModalSkeleton />}>
            <QuizModal
              modalType={modalType}
              quizType={quizType}
              lang={lang}
              onClose={() => setModalType(null)}
              onStartQuiz={startQuiz}
            />
          </Suspense>
        )}

        {isGuideModal && (
          <Suspense fallback={<ModalSkeleton />}>
            <GuideModal
              modalType={modalType}
              lang={lang}
              onClose={() => setModalType(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>

      <footer className="py-10 text-center flex flex-col items-center gap-4 min-h-[96px]">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-semibold text-slate-500">
          <a 
            href="https://the-art-of-ai.komoe.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="The Art of AI"
            className="flex items-center gap-1.5 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 transition-colors"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span>The Art of AI</span>
            <ExternalLink size={12} />
          </a>
          <span className="text-slate-600 dark:text-slate-700" aria-hidden="true">•</span>
          <a 
            href="https://english.komoe.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={t('englishLink')}
            className="flex items-center gap-1.5 hover:text-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded px-1 transition-colors"
          >
            <BookOpen size={14} className="text-violet-500" />
            <span>{t('englishLink')}</span>
            <ExternalLink size={12} />
          </a>
          <span className="text-slate-600 dark:text-slate-700" aria-hidden="true">•</span>
          <a 
            href="https://quiz.komoe.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={t('examButton')}
            className="flex items-center gap-1.5 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 transition-colors"
          >
            <ShieldAlert size={14} className="text-blue-500" />
            <span>{t('examButton')}</span>
            <ExternalLink size={12} />
          </a>
        </div>
        <p className="text-slate-500 text-[11px] uppercase tracking-widest">
          {t('footer')}
        </p>
      </footer>
    </div>
  );
}
