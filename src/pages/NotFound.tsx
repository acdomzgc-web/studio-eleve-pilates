import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import logoUrl from '@/assets/logo-eleve-2d6df.png'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <img src={logoUrl} alt="Eleve Logo" className="w-32 mb-8 opacity-80" />
      <h1 className="text-6xl font-serif font-bold text-eleve-dark mb-4">404</h1>
      <h2 className="text-2xl font-medium text-eleve-dark/80 mb-6">Página não encontrada</h2>
      <p className="text-eleve-dark/60 max-w-md mb-8">
        A página que você está procurando pode ter sido removida, teve seu nome alterado ou está
        temporariamente indisponível.
      </p>
      <Button
        asChild
        className="bg-eleve-primary hover:bg-eleve-primaryHover text-white rounded-full px-8"
      >
        <Link to="/">Voltar para o Início</Link>
      </Button>
    </div>
  )
}
