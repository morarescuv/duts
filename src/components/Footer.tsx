import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'


const MARQUEE_TEXT = 'BUILDING DIGITAL PRODUCTS • '

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Behance', href: 'https://behance.net' },
  { name: 'GitHub', href: 'https://github.com' },
]

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

 
  /* ── GSAP marquee ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background video — flipped vertically */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: 'translate(-50%, -50%) scaleY(-1)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="text-3xl md:text-5xl lg:text-6xl font-display italic text-text-primary/15 flex-shrink-0 pr-6"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16 md:mb-20 px-5 sm:px-6">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-8">
            LET'S WORK TOGETHER
          </p>
          <a
            href="mailto:hello@duts.agency"
            className="gb-ghost inline-flex items-center gap-2 rounded-full text-lg sm:text-xl md:text-3xl font-display italic px-6 sm:px-8 py-4 break-all"
            style={{ fontStyle: 'italic' }}
          >
            morarescu.business@gmail.com ↗
          </a>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
          {/* Social links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-[0.1em]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Available indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-muted">Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
