// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@nuxt/ui"],
  i18n: {
    vueI18n: "./configs/i18n.config.ts",
  },
  devtools: { enabled: true },
});
