export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      login: 'Login',
      register: 'Sign Up',
      getStarted: 'Get Started'
    },
    hero: {
      headline: 'The AI That Remembers Everything You Do.',
      subline: 'Stop re-explaining your codebase every morning. Context AI gives your LLMs infinite memory, bridging the gap between sessions.',
      cta: 'Start Using Context AI',
      trust: 'Trusted by 5,000+ developers',
      console: {
        core: 'CONTEXT_AI_CORE',
        init: 'INIT_PERSISTENT_STATE...',
        fetching: 'FETCHING_BUSINESS_LOGIC...'
      },
      finalCta: {
        main: 'AI should remember',
        highlight: 'everything.'
      }
    },
    problem: {
      title: 'Context Collapse is Killing Your Workflow',
      p1: 'You spend 20 minutes re-uploading files and re-explaining project requirements every time you start a new chat.',
      p2: 'Traditional AI models forget the business logic you taught them yesterday.',
      p3: 'Result? Inconsistent code, missed bugs, and hours of wasted time.'
    },
    howItWorks: {
      title: '3 Simple Steps to Infinite Memory',
      step1Title: 'Connect Your Workspace',
      step1Desc: 'Sync your GitHub, VS Code, or local project folder in one click.',
      step2Title: 'Context Indexing',
      step2Desc: 'Our engine creates a semantic map of your entire project structure.',
      step3Title: 'Start Chatting',
      step3Desc: 'Ask questions. Your AI now has full context of everything you ever built.'
    },
    features: {
      title: 'Built for High-Level Engineering',
      f1: 'Deep Code Integration',
      f1Desc: 'Understand relationships between different modules and files automatically.',
      f2: 'Bilingual Logic',
      f2Desc: 'Full support for complex logic in both English and Arabic.',
      f3: 'Security First',
      f3Desc: 'Enterprise-grade encryption for all your documentation and source code.'
    },
    register: {
      title: 'Get Started with Context AI',
      subtitle: 'Enter your details to create your secure workspace.',
      name: 'Full Name',
      email: 'Work Email',
      password: 'Password',
      country: 'Country',
      phone: 'Phone Number',
      submit: 'Create Account',
      validating: 'Processing...',
      errors: {
        email: 'Only Gmail and Hotmail accounts are accepted.',
        password: 'Password must be at least 8 characters.',
        name: 'Name must contain only characters.',
        phone: 'Phone number must contain only digits.',
        duplicate: 'This email is already registered.',
        generic: 'Please fill in all required fields correctly.'
      },
      success: "You're in. We're currently handling high demand — we'll notify you by email once your instance is ready."
    },
    login: {
      title: 'Welcome Back',
      subtitle: 'Enter your work email to access your workspace.',
      email: 'Work Email',
      password: 'Password',
      submit: 'Login',
      footer: "Don't have an account?",
      errors: {
        invalid: 'Invalid email or password.'
      }
    },
    footer: {
      rights: '© 2026 Context AI. All rights reserved.',
      privacy: 'Privacy Policy',
      security: 'Security Specs',
      api: 'API Status'
    }
  },
  ar: {
    nav: {
      features: 'المميزات',
      pricing: 'الأسعار',
      login: 'تسجيل الدخول',
      register: 'اشترك الآن',
      getStarted: 'ابدأ الآن'
    },
    hero: {
      headline: 'الذكاء الاصطناعي الذي يتذكر كل ما تفعله.',
      subline: 'توقف عن إعادة شرح مشروعك كل صباح. يمنح Context AI نماذجك ذاكرة غير محدودة، لسد الفجوة بين الجلسات.',
      cta: 'ابدأ باستخدام Context AI',
      trust: 'موثوق من قبل 5000+ مطور',
      console: {
        core: 'نواة_الذكاء_الاصطناعي',
        init: 'بدء_حالة_الاستقرار...',
        fetching: 'جلب_منطق_الأعمال...'
      },
      finalCta: {
        main: 'يجب أن يتذكر الذكاء الاصطناعي',
        highlight: 'كل شيء.'
      }
    },
    problem: {
      title: 'انهيار السياق يقتل سير عملك',
      p1: 'تقضي 20 دقيقة في إعادة رفع الملفات وإعادة شرح متطلبات المشروع في كل مرة تبدأ فيها محادثة جديدة.',
      p2: 'نماذج الذكاء الاصطناعي التقليدية تنسى المنطق البرمجي الذي علمته لها بالأمس.',
      p3: 'النتيجة؟ كود غير متسق، أخطاء لم تكتشف، وساعات من الوقت الضائع.'
    },
    howItWorks: {
      title: '3 خطوات بسيطة لذاكرة لا نهائية',
      step1Title: 'اربط مساحة عملك',
      step1Desc: 'قم بمزامنة GitHub أو VS Code أو مجلد مشروعك المحلي بضغطة واحدة.',
      step2Title: 'فهرسة السياق',
      step2Desc: 'يقوم محركنا بإنشاء خريطة دلالية لهيكل مشروعك بالكامل.',
      step3Title: 'ابدأ الدردشة',
      step3Desc: 'اطرح الأسئلة. ذكاؤك الاصطناعي لديه الآن سياق كامل لكل ما بنيته.',
    },
    features: {
      title: 'بنيت للهندسة عالية المستوى',
      f1: 'تكامل عميق مع الكود',
      f1Desc: 'فهم العلاقات بين الوحدات والملفات المختلفة تلقائياً.',
      f2: 'منطق ثنائي اللغة',
      f2Desc: 'دعم كامل للمنطق المعقد باللغتين الإنجليزية والعربية.',
      f3: 'الأمان أولاً',
      f3Desc: 'تشفير على مستوى المؤسسات لجميع مستنداتك وأكوادك المصدرية.'
    },
    register: {
      title: 'ابدأ مع Context AI',
      subtitle: 'أدخل بياناتك لإنشاء مساحة عملك الآمنة.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني للعمل',
      password: 'كلمة المرور',
      country: 'الدولة',
      phone: 'رقم الهاتف',
      submit: 'إنشاء حساب',
      validating: 'جاري المعالجة...',
      errors: {
        email: 'يُقبل فقط حسابات Gmail و Hotmail.',
        password: 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.',
        name: 'يجب أن يحتوي الاسم على حروف فقط.',
        phone: 'يجب أن يحتوي رقم الهاتف على أرقام فقط.',
        duplicate: 'هذا البريد الإلكتروني مسجل بالفعل.',
        generic: 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.'
      },
      success: "لقد انضممت إلينا. نحن نتعامل حالياً مع طلب مرتفع — سنقوم بإشعارك عبر البريد الإلكتروني بمجرد أن تصبح مساحتك جاهزة."
    },
    login: {
      title: 'مرحباً بعودتك',
      subtitle: 'أدخل بريدك الإلكتروني للوصول إلى مساحة عملك.',
      email: 'البريد الإلكتروني للعمل',
      password: 'كلمة المرور',
      submit: 'تسجيل الدخول',
      footer: "ليس لديك حساب؟",
      errors: {
        invalid: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.'
      }
    },
    footer: {
      rights: '© 2026 Context AI. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      security: 'مواصفات الأمان',
      api: 'حالة الخدمة'
    }
  }
};
