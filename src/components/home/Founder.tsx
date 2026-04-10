import founderImage from '@/assets/foto-clara-fundadora-60605.jpeg'

export function Founder() {
  return (
    <section id="founder" className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={founderImage}
              alt="Clara Freitas - Fundadora"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                Clara Freitas
              </h2>
              <p className="text-xl text-primary font-medium">Fundadora e Instrutora</p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
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

              <div className="pt-4 border-t border-border mt-6">
                <h4 className="text-foreground font-medium mb-4">Formação e Certificações</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>CREF: 031456-G/PR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Especialista em Biomecânica</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Formação Completa em Pilates Clássico e Contemporâneo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Especialização em Recovery Esportivo e Liberação Miofascial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
