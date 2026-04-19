import type { HTMLAttributes, ReactNode } from 'react'
import './Container.css'

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
}

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={['neex-container', className ?? ''].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}

export default Container
