import type { Meta, StoryObj } from '@storybook/react-vite'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'NEEX/UI/Select',
  component: Select,
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    label: 'Interest',
    placeholder: 'Select a topic',
    options: ['Consultation', 'Website', 'Campaign'],
  },
}
