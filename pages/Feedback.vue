<script setup lang="ts">
const feedback = [
    {
        author: {
            firstName: 'Marc',
            lastName: 'Düker',
            role: 'Backend Engineer',
            company: 'TIDAL',
        },
        feedback: 'Josefina has been an incredible collaborator on the Sheer ID migration. Her communication is consistently clear and effective, making our work together smooth and efficient. I really appreciate how quickly she responds and addresses issues, often resolving them in record time. Josefina also excels at taking responsibility when decisions need to be made at a higher level and making sure that every detail is taken care of. It’s been a pleasure working with her, and I’m always confident that everything is well-managed when she’s involved. Her dedication and responsiveness have made a huge difference in the success of our project, and I’m very happy to continue working with her.',
        givenAt: new Date('2024-10-03'),
    },
    {
        author: {
            firstName: 'Marius',
            lastName: 'Oppedal',
            role: 'Manager',
            company: 'TIDAL',
        },
        feedback: 'Josefina is a highly efficient and driven developer that has a talent for absorbing information and learning new things. Furthermore her communication and collaborations skills are excellent, which has been noted by several stakeholders, when she took on parts of my job during my summer vacation.',
        givenAt: new Date('2024-08-09'),
    },
    {
        author: {
            firstName: 'Marcel',
            lastName: 'Azeroth',
            role: 'Partnerships',
            company: 'TIDAL',
        },
        feedback: 'Josefina has been a great help today in an urgent trouble shooting request. As usual, she offers swift replies and a strong understanding of the campaign web flows, either helping immediately or pointing me in the right direction. This strongly improves our turnaround times and helps us to move projects efficiently.',
        givenAt: new Date('2024-08-08'),
    },
    {
        author: {
            firstName: 'Euan',
            lastName: 'Crowe',
            role: 'Project Manager',
            company: 'TIDAL',
        },
        feedback: 'Josefina has taken charge of the work around signup events updates and requirements, formalised a process for the stakeholders and provided them with perfectly communicated, clear & concise instructions. This makes me confident that the project is well under control on our end.',
        givenAt: new Date('2023-01-24'),
    },
    {
        author: {
            firstName: 'Dominick',
            lastName: 'Job Tunac',
            role: 'Backend',
            company: 'TIDAL',
        },
        feedback: 'Great support from the (user) front-end team!',
        givenAt: new Date('2022-10-13'),
    },
];
</script>
<template>
    <NuxtLayout name="default">
      <!-- Testimonials Section -->
      <section class="py-16 bg-gray-50">
        <h2>Feedback & Reviews</h2>
        <p class="text-center mt-4">Read what colleagues, clients, and partners have to say about working together.</p>
        <div class="container mt-8 px-6">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardsFeedback v-for="feedbackEntry in feedback" :feedback="feedbackEntry" />
          </div>
        </div>
      </section>
    </NuxtLayout>
  </template>
  