import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SHOWCASE_IMAGES = [
  {
    src: '/ACUM/Artboard 1.png',
    alt: 'ACUM brand artboard with red visual system',
  },
  {
    src: '/ACUM/Artboard 1ss.png',
    alt: 'ACUM brand visual direction and messaging',
  },
  {
    src: '/ACUM/Acum-Prez-Motion-1-1.gif',
    alt: 'ACUM presentation motion graphic',
  },
  {
    src: '/ACUM/Comp-1-1.gif',
    alt: 'ACUM animated identity composition',
  },
  {
    src: '/ACUM/Comp-1-1-1.gif',
    alt: 'ACUM animated visual system composition',
  },
  {
    src: '/ACUM/STG_flash(2).gif',
    alt: 'ACUM flashing stage motion graphic',
  },
  {
    src: '/ACUM/Asset 18-8.png',
    alt: 'ACUM fluid brand shape asset',
  },
  {
    src: '/ACUM/Asset 5-8.png',
    alt: 'ACUM directional arrow brand asset',
  },
  {
    src: '/ACUM/01-Free-iPhone-15-Pro-Mockup.jpg',
    alt: 'ACUM mobile brand mockup',
  },
  {
    src: '/ACUM/Free Conference Hall Screen Mockup.jpg',
    alt: 'ACUM conference hall screen mockup',
  },
  {
    src: '/ACUM/Free-Tshirt-Mockup.jpg',
    alt: 'ACUM t-shirt brand mockup',
  },
  {
    src: '/ACUM/Free_Hanging_Tote_Bag_Mockup_3.jpg',
    alt: 'ACUM hanging tote bag mockup',
  },
  {
    src: '/ACUM/Mo2222ckUp.jpg',
    alt: 'ACUM printed brand mockup',
  },
  {
    src: '/ACUM/Mockup.jpg',
    alt: 'ACUM brand identity mockup',
  },
  {
    src: '/ACUM/tape-mockup-glued-to-the-floor-isometric.jpg',
    alt: 'ACUM floor tape brand mockup',
  },
]

export default function AcumProject() {
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
                  Brand Identity
                </span>
                <span className="rounded-full border border-red-500/35 bg-red-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-red-300">
                  Re-branding
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-body font-light leading-[0.9] tracking-tight">
                ACUM{' '}
                <em className="font-display text-red-400" style={{ fontStyle: 'italic' }}>
                  Re-branding
                </em>
              </h1>
            </div>

            <p className="text-sm md:text-base text-muted max-w-md leading-relaxed">
              A bold, minimal identity system for a creative community built
              around the idea that now is the time to create.
            </p>
          </div>

          <section className="rounded-[32px] md:rounded-[44px] border border-red-500/25 bg-red-500/10 p-6 md:p-10 mb-8 md:mb-10">
            <span className="text-xs text-red-300 uppercase tracking-[0.3em]">Concept</span>
            <h2 className="text-3xl md:text-5xl leading-tight mt-5 mb-6">
              ACUM Community is a creative platform built around the idea that now is the time to create.
            </h2>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              Through typography and messaging like “Vremea artiștilor e acum”,
              the project communicates urgency and empowerment, positioning ACUM
              as a modern, expressive community for creators.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-5 mb-8 md:mb-10">
            <figure className="overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-white">
              <img
                src={SHOWCASE_IMAGES[0].src}
                alt={SHOWCASE_IMAGES[0].alt}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </figure>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-10">
            <div className="rounded-[32px] border border-stroke bg-surface/40 p-6 md:p-8">
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Visual system</span>
              <h2 className="text-2xl md:text-4xl leading-tight mt-5 mb-5">
                Fluid shapes, directional arrows, and a strong red palette.
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                The visual language symbolizes movement, energy, and creative
                freedom while staying minimal, bold, and recognizable.
              </p>
            </div>

            <div className="rounded-[32px] border border-red-500/25 bg-red-500/10 p-6 md:p-8">
              <span className="text-xs text-red-300 uppercase tracking-[0.3em]">Scalability</span>
              <h2 className="text-2xl md:text-4xl leading-tight mt-5 mb-5">
                Designed to work across digital and physical spaces.
              </h2>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                The identity is dynamic and scalable, allowing the community to
                expand from screens and social media into events, merchandise,
                installations, and campaign materials.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-5 mb-12 md:mb-16">
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
