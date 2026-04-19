import type { Meta, StoryObj } from '@storybook/react-vite'
import CTASection from './CTASection'

const meta: Meta<typeof CTASection> = {
  title: 'NEEX/Blocks/CTASection',
  component: CTASection,
}

export default meta

type Story = StoryObj<typeof CTASection>

export const Default: Story = {
  args: {
    eyebrow: 'Next step',
    title: 'Guide the visitor to the next conversion moment',
    description:
      'Use this block for quote requests, bookings, consultations, trials or offer transitions.',
    actions: [
      { label: 'Start a request', href: '#contact' },
      { label: 'Review details', href: '#details', variant: 'ghost' },
    ],
  },
}
