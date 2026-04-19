import type { HTMLAttributes, ReactNode } from 'react'
import './Section.css'

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
}

function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={['neex-section', className ?? ''].filter(Boolean).join(' ')}
    >
      {children}
    </section>
  )
}

export default Section
