import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type CommonButtonProps = {
  children?: ReactNode
  href?: string
  label?: string
  rel?: string
  target?: HTMLAttributeAnchorTarget
  variant?: ButtonVariant
  fullWidth?: boolean
}

export type ButtonProps = CommonButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

function Button({
  children,
  label,
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const content = children ?? label
  const className = [
    'neex-button',
    `neex-button--${variant}`,
    fullWidth ? 'neex-button--full' : '',
    props.className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  if (props.href) {
    const { href, rel, target, ...anchorProps } = props
    const safeRel =
      target === '_blank' && rel == null ? 'noreferrer noopener' : rel

    return (
      <a
        {...(anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={href}
        rel={safeRel}
        target={target}
        className={className}
      >
        {content}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props

  return (
    <button {...buttonProps} type={type} className={className}>
      {content}
    </button>
  )
}

export default Button
