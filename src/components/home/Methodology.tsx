import { Reveal } from '@/components/ui/reveal'
import { Heart, Target, Brain } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const PILLARS = [
  {
    title: 'Cuidado',
    icon: Heart,
    description:
      'Antes de cada aula, existe conversa, troca e alinhamento. Entendemos o seu corpo para oferecer o melhor.',
    delay: 100,
  },
  {
    title: 'Intenção',
    icon: Target,
    description:
      'Porque aqui cada movimento tem intenção e cada aluno merece atenção de verdade. Nada é por acaso.',
    delay: 300,
  },
  {
    title: 'Conhecimento',
    icon: Brain,
    description:
      'Construímos as aulas com cuidado e conhecimento de quem acredita no poder transformador do movimento.',
    delay: 500,
  },
]

export function Methodology() {
  return (
    <section id="metodo" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eleve-dark mb-4">
              O Método Eleve
            </h2>
            <p className="text-lg text-eleve-dark/70">
              Três pilares fundamentais que guiam nossa prática diária e garantem resultados reais.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <Reveal key={pillar.title} delay={pillar.delay} direction="up">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white group">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-eleve-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-8 h-8 text-eleve-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-eleve-dark mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-eleve-dark/70 leading-relaxed flex-1">{pillar.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
