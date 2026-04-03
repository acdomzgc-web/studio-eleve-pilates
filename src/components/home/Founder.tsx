import fotoClara from '@/assets/foto-clara-fundadora-a7076.jpeg'

export default function Founder() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto relative">
          <img
            src={fotoClara}
            alt="Clara Freitas - Fundadora"
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-14 flex flex-col justify-center">
          <span className="text-orange-500 tracking-[0.2em] text-xs font-medium mb-3 uppercase block">
            Fundadora & Idealizadora
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-8">
            Clara Freitas
          </h2>

          <div className="space-y-5 text-zinc-300 font-light leading-relaxed mb-10 text-lg">
            <p>
              "Minha missão sempre foi olhar para cada aluno de forma única e integral. Acredito
              profundamente que o movimento cura, educa e transforma, especialmente quando aplicado
              com intenção, técnica e verdadeira empatia."
            </p>
            <p>
              Com anos de dedicação ao estudo do movimento humano, Clara fundou a ELEVE para criar
              um ambiente seguro onde a qualidade de vida e a performance caminham de mãos dadas,
              oferecendo o cuidado minucioso que cada corpo merece.
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-white font-medium text-sm w-28 shrink-0">Formação</span>
              <span className="text-zinc-400 text-sm font-light">
                Educação Física e Especialista em Movimento Humano
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-white font-medium text-sm w-28 shrink-0">Registro</span>
              <span className="text-zinc-400 text-sm font-light">CREF / PR</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="text-white font-medium text-sm w-28 shrink-0">Certificações</span>
              <span className="text-zinc-400 text-sm font-light leading-relaxed">
                Formação Completa em Pilates Clássico e Contemporâneo, Especialização em Recovery
                Esportivo, Liberação Miofascial e Acupuntura Aplicada à Dor.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
