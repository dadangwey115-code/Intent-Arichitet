import type { QuizQuestion } from '../types';

export const intentQuestions: QuizQuestion[] = [
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

export const ideQuestions: QuizQuestion[] = [
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
