import { useEffect, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import AgroDataThought from './pages/AgroDataThought'
import Portfolio from './pages/Portfolio'
import PlatefulProject from './pages/PlatefulProject'
import Achievements from './pages/Achievements'
import AmiabilProject from './pages/AmiabilProject'
import LogoFolioProject from './pages/LogoFolioProject'
import AgroDataProject from './pages/AgroDataProject'
import AcumProject from './pages/AcumProject'
import FermaMaxianProject from './pages/FermaMaxianProject'

function Page({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page>
              <Index />
            </Page>
          }
        />
        <Route
          path="/work/plateful"
          element={
            <Page>
              <PlatefulProject />
            </Page>
          }
        />
        <Route
          path="/work/amiabil"
          element={
            <Page>
              <AmiabilProject />
            </Page>
          }
        />
        <Route
          path="/work/logo-folio"
          element={
            <Page>
              <LogoFolioProject />
            </Page>
          }
        />
        <Route
          path="/work/agrodata"
          element={
            <Page>
              <AgroDataProject />
            </Page>
          }
        />
        <Route
          path="/work/brand-identity"
          element={
            <Page>
              <AcumProject />
            </Page>
          }
        />
        <Route
          path="/work/saas-demo"
          element={
            <Page>
              <FermaMaxianProject />
            </Page>
          }
        />
        <Route
          path="/work/:slug"
          element={
            <Page>
              <ProjectDetail />
            </Page>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Page>
              <Portfolio />
            </Page>
          }
        />
        <Route
          path="/achievements"
          element={
            <Page>
              <Achievements />
            </Page>
          }
        />
        <Route
          path="/thoughts/agrodata-gigahack"
          element={
            <Page>
              <AgroDataThought />
            </Page>
          }
        />
        <Route
          path="*"
          element={
            <Page>
              <NotFound />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
