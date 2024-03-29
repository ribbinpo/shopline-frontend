// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  i18n: {
    vueI18n: "./configs/i18n.config.ts",
  },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@nuxt/ui"],
  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
    }
  }
});
