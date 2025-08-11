<script setup lang="ts">
const feedback = [
  {
    author: {
      firstName: 'Thea',
      lastName: 'Clark',
      role: 'Web Developer',
      company: 'TIDAL',
    },
    feedback: `
      Josefina was a driving force in our team, from onboarding new teammates to spearheading key projects. Her technical expertise, cross-team collaboration, and initiative in mentoring others made her a vital contributor and a natural leader on the team. She was the goto person for tricky problems, and the person others would turn to for help.
      She’s been central in project planning, delivery, and sharing knowledge across the team, all while maintaining a positive and proactive attitude. I always highly appreciated her willingness to help, even during busy times. She has a positive, can-do attitude and outstanding professionalism to everything she does, as well as being a wonderful colleague to chat with over lunch.
      Josefina has truly been an absolute joy to work with.
      `,
    givenAt: new Date('2025-06-21'),
  },
  {
    author: {
      firstName: 'Melissa J',
      lastName: 'Gentile',
      role: 'Product - Growth',
      company: 'TIDAL',
    },
    feedback: `
      I had the pleasure of working alongside Josefina for three years at TIDAL (Block Inc), and she is one of the most skilled & capable developers I have had the opportunity to collaborate with. Josefina combines deep technical expertise with exceptional communication skills, consistently bridging the gap between technical teams, colleagues, and stakeholders. She approaches every project with dedication and integrity, always providing realistic timelines while proactively seeking opportunities to accelerate outcomes without compromising quality.
      Josefina’s work is consistently reliable and of the highest standard. She is a natural problem solver, able to navigate complex challenges with creativity and efficiency. Beyond her technical strengths, Josefina is a joy to work with—her professionalism, positive attitude, and collaborative spirit make her an invaluable team member. I highly recommend Josefina to any organization seeking a brilliant developer and an outstanding colleague.
      `,
    givenAt: new Date('2025-06-04'),
  },
  {
    author: {
      firstName: 'Bersabeh',
      lastName: ' Negussie Hailu',
      role: 'Web Test Manager',
      company: 'TIDAL',
    },
    feedback: `
      I had the pleasure of working closely with Josefina, and I can confidently say she is a highly talented software engineer. She's a true team player - always willing to lend a hand, share her expertise, and support her teammates. She has great problem-solving skills, and she communicates complex ideas clearly and effectively. No matter how busy things got, she always made herself available to help others and contribute to the team's success. Any team would be lucky to have her - she’s not just a great engineer, but a great colleague.
      `,
    givenAt: new Date('2025-06-02'),
  },
  {
    author: {
      firstName: 'Jan',
      lastName: 'Kowal',
      role: 'Tech Lead',
      company: 'Identity',
    },
    feedback: `
      I had the pleasure of working with Josefina on the same team, and she was always eager to learn and grow. Her enthusiasm was matched by her ability to consistently provide well-thought, effective solutions. Josefina brings both curiosity and solid expertise to every challenge. She’s a great asset to any team!
      `,
    givenAt: new Date('2025-05-28'),
  },
  {
    author: {
      firstName: 'Marilyn',
      lastName: 'Koutsonikolas',
      role: 'Web Strategy | Conversion Rate Optimization & Experimentation',
      company: 'TIDAL',
    },
    feedback: `
      It was a privilege to work alongside Josefina at Tidal and Block, where she served as a Software Engineer on the Growth team. Josefina played a crucial role in empowering our Experimentation team by developing and building our experiments. Her fantastic communication skills were particularly appreciated; they aided smooth and efficient collaboration despite the geographical distance and challenges that come with multiple time zones. Josefina's contributions were always impactful, and I would gladly work with her again.
      `,
    givenAt: new Date('2025-05-26'),
  },
  {
    author: {
      firstName: 'Marc',
      lastName: 'Düker',
      role: 'Backend Engineer',
      company: 'TIDAL',
    },
    feedback:
      'Josefina has been an incredible collaborator on the Sheer ID migration. Her communication is consistently clear and effective, making our work together smooth and efficient. I really appreciate how quickly she responds and addresses issues, often resolving them in record time. Josefina also excels at taking responsibility when decisions need to be made at a higher level and making sure that every detail is taken care of. It’s been a pleasure working with her, and I’m always confident that everything is well-managed when she’s involved. Her dedication and responsiveness have made a huge difference in the success of our project, and I’m very happy to continue working with her.',
    givenAt: new Date('2024-10-03'),
  },
  {
    author: {
      firstName: 'Marius',
      lastName: 'Oppedal',
      role: 'Manager',
      company: 'TIDAL',
    },
    feedback:
      'Josefina is a highly efficient and driven developer that has a talent for absorbing information and learning new things. Furthermore her communication and collaborations skills are excellent, which has been noted by several stakeholders, when she took on parts of my job during my summer vacation.',
    givenAt: new Date('2024-08-09'),
  },
  {
    author: {
      firstName: 'Marcel',
      lastName: 'Azeroth',
      role: 'Partnerships',
      company: 'TIDAL',
    },
    feedback:
      'Josefina has been a great help today in an urgent trouble shooting request. As usual, she offers swift replies and a strong understanding of the campaign web flows, either helping immediately or pointing me in the right direction. This strongly improves our turnaround times and helps us to move projects efficiently.',
    givenAt: new Date('2024-08-08'),
  },
  {
    author: {
      firstName: 'Euan',
      lastName: 'Crowe',
      role: 'Project Manager',
      company: 'TIDAL',
    },
    feedback:
      'Josefina has taken charge of the work around signup events updates and requirements, formalised a process for the stakeholders and provided them with perfectly communicated, clear & concise instructions. This makes me confident that the project is well under control on our end.',
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
]
useHead({
  title: 'Web Developer Portfolio | Feedback',
  meta: [
    {
      property: 'og:title',
      content: 'Web Developer Portfolio | Feedback',
    },
    {
      property: 'og:site_name',
      content: 'Web Developer Portfolio | Feedback',
    },
    {
      property: 'og:site',
      content: 'https://www.josefinaestevez.com/feedback',
    },
  ],
})
</script>
<template>
  <NuxtLayout name="default">
    <div class="feedback-section">
      <!-- Testimonials Section -->
      <section class="py-16">
        <h2>Feedback & Reviews</h2>
        <p class="text-center mt-4 px-2">
          Read what colleagues, clients, and partners have to say about working
          together.
        </p>
        <div class="container mt-8 px-6 mr-auto ml-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardsFeedback
              v-for="feedbackEntry in feedback"
              :feedback="feedbackEntry"
            />
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
