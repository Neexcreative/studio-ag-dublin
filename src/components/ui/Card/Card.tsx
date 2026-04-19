import type { HTMLAttributes, ReactNode } from 'react'
import './Card.css'

export type CardProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
  eyebrow?: string
  title: string
  description?: string
}

function Card({
  children,
  eyebrow,
  title,
  description,
  className,
  ...props
}: CardProps) {
  return (
    <article
      {...props}
      className={['neex-card', className ?? ''].filter(Boolean).join(' ')}
    >
      {eyebrow ? <p className="neex-card__eyebrow">{eyebrow}</p> : null}
      <h3 className="neex-card__title">{title}</h3>
      {description ? <p className="neex-card__description">{description}</p> : null}
      {children}
    </article>
  )
}

export default Card
