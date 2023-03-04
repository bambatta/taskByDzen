// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  alias: {
    "@": "src/",
  },
  ssr: true,
  css: ["~/assets/scss/common.scss"],
});
