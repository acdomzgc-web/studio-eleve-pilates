import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import Fundadora from './pages/Fundadora'
import NotFound from './pages/NotFound'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="fundadora" element={<Fundadora />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
