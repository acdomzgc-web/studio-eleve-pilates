import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function Reveal({ children, className, delay = 0, direction = 'up' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8'
      case 'left':
        return 'translate-x-8'
      case 'right':
        return '-translate-x-8'
      case 'none':
        return ''
      default:
        return 'translate-y-8'
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out opacity-0',
        getDirectionClasses(),
        isVisible && 'opacity-100 translate-y-0 translate-x-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
