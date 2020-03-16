const themeCache = {}

const themeAction = {}

const themes = ['default', 'dark']

themes.forEach(theme => {
  themeAction[theme] = () => {
    if (!themeCache[theme]) {
      themeCache[theme] = [require(`@/assets/theme/${theme}/index.theme.less`)]
    }
    return themeCache[theme]
  }
})
/** 当前主题 */
let currentTheme = []

/** 设置主题 */
export default async function setTheme (theme) {
  if (themeAction[theme]) {
    const style = await themeAction[theme]()
    currentTheme.forEach(i => i.unuse())
    style.forEach(i => i.use())
    currentTheme = style
  }
}
