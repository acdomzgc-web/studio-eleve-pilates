import { Heart, Target, Brain } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import logoImg from '@/assets/logo-eleve-photoroom-a4984.png'

const PILLARS = [
  {
    title: 'Cuidado',
    icon: Heart,
    description:
      'Antes de cada aula, existe conversa, troca e alinhamento. Entendemos suas necessidades únicas.',
  },
  {
    title: 'Intenção',
    icon: Target,
    description:
      'Porque aqui cada movimento tem intenção e cada aluno merece atenção de verdade e resultados reais.',
  },
  {
    title: 'Conhecimento',
    icon: Brain,
    description:
      'É assim que a gente constrói as aulas da ELEVE: com cuidado e conhecimento de quem acredita no poder do movimento.',
  },
]

export function Methodology() {
  return (
    <section id="metodo" className="py-32 bg-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-[0.05]">
        <img src={logoImg} className="w-[800px] h-[800px] object-contain" alt="" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="mb-24 flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-terracotta tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
            Nossa Essência
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown mb-8">O Método Eleve</h2>
          <div className="w-16 h-px bg-terracotta" />
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <FadeIn direction="right" className="w-full lg:w-5/12 relative">
            <div className="w-full h-[500px] lg:h-full relative overflow-hidden rounded-[16px] shadow-2xl group">
              <img
                src="https://img.usecurling.com/p/800/1000?q=woman%20pilates%20equipment%20close-up"
                alt="Clara no aparelho de Pilates"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </FadeIn>

          <div className="w-full lg:w-7/12 flex flex-col justify-center gap-8">
            {PILLARS.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={index * 150} direction="left">
                <div className="group flex flex-col sm:flex-row items-start gap-8 p-8 bg-white border border-beige rounded-[16px] hover:border-terracotta/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-beige/50 flex items-center justify-center group-hover:bg-terracotta/10 transition-colors duration-500">
                    <pillar.icon className="w-8 h-8 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-dark-brown">{pillar.title}</h3>
                    <p className="text-dark-brown/70 font-light leading-relaxed text-lg">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
