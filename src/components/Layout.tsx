import { Link, Outlet } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

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
            <svg
              width="44"
              height="44"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-terracotta transition-transform duration-500 group-hover:scale-105"
            >
              <path
                d="M16 2L2 9.5V22.5L16 30L30 22.5V9.5L16 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M16 7L6 12.5V19.5L16 25L26 19.5V12.5L16 7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeDasharray="2 2"
                opacity="0.7"
              />
              <circle cx="16" cy="16" r="3" fill="currentColor" />
            </svg>
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

      <footer className="bg-moss text-beige py-20 border-t border-moss/80">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
          <svg
            width="56"
            height="56"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-terracotta opacity-80"
          >
            <path
              d="M16 2L2 9.5V22.5L16 30L30 22.5V9.5L16 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M16 7L6 12.5V19.5L16 25L26 19.5V12.5L16 7Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeDasharray="2 2"
              opacity="0.7"
            />
            <circle cx="16" cy="16" r="3" fill="currentColor" />
          </svg>

          <div className="max-w-md">
            <h2 className="text-3xl font-serif mb-4">ELEVE</h2>
            <p className="text-beige/70 font-light text-sm leading-relaxed">
              Transforme seu corpo e sua mente com cuidado, intenção e método. O movimento como
              forma de cuidar de você.
            </p>
          </div>

          <div className="flex gap-6 mt-4">
            <a
              href="https://www.instagram.com/elevestudiopilates/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-beige/5 rounded-full hover:bg-terracotta text-beige transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5541988741221"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-beige/5 rounded-full hover:bg-terracotta text-beige transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <div className="w-full h-px bg-beige/10 mt-8" />

          <div className="text-beige/50 font-light text-xs tracking-wider uppercase">
            © {new Date().getFullYear()} ELEVE Pilates e Performance. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
