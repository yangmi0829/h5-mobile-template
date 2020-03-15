const themeCache = {};

const themeAction = {
    /** 默认主题 */
    default() {
        if (!themeCache.default) {
            themeCache.default = [
                require('@/assets/theme/default/index.theme.less')
            ];
        }
        return themeCache.default;
    },
    dark() {
        if (!themeCache.dark) {
            themeCache.dark = [
                require('@/assets/theme/dark/index.theme.less')
            ];
        }
        return themeCache.dark;
    }
};

/** 当前主题 */
let currentTheme = [];

/** 设置主题 */
export default async function setTheme(theme) {
    if (themeAction[theme]) {
        const style = await themeAction[theme]();
        currentTheme.forEach(i => i.unuse());
        style.forEach(i => i.use());
        currentTheme = style;
    }
}
