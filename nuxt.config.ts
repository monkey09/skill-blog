// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: 'Skills Blog',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify']
  },
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI
    }
  }
})
