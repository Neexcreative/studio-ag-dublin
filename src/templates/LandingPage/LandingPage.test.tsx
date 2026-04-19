import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import LandingPage from './LandingPage'
import { landingPageExampleData } from './landingPageData'
import { registerDesignTokens } from '../../tokens'

describe('LandingPage', () => {
  it('renders the configured blocks', () => {
    const styleMap = new Map<string, string>()
    registerDesignTokens({
      setProperty: (name, value) => {
        styleMap.set(name, value ?? '')
      },
    })

    const html = renderToStaticMarkup(
      <LandingPage blocks={landingPageExampleData} />,
    )

    expect(styleMap.get('--color-brand-primary')).toBe('#440000')
    expect(html).toContain('Reusable page blocks for modern businesses')
    expect(html).toContain('Start a conversation')
    expect(html).toContain('Send request')
  })
})
