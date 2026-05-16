import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LOGOS = [
  { src: '/logo-folio/logo-01.jpg', alt: 'Logo Folio mark 01' },
  { src: '/logo-folio/logo-02.jpg', alt: 'Logo Folio mark 02' },
  { src: '/logo-folio/logo-03.jpg', alt: 'Logo Folio mark 03' },
  { src: '/logo-folio/logo-04.jpg', alt: 'Logo Folio mark 04' },
  { src: '/logo-folio/logo-05.jpg', alt: 'Logo Folio mark 05' },
  { src: '/logo-folio/logo-06.jpg', alt: 'Logo Folio mark 06' },
]

export default function LogoFolioProject() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32">
        <article className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 md:mb-16">
            <div className="max-w-4xl">
              <Link
                to="/portfolio"
                className="text-xs text-muted uppercase tracking-[0.3em] hover:text-text-primary transition-colors"
              >
                ← Back to portfolio
              </Link>

              <div className="flex flex-wrap items-center gap-3 mt-10 mb-5">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">
                  Branding
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Logo collection
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-body font-light leading-[0.9] tracking-tight">
                Logo{' '}
                <em className="font-display" style={{ fontStyle: 'italic' }}>
                  Folio
                </em>
              </h1>
            </div>

            <p className="text-sm md:text-base text-muted max-w-md leading-relaxed">
              A curated collection of logo marks, symbols, and visual identity
              explorations created by DUTS.
            </p>
          </div>

          <section className="grid grid-cols-1 gap-5 md:gap-6 mb-12 md:mb-16">
            {LOGOS.map((logo, index) => (
              <figure
                key={logo.src}
                className="aspect-square rounded-[32px] md:rounded-[44px] border border-stroke bg-white overflow-hidden p-8 sm:p-10 md:p-12 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </figure>
            ))}
          </section>

          <Link
            to="/portfolio"
            className="gb-ghost inline-flex items-center gap-2 rounded-full text-sm px-6 py-3"
          >
            ← Back to portfolio
          </Link>
        </article>
      </main>
    </div>
  )
}
