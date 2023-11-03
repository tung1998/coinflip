export function useSetup () {
  const defaultColor = '#327850'
  const secondaryColor = '#78e28a'
  const isPrimaryLightColor = isLightColor(defaultColor)
  const isSecondaryLightColor = isLightColor(secondaryColor)
  const style:any = [{
    children: `
        :root {
          --color-primary: ${defaultColor || '#333333'};
          --color-primary-lighter: ${isPrimaryLightColor ? adjustHexColor(defaultColor, 70) : adjustHexColor(defaultColor, 95)};
          --color-primary-light: ${isPrimaryLightColor ? adjustHexColor(defaultColor, 50) : adjustHexColor(defaultColor, 85)};
          --color-primary-hover: ${isPrimaryLightColor ? adjustHexColor(defaultColor, -10) : adjustHexColor(defaultColor, 20)};
          --color-primary-focus: ${isPrimaryLightColor ? adjustHexColor(defaultColor, -15) : adjustHexColor(defaultColor, 10)};
          --color-primary-active: ${isPrimaryLightColor ? adjustHexColor(defaultColor, -20) : adjustHexColor(defaultColor, -5)};
          --color-contrast: ${isPrimaryLightColor ? '#333333' : '#ffffff'};
       
          --color-secondary:  ${secondaryColor};
          --color-secondary-lighter:  ${isSecondaryLightColor ? adjustHexColor(secondaryColor, 15) : adjustHexColor(secondaryColor, 70)};
          --color-secondary-hover:  ${isSecondaryLightColor ? adjustHexColor(secondaryColor, -15) : adjustHexColor(secondaryColor, 15)};
          --color-secondary-focus:  ${isSecondaryLightColor ? adjustHexColor(secondaryColor, 15) : adjustHexColor(secondaryColor, 30)};
          --color-secondary-active:  ${isSecondaryLightColor ? adjustHexColor(secondaryColor, 20) : adjustHexColor(secondaryColor, 40)};
          --color-contrast-secondary: ${isSecondaryLightColor ? '#333333' : '#ffffff'};
        }`
  }]

  useHead({
    style
  })
}
