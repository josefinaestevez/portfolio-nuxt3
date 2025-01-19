<script setup>
import { useHead } from 'vue';

useHead({
  title: 'Web Developer Portfolio | Contact',
  meta: [
    {
      property: 'og:title',
      content: 'Web Developer Portfolio | Contact',
    },
    {
      property: 'og:site_name',
      content: 'Web Developer Portfolio | Contact',
    },
    {
      property: 'og:site',
      content: 'https://www.josefinaestevez.com/contact',
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div>
      <Contact id="contact" />
    </div>
  </NuxtLayout>
</template>
