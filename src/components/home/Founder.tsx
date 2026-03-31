import { Reveal } from '@/components/ui/reveal'
import claraUrl from '@/assets/clara-eleve-ded89.png'

export function Founder() {
  return (
    <section id="clara" className="py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal direction="right" className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-eleve-secondary rounded-3xl transform rotate-3 scale-105 opacity-50 z-0"></div>
            <img
              src={claraUrl}
              alt="Clara Freitas - Fundadora do Eleve Pilates"
              className="relative z-10 w-full max-w-md mx-auto lg:max-w-none rounded-2xl shadow-2xl object-cover aspect-[4/5] md:aspect-auto md:h-[600px] object-top"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-eleve-primary rounded-full mix-blend-multiply filter blur-2xl opacity-40 z-0"></div>
          </Reveal>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <Reveal delay={100}>
              <span className="text-eleve-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
                Sobre a Fundadora
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-eleve-dark mb-6">
                Clara Freitas
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="prose prose-lg text-eleve-dark/80">
                <p className="leading-relaxed text-xl font-medium text-eleve-dark mb-6">
                  Mais do que ensinar exercícios, existe um propósito: ajudar pessoas a viverem com
                  menos dor, mais consciência corporal e mais qualidade de vida.
                </p>
                <p className="leading-relaxed">
                  A ELEVE nasceu desse olhar atento e do desejo de oferecer um espaço onde o
                  movimento é tratado com a importância que ele merece. Cada aula é pensada para
                  respeitar os limites e potencializar as capacidades do seu corpo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300} className="mt-8">
              <a
                href="https://wa.link/9pxdyl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-eleve-primary font-medium hover:text-eleve-primaryHover transition-colors group"
              >
                Conheça nosso espaço
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
