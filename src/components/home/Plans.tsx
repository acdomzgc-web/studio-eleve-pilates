import { Check, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Plans() {
  const WHATSAPP_URL = 'https://wa.me/5541988741221'

  return (
    <section id="planos" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase mb-2 block text-sm">
            Acompanhamento Terapêutico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Planos de <span className="text-primary">Pilates</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Escolha a modalidade que melhor se adapta à sua rotina e objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Mensal */}
          <Card className="flex flex-col relative bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-3xl font-bold text-foreground font-serif">
                Mensal
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-muted-foreground">Contrato de 30 dias</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-muted-foreground">
                    Pagamento via PIX ou cartão
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6 pb-8 px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full h-12 text-base font-bold bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 shadow-none border border-secondary/20">
                  Falar com Consultor
                </Button>
              </a>
            </CardFooter>
          </Card>

          {/* Semestral */}
          <Card className="flex flex-col relative bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-3xl font-bold text-foreground font-serif">
                Semestral
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-muted-foreground">Mensal (Mín. 6 meses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-muted-foreground">Permite trancar 15 dias</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-muted-foreground">
                    Pagamento por recorrência no cartão
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    Economia de R$330,00/ano
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6 pb-8 px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full h-12 text-base font-bold bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 shadow-none border border-secondary/20">
                  Falar com Consultor
                </Button>
              </a>
            </CardFooter>
          </Card>

          {/* Anual */}
          <Card className="flex flex-col relative bg-primary text-primary-foreground border-none shadow-xl transform md:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm whitespace-nowrap">
              Mais Vantajoso
            </div>
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="text-3xl font-bold text-white font-serif">Anual</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="font-medium text-white/90">Mensal (Mín. 12 meses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="font-medium text-white/90">Permite trancar 30 dias</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="font-medium text-white/90">
                    Pagamento por recorrência no cartão
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                  <span className="font-bold text-yellow-300">Economia de R$780,00/ano</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6 pb-8 px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full h-12 text-base font-bold bg-white text-primary hover:bg-white/90 shadow-md gap-2">
                  Inscreva-se <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
