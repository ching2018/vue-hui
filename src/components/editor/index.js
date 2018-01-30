import polyfill from './src/polyfill-ie'
import buildInModules from './src/modules/index'
import Editor from './src/editor.vue'
import i18nZhCn from './src/i18n/zh-cn'
import i18nEnUs from './src/i18n/en-us'
import mixin from './src/util/mixin'

polyfill();

let SetEditor = function(params = {}) {
    let options = params.editor || {};
    let modules = [...buildInModules]
    const components = {}

    // extended modules
    if (Array.isArray(options.modules)) {
        options.modules.forEach((module) => {
            if (module.name) {
                modules.push(module)
            }
        })
    }
    // hidden modules
    if (Array.isArray(options.hiddenModules)) {
        modules = (() => {
            const arr = []
            modules.forEach((m) => {
                if (!options.hiddenModules.includes(m.name)) {
                    arr.push(m)
                }
            })
            return arr
        })()
    }
    // visible modules
    if (Array.isArray(options.visibleModules)) {
        modules = (() => {
            const arr = []
            modules.forEach((module) => {
                if (options.visibleModules.includes(module.name)) {
                    arr.push(module)
                }
            })
            return arr
        })()
    }


    modules.forEach((module) => {
        // specify the config for each module in options by name
        const config = options[module.name]
        module.config = mixin(module.config, config)

        if (module.dashboard) {
            // $options.module
            module.dashboard.module = module
            components[`dashboard-${module.name}`] = module.dashboard
        }
        if (options.icons && options.icons[module.name]) {
            module.icon = options.icons[module.name]
        }

        module.hasDashboard = !!module.dashboard
        // prevent vue sync
        module.dashboard = null
    })

    // i18n
    const i18n = { 'zh-cn': i18nZhCn, 'en-us': i18nEnUs }
    const customI18n = options.i18n || {}
    Object.keys(customI18n).forEach((key) => {
        i18n[key] = i18n[key] ? mixin(i18n[key], customI18n[key]) : customI18n[key]
    })
    const language = options.language || 'en-us'
    const locale = i18n[language]

    // showModuleName
    const defaultShowModuleName = !!options.showModuleName

    // ######################################
    const compo = mixin(Editor, {
        data() {
            return { modules, locale, defaultShowModuleName }
        },
        components
    });
    return compo;
}

export { Editor, SetEditor };
