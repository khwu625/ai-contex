import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  ChevronRight, 
  Globe, 
  MessageSquare, 
  Shield, 
  Zap, 
  Github, 
  Layout, 
  Code,
  ArrowRight,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';
import { translations, Language } from './translations';
import { cn } from './lib/utils';
import { isSupabaseConfigured, getSupabase } from './lib/supabase';

// --- Types ---
type Page = 'home' | 'register' | 'login' | 'success';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [page, setPage] = useState<Page>('home');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');
  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <div className={cn(
      "min-h-screen selection:bg-brand-primary/30",
      lang === 'ar' ? "rtl" : "ltr"
    )}>
      <Navbar lang={lang} t={t} toggleLang={toggleLang} navigate={navigate} />
      
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <LandingPage t={t} navigate={navigate} lang={lang} />
            </motion.div>
          )}

          {page === 'register' && (
            <motion.div
              key="register"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="pt-32 pb-20 px-4"
            >
              <RegisterPage t={t} navigate={navigate} lang={lang} />
            </motion.div>
          )}

          {page === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="pt-32 pb-20 px-4"
            >
              <LoginPage t={t} navigate={navigate} lang={lang} />
            </motion.div>
          )}

          {page === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pt-40 pb-20 px-4 text-center"
            >
              <SuccessPage t={t} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer t={t} lang={lang} />
    </div>
  );
}

// --- Components ---

function Navbar({ lang, t, toggleLang, navigate }: { lang: Language, t: any, toggleLang: () => void, navigate: (p: Page) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 px-10 py-6",
      isScrolled ? "bg-page-bg/95 backdrop-blur-sm border-b border-black/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate('home')}
        >
          <div className="w-8 h-8 bg-black flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-2 h-2 bg-white rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight italic">CONTEXT<span className="font-light">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className={cn(
            "uppercase font-bold opacity-60 hover:opacity-100 transition-opacity",
            lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
          )}>{t.nav.features}</a>
          <div className="flex items-center gap-2 border-x border-black/5 px-6">
            <button 
              onClick={toggleLang}
              className={cn("text-[10px] font-bold py-1 px-2 border border-black/10 rounded transition-all", lang === 'en' ? "bg-black text-white" : "hover:bg-black/5")}
            >EN</button>
            <button 
              onClick={toggleLang}
              className={cn("text-[10px] font-bold py-1 px-2 border border-black/10 rounded transition-all", lang === 'ar' ? "bg-black text-white" : "hover:bg-black/5")}
            >AR</button>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('login')}
              className={cn(
                "uppercase font-bold opacity-60 hover:opacity-100 transition-opacity",
                lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
              )}
            >
              {t.nav.login}
            </button>
            <button 
              onClick={() => navigate('register')}
              className={cn(
                "uppercase font-bold border-b-2 border-black pb-1 hover:pb-2 transition-all",
                lang === 'ar' ? "text-sm tracking-normal" : "text-[10px] tracking-widest"
              )}
            >
              {t.nav.register}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
           <button onClick={toggleLang} className="text-black/60"><Globe className="w-5 h-5" /></button>
           <Menu className="text-black w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

function LandingPage({ t, navigate, lang }: { t: any, navigate: (p: Page) => void, lang: Language }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 md:pt-60 pb-20 border-b border-black/5 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-0">
          <div className={cn(
            "md:col-span-12 lg:col-span-7",
            lang === 'en' ? "text-left" : "text-right"
          )}>
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
              Protocol v1.0.4
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-[1.05] mb-10">
              {t.hero.headline}
            </h1>
            
            <p className="text-xl text-black/70 max-w-lg mb-12 leading-relaxed">
              {t.hero.subline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button 
                onClick={() => navigate('register')}
                className="w-full sm:w-auto px-10 py-5 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl active:translate-y-1"
              >
                {t.hero.cta}
              </button>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex -space-x-2 mb-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-bold opacity-40">{t.hero.trust}</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex md:col-span-5 items-center justify-center p-12 border-l border-black/5">
            <div className="w-full aspect-square border border-black/5 bg-white p-8 flex flex-col justify-center relative group">
              <div className="absolute inset-4 border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={cn(
                "font-mono leading-relaxed opacity-60",
                lang === 'ar' ? "text-[13px]" : "text-[11px]"
              )}>
                <div className="mb-4 text-black font-bold">{t.hero.console.core}</div>
                <div>{t.hero.console.init}</div>
                <div>{t.hero.console.fetching}</div>
                <div className="my-4 p-3 bg-black/5 border-l-2 border-black italic">
                  {lang === 'en' 
                    ? '"Recursive memory architecture successful. System recalled 4,208 project interactions."'
                    : '"نجاح بنية الذاكرة العودية. استعاد النظام 4,208 تفاعل مشروع."'}
                </div>
                <div className="animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & How Sections */}
      <section id="features" className="grid md:grid-cols-2 border-b border-black/5">
        <div className={cn(
          "p-12 md:p-24 border-b md:border-b-0 border-black/5",
          lang === 'en' ? "md:border-r" : "md:border-l"
        )}>
          <h1 className="label-caps opacity-30 italic">{t.nav.features}</h1>
          <h2 className="text-4xl font-light mb-12 leading-tight">{t.problem.title}</h2>
          <div className="space-y-10">
            {[t.problem.p1, t.problem.p2, t.problem.p3].map((p, i) => (
              <div key={i} className="flex gap-6 group">
                <span className="serif-italic text-3xl opacity-20 transition-opacity group-hover:opacity-100 shrink-0">0{i+1}</span>
                <p className="text-lg text-black/70 leading-relaxed pt-1">{p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-12 md:p-24 bg-white">
          <h3 className="label-caps opacity-30 italic">{lang === 'en' ? 'Process Flow' : 'خطوات العمل'}</h3>
          <h2 className="text-4xl font-light mb-12">{t.howItWorks.title}</h2>
          <div className="space-y-12">
            {[
              { title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
              { title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
              { title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-[1px] bg-black" />
                  <h4 className={cn(
                    "font-bold uppercase",
                    lang === 'ar' ? "text-sm tracking-normal" : "text-xs tracking-widest"
                  )}>{step.title}</h4>
                </div>
                <p className="text-black/60 text-sm md:text-base leading-relaxed pl-8">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0 border border-black/5">
            {[
              { icon: Github, title: t.features.f1, desc: t.features.f1Desc },
              { icon: Globe, title: t.features.f2, desc: t.features.f2Desc },
              { icon: Shield, title: t.features.f3, desc: t.features.f3Desc },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className={cn(
                  "editorial-card py-16 group",
                  i !== 2 ? "border-b md:border-b-0 md:border-r border-black/5" : ""
                )}>
                  <Icon className="w-8 h-8 mb-8 stroke-1" />
                  <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                  <p className="opacity-60 text-sm leading-loose group-hover:opacity-100 transition-opacity">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-10 text-center bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-12">
            {t.hero.finalCta.main} <span className="serif-italic text-gray-400">{t.hero.finalCta.highlight}</span>
          </h2>
          <button 
            onClick={() => navigate('register')}
            className="px-12 py-6 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all"
          >
            {t.nav.getStarted}
          </button>
        </div>
      </section>
    </>
  );
}

const COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'India', 'Brazil', 'Saudi Arabia', 'United Arab Emirates', 'Egypt', 'Jordan', 'Kuwait'
];

function RegisterPage({ t, navigate, lang }: { t: any, navigate: (p: Page) => void, lang: Language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.password || !formData.country || !formData.phone) {
      setError(t.register.errors.generic);
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com)$/;
    if (!emailRegex.test(formData.email)) {
      setError(t.register.errors.email);
      setIsLoading(false);
      return;
    }

    const nameRegex = /^[a-zA-Z\s\u0600-\u06FF]+$/;
    if (!nameRegex.test(formData.name)) {
      setError(t.register.errors.name);
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setError(t.register.errors.phone);
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError(t.register.errors.password);
      setIsLoading(false);
      return;
    }

    try {
      if (isSupabaseConfigured) {
        const supabase = getSupabase();
        // Check for duplicate email
        const { data: existingUser } = await supabase
          .from('leads')
          .select('email')
          .eq('email', formData.email)
          .single();

        if (existingUser) {
          setError(t.register.errors.duplicate);
          setIsLoading(false);
          return;
        }

        const { data, error: sbError } = await supabase
          .from('leads')
          .insert([
            { 
              full_name: formData.name, 
              email: formData.email, 
              country: formData.country, 
              phone: formData.phone,
              source: 'context_ai_mvp'
            }
          ]);

        if (sbError) throw sbError;
        navigate('success');
      } else {
        // Just simulate if no config
        console.warn("Supabase not configured, simulating success");
        setTimeout(() => navigate('success'), 1200);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-light mb-6 serif-italic">{t.register.title}</h1>
        <p className="text-black/60 max-w-sm mx-auto">{t.register.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="border border-black/5 bg-white p-12 space-y-10 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-black" />
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className={cn(
              "font-bold uppercase opacity-40",
              lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
            )}>{t.register.name}</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              maxLength={50}
              className="w-full px-0 py-3 bg-transparent border-b border-black/10 focus:border-black outline-none transition-all placeholder:opacity-30"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="space-y-4">
            <label className={cn(
              "font-bold uppercase opacity-40",
              lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
            )}>{t.register.email}</label>
            <input 
              required
              type="email" 
              placeholder="john@gmail.com"
              maxLength={100}
              className="w-full px-0 py-3 bg-transparent border-b border-black/10 focus:border-black outline-none transition-all placeholder:opacity-30"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-4">
            <label className={cn(
              "font-bold uppercase opacity-40",
              lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
            )}>{t.register.password}</label>
            <input 
              required
              type="password" 
              placeholder="••••••••"
              maxLength={50}
              className="w-full px-0 py-3 bg-transparent border-b border-black/10 focus:border-black outline-none transition-all placeholder:opacity-30"
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div className="space-y-4">
            <label className={cn(
              "font-bold uppercase opacity-40",
              lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
            )}>{t.register.country}</label>
            <select
              required
              className="w-full px-0 py-3 bg-transparent border-b border-black/10 focus:border-black outline-none transition-all placeholder:opacity-30 appearance-none cursor-pointer"
              value={formData.country}
              onChange={e => setFormData({...formData, country: e.target.value})}
            >
              <option value="">{lang === 'en' ? 'Select Country' : 'اختر الدولة'}</option>
              {COUNTRIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <label className={cn(
              "font-bold uppercase opacity-40",
              lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
            )}>{t.register.phone}</label>
            <input 
              required
              type="tel" 
              placeholder="123456789"
              maxLength={20}
              className="w-full px-0 py-3 bg-transparent border-b border-black/10 focus:border-black outline-none transition-all placeholder:opacity-30"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
            />
          </div>
        </div>

        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-[10px] uppercase tracking-widest font-bold bg-red-50 p-4 border-l-2 border-red-500"
          >
            {error}
          </motion.p>
        )}

        <button 
          disabled={isLoading}
          type="submit"
          className="w-full py-6 bg-black text-white text-sm font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {t.register.submit}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      <div className="text-center mt-12">
        <button 
          onClick={() => navigate('login')}
          className="text-black/40 text-xs uppercase font-bold tracking-widest hover:text-black transition-colors"
        >
          {t.login.footer.replace('?', '') + '? '}
          <span className="border-b border-black/20 pb-0.5">{t.nav.login}</span>
        </button>
      </div>
    </div>
  );
}

function LoginPage({ t, navigate, lang }: { t: any, navigate: (p: Page) => void, lang: Language }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Client-side validation
    if (!email || !password) {
      setError(lang === 'en' ? 'Please enter your email and password.' : 'يرجى إدخال البريد الإلكتروني وكلمة المرور.');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com)$/;
    if (!emailRegex.test(email)) {
      setError(t.register.errors.email);
      setIsLoading(false);
      return;
    }

    // Simulate finding account and showing demand message
    setTimeout(() => {
      if (email === 'error@test.com') {
        setError(t.login.errors.invalid);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        navigate('success');
      }
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-light mb-6 serif-italic">{t.login.title}</h1>
        <p className="text-black/60 max-w-sm mx-auto">{t.login.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="border border-black/5 bg-white p-12 space-y-10 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-black" />
        
        <div className="space-y-8">
          <div className="space-y-4">
            <label className={cn(
              "font-bold uppercase opacity-40",
              lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
            )}>{t.login.email}</label>
            <input 
              required
              type="email" 
              placeholder="name@gmail.com"
              maxLength={100}
              className="w-full px-0 py-3 bg-transparent border-b border-black/10 focus:border-black outline-none transition-all placeholder:opacity-30"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className={cn(
              "font-bold uppercase opacity-40",
              lang === 'ar' ? "text-xs tracking-normal" : "text-[10px] tracking-widest"
            )}>{t.login.password}</label>
            <input 
              required
              type="password" 
              placeholder="••••••••"
              maxLength={50}
              className="w-full px-0 py-3 bg-transparent border-b border-black/10 focus:border-black outline-none transition-all placeholder:opacity-30"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-[10px] uppercase tracking-widest font-bold bg-red-50 p-4 border-l-2 border-red-500"
          >
            {error}
          </motion.p>
        )}

        <button 
          disabled={isLoading}
          type="submit"
          className="w-full py-6 bg-black text-white text-sm font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {t.login.submit}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      <div className="text-center mt-12">
        <button 
          onClick={() => navigate('register')}
          className="text-black/40 text-xs uppercase font-bold tracking-widest hover:text-black transition-colors"
        >
          {t.login.footer} <span className="border-b border-black/20 pb-0.5">{t.nav.register}</span>
        </button>
      </div>
    </div>
  );
}

function SuccessPage({ t }: { t: any }) {
  const lang = document.documentElement.lang as Language;
  return (
    <div className="max-w-2xl mx-auto border border-black/5 bg-white p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-black" />
      <div className="flex justify-center mb-12">
        <div className="w-20 h-20 bg-black flex items-center justify-center">
          <CheckCircle2 className="text-white w-10 h-10 stroke-1" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-light mb-8 italic serif-italic">{t.register.success.split(" — ")[0]}</h1>
      <p className="text-lg text-black/60 leading-loose mb-12">
        {t.register.success.split(" — ")[1]}
      </p>
    </div>
  );
}

function Footer({ t, lang }: { t: any, lang: Language }) {
  return (
    <footer className="py-12 bg-black text-white px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
            </div>
            <span className="font-bold tracking-tighter italic">CONTEXT<span className="font-light">AI</span></span>
          </div>
          <p className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">
            {t.footer.rights}
          </p>
        </div>
        
        <div className={cn(
          "flex gap-12 font-bold uppercase opacity-60",
          lang === 'ar' ? "text-[12px] tracking-normal" : "text-[10px] tracking-[0.2em]"
        )}>
          <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.privacy}</a>
          <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.security}</a>
          <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.api}</a>
        </div>
      </div>
    </footer>
  );
}
