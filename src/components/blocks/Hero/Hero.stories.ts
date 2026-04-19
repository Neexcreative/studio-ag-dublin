import type { Meta, StoryObj } from '@storybook/react-vite'
import Hero from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'NEEX/Blocks/Hero',
  component: Hero,
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    eyebrow: 'Flexible landing system',
    title: 'A premium hero block for many kinds of offers',
    description:
      'Swap the content for local services, healthcare, hospitality, real estate, personal brands or digital products while keeping the same structure.',
    actions: [
      { label: 'Primary action', href: '#contact' },
      { label: 'Secondary action', href: '#details', variant: 'secondary' },
    ],
  },
}
