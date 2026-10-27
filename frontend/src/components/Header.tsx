const links = ['About', 'Projects', 'CV', 'Contact']
const langs = ['EN', 'ES', 'RU']

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 py-6">
      <a href="/" className="font-mono text-lg font-bold text-accent">S.T.</a>
      <nav className="flex flex-wrap items-center gap-5 text-[15px] text-muted">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="py-2 hover:text-accent">{l}</a>
        ))}
        <div className="flex gap-1 rounded-md border border-line px-1.5 py-0.5 font-mono text-[13px]">
          {langs.map((l) => (
            <button
              key={l}
              type="button"
              className={l === 'EN' ? 'font-bold text-accent' : 'hover:text-accent'}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}