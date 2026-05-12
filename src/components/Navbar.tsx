import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/#services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const active =
    location.pathname === '/portfolio'
      ? 'Work'
      : location.hash === '#services'
        ? 'Services'
        : 'Home'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-6 px-3 sm:px-4">
      <div
        className={`inline-flex items-center max-w-full rounded-full backdrop-blur-md border border-white/10 bg-surface px-1.5 sm:px-2 py-1.5 sm:py-2 transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/30' : ''
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex-shrink-0 group"
          aria-label="DUTS home"
        >
          <span
            className="absolute inset-0 rounded-full p-[2px] flex transition-all duration-300 group-hover:scale-110"
            style={{
              background:
                'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            }}
          >
            <span className="flex-1 rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary leading-none">
                DU
              </span>
            </span>
          </span>
        </Link>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Nav links */}
        {NAV_LINKS.map(link => (
          <button
            key={link.label}
            onClick={() => {
              if (link.href === '/#services') {
                if (location.pathname !== '/') {
                  navigate('/#services')
                  return
                }

                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
                window.history.replaceState(null, '', '/#services')
                return
              }

              navigate(link.href)
            }}
            className={`text-[11px] sm:text-sm rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
              active === link.label
                ? 'text-text-primary bg-stroke/50'
                : 'text-muted hover:text-text-primary hover:bg-stroke/50'
            }`}
          >
            {link.label}
          </button>
        ))}

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Say hi */}
        <a
          href="mailto:hello@duts.agency"
          className="gb-ghost rounded-full text-[11px] sm:text-sm px-2.5 sm:px-4 py-1.5 sm:py-2 inline-flex items-center gap-1 whitespace-nowrap"
        >
          Say hi ↗
        </a>
      </div>
    </nav>
  )
}
