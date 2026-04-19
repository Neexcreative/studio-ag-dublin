import type { Meta, StoryObj } from '@storybook/react-vite'
import FeaturesSection from './FeaturesSection'

const meta: Meta<typeof FeaturesSection> = {
  title: 'NEEX/Blocks/FeaturesSection',
  component: FeaturesSection,
}

export default meta

type Story = StoryObj<typeof FeaturesSection>

export const Default: Story = {
  args: {
    eyebrow: 'Highlights',
    title: 'Why this system matters',
    description:
      'Reusable blocks that help different businesses launch consistent landing pages faster.',
    items: [
      {
        eyebrow: 'Strategy',
        title: 'Clear positioning',
        description:
          'Shape the message around the offer, audience and conversion goal without changing the block structure.',
      },
      {
        eyebrow: 'Design',
        title: 'Reusable visual language',
        description:
          'Preserve the premium feel while adapting the content model to new industries and offers.',
      },
      {
        eyebrow: 'Production',
        title: 'Faster delivery',
        description:
          'Compose pages from predictable data instead of rewriting markup for each project.',
      },
    ],
  },
}
