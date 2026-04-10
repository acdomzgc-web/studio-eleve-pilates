import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=woman%20smiling%20pilates%20reformer%20studio')] bg-cover bg-center bg-no-repeat" />

      {/* Moss-green overlay 60% */}
      <div className="absolute inset-0 bg-moss/60 z-10" />

      <div className="container relative z-20 px-4 flex flex-col items-center text-center max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.05em] mb-8 leading-[1.1] animate-fade-in-up">
          ELEVE PILATES E PERFORMANCE
        </h1>

        <p
          className="text-lg md:text-2xl text-beige/90 mb-12 max-w-3xl font-light leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          Transforme seu corpo e sua mente com cuidado, intenção e método
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="https://wa.me/5541988741221"
            target="_blank"
            rel="noreferrer"
            className="bg-terracotta hover:bg-[#A85525] text-white px-10 py-5 text-sm uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-terracotta/20"
          >
            Agendar minha primeira aula
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#sobre"
            className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-10 py-5 text-sm uppercase tracking-[0.15em] font-medium flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            Conheça nossa história
          </a>
        </div>
      </div>
    </section>
  )
}
