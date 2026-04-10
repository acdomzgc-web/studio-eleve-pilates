import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const translateClass = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    none: 'translate-y-0',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isInView
          ? 'opacity-100 translate-y-0 translate-x-0'
          : cn('opacity-0', translateClass[direction]),
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}
