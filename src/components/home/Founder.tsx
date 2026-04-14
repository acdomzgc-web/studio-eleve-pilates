import { GraduationCap, BadgeCheck } from 'lucide-react'
import founderImage from '@/assets/foto-clara-fundadora-60605.jpeg'

export default function Founder() {
  const formations = [
    {
      type: 'GRADUAÇÃO',
      title: 'Fisioterapia',
      institution: 'Universidade Federal de Uberlândia (UFU)',
    },
    { type: 'PÓS-GRADUAÇÃO', title: 'Acupuntura' },
    { type: 'PÓS-GRADUAÇÃO', title: 'Terapia Intensiva Adulto' },
    { type: 'PÓS-GRADUAÇÃO', title: 'Ergonomia' },
    { type: 'FORMAÇÃO', title: 'Pilates Clínico/Contemporâneo', institution: 'VIRTUS' },
    { type: 'FORMAÇÃO', title: 'Pilates Avançado e Aeropilates', institution: 'VIRTUS' },
    { type: 'FORMAÇÃO', title: 'Pilates na Prevenção de Lesões Esportivas' },
    {
      type: 'CERTIFICAÇÃO',
      title: 'Low Pressure Fitness Nível 3',
      institution: 'International Hypopressive & Physical Therapy Institute',
    },
  ]

  return (
    <section id="sobre" className="py-24 md:py-32 bg-beige">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          {/* Left Column - Image 60% width */}
          <div className="w-full lg:w-[60%] relative group lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] overflow-hidden rounded-none shadow-2xl">
              <img
                src={founderImage}
                alt="Clara Freitas"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    'https://img.usecurling.com/p/800/1000?q=woman%20leaning%20reformer%20neon%20sign'
                }}
              />
              <div className="absolute inset-0 bg-moss/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>

            {/* Terracotta Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-terracotta text-white px-8 py-4 z-10 shadow-xl">
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Fundadora</span>
            </div>
          </div>

          {/* Right Column - Text 40% width */}
          <div className="w-full lg:w-[40%] space-y-10 lg:pl-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-dark-brown leading-tight">
                Clara Freitas
              </h2>
              <div className="inline-flex items-center gap-2 bg-terracotta/10 px-4 py-2 rounded-full">
                <BadgeCheck className="w-4 h-4 text-terracotta" />
                <span className="text-terracotta font-sans text-xs md:text-sm font-semibold tracking-wide uppercase">
                  CREFITO 259925-F
                </span>
              </div>
            </div>

            <div className="space-y-6 text-dark-brown/80 font-light text-lg leading-[1.8]">
              <p>
                Com uma paixão imensa pelo movimento humano e pelo bem-estar, criei o Studio Eleve
                Pilates com um propósito claro: oferecer um espaço onde o cuidado com o corpo e a
                mente caminham juntos.
              </p>
              <p>
                Acredito que o Pilates vai muito além de exercícios físicos; é uma jornada de
                autoconhecimento, consciência corporal e qualidade de vida. Nossa missão é
                proporcionar um atendimento personalizado, entendendo as necessidades únicas de cada
                aluno.
              </p>
            </div>

            <div className="pt-10 mt-10 border-t border-dark-brown/10">
              <h4 className="text-sm uppercase tracking-[0.15em] text-dark-brown font-medium mb-8">
                Formação e Certificações
              </h4>
              <div className="space-y-6 relative">
                <div className="absolute left-[11px] top-3 bottom-3 w-px bg-terracotta/20" />
                {formations.map((item, i) => (
                  <div key={i} className="relative flex items-start gap-6">
                    <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-beige shrink-0 mt-0.5 shadow-sm border border-terracotta/20">
                      <GraduationCap className="w-3.5 h-3.5 text-terracotta" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta font-bold">
                        {item.type}
                      </span>
                      <h5 className="font-serif text-lg text-dark-brown leading-snug">
                        {item.title}
                      </h5>
                      {item.institution && (
                        <span className="text-sm font-light text-dark-brown/60">
                          {item.institution}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
