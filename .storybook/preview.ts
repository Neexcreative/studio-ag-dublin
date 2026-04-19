import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { registerDesignTokens } from '../src/tokens'

registerDesignTokens()

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },
}

export default preview
