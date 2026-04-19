import type { Meta, StoryObj } from '@storybook/react-vite'
import LandingPage from './LandingPage'
import { landingPageExampleData } from './landingPageData'

const meta: Meta<typeof LandingPage> = {
  title: 'NEEX/Templates/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof LandingPage>

export const Default: Story = {
  args: {
    blocks: landingPageExampleData,
  },
}
