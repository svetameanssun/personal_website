import React from 'react'

interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  description: string[]
}

interface EducationItem {
  degree: string
  institution: string
  period: string
  details?: string
}

export default function CV() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Developer Studies',
      company: '42 Málaga (Fundación Telefónica)',
      period: '2023 - Present',
      location: 'Málaga, Spain',
      description: [
        'Peer-to-peer, project-based curriculum focused on systems programming, networking, algorithms, and web development.',
        'Engineered C/C++ projects conforming to POSIX standards, strict memory management without leaks under Valgrind, and web microservices architectures.',
      ],
    },
    {
      role: 'Localization Specialist',
      company: 'Localsoft, S.L.',
      period: 'Jul 2021 - Jul 2022',
      location: 'Málaga, Spain',
      description: [
        'Delivered video-game localization for international releases, coordinating translation and linguistic QA workflows across multiple target languages.',
        'Ran linguistic QA on localized builds, catching string truncation, encoding faults, and context errors before release.',
        'Acted as final review gate on colleagues’ output.',
      ],
    },
    {
      role: 'English Teacher',
      company: 'Helen Doron English',
      period: 'Sep 2020 - Jun 2021',
      location: 'Málaga, Spain',
      description: [
        'Taught English across all age groups, breaking down complex grammar and phonetics for mixed-ability audiences.',
      ],
    },
    {
      role: 'Industrial Interpreter & Translator',
      company: 'Rutranscom',
      period: 'Jan 2016 - May 2017',
      location: 'Saint Petersburg, Russia',
      description: [
        'Embedded with engineering teams on factory construction projects, interpreting live technical discussions and translating specification documentation.',
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      degree: 'M.A. and B.A. in Translation',
      institution: 'Ural State Technical University',
      period: '2010 - 2015',
    },
    {
      degree: 'B.A. in Business Administration',
      institution: 'Ural State Technical University',
      period: '2011 - 2015',
    },
    {
      degree: 'Computer Science',
      institution: 'GeekBrains (online)',
      period: '2022 - 2023',
    },
  ]

  const skills = [
    { category: 'Languages', list: 'C, C++, C#, Java, Python, TypeScript, JavaScript' },
    { category: 'Systems & Networking', list: 'POSIX, Linux, TCP/IP sockets, non-blocking I/O, poll(), Valgrind' },
    { category: 'Web & Databases', list: 'React, Node.js, Express, HTML5, CSS3, PostgreSQL, Prisma ORM, REST APIs, Microservices' },
    { category: 'Tools & Workflows', list: 'Git & GitHub, Docker, i18n/l10n pipelines, peer code review' },
  ]

  return (
    <section id="cv" className="py-14 border-t border-line">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <p className="font-mono text-sm text-accent"># Background</p>
          {/* Сделали заголовок белым */}
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
            Curriculum Vitae
          </h2>
          <p className="mt-2 text-muted">
            Software developer with 7 years of localization background and international engineering experience.
          </p>
        </div>
        <a
          href="/Svetlana_Titovskaia_CV.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 font-mono text-xs font-semibold text-accent transition-all hover:bg-accent/20 hover:border-accent"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View PDF Resume
        </a>
      </div>

      {/* Technical Skills Overview */}
      <div className="mb-12 rounded-2xl border border-line bg-panel p-6">
        {/* Заголовок навыков */}
        <h3 className="font-mono text-lg font-bold text-white mb-4"># Technical Skills</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category}>
              <span className="font-mono text-xs font-semibold text-accent block mb-1">
                {s.category}
              </span>
              <p className="text-sm text-muted">{s.list}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="grid gap-10 md:grid-cols-3">
        {/* Experience Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Вот этот заголовок Work & Engineering Experience */}
          <h3 className="font-mono text-xl font-bold text-white flex items-center gap-2">
            <span className="text-accent">#</span> Work & Engineering Experience
          </h3>
          <div className="relative border-l border-line pl-6 space-y-8">
            {experiences.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-ink" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  {/* Название роли */}
                  <h4 className="font-mono text-base font-bold text-white">{item.role}</h4>
                  <span className="font-mono text-xs text-accent">{item.period}</span>
                </div>
                <p className="font-mono text-xs text-muted mt-0.5">{item.company} · {item.location}</p>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-muted">
                  {item.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages Column */}
        <div className="space-y-8">
          <div>
            {/* Заголовок Education */}
            <h3 className="font-mono text-xl font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-accent">#</span> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="rounded-xl border border-line bg-panel p-4">
                  {/* Название степени */}
                  <h4 className="font-mono text-sm font-bold text-white">{edu.degree}</h4>
                  <p className="font-mono text-xs text-accent mt-1">{edu.institution}</p>
                  <p className="font-mono text-xs text-muted mt-0.5">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Заголовок Languages */}
            <h3 className="font-mono text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="text-accent">#</span> Languages
            </h3>
            <div className="rounded-xl border border-line bg-panel p-4 space-y-2 text-sm text-muted">
              <p><strong className="text-white font-mono">Russian:</strong> Native</p>
              <p><strong className="text-white font-mono">English:</strong> C1 (Fluent)</p>
              <p><strong className="text-white font-mono">Spanish:</strong> C1 (Fluent / Long-term work permit)</p>
              <p><strong className="text-white font-mono">Other:</strong> Dutch, French, Italian (A2)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}