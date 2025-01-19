<script setup>
import { useHead } from 'vue';

const skills = [
  {
    imgUrl: '/skills/javascript.svg',
    name: 'JavaScript',
    alt: 'JavaScript logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/typescript.svg',
    name: 'TypeScript',
    alt: 'TypeScript logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/vuejs.svg',
    name: 'Vue',
    alt: 'Vue logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/nuxtjs.svg',
    name: 'NuxtJS',
    alt: 'NuxtJS logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/html5.svg',
    name: 'HTML',
    alt: 'HTML logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/nodejs.svg',
    name: 'NodeJS',
    alt: 'NodeJS logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/git.svg',
    name: 'Git',
    alt: 'Git logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/shopify.svg',
    name: 'Shopify',
    alt: 'Shopify logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/python.svg',
    name: 'Python',
    alt: 'Python logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/django.svg',
    name: 'Django',
    alt: 'Django logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/mongodb.svg',
    name: 'MongoDB',
    alt: 'MongoDB logo',
    width: 150,
    height: 150,
  },
  {
    imgUrl: '/skills/postgresql.svg',
    name: 'PostgreSQL',
    alt: 'PostgreSQL logo',
    width: 150,
    height: 150,
  },
];
useHead({
  title: 'Web Developer Portfolio | Skills',
  meta: [
    {
      property: 'og:title',
      content: 'Web Developer Portfolio | Skills',
    },
    {
      property: 'og:site_name',
      content: 'Web Developer Portfolio | Skills',
    },
    {
      property: 'og:site',
      content: 'https://www.josefinaestevez.com/skills',
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <Skills :skill-set="skills" />
  </NuxtLayout>
</template>
