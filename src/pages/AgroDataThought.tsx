import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PARAGRAPHS = [
  'At GigaHack Hackathon Deep Tech 2025, the biggest hackathon in the Republic of Moldova, we built AgroData — a platform designed to solve one of agriculture’s biggest hidden challenges: trust.',
  'The problem was clear: farmers need subsidies, and institutions need reliable data to provide them. But many farmers do not trust sharing their information directly with the government.',
  'So we asked ourselves: what if farmers could share data in a way that benefits them first?',
  'That is how AgroData was created.',
  'We built a data-driven agricultural platform where farmers can easily collect, manage, and share farm data through simple onboarding, intuitive inputs, incentives, gamification, and marketplace opportunities.',
  'For institutions, AgroData provides aggregated analytics that support better decision-making without creating the feeling of surveillance.',
  'During the hackathon, we validated the idea through discussions with mentors, participants, and industry-minded people around us. Every conversation helped us refine the product, understand the real pain points, and shape a solution that connects farmers, institutions, and markets.',
  'AgroData became more than a platform.',
  'It became a bridge of trust — helping farmers unlock rewards and financial opportunities while enabling institutions to make smarter, data-driven decisions.',
  'Proud of what we created at GigaHack Hackathon Deep Tech 2025 and excited about the future of digital agriculture in Moldova.',
]

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80',
    alt: 'Hackathon team working together',
    caption: 'Team validation sessions during the hackathon.',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    alt: 'People collaborating around laptops',
    caption: 'Mentor discussions helped refine the product direction.',
  },
  {
    src: 'https://images.unsplash.com/photo-1492496913980-501348b61469?w=1200&q=80',
    alt: 'Agricultural field landscape',
    caption: 'AgroData connects farmers, institutions, and markets.',
  },
]

export default function AgroDataThought() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32">
        <article className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mb-10 md:mb-16">
            <Link
              to="/"
              className="text-xs text-muted uppercase tracking-[0.3em] hover:text-text-primary transition-colors"
            >
              ← Back home
            </Link>

            <div className="flex items-center gap-3 mt-10 mb-5">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Recent Thoughts
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-body font-light leading-[0.95] tracking-tight mb-6">
              AgroData at{' '}
              <em className="font-display" style={{ fontStyle: 'italic' }}>
                GigaHack
              </em>
            </h1>

            <p className="text-sm md:text-base text-muted max-w-2xl">
              Building a bridge of trust between farmers, institutions, and
              digital agriculture in Moldova.
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-col gap-6 text-sm md:text-base text-text-primary/85 leading-relaxed">
              {PARAGRAPHS.slice(0, 3).map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-stroke bg-surface/30 mt-10 md:mt-16">
            <div className="aspect-[4/3] sm:aspect-[16/9] relative">
              <img
                src={PHOTOS[0].src}
                alt={PHOTOS[0].alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
              <figcaption className="absolute left-3 right-3 bottom-3 md:left-6 md:right-auto md:max-w-sm rounded-2xl border border-white/10 bg-bg/80 backdrop-blur-md px-4 py-3 text-xs text-white/80 leading-tight">
                {PHOTOS[0].caption}
              </figcaption>
            </div>
          </figure>

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex flex-col gap-6 text-sm md:text-base text-text-primary/85 leading-relaxed">
              {PARAGRAPHS.slice(3, 7).map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-16">
            {PHOTOS.slice(1).map(photo => (
              <figure
                key={photo.src}
                className="relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-stroke bg-surface/30"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/15 to-transparent" />
                  <figcaption className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/10 bg-bg/80 backdrop-blur-md px-4 py-3 text-xs text-white/80 leading-tight">
                    {photo.caption}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          <div className="max-w-4xl mt-12 md:mt-16">
            <div className="flex flex-col gap-6 text-sm md:text-base text-text-primary/85 leading-relaxed">
              {PARAGRAPHS.slice(7).map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
