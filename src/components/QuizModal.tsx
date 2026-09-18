import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Target, 
  Bot, 
  HelpCircle, 
  X, 
  CheckCircle2, 
  ShieldAlert, 
  Info, 
  ChevronRight, 
  RefreshCw 
} from 'lucide-react';
import type { Language } from '../types';
import { intentQuestions, ideQuestions } from '../data/quizQuestions';
import { content } from '../data/content';

interface QuizModalProps {
  modalType: 'quiz' | 'quiz_category';
  quizType: 'intent' | 'ide';
  lang: Language;
  onClose: () => void;
  onStartQuiz: (type: 'intent' | 'ide') => void;
}

export default function QuizModal({
  modalType,
  quizType,
  lang,
  onClose,
  onStartQuiz,
}: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const t = (key: string) => content[key]?.[lang] || key;
  const currentQuestions = quizType === 'intent' ? intentQuestions : ideQuestions;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
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
        className="relative w-full max-w-2xl bg-app-bg border border-app-border rounded-3xl shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-between"
      >
        {modalType === 'quiz_category' ? (
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
                <Trophy className="text-blue-500" />
                {t('quizTitle')}
              </h2>
              <button 
                onClick={onClose} 
                className="p-1 rounded-lg text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                onClick={() => onStartQuiz('intent')}
                aria-label={`${t('catIntent')}: ${t('catIntentDesc')}`}
                className="p-6 rounded-2xl border border-app-border bg-app-card hover:border-blue-500 transition-all cursor-pointer group min-h-[160px] flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{t('catIntent')}</h3>
                </div>
                <p className="text-xs text-slate-500">{t('catIntentDesc')}</p>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                onClick={() => onStartQuiz('ide')}
                aria-label={`${t('catIDE')}: ${t('catIDEDesc')}`}
                className="p-6 rounded-2xl border border-app-border bg-app-card hover:border-blue-500 transition-all cursor-pointer group min-h-[160px] flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Bot size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{t('catIDE')}</h3>
                </div>
                <p className="text-xs text-slate-500">{t('catIDEDesc')}</p>
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="p-5 sm:p-6 border-b border-app-border flex justify-between items-center bg-app-card/50">
              <h2 className="text-base sm:text-lg font-bold flex items-center gap-2">
                <HelpCircle size={20} className="text-blue-500" />
                {showResult ? t('quizResult') : `${quizType === 'intent' ? t('catIntent') : t('catIDE')} (${currentQuestion + 1}/${currentQuestions.length})`}
              </h2>
              <button 
                onClick={onClose} 
                className="p-1 rounded-lg text-slate-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
                aria-label="Close quiz modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto max-h-[70vh]">
              {!showResult ? (
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold leading-tight min-h-[56px] flex items-center">
                    {currentQuestions[currentQuestion].question[lang]}
                  </h3>
                  <div className="space-y-3 min-h-[220px]" role="radiogroup" aria-label="Quiz answer options">
                    {currentQuestions[currentQuestion].options.map((option, idx) => {
                      const isCorrect = idx === currentQuestions[currentQuestion].correct;
                      const isSelected = idx === selectedOption;
                      
                      let buttonClass = "w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ";
                      if (!isAnswered) {
                        buttonClass += "border-app-border hover:border-blue-500 hover:bg-blue-500/5 cursor-pointer";
                      } else {
                        if (isCorrect) {
                          buttonClass += "border-emerald-500 bg-emerald-500/10 text-emerald-600 font-semibold";
                        } else if (isSelected) {
                          buttonClass += "border-rose-500 bg-rose-500/10 text-rose-600 font-semibold";
                        } else {
                          buttonClass += "border-app-border opacity-50";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          role="radio"
                          aria-checked={isSelected}
                          aria-label={option[lang]}
                          disabled={isAnswered}
                          onClick={() => handleOptionSelect(idx)}
                          className={buttonClass}
                        >
                          <span className="font-medium">{option[lang]}</span>
                          {isAnswered && isCorrect && <CheckCircle2 size={18} className="shrink-0 ml-2" />}
                          {isAnswered && isSelected && !isCorrect && <ShieldAlert size={18} className="shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                  
                  <div className="flex gap-2 min-h-[24px]">
                    {currentQuestions[currentQuestion].hint && !isAnswered && (
                      <button 
                        onClick={() => setShowHint(!showHint)}
                        aria-label={t('hint')}
                        className="text-xs font-bold text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Info size={14} />
                        {t('hint')}
                      </button>
                    )}
                  </div>

                  {showHint && !isAnswered && currentQuestions[currentQuestion].hint && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg text-xs text-blue-600 italic"
                    >
                      {currentQuestions[currentQuestion].hint[lang]}
                    </motion.div>
                  )}

                  {isAnswered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className={`p-4 rounded-xl flex items-center gap-3 ${
                        selectedOption === currentQuestions[currentQuestion].correct 
                        ? 'bg-emerald-500/10 text-emerald-600' 
                        : 'bg-rose-500/10 text-rose-600'
                      }`}>
                        {selectedOption === currentQuestions[currentQuestion].correct ? (
                          <CheckCircle2 size={20} />
                        ) : (
                          <ShieldAlert size={20} />
                        )}
                        <span className="font-bold">
                          {selectedOption === currentQuestions[currentQuestion].correct ? t('quizCorrect') : t('quizWrong')}
                        </span>
                      </div>
                      
                      {currentQuestions[currentQuestion].explanation && (
                        <div className="p-4 bg-app-card border border-app-border rounded-xl">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{t('explanation')}</div>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                            {currentQuestions[currentQuestion].explanation[lang]}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-500/10 text-blue-500 mb-4">
                    <Trophy size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{t('quizScore')}</h3>
                    <div className="text-5xl font-black text-blue-500">
                      {score} <span className="text-2xl text-slate-400">/ {currentQuestions.length}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 max-w-xs mx-auto text-sm leading-relaxed">
                    {score === currentQuestions.length 
                      ? "Perfect! You are a Master Architect!" 
                      : score >= currentQuestions.length * 0.7 
                      ? "Great job! You have a solid understanding." 
                      : "Good effort! Review the materials to improve."}
                  </p>
                </div>
              )}
            </div>

            <div className="p-5 sm:p-6 bg-app-card/50 border-t border-app-border">
              {!showResult ? (
                <button
                  disabled={!isAnswered}
                  onClick={nextQuestion}
                  aria-label={currentQuestion === currentQuestions.length - 1 ? t('quizFinish') : t('quizNext')}
                  className={`w-full py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isAnswered 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow-md shadow-blue-600/20' 
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>{currentQuestion === currentQuestions.length - 1 ? t('quizFinish') : t('quizNext')}</span>
                  <ChevronRight size={20} />
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => onStartQuiz('intent')}
                    aria-label="Change Category"
                    className="flex-1 py-3.5 sm:py-4 bg-app-card hover:bg-app-bg text-app-text border border-app-border rounded-xl font-bold transition-all cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Change Category
                  </button>
                  <button
                    onClick={restartQuiz}
                    aria-label={t('quizRestart')}
                    className="flex-1 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer text-sm shadow-md shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <RefreshCw size={18} />
                    <span>{t('quizRestart')}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
