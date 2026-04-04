import { cn } from '@/lib/utils'
import founderImage from '@/assets/foto-clara-fundadora-e0d3f.jpeg'

export function Founder() {
  return (
    <section id="founder" className="py-20 bg-muted/30">
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Clara Freitas
              </h2>
              <p className="text-xl text-muted-foreground font-medium">Fundadora e Instrutora</p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
