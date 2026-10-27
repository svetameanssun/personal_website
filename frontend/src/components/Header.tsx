import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 border-b border-line mb-8">
      {/* Логотип или имя слева */}
      <a href="#" className="font-mono text-lg font-bold text-white hover:text-accent transition-colors">
        Systems Thinking, Human Language 
      </a>

      {/* Навигация */}
      <nav className="flex items-center gap-6">
        <a href="#projects" className="font-mono text-sm text-muted hover:text-white transition-colors">
          Projects
        </a>
        <a href="#cv" className="font-mono text-sm text-muted hover:text-white transition-colors">
          CV
        </a>
        <a href="#contacts" className="font-mono text-sm text-muted hover:text-white transition-colors">
          Contacts
        </a>

        {/* Закомментированная кнопка смены языков */}
        {/* 
        <button 
          aria-label="Change language" 
          className="rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted hover:text-white transition-colors"
        >
          EN / RU
        </button>
        */}
      </nav>
    </header>
  )
}