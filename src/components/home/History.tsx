import logoUrl from '../../assets/logo-eleve-photoroom-c338f.png'

export function History() {
  return (
    <section id="estudio" className="relative py-24 md:py-32 bg-secondary/10 overflow-hidden">
      <img
        src={logoUrl}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-2/3 max-w-3xl object-contain opacity-5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
              Nossa Essência
            </h2>
          </div>

          <div className="animate-fade-in-up [animation-delay:200ms]">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-relaxed md:leading-tight">
              "Por trás da ELEVE existe uma história construída com muito cuidado. Cuidado com cada
              aluno, com cada movimento, com cada detalhe dentro do estúdio."
            </p>
          </div>

          <div className="animate-fade-in-up [animation-delay:400ms]">
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
