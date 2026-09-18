import type { ComponentType } from 'react';

export type Language = 'en' | 'mm';
export type Theme = 'light' | 'dark';

export type ModalType = 
  | null 
  | 'prompting' 
  | 'context' 
  | 'intent' 
  | 'piv_plan' 
  | 'piv_implement' 
  | 'piv_validate' 
  | 'quiz' 
  | 'quiz_category';

export interface Translation {
  [key: string]: {
    en: string;
    mm: string;
  };
}

export interface QuizQuestion {
  question: { en: string; mm: string };
  options: { en: string; mm: string }[];
  correct: number;
  hint?: { en: string; mm: string };
  explanation: { en: string; mm: string };
}

export interface HandbookItem {
  title: { en: string; mm: string };
  desc: { en: string; mm: string };
}

export interface StepItem {
  id: number;
  title: { en: string; mm: string };
  subtitle: { en: string; mm: string };
  desc: { en: string; mm: string };
  example: { en: string; mm: string };
  icon: ComponentType<{ size?: number; className?: string }>;
}
