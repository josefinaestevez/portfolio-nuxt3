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
    jobTitle: 'Senior Software Engineer → Level 6 Engineer',
    location: 'Barcelona, Spain (Remote)',
    duration: 'May 2022 - December 2024',
    jobScope: [
      'TIDAL is a global music streaming platform owned by Block (formerly Square), a tech company founded by Twitter co-founder Jack Dorsey. TIDAL is known for its high-quality audio and artist-first philosophy.',
      'As part of the Web Growth team, I worked on user acquisition and activation initiatives, with a focus on improving signup flows, running experiments, and managing technical debt across our core frontend applications. The frontend was built using a microservices architecture, allowing for cross-team ownership and independent deployment of features. I collaborated closely with product, design, backend, QA, and data, and was promoted to Level 6 in recognition of my leadership and cross-functional impact.',
      'Promoted from Level 5 to Level 6 at Block within 2 years, through a rigorous company-wide promotion process requiring executive-level technical review. Recognized for driving complex initiatives, shaping engineering practices across teams, and consistently delivering high-quality results with organizational impact.',
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
            I'm a frontend/fullstack developer who loves making things work and
            making them make sense. I’ve spent the last few years building web
            applications, microservices, and internal libraries — but also
            helping teams stay aligned, scoping features, and keeping projects
            moving.I’ve spent the last few years building web applications,
            microservices, and internal libraries — but also helping teams stay
            aligned, scoping features, and keeping projects moving.
          </p>
          <p class="mt-2">
            I enjoy roles where I can code, lead, support product decisions, and
            collaborate closely with design, data, and other teams. Whether it’s
            building clean UIs or untangling tricky project requirements, I’m
            all in. Some tools and frameworks I’ve worked with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Vue.js</li>
              <li>Nuxt</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>Jest</li>
              <li>Vitest</li>
              <li>Python</li>
              <li>Django</li>
              <li>
                And a healthy dose of debugging, testing, and documentation :)
              </li>
            </ul>
          </div>

          <p class="mt-2">
            Currently looking for opportunities where I can keep combining
            technical work with cross-functional collaboration — ideally within
            the music industry, which I’d love to stay connected to.
          </p>
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
