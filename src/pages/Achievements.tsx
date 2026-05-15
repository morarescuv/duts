import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ACHIEVEMENTS = [
  {
    title: 'Winners of Deeptech Gigahack',
    detail: 'Biggest hackathon in the Republic of Moldova.',
  },
  {
    title: 'Winners of Vision 360 Bootcamp',
    detail: 'Organized by Dreamups and Sigmoid.',
  },
  {
    title: 'Graduated Deeptech Academy',
    detail: 'Program by Technovator.',
  },
  {
    title: 'Co-worked with the Ministry of Internal Affairs',
    detail: 'Contributed to the Amiabil platform.',
    href: '/work/amiabil',
    linkLabel: 'View Amiabil project',
  },
  {
    title: '2nd place at Ecologic Innovative Solutions',
    detail: 'Competition by UNDP.',
  },
  {
    title: '2nd place at DIGIEDUHACK',
    detail: 'Recognized for innovative education-focused solutions.',
  },
]

export default function Achievements() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32">
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">
                  Achievements
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-body font-light leading-[0.95] tracking-tight">
                Milestones{' '}
                <em className="font-display" style={{ fontStyle: 'italic' }}>
                  won
                </em>
              </h1>
            </div>
            <p className="text-sm text-muted max-w-sm">
              A snapshot of hackathons, programs, partnerships, and recognition
              earned while building practical technology products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <article
                key={achievement.title}
                className={`rounded-[32px] border border-stroke bg-surface/30 p-6 sm:p-8 md:p-10 ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="text-xs text-muted uppercase tracking-[0.3em] mb-8">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4">
                  {achievement.title}
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-xl">
                  {achievement.detail}
                </p>
                {achievement.href && achievement.linkLabel && (
                  <Link
                    to={achievement.href}
                    className="gb-ghost inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 mt-8"
                  >
                    {achievement.linkLabel} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
