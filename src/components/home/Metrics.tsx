import { Users, Building2, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Metrics() {
  const metrics = [
    {
      icon: Building2,
      value: '2',
      label: 'Unidades Ativas',
      description: 'Estruturas completas para o seu bem-estar',
    },
    {
      icon: Users,
      value: '+2.000',
      label: 'Seguidores',
      description: 'Comunidade que acompanha nosso trabalho',
    },
    {
      icon: Heart,
      value: '100%',
      label: 'Qualidade de Vida',
      description: 'Foco no cuidado e consciência corporal',
    },
  ]

  return (
    <section className="py-16 bg-muted/30 border-y border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <Card
              key={i}
              className="bg-background/60 backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl mb-2">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-5xl font-light text-foreground">{metric.value}</h3>
                <div>
                  <p className="text-foreground tracking-widest uppercase text-sm font-medium mb-1">
                    {metric.label}
                  </p>
                  <p className="text-muted-foreground font-light text-xs">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
