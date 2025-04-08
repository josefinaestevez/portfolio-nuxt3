<template>
  <section id="skills">
    <div>
      <h2 class="techTitle">Technologies & Frameworks</h2>
    </div>
    <ul>
      <li v-for="skill in skillSet" :key="skill" class="skillStyle">
        <img
          class="p-3 m-auto"
          :src="skill.imgUrl"
          :alt="skill.alt"
          :width="skill.width"
          :height="skill.height"
          loading="lazy"
        />
        <p>{{ skill.name }}</p>
      </li>
    </ul>
  </section>
</template>
<script setup>
import gsap from 'gsap'

const props = defineProps({
  skillSet: {
    type: Array,
    default: () => [],
  },
})
onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.techTitle',
      start: '-50px center',
      end: 'top center',
    },
  })
  titleTl
    .addLabel('start')
    .from('.techTitle', { opacity: 0, translateX: '-100px' })
    .addLabel('entering')
    .to('.techTitle', { opacity: 1, translateX: '0px', duration: 0.5 })
    .addLabel('end')

  gsap.set('.skillStyle', { opacity: 0, y: 20 })
  gsap.to('.skillStyle', {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    delay: 0.3,
    onStart: () => console.log('Animación iniciada para skills'),
  })
})
</script>
<style>
.skillStyle:hover {
  transform: translateY(-0.5rem) !important;
}
.skillStyle {
  opacity: 0;
}
</style>
