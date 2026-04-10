import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import matrizImage from '@/assets/eleve-matriz-91647.jpeg'
import republicaImage from '@/assets/eleve-republica-e0c20.jpeg'

const locations = [
  {
    id: 'matriz',
    name: 'High Pulse Matriz',
    image: matrizImage,
    address: 'Rodovia Curitiba - Ponta Grossa Br-277, 2658',
    phone: '(41) 98874-1221',
    instagram: '@elevestudiopilates',
    whatsapp: '5541988741221',
  },
  {
    id: 'republica',
    name: 'High Pulse República',
    image: republicaImage,
    address: 'Rua Deputado Waldemiro Pedroso, 201',
    phone: '(41) 98874-1221',
    instagram: '@elevestudiopilates',
    whatsapp: '5541988741221',
  },
]

export function Location() {
  return (
    <section id="unidades" className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-light tracking-wide sm:text-4xl text-foreground">
            Nossas Unidades
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-[600px] mx-auto">
            Encontre a unidade mais próxima de você e venha nos fazer uma visita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc) => (
            <Card key={loc.id} className="overflow-hidden border-border bg-card shadow-sm group">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-light text-foreground">{loc.name}</h3>
                <div className="space-y-4 text-muted-foreground font-light">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-primary shrink-0" />
                    <span>{loc.instagram}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full gap-2 text-base h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${loc.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Agendar Aula
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Location
