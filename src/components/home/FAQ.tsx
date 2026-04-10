import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeIn } from '@/components/ui/fade-in'

export default function FAQ() {
  const faqs = [
    {
      question: 'Nunca fiz Pilates antes. Posso começar mesmo assim?',
      answer:
        'Com certeza! Nossas aulas são cuidadosamente adaptadas para o seu nível atual. Realizamos uma avaliação prévia para entender suas necessidades, objetivos e limitações antes de iniciar qualquer prática, garantindo total segurança.',
    },
    {
      question: 'Como funciona o acompanhamento e recovery para atletas?',
      answer:
        'No nosso serviço de Recovery, oferecemos suporte contínuo durante treinos e acompanhamento intra campeonatos. Focamos em liberação miofascial, prevenção de lesões e na aceleração da recuperação muscular para que você alcance sua melhor performance.',
    },
    {
      question: 'Qual a duração média de cada aula?',
      answer:
        'As aulas na ELEVE têm duração de aproximadamente 55 minutos. Esse é o tempo ideal para um ciclo completo: aquecimento focado, parte principal do treino e um relaxamento ou alongamento final profundo.',
    },
    {
      question: 'Meu plano permite que eu frequente as duas unidades?',
      answer:
        'Os planos são específicos para cada unidade (Santo Inácio ou República) devido às particularidades estruturais de cada espaço. Recomendamos escolher a unidade mais conveniente para a sua rotina, mas nossa equipe está sempre à disposição para analisar casos especiais.',
    },
    {
      question: 'Como faço para agendar minha primeira aula e conhecer o espaço?',
      answer:
        'O processo é muito simples! Basta clicar em qualquer botão de contato no site para falar com nossa equipe pelo WhatsApp (41) 98874-1221. Nós ajudaremos a encontrar o melhor plano e horário para você.',
    },
  ]

  return (
    <section className="bg-beige py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn className="text-center space-y-4 mb-20">
          <span className="text-terracotta tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-brown">Dúvidas Frequentes</h2>
          <p className="text-dark-brown/70 font-light text-lg">
            Encontre respostas rápidas para as principais perguntas dos nossos alunos.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-transparent border-b border-terracotta/20 px-0 py-4 data-[state=open]:border-terracotta transition-colors shadow-none"
              >
                <AccordionTrigger className="text-dark-brown hover:text-terracotta font-serif py-4 text-left text-xl md:text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-dark-brown/70 font-light leading-relaxed pb-6 text-base md:text-lg pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
