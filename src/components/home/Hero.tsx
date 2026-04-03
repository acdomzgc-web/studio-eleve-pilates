import { ArrowRight } from 'lucide-react'
import heroImg from '../../assets/espaco-eleve-fe0c1.png'
import logoImg from '../../assets/logo-eleve-photoroom-c338f.png'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Studio Eleve Space"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32 flex flex-col items-center text-center">
        <div className="animate-fade-in-up">
          <img
            src={logoImg}
            alt="Eleve Logo"
            className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-8 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms] font-serif">
          Studio <span className="text-secondary">Eleve</span> Pilates
        </h1>

        <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Transforme sua vida através do movimento consciente. Cuidado, consciência corporal e
          qualidade de vida em um espaço premium feito para você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms]">
          <a
            href="https://wa.me/5541988314723"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105 gap-2"
          >
            Agende sua aula experimental
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#unidades"
            className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-8 py-4 text-base font-bold text-white border border-white/20 hover:bg-white/20 transition-all"
          >
            Conheça as unidades
          </a>
        </div>
      </div>
    </section>
  )
}
