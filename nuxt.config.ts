// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/sass/app.scss',
    'virtual:windi.css'
  ],
  experimental: { inlineSSRStyles: false },
  modules: ['nuxt-windicss'],

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  build: {
    transpile: ['tslib']
  }
})
