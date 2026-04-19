import './FeaturesSection.css'
import { Card, SectionTitle } from '../../ui'
import type { BlockCardItem } from '../types'

export type FeaturesSectionProps = {
  eyebrow?: string
  description?: string
  items: BlockCardItem[]
  title: string
}

function FeaturesSection({
  eyebrow = 'Highlights',
  title,
  description,
  items,
}: FeaturesSectionProps) {
  return (
    <section className="neex-card-grid-section">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="neex-card-grid">
        {items.map((item, index) => (
          <Card
            key={item.id ?? `${item.title}-${index}`}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
