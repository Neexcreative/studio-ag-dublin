import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'NEEX/UI/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Book a call',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'View details',
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Learn more',
    variant: 'ghost',
  },
}
