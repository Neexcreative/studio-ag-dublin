import './LandingPage.css'
import type {
  CTASectionProps,
  ContactFormProps,
  FeaturesSectionProps,
  HeroProps,
  ServicesSectionProps,
} from '../../components'
import {
  CTASection,
  ContactForm,
  Container,
  FeaturesSection,
  Hero,
  Section,
  ServicesSection,
} from '../../components'

type LandingPageHeroBlock = {
  data: HeroProps
  id?: string
  type: 'hero'
}

type LandingPageFeaturesBlock = {
  data: FeaturesSectionProps
  id?: string
  type: 'features'
}

type LandingPageServicesBlock = {
  data: ServicesSectionProps
  id?: string
  type: 'services'
}

type LandingPageCtaBlock = {
  data: CTASectionProps
  id?: string
  type: 'cta'
}

type LandingPageContactBlock = {
  data: ContactFormProps
  id?: string
  type: 'contact'
}

export type LandingPageBlock =
  | LandingPageHeroBlock
  | LandingPageFeaturesBlock
  | LandingPageServicesBlock
  | LandingPageCtaBlock
  | LandingPageContactBlock

export type LandingPageProps = {
  blocks: LandingPageBlock[]
}

function renderBlock(block: LandingPageBlock) {
  switch (block.type) {
    case 'hero':
      return <Hero {...block.data} />
    case 'features':
      return <FeaturesSection {...block.data} />
    case 'services':
      return <ServicesSection {...block.data} />
    case 'cta':
      return <CTASection {...block.data} />
    case 'contact':
      return <ContactForm {...block.data} />
    default:
      return null
  }
}

function LandingPage({ blocks }: LandingPageProps) {
  return (
    <div className="neex-landing-page">
      <Container>
        {blocks.map((block, index) => (
          <Section
            key={block.id ?? `${block.type}-${index}`}
            className={`neex-landing-page__section neex-landing-page__section--${block.type}`}
          >
            {renderBlock(block)}
          </Section>
        ))}
      </Container>
    </div>
  )
}

export default LandingPage
