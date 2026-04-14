import { Heart, Target, Brain } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import claraImg from '@/assets/clara-foto-f54ab.png'

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
    <section
      id="metodo"
      className="py-32 relative overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${claraImg})` }}
    >
      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="mb-24 flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-terracotta tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
            Nossa Essência
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">O Método Eleve</h2>
          <div className="w-16 h-px bg-terracotta" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 150} direction="up" className="h-full">
              <div className="h-full group flex flex-col items-start text-left gap-6 p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-[16px] hover:border-terracotta/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="w-16 h-16 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors duration-500">
                  <pillar.icon className="w-8 h-8 text-terracotta" strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-white">{pillar.title}</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
