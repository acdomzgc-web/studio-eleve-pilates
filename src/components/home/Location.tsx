import { MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import republicaImage from '@/assets/eleve-republica-ac91d.jpeg'
import matrizImage from '@/assets/eleve-matriz-b0441.jpeg'

const locations = [
  {
    id: 'matriz',
    name: 'High Pulse Matriz',
    image: matrizImage,
    address: 'Rodovia Curitiba - Ponta Grossa Br-277, 2658',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Rodovia+Curitiba+-+Ponta+Grossa+Br-277,+2658',
  },
  {
    id: 'republica',
    name: 'High Pulse República',
    image: republicaImage,
    address: 'Rua Deputado Waldemiro Pedroso, 201',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Deputado+Waldemiro+Pedroso,+201',
  },
]

export default function Location() {
  return (
    <section id="unidades" className="py-32 bg-beige">
      <div className="container px-4 mx-auto max-w-6xl">
        <FadeIn className="text-center space-y-4 mb-20">
          <span className="text-terracotta tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
            Presencial
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown">Nossas Unidades</h2>
          <p className="text-dark-brown/70 font-light text-lg max-w-[600px] mx-auto">
            Estruturas completas e sofisticadas preparadas para receber você com excelência.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc, i) => (
            <FadeIn key={loc.id} delay={i * 200}>
              <Card className="overflow-hidden border-none bg-transparent shadow-none group">
                <div className="aspect-[4/3] w-full overflow-hidden relative rounded-[16px]">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-moss/20 to-transparent opacity-90" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-3xl font-serif mb-3">{loc.name}</h3>
                    <p className="font-light text-sm opacity-90 flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                      {loc.address}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
