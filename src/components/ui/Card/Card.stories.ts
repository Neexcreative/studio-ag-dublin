import type { Meta, StoryObj } from '@storybook/react-vite'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'NEEX/UI/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    eyebrow: 'Offer',
    title: 'Consistent content block',
    description:
      'Use this card for services, features, proof points, differentiators or offer summaries across the system.',
  },
}
