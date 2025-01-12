<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://www.josefinaestevez.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <h2>About</h2>
          <p class="mt-2">
            Passionate developer with extensive experience building web applications, microservices, and shared libraries. 
            Adept at leading projects, collaborating across departments, and engaging with diverse stakeholders. 
            Skilled in prioritizing, organizing, and scoping tasks to drive efficient project delivery.
          </p>
          <p class="mt-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>NuxtJS</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>VueJS</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Career Timeline</h2>
          <CardsCareer v-for="career in timeline" :career-details="career" />
        </section>

        <!-- 
        TODO: Add hobbies
        <HobbySection :hobbies="hobbies" /> 
        -->
      </div>
    </div>
  </NuxtLayout>
</template>
