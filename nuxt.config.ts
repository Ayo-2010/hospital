export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  colorMode: { preference: 'light' },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL || '',
    authSecret: process.env.AUTH_SECRET || 'dev-secret-change-in-production',
    public: {
      apiBase: '/api/v1',
      appName: 'MedCore HMS',
    },
  },
  nitro: {
    routeRules: {
      '/api/**': { cors: true, headers: { 'cache-control': 'no-store' } },
    },
    externals: {
      inline: ['@vue/devtools-api'],
    },
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
})
