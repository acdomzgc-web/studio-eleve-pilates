import { Link, Outlet } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-light tracking-widest text-orange-500 group-hover:text-orange-400 transition-colors">
              ELEVE
            </span>
            <span className="text-sm font-light tracking-widest hidden sm:inline-block border-l border-white/20 pl-2 ml-2 text-zinc-300">
              PILATES E PERFORMANCE
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <a href="#sobre" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Serviços
            </a>
            <a href="#unidades" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Unidades
            </a>
            <a href="#planos" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Planos
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/elevestudiopilates/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5541988741221"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Contato</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-zinc-900 border-t border-white/5 py-12 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-light tracking-widest text-orange-500 mb-2">ELEVE</h2>
            <p className="text-zinc-400 text-sm font-light">
              Pilates e Performance para uma vida com mais qualidade.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/elevestudiopilates/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-zinc-950 border border-white/10 rounded-full hover:border-orange-500 hover:text-orange-500 text-zinc-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5541988741221"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-zinc-950 border border-white/10 rounded-full hover:border-orange-500 hover:text-orange-500 text-zinc-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/5 text-center text-zinc-500 font-light text-xs">
          © {new Date().getFullYear()} ELEVE Pilates e Performance. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
