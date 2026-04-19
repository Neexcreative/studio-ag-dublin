import type { Meta, StoryObj } from '@storybook/react-vite'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'NEEX/UI/Badge',
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Design system',
    variant: 'outline',
  },
}
