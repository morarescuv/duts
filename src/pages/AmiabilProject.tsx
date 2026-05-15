import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const STEPS = [
  'Qualification check',
  'Participant identification',
  'Vehicle and insurance details',
  'Accident circumstances',
  'Evidence, photos, and location',
  'Responsibility confirmation and insurer submission',
]

const OUTCOMES = [
  'Faster reporting for drivers',
  'Cleaner case data for insurers',
  'Less operational pressure on police',
  'Paperless workflows with EVO integration',
]

const SHOWCASE_IMAGES = [
  {
    src: '/amiabil/lobby.png',
    alt: 'Amiabil lobby creation and QR code joining flow',
  },
  {
    src: '/amiabil/payment.png',
    alt: 'Amiabil accident questionnaire and payment details screens',
  },
  {
    src: '/amiabil/location.png',
    alt: 'Amiabil questionnaire and vehicle damage location selection',
  },
  {
    src: '/amiabil/signature.png',
    alt: 'Amiabil report signing and generated document screen',
  },
]

export default function AmiabilProject() {
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
                  GovTech Platform
                </span>
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-300">
                  Government-backed demo
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-body font-light leading-[0.9] tracking-tight">
                Amiabil
                <em className="font-display text-blue-400" style={{ fontStyle: 'italic' }}>
                  .md
                </em>
              </h1>
            </div>

            <p className="text-sm md:text-base text-muted max-w-md leading-relaxed">
              The demo presents a government-backed digital platform for resolving
              minor car accidents without police involvement.
            </p>
          </div>

          <section className="rounded-[32px] md:rounded-[44px] border border-stroke bg-surface/30 overflow-hidden mb-8 md:mb-10">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/RQE6iS958zM?si=CJuV6v91F3wNShSP"
                title="YouTube video player"
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
                Minor accident reporting is still slow, stressful, and bureaucratic.
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                Today, drivers may need police involvement, paper forms, repeated
                data entry, and manual insurance communication. This creates delays,
                mistakes, and extra operational costs.
              </p>
            </div>

            <div className="rounded-[32px] border border-blue-400/25 bg-blue-400/10 p-6 md:p-8">
              <span className="text-xs text-blue-300 uppercase tracking-[0.3em]">Solution</span>
              <h2 className="text-2xl md:text-4xl leading-tight mt-5 mb-5">
                A guided digital insurance workflow from accident to insurer.
              </h2>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                Instead of completing a long paper form and manually contacting
                insurers, drivers are guided through a simple digital flow that
                collects and validates the required case details.
              </p>
            </div>
          </section>

          <figure className="h-[380px] sm:h-[460px] md:h-[560px] overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-[#649be0] mb-8 md:mb-10">
            <img
              src={SHOWCASE_IMAGES[1].src}
              alt={SHOWCASE_IMAGES[1].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          <section className="rounded-[32px] md:rounded-[44px] border border-stroke bg-surface/30 p-6 md:p-10 mb-8 md:mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5">
                <span className="text-xs text-muted uppercase tracking-[0.3em]">
                  Flow
                </span>
                <h2 className="text-3xl md:text-5xl leading-tight mt-5">
                  50+ required inputs turned into 6 clear steps.
                </h2>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STEPS.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-stroke bg-bg/40 p-5"
                  >
                    <div className="text-[10px] text-muted uppercase tracking-[0.25em] mb-4">
                      Step {index + 1}
                    </div>
                    <p className="text-sm md:text-base text-text-primary">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-10 items-stretch">
            <figure className="h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-[#649be0]">
              <img
                src={SHOWCASE_IMAGES[0].src}
                alt={SHOWCASE_IMAGES[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-[#649be0]">
              <img
                src={SHOWCASE_IMAGES[2].src}
                alt={SHOWCASE_IMAGES[2].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8 md:mb-10">
            <div className="lg:col-span-7 rounded-[32px] border border-stroke bg-surface/40 p-6 md:p-8">
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Impact</span>
              <p className="text-xl md:text-3xl leading-tight mt-5 text-text-primary">
                With future integration into EVO, Amiabil can use digital identity,
                verified documents, and automated data exchange to make the process
                fully paperless and legally reliable.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-[32px] border border-stroke bg-surface/30 p-6 md:p-8">
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Outcomes</span>
              <div className="flex flex-wrap gap-2 mt-6">
                {OUTCOMES.map(outcome => (
                  <span
                    key={outcome}
                    className="text-xs px-3 py-1.5 rounded-full bg-stroke/40 text-text-primary"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <figure className="h-[440px] sm:h-[540px] md:h-[680px] overflow-hidden rounded-[32px] md:rounded-[44px] border border-stroke bg-[#649be0] mb-8 md:mb-10">
            <img
              src={SHOWCASE_IMAGES[3].src}
              alt={SHOWCASE_IMAGES[3].alt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </figure>

          <section className="rounded-[32px] md:rounded-[44px] border border-blue-400/25 bg-blue-400/10 p-6 md:p-10 mb-12 md:mb-16">
            <span className="text-xs text-blue-300 uppercase tracking-[0.3em]">In short</span>
            <p className="text-2xl md:text-5xl leading-tight mt-5 max-w-5xl">
              It transforms minor accident reporting from a confusing paper-based
              procedure into a fast, guided, digital insurance workflow.
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
