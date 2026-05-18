import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const ROLES = ['Branding', 'Product', 'Web', 'AI']
const HLS_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  /* ── HLS video ── */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = () => {
      void video.play().catch(() => {})
    }

    video.muted = true
    video.defaultMuted = true
    video.playsInline = true

    if (Hls.isSupported()) {
      const hls = new Hls({ startLevel: -1 })
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, playVideo)
      video.addEventListener('canplay', playVideo)
      video.addEventListener('pause', playVideo)
      return () => {
        video.removeEventListener('canplay', playVideo)
        video.removeEventListener('pause', playVideo)
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC
      video.addEventListener('loadedmetadata', playVideo)
      video.addEventListener('canplay', playVideo)
      video.addEventListener('pause', playVideo)
      video.load()
    }

    return () => {
      video.removeEventListener('loadedmetadata', playVideo)
      video.removeEventListener('canplay', playVideo)
      video.removeEventListener('pause', playVideo)
    }
  }, [])

  /* ── Role cycling ── */
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex(i => (i + 1) % ROLES.length),
      2000,
    )
    return () => clearInterval(id)
  }, [])

  /* ── GSAP entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
        },
        '<',
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="blur-in text-[11px] sm:text-xs text-muted uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-6 sm:mb-8">
          CREATIVE AGENCY
        </p>

        {/* Name */}
<div className="flex justify-center">
  <img src="/logo.png" alt="DUTS" className="w-72 h-auto my-8" />
</div>
        {/* Role tagline */}
        <p className="blur-in text-sm md:text-base text-muted mb-4 max-w-xs sm:max-w-none mx-auto">
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          agency building digital experiences.
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-10 sm:mb-12">
          We are a multidisciplinary creative and technology agency designing
          brands, digital products, web platforms, SaaS tools, video content,
          and AI-powered solutions.
        </p>

        {/* CTA */}
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          <Link to="/portfolio">
            <button className="gb-solid rounded-full text-sm px-6 sm:px-7 py-3 sm:py-3.5 hover:scale-105">
              See Works
            </button>
          </Link>
          <a href="mailto:morarescu.business@gmail.com">
            <button className="gb-outline rounded-full text-sm px-6 sm:px-7 py-3 sm:py-3.5 hover:scale-105">
              Reach out...
            </button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute inset-0 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
