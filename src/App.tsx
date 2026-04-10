import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import { Toaster } from '@/components/ui/toaster'

function App() {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    // Set favicon to the Eleve logo SVG dynamically
    link.href =
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none'><path d='M16 2L2 9.5V22.5L16 30L30 22.5V9.5L16 2Z' stroke='%23C2622A' stroke-width='1.5' stroke-linejoin='round'/><path d='M16 7L6 12.5V19.5L16 25L26 19.5V12.5L16 7Z' stroke='%23C2622A' stroke-width='1.5' stroke-linejoin='round' stroke-dasharray='2 2' opacity='0.7'/><circle cx='16' cy='16' r='3' fill='%23C2622A'/></svg>"
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
