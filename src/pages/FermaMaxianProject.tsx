import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SHOWCASE_IMAGES = [
  {
    src: '/Maxian/1.jpg',
    alt: 'Ferma Maxian brand overview',
  },
  {
    src: '/Maxian/Insspiratie.png',
    alt: 'Ferma Maxian inspiration board',
  },
  {
    src: '/Maxian/aa.png',
    alt: 'Ferma Maxian brand asset',
  },
  {
    src: '/Maxian/ll.jpg',
    alt: 'Ferma Maxian visual element',
  },
  {
    src: '/Maxian/zz.png',
    alt: 'Ferma Maxian brand composition',
  },
  {
    src: '/Maxian/Ambalaj_costita_de_porc.jpg',
    alt: 'Ferma Maxian pork packaging',
  },
  {
    src: '/Maxian/Ambalaj_fillet_galben 1.png',
    alt: 'Ferma Maxian chicken fillet packaging',
  },
  {
    src: '/Maxian/Free Meat Cutout Box Packaging Mockup3 1.png',
    alt: 'Ferma Maxian meat box packaging mockup',
  },
  {
    src: '/Maxian/Free Sausage Packaging Mockup PSD.jpg',
    alt: 'Ferma Maxian sausage packaging mockup',
  },
  {
    src: '/Maxian/sausage-v1-mockup-top.jpg',
    alt: 'Ferma Maxian sausage packaging top view mockup',
  },
]

export default function FermaMaxianProject() {
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
                <span className="rounded-full border border-red-700/35 bg-red-700/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-red-400">
                  Grocery / Rebranding
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-body font-light leading-[0.9] tracking-tight">
                Ferma{' '}
                <em className="font-display text-red-500" style={{ fontStyle: 'italic' }}>
                  Maxian
                </em>
              </h1>
            </div>

            <p className="text-sm md:text-base text-muted max-w-md leading-relaxed">
              A meat-focused grocery brand built on tradition, quality, and
              authenticity.
            </p>
          </div>

          <section className="rounded-[32px] md:rounded-[44px] border border-red-700/25 bg-red-700/10 p-6 md:p-10 mb-8 md:mb-10">
            <span className="text-xs text-red-400 uppercase tracking-[0.3em]">Concept</span>
            <h2 className="text-3xl md:text-5xl leading-tight mt-5 mb-6">
              Ferma Maxian is a meat-focused grocery brand built on tradition,
              quality, and authenticity.
            </h2>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              The identity combines vintage-inspired typography with detailed
              hand-drawn illustrations to reflect craftsmanship and trust.
              Elements like livestock, farm scenes, and product visuals create a
              rich storytelling system rooted in natural, locally sourced
              products.
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
                Vintage-inspired typography and detailed hand-drawn illustrations.
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                The design extends across packaging, social media, and
                promotions, using a deep red palette to reinforce a strong,
                classic brand presence.
              </p>
            </div>

            <div className="rounded-[32px] border border-red-700/25 bg-red-700/10 p-6 md:p-8">
              <span className="text-xs text-red-400 uppercase tracking-[0.3em]">Storytelling</span>
              <h2 className="text-2xl md:text-4xl leading-tight mt-5 mb-5">
                Livestock, farm scenes, and product visuals create a rich identity system.
              </h2>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                Rooted in natural, locally sourced products, the brand tells a
                story of tradition and quality that resonates with consumers
                seeking authentic experiences.
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
