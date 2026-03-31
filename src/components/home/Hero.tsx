import { Reveal } from '@/components/ui/reveal'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=pilates%20studio"
          alt="Pilates Studio Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-eleve-dark/95 via-eleve-dark/80 to-eleve-primary/60 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center mt-16">
        <Reveal delay={100} direction="up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 tracking-wide">
            Eleve | Pilates e Performance
          </span>
        </Reveal>

        <Reveal delay={300} direction="up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
            Descubra o poder transformador do pilates!
          </h1>
        </Reveal>

        <Reveal delay={500} direction="up">
          <p className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto flex items-center justify-center gap-2">
            Eleve sua performance a um novo nível{' '}
            <span className="text-eleve-secondary animate-pulse">✨</span>
          </p>
        </Reveal>

        <Reveal delay={700} direction="up">
          <a
            href="https://wa.link/9pxdyl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 gap-2"
          >
            Agendar sua experiência <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
