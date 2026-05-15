import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FEATURES = [
  'POS data connection',
  'Sales forecasting',
  'Waste reduction insights',
  'Recommended decisions',
  'Inventory optimization',
  'Proactive business management',
]

const SHOWCASE_IMAGES = [
  {
    src: '/plateful/food-waste-total.png',
    alt: '46.000 tons of food wasted by Moldovan businesses in 2025',
  },
  {
    src: '/plateful/food-waste-metrics.png',
    alt: 'Food waste metrics showing 23 kg per person and 3,8 tons per enterprise annually',
  },
  {
    src: '/plateful/dashboard.png',
    alt: 'Plateful dashboard interface preview',
  },
  {
    src: '/plateful/win-win.png',
    alt: 'Win and win Plateful benefits for business and environment',
  },
  {
    src: '/plateful/workflow.png',
    alt: 'Plateful workflow from POS connection to proactive business decisions',
  },
]

export default function PlatefulProject() {
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
                  HoReCa Analytics
                </span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                  Current / MVP testing
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-body font-light leading-[0.9] tracking-tight">
                Plate
                <em className="font-display text-emerald-400" style={{ fontStyle: 'italic' }}>
                  ful
                </em>
              </h1>
            </div>

            <p className="text-sm md:text-base text-muted max-w-md leading-relaxed">
              Analytics platform for HoReCa businesses that transforms POS data into
              predictive insights, enabling accurate sales forecasting, reduced
              waste, and improved operational efficiency.
            </p>
          </div>

          <section className="rounded-[32px] md:rounded-[44px] border border-stroke bg-surface/30 overflow-hidden mb-8 md:mb-10">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/FU_9Ury6p04?rel=0&modestbranding=1&playsinline=1"
                title="Plateful project video"
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
                Every unsold product thrown away means lost money and wasted resources.
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                HoReCa owners often react too late: stock expires, demand changes,
                products remain unsold, and daily decisions are made without enough
                predictive context.
              </p>
            </div>

            <div className="rounded-[32px] border border-emerald-400/25 bg-emerald-400/10 p-6 md:p-8">
              <span className="text-xs text-emerald-300 uppercase tracking-[0.3em]">Solution</span>
              <h2 className="text-2xl md:text-4xl leading-tight mt-5 mb-5">
                A proactive management tool for forecasting, decisions, and operations.
              </h2>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                Plateful connects with POS data, turns raw sales activity into useful
                business insights, forecasts performance, and recommends better
                inventory and operational decisions.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-5 mb-8 md:mb-10">
            {SHOWCASE_IMAGES.map(image => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-white"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </figure>
            ))}
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 md:mb-16">
            {FEATURES.map(feature => (
              <div key={feature} className="rounded-full border border-stroke bg-surface/30 px-5 py-3 text-sm text-muted">
                {feature}
              </div>
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
