<script setup>
const skills = [
  {
    imgUrl: "/logos/html5-original.svg",
    name: "HTML",
    alt: "HTML logo",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/css3-plain-wordmark.svg",
    name: "CSS",
    alt: "CSS logo",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/javascript-original.svg",
    name: "JavaScript",
    alt: "JavaScript logo",
    width: 150,
    height: 150,
  },
  // {
  //   imgUrl: "/logos/react-original.svg",
  //   name: "React",
  //   alt: "React logo",
  //   width: 150,
  //   height: 150,
  // },
  // {
  //   imgUrl: "/logos/nextjs-original.svg",
  //   name: "NextJS",
  //   alt: "NextJs logo",
  //   width: 150,
  //   height: 150,
  // },
  {
    imgUrl: "/logos/typescript-original.svg",
    name: "TypeScript",
    alt: "TypeScript logo",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/vuejs-original.svg",
    name: "Vue",
    alt: "Vue logo",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/nuxtjs-original.svg",
    name: "NuxtJS",
    alt: "NuxtJS logo",
    width: 150,
    height: 150,
  },
  // {
  //   imgUrl: "/logos/materialui-original.svg",
  //   name: "Material UI",
  //   alt: "Material UI logo",
  //   width: 150,
  //   height: 150,
  // },
  // {
  //   imgUrl: "/logos/redux-original.svg",
  //   name: "Redux",
  //   alt: "Redux logo",
  //   width: 150,
  //   height: 150,
  // },
  {
    imgUrl: "/logos/jest-plain.svg",
    name: "Jest",
    alt: "Jest logo",
    width: 150,
    height: 150,
  },
  // {
  //   imgUrl: "/logos/tailwindcss-plain.svg",
  //   name: "TailwindCSS",
  //   alt: "TailwindCSS logo",
  //   width: 150,
  //   height: 150,
  // },
  // {
  //   imgUrl: "/logos/firebase-plain.svg",
  //   name: "Firebase",
  //   alt: "Firebase logo",
  //   width: 150,
  //   height: 150,
  // },
  {
    imgUrl: "/logos/nodejs-original.svg",
    name: "NodeJS",
    alt: "NodeJS logo",
    width: 150,
    height: 150,
  },
  {
    imgUrl: "/logos/git-original.svg",
    name: "Git",
    alt: "Git logo",
    width: 150,
    height: 150,
  },
  // {
  //   imgUrl: "/logos/shopify-liquid-logo.webp",
  //   name: "Liquid",
  //   alt: "Liquid logo",
  //   width: 321,
  //   height: 315,
  // },
  {
    imgUrl: "/logos/shopify-b_w.webp",
    name: "Shopify",
    alt: "Shopify logo",
    width: 512,
    height: 512,
  },
  {
    imgUrl: "/logos/jquery-original.svg",
    name: "jQuery",
    alt: "jQuery logo",
    width: 150,
    height: 150,
  },
  // TODO: Add skills
];
useHead({
  title: "Web Developer Portfolio | Skills",
  meta: [
    {
      property: "og:title",
      content: "Web Developer Portfolio | Skills",
    },
    {
      property: "og:site_name",
      content: "Web Developer Portfolio | Skills",
    },
    {
      property: "og:site",
      content: "https://www.josefinaestevez.com/skills",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <Skills :skill-set="skills" />
  </NuxtLayout>
</template>
