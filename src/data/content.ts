import { Target, CheckCircle2, Activity, Compass, ShieldAlert, UserCheck, Octagon } from 'lucide-react';
import type { Translation, StepItem } from '../types';

export const content: Translation = {
  quizCategoryTitle: { en: "Choose Quiz Category", mm: "ဉာဏ်စမ်းအမျိုးအစား ရွေးချယ်ပါ" },
  catIntent: { en: "Intent Engineering", mm: "Intent Engineering" },
  catIntentDesc: { en: "Test your understanding of the 3 layers and the 7-component intent framework.", mm: "Layer ၃ ခုနှင့် အဓိက အစိတ်အပိုင်း ၇ ခုအကြောင်း နားလည်မှုကို စစ်ဆေးပါ။" },
  catIDE: { en: "Google Antigravity IDE", mm: "Google Antigravity IDE" },
  catIDEDesc: { en: "Test your knowledge on modern vibe coding toolkits, LLMs, and security.", mm: "Vibe coding toolkits၊ LLM များနှင့် လုံခြုံရေးဆိုင်ရာ အသိပညာများကို စစ်ဆေးပါ။" },
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
  superDesignLibrary: { en: "SuperDesign Library", mm: "SuperDesign Prompt Library" },
  promptGame: { en: "Learn Prompt with Game", mm: "Prompt ဂိမ်းကစားပြီး လေ့လာရန်" },
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
  englishLink: { en: "AI English Skills", mm: "AI အင်္ဂလိပ်စာ" },
  artOfAiLink: { en: "The Art of AI", mm: "The Art of AI" },
  examReminder: { 
    en: "New to AI? Take the AI Mindset Basic Exam before exploring Intent Architect.", 
    mm: "Intent Architect မလေ့လာမီ AI Mindset အခြေခံဉာဏ်စမ်းကို အရင်ဖြေဆိုပါ။" 
  },
  examButton: { en: "Take Mindset Exam", mm: "AI Mindset ဉာဏ်စမ်း ဖြေဆိုရန်" }
};

export const steps: StepItem[] = [
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
