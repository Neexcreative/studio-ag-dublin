import type { Meta, StoryObj } from '@storybook/react-vite'
import StudioAGPage from './StudioAGPage'

const meta: Meta<typeof StudioAGPage> = {
  title: 'Pages/StudioAG',
  component: StudioAGPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof StudioAGPage>

export const Default: Story = {}
