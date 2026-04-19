import type { HTMLAttributes } from 'react'
import './SectionTitle.css'

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string
  title: string
  description?: string
}

function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      {...props}
      className={['neex-section-title', className ?? '']
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow ? <p className="neex-section-title__eyebrow">{eyebrow}</p> : null}
      <h2 className="neex-section-title__heading">{title}</h2>
      {description ? (
        <p className="neex-section-title__description">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
