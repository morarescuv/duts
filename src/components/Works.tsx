import { motion } from 'framer-motion'

const TEAM = [
  {
    name: 'VLAD MORARESCU',
    title: 'PROJECT MANAGER / SENIOR DESIGNER',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
  },
  {
    name: 'DANA MOLDOVANU',
    title: 'FULLSTACK DEVELOPER',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80',
  },
  {
    name: 'SANDU ROTARI',
    title: 'COPYWRITER / MARKETER',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
  },
]

const LINKEDIN_URL = 'https://www.linkedin.com/in/vlad-morarescu-4a6086306/'

const titleTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
}

const memberVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
}

export default function Works() {
  return (
    <section className="relative bg-[#0a0a0a] pt-14 sm:pt-16 md:pt-20 pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 min-h-[58vh] grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-4 text-left">
          <motion.h2
            className="text-white font-body font-normal tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={titleTransition}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="block whitespace-nowrap">
              Our{' '}
              <span
                className="font-display italic"
                style={{ fontStyle: 'italic' }}
              >
                team
              </span>
            </span>
            <span className="block">& roles</span>
          </motion.h2>

          <motion.p
            className="text-xs md:text-sm text-white/80 max-w-[280px] leading-tight mt-8 md:mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Working with clients around the world, we provide design, branding,
            packaging, creative direction, web development, product design, video
            production, and AI integrations.
          </motion.p>
        </div>

        <motion.div
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-8 sm:gap-6 lg:gap-5 xl:gap-6 justify-items-center justify-center lg:justify-end items-end mt-2 sm:mt-4 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          {TEAM.map(member => (
            <motion.article
              key={`${member.name}-${member.title}`}
              variants={memberVariants}
              className="group flex flex-col items-stretch text-center w-full max-w-[300px] sm:max-w-none sm:w-[220px] md:w-[230px] lg:w-[250px] xl:w-[280px]"
            >
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`See more about ${member.name} on LinkedIn`}
                className="block rounded-[40px] border border-stroke bg-surface/30 p-3 transition-all duration-300 hover:bg-surface hover:border-white/20 cursor-pointer"
              >
                <div className="relative w-full h-[300px] sm:h-[280px] md:h-[310px] lg:h-[320px] overflow-hidden rounded-[30px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale contrast-110 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[1deg]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  <span className="absolute right-3 bottom-3 rounded-full bg-white text-bg text-[10px] md:text-xs px-3 py-1.5 leading-none opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                    See more ↗
                  </span>
                </div>

                <div className="px-3 pt-5 pb-2 flex items-center justify-between gap-3">
                  <div className="flex flex-col items-start text-left gap-1 min-w-0">
                    <p className="uppercase text-[10px] md:text-xs text-white leading-tight tracking-tight">
                      NAME: {member.name}
                    </p>
                    <p className="uppercase text-[9px] md:text-[10px] text-white/65 leading-tight tracking-tight">
                      TITLE: {member.title}
                    </p>
                  </div>
                  <span className="text-white/60 text-sm shrink-0 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
