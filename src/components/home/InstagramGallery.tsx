import { Instagram } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import matrizImg from '@/assets/eleve-matriz-b0441.jpeg'
import img2 from '@/assets/whatsapp-image-2026-04-13-at-22.35.56-2-2895c.jpeg'
import img3 from '@/assets/whatsapp-image-2026-04-13-at-22.35.56-1-94b28.jpeg'
import img4 from '@/assets/whatsapp-image-2026-04-13-at-22.35.56-51b5c.jpeg'

export function InstagramGallery() {
  return (
    <section id="comunidade" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center max-w-4xl mx-auto">
          <div>
            <h3 className="text-5xl md:text-6xl font-serif text-dark-brown mb-3">5.4k+</h3>
            <p className="text-terracotta uppercase tracking-[0.2em] text-xs font-bold">
              Seguidores
            </p>
          </div>
          <div className="hidden md:block w-px h-16 bg-beige mx-auto my-auto" />
          <div className="md:hidden w-16 h-px bg-beige mx-auto" />
          <div>
            <h3 className="text-5xl md:text-6xl font-serif text-dark-brown mb-3">2</h3>
            <p className="text-terracotta uppercase tracking-[0.2em] text-xs font-bold">Unidades</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-beige mx-auto my-auto" />
          <div className="md:hidden w-16 h-px bg-beige mx-auto" />
          <div>
            <h3 className="text-5xl md:text-6xl font-serif text-dark-brown mb-3">100%</h3>
            <p className="text-terracotta uppercase tracking-[0.2em] text-xs font-bold">
              Renovação
            </p>
          </div>
        </FadeIn>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-brown mb-6">
              Nossa Comunidade
            </h2>
            <p className="text-lg text-dark-brown/70 font-light">
              Faça parte da família Eleve e acompanhe nosso dia a dia focado em saúde, movimento e
              bem-estar.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[matrizImg, img2, img3, img4].map((imgUrl, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a
                href="https://www.instagram.com/elevestudiopilates/"
                target="_blank"
                rel="noreferrer"
                className="block aspect-square relative group overflow-hidden rounded-[16px]"
              >
                <img
                  src={imgUrl}
                  alt="Studio Activity"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-terracotta/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white w-10 h-10" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <a
            href="https://www.instagram.com/elevestudiopilates/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 bg-terracotta text-white tracking-[0.15em] font-bold rounded-none hover:bg-terracotta/90 transition-all uppercase text-xs gap-3 hover:-translate-y-1 shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            Seguir no Instagram
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
