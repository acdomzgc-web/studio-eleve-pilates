import founderImage from '@/assets/foto-clara-fundadora-60605.jpeg'

export default function Founder() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-beige">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column - Image 60% width */}
          <div className="w-full lg:w-[60%] relative group">
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] overflow-hidden rounded-none shadow-2xl">
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
          <div className="w-full lg:w-[40%] space-y-8 lg:pl-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-dark-brown leading-tight">
                Clara Freitas
              </h2>
              <div className="w-12 h-px bg-terracotta" />
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

            <div className="pt-8 mt-8 border-t border-dark-brown/10">
              <h4 className="text-sm uppercase tracking-[0.15em] text-dark-brown font-medium mb-6">
                Formação e Certificações
              </h4>
              <ul className="space-y-4 text-dark-brown/70 font-light text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span>CREF: 031456-G/PR</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span>Especialista em Biomecânica</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span>Formação Completa em Pilates Clássico e Contemporâneo</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span>Especialização em Recovery Esportivo e Liberação Miofascial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
