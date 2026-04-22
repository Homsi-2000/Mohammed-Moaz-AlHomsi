import profileImg from './assets/profile.jpg'
import uaeMapImg from './assets/uae-map.png'

import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'

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

function Layout({ children }) {
  const navBase =
    'inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white'
  const navActive = 'bg-white/10 text-white'

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[30rem] w-[30rem] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <NavLink to="/" className="text-cyan-300 text-sm font-semibold tracking-[0.28em]">
            MMA
          </NavLink>

          <nav className="flex flex-wrap items-center gap-3">
            <NavLink to="/" end className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
              <House className="h-4 w-4" />
              <span>Home</span>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
              <UserRound className="h-4 w-4" />
              <span>About</span>
            </NavLink>

            <NavLink to="/projects" className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
              <BriefcaseBusiness className="h-4 w-4" />
              <span>Projects</span>
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `${navBase} ${isActive ? navActive : ''}`}>
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">{children}</main>
    </div>
  )
}

function HomePage() {
  const cards = [
    {
      icon: Eye,
      title: 'Vision',
      text: 'To build a career defined by meaningful impact, strategic thinking, and long-term value creation across business, consulting, and public-sector transformation.',
    },
    {
      icon: Compass,
      title: 'Mission',
      text: 'To help organizations improve performance, strengthen client and stakeholder engagement, and turn strategy into practical, measurable outcomes.',
    },
    {
      icon: Target,
      title: 'Goal',
      text: 'To continue growing as a consultant and business development professional while contributing to high-value projects that create visible and sustainable results.',
    },
    {
      icon: Quote,
      title: 'Quote',
      text: 'Real impact comes from understanding people, solving the right problem, and executing with clarity.',
    },
  ]

  return (
    <Layout>
      <style>{`
        @keyframes pulseDot {
          0% { transform: translate(-50%, -50%) scale(0.92); box-shadow: 0 0 0 0 rgba(34,211,238,0.55); }
          70% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 16px rgba(34,211,238,0); }
          100% { transform: translate(-50%, -50%) scale(0.92); box-shadow: 0 0 0 0 rgba(34,211,238,0); }
        }
        .pulse-marker {
          animation: pulseDot 2.1s infinite;
        }
      `}</style>

      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
              <House className="h-4 w-4 text-cyan-300" />
              <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Home</span>
            </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-2 shadow-xl">
                  <img
                    src={profileImg}
                    alt="Mohammed Moaz Alhomsi"
                    className="h-40 w-40 rounded-[22px] object-cover lg:h-52 lg:w-52"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                  Mohammed Moaz Alhomsi
                </h1>
                <p className="mt-4 text-2xl text-slate-300">Business Development Consultant</p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-400">
              Business development, consulting, and public-sector excellence initiatives across strategy,
              client engagement, and performance improvement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                <span>View Projects</span>
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                <span>Contact</span>
              </NavLink>
            </div>
          </div>

          <div>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 lg:p-6">
              <div className="overflow-hidden rounded-[24px] border border-cyan-400/10 bg-[linear-gradient(180deg,#0b1424_0%,#081120_100%)] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-cyan-300" />
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">UAE Presence</p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    United Arab Emirates
                  </div>
                </div>

                <div className="relative aspect-[1.22/1] overflow-hidden rounded-[20px] border border-white/10 bg-[#06101c]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.06),transparent_28%),linear-gradient(180deg,#08111f_0%,#06101c_100%)]" />

                  <img
                    src={uaeMapImg}
                    alt="United Arab Emirates map"
                    className="absolute inset-0 h-full w-full object-contain p-4 opacity-95"
                  />

                  <div className="group absolute left-[56%] top-[46%]">
                    <div className="pulse-marker absolute h-4 w-4 rounded-full bg-cyan-300" />
                    <div className="pointer-events-none ml-5 mt-[-10px] hidden rounded-xl border border-cyan-300/20 bg-[#08111f]/95 px-3 py-2 shadow-lg backdrop-blur-sm group-hover:block">
                      <p className="text-sm font-semibold text-white">Abu Dhabi, UAE</p>
                    </div>
                  </div>

                  <div className="group absolute left-[75.5%] top-[35.5%]">
                    <div className="pulse-marker absolute h-4 w-4 rounded-full bg-cyan-300" />
                    <div className="pointer-events-none mr-5 mt-[-10px] -translate-x-full hidden rounded-xl border border-cyan-300/20 bg-[#08111f]/95 px-3 py-2 text-right shadow-lg backdrop-blur-sm group-hover:block">
                      <p className="text-sm font-semibold text-white">Fujairah, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className={`rounded-[24px] border p-6 ${
                  card.title === 'Quote'
                    ? 'border-cyan-400/15 bg-cyan-400/5'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <div className="inline-flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">{card.title}</p>
                </div>
                <p className={`mt-4 text-sm leading-8 ${card.title === 'Quote' ? 'italic text-slate-200' : 'text-slate-300'}`}>
                  {card.text}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

function AboutPage() {
  const sections = [
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
  ]

  return (
    <Layout>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <UserRound className="h-4 w-4 text-cyan-300" />
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">About Me</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Professional Introduction</h1>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
            I do my best work when strategy is clear, execution is disciplined, and the solution creates real value.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {sections.map((item, index) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7"
          >
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
    </Layout>
  )
}

function ProjectsPage() {
  const projects = [
    {
      title: 'ICP UAE – Global Stars (7 Stars) & GEM 2.0 Implementation',
      description:
        'Led implementation of the UAE Government Global Stars Service Excellence Framework across multiple ICP centers, including assessments, improvement roadmaps, audit readiness, and institutional performance enhancement.',
    },
    {
      title: 'MOHAP – Excellence Incubator System',
      description:
        'Co-developed and managed an excellence incubator system for employee evaluation and award participation, integrating performance data and structured assessments with reporting aligned to MOHAP standards.',
    },
    {
      title: 'TDRA – Service Quality & Data Analytics',
      description:
        'Analyzed large-scale datasets using priority matrices and gap analysis, delivered service improvement recommendations, and contributed to a digital assessment system supporting 7 Stars evaluations.',
    },
    {
      title: 'AJEP – Mystery Shopper Program',
      description:
        'Delivered mystery shopper assessments across Ajman Government service channels to evaluate customer experience, identify performance gaps, and support service enhancement initiatives.',
    },
  ]

  return (
    <Layout>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Projects</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Selected Engagements</h1>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
            A selection of consulting, service excellence, and public-sector projects that reflect my work across strategy, evaluation, and institutional improvement.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            </div>
            <p className="text-base leading-8 text-slate-400">{project.description}</p>
          </div>
        ))}
      </section>
    </Layout>
  )
}

function ContactPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#0a1728_0%,#091321_55%,#06101c_100%)] p-8 shadow-2xl lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.10),transparent_22%)]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <Mail className="h-4 w-4 text-cyan-300" />
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Contact</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">Let’s Connect</h1>

          <div className="mt-10 grid gap-5 max-w-3xl">
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
                <span className="text-lg font-medium">Fujairah, UAE</span>
              </div>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
              <a
                href="https://www.linkedin.com/in/mohammed-alhomsi-4a8043112"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-white hover:text-cyan-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}