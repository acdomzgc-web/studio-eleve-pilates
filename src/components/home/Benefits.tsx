import { Check } from 'lucide-react'
import reformerClaraImg from '@/assets/reformer-clara-4b18c.webp'
import { FadeIn } from '@/components/ui/fade-in'

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
    <section id="sobre" className="bg-beige py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          <FadeIn direction="right" className="w-full md:w-[55%] space-y-10">
            <div>
              <span className="text-terracotta tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
                Por que escolher Pilates
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark-brown mb-6 leading-tight">
                Qualidade de vida através do movimento consciente
              </h2>
              <p className="text-dark-brown/70 font-light text-lg leading-relaxed">
                Na ELEVE, enxergamos o Pilates como uma reeducação completa do corpo. Nossa
                metodologia alia precisão, controle e cuidado para garantir resultados que
                transformam a sua rotina e elevam a sua performance diária.
              </p>
            </div>

            <ul className="space-y-5">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-terracotta" strokeWidth={3} />
                  </div>
                  <span className="text-dark-brown/80 font-light text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="left" className="w-full md:w-[45%]">
            <div className="relative">
              <div
                className="w-full aspect-[4/5] bg-fixed bg-cover bg-center rounded-[16px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]"
                style={{ backgroundImage: `url(${reformerClaraImg})` }}
                role="img"
                aria-label="Studio Eleve Pilates"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[16px] shadow-xl border border-beige max-w-[240px] hidden md:block">
                <p className="text-dark-brown font-serif text-xl mb-1">Clara Freitas</p>
                <p className="text-terracotta text-xs tracking-widest uppercase font-bold">
                  Fundadora & Especialista
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
