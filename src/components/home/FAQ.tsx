import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
        'Os planos são específicos para cada unidade (Matriz ou República) devido às particularidades estruturais de cada espaço. Recomendamos escolher a unidade mais conveniente para a sua rotina, mas nossa equipe está sempre à disposição para analisar casos especiais.',
    },
    {
      question: 'Como faço para agendar minha primeira aula e conhecer o espaço?',
      answer:
        'O processo é muito simples! Basta clicar em qualquer botão de contato no site para falar com nossa equipe pelo WhatsApp (41) 98874-1221. Nós ajudaremos a encontrar o melhor plano e horário para você.',
    },
  ]

  return (
    <section className="container mx-auto px-4 max-w-3xl mb-24 mt-10">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
          Dúvidas Frequentes
        </h2>
        <p className="text-muted-foreground font-light">
          Encontre respostas rápidas para as principais perguntas dos nossos alunos.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors shadow-sm"
          >
            <AccordionTrigger className="text-foreground hover:text-primary font-medium py-6 text-left text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
