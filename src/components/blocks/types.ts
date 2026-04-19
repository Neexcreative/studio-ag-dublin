import type { ButtonProps, ButtonVariant } from '../ui/Button/Button'

export type BlockAction = Omit<
  ButtonProps,
  'children' | 'className' | 'fullWidth'
> & {
  label: string
  variant?: ButtonVariant
}

export type BlockCardItem = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
}
