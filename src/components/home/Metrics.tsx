import { Users, Building2, Heart } from 'lucide-react'

export default function Metrics() {
  const metrics = [
    {
      icon: Building2,
      value: '2',
      label: 'Unidades Ativas',
      description: 'Estruturas completas e sofisticadas para o seu bem-estar',
    },
    {
      icon: Users,
      value: '+2k',
      label: 'Comunidade',
      description: 'Pessoas que acompanham e confiam em nosso trabalho',
    },
    {
      icon: Heart,
      value: '100%',
      label: 'Qualidade de Vida',
      description: 'Foco absoluto no cuidado e consciência corporal',
    },
  ]

  return (
    <section className="py-24 bg-moss text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 mb-8 flex items-center justify-center border border-white/20 rounded-none group-hover:border-terracotta group-hover:bg-terracotta/10 transition-all duration-500">
                <metric.icon className="w-8 h-8 text-terracotta" strokeWidth={1} />
              </div>

              <h3 className="text-5xl md:text-6xl font-serif text-white mb-4">{metric.value}</h3>

              <p className="text-terracotta tracking-[0.2em] uppercase text-xs font-medium mb-4">
                {metric.label}
              </p>

              <p className="text-white/70 font-light text-sm max-w-[240px] leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
