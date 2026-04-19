import './ServicesSection.css'
import { Card, SectionTitle } from '../../ui'
import type { BlockCardItem } from '../types'

export type ServicesSectionProps = {
  eyebrow?: string
  description?: string
  items: BlockCardItem[]
  title: string
}

function ServicesSection({
  eyebrow = 'Services',
  title,
  description,
  items,
}: ServicesSectionProps) {
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

export default ServicesSection
