import './Hero.css'
import { Button, SectionTitle } from '../../ui'
import type { BlockAction } from '../types'

export type HeroProps = {
  actions?: BlockAction[]
  eyebrow?: string
  description?: string
  title: string
}

function Hero({ actions = [], eyebrow, description, title }: HeroProps) {
  return (
    <div className="neex-hero">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="neex-hero__title"
      />

      {actions.length > 0 ? (
        <div className="neex-hero-actions">
          {actions.map(({ label, variant = 'primary', ...action }) => (
            <Button
              key={`${label}-${variant}`}
              variant={variant}
              {...action}
            >
              {label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Hero
