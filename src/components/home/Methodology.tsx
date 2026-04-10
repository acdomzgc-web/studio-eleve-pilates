import { Heart, Target, Brain } from 'lucide-react'

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
    <section id="metodo" className="py-24 md:py-40 bg-beige">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-terracotta tracking-[0.2em] text-xs font-medium mb-4 block uppercase animate-fade-in-up">
            Nossa Essência
          </span>
          <h2
            className="text-4xl md:text-5xl font-serif text-dark-brown mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            O Método Eleve
          </h2>
          <div
            className="w-12 h-px bg-terracotta animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          {/* Left - Supporting Photo */}
          <div className="w-full lg:w-5/12 h-[400px] lg:h-auto relative overflow-hidden group shadow-lg animate-fade-in-up">
            <img
              src="https://img.usecurling.com/p/800/1000?q=woman%20pilates%20apparatus"
              alt="Clara no aparelho de Pilates"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Right - Horizontal Cards */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center gap-6">
            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group flex flex-col sm:flex-row items-start gap-6 p-8 lg:p-10 bg-white hover:bg-white/95 transition-all duration-500 shadow-sm hover:shadow-xl animate-fade-in-up hover:-translate-y-1 border border-transparent"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="w-14 h-14 shrink-0 rounded-none bg-beige/50 flex items-center justify-center border border-terracotta/20 group-hover:border-terracotta transition-colors duration-500">
                  <pillar.icon className="w-6 h-6 text-terracotta" strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-dark-brown">{pillar.title}</h3>
                  <p className="text-dark-brown/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
