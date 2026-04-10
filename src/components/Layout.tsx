import { Link, Outlet } from 'react-router-dom'
import { Instagram, MessageCircle } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-light tracking-widest text-primary group-hover:text-primary/80 transition-colors">
              ELEVE
            </span>
            <span className="text-sm font-light tracking-widest hidden sm:inline-block border-l border-border pl-2 ml-2 text-muted-foreground">
              PILATES E PERFORMANCE
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#unidades"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Unidades
            </a>
            <a
              href="#planos"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Planos
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://www.instagram.com/elevestudiopilates/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hidden sm:block"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5541988741221"
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium tracking-wide flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
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

      <footer className="bg-muted/30 border-t py-12 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-light tracking-widest text-primary mb-2">ELEVE</h2>
            <p className="text-muted-foreground text-sm font-light">
              Pilates e Performance para uma vida com mais qualidade.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/elevestudiopilates/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-background border rounded-full hover:border-primary hover:text-primary text-muted-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5541988741221"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-background border rounded-full hover:border-primary hover:text-primary text-muted-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t text-center text-muted-foreground font-light text-xs">
          © {new Date().getFullYear()} ELEVE Pilates e Performance. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
