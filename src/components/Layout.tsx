import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoUrl from '@/assets/logo-eleve-2d6df.png'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const NAV_LINKS = [
  { name: 'O Estúdio', href: '#estudio' },
  { name: 'Método', href: '#metodo' },
  { name: 'Clara Freitas', href: '#clara' },
  { name: 'Localização', href: '#contato' },
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle smooth scroll for anchor links if on home page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/' && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled ? 'glass-header py-3' : 'bg-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <img src={logoUrl} alt="Studio Eleve Pilates" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-eleve-primary',
                  isScrolled ? 'text-eleve-dark' : 'text-white/90 hover:text-white',
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://wa.link/9pxdyl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Experiência
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? 'text-eleve-dark' : 'text-white'}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white pt-16">
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-lg font-medium text-eleve-dark hover:text-eleve-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="mt-4 pt-6 border-t border-gray-100">
                    <a
                      href="https://wa.link/9pxdyl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center"
                    >
                      Agendar Experiência
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="bg-eleve-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <img
                src={logoUrl}
                alt="Eleve Logo"
                className="h-16 w-auto brightness-0 invert opacity-90"
              />
              <p className="text-white/70 text-sm max-w-xs font-serif italic">
                Eleve sua performance a um novo nível ✨
              </p>
            </div>

            <div className="flex flex-col space-y-4 items-center md:items-start">
              <h4 className="font-serif text-lg text-eleve-secondary">Contato</h4>
              <a
                href="https://wa.link/9pxdyl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/elevestudiopilates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" /> @elevestudiopilates
              </a>
            </div>

            <div className="flex flex-col space-y-4 items-center md:items-start">
              <h4 className="font-serif text-lg text-eleve-secondary">Endereço</h4>
              <p className="text-white/70 text-sm flex items-start gap-2 max-w-xs">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Curitiba, PR
                  <br />
                  (Localização sob consulta)
                </span>
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Studio Eleve Pilates. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.link/9pxdyl"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
