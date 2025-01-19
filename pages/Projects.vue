<script setup>
const projects = [
  {
    isReverse: true,
    title: 'NEPTU GOODS',
    titleColor: 'text-white',
    filterColor: 'bg-slate-900 bg-opacity-60',
    imageUrl: '/projects/neptu-goods.webp',
    description:
      'Co-founded a sustainable streetwear brand, offering high-quality, ethically made essentials.',
    techStack: [
      'Shopify',
      'Klaviyo',
      'Hoola',
      'Social Media Management',
      'Accounting and financial operations',
      'Copywriting',
    ],
    isUrl: true,
    urlLink: 'https://neptugoods.com/',
  },
]
useHead({
  title: 'Web Developer Portfolio | Personal Projects',
  meta: [
    {
      property: 'og:title',
      content: 'Web Developer Portfolio | Personal Projects',
    },
    {
      property: 'og:site_name',
      content: 'Web Developer Portfolio | Personal Projects',
    },
    {
      property: 'og:site',
      content: 'https://www.josefinaestevez.com/projects',
    },
  ],
})
</script>
<template>
  <NuxtLayout name="default">
    <Projects :projects="projects" />
  </NuxtLayout>
</template>
