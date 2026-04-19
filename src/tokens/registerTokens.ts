import { tokenCssVariables } from './cssVariables'

export function registerDesignTokens(
  target: Pick<CSSStyleDeclaration, 'setProperty'> = document.documentElement
    .style,
) {
  Object.entries(tokenCssVariables).forEach(([name, value]) => {
    target.setProperty(name, value)
  })
}
