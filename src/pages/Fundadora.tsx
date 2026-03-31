import { GraduationCap, Award, CheckCircle2 } from 'lucide-react'
import claraUrl from '../assets/clara-eleve-ded89.png'
import logoUrl from '../assets/logo-eleve-photoroom-c338f.png'

export default function Fundadora() {
  const certifications = [
    'Formação Completa em Pilates Clínico e Clássico',
    'Especialização em Biomecânica do Movimento',
    'Curso de Extensão em Reabilitação de Coluna',
    'Certificação em Treinamento Funcional',
    'Workshop Avançado de Aparelhos de Pilates',
  ]

  return (
    <div className="flex flex-col min-h-screen pt-10">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/10 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative animate-fade-in-up">
              <div className="absolute -inset-4 bg-secondary/30 rounded-3xl transform -rotate-3 scale-105 opacity-50 z-0"></div>
              <img
                src={claraUrl}
                alt="Clara Freitas - Fundadora"
                className="relative z-10 w-full max-w-md mx-auto lg:max-w-none rounded-2xl shadow-2xl object-cover aspect-[4/5] md:aspect-auto md:h-[700px] object-top"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="animate-fade-in-up">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-3 block">
                  Nossa História
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Clara Freitas
                </h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border/50 text-sm font-bold text-muted-foreground mb-8 shadow-sm">
                  <Award className="w-4 h-4 text-primary" />
                  CREFITO: 123456-F
                </div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
                <p className="text-xl font-bold text-foreground leading-relaxed">
                  "Mais do que ensinar exercícios, existe um propósito: ajudar pessoas a viverem com
                  menos dor, mais consciência corporal e mais qualidade de vida."
                </p>
                <p className="leading-relaxed font-medium">
                  A trajetória da Clara na área da saúde e do movimento começou com a paixão por
                  entender o corpo humano e seu potencial de cura através da atividade física
                  direcionada. Com anos de experiência clínica, ela percebeu que o Pilates era a
                  ferramenta perfeita para unir reabilitação e performance.
                </p>
                <p className="leading-relaxed font-medium">
                  A ELEVE nasceu desse olhar. De quem acredita que movimento também é forma de
                  cuidar das pessoas. Cada detalhe do estúdio, desde a escolha dos equipamentos até
                  a metodologia de ensino, foi cuidadosamente planejado por ela para oferecer um
                  ambiente acolhedor e resultados reais.
                </p>
                <p className="leading-relaxed font-medium">
                  Seu compromisso é com a educação contínua e a excelência no atendimento,
                  garantindo que cada aluno receba uma atenção verdadeiramente personalizada e
                  transformadora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <img
          src={logoUrl}
          alt=""
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 object-contain opacity-5 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Formação e Qualificações
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                Busca constante por conhecimento para oferecer o melhor e mais seguro método de
                Pilates.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm animate-fade-in-up [animation-delay:200ms]">
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-bold text-foreground/90">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
