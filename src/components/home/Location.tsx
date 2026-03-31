import { Reveal } from '@/components/ui/reveal'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

export function Location() {
  return (
    <section id="contato" className="py-24 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-eleve-dark mb-6">
                Pronto para elevar seu movimento?
              </h2>
              <p className="text-lg text-eleve-dark/70 mb-8">
                Venha conhecer nosso estúdio em Curitiba. Um espaço pensado em cada detalhe para o
                seu bem-estar.
              </p>
            </Reveal>

            <Reveal delay={200} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eleve-secondary flex items-center justify-center shrink-0">
                  <MapPin className="text-eleve-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-eleve-dark">Localização</h4>
                  <p className="text-eleve-dark/70">
                    Curitiba, PR
                    <br />
                    <span className="text-sm">(Endereço completo fornecido no agendamento)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eleve-secondary flex items-center justify-center shrink-0">
                  <Clock className="text-eleve-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-eleve-dark">Horários</h4>
                  <p className="text-eleve-dark/70">
                    Segunda a Sexta: 07h às 21h
                    <br />
                    Sábados: 08h às 12h
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400} className="pt-4">
              <a
                href="https://wa.link/9pxdyl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 w-full md:w-auto flex justify-center"
              >
                Agende sua experiência <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Reveal>
          </div>

          <Reveal direction="left" delay={200} className="h-full min-h-[400px]">
            {/* Map Placeholder - Visual representation */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl bg-gray-100 relative group">
              <img
                src="https://img.usecurling.com/p/800/600?q=map%20curitiba%20city"
                alt="Mapa Curitiba"
                className="w-full h-full object-cover filter grayscale opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-eleve-primary/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 bg-eleve-primary/20 rounded-full animate-ping" />
                  <div className="absolute w-12 h-12 bg-eleve-primary/40 rounded-full" />
                  <MapPin
                    className="w-8 h-8 text-eleve-primary relative z-10 drop-shadow-md"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
