<script setup>
const hobbies = [
  {
    title: 'Music',
    text: 'Producing electronic music and DJing are my creative outlets, where I experiment with beats and sounds.',
    classBg: 'bg-music',
  },
  {
    title: 'Veggie Food',
    text: 'Cooking and discovering delicious vegetarian dishes that are both healthy and satisfying.',
    classBg: 'bg-veggie',
  },
  {
    title: 'Family and Friends',
    text: 'Spending quality time with loved ones, sharing laughs, and creating unforgettable memories.',
    classBg: 'bg-family',
  },
  {
    title: 'Travel',
    text: 'Exploring new places, cultures, and cuisines is my favorite way to recharge and gain new perspectives.',
    classBg: 'bg-travel',
  },
]

const timeline = [
  {
    logo: '/work/block-white.gif',
    companyName:
      "<a class='underline-offset-2' href='https://tidal.com/' target='_blank'>TIDAL</a> (<a href='https://block.xyz/' target='_blank'>Block</a>)",
    location: 'Barcelona, Spain (Remote)',
    duration: 'May 2022 - December 2024',
    jobScope: [
      'L6* engineer leading the development of microservices, shared libraries, and critical projects like login/signup flows, payment integrations, and artist engagement tools.',
      'Collaborate with cross-functional teams across countries to deliver seamless integrations.',
      'L6 engineers at Block serve as team leaders, driving medium-to-large features and multi-person efforts that span engineering team boundaries. They provide technical leadership, resolve complex challenges, ensure successful project delivery, and foster collaboration across teams.',
    ],
    techStack: ['NuxtJS', 'VueJS', 'Express', 'Microservices', 'MongoDB'],
  },
  {
    logo: '/work/bmat.jpeg',
    location: 'Barcelona, Spain',
    companyName:
      "<a href='https://www.bmat.com/' target='_blank'>BMAT Music Innovators</a>",
    duration: 'May 2019 - May 2022',
    jobScope: [
      'Partnered with the VP to define project priorities and steer the team toward successful execution.',
      'Led the technical design and development of real-time data applications for the music industry, serving clients like record labels and music publishers.',
      'Optimized system performance to process millions of daily music usage events efficiently.',
    ],
    techStack: [
      'Python',
      'Django',
      'VueJS',
      'ClickHouse',
      'Apache Airflow',
      'AWS',
    ],
  },
  {
    logo: '/work/devsar.jpeg',
    location: 'La Plata, Argentina',
    logoBorderColor: '#7303C0',
    companyName:
      "DevsAr (Acquired after by <a href='https://www.ripio.com/' target='_blank'>Ripio</a>)",
    duration: 'May 2016 - July 2019',
    jobScope: [
      'Delivered diverse projects, including Torchweb (a platform for molecular design) and Find Your Trainer (a fitness marketplace).',
      'Worked directly with clients to define requirements and provide tailored solutions.',
    ],
    techStack: [
      'Python',
      'Django',
      'VueJS',
      'PostgreSQL',
      'GraphQL',
      'Stripe',
      'Ionic',
    ],
  },
  {
    companyName: 'Idees',
    location: 'La Plata, Argentina',
    duration: '2015 - 2016',
    jobScope: [
      'Developed multiple projects using the MEAN stack in a small team environment.',
      'Worked closely with designers and clients to deliver custom web solutions, handling both front-end and back-end development.',
    ],
    techStack: ['Node.js', 'MongoDB', 'AngularJS', 'Express'],
  },
  {
    companyName: 'Kiuno',
    location: 'La Plata, Argentina',
    duration: '2015 - 2016',
    jobScope: [
      'Developed an online system for managing office bookings and delays, with a notification system (SMS, email, and mobile app).',
    ],
    techStack: [
      'Smalltalk',
      'Pharo',
      'PostgreSQL',
      'Twilio',
      'Bootstrap',
      'JQuery',
    ],
  },
]
useHead({
  meta: [
    {
      property: 'og:site',
      content: 'https://www.josefinaestevez.com/about',
    },
  ],
})
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
            Passionate developer with extensive experience building web
            applications, microservices, and shared libraries. Adept at leading
            projects, collaborating across departments, and engaging with
            diverse stakeholders. Skilled in prioritizing, organizing, and
            scoping tasks to drive efficient project delivery.
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

        <Hobbies :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
