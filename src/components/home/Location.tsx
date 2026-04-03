import { MapPin, Phone, ExternalLink } from 'lucide-react'

export function Location() {
  const units = [
    {
      name: 'Unidade Santo Inácio',
      addressTitle: 'ENDEREÇO 1',
      address:
        'Rodovia Curitiba - Ponta Grossa Br-277, 2658 - Santo Inácio, Curitiba - PR, 82305-100',
      subtitle: '(Dentro da Crossfit High Pulse Matriz)',
      mapUrl:
        'https://maps.google.com/?q=Rodovia+Curitiba+-+Ponta+Grossa+Br-277,+2658+-+Santo+Inácio,+Curitiba+-+PR,+82305-100',
      image: 'https://img.usecurling.com/p/600/400?q=modern%20gym%20facade',
    },
    {
      name: 'Unidade Novo Mundo',
      addressTitle: 'ENDEREÇO 2',
      address: 'Rua Deputado Waldemiro Pedroso, 201 - Novo Mundo, Curitiba - PR, 81050-150',
      subtitle: '(Dentro da Crossfit High Pulse República)',
      mapUrl:
        'https://maps.google.com/?q=Rua+Deputado+Waldemiro+Pedroso,+201+-+Novo+Mundo,+Curitiba+-+PR,+81050-150',
      image: 'https://img.usecurling.com/p/600/400?q=fitness%20center%20entrance',
    },
  ]

  return (
    <section id="unidades" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossas <span className="text-primary">Unidades</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Estamos localizados em dois pontos estratégicos de Curitiba, com estrutura premium e
            completa para o seu bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-md border border-border/50 flex flex-col group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-1">{unit.name}</h3>
                  <p className="text-secondary font-medium">{unit.subtitle}</p>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{unit.addressTitle}:</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {unit.address} <br />
                      {unit.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3.5 rounded-2xl text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Contato</h4>
                    <a
                      href="https://wa.me/5541988741221"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-bold text-lg"
                    >
                      (41) 98874-1221
                    </a>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={unit.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground font-bold py-4 px-6 rounded-xl transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Como chegar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
