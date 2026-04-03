import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'Nunca fiz Pilates antes. Posso começar mesmo assim?',
      answer:
        'Sim! Nossas aulas são adaptadas para todos os níveis, desde iniciantes até praticantes avançados. Realizamos uma avaliação inicial para entender suas necessidades e limites corporais.',
    },
    {
      question: 'Qual a diferença entre os planos Anual e Semestral?',
      answer:
        'A principal diferença está no período de fidelidade e na economia gerada. O plano Anual (12 meses) oferece uma economia de R$780/ano e permite trancar por 30 dias. O Semestral (6 meses) traz economia de R$330/ano e permite trancar por 15 dias. Ambos usam recorrência no cartão sem comprometer o limite total.',
    },
    {
      question: 'Como funciona o acompanhamento para atletas?',
      answer:
        'Oferecemos um serviço especializado de recovery e acompanhamento intra-campeonatos, focando na recuperação muscular, prevenção de lesões e manutenção da performance durante o período de competições.',
    },
    {
      question: 'Preciso levar algum equipamento para a aula?',
      answer:
        'Não. Nossas unidades são totalmente equipadas com os melhores aparelhos de Pilates. Recomendamos apenas que você venha com roupas confortáveis que permitam boa mobilidade e meias antiderrapantes.',
    },
    {
      question: 'Posso repor aulas caso eu falte?',
      answer:
        "As regras de reposição variam de acordo com a antecedência do aviso e a disponibilidade na agenda. Em nossos planos Semestral e Anual, você também tem o benefício de poder 'trancar' o plano (pausar) em caso de viagens ou imprevistos prolongados.",
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Tire suas dúvidas e sinta-se seguro para dar o primeiro passo.
          </p>
        </div>

        <div className="animate-fade-in-up [animation-delay:200ms]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50 py-2"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5541988741221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-bold hover:underline"
          >
            Fale com a nossa equipe no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
