import { motion } from 'framer-motion'

const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Done' },
  { value: '5', label: 'Team Members' },
]

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-stroke pt-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="text-6xl md:text-8xl font-display italic text-text-primary mb-3 leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-muted uppercase tracking-[0.25em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
