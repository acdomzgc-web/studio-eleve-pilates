import { Users, Building2, Heart } from 'lucide-react'

export default function Metrics() {
  return (
    <section className="bg-zinc-900/50 border-y border-white/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center p-4 text-center space-y-4">
            <Building2 className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-5xl font-light text-white">2</h3>
            <p className="text-zinc-400 tracking-wider uppercase text-xs font-medium">
              Unidades Ativas
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 text-center space-y-4 pt-12 md:pt-4">
            <Users className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-5xl font-light text-white">+2.000</h3>
            <p className="text-zinc-400 tracking-wider uppercase text-xs font-medium">
              Seguidores que acompanham nosso trabalho
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 text-center space-y-4 pt-12 md:pt-4">
            <Heart className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-5xl font-light text-white">100%</h3>
            <p className="text-zinc-400 tracking-wider uppercase text-xs font-medium">
              Foco no cuidado e qualidade de vida
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
