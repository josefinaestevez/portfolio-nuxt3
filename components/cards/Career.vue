<script setup>
const props = defineProps({
  careerDetails: {
    type: Object,
    default() {
      return {}
    },
  },
})
</script>
<template>
  <div
    class="relative bg-white dark:bg-[#1c1c1c] border border-white hover:border-gray-600 dark:border-[#1c1c1c] dark:hover:border-white rounded shadow-lg mt-14 transition ease-out duration-300"
  >
    <div class="w-full absolute -top-10">
      <img
        v-if="careerDetails.logo"
        :src="careerDetails.logo"
        :alt="careerDetails.companyName"
        class="w-20 rounded-full border mx-auto company-logo"
      />
    </div>
    <div class="p-5">
      <h3 v-html="careerDetails.companyName"></h3>
      <h4 v-html="careerDetails.jobTitle"></h4>
      <p class="duration">{{ careerDetails.location }}</p>
      <p class="duration">{{ careerDetails.duration }}</p>
      <ul class="mt-3">
        <li v-for="item in careerDetails.jobScope" :key="item">
          {{ item }}
        </li>
      </ul>
      <p class="mt-3">
        💻 Technologies: {{ careerDetails.techStack.join(', ') }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.company-logo {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 70px;
  height: 70px;
  border-color: #f8f9fa;
}
</style>
