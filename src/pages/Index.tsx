import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from '../components/LoadingScreen'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Works from '../components/Works'
import Journal from '../components/Journal'
import Explorations from '../components/Explorations'
import Services from '../components/Services'
import DiscoveryCall from '../components/DiscoveryCall'
import Footer from '../components/Footer'

export default function Index() {
  const [isLoading, setIsLoading] = useState(
    () => sessionStorage.getItem('duts_loaded') !== '1',
  )

  useEffect(() => {
    if (isLoading || window.location.hash !== '#services') return

    requestAnimationFrame(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [isLoading])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={() => {
              sessionStorage.setItem('duts_loaded', '1')
              setIsLoading(false)
            }}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Explorations />
            <Works />
            <Services />
            <DiscoveryCall />
            <Journal />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
