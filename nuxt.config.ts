import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Web Developer Portfolio | Josefina Estevez",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. Hi, I am Josefina Estevez. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Josefina Estevez" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Josefina Estevez",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Josefina Estevez",
        },
        {
          property: "og:site",
          content: "https://www.josefinaestevez.com/",
        },
        {
          property: "og:title",
          content: "Web Developer Portfolio | Josefina Estevez",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Hi, I am Josefina Estevez. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "https://www.josefinaestevez.com/favicon-bw.png", ///favicon-wb.png
        },
        // google site verification
        // {
        //   name: "google-site-verification",
        //   content: "CpKqeACrIS7JLwdilAnMgoDicJnoBaNmupPoq6fUtFs",
        // },
      ],
      link: [{ rel: "icon", href: "/favicon-bw.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});
