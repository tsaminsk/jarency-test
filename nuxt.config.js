const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            {
                type: 'image/png',
                rel: 'shortcut icon',
                href: '/favicon.png'
            },
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css?family=Open+Sans"
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#7634A8'
    },

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/components.js'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        ['nuxt-sass-resources-loader', [
            '@/assets/scss/variables.scss',
            '@/assets/scss/mixins.scss'
        ]]
    ],
    css: [{
        lang: 'scss',
        src: '@/assets/scss/all.scss'
    }],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        },
    }
}
