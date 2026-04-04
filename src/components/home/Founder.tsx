import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import founderImg from '@/assets/foto-clara-fundadora-80944.jpeg'

export function Founder() {
  return (
    <section id="founder" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl relative z-10">
              <img
                src={founderImg}
                alt="Clara Freitas - Fundadora"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/50 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary"></span>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Fundadora
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Clara Freitas
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Como fundadora do Studio Eleve Pilates, minha missão sempre foi criar um espaço onde
                o cuidado, a consciência corporal e a qualidade de vida caminham juntos. Acredito
                que o movimento é uma ferramenta poderosa para transformar não apenas o corpo, mas a
                mente.
              </p>
              <p>
                Nossa metodologia é focada em entender as necessidades únicas de cada aluno,
                oferecendo um acompanhamento personalizado que respeita seus limites e potencializa
                seus resultados. Mais do que exercícios, propomos um estilo de vida mais equilibrado
                e saudável.
              </p>
            </div>

            <div>
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Conheça nossa abordagem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
