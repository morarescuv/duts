import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main className="pt-32">
        <section className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="rounded-3xl border border-stroke bg-surface p-8 md:p-12">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">
              404
            </p>
            <h1 className="text-4xl md:text-6xl font-display italic mb-4">
              Page not found
            </h1>
            <p className="text-sm md:text-base text-muted max-w-xl mb-8">
              The page you’re looking for doesn’t exist, or the project slug is
              incorrect.
            </p>
            <Link
              to="/"
              className="gb-ghost inline-flex items-center gap-2 rounded-full text-sm px-6 py-3"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
