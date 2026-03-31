import { Instagram, Users, MapPin, Heart } from 'lucide-react'

export function InstagramGallery() {
  return (
    <section id="comunidade" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossa <span className="text-primary">Comunidade</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Faça parte da família Eleve e acompanhe nosso dia a dia focado em saúde e bem-estar.
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 text-center flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-2">5.4k+</h3>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Número de Seguidores
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 text-center flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-secondary/20 text-secondary-foreground rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-2">2</h3>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Número de Unidades
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 text-center flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-2">100%</h3>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Dedicação
            </p>
          </div>

          <a
            href="https://www.instagram.com/elevestudiopilates/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-primary to-[#8c3310] p-8 rounded-2xl shadow-md text-center flex flex-col items-center justify-center text-white transform transition-transform duration-300 hover:-translate-y-2 group"
          >
            <Instagram className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">@elevestudiopilates</h3>
            <p className="text-sm font-medium opacity-90">Siga no Instagram</p>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square rounded-2xl overflow-hidden group">
            <img
              src="https://img.usecurling.com/p/400/400?q=pilates%20studio"
              alt="Pilates Studio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group">
            <img
              src="https://img.usecurling.com/p/400/400?q=pilates%20stretching"
              alt="Pilates Stretching"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group">
            <img
              src="https://img.usecurling.com/p/400/400?q=pilates%20reformer"
              alt="Pilates Reformer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group">
            <img
              src="https://img.usecurling.com/p/400/400?q=pilates%20exercise"
              alt="Pilates Exercise"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
