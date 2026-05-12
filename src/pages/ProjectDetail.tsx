import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getProjectBySlug } from '../data/projects'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug

  if (!slug) return <NotFound />

  const project = getProjectBySlug(slug)
  if (!project) return <NotFound />

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div>
                <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
                  {project.category}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.95] tracking-tight">
                  {project.title}
                </h1>
              </div>
              <div className="text-xs text-muted uppercase tracking-[0.3em]">
                {project.year}
              </div>
            </div>

            <p className="text-sm md:text-base text-muted max-w-2xl">
              {project.description}
            </p>

            <div className="rounded-3xl overflow-hidden border border-stroke bg-surface">
              <div className="aspect-[4/3] sm:aspect-[16/9] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pt-6 md:pt-10">
              <div className="md:col-span-7">
                <h2 className="text-xl md:text-2xl text-text-primary mb-3">
                  Project overview
                </h2>
                <p className="text-sm md:text-base text-muted">
                  We approached this project with a focus on clarity, momentum, and
                  a cohesive design system — balancing product utility with strong
                  brand presence.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-stroke bg-surface p-6">
                  <div className="text-xs text-muted uppercase tracking-[0.3em] mb-4">
                    Services
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map(service => (
                      <span
                        key={service}
                        className="text-xs px-3 py-1.5 rounded-full bg-stroke/40 text-text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 md:pt-14 pb-16 md:pb-20">
              <Link
                to="/"
                className="gb-ghost inline-flex items-center gap-2 rounded-full text-sm px-6 py-3"
              >
                ← Back to work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
