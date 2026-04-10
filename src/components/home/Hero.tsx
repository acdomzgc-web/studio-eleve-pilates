import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
      <div className="absolute inset-0 bg-background/80 z-10" />
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=pilates%20studio&color=black')] dark:bg-[url('https://img.usecurling.com/p/1920/1080?q=pilates%20studio&color=black')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" />

      <div className="container relative z-20 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="text-primary tracking-[0.3em] text-sm md:text-base mb-6 font-medium animate-fade-in-up uppercase">
          Excelência em Movimento
        </span>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight animate-fade-in-up text-foreground"
          style={{ animationDelay: '100ms' }}
        >
          ELEVE PILATES E PERFORMANCE
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          Mais do que ensinar exercícios, ajudamos pessoas a viverem com menos dor, mais consciência
          corporal e mais qualidade de vida. O movimento como forma de cuidar de você.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="https://wa.me/5541988741221"
            target="_blank"
            rel="noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-base font-medium tracking-wide flex items-center justify-center gap-2 transition-all group shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]"
          >
            Agendar minha primeira aula
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sobre"
            className="bg-transparent hover:bg-muted text-foreground border border-border hover:border-foreground/40 px-8 py-4 rounded-full text-base font-medium tracking-wide flex items-center justify-center transition-all"
          >
            Conheça nossa história
          </a>
        </div>
      </div>
    </section>
  )
}
