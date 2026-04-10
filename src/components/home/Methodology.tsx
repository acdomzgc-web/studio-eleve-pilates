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
    <section id="essencia" className="py-24 bg-background border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary tracking-[0.2em] text-sm font-medium mb-4 block uppercase">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 uppercase">
            Nossa Essência
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Três pilares fundamentais que guiam nossa prática diária e garantem resultados reais e
            duradouros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${pillar.delay}ms` }}
            >
              <Card className="border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full bg-card group relative overflow-hidden rounded-3xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
                <CardContent className="p-10 flex flex-col items-center text-center h-full relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-wide text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed flex-1">
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
