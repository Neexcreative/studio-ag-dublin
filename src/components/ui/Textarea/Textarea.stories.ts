import type { Meta, StoryObj } from '@storybook/react-vite'
import Textarea from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'NEEX/UI/Textarea',
  component: Textarea,
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Tell us more',
    rows: 5,
  },
}
