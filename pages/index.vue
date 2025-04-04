<script setup>
const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: 'Software Engineer Portfolio | Josefina Estevez',
  author: {
    '@type': 'Person',
    '@id': '#josefinaestevez',
  },
  url: 'https://www.josefinaestevez.com/',
  description:
    "Personal Portfolio Website. Hi, I am Josefina Estevez. I'm a Software Engineer based in Barcelona, Spain.",
  keywords:
    'Web Developer, Front End Developer, Frontend Developer, Senior Web Developer, Software Developer, Software Engineer',
  image: 'https://www.josefinaestevez.com/profile-pics/profile.webp',
}
const personJson = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  '@id': '#josefinaestevez',
  name: 'Josefina Estevez',
  email: 'josefinaestevez91@gmail.com',
  url: 'https://www.josefinaestevez.com/',
}
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: 'application/ld+json',
    },
    {
      children: JSON.stringify(personJson),
      type: 'application/ld+json',
    },
  ],
})
definePageMeta({
  layout: false,
})
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
