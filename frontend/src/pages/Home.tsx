import Header from '../components/Header'
import portrait from '../assets/portrait.webp'

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-8">
      <Header />
      <section className="grid items-center gap-14 py-14 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-muted">Software developer · Málaga</p>
          <h1 className="mt-4 font-mono text-5xl font-bold leading-tight md:text-7xl">
            <span className="type inline-block overflow-hidden whitespace-nowrap border-r-[3px] border-accent align-bottom">
              Svetlana
            </span>
            <span className="sur block text-accent">Titovskaia</span>
          </h1>
          <p className="mb-8 mt-7 max-w-lg text-lg leading-relaxed text-muted">
            Seven years in localization, now building full-stack and systems software
            with TypeScript, React and C/C++.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-accent px-5 py-3.5 font-semibold text-ink">
              View projects
            </a>
            <a href="#cv" className="rounded-lg border border-line px-5 py-3.5 font-semibold">
              Download CV
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm overflow-hidden">
  {/* лиловая «атмосфера» за фигурой */}
  <div
    aria-hidden
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(196,167,255,0.35),transparent_65%)]"
  />

  <img src={portrait} alt="Svetlana Titovskaia" className="relative w-full" />

  {/* цвет фона плавно наезжает на низ и бока фото */}
  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
  <div aria-hidden className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-ink to-transparent" />
  <div aria-hidden className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-ink to-transparent" />
</div>
      </section>
    </div>
  )
}