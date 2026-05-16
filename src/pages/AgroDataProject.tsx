import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SHOWCASE_IMAGES = [
  {
    src: '/agrodata/general-presentation.jpg',
    alt: 'AgroData general platform presentation',
  },
  {
    src: '/agrodata/financing-statistic.jpg',
    alt: 'AgroData statistic about farmers needing access to financing',
  },
  {
    src: '/agrodata/why-us.jpg',
    alt: 'AgroData why us slide with five advantages',
  },
  {
    src: '/agrodata/freemium-app.jpg',
    alt: 'AgroData freemium app for farmers',
  },
]

export default function AgroDataProject() {
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
                  AgriTech Platform
                </span>
                <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-lime-300">
                  Farm data platform
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-body font-light leading-[0.9] tracking-tight">
                Agro
                <em className="font-display text-lime-300" style={{ fontStyle: 'italic' }}>
                  Data
                </em>
              </h1>
            </div>

            <p className="text-sm md:text-base text-muted max-w-md leading-relaxed">
              A digital agriculture platform that helps farmers collect, manage,
              and share accurate farm data.
            </p>
          </div>

          <section className="rounded-[32px] md:rounded-[44px] border border-stroke bg-surface/30 overflow-hidden mb-8 md:mb-10">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/ulXUDFvwu4g?rel=0&modestbranding=1&playsinline=1"
                title="AgroData project demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-10">
            <div className="rounded-[32px] border border-stroke bg-surface/40 p-6 md:p-8">
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Problem</span>
              <h2 className="text-2xl md:text-4xl leading-tight mt-5 mb-5">
                Agricultural data is often incomplete, outdated, or collected manually.
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                This makes it difficult for farmers to access support and for the
                government to understand real needs in the agricultural sector.
              </p>
            </div>

            <div className="rounded-[32px] border border-lime-400/25 bg-lime-400/10 p-6 md:p-8">
              <span className="text-xs text-lime-300 uppercase tracking-[0.3em]">Solution</span>
              <h2 className="text-2xl md:text-4xl leading-tight mt-5 mb-5">
                Data collection becomes simple, motivating, and useful for farmers.
              </h2>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                AgroData uses intuitive onboarding, simple data input,
                gamification, incentives, rewards, and access to opportunities to
                motivate farmers to keep their information accurate and updated.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-5 mb-8 md:mb-10">
            <figure className="overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-white">
              <img
                src={SHOWCASE_IMAGES[0].src}
                alt={SHOWCASE_IMAGES[0].alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </figure>
          </section>

          <section className="rounded-[32px] md:rounded-[44px] border border-stroke bg-surface/35 p-6 md:p-10 mb-8 md:mb-10">
            <div className="max-w-4xl">
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Impact</span>
              <h2 className="text-3xl md:text-5xl leading-tight mt-5 mb-6">
                Turning farm data into rewards, opportunities, and stronger public insight.
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-5">
                Farmers are motivated to provide accurate and updated information
                because they receive rewards, access to opportunities, and
                potential financial benefits.
              </p>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                At the same time, the platform helps the government receive more
                reliable agricultural data. Institutions can use aggregated data to
                better understand the sector, identify needs, and prepare stronger
                applications for grants or funding programs that ultimately support
                farmers.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-5 mb-8 md:mb-10">
            {SHOWCASE_IMAGES.slice(1).map(image => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-white"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </figure>
            ))}
          </section>

          <section className="rounded-[32px] md:rounded-[44px] border border-lime-400/25 bg-lime-400/10 p-6 md:p-10 mb-12 md:mb-16">
            <span className="text-xs text-lime-300 uppercase tracking-[0.3em]">In short</span>
            <p className="text-2xl md:text-4xl leading-tight mt-5 text-white/90">
              AgroData helps farmers turn farm data into rewards and opportunities,
              while helping the government collect accurate insights needed to
              attract more funding and grants for the agricultural sector.
            </p>
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
