import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import matrizImage from '@/assets/eleve-matriz-bc7b4.jpeg'
import republicaImage from '@/assets/eleve-republica-753e7.jpeg'

const locations = [
  {
    id: 'matriz',
    name: 'High Pulse Matriz',
    image: matrizImage,
    address: 'Rua Matriz Principal, 100',
    phone: '(11) 99999-9999',
    instagram: '@eleve.matriz',
    whatsapp: '5511999999999',
  },
  {
    id: 'republica',
    name: 'High Pulse República',
    image: republicaImage,
    address: 'Av. República, 200',
    phone: '(11) 98888-8888',
    instagram: '@eleve.republica',
    whatsapp: '5511988888888',
  },
]

export function Location() {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Nossas Unidades
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Encontre a unidade mais próxima de você e venha nos fazer uma visita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc) => (
            <Card key={loc.id} className="overflow-hidden border-none shadow-lg group">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-primary">{loc.name}</h3>
                <div className="space-y-4 text-muted-foreground">
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
                  <Button className="w-full gap-2 text-base h-12" asChild>
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
