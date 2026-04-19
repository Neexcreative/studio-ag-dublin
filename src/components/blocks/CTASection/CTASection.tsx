import './CTASection.css'
import { Button, SectionTitle } from '../../ui'
import type { BlockAction } from '../types'

export type CTASectionProps = {
  actions?: BlockAction[]
  eyebrow?: string
  description?: string
  title: string
}

function CTASection({
  actions = [],
  eyebrow = 'Next step',
  title,
  description,
}: CTASectionProps) {
  return (
    <section className="neex-cta-section">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="neex-cta-section__title"
      />

      {actions.length > 0 ? (
        <div className="neex-cta-actions">
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
    </section>
  )
}

export default CTASection
