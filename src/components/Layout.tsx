import { Link, Outlet } from 'react-router-dom'
import { Instagram, MessageCircle, MapPin } from 'lucide-react'
import logoUrl from '../assets/logo-eleve-photoroom-c338f.png'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoUrl} alt="Studio Eleve Pilates" className="h-14 w-auto object-contain" />
            <span className="font-bold text-xl text-primary hidden sm:inline-block">
              Studio Eleve
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/fundadora"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Fundadora
            </Link>
            <a
              href="/#unidades"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Unidades
            </a>
            <a
              href="https://wa.me/5541988314723"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2 gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline-block">Agende sua aula</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoUrl}
                alt="Studio Eleve Pilates"
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-muted/80 leading-relaxed max-w-xs">
              Cuidado, consciência corporal e qualidade de vida através do Pilates em um ambiente
              premium e acolhedor.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-secondary">Navegação</h3>
            <div className="flex flex-col gap-4 text-sm text-muted/80">
              <Link to="/fundadora" className="hover:text-primary transition-colors font-medium">
                Sobre a Fundadora
              </Link>
              <Link to="/" className="hover:text-primary transition-colors font-medium">
                Página Inicial
              </Link>
              <a href="/#unidades" className="hover:text-primary transition-colors font-medium">
                Nossas Unidades
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-secondary">Nossas Unidades</h3>
            <div className="flex flex-col gap-4 text-sm text-muted/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <p className="leading-relaxed">
                  <strong className="text-white block mb-1">Santo Inácio</strong>
                  Rodovia Curitiba - Ponta Grossa Br-277, 2658
                  <br />
                  (Dentro da Crossfit High Pulse Matriz)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <p className="leading-relaxed">
                  <strong className="text-white block mb-1">Novo Mundo</strong>
                  Rua Deputado Waldemiro Pedroso, 201
                  <br />
                  (Dentro da Crossfit High Pulse República)
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-secondary">Contato</h3>
            <div className="flex flex-col gap-4 text-sm text-muted/80">
              <a
                href="https://wa.me/5541988314723"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-3 font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                (41) 98831-4723
              </a>
              <a
                href="https://www.instagram.com/elevestudiopilates/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-3 font-medium"
              >
                <Instagram className="w-5 h-5" />
                @elevestudiopilates
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-muted/20 text-center text-sm text-muted/60">
          <p>
            &copy; {new Date().getFullYear()} Studio Eleve Pilates. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
