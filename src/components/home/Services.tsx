import { Activity, RefreshCcw, Syringe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'

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
    <section id="servicos" className="bg-white py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
          <span className="text-terracotta tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown">Nossos Serviços</h2>
          <p className="text-dark-brown/70 font-light text-lg">
            Abordagens integradas para cuidar do seu corpo de forma completa e intencional,
            respeitando a sua individualidade.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 150}>
              <Card className="h-full bg-white border border-beige hover:border-terracotta/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group rounded-[16px]">
                <CardHeader className="p-8 pb-6">
                  <div className="w-16 h-16 bg-beige/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-terracotta/10 transition-colors duration-500">
                    <service.icon className="w-8 h-8 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl font-serif text-dark-brown">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-dark-brown/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
