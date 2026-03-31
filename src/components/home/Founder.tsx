import { Link } from 'react-router-dom'
import claraUrl from '../../assets/clara-eleve-ded89.png'

export function Founder() {
  return (
    <section id="clara" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative animate-fade-in-up">
            <div className="absolute -inset-4 bg-secondary/30 rounded-3xl transform rotate-3 scale-105 opacity-50 z-0"></div>
            <img
              src={claraUrl}
              alt="Clara Freitas - Fundadora do Eleve Pilates"
              className="relative z-10 w-full max-w-md mx-auto lg:max-w-none rounded-2xl shadow-2xl object-cover aspect-[4/5] md:aspect-auto md:h-[600px] object-top"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-40 z-0"></div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="animate-fade-in-up [animation-delay:100ms]">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
                Sobre a Fundadora
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Clara Freitas</h2>
            </div>

            <div className="animate-fade-in-up [animation-delay:200ms]">
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed text-xl font-bold text-foreground mb-6">
                  Mais do que ensinar exercícios, existe um propósito: ajudar pessoas a viverem com
                  menos dor, mais consciência corporal e mais qualidade de vida.
                </p>
                <p className="leading-relaxed font-medium">
                  A ELEVE nasceu desse olhar. De quem acredita que movimento também é forma de
                  cuidar das pessoas. Cada aula é pensada para respeitar os limites e potencializar
                  as capacidades do seu corpo.
                </p>
              </div>
            </div>

            <div className="mt-8 animate-fade-in-up [animation-delay:300ms]">
              <Link
                to="/fundadora"
                className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors group"
              >
                Conheça a história completa
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
