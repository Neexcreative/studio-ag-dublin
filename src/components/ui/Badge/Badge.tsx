import type { HTMLAttributes, ReactNode } from 'react'
import './Badge.css'

export type BadgeVariant = 'default' | 'dark' | 'outline'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children?: ReactNode
  label?: string
  variant?: BadgeVariant
}

function Badge({
  children,
  label,
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  const content = children ?? label

  return (
    <span
      {...props}
      className={['neex-badge', `neex-badge--${variant}`, className ?? '']
        .filter(Boolean)
        .join(' ')}
    >
      {content}
    </span>
  )
}

export default Badge
