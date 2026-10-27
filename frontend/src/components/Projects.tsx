import React from 'react'

interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  link: string
  highlight?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'transcendence',
      title: 'ft_transcendence',
      tagline: 'Multiplayer trivia platform with microservices architecture',
      description:
        'Designed and shipped the internationalization (i18n) layer with runtime language switching and locale fallbacks. Decomposed a monolithic storage layer into isolated per-service PostgreSQL databases using Prisma ORM to unblock independent service deployment.',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'React', 'i18n', 'Microservices'],
      link: 'https://github.com/svetameanssun/ft_transcendence',
      highlight: 'Featured Project',
    },
    {
      id: 'ft_irc',
      title: 'ft_irc',
      tagline: 'RFC-compliant IRC server in C++98',
      description:
        'Built a standards-compliant Internet Relay Chat server from scratch. Engineered a single-threaded non-blocking event loop using poll() to handle TCP/IP socket multiplexing, partial reads, and back-pressure. Zero memory leaks under Valgrind.',
      tags: ['C++98', 'TCP/IP', 'poll()', 'Socket Programming', 'OOP', 'Valgrind'],
      link: 'https://github.com/svetameanssun/ft_irc',
    },
    {
      id: 'cub3d',
      title: 'cub3d',
      tagline: '3D Raycasting Engine in C',
      description:
        'Developed a dynamic 3D graphical engine inspired by the classic 1992 Wolfenstein 3D game using MiniLibX. Implemented raycasting algorithms, texture mapping, wall collision detection, and sprite rendering using pure C and POSIX system calls.',
      tags: ['C', 'Raycasting', 'MiniLibX', 'Computer Graphics', 'Math', 'Algorithms'],
      link: 'https://github.com/svetameanssun/cub3d',
    },
    {
      id: 'so_long',
      title: 'so_long',
      tagline: '2D Tile-based Game in C',
      description:
        'Created a top-down 2D game focusing on window management, event handling, sprite rendering, and pathfinding validation (DFS/BFS) using MiniLibX and custom C graphics management.',
      tags: ['C', 'MiniLibX', 'Game Loop', 'Pathfinding', '2D Graphics'],
      link: 'https://github.com/svetameanssun/so_long',
    },
  ]

  return (
    <section id="projects" className="py-14">
      <div className="mb-10">
        <p className="font-mono text-sm text-accent"># Portfolio</p>
        <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight md:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-2 text-muted">
          Systems programming, networking, graphics engines, and full-stack microservices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xl font-bold text-white transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
                    {project.highlight}
                  </span>
                )}
              </div>

              <p className="mt-2 font-mono text-xs font-medium text-accent">
                {project.tagline}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-line bg-background/50 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent hover:underline"
              >
                View on GitHub
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}