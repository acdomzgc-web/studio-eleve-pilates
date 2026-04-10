import { Card, CardContent } from '@/components/ui/card'
import { Heart, Focus, Sparkles } from 'lucide-react'

export default function History() {
  const values = [
    {
      icon: Heart,
      title: 'Cuidado Genuíno',
      text: 'Por trás da ELEVE existe uma história construída com muito cuidado. Cuidado com cada aluno, com cada movimento, com cada detalhe dentro do estúdio.',
    },
    {
      icon: Sparkles,
      title: 'Propósito Maior',
      text: 'Mais do que ensinar exercícios, existe um propósito: ajudar pessoas a viverem com menos dor, mais consciência corporal e mais qualidade de vida.',
    },
    {
      icon: Focus,
      title: 'Atenção e Intenção',
      text: 'Antes de cada aula, existe conversa, troca e alinhamento. Porque aqui cada movimento tem intenção e cada aluno merece atenção de verdade.',
    },
  ]

  return (
    <section id="sobre" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Nossa Essência
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
          <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg">
            A ELEVE nasceu do olhar de quem acredita que o movimento é a forma mais pura de cuidar
            das pessoas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <Card
              key={i}
              className="bg-card border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-500 group"
            >
              <CardContent className="p-8 space-y-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-500">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-medium tracking-wide text-foreground">{value.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{value.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
