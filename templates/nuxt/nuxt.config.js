const pkg = require('./package.json')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titlePart) => {
      const _$isNull = require('lodash/isNull')
      const _$isUndefined = require('lodash/isUndefined')

      const brandName = '<%= formalName %>'

      let title

      if (_$isUndefined(titlePart) ||
          _$isNull(titlePart) || titlePart.trim() === '' ) {
        title = brandName
      } else {
        title = `${titlePart} - ${brandName}`
      }

      return title
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', height: '1rem' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~stylesheets/common/_global.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/global-components.js' },
    { src: '~/plugins/global-components.no-ssr.js', ssr: false },
    { src: '~/plugins/third-party-packages.js' },
    { src: '~/plugins/third-party-packages.no-ssr.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.VUE_APP_API_URL || 'https://changeme.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
