import { Link, Outlet } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import logoImg from '@/assets/logo-eleve-photoroom-a4984.png'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-beige text-dark-brown font-sans flex flex-col selection:bg-terracotta/30">
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-500 border-b border-transparent',
          isScrolled ? 'bg-moss text-beige shadow-lg py-3' : 'bg-transparent text-white py-6',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Eleve Logo"
              className={cn(
                'transition-all duration-500 group-hover:scale-105 object-contain',
                isScrolled ? 'w-10 h-10' : 'w-12 h-12',
              )}
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif tracking-[0.15em] transition-colors">
                ELEVE
              </span>
              <span
                className={cn(
                  'text-[0.6rem] uppercase tracking-[0.2em] font-light transition-colors',
                  isScrolled ? 'text-beige/70' : 'text-white/70',
                )}
              >
                Pilates e Performance
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.15em] font-medium">
            <a href="#sobre" className="hover:text-terracotta transition-colors">
              Sobre
            </a>
            <a href="#metodo" className="hover:text-terracotta transition-colors">
              Método
            </a>
            <a href="#unidades" className="hover:text-terracotta transition-colors">
              Unidades
            </a>
            <a href="#planos" className="hover:text-terracotta transition-colors">
              Planos
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/elevestudiopilates/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-terracotta transition-colors hidden sm:block"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5541988741221"
              target="_blank"
              rel="noreferrer"
              className="bg-terracotta hover:bg-[#A85525] text-white px-6 py-3 rounded-none text-xs uppercase tracking-[0.1em] font-medium flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Contato</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-moss text-white py-24 border-t-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-20">
            <img src={logoImg} alt="Eleve Logo" className="w-40 h-40 object-contain opacity-90" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-center md:text-left mb-20 max-w-5xl mx-auto">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-terracotta tracking-[0.2em] text-xs font-bold uppercase mb-8">
                Navegação
              </h3>
              <ul className="space-y-4 text-white/80 font-light text-sm">
                <li>
                  <a href="#sobre" className="hover:text-terracotta transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#metodo" className="hover:text-terracotta transition-colors">
                    O Método
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-terracotta transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-terracotta transition-colors">
                    Planos
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-terracotta tracking-[0.2em] text-xs font-bold uppercase mb-8">
                Nossas Unidades
              </h3>
              <ul className="space-y-6 text-white/80 font-light text-sm">
                <li>
                  <strong className="font-medium text-white block mb-1">Santo Inácio</strong>
                  <span className="opacity-70">Rodovia Curitiba - Ponta Grossa Br-277, 2658</span>
                </li>
                <li>
                  <strong className="font-medium text-white block mb-1">República</strong>
                  <span className="opacity-70">Rua Deputado Waldemiro Pedroso, 201</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-terracotta tracking-[0.2em] text-xs font-bold uppercase mb-8">
                Contato
              </h3>
              <ul className="space-y-4 text-white/80 font-light text-sm">
                <li>(41) 98874-1221</li>
                <li>contato@elevepilates.com.br</li>
              </ul>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.instagram.com/elevestudiopilates/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-beige/40 flex items-center justify-center text-beige hover:bg-terracotta hover:border-terracotta hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5541988741221"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-beige/40 flex items-center justify-center text-beige hover:bg-terracotta hover:border-terracotta hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-beige/40 font-sans font-light text-xs tracking-wider uppercase">
              © {new Date().getFullYear()} ELEVE Pilates e Performance. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
