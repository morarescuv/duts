import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { projects } from '../data/projects'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32">
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">
                  Portfolio
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-body font-light leading-[0.95] tracking-tight">
                Selected{' '}
                <em className="font-display" style={{ fontStyle: 'italic' }}>
                  work
                </em>
              </h1>
            </div>
            <p className="text-sm text-muted max-w-sm">
              A focused collection of platforms, brand systems, visual
              explorations, and product ideas created by DUTS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={`group relative overflow-hidden rounded-[36px] border border-stroke bg-surface/30 ${
                  i % 3 === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={i % 3 === 0 ? 'aspect-[4/3] sm:aspect-[16/8]' : 'aspect-[4/3]'}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5 flex items-end justify-between gap-4 sm:gap-6">
                  <div>
                    <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-[0.18em] sm:tracking-[0.25em] mb-2">
                      {project.category} / {project.year}
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-4xl text-white tracking-tight">
                      {project.title}
                    </h2>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-white text-bg text-xs px-4 py-2 shrink-0 transition-transform group-hover:translate-x-1">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
