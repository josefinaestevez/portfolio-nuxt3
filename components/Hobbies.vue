<template>
  <section id="hobbies">
    <h2>Favourite Activities</h2>
    <div class="hobby-grid">
      <CardsHobby
        v-for="item in hobbies"
        :key="item"
        :title="item.title"
        :content="item.text"
        :class-bg="item.classBg"
        class="relative"
      />
    </div>
  </section>
</template>
<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  hobbies: {
    type: Array,
    default: () => [],
  },
})
onMounted(() => {
  gsap.set('.hobby-card-container', { opacity: 0, y: 20 })
  ScrollTrigger.batch('.hobby-card-container', {
    start: '-250px center',
    end: '-100px center',
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
  })
})
</script>
