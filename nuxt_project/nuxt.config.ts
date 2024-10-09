export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook'],
  components: true,  // Automatically register components
  vite: {
    resolve: {
      alias: {
        '@': '/<root>', // Make sure Vite resolves paths correctly
      },
    },
  },
  storybook: {
    url: 'http://localhost:6006',
    port: 6006,
  },
})
