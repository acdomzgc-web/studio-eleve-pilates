import { Reveal } from '@/components/ui/reveal'
import instaRefUrl from '@/assets/captura-de-tela-2026-03-30-230537-3b072.png'
import logoUrl from '@/assets/logo-eleve-2d6df.png'

const MOCK_POSTS = [
  'https://img.usecurling.com/p/400/400?q=pilates%20stretching',
  'https://img.usecurling.com/p/400/400?q=pilates%20reformer',
  'https://img.usecurling.com/p/400/400?q=pilates%20studio%20equipment',
  'https://img.usecurling.com/p/400/400?q=healthy%20movement',
  'https://img.usecurling.com/p/400/400?q=pilates%20pose',
  'https://img.usecurling.com/p/400/400?q=pilates%20wellness',
]

export function InstagramGallery() {
  return (
    <section className="py-24 bg-eleve-dark text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          <div className="lg:w-1/3 flex flex-col space-y-8 sticky top-32">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Acompanhe nosso dia a dia
              </h2>
              <p className="text-white/70 mb-8">
                Siga-nos no Instagram para dicas de saúde, bastidores do estúdio e muito mais sobre
                a prática do pilates.
              </p>

              {/* Mocked Profile Header mimicking the screenshot context */}
              <a
                href="https://instagram.com/elevestudiopilates"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={logoUrl}
                    alt="Logo"
                    className="w-16 h-16 rounded-full border-2 border-eleve-primary"
                  />
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      elevestudiopilates
                    </h3>
                    <p className="text-sm text-white/60">Eleve | Pilates e Performance</p>
                  </div>
                </div>

                <div className="flex gap-4 text-sm mb-6 pb-6 border-b border-white/10">
                  <div className="flex flex-col">
                    <span className="font-bold">254</span>{' '}
                    <span className="text-white/60">posts</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">788</span>{' '}
                    <span className="text-white/60">seguidores</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">1.300</span>{' '}
                    <span className="text-white/60">seguindo</span>
                  </div>
                </div>

                <div className="text-sm space-y-1">
                  <p className="text-white/60">Estúdio de pilates</p>
                  <p>🌟 Descubra o poder transformador do pilates!</p>
                  <p>❤️ Eleve sua performance a um novo nível ✨</p>
                  <p>📲 Agende sua experiência 👇</p>
                  <p className="text-blue-400 mt-2 truncate">🔗 wa.link/9pxdyl e mais 1</p>
                </div>
              </a>
            </Reveal>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {MOCK_POSTS.map((img, idx) => (
                <Reveal
                  key={idx}
                  delay={idx * 100}
                  className="aspect-square relative group overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt={`Post do Instagram ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
