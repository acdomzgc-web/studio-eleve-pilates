import { Check } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    'Redução significativa de dores crônicas',
    'Melhora profunda da consciência corporal no dia a dia',
    'Aumento progressivo da flexibilidade e mobilidade',
    'Fortalecimento inteligente da musculatura e do core',
    'Alívio do estresse mental e das tensões musculares',
    'Prevenção eficaz de lesões para uma vida mais ativa',
  ]

  return (
    <section className="bg-zinc-900/30 py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden group">
            <img
              src="https://img.usecurling.com/p/800/1000?q=pilates%20stretching&color=orange"
              alt="Aluna praticando Pilates"
              className="object-cover w-full h-full opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-orange-500 tracking-[0.2em] text-sm font-medium mb-4 block uppercase">
                Benefícios do Pilates
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-6 leading-tight">
                Qualidade de vida através do movimento consciente
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed">
                Na ELEVE, enxergamos o Pilates como uma reeducação completa do corpo. Nossa
                metodologia alia precisão, controle e cuidado para garantir resultados que
                transformam a sua rotina.
              </p>
            </div>

            <ul className="space-y-5 pt-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <span className="text-zinc-300 font-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
