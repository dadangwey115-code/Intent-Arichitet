/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Info, Library, X, Target, CheckCircle2, Activity, Compass, ShieldAlert, UserCheck, Octagon, Copy, Check, Sun, Moon, Bot, HelpCircle, Trophy, RefreshCw, ChevronRight, Languages } from 'lucide-react';

type ModalType = null | 'prompting' | 'context' | 'intent' | 'piv_plan' | 'piv_implement' | 'piv_validate' | 'quiz' | 'quiz_category';

type Language = 'en' | 'mm';
type Theme = 'light' | 'dark';

interface Translation {
  [key: string]: {
    en: string;
    mm: string;
  };
}

interface QuizQuestion {
  question: { en: string; mm: string };
  options: { en: string; mm: string }[];
  correct: number;
  hint?: { en: string; mm: string };
  explanation: { en: string; mm: string };
}

const content: Translation = {
  // ... existing content ...
  quizCategoryTitle: { en: "Choose Quiz Category", mm: "ဉာဏ်စမ်းအမျိုးအစား ရွေးချယ်ပါ" },
  catIntent: { en: "Intent Engineering", mm: "Intent Engineering" },
  catIDE: { en: "Google Antigravity IDE", mm: "Google Antigravity IDE" },
  hint: { en: "Hint", mm: "အရိပ်အမြွက်" },
  explanation: { en: "Explanation", mm: "ရှင်းလင်းချက်" },
  heroTitle1: { en: "Don't just prompt.", mm: "Prompt တစ်ခုတည်းနဲ့ မလုံလောက်ပါဘူး။" },
  heroTitle2: { en: "Engineer the Intent.", mm: "AI ရဲ့ ရည်ရွယ်ချက် (Intent) ကို ပုံဖော်ပါ။" },
  heroDesc: { 
    en: "Prompting is what you say. Context is what you know. Intent is what you want. Focus on the goal, not just the words.",
    mm: "Prompt က သင်ပြောတဲ့စကား။ Context က သင်သိတဲ့အချက်အလက်။ Intent ကတော့ သင်တကယ်လိုချင်တဲ့ရလဒ်ပါ။ စကားလုံးတွေထက် ပန်းတိုင်ကို အဓိကထား ပုံဖော်ပါ။"
  },
  layer1: { en: "Layer 1: Prompting", mm: "အဆင့် ၁ - Prompting" },
  layer2: { en: "Layer 2: Context", mm: "အဆင့် ၂ - Context" },
  layer3: { en: "Layer 3: Intent", mm: "အဆင့် ၃ - Intent" },
  prompting: { en: "The Words", mm: "အသုံးအနှုန်း" },
  context: { en: "The Knowledge", mm: "အချက်အလက်" },
  intent: { en: "The Goal", mm: "ပန်းတိုင်" },
  clickToLearn: { en: "Quick Guide", mm: "လက်စွဲကြည့်ရန်" },
  promptingDesc: { en: "What words should I use?", mm: "ဘယ်လိုစကားလုံးတွေ သုံးရမလဲ?" },
  contextDesc: { en: "What info does the AI need?", mm: "AI သိဖို့ ဘာတွေလိုအပ်မလဲ?" },
  intentDesc: { en: "What does success look like?", mm: "တကယ်လိုချင်တဲ့ ရလဒ်က ဘာလဲ?" },
  frameworkTitle: { en: "The 7 Components", mm: "အဓိက အစိတ်အပိုင်း ၇ ခု" },
  mentorLink: { en: "Ai Guide", mm: "Ai Guide" },
  pivTitle: { en: "The PIV Loop", mm: "PIV Loop လုပ်ငန်းစဉ်" },
  pivPlan: { en: "Plan the Intent", mm: "ရည်ရွယ်ချက်ကို စီစဉ်ပါ" },
  pivImplement: { en: "Build the Solution", mm: "အကောင်အထည်ဖော်ပါ" },
  pivValidate: { en: "Check the Result", mm: "ရလဒ်ကို စစ်ဆေးပါ" },
  footer: { 
    en: "Simplified guide based on DIY Smart Code's Intent Engineering framework.",
    mm: "DIY Smart Code ၏ Intent Engineering မူဘောင်ကို အခြေခံ၍ ရိုးရှင်းစွာ တင်ပြထားခြင်း ဖြစ်သည်။"
  },
  handbookTitle: { en: "Prompting Cheat Sheet", mm: "Prompting အမြန်လမ်းညွှန်" },
  contextTitle: { en: "Context Quick Guide", mm: "Context အမြန်လမ်းညွှန်" },
  intentTitle: { en: "Intent Quick Guide", mm: "Intent အမြန်လမ်းညွှန်" },
  pivPlanTitle: { en: "PIV: Plan Guide", mm: "PIV: စီစဉ်ခြင်း လမ်းညွှန်" },
  pivImplementTitle: { en: "PIV: Implement Guide", mm: "PIV: အကောင်အထည်ဖော်ခြင်း လမ်းညွှန်" },
  pivValidateTitle: { en: "PIV: Validate Guide", mm: "PIV: စစ်ဆေးခြင်း လမ်းညွှန်" },
  closeGuide: { en: "Got it", mm: "နားလည်ပါပြီ" },
  fullHandbook: { en: "Read Full Handbook", mm: "လက်စွဲအပြည့်အစုံဖတ်ရန်" },
  fullLecture: { en: "Read Full Lecture", mm: "သင်ခန်းစာအပြည့်အစုံဖတ်ရန်" },
  promptGuide: { en: "Prompt Guide AI", mm: "Prompt လမ်းညွှန် AI" },
  promptLibrary: { en: "Prompt Library", mm: "Prompt Library" },
  copyTemplate: { en: "Copy Intent Template", mm: "Template ကို ကူးယူပါ" },
  copied: { en: "Copied!", mm: "ကူးယူပြီးပါပြီ!" },
  quizTitle: { en: "Intent Engineering Quiz", mm: "Intent Engineering ဉာဏ်စမ်း" },
  quizStart: { en: "Take Quiz", mm: "ဉာဏ်စမ်းဖြေဆိုရန်" },
  quizNext: { en: "Next Question", mm: "နောက်တစ်ဆင့်" },
  quizFinish: { en: "Finish Quiz", mm: "ပြီးဆုံးပါပြီ" },
  quizScore: { en: "Your Score", mm: "သင့်ရမှတ်" },
  quizRestart: { en: "Restart Quiz", mm: "ပြန်လည်ဖြေဆိုရန်" },
  quizCorrect: { en: "Correct!", mm: "မှန်ကန်ပါတယ်!" },
  quizWrong: { en: "Wrong Answer", mm: "မှားယွင်းနေပါတယ်" },
  quizResult: { en: "Quiz Result", mm: "ဉာဏ်စမ်းရလဒ်" },
  englishLink: { en: "Learn English Skills", mm: "အင်္ဂလိပ်စာ လေ့လာရန်" }
};

const steps = [
  {
    id: 1,
    title: { en: "1. Objective", mm: "၁။ ပန်းတိုင် (Objective)" },
    subtitle: { en: "The 'Why'", mm: "ဘာကြောင့် လုပ်တာလဲ" },
    desc: { 
      en: "Define the core problem. Why are you doing this? If the AI doesn't know the 'why', it will give lazy answers.",
      mm: "အဓိကဖြေရှင်းချင်တဲ့ ပြဿနာကို သတ်မှတ်ပါ။ 'ဘာကြောင့်' လုပ်တာလဲဆိုတာ ရှင်းလင်းမှ AI က အလွယ်မဖြေဘဲ အကောင်းဆုံး ဖြေပေးမှာပါ။"
    },
    example: {
      en: "Objective: Help the CEO decide on a budget in 5 minutes by showing key risks.",
      mm: "ပန်းတိုင် - အန္တရာယ်ရှိနိုင်တဲ့ အချက်တွေကို ပြပေးပြီး CEO ကို ၅ မိနစ်အတွင်း ဘတ်ဂျက်ဆုံးဖြတ်ချက် ချနိုင်အောင် ကူညီပါ။"
    },
    icon: Target
  },
  {
    id: 2,
    title: { en: "2. Outcomes", mm: "၂။ ရလဒ် (Outcomes)" },
    subtitle: { en: "The 'What'", mm: "ဘာတွေ ထွက်လာမလဲ" },
    desc: { 
      en: "What exactly do you want to see at the end? Be specific about the final output.",
      mm: "အလုပ်ပြီးသွားရင် ဘယ်လိုရလဒ်မျိုးကို လက်တွေ့မြင်ချင်တာလဲ? ထွက်လာမယ့် output ကို တိတိကျကျ ပြောပြပါ။"
    },
    example: {
      en: "Outcome: A 3-column table comparing costs, benefits, and risks of 3 options.",
      mm: "ရလဒ် - ရွေးချယ်စရာ ၃ ခုရဲ့ ကုန်ကျစရိတ်၊ အကျိုးကျေးဇူးနဲ့ အန္တရာယ်တွေကို နှိုင်းယှဉ်ထားတဲ့ ဇယားတစ်ခု။"
    },
    icon: CheckCircle2
  },
  {
    id: 3,
    title: { en: "3. Metrics", mm: "၃။ တိုင်းတာချက် (Metrics)" },
    subtitle: { en: "The Quality", mm: "အရည်အသွေး စံနှုန်း" },
    desc: { 
      en: "What are the 'Must-Haves'? What should NOT be sacrificed (e.g., speed, accuracy, or safety)?",
      mm: "ဘယ်အချက်တွေက မဖြစ်မနေ ပါရမလဲ? အရည်အသွေး မကျသွားအောင် ဘယ်အရာတွေကို အဓိက စောင့်ကြည့်ရမလဲ?"
    },
    example: {
      en: "Metric: Data must be 100% accurate. Tone must be professional and neutral.",
      mm: "တိုင်းတာချက် - အချက်အလက် ၁၀၀% မှန်ရမယ်။ လေသံကတော့ ရုံးသုံးလေသံ ဖြစ်ရမယ်။"
    },
    icon: Activity
  },
  {
    id: 4,
    title: { en: "4. Context", mm: "၄။ နောက်ခံ (Context)" },
    subtitle: { en: "The Situation", mm: "လက်ရှိ အခြေအနေ" },
    desc: { 
      en: "What is the current situation? Give the AI the background info it needs to act smart.",
      mm: "လက်ရှိ ဘာတွေဖြစ်နေလဲ? AI က ပိုပြီး ထက်ထက်မြက်မြက် လုပ်ဆောင်နိုင်ဖို့ လိုအပ်တဲ့ နောက်ခံအချက်အလက်တွေ ပေးပါ။"
    },
    example: {
      en: "Context: We are a startup with a $10k budget looking to expand to Asia.",
      mm: "နောက်ခံ - ကျွန်တော်တို့က အာရှကို ဈေးကွက်ချဲ့ချင်တဲ့ ဘတ်ဂျက် ဒေါ်လာ ၁ သောင်းရှိတဲ့ startup တစ်ခုပါ။"
    },
    icon: Compass
  },
  {
    id: 5,
    title: { en: "5. Constraints", mm: "၅။ ကန့်သတ်ချက် (Constraints)" },
    subtitle: { en: "The 'No-Go's", mm: "မလုပ်ရမည့်အရာများ" },
    desc: { 
      en: "What are the rules? What should the AI avoid doing at all costs?",
      mm: "ဘယ်လို စည်းကမ်းတွေ ရှိလဲ? AI အနေနဲ့ ဘာတွေကို လုံးဝ ရှောင်ကြဉ်ရမလဲ?"
    },
    example: {
      en: "Constraint: Do not use technical jargon. Keep the answer under 200 words.",
      mm: "ကန့်သတ်ချက် - နည်းပညာစကားလုံးတွေ မသုံးပါနဲ့။ အဖြေကို စကားလုံး ၂၀၀ အောက်မှာပဲ ထားပါ။"
    },
    icon: ShieldAlert
  },
  {
    id: 6,
    title: { en: "6. Autonomy", mm: "၆။ လုပ်ပိုင်ခွင့် (Autonomy)" },
    subtitle: { en: "The Control", mm: "ထိန်းချုပ်မှု အဆင့်" },
    desc: { 
      en: "How much can the AI decide on its own? Should it ask you before taking action?",
      mm: "AI က သူ့ဘာသာသူ ဘယ်လောက်အထိ ဆုံးဖြတ်ခွင့်ရှိလဲ? တစ်ခုခု မလုပ်ခင် သင့်ကို အရင်မေးဖို့ လိုသလား?"
    },
    example: {
      en: "Autonomy: Suggest the best option, but do not finalize without my approval.",
      mm: "လုပ်ပိုင်ခွင့် - အကောင်းဆုံးတစ်ခုကို အကြံပေးပါ၊ ဒါပေမဲ့ ကျွန်တော် အတည်မပြုမချင်း အပြီးမသတ်ပါနဲ့။"
    },
    icon: UserCheck
  },
  {
    id: 7,
    title: { en: "7. Stop Rules", mm: "၇။ ရပ်တန့်ရန် (Stop Rules)" },
    subtitle: { en: "The Red Flags", mm: "အန္တရာယ် အချက်ပြမှု" },
    desc: { 
      en: "When should the AI stop immediately? What triggers an emergency exit?",
      mm: "ဘယ်လို အခြေအနေမျိုးမှာ AI က ချက်ချင်း ရပ်တန့်ရမလဲ? ဘယ်အချက်တွေက အလုပ်ဆက်မလုပ်သင့်တဲ့ အချက်တွေလဲ?"
    },
    example: {
      en: "Stop Rule: If the cost calculation goes over budget, stop and alert me.",
      mm: "ရပ်တန့်ရန် - တွက်ချက်မှုက ဘတ်ဂျက်ကျော်သွားရင် ချက်ချင်းရပ်ပြီး ကျွန်တော့်ကို အကြောင်းကြားပါ။"
    },
    icon: Octagon
  }
];

const handbookItems = [
  {
    title: { en: "Role", mm: "အခန်းကဏ္ဍ (Role)" },
    desc: { en: "Who is the AI? (e.g. Senior Developer, Expert Marketer)", mm: "AI က ဘယ်သူ့နေရာကနေ ပြောရမလဲ? (ဥပမာ - ကျွမ်းကျင် developer၊ ဈေးကွက်ကျွမ်းကျင်သူ)" }
  },
  {
    title: { en: "Task", mm: "လုပ်ငန်းစဉ် (Task)" },
    desc: { en: "What exactly should it do? (e.g. Write code, Summarize)", mm: "ဘာလုပ်ရမလဲ? (ဥပမာ - ကုဒ်ရေးပါ၊ အကျဉ်းချုပ်ပါ)" }
  },
  {
    title: { en: "Context", mm: "နောက်ခံ (Context)" },
    desc: { en: "Background info. (e.g. For a 5-year old, for a CEO)", mm: "လိုအပ်တဲ့ နောက်ခံအချက်အလက်။ (ဥပမာ - ကလေးတစ်ယောက်အတွက်၊ CEO အတွက်)" }
  },
  {
    title: { en: "Format", mm: "ပုံစံ (Format)" },
    desc: { en: "How should it look? (e.g. Table, List, JSON)", mm: "ဘယ်လိုပုံစံနဲ့ ထွက်လာရမလဲ? (ဥပမာ - ဇယား၊ စာရင်း၊ JSON)" }
  }
];

const contextHandbookItems = [
  {
    title: { en: "Background", mm: "နောက်ခံ (Background)" },
    desc: { en: "What is the current situation? (e.g. We are launching a new app)", mm: "လက်ရှိအခြေအနေက ဘာလဲ? (ဥပမာ - app အသစ်တစ်ခု စတင်မိတ်ဆက်နေသည်)" }
  },
  {
    title: { en: "Data", mm: "အချက်အလက် (Data)" },
    desc: { en: "What raw info does the AI have? (e.g. Sales reports, User feedback)", mm: "AI မှာ ဘယ်လိုအချက်အလက်တွေ ရှိသလဲ? (ဥပမာ - အရောင်းအစီရင်ခံစာ၊ သုံးစွဲသူတုံ့ပြန်ချက်)" }
  },
  {
    title: { en: "Audience", mm: "ပရိသတ် (Audience)" },
    desc: { en: "Who is the final user? (e.g. Non-technical users, Investors)", mm: "ဒါက ဘယ်သူ့အတွက်လဲ? (ဥပမာ - နည်းပညာမကျွမ်းကျင်သူများ၊ ရင်းနှီးမြှုပ်နှံသူများ)" }
  },
  {
    title: { en: "Style", mm: "ပုံစံ (Style)" },
    desc: { en: "What tone or format is needed? (e.g. Simple, Professional, Creative)", mm: "ဘယ်လိုလေသံမျိုး သုံးရမလဲ? (ဥပမာ - ရိုးရှင်းသော၊ ရုံးသုံး၊ ဖန်တီးမှုပါသော)" }
  }
];

const intentHandbookItems = [
  {
    title: { en: "Objective", mm: "ပန်းတိုင် (Objective)" },
    desc: { en: "What is the core problem? Why does it matter?", mm: "အဓိကပြဿနာက ဘာလဲ? ဘာကြောင့် အရေးကြီးတာလဲ?" }
  },
  {
    title: { en: "Outcomes", mm: "ရလဒ် (Outcomes)" },
    desc: { en: "What are the specific deliverables?", mm: "ဘယ်လိုရလဒ်တွေ ထွက်လာရမလဲ?" }
  },
  {
    title: { en: "Metrics", mm: "တိုင်းတာချက် (Metrics)" },
    desc: { en: "How do we measure success and quality?", mm: "အောင်မြင်မှုနဲ့ အရည်အသွေးကို ဘယ်လိုတိုင်းတာမလဲ?" }
  },
  {
    title: { en: "Constraints", mm: "ကန့်သတ်ချက် (Constraints)" },
    desc: { en: "What are the boundaries and rules?", mm: "ဘယ်လိုစည်းကမ်းတွေ၊ ဘောင်တွေရှိလဲ?" }
  }
];

const pivPlanItems = [
  {
    title: { en: "Define Objective", mm: "ပန်းတိုင်ကို သတ်မှတ်ပါ" },
    desc: { en: "Clearly state the core problem you are trying to solve.", mm: "သင်ဖြေရှင်းလိုသော အဓိကပြဿနာကို ရှင်းလင်းစွာဖော်ပြပါ။" }
  },
  {
    title: { en: "Map Context", mm: "Context ကို စုစည်းပါ" },
    desc: { en: "Identify all background info the AI needs to know.", mm: "AI သိထားသင့်သော နောက်ခံအချက်အလက်အားလုံးကို ရှာဖွေပါ။" }
  },
  {
    title: { en: "Set Constraints", mm: "ကန့်သတ်ချက်များ ချမှတ်ပါ" },
    desc: { en: "Define the rules, boundaries, and what to avoid.", mm: "စည်းကမ်းများ၊ ဘောင်များနှင့် ရှောင်ကြဉ်ရမည့်အရာများကို သတ်မှတ်ပါ။" }
  }
];

const pivImplementItems = [
  {
    title: { en: "Assemble Components", mm: "အစိတ်အပိုင်းများကို စုစည်းပါ" },
    desc: { en: "Use the 7-component framework to build your prompt.", mm: "သင်၏ prompt ကို တည်ဆောက်ရန် 7-component framework ကိုသုံးပါ။" }
  },
  {
    title: { en: "Execute & Observe", mm: "စမ်းသပ်ပြီး လေ့လာပါ" },
    desc: { en: "Run the prompt and watch how the AI reasons.", mm: "Prompt ကို run ပြီး AI မည်သို့စဉ်းစားသည်ကို စောင့်ကြည့်ပါ။" }
  },
  {
    title: { en: "Document Behavior", mm: "ပြုမူပုံကို မှတ်တမ်းတင်ပါ" },
    desc: { en: "Note where the AI succeeded or failed to follow intent.", mm: "AI က သင်ဖြစ်စေချင်သည့်အတိုင်း လုပ်/မလုပ် မှတ်သားပါ။" }
  }
];

const pivValidateItems = [
  {
    title: { en: "Score Quality", mm: "အရည်အသွေးကို တိုင်းတာပါ" },
    desc: { en: "Compare the result against your defined metrics.", mm: "ရလဒ်ကို သင်သတ်မှတ်ထားသော တိုင်းတာချက်များနှင့် နှိုင်းယှဉ်ပါ။" }
  },
  {
    title: { en: "Identify Gaps", mm: "လိုအပ်ချက်များကို ရှာဖွေပါ" },
    desc: { en: "Pinpoint exactly where the output fell short.", mm: "ရလဒ်တွင် မည်သည့်နေရာ၌ လိုအပ်ချက်ရှိသည်ကို တိကျစွာရှာဖွေပါ။" }
  },
  {
    title: { en: "Refine Loop", mm: "ပြန်လည်ပြုပြင်ပါ" },
    desc: { en: "Decide if you need to adjust the Plan or Implementation.", mm: "စီစဉ်မှု သို့မဟုတ် အကောင်အထည်ဖော်မှုကို ပြင်ဆင်ရန် ဆုံးဖြတ်ပါ။" }
  }
];

const intentQuestions: QuizQuestion[] = [
  {
    question: { en: "Layer 1: Prompting is primarily about...", mm: "အဆင့် ၁ - Prompting က ဘာကို အဓိကထားတာလဲ?" },
    options: [
      { en: "What you want", mm: "သင်လိုချင်တဲ့အရာ" },
      { en: "What you know", mm: "သင်သိတဲ့အချက်အလက်" },
      { en: "The words you use", mm: "သင်သုံးတဲ့ စကားလုံးတွေ" }
    ],
    correct: 2,
    explanation: { en: "Prompting is the surface layer where you choose the specific words and phrasing.", mm: "Prompting ဆိုတာ စကားလုံးတွေနဲ့ အသုံးအနှုန်းတွေကို ရွေးချယ်တဲ့ အပေါ်ယံအဆင့် ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "Layer 2: Context is defined as...", mm: "အဆင့် ၂ - Context ဆိုတာ ဘာလဲ?" },
    options: [
      { en: "The Knowledge/Background", mm: "အသိပညာနဲ့ နောက်ခံအချက်အလက်" },
      { en: "The Final Goal", mm: "နောက်ဆုံးပန်းတိုင်" },
      { en: "The Specific Prompt", mm: "တိကျတဲ့ Prompt" }
    ],
    correct: 0,
    explanation: { en: "Context provides the background information and knowledge the AI needs to understand the situation.", mm: "Context ဆိုတာ AI က အခြေအနေကို နားလည်ဖို့ လိုအပ်တဲ့ နောက်ခံအချက်အလက်တွေ ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "Layer 3: Intent focuses on...", mm: "အဆင့် ၃ - Intent က ဘာကို အဓိကထားတာလဲ?" },
    options: [
      { en: "The Words", mm: "စကားလုံးတွေ" },
      { en: "The Goal/Success", mm: "ပန်းတိုင်နဲ့ အောင်မြင်မှု" },
      { en: "The AI Model", mm: "AI မော်ဒယ်" }
    ],
    correct: 1,
    explanation: { en: "Intent is about the ultimate goal and what success looks like for the task.", mm: "Intent ဆိုတာ အလုပ်တစ်ခုရဲ့ နောက်ဆုံးပန်းတိုင်နဲ့ အောင်မြင်တဲ့ရလဒ်က ဘာလဲဆိုတာ ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "Which Intent component defines the core problem?", mm: "Intent ရဲ့ ဘယ်အစိတ်အပိုင်းက အဓိကပြဿနာကို သတ်မှတ်တာလဲ?" },
    options: [
      { en: "Outcomes", mm: "ရလဒ် (Outcomes)" },
      { en: "Objective", mm: "ပန်းတိုင် (Objective)" },
      { en: "Metrics", mm: "တိုင်းတာချက် (Metrics)" }
    ],
    correct: 1,
    explanation: { en: "The Objective component is where you define the 'Why' and the core problem.", mm: "Objective ဆိုတာ 'ဘာကြောင့်' လုပ်တာလဲနဲ့ အဓိကပြဿနာကို သတ်မှတ်တဲ့နေရာ ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "'A 3-column table' is an example of which component?", mm: "'ဇယားတစ်ခု' ဆိုတာ ဘယ်အစိတ်အပိုင်းရဲ့ ဥပမာလဲ?" },
    options: [
      { en: "Metrics", mm: "တိုင်းတာချက် (Metrics)" },
      { en: "Outcomes", mm: "ရလဒ် (Outcomes)" },
      { en: "Context", mm: "Context" }
    ],
    correct: 1,
    explanation: { en: "Outcomes define the specific format and deliverables of the AI's response.", mm: "Outcomes ဆိုတာ AI ဆီက ထွက်လာမယ့် တိကျတဲ့ ပုံစံနဲ့ ရလဒ်တွေကို သတ်မှတ်တာ ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "'Do not use technical jargon' is an example of...", mm: "'နည်းပညာစကားလုံးတွေ မသုံးပါနဲ့' ဆိုတာ ဘာရဲ့ ဥပမာလဲ?" },
    options: [
      { en: "Constraints", mm: "ကန့်သတ်ချက် (Constraints)" },
      { en: "Objective", mm: "ပန်းတိုင် (Objective)" },
      { en: "Metrics", mm: "တိုင်းတာချက် (Metrics)" }
    ],
    correct: 0,
    explanation: { en: "Constraints are the rules and 'no-go' zones that the AI must follow.", mm: "Constraints ဆိုတာ AI လိုက်နာရမယ့် စည်းကမ်းတွေနဲ့ ရှောင်ကြဉ်ရမယ့်အရာတွေ ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "What does the 'P' in PIV Loop stand for?", mm: "PIV Loop မှာ 'P' က ဘာကို ဆိုလိုတာလဲ?" },
    options: [
      { en: "Prompt", mm: "Prompt" },
      { en: "Plan", mm: "စီစဉ်ခြင်း (Plan)" },
      { en: "Process", mm: "လုပ်ငန်းစဉ် (Process)" }
    ],
    correct: 1,
    explanation: { en: "The PIV Loop starts with Planning the Intent before implementation.", mm: "PIV Loop ကို အကောင်အထည်မဖော်ခင် Intent ကို စီစဉ်ခြင်း (Plan) နဲ့ စတင်ပါတယ်။" }
  },
  {
    question: { en: "In the PIV loop, where do you score the quality?", mm: "PIV loop မှာ အရည်အသွေးကို ဘယ်မှာ စစ်ဆေးတာလဲ?" },
    options: [
      { en: "Plan", mm: "စီစဉ်ခြင်း (Plan)" },
      { en: "Implement", mm: "အကောင်အထည်ဖော်ခြင်း (Implement)" },
      { en: "Validate", mm: "စစ်ဆေးခြင်း (Validate)" }
    ],
    correct: 2,
    explanation: { en: "Validation is the final step where you check the results against your metrics.", mm: "Validate ဆိုတာ ရလဒ်တွေကို သတ်မှတ်ထားတဲ့ တိုင်းတာချက်တွေနဲ့ တိုက်ဆိုင်စစ်ဆေးတဲ့ နောက်ဆုံးအဆင့် ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "Which layer focuses on 'What does success look like?'", mm: "ဘယ်အဆင့်က 'အောင်မြင်တဲ့ရလဒ်က ဘယ်လိုလဲ' ဆိုတာကို အဓိကထားတာလဲ?" },
    options: [
      { en: "Layer 1", mm: "အဆင့် ၁" },
      { en: "Layer 2", mm: "အဆင့် ၂" },
      { en: "Layer 3", mm: "အဆင့် ၃" }
    ],
    correct: 2,
    explanation: { en: "Layer 3 (Intent) is entirely focused on the goal and success criteria.", mm: "အဆင့် ၃ (Intent) က ပန်းတိုင်နဲ့ အောင်မြင်မှု စံနှုန်းတွေကိုပဲ အဓိကထားတာ ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "If the AI output is too long, which component should you adjust?", mm: "AI ရဲ့ အဖြေက အရမ်းရှည်နေရင် ဘယ်အစိတ်အပိုင်းကို ပြင်သင့်လဲ?" },
    options: [
      { en: "Objective", mm: "ပန်းတိုင် (Objective)" },
      { en: "Constraints", mm: "ကန့်သတ်ချက် (Constraints)" },
      { en: "Metrics", mm: "တိုင်းတာချက် (Metrics)" }
    ],
    correct: 1,
    explanation: { en: "Constraints like word counts or length limits help control the size of the output.", mm: "စာလုံးအရေအတွက် ကန့်သတ်ချက်တွေက ထွက်လာမယ့် ရလဒ်ရဲ့ အရွယ်အစားကို ထိန်းချုပ်ပေးပါတယ်။" }
  }
];

const ideQuestions: QuizQuestion[] = [
  {
    question: { en: "Which three main tools make up the core 'vibe coding' toolkit recommended?", mm: "Vibe coding အတွက် အဓိက အကြံပြုထားတဲ့ tool ၃ ခုက ဘာတွေလဲ?" },
    options: [
      { en: "VS Code, ChatGPT, and React", mm: "VS Code, ChatGPT, and React" },
      { en: "Anti-gravity, Gemini 3.1 Pro, and Claude Code", mm: "Anti-gravity, Gemini 3.1 Pro, and Claude Code" },
      { en: "Cursor, Copilot, and Python", mm: "Cursor, Copilot, and Python" },
      { en: "Supabase, Stripe, and Apify", mm: "Supabase, Stripe, and Apify" }
    ],
    correct: 1,
    hint: { en: "One is an IDE, and two are advanced LLMs.", mm: "တစ်ခုက IDE ဖြစ်ပြီး ကျန်နှစ်ခုကတော့ အဆင့်မြင့် LLM တွေ ဖြစ်ပါတယ်။" },
    explanation: { en: "The core toolkit consists of anti-gravity, Gemini 3.1 Pro, and Claude Code.", mm: "အဓိက tool တွေကတော့ anti-gravity, Gemini 3.1 Pro နဲ့ Claude Code တို့ ဖြစ်ပါတယ်။" }
  },
  {
    question: { en: "What is the primary difference between 'Planning' and 'Fast' conversation modes?", mm: "'Planning' နဲ့ 'Fast' mode တွေရဲ့ အဓိက ကွာခြားချက်က ဘာလဲ?" },
    options: [
      { en: "Planning is for databases, Fast is for frontend.", mm: "Planning က database အတွက်၊ Fast က frontend အတွက်။" },
      { en: "Planning uses Claude, Fast uses Gemini.", mm: "Planning က Claude သုံးပြီး Fast က Gemini သုံးတယ်။" },
      { en: "Planning proposes a workflow before executing, while Fast executes directly.", mm: "Planning က အရင်စဉ်းစားပြီးမှ လုပ်တယ်၊ Fast ကတော့ တိုက်ရိုက်လုပ်ဆောင်တယ်။" },
      { en: "Planning is free, Fast costs credits.", mm: "Planning က အလကား၊ Fast ကတော့ ပိုက်ဆံပေးရတယ်။" }
    ],
    correct: 2,
    hint: { en: "One mode asks for your approval before writing files.", mm: "Mode တစ်ခုက ဖိုင်တွေမရေးခင် သင့်ဆီက ခွင့်ပြုချက် အရင်တောင်းပါတယ်။" },
    explanation: { en: "Planning mode forces the model to think and propose a workflow before manipulating files.", mm: "Planning mode က ဖိုင်တွေကို မပြင်ခင် အရင်စဉ်းစားပြီး လုပ်ငန်းစဉ်ကို အရင်တင်ပြပါတယ်။" }
  },
  {
    question: { en: "What is the most critical security feature to enable on a Supabase database?", mm: "Supabase database မှာ အရေးကြီးဆုံး လုံခြုံရေး feature က ဘာလဲ?" },
    options: [
      { en: "Server-side validation", mm: "Server-side validation" },
      { en: "Row Level Security (RLS)", mm: "Row Level Security (RLS)" },
      { en: "Database obfuscation", mm: "Database obfuscation" },
      { en: "NoSQL formatting", mm: "NoSQL formatting" }
    ],
    correct: 1,
    hint: { en: "It ensures users can only access their own data rows.", mm: "ဒါက သုံးစွဲသူတွေအနေနဲ့ သူတို့ရဲ့ ကိုယ်ပိုင် data တွေကိုပဲ ကြည့်နိုင်အောင် လုပ်ပေးပါတယ်။" },
    explanation: { en: "Row Level Security (RLS) ensures users can only access their own data rows.", mm: "RLS က သုံးစွဲသူတွေ သူတို့နဲ့ဆိုင်တဲ့ data တွေကိုပဲ ကိုင်တွယ်နိုင်အောင် ကာကွယ်ပေးပါတယ်။" }
  },
  {
    question: { en: "Why is server-side validation preferred over client-side validation?", mm: "ဘာကြောင့် server-side validation က ပိုကောင်းတာလဲ?" },
    options: [
      { en: "Frontend code can be easily manipulated by attackers.", mm: "Frontend code ကို တိုက်ခိုက်သူတွေက အလွယ်တကူ ပြင်နိုင်လို့။" },
      { en: "Server-side validation uses less CPU.", mm: "Server-side က CPU ပိုသက်သာလို့။" },
      { en: "Client-side validation requires Stripe integration.", mm: "Client-side က Stripe လိုအပ်လို့။" },
      { en: "Frontend validation breaks the Next.js routing.", mm: "Frontend validation က Next.js routing ကို ပျက်စီးစေလို့။" }
    ],
    correct: 0,
    hint: { en: "Think about what an attacker can do using 'Inspect Element'.", mm: "'Inspect Element' သုံးပြီး ဘာတွေလုပ်လို့ရမလဲ စဉ်းစားကြည့်ပါ။" },
    explanation: { en: "Frontend code can be easily bypassed or manipulated by attackers.", mm: "Frontend code ကို တိုက်ခိုက်သူတွေက အလွယ်တကူ ကျော်ဖြတ်နိုင် ဒါမှမဟုတ် ပြင်ဆင်နိုင်ပါတယ်။" }
  },
  {
    question: { en: "Where is the correct place to store sensitive API keys in a vibe-coded app?", mm: "API key တွေကို ဘယ်မှာ သိမ်းဆည်းသင့်လဲ?" },
    options: [
      { en: "Hardcoded in the React components", mm: "React component တွေထဲမှာ တိုက်ရိုက်ရေးပြီး။" },
      { en: "In the Supabase public schema", mm: "Supabase public schema ထဲမှာ။" },
      { en: "In a .env file", mm: ".env ဖိုင်ထဲမှာ။" },
      { en: "In the GitHub README", mm: "GitHub README ထဲမှာ။" }
    ],
    correct: 2,
    hint: { en: "It is a specific configuration file for environment variables.", mm: "ဒါက ပတ်ဝန်းကျင်ဆိုင်ရာ ကိန်းရှင်တွေအတွက် သီးသန့်ဖိုင် ဖြစ်ပါတယ်။" },
    explanation: { en: "API keys must be kept inside an environment file like .env to prevent exposure.", mm: "API key တွေကို လုံခြုံဖို့အတွက် .env လိုမျိုး ဖိုင်တွေထဲမှာပဲ သိမ်းဆည်းရပါမယ်။" }
  },
  {
    question: { en: "What is the main structural difference between SQL and NoSQL databases?", mm: "SQL နဲ့ NoSQL ရဲ့ အဓိက ကွာခြားချက်က ဘာလဲ?" },
    options: [
      { en: "SQL uses flexible documents, NoSQL uses fixed tables.", mm: "SQL က document သုံးပြီး NoSQL က table သုံးတယ်။" },
      { en: "SQL is for frontend, NoSQL is for backend.", mm: "SQL က frontend အတွက်၊ NoSQL က backend အတွက်။" },
      { en: "SQL does not use primary keys, NoSQL does.", mm: "SQL က primary key မသုံးဘူး၊ NoSQL က သုံးတယ်။" },
      { en: "SQL fixes column headers, while NoSQL allows flexible structures.", mm: "SQL က တိုင်ခေါင်းစဉ်တွေ သတ်မှတ်ထားပြီး NoSQL ကတော့ ပိုပြီး လွတ်လပ်တယ်။" }
    ],
    correct: 3,
    hint: { en: "One behaves like a strict spreadsheet, while the other is like a folder of documents.", mm: "တစ်ခုက စည်းကမ်းကြီးတဲ့ spreadsheet လိုမျိုးဖြစ်ပြီး နောက်တစ်ခုကတော့ document တွေစုထားတဲ့ folder လိုမျိုးပါ။" },
    explanation: { en: "SQL uses fixed column headers, whereas NoSQL allows every record to have its own structure.", mm: "SQL က တိုင်ခေါင်းစဉ်တွေ သတ်မှတ်ထားရပေမယ့် NoSQL ကတော့ record တစ်ခုချင်းစီကို စိတ်ကြိုက် ပုံစံသွင်းနိုင်ပါတယ်။" }
  },
  {
    question: { en: "Which frontend framework is heavily recommended to standardize development?", mm: "ဖွံ့ဖြိုးတိုးတက်မှုအတွက် ဘယ် framework ကို အဓိက အကြံပြုထားလဲ?" },
    options: [
      { en: "Angular", mm: "Angular" },
      { en: "Vue", mm: "Vue" },
      { en: "Svelte", mm: "Svelte" },
      { en: "Next.js", mm: "Next.js" }
    ],
    correct: 3,
    hint: { en: "It is a popular React framework for full-stack apps.", mm: "ဒါက full-stack app တွေအတွက် နာမည်ကြီးတဲ့ React framework တစ်ခုပါ။" },
    explanation: { en: "Next.js is recommended for its opinionated structure which works well with AI.", mm: "Next.js ရဲ့ စနစ်တကျရှိတဲ့ ပုံစံက AI နဲ့ အလုပ်လုပ်တဲ့အခါ ပိုပြီး ထိရောက်စေပါတယ်။" }
  },
  {
    question: { en: "Which service is commonly used to host and deploy frontend web applications?", mm: "Web app တွေကို host လုပ်ဖို့ ဘယ် service ကို သုံးလေ့ရှိလဲ?" },
    options: [
      { en: "AWS", mm: "AWS" },
      { en: "HostGator", mm: "HostGator" },
      { en: "Netlify", mm: "Netlify" },
      { en: "Bluehost", mm: "Bluehost" }
    ],
    correct: 2,
    hint: { en: "You can deploy apps manually by dragging and dropping a project folder.", mm: "Project folder ကို ဆွဲထည့်ရုံနဲ့ app တွေကို deploy လုပ်နိုင်ပါတယ်။" },
    explanation: { en: "Netlify is used to host applications on a web-accessible URL for free.", mm: "Netlify က app တွေကို အလကား host လုပ်ပေးပြီး အင်တာနက်ကနေ ကြည့်နိုင်အောင် လုပ်ပေးပါတယ်။" }
  },
  {
    question: { en: "What is the recommended strategy for high-quality UX/UI designs using AI?", mm: "AI သုံးပြီး ကောင်းမွန်တဲ့ UX/UI ရဖို့ ဘယ်လိုလုပ်သင့်လဲ?" },
    options: [
      { en: "Telling the AI to randomly guess padding.", mm: "AI ကို စိတ်ကြိုက် ခန့်မှန်းခိုင်းခြင်း။" },
      { en: "Buying a WordPress template and copying code.", mm: "WordPress template ဝယ်ပြီး ကူးယူခြင်း။" },
      { en: "Writing raw CSS without references.", mm: "ဘာမှမကြည့်ဘဲ CSS ရေးခြင်း။" },
      { en: "Taking a screenshot of an inspiration design and asking AI to replicate it.", mm: "လှပတဲ့ design ကို screenshot ရိုက်ပြီး AI ကို အတုယူခိုင်းခြင်း။" }
    ],
    correct: 3,
    hint: { en: "Don't reinvent the wheel; rely on professional aesthetic foundations.", mm: "အသစ်ကနေ ပြန်မစပါနဲ့၊ ကျွမ်းကျင်တဲ့ design တွေကို အခြေခံပါ။" },
    explanation: { en: "Using inspiration screenshots helps AI replicate high-end aesthetics.", mm: "လှပတဲ့ design တွေကို ပြပေးခြင်းက AI ကို ပိုမိုကောင်းမွန်တဲ့ ရလဒ်တွေ ထွက်လာအောင် ကူညီပေးပါတယ်။" }
  },
  {
    question: { en: "What is the specific purpose of authentication middleware?", mm: "Authentication middleware ရဲ့ ရည်ရွယ်ချက်က ဘာလဲ?" },
    options: [
      { en: "To process Stripe payments.", mm: "Stripe payment တွေ လုပ်ဆောင်ဖို့။" },
      { en: "To validate database schema migrations.", mm: "Database schema တွေကို စစ်ဆေးဖို့။" },
      { en: "To animate UI elements.", mm: "UI တွေကို လှုပ်ရှားအောင် လုပ်ဖို့။" },
      { en: "To secure routes by redirecting unauthenticated users.", mm: "Login မဝင်ထားတဲ့သူတွေကို တားဆီးဖို့။" }
    ],
    correct: 3,
    hint: { en: "It acts as a 'bouncer' for your app's internal pages.", mm: "ဒါက app ရဲ့ အတွင်းစာမျက်နှာတွေအတွက် 'လုံခြုံရေး' လိုမျိုး လုပ်ဆောင်ပေးပါတယ်။" },
    explanation: { en: "Authentication middleware ensures users cannot access protected routes without being logged in.", mm: "Authentication middleware က login မဝင်ထားဘဲနဲ့ အရေးကြီးတဲ့ စာမျက်နှာတွေကို မကြည့်နိုင်အောင် ကာကွယ်ပေးပါတယ်။" }
  }
];

const quizQuestions = intentQuestions; // Default for type safety if needed

export default function App() {
  const [lang, setLang] = useState<Language>('mm');
  const [theme, setTheme] = useState<Theme>('light');
  const [activeStep, setActiveStep] = useState(1);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [quizType, setQuizType] = useState<'intent' | 'ide'>('intent');
  const [copied, setCopied] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentQuestions = quizType === 'intent' ? intentQuestions : ideQuestions;

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
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const openQuizCategory = () => {
    setModalType('quiz_category');
  };

  const startQuiz = (type: 'intent' | 'ide') => {
    setQuizType(type);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
    setModalType('quiz');
  };

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

  const copyTemplate = () => {
    const template = steps.map(s => {
      const title = s.title.en.split('. ')[1];
      return `${title}: [Your Input Here]\nExample: ${s.example.en}\n`;
    }).join('\n');
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 bg-app-bg text-app-text transition-colors duration-300">
      {/* Header */}
        <header className="border-b border-app-border p-4 sticky top-0 bg-app-bg/80 backdrop-blur-md z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold tracking-tight flex items-center gap-2">
              <span className="text-blue-500">◈</span> Intent Architect
            </h1>
            <div className="flex items-center gap-3 sm:gap-4">
              <a 
                href="https://eng-ai.mindset-it.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-bold text-xs sm:text-sm cursor-pointer"
                title={t('englishLink')}
              >
                <Languages size={16} />
                <span className="hidden lg:inline">{t('englishLink')}</span>
              </a>
              <button 
                onClick={openQuizCategory}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-bold text-xs sm:text-sm cursor-pointer"
              >
                <HelpCircle size={16} />
                <span className="hidden xs:inline">{t('quizStart')}</span>
              </button>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-app-card border border-app-border text-app-text hover:text-blue-500 transition-all cursor-pointer"
                title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <div className="flex bg-app-card rounded-lg p-1 border border-app-border">
                <button 
                  onClick={() => setLang('en')} 
                  className={`py-1 px-3 rounded-md text-xs font-bold transition-all cursor-pointer ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-blue-500'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('mm')} 
                  className={`py-1 px-3 rounded-md text-xs font-bold transition-all cursor-pointer ${lang === 'mm' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-blue-500'}`}
                >
                  MM
                </button>
              </div>
              <a 
                href="https://gemini.google.com/gem/11GtO7CaDsb0qXH1elfJk2t8a01qM3rsN?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-2 text-xs font-medium"
                title={t('mentorLink')}
              >
                <span className="hidden sm:inline">{t('mentorLink')}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-10">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
            >
              <span>{t('heroTitle1')}</span><br />
              <span className="text-blue-500">{t('heroTitle2')}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed"
            >
              {t('heroDesc')}
            </motion.p>
          </section>

          {/* The 3 Layers Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => setModalType('prompting')}
              className="p-5 rounded-xl border border-app-border bg-app-card hover:border-blue-500/50 cursor-pointer transition-all group"
            >
              <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">{t('layer1')}</div>
              <h3 className="text-base font-semibold mb-1 flex items-center justify-between">
                <span>{t('prompting')}</span>
                <span className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  {t('clickToLearn')}
                </span>
              </h3>
              <p className="text-xs text-slate-500">{t('promptingDesc')}</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => setModalType('context')}
              className="p-5 rounded-xl border border-app-border bg-app-card hover:border-blue-500/50 cursor-pointer transition-all group"
            >
              <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">{t('layer2')}</div>
              <h3 className="text-base font-semibold mb-1 flex items-center justify-between">
                <span>{t('context')}</span>
                <span className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  {t('clickToLearn')}
                </span>
              </h3>
              <p className="text-xs text-slate-500">{t('contextDesc')}</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => setModalType('intent')}
              className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50 cursor-pointer transition-all group"
            >
              <div className="text-[10px] font-bold text-blue-400 uppercase mb-1">{t('layer3')}</div>
              <h3 className="text-base font-semibold mb-1 flex items-center justify-between">
                <span>{t('intent')}</span>
                <span className="text-blue-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  {t('clickToLearn')}
                </span>
              </h3>
              <p className="text-xs text-slate-500">{t('intentDesc')}</p>
            </motion.div>
          </div>

          {/* The 7-Component Workshop */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/5 space-y-1">
                <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 px-2">{t('frameworkTitle')}</h4>
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left py-3 px-4 rounded-lg transition-all cursor-pointer flex items-center gap-3 text-sm ${
                      activeStep === step.id 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                        : 'text-slate-500 hover:text-app-text hover:bg-app-card'
                    }`}
                  >
                    <step.icon size={16} className={activeStep === step.id ? 'text-white' : 'text-slate-400'} />
                    {step.title[lang]}
                  </button>
                ))}
              </div>

              <div className="md:w-3/5 glass-card p-6 rounded-2xl min-h-[320px] flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-500/10 text-blue-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {steps[activeStep - 1].subtitle[lang]}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      {steps[activeStep - 1].title[lang].split('။ ')[1] || steps[activeStep - 1].title[lang].split('. ')[1] || steps[activeStep - 1].title[lang]}
                    </h2>
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
          <section className="mb-16 flex flex-col items-center">
            <button 
              onClick={copyTemplate}
              className="flex items-center gap-2 bg-app-card hover:bg-app-bg text-app-text px-6 py-3 rounded-xl border border-app-border transition-all cursor-pointer group"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-slate-400 group-hover:text-blue-500" />}
              <span className="text-sm font-semibold">{copied ? t('copied') : t('copyTemplate')}</span>
            </button>
          </section>

          {/* PIV Loop Summary */}
          <section className="bg-app-card rounded-2xl p-8 border border-app-border mb-16">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-px w-8 bg-app-border"></div>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">{t('pivTitle')}</h2>
              <div className="h-px w-8 bg-app-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => setModalType('piv_plan')}
                className="p-4 rounded-xl border border-app-border bg-app-bg text-center cursor-pointer hover:border-blue-500/50 transition-all group"
              >
                <h3 className="font-bold text-blue-500 mb-1 text-sm flex items-center justify-center gap-2">
                  PLAN
                  <Info size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[11px] text-slate-500">{t('pivPlan')}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => setModalType('piv_implement')}
                className="p-4 rounded-xl border border-app-border bg-app-bg text-center cursor-pointer hover:border-blue-500/50 transition-all group"
              >
                <h3 className="font-bold text-blue-500 mb-1 text-sm flex items-center justify-center gap-2">
                  IMPLEMENT
                  <Info size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[11px] text-slate-500">{t('pivImplement')}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => setModalType('piv_validate')}
                className="p-4 rounded-xl border border-app-border bg-app-bg text-center cursor-pointer hover:border-blue-500/50 transition-all group"
              >
                <h3 className="font-bold text-blue-500 mb-1 text-sm flex items-center justify-center gap-2">
                  VALIDATE
                  <Info size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[11px] text-slate-500">{t('pivValidate')}</p>
              </motion.div>
            </div>
          </section>
          </main>

        {/* QUICK GUIDE MODALS */}
        <AnimatePresence>
          {modalType && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalType(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-app-bg border border-app-border rounded-3xl shadow-2xl overflow-hidden"
              >
                {modalType === 'quiz_category' ? (
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-bold flex items-center gap-3">
                        <Trophy className="text-blue-500" />
                        {t('quizTitle')}
                      </h2>
                      <button 
                        onClick={() => setModalType(null)} 
                        className="text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        onClick={() => startQuiz('intent')}
                        className="p-6 rounded-2xl border border-app-border bg-app-card hover:border-blue-500 transition-all cursor-pointer group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Target size={24} />
                        </div>
                        <h3 className="font-bold mb-2">{t('catIntent')}</h3>
                        <p className="text-xs text-slate-500">{t('catIntentDesc')}</p>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        onClick={() => startQuiz('ide')}
                        className="p-6 rounded-2xl border border-app-border bg-app-card hover:border-blue-500 transition-all cursor-pointer group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Bot size={24} />
                        </div>
                        <h3 className="font-bold mb-2">{t('catIDE')}</h3>
                        <p className="text-xs text-slate-500">{t('catIDEDesc')}</p>
                      </motion.div>
                    </div>
                  </div>
                ) : modalType === 'quiz' ? (
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-app-border flex justify-between items-center bg-app-card/50">
                      <h2 className="text-lg font-bold flex items-center gap-2">
                        <HelpCircle size={20} className="text-blue-500" />
                        {showResult ? t('quizResult') : `${quizType === 'intent' ? t('catIntent') : t('catIDE')} (${currentQuestion + 1}/${currentQuestions.length})`}
                      </h2>
                      <button 
                        onClick={() => setModalType(null)} 
                        className="text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="p-8 overflow-y-auto max-h-[70vh]">
                      {!showResult ? (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold leading-tight">
                            {currentQuestions[currentQuestion].question[lang]}
                          </h3>
                          <div className="space-y-3">
                            {currentQuestions[currentQuestion].options.map((option, idx) => {
                              const isCorrect = idx === currentQuestions[currentQuestion].correct;
                              const isSelected = idx === selectedOption;
                              
                              let buttonClass = "w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group ";
                              if (!isAnswered) {
                                buttonClass += "border-app-border hover:border-blue-500 hover:bg-blue-500/5 cursor-pointer";
                              } else {
                                if (isCorrect) {
                                  buttonClass += "border-emerald-500 bg-emerald-500/10 text-emerald-600";
                                } else if (isSelected) {
                                  buttonClass += "border-rose-500 bg-rose-500/10 text-rose-600";
                                } else {
                                  buttonClass += "border-app-border opacity-50";
                                }
                              }

                              return (
                                <button
                                  key={idx}
                                  disabled={isAnswered}
                                  onClick={() => handleOptionSelect(idx)}
                                  className={buttonClass}
                                >
                                  <span className="font-medium">{option[lang]}</span>
                                  {isAnswered && isCorrect && <CheckCircle2 size={18} />}
                                  {isAnswered && isSelected && !isCorrect && <ShieldAlert size={18} />}
                                </button>
                              );
                            })}
                          </div>
                          
                          <div className="flex gap-2">
                            {currentQuestions[currentQuestion].hint && !isAnswered && (
                              <button 
                                onClick={() => setShowHint(!showHint)}
                                className="text-xs font-bold text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
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
                              initial={{ opacity: 0, y: 10 }}
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
                                  <p className="text-sm text-slate-500 leading-relaxed">
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
                          <p className="text-slate-500 max-w-xs mx-auto">
                            {score === currentQuestions.length 
                              ? "Perfect! You are a Master Architect!" 
                              : score >= currentQuestions.length * 0.7 
                              ? "Great job! You have a solid understanding." 
                              : "Good effort! Review the materials to improve."}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="p-6 bg-app-card/50 border-t border-app-border">
                      {!showResult ? (
                        <button
                          disabled={!isAnswered}
                          onClick={nextQuestion}
                          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                            isAnswered 
                              ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer' 
                              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          {currentQuestion === currentQuestions.length - 1 ? t('quizFinish') : t('quizNext')}
                          <ChevronRight size={20} />
                        </button>
                      ) : (
                        <div className="flex gap-3">
                          <button
                            onClick={() => setModalType('quiz_category')}
                            className="flex-1 py-4 bg-app-card hover:bg-app-bg text-app-text border border-app-border rounded-xl font-bold transition-all cursor-pointer"
                          >
                            Change Category
                          </button>
                          <button
                            onClick={() => startQuiz(quizType)}
                            className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <RefreshCw size={20} />
                            {t('quizRestart')}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-6 border-b border-app-border flex justify-between items-center bg-app-card/50">
                      <h2 className="text-lg font-bold">
                        {modalType === 'prompting' ? t('handbookTitle') : 
                         modalType === 'context' ? t('contextTitle') : 
                         modalType === 'intent' ? t('intentTitle') :
                         modalType === 'piv_plan' ? t('pivPlanTitle') :
                         modalType === 'piv_implement' ? t('pivImplementTitle') :
                         t('pivValidateTitle')}
                      </h2>
                      <div className="flex items-center gap-2">
                        {modalType === 'prompting' && (
                          <div className="flex items-center gap-2">
                            <a 
                              href="https://promptadvance.club/gemini-prompts"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer flex items-center gap-2 group relative"
                              title={t('promptLibrary')}
                            >
                              <Library size={20} />
                              <span className="absolute right-full mr-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {t('promptLibrary')}
                              </span>
                            </a>
                            <a 
                              href="https://gemini.google.com/gem/1360JWmfTEycWjPbMO-lSfRAMVdui3Sec?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer flex items-center gap-2 group relative"
                              title={t('promptGuide')}
                            >
                              <Bot size={20} />
                              <span className="absolute right-full mr-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {t('promptGuide')}
                              </span>
                            </a>
                          </div>
                        )}
                        <button 
                          onClick={() => setModalType(null)} 
                          className="text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                      {(modalType === 'prompting' ? handbookItems : 
                        modalType === 'context' ? contextHandbookItems : 
                        modalType === 'intent' ? intentHandbookItems :
                        modalType === 'piv_plan' ? pivPlanItems :
                        modalType === 'piv_implement' ? pivImplementItems :
                        pivValidateItems).map((item, idx) => (
                        <div key={idx} className="flex gap-4 p-3 rounded-lg hover:bg-blue-500/5 transition-colors">
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

                    <div className="p-6 bg-app-card/50 border-t border-app-border space-y-3">
                      {!modalType.startsWith('piv') && (
                        <a 
                          href={modalType === 'prompting' 
                            ? "https://docs.google.com/document/d/172lYHV02T667PAZRTyUZHHOQAZ6LPaKu7qqvigUUAp0/edit?usp=sharing"
                            : modalType === 'context'
                            ? "https://docs.google.com/document/d/1d6ou051XLnZIYL-2Z6HB5Z7gVJ1CFLpPSKgW8JtN1hw/edit?usp=sharing"
                            : "https://docs.google.com/document/d/177AqsKT5zDdiBVCjluSmBpatwnym_OhJvkHc-FIa228/edit?usp=sharing"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 bg-app-card hover:bg-app-bg text-blue-500 text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 border border-app-border"
                        >
                          <ExternalLink size={16} />
                          {modalType === 'prompting' ? t('fullHandbook') : t('fullLecture')}
                        </a>
                      )}
                      <button 
                        onClick={() => setModalType(null)} 
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-all cursor-pointer"
                      >
                        {t('closeGuide')}
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <footer className="py-10 text-center">
          <p className="text-slate-500 text-[11px] uppercase tracking-widest">
            {t('footer')}
          </p>
        </footer>
    </div>
  );
}
