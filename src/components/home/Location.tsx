import { MapPin } from 'lucide-react'
import imgMatriz from '@/assets/eleve-matriz-048d3.jpeg'
import imgRepublica from '@/assets/eleve-republica-c695b.jpeg'

export default function Location() {
  const locations = [
    {
      name: 'Unidade Matriz',
      address: 'Rodovia Curitiba - Ponta Grossa Br-277, 2658',
      neighborhood: 'Santo Inácio, Curitiba - PR, 82305-100',
      complement: 'Dentro da Crossfit High Pulse Matriz',
      image: imgMatriz,
    },
    {
      name: 'Unidade República',
      address: 'Rua Deputado Waldemiro Pedroso, 201',
      neighborhood: 'Novo Mundo, Curitiba - PR, 81050-150',
      complement: 'Dentro da Crossfit High Pulse República',
      image: imgRepublica,
    },
  ]

  return (
    <section id="unidades" className="container mx-auto px-4 py-10">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">
          Nossas Unidades
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto font-light">
          Estruturas completas e acolhedoras preparadas para receber você.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="group rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 relative"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-light text-white mb-4">{loc.name}</h3>
              <div className="flex items-start gap-3 text-zinc-300 font-light">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <div className="space-y-1">
                  <p>{loc.address}</p>
                  <p>{loc.neighborhood}</p>
                  <p className="text-sm text-orange-400 font-medium">{loc.complement}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
