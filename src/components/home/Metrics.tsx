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
    <section className="py-20 bg-background border-y border-border relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <Card
              key={i}
              className="bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 rounded-3xl group"
            >
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  <div className="relative p-4 bg-background border border-primary/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                    <metric.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-6xl font-light text-foreground mb-4 tracking-tighter">
                    {metric.value}
                  </h3>
                  <p className="text-foreground tracking-widest uppercase text-sm font-medium mb-2">
                    {metric.label}
                  </p>
                  <p className="text-muted-foreground font-light text-sm max-w-[200px] mx-auto leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
