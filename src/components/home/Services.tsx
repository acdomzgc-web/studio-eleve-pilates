import { Activity, RefreshCcw, Syringe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Services() {
  const services = [
    {
      title: 'PILATES',
      icon: Activity,
      description:
        'Aulas focadas em fortalecimento, flexibilidade e consciência corporal. Atendimento cuidadoso para promover saúde e reduzir dores.',
    },
    {
      title: 'RECOVERY',
      icon: RefreshCcw,
      description:
        'Prevenção de lesões e melhora de performance. Oferecemos acompanhamento e recovery de atletas intra campeonatos com foco total no rendimento.',
    },
    {
      title: 'ACUPUNTURA',
      icon: Syringe,
      description:
        'Técnica milenar voltada ao alívio de dores crônicas, redução de tensões e equilíbrio do corpo para proporcionar mais qualidade de vida.',
    },
  ]

  return (
    <section id="servicos" className="container mx-auto px-4 pt-10">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">
          Nossos Serviços
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto font-light">
          Abordagens integradas para cuidar do seu corpo de forma completa e intencional.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            className="bg-zinc-900 border-white/5 hover:border-orange-500/30 transition-all duration-300 group hover:-translate-y-1"
          >
            <CardHeader>
              <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/10 transition-colors">
                <service.icon className="w-7 h-7 text-orange-500" />
              </div>
              <CardTitle className="text-xl font-medium tracking-wide text-white">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 font-light leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
