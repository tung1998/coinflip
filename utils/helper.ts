export function isLightColor (backgroundColor:string) {
  try {
    const bgColor = parseInt(backgroundColor.slice(1), 16)
    const contrastWithBlack = (
      (bgColor >> 16) * 0.299 +
      ((bgColor >> 8) & 0xFF) * 0.587 +
      (bgColor & 0xFF) * 0.114
    )

    return contrastWithBlack > 178
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return false
  }
}

export function adjustHexColor (hex: string, percent?:number) {
  try {
    const color = parseInt(hex.slice(1), 16)
    if (!percent) { return hex }
    if (percent < 0) {
      const red = Math.round((color >> 16) * ((100 + percent) / 100))
      const green = Math.round(((color >> 8) & 255) * ((100 + percent) / 100))
      const blue = Math.round((color & 255) * ((100 + percent) / 100))
      return `#${(blue | (green << 8) | (red << 16)).toString(16).padStart(6, '0')}`
    }
    if (percent > 0) {
      const red = Math.round((color >> 16) * ((100 - percent) / 100) + 255 * percent / 100)
      const green = Math.round(((color >> 8) & 255) * ((100 - percent) / 100) + 255 * percent / 100)
      const blue = Math.round((color & 255) * ((100 - percent) / 100) + 255 * percent / 100)
      return `#${(blue | (green << 8) | (red << 16)).toString(16).padStart(6, '0')}`
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return '#333333'
  }
}
