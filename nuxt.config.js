const path = require('path');
const localization = require('./packages/localization/server');
const cookies = require('./packages/cookies/server');
const modifyVarsJson = require('./components/AntD/Style/ModifyVars.json');

require('dotenv').config();

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'antd-nuxt-base-nth',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    env: {
        ENV: process.env.ENV,
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [{ src: 'ant-design-vue/dist/antd.less', lang: 'less' }],
    styleResources: {
        scss: ['@/assets/style/Variable.scss'],
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/axios',
        '@/plugins/init',
        '@/plugins/mixin',
        '@/plugins/g-components',
        { src: '@/plugins/g-components-no-ssr', ssr: false },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/dotenv',
        '@nuxtjs/moment',
    ],
    moment: {
        defaultLocale: localization.defaultLocale,
        locales: localization.localeArray,
        timezone: true,
        defaultTimezone: localization.defaultTimezone,
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        [
            'nuxt-i18n',
            {
                locales: [localization.locales.vi, localization.locales.en],
                lazy: true,
                langDir: localization.langDir,
                defaultLocale: localization.defaultLocale,
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: cookies.LOCALE,
                    alwaysRedirect: true,
                    fallbackLocale: localization.defaultLocale,
                },
            },
        ],
        '@nuxtjs/svg-sprite',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        loaders: {
            less: {
                javascriptEnabled: true,
                modifyVars: modifyVarsJson,
            },
        },
        extend(config, { isDev, isClient }) {
            const alias = (config.resolve.alias = config.resolve.alias || {});
            alias.components = path.join(__dirname, 'components');
            alias.packages = path.join(__dirname, 'packages');

            if (isClient) {
                if (isDev) {
                    config.module.rules.push({
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/,
                        options: {
                            fix: true,
                        },
                    });
                }
            }
        },
    },
};
