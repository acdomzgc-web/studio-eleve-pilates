import { Heart, Target, Brain } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const PILLARS = [
  {
    title: 'Cuidado',
    icon: Heart,
    description: 'Antes de cada aula, existe conversa, troca e alinhamento.',
    delay: 100,
  },
  {
    title: 'Intenção',
    icon: Target,
    description: 'Porque aqui cada movimento tem intenção e cada aluno merece atenção de verdade.',
    delay: 300,
  },
  {
    title: 'Conhecimento',
    icon: Brain,
    description:
      'É assim que a gente constrói as aulas da ELEVE: com cuidado e conhecimento de quem acredita no poder do movimento.',
    delay: 500,
  },
]

export function Methodology() {
  return (
    <section id="metodo" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O Método Eleve</h2>
          <p className="text-lg text-muted-foreground">
            Três pilares fundamentais que guiam nossa prática diária e garantem resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${pillar.delay}ms` }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card group">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
