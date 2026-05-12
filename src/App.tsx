import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import AgroDataThought from './pages/AgroDataThought'
import Portfolio from './pages/Portfolio'

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
