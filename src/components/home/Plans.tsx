import { ArrowRight } from 'lucide-react'

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
      highlight: true,
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
    },
  ]

  return (
    <section id="planos" className="bg-zinc-900/50 py-24 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">
            Nossos Planos
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-light">
            Valores sob consulta. Entre em contato com a unidade de sua preferência para descobrir
            as condições ideais para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 border ${
                plan.highlight
                  ? 'bg-zinc-900 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.1)] relative transform md:-translate-y-4'
                  : 'bg-zinc-950 border-white/10'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  Mais Escolhido
                </span>
              )}

              <h3 className="text-2xl font-light tracking-wide text-white mb-4">{plan.name}</h3>
              <p className="text-zinc-400 font-light text-sm h-20 mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 min-h-[160px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-light text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5541988741221"
                target="_blank"
                rel="noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-medium tracking-wide transition-all ${
                  plan.highlight
                    ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Consultar Valores
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
