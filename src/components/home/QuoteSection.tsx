import bgImage from '@/assets/whatsapp-image-2026-04-13-at-22.22.31-7d057.jpeg'

export default function QuoteSection() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-moss/70" />

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <span className="text-terracotta text-8xl md:text-[120px] leading-none font-serif block mb-4 animate-fade-in-up">
          &ldquo;
        </span>
        <blockquote className="text-2xl md:text-4xl lg:text-5xl text-white font-serif italic max-w-4xl mx-auto leading-relaxed md:leading-[1.4] animate-fade-in-up delay-100">
          O movimento curativo transforma não apenas o corpo, mas a forma como você vive e sente
          cada momento.
        </blockquote>
      </div>
    </section>
  )
}
