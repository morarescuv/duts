import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const SERVICES = [
  'Website',
  'Branding',
  'Product design',
  'AI integration',
  'Video production',
  'Creative direction',
  'Other',
]

const FORM_ENDPOINT = import.meta.env.VITE_DISCOVERY_FORM_ENDPOINT

export default function DiscoveryCall() {
  const [selectedService, setSelectedService] = useState(SERVICES[0])
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    referenceUrl: '',
  })

  const referenceLabel = useMemo(() => {
    if (selectedService === 'Website') return 'Current website for analysis'
    if (selectedService === 'Branding') return 'Website or social profile'
    if (selectedService === 'Product design') return 'Current product, app, or reference link'
    if (selectedService === 'AI integration') return 'Current process, tool, or product link'
    if (selectedService === 'Video production') return 'Reference video, channel, or campaign link'
    if (selectedService === 'Creative direction') return 'Brand, campaign, or social profile link'
    return 'Relevant link for context'
  }, [selectedService])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setStatus('submitting')

    const payload = {
      ...form,
      service: selectedService,
      referenceLabel,
      submittedAt: new Date().toISOString(),
    }

    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }

    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      setForm({
        name: '',
        phone: '',
        email: '',
        company: '',
        referenceUrl: '',
      })
      setSelectedService(SERVICES[0])
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-bg pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-32 md:pb-40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          className="rounded-[36px] md:rounded-[48px] border border-stroke bg-surface/30 p-6 sm:p-8 md:p-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(137,170,204,0.16),transparent_40%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">
                  Discovery call
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary leading-tight mb-5">
                Book a free{' '}
                <em className="font-display" style={{ fontStyle: 'italic' }}>
                  expertise call
                </em>
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed max-w-sm">
                Tell us what you want to build, improve, or validate. We will review
                your request and suggest the best next step.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={event => setForm({ ...form, name: event.target.value })}
                className="rounded-full border border-stroke bg-bg/60 px-5 py-4 text-sm text-text-primary outline-none transition-colors placeholder:text-muted focus:border-white/30"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={event => setForm({ ...form, phone: event.target.value })}
                className="rounded-full border border-stroke bg-bg/60 px-5 py-4 text-sm text-text-primary outline-none transition-colors placeholder:text-muted focus:border-white/30"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={event => setForm({ ...form, email: event.target.value })}
                className="rounded-full border border-stroke bg-bg/60 px-5 py-4 text-sm text-text-primary outline-none transition-colors placeholder:text-muted focus:border-white/30"
              />
              <input
                required
                type="text"
                name="company"
                placeholder="Company name"
                value={form.company}
                onChange={event => setForm({ ...form, company: event.target.value })}
                className="rounded-full border border-stroke bg-bg/60 px-5 py-4 text-sm text-text-primary outline-none transition-colors placeholder:text-muted focus:border-white/30"
              />
              <select
                required
                name="service"
                value={selectedService}
                onChange={event => setSelectedService(event.target.value)}
                className="sm:col-span-2 rounded-full border border-stroke bg-bg/60 px-5 py-4 text-sm text-text-primary outline-none transition-colors focus:border-white/30"
              >
                {SERVICES.map(service => (
                  <option key={service} value={service} className="bg-bg text-text-primary">
                    {service}
                  </option>
                ))}
              </select>
              <input
                type="url"
                name="referenceUrl"
                placeholder={`${referenceLabel} (optional)`}
                value={form.referenceUrl}
                onChange={event => setForm({ ...form, referenceUrl: event.target.value })}
                className="sm:col-span-2 rounded-full border border-stroke bg-bg/60 px-5 py-4 text-sm text-text-primary outline-none transition-colors placeholder:text-muted focus:border-white/30"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="gb-solid sm:col-span-2 rounded-full text-sm px-7 py-4 hover:scale-[1.02]"
              >
                {status === 'submitting' ? 'Sending...' : 'Book a free discovery call'}
              </button>
              {status === 'success' && (
                <p className="sm:col-span-2 text-sm text-green-400">
                  Request sent. We will contact you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="sm:col-span-2 text-sm text-red-300">
                  Form endpoint is not connected yet. Add your Google Apps Script URL
                  as VITE_DISCOVERY_FORM_ENDPOINT.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
