import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import profileImg from './assets/profile.jpg'
import uaeMapImg from './assets/uae-map.png'
import { HashRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom'
import {
  House,
  UserRound,
  BriefcaseBusiness,
  Mail,
  MapPinned,
  Phone,
  Eye,
  Target,
  Compass,
  Quote,
} from 'lucide-react'
import { projects } from './data/projects'

const SiteContext = createContext(null)

const translations = {
  en: {
    langLabel: 'Language',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    accessibility: {
      title: 'Accessibility',
      textSize: 'Text size',
      decrease: 'A-',
      increase: 'A+',
      highContrast: 'High contrast',
      grayscale: 'Grayscale',
      reduceMotion: 'Reduce motion',
      underlineLinks: 'Underline links',
      reset: 'Reset',
    },
    home: {
      badge: 'Home',
      title: 'Mohammed Moaz Alhomsi',
      role: 'Business Development Consultant',
      intro:
        'Business development, consulting, and public-sector excellence initiatives across strategy, client engagement, and performance improvement.',
      viewProjects: 'View Projects',
      contact: 'Contact',
      downloadCv: 'Download CV',
      mapTitle: 'UAE Presence',
      mapCountry: 'United Arab Emirates',
      abuDhabi: 'Abu Dhabi, UAE',
      fujairah: 'Fujairah, UAE',
      cards: [
        {
          title: 'Vision',
          text: 'To build a career defined by meaningful impact, strategic thinking, and long-term value creation across business, consulting, and public-sector transformation.',
        },
        {
          title: 'Mission',
          text: 'To help organizations improve performance, strengthen client and stakeholder engagement, and turn strategy into practical, measurable outcomes.',
        },
        {
          title: 'Goal',
          text: 'To continue growing as a consultant and business development professional while contributing to high-value projects that create visible and sustainable results.',
        },
        {
          title: 'Quote',
          text: 'Real impact comes from understanding people, solving the right problem, and executing with clarity.',
        },
      ],
    },
    about: {
      badge: 'About Me',
      title: 'Professional Introduction',
      lead:
        'I do my best work when strategy is clear, execution is disciplined, and the solution creates real value.',
      sections: [
        {
          title: 'Professional Profile',
          text:
            'I am Mohammed Moaz Alhomsi, an American Business Development Consultant based in Fujairah, United Arab Emirates, currently working with Adaa Consulting. I bring over four years of experience across sales, consulting, and client-facing business development roles, with a focus on driving growth, building strong client relationships, and delivering structured, results-oriented solutions.',
        },
        {
          title: 'Academic Foundation',
          text:
            'I hold a Bachelor’s degree in Business Administration with a major in Marketing and a minor in Management from the University of Sharjah. My academic background focused on marketing strategy, consumer behavior, market research, organizational behavior, and strategic planning.',
        },
        {
          title: 'Current Role',
          text:
            'In my current role at Adaa Consulting, I lead business development efforts by building and qualifying sales pipelines, identifying opportunities, preparing technical and financial proposals, conducting market research, engaging with clients, and supporting revenue growth initiatives.',
        },
        {
          title: 'Previous Experience',
          text:
            'Previously, I worked as a Consultant at The Excellencors in Dubai, where I advised clients on business strategy and operational improvements. I also worked across multiple sales roles at Rofo Trading, which strengthened my ability to connect market insight with practical execution and customer engagement.',
        },
        {
          title: 'Working Style',
          text:
            'My strengths include business development strategy, market research, negotiation, client relationship management, and proposal development. I work effectively across teams, ensuring alignment between business, technical, and client requirements.',
        },
        {
          title: 'Long-Term Direction',
          text:
            'In the short term, I am focused on developing my expertise in consulting and business development while expanding into larger and more complex projects. In the long term, my goal is to move into senior consulting or leadership roles where I can guide strategic initiatives and contribute to organizational growth.',
        },
      ],
    },
    projectsPage: {
      badge: 'Selected Work',
      title: 'Projects & Engagements',
      lead:
        'A more structured showcase of consulting, service excellence, public-sector work, and business development projects.',
      search: 'Search projects',
      all: 'All',
      filters: {
        government: 'Government',
        consulting: 'Consulting',
        excellence: 'Excellence',
        digital: 'Digital Systems',
        business: 'Business Development',
      },
      details: 'Highlights',
      open: 'Open project',
    },
    contact: {
      badge: 'Contact',
      title: 'Let’s Connect',
      lead:
        'For consulting opportunities, project discussions, collaboration, or professional networking, the details below are the best way to reach me.',
      linkedin: 'LinkedIn Profile',
      formTitle: 'Quick Message',
      formName: 'Name',
      formCompany: 'Company',
      formReason: 'Reason',
      formMessage: 'Message',
      send: 'Send Message',
      locationValue: 'Fujairah, UAE',
      reasonOptions: ['Consulting inquiry', 'Project discussion', 'Collaboration', 'General contact'],
    },
    projectDetail: {
      badge: 'Project Detail',
      whatIDid: 'What I Did',
      outputs: 'Outputs',
      results: 'Results',
      notFound: 'Project not found',
      back: 'Back to Projects',
    },
  },
  ar: {
    langLabel: 'اللغة',
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      projects: 'الأعمال',
      contact: 'تواصل',
    },
    accessibility: {
      title: 'إمكانية الوصول',
      textSize: 'حجم النص',
      decrease: 'تصغير',
      increase: 'تكبير',
      highContrast: 'تباين عالٍ',
      grayscale: 'تدرج رمادي',
      reduceMotion: 'تقليل الحركة',
      underlineLinks: 'تسطير الروابط',
      reset: 'إعادة ضبط',
    },
    home: {
      badge: 'الرئيسية',
      title: 'محمد معاذ الحمصي',
      role: 'مستشار تطوير أعمال',
      intro:
        'تطوير أعمال واستشارات ومبادرات تميز حكومي في مجالات الاستراتيجية وإدارة العلاقة مع العميل وتحسين الأداء.',
      viewProjects: 'عرض الأعمال',
      contact: 'تواصل',
      downloadCv: 'تحميل السيرة الذاتية',
      mapTitle: 'نطاق العمل داخل الإمارات',
      mapCountry: 'دولة الإمارات العربية المتحدة',
      abuDhabi: 'أبوظبي، الإمارات',
      fujairah: 'الفجيرة، الإمارات',
      cards: [
        {
          title: 'الرؤية',
          text: 'بناء مسار مهني قائم على الأثر الحقيقي والتفكير الاستراتيجي وخلق قيمة طويلة المدى عبر الأعمال والاستشارات والتحول المؤسسي.',
        },
        {
          title: 'الرسالة',
          text: 'مساعدة الجهات على تحسين الأداء وتعزيز التفاعل مع العملاء وأصحاب المصلحة وتحويل الاستراتيجية إلى نتائج عملية قابلة للقياس.',
        },
        {
          title: 'الهدف',
          text: 'الاستمرار في النمو كمستشار ومتخصص في تطوير الأعمال من خلال مشاريع عالية القيمة ذات أثر واضح ومستدام.',
        },
        {
          title: 'مقولة',
          text: 'الأثر الحقيقي يبدأ من فهم الأشخاص، وحل المشكلة الصحيحة، والتنفيذ بوضوح.',
        },
      ],
    },
    about: {
      badge: 'نبذة عني',
      title: 'تقديم مهني',
      lead:
        'أفضل أداء أقدمه يكون عندما تكون الاستراتيجية واضحة، والتنفيذ منضبطًا، والحل يخلق قيمة حقيقية.',
      sections: [
        {
          title: 'الملف المهني',
          text:
            'أنا محمد معاذ الحمصي، مستشار تطوير أعمال أمريكي مقيم في الفجيرة، الإمارات العربية المتحدة، وأعمل حاليًا مع شركة أداء للاستشارات. أمتلك أكثر من أربع سنوات من الخبرة في المبيعات والاستشارات والأدوار التجارية المباشرة مع العملاء، مع تركيز على تحقيق النمو وبناء علاقات قوية وتقديم حلول عملية ومنظمة.',
        },
        {
          title: 'الخلفية الأكاديمية',
          text:
            'أحمل درجة البكالوريوس في إدارة الأعمال بتخصص رئيسي في التسويق وتخصص فرعي في الإدارة من جامعة الشارقة. ركزت دراستي على الاستراتيجية التسويقية وسلوك المستهلك وأبحاث السوق والسلوك التنظيمي والتخطيط الاستراتيجي.',
        },
        {
          title: 'الدور الحالي',
          text:
            'في دوري الحالي في أداء للاستشارات، أقود جهود تطوير الأعمال من خلال بناء وتأهيل مسارات المبيعات، وتحديد الفرص، وإعداد العروض الفنية والمالية، وإجراء أبحاث السوق، والتواصل مع العملاء، ودعم نمو الإيرادات.',
        },
        {
          title: 'الخبرات السابقة',
          text:
            'عملت سابقًا كمستشار في The Excellencors في دبي، حيث دعمت العملاء في الاستراتيجية وتحسين العمليات. كما عملت في عدة أدوار مبيعات لدى Rofo Trading، مما عزز قدرتي على الربط بين فهم السوق والتطبيق العملي والتفاعل المباشر مع العملاء.',
        },
        {
          title: 'أسلوب العمل',
          text:
            'تشمل نقاط قوتي استراتيجية تطوير الأعمال، وأبحاث السوق، والتفاوض، وإدارة علاقات العملاء، وتطوير العروض. أعمل بكفاءة عبر الفرق المختلفة مع الحرص على التوافق بين متطلبات الأعمال والمتطلبات الفنية واحتياجات العميل.',
        },
        {
          title: 'الاتجاه المستقبلي',
          text:
            'على المدى القريب أركز على تعميق خبرتي في الاستشارات وتطوير الأعمال والتوسع في مشاريع أكبر وأكثر تعقيدًا. وعلى المدى الطويل أهدف إلى أدوار قيادية أو استشارية عليا أستطيع من خلالها قيادة مبادرات استراتيجية والمساهمة في نمو الجهات على نطاق أوسع.',
        },
      ],
    },
    projectsPage: {
      badge: 'الأعمال المختارة',
      title: 'المشاريع والإنجازات',
      lead:
        'عرض أكثر تنظيمًا لأعمالي في الاستشارات والتميز الحكومي والأنظمة الرقمية وتطوير الأعمال.',
      search: 'ابحث في المشاريع',
      all: 'الكل',
      filters: {
        government: 'حكومي',
        consulting: 'استشارات',
        excellence: 'تميز',
        digital: 'أنظمة رقمية',
        business: 'تطوير أعمال',
      },
      details: 'أبرز النقاط',
      open: 'فتح المشروع',
    },
    contact: {
      badge: 'تواصل',
      title: 'لنتواصل',
      lead:
        'للاستشارات وفرص المشاريع والتعاون أو التواصل المهني، يمكنكم استخدام المعلومات التالية أو نموذج الرسالة السريع.',
      linkedin: 'الملف الشخصي على لينكدإن',
      formTitle: 'رسالة سريعة',
      formName: 'الاسم',
      formCompany: 'الجهة / الشركة',
      formReason: 'سبب التواصل',
      formMessage: 'الرسالة',
      send: 'إرسال الرسالة',
      locationValue: 'الفجيرة، الإمارات',
      reasonOptions: ['استفسار استشاري', 'مناقشة مشروع', 'تعاون', 'تواصل عام'],
    },
    projectDetail: {
      badge: 'تفاصيل المشروع',
      whatIDid: 'ما الذي قمت به',
      outputs: 'المخرجات',
      results: 'النتائج',
      notFound: 'المشروع غير موجود',
      back: 'العودة إلى المشاريع',
    },
  },
}

const defaultAccessibility = {
  textScale: 1,
  highContrast: false,
  grayscale: false,
  reduceMotion: false,
  underlineLinks: false,
}

function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function useSite() {
  return useContext(SiteContext)
}

function AppShell() {
  const [language, setLanguage] = usePersistentState('site-language', 'en')
  const [accessibility, setAccessibility] = usePersistentState('site-accessibility', defaultAccessibility)
  const [accessOpen, setAccessOpen] = useState(false)

  const t = translations[language]
  const isArabic = language === 'ar'

  const contextValue = useMemo(
    () => ({ language, setLanguage, accessibility, setAccessibility, t, isArabic }),
    [language, accessibility, t, isArabic]
  )

  const styleVars = {
    fontSize: `${accessibility.textScale}rem`,
    filter: accessibility.grayscale ? 'grayscale(1)' : '',
  }

  return (
    <SiteContext.Provider value={contextValue}>
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        style={styleVars}
        className={`${accessibility.highContrast ? 'contrast-125 brightness-110' : ''} ${accessibility.underlineLinks ? '[&_a]:underline' : ''} ${accessibility.reduceMotion ? '[&_*]:!transition-none [&_*]:!animate-none' : ''}`}
      >
        <HashRouter>
          <Layout accessOpen={accessOpen} setAccessOpen={setAccessOpen}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
            </Routes>
          </Layout>
        </HashRouter>
      </div>
    </SiteContext.Provider>
  )
}

function Layout({ children, accessOpen, setAccessOpen }) {
  const { t, language, setLanguage, accessibility, setAccessibility, isArabic } = useSite()

  const navBase =
    'inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white'
  const navActive = 'bg-white/10 text-white'

  const resetAccessibility = () => setAccessibility(defaultAccessibility)

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[30rem] w-[30rem] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <NavLink to="/" className="text-cyan-300 text-sm font-semibold tracking-[0.28em]">
            MMA
          </NavLink>

          <div className="flex flex-wrap items-center gap-3">
            <nav className="flex flex-wrap items-center gap-2">
              <NavLink to="/" end className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
                <House className="h-4 w-4" />
                <span>{t.nav.home}</span>
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
                <UserRound className="h-4 w-4" />
                <span>{t.nav.about}</span>
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
                <BriefcaseBusiness className="h-4 w-4" />
                <span>{t.nav.projects}</span>
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
                <Mail className="h-4 w-4" />
                <span>{t.nav.contact}</span>
              </NavLink>
            </nav>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
              <span>{t.langLabel}</span>
              <button
                onClick={() => setLanguage('en')}
                className={`rounded-lg px-2 py-1 ${language === 'en' ? 'bg-cyan-400 text-slate-950' : 'text-slate-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`rounded-lg px-2 py-1 ${language === 'ar' ? 'bg-cyan-400 text-slate-950' : 'text-slate-300'}`}
              >
                AR
              </button>
            </div>

            <button
              onClick={() => setAccessOpen((v) => !v)}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]"
            >
              {t.accessibility.title}
            </button>
          </div>
        </div>
      </header>

      {accessOpen && (
        <div
          className={`fixed ${isArabic ? 'left-6' : 'right-6'} top-24 z-50 w-[20rem] rounded-[24px] border border-white/10 bg-[#0b1424]/95 p-5 shadow-2xl backdrop-blur-xl`}
        >
          <h3 className="text-lg font-semibold">{t.accessibility.title}</h3>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="mb-2 text-slate-300">{t.accessibility.textSize}</p>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setAccessibility((prev) => ({
                      ...prev,
                      textScale: Math.max(0.9, +(prev.textScale - 0.1).toFixed(1)),
                    }))
                  }
                  className="rounded-lg border border-white/10 px-3 py-2"
                >
                  {t.accessibility.decrease}
                </button>
                <button
                  onClick={() =>
                    setAccessibility((prev) => ({
                      ...prev,
                      textScale: Math.min(1.3, +(prev.textScale + 0.1).toFixed(1)),
                    }))
                  }
                  className="rounded-lg border border-white/10 px-3 py-2"
                >
                  {t.accessibility.increase}
                </button>
              </div>
            </div>

            {[
              ['highContrast', t.accessibility.highContrast],
              ['grayscale', t.accessibility.grayscale],
              ['reduceMotion', t.accessibility.reduceMotion],
              ['underlineLinks', t.accessibility.underlineLinks],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center justify-between gap-3 text-slate-300">
                <span>{label}</span>
                <input
                  type="checkbox"
                  checked={accessibility[key]}
                  onChange={(e) =>
                    setAccessibility((prev) => ({
                      ...prev,
                      [key]: e.target.checked,
                    }))
                  }
                />
              </label>
            ))}

            <button
              onClick={resetAccessibility}
              className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-medium text-slate-950"
            >
              {t.accessibility.reset}
            </button>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">{children}</main>
    </div>
  )
}

function HomePage() {
  const { t, isArabic } = useSite()
  const cards = t.home.cards

  return (
    <>
      <style>{`
        @keyframes pulseDot {
          0% { transform: translate(-50%, -50%) scale(0.92); box-shadow: 0 0 0 0 rgba(34,211,238,0.55); }
          70% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 16px rgba(34,211,238,0); }
          100% { transform: translate(-50%, -50%) scale(0.92); box-shadow: 0 0 0 0 rgba(34,211,238,0); }
        }
        .pulse-marker { animation: pulseDot 2.1s infinite; }
      `}</style>

      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
              <House className="h-4 w-4 text-cyan-300" />
              <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{t.home.badge}</span>
            </div>

            <div
              className={`mt-8 flex flex-col gap-6 ${isArabic ? 'sm:flex-row-reverse sm:items-center' : 'sm:flex-row sm:items-center'}`}
            >
              <div className="shrink-0">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-2 shadow-xl">
                  <img
                    src={profileImg}
                    alt={t.home.title}
                    className="h-40 w-40 rounded-[22px] object-cover lg:h-52 lg:w-52"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                  {t.home.title}
                </h1>
                <p className="mt-4 text-2xl text-slate-300">{t.home.role}</p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-400">{t.home.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                <span>{t.home.viewProjects}</span>
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                <span>{t.home.contact}</span>
              </NavLink>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <span>↓</span>
                <span>{t.home.downloadCv}</span>
              </a>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-white">Featured Work</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {projects.slice(0, 2).map((project) => (
                  <Link
                    key={project.id}
                    to={`/project/${project.id}`}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
                  >
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{project.overview}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 lg:p-6">
              <div className="overflow-hidden rounded-[24px] border border-cyan-400/10 bg-[linear-gradient(180deg,#0b1424_0%,#081120_100%)] p-4">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-cyan-300" />
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{t.home.mapTitle}</p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {t.home.mapCountry}
                  </div>
                </div>

                <div className="relative aspect-[1.22/1] overflow-hidden rounded-[20px] border border-white/10 bg-[#06101c]">
                  <img src={uaeMapImg} alt={t.home.mapCountry} className="absolute inset-0 h-full w-full object-contain p-4 opacity-95" />

                  <div className="group absolute left-[56%] top-[46%]">
                    <div className="pulse-marker absolute h-4 w-4 rounded-full bg-cyan-300" />
                    <div className="pointer-events-none ml-5 mt-[-10px] hidden rounded-xl border border-cyan-300/20 bg-[#08111f]/95 px-3 py-2 shadow-lg backdrop-blur-sm group-hover:block">
                      <p className="text-sm font-semibold text-white">{t.home.abuDhabi}</p>
                    </div>
                  </div>

                  <div className="group absolute left-[75.5%] top-[35.5%]">
                    <div className="pulse-marker absolute h-4 w-4 rounded-full bg-cyan-300" />
                    <div className="pointer-events-none mr-5 mt-[-10px] -translate-x-full hidden rounded-xl border border-cyan-300/20 bg-[#08111f]/95 px-3 py-2 text-right shadow-lg backdrop-blur-sm group-hover:block">
                      <p className="text-sm font-semibold text-white">{t.home.fujairah}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {cards.map((card, index) => {
            const icons = [Eye, Compass, Target, Quote]
            const Icon = icons[index]
            const isQuote = card.title === 'Quote' || card.title === 'مقولة'

            return (
              <div
                key={card.title}
                className={`rounded-[24px] border p-6 ${isQuote ? 'border-cyan-400/15 bg-cyan-400/5' : 'border-white/10 bg-white/[0.04]'}`}
              >
                <div className="inline-flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">{card.title}</p>
                </div>
                <p className={`mt-4 text-sm leading-8 ${isQuote ? 'italic text-slate-200' : 'text-slate-300'}`}>
                  {card.text}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  const { t } = useSite()

  return (
    <>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <UserRound className="h-4 w-4 text-cyan-300" />
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{t.about.badge}</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{t.about.title}</h1>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">{t.about.lead}</p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {t.about.sections.map((item, index) => (
          <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-base leading-8 text-slate-400">{item.text}</p>
          </div>
        ))}
      </section>
    </>
  )
}

function ProjectsPage() {
  const { t } = useSite()
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState(t.projectsPage.all)

  useEffect(() => {
    setActiveFilter(t.projectsPage.all)
  }, [t.projectsPage.all])

  const filters = [t.projectsPage.all, ...Object.values(t.projectsPage.filters)]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.overview.toLowerCase().includes(search.toLowerCase())

    const matchesFilter = activeFilter === t.projectsPage.all || project.tags.includes(activeFilter)
    return matchesSearch && matchesFilter
  })

  return (
    <>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{t.projectsPage.badge}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{t.projectsPage.title}</h1>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">{t.projectsPage.lead}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.projectsPage.search}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2 text-sm ${activeFilter === filter ? 'bg-cyan-400 text-slate-950' : 'border border-white/10 bg-white/[0.04] text-slate-300'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition hover:border-cyan-300/30 hover:bg-white/[0.06]">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>

              <p className="text-base leading-8 text-slate-400">{project.overview}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-slate-500">{t.projectsPage.details}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-sm font-medium text-cyan-300">{t.projectsPage.open} →</div>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}

function ContactPage() {
  const { t } = useSite()
  const [form, setForm] = useState({
    name: '',
    company: '',
    reason: t.contact.reasonOptions[0],
    message: '',
  })

  useEffect(() => {
    setForm((prev) => ({ ...prev, reason: t.contact.reasonOptions[0] }))
  }, [t.contact.reasonOptions])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${form.reason} - ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nReason: ${form.reason}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:moazhomsi23@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <Mail className="h-4 w-4 text-cyan-300" />
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{t.contact.badge}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{t.contact.title}</h1>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">{t.contact.lead}</p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
            <div className="inline-flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span className="text-lg font-medium">moazhomsi23@gmail.com</span>
            </div>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
            <div className="inline-flex items-center gap-3">
              <Phone className="h-5 w-5 text-cyan-300" />
              <span className="text-lg font-medium">+971 56 120 9346</span>
            </div>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
            <div className="inline-flex items-center gap-3">
              <MapPinned className="h-5 w-5 text-cyan-300" />
              <span className="text-lg font-medium">{t.contact.locationValue}</span>
            </div>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
            <a
              href="https://www.linkedin.com/in/mohammed-alhomsi-4a8043112"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium text-white hover:text-cyan-300"
            >
              {t.contact.linkedin}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
          <h3 className="text-2xl font-semibold">{t.contact.formTitle}</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              placeholder={t.contact.formName}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />
            <input
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
              placeholder={t.contact.formCompany}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <select
            value={form.reason}
            onChange={(e) => setForm((prev) => ({ ...prev, reason: e.target.value }))}
            className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none"
          >
            {t.contact.reasonOptions.map((option) => (
              <option key={option} value={option} className="bg-[#07111f]">
                {option}
              </option>
            ))}
          </select>

          <textarea
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            placeholder={t.contact.formMessage}
            rows={7}
            className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />

          <button type="submit" className="mt-5 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
            {t.contact.send}
          </button>
        </form>
      </section>
    </>
  )
}

function ProjectDetailPage() {
  const { t } = useSite()
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
        <h1 className="text-3xl font-semibold">{t.projectDetail.notFound}</h1>
      </div>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{t.projectDetail.badge}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-slate-300">
            {project.role} • {project.sector}
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">{project.overview}</p>

          <div className="mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              ← {t.projectDetail.back}
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 lg:col-span-2">
          <h3 className="text-2xl font-semibold text-white">{t.projectDetail.whatIDid}</h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            {project.actions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
          <h3 className="text-2xl font-semibold text-white">{t.projectDetail.outputs}</h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            {project.outputs.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
        <h3 className="text-2xl font-semibold text-white">{t.projectDetail.results}</h3>
        <ul className="mt-5 space-y-3 text-slate-300">
          {project.results.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default function App() {
  return <AppShell />
}