import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import logoImg from '@/assets/logo-eleve-photoroom-a4984.png'

export default function Plans() {
  const plans = [
    {
      name: 'Plano Mensal',
      description:
        'Ideal para iniciar a prática, conhecer nossa metodologia e sentir os primeiros benefícios no corpo sem compromisso a longo prazo.',
      features: ['Acesso às aulas de Pilates', 'Atendimento cuidadoso', 'Agendamento flexível'],
    },
    {
      name: 'Plano Semestral',
      description:
        'O equilíbrio perfeito entre comprometimento com a sua evolução e a flexibilidade que a sua rotina exige.',
      features: [
        'Acesso às aulas de Pilates',
        'Acompanhamento de evolução',
        'Agendamento flexível',
        'Prioridade na reserva de horários',
      ],
    },
    {
      name: 'Plano Anual',
      description:
        'A melhor escolha para uma transformação profunda e duradoura na sua consciência corporal e qualidade de vida.',
      features: [
        'Acesso às aulas de Pilates',
        'Acompanhamento de evolução',
        'Agendamento flexível',
        'Prioridade na reserva de horários',
        'Melhor custo-benefício',
      ],
      highlight: true,
    },
  ]

  return (
    <section id="planos" className="bg-white py-32 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05]">
        <img src={logoImg} className="w-[800px] h-[800px] object-contain" alt="" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center space-y-4 mb-24 max-w-2xl mx-auto">
          <span className="text-terracotta tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown">Nossos Planos</h2>
          <p className="text-dark-brown/70 font-light text-lg">
            Valores sob consulta. Entre em contato com a unidade de sua preferência para descobrir
            as condições ideais para a sua rotina.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 150}>
              <div
                className={`rounded-[24px] p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative ${
                  plan.highlight
                    ? 'bg-terracotta border-terracotta text-white shadow-xl transform md:-translate-y-4 z-10'
                    : 'bg-white border-beige text-dark-brown shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-moss text-white text-xs font-bold tracking-[0.15em] uppercase px-6 py-2 rounded-full shadow-md whitespace-nowrap">
                    Mais Popular
                  </span>
                )}

                <h3 className="text-3xl font-serif mb-4">{plan.name}</h3>
                <p
                  className={`font-light text-sm h-20 mb-8 leading-relaxed ${plan.highlight ? 'text-white/90' : 'text-dark-brown/70'}`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-5 mb-12 min-h-[200px]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 font-light text-sm">
                      <div
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${plan.highlight ? 'bg-white' : 'bg-terracotta'}`}
                      />
                      <span className={plan.highlight ? 'text-white' : 'text-dark-brown/80'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5541988741221"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full flex items-center justify-center gap-3 h-14 rounded-none text-xs uppercase font-bold tracking-[0.15em] transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-white hover:bg-beige text-terracotta'
                      : 'bg-transparent hover:bg-terracotta hover:border-terracotta hover:text-white border border-beige text-dark-brown'
                  }`}
                >
                  Consultar Valores
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
