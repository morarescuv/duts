import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { explorationCards } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const col1Items = explorationCards.filter(c => c.column === 1)
const col2Items = explorationCards.filter(c => c.column === 2)

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: contentRef.current,
        pinSpacing: false,
      })

      const cards = gsap.utils.toArray<HTMLElement>(
        '[data-exploration-card]',
        sectionRef.current ?? undefined,
      )

      cards.forEach(card => {
        const fromY = Number(card.dataset.fromy ?? '100')
        const toY = Number(card.dataset.toy ?? '-120')
        const startOffset = Number(card.dataset.start ?? '0')
        const endOffset = Number(card.dataset.end ?? '0')
        const rotation = Number(card.dataset.rotation ?? '0')
        const order = Number(card.dataset.order ?? '0')

        gsap.set(card, { willChange: 'transform', rotation })

        const base = window.innerWidth < 768 ? 140 : 220
        const span = window.innerWidth < 768 ? 780 : 1050

        gsap.fromTo(
          card,
          { y: fromY, rotation },
          {
            y: toY,
            rotation,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top+=${order * base + startOffset} top`,
              end: () => `top+=${order * base + span + endOffset} top`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[225vh] md:min-h-[240vh] bg-bg overflow-hidden"
      >
        {/* Layer 1 — Pinned center content */}
        <div
          ref={contentRef}
          className="relative z-40 md:z-10 h-[100svh] flex items-center justify-center pointer-events-none"
        >
          <div className="text-center max-w-[340px] px-6 py-6 rounded-[26px] bg-bg/95 border border-stroke shadow-2xl shadow-black/40 md:max-w-none md:px-6 md:py-0 md:rounded-none md:bg-transparent md:border-0 md:shadow-none">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Explorations
              </span>
              <div className="w-8 h-px bg-stroke" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-body font-light text-text-primary mb-4 leading-tight">
              Visual{' '}
              <em className="font-display" style={{ fontStyle: 'italic' }}>
                playground
              </em>
            </h2>

            <p className="text-sm text-muted max-w-sm mx-auto mb-8">
              Motion, art direction, and experimental visual work from the DUTS
              studio.
            </p>

            <Link
              to="/portfolio"
              className="gb-ghost pointer-events-auto inline-flex items-center gap-2 rounded-full text-sm px-6 py-3"
            >
              View portfolio →
            </Link>
          </div>
        </div>

        {/* Layer 2 — Parallax columns */}
        <div className="absolute inset-0 z-10 md:z-20 pointer-events-none">
          <div className="relative w-full h-full max-w-[1400px] mx-auto px-2 sm:px-6">
            <div className="grid grid-cols-2 gap-14 sm:gap-12 md:gap-40 h-full">
              {/* Column 1 — left */}
                <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 pointer-events-auto pt-28 md:pt-36">
                  {col1Items.map((item, idx) => {
                    const secondCardOffset = idx === 1 ? 180 : 0

                    return (
                      <Link
                        key={item.slug}
                        to={`/work/${item.slug}`}
                        data-exploration-card
                        data-order={idx}
                        data-fromy={Number(item.parallaxFrom ?? 100) + secondCardOffset}
                        data-toy={Number(item.parallaxTo ?? -120) + secondCardOffset}
                        data-start={item.startOffset}
                        data-end={item.endOffset}
                        data-rotation={item.rotation}
                        className="group relative aspect-square w-full max-w-[120px] sm:max-w-[220px] md:max-w-[320px] rounded-2xl overflow-hidden cursor-pointer will-change-transform"
                        aria-label={`View project — ${item.title}`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div
                            className="rounded-full p-[2px]"
                            style={{
                              background:
                                'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
                            }}
                          >
                            <div className="bg-white text-bg rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap">
                              View project —{' '}
                              <em
                                className="font-display"
                                style={{ fontStyle: 'italic' }}
                              >
                                {item.title}
                              </em>{' '}
                              <span className="text-xs text-black/60 ml-2">
                                {item.category}
                              </span>{' '}
                              ↗
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              {/* Column 2 — right */}
              <div className="flex flex-col gap-6 sm:gap-10 pointer-events-auto pt-36 sm:pt-64 items-end">
                {col2Items.map((item, idx) => (
                  <Link
                    key={item.slug}
                    to={`/work/${item.slug}`}
                    data-exploration-card
                    data-order={idx}
                    data-fromy={item.parallaxFrom}
                    data-toy={item.parallaxTo}
                    data-start={item.startOffset}
                    data-end={item.endOffset}
                    data-rotation={item.rotation}
                    className="group relative aspect-square w-full max-w-[120px] sm:max-w-[220px] md:max-w-[320px] rounded-2xl overflow-hidden cursor-pointer will-change-transform"
                    aria-label={`View project — ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div
                        className="rounded-full p-[2px]"
                        style={{
                          background:
                            'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
                        }}
                      >
                        <div className="bg-white text-bg rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap">
                          View project —{' '}
                          <em
                            className="font-display"
                            style={{ fontStyle: 'italic' }}
                          >
                            {item.title}
                          </em>{' '}
                          <span className="text-xs text-black/60 ml-2">
                            {item.category}
                          </span>{' '}
                          ↗
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}