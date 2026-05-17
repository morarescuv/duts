import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const ENTRIES = [
  {
    id: 1,
    title: 'AgroData at GigaHack Hackathon Deep Tech 2025',
    readTime: '5 min read',
    date: 'Sep 2025',
    image: publicAsset('agrodata/general-presentation.jpg'),
    href: '/work/agrodata',
  },
  {
    id: 2,
    title: 'Co-worked with the Ministry of Internal Affairs',
    readTime: '4 min read',
    date: 'Mar 2025',
    image: publicAsset('amiabil/payment.png'),
    href: '/work/amiabil',
  },
  {
    id: 3,
    title: 'Acum Community - Re-branding',
    readTime: '6 min read',
    date: 'Feb 2025',
    image: publicAsset('ACUM/Artboard 1.png'),
    href: '/work/brand-identity',
  },
  
]

export default function Journal() {
  return (
    <section className="bg-bg pt-8 md:pt-10 pb-40 sm:pb-64 md:pb-96">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Journal
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary mb-3 leading-tight">
              Recent{' '}
              <em className="font-display" style={{ fontStyle: 'italic' }}>
                thoughts
              </em>
            </h2>
            <p className="text-sm text-muted max-w-sm">
              Perspectives on design, technology, and building digital products
              that matter.
            </p>
          </div>
          <a
            href="#"
            className="gb-ghost hidden md:inline-flex items-center gap-2 rounded-full text-sm px-6 py-3"
          >
            View all →
          </a>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <Link
                to={entry.href}
                className="flex items-center gap-4 sm:gap-6 p-4 rounded-[30px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke cursor-pointer transition-colors duration-300 group"
              >
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base text-text-primary line-clamp-2">
                    {entry.title}
                  </h3>
                </div>
                <div className="hidden sm:flex flex-col items-end flex-shrink-0 gap-1">
                  <span className="text-xs text-muted">{entry.readTime}</span>
                  <span className="text-xs text-muted">{entry.date}</span>
                </div>
                <span className="text-muted text-lg flex-shrink-0 group-hover:text-text-primary transition-colors">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
