import { Activity, Droplets, Sparkles } from 'lucide-react'

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-secondary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma abordagem completa para o seu bem-estar e performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Activity className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Pilates</h3>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Equilíbrio perfeito entre força, flexibilidade e consciência corporal, adaptado às
              suas necessidades.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <Droplets className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Recovery</h3>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Acelere sua recuperação muscular, previna lesões e melhore sua performance com
              técnicas avançadas.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Acupuntura</h3>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Alívio de dores, redução de estresse e promoção da saúde através de técnicas
              milenares.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 text-center max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
            Diferencial
          </span>
          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            A ELEVE faz o acompanhamento e recovery de atletas intra campeonatos.
          </h4>
          <p className="text-lg text-muted-foreground max-w-2xl font-medium">
            Entendemos as exigências do alto rendimento e oferecemos suporte especializado para
            manter seu corpo no ápice durante as competições.
          </p>
        </div>
      </div>
    </section>
  )
}
