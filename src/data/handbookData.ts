import type { HandbookItem } from '../types';

export const handbookItems: HandbookItem[] = [
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

export const contextHandbookItems: HandbookItem[] = [
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

export const intentHandbookItems: HandbookItem[] = [
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

export const pivPlanItems: HandbookItem[] = [
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

export const pivImplementItems: HandbookItem[] = [
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

export const pivValidateItems: HandbookItem[] = [
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
