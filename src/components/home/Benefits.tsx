import { CheckCircle2 } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      title: 'Melhora da Postura',
      description: 'Realinhamento corporal e fortalecimento da musculatura de sustentação.',
    },
    {
      title: 'Fortalecimento do Core',
      description: 'Centro de força mais resistente, prevenindo lesões e dores nas costas.',
    },
    {
      title: 'Flexibilidade',
      description: 'Aumento da amplitude de movimento e músculos mais alongados.',
    },
    {
      title: 'Redução de Dores',
      description: 'Alívio de tensões musculares e dores crônicas articulares.',
    },
    {
      title: 'Consciência Corporal',
      description: 'Maior percepção do próprio corpo e seus movimentos no espaço.',
    },
    {
      title: 'Qualidade de Vida',
      description: 'Integração entre corpo e mente, reduzindo estresse e ansiedade.',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher o <span className="text-primary">Pilates?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 font-medium leading-relaxed">
              Na ELEVE, enxergamos o Pilates como uma ferramenta poderosa de transformação. Com
              cuidado e atenção aos detalhes, proporcionamos benefícios que vão muito além do
              estúdio, refletindo em toda sua rotina.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform -rotate-3 scale-105 opacity-50 z-0"></div>
            <img
              src="https://img.usecurling.com/p/800/1000?q=pilates%20stretching"
              alt="Prática de Pilates na Eleve"
              className="relative z-10 w-full rounded-2xl shadow-xl object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
