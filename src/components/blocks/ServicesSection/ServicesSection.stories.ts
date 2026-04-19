import type { Meta, StoryObj } from '@storybook/react-vite'
import ServicesSection from './ServicesSection'

const meta: Meta<typeof ServicesSection> = {
  title: 'NEEX/Blocks/ServicesSection',
  component: ServicesSection,
}

export default meta

type Story = StoryObj<typeof ServicesSection>

export const Default: Story = {
  args: {
    eyebrow: 'Offer',
    title: 'Adapt the same section to multiple business models',
    description:
      'Use the card grid for services, packages, differentiators, outcomes or audience-specific offers.',
    items: [
      {
        eyebrow: 'Local',
        title: 'On-site service offer',
        description:
          'Present coverage area, response speed and trust-building information in a clean grid.',
      },
      {
        eyebrow: 'Professional',
        title: 'Consulting package',
        description:
          'Explain scope, decision support and strategic outcomes for higher-ticket services.',
      },
      {
        eyebrow: 'Digital',
        title: 'Acquisition funnel',
        description:
          'Organize benefits, onboarding and next steps for courses, subscriptions or digital products.',
      },
    ],
  },
}
