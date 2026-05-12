import { motion } from 'framer-motion'

const SERVICE_CATEGORIES = [
  {
    title: 'Strategy & Identity',
    services: ['Branding', 'Creative direction', 'Packaging'],
  },
  {
    title: 'Digital Products',
    services: ['Product design', 'Web development', 'AI integrations'],
  },
  {
    title: 'Content & Motion',
    services: ['Design', 'Video production'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-bg pt-24 sm:pt-32 md:pt-64 pb-28 sm:pb-40 md:pb-64">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
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
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-body font-light text-text-primary mb-3 leading-tight">
              What we{' '}
              <em className="font-display" style={{ fontStyle: 'italic' }}>
                create
              </em>
            </h2>
            <p className="text-sm text-muted max-w-sm">
              Flexible creative and technical services for ambitious brands,
              products, and digital platforms.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              className="rounded-[32px] border border-stroke bg-surface/30 p-6 transition-all duration-300 hover:bg-surface hover:border-white/20 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs text-muted tabular-nums block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base md:text-lg text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <span className="text-white/60 text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {category.services.map(service => (
                  <div
                    key={service}
                    className="rounded-full border border-stroke/70 px-4 py-2 text-xs text-muted"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
