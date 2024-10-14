// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook','@nuxtjs/tailwindcss'],
css: [
     '@fortawesome/fontawesome-free/css/all.min.css'
  ],
components: true,
  


})