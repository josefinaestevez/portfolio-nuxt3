export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    {
      id: 3,
      name: "Contact",
      href: "/contact",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    // {
    //   imgUrl: "/logos/react-original.svg",
    //   name: "React",
    //   alt: "React logo",
    //   width: 150,
    //   height: 150,
    // },
    // {
    //   imgUrl: "/logos/nextjs-original.svg",
    //   name: "NextJS",
    //   alt: "NextJs logo",
    //   width: 150,
    //   height: 150,
    // },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "NuxtJS",
      alt: "NuxtJS logo",
      width: 150,
      height: 150,
    },
    // {
    //   imgUrl: "/logos/materialui-original.svg",
    //   name: "Material UI",
    //   alt: "Material UI logo",
    //   width: 150,
    //   height: 150,
    // },
    // {
    //   imgUrl: "/logos/redux-original.svg",
    //   name: "Redux",
    //   alt: "Redux logo",
    //   width: 150,
    //   height: 150,
    // },
    {
      imgUrl: "/logos/jest-plain.svg",
      name: "Jest",
      alt: "Jest logo",
      width: 150,
      height: 150,
    },
    // {
    //   imgUrl: "/logos/tailwindcss-plain.svg",
    //   name: "TailwindCSS",
    //   alt: "TailwindCSS logo",
    //   width: 150,
    //   height: 150,
    // },
    // {
    //   imgUrl: "/logos/firebase-plain.svg",
    //   name: "Firebase",
    //   alt: "Firebase logo",
    //   width: 150,
    //   height: 150,
    // },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    // {
    //   imgUrl: "/logos/shopify-liquid-logo.webp",
    //   name: "Liquid",
    //   alt: "Liquid logo",
    //   width: 321,
    //   height: 315,
    // },
    {
      imgUrl: "/logos/shopify-b_w.webp",
      name: "Shopify",
      alt: "Shopify logo",
      width: 512,
      height: 512,
    },
    {
      imgUrl: "/logos/jquery-original.svg",
      name: "jQuery",
      alt: "jQuery logo",
      width: 150,
      height: 150,
    },
    // TODO: Add skills
  ];

  const hobbies = [
    {
      title: "Drink Black tea",
      text: "Best way to start the morning",
      classBg: "bg-tea",
    },
    {
      title: "Journaling",
      text: "To pen down my thoughts, memories and interesting things that occur in life",
      classBg: "bg-journaling",
    },
    {
      title: "Learning new technologies/framework",
      text: "To explore and expand my skillsets. \n Recently exploring Kotlin and ThreeJs",
      classBg: "bg-programming",
    },
    {
      title: "Listening to music",
      text: "Recent favourites: MWAM, HONNE, Forester, Milet and Yoasobi",
      classBg: "bg-music",
    },
  ];

  const timeline = [
    {
      logo: "/work/block-white.gif",
      companyName: "TIDAL (Block)",
      location: "Barcelona, Spain (Remote)",
      duration: "May 2022 - December 2024",
      jobScope: [
        "L6* engineer leading the development of microservices, shared libraries, and critical projects like login/signup flows, payment integrations, and artist engagement tools.",
        "Collaborate with cross-functional teams across countries to deliver seamless integrations.",
        "L6 engineers at Block serve as team leaders, driving medium-to-large features and multi-person efforts that span engineering team boundaries. They provide technical leadership, resolve complex challenges, ensure successful project delivery, and foster collaboration across teams."
      ],
      techStack: [
        "NuxtJS",
        "VueJS",
        "Express",
        "Microservices",
        "MongoDB"
      ]
    },
    {
      logo: "/work/bmat.jpeg",
      location: "Barcelona, Spain",
      companyName: "BMAT Music Innovators",
      duration: "May 2019 - May 2022",
      jobScope: [
        "Partnered with the VP to define project priorities and steer the team toward successful execution.",
        "Led the technical design and development of real-time data applications for the music industry, serving clients like record labels and music publishers.",
        "Optimized system performance to process millions of daily music usage events efficiently.",
      ],
      techStack: [
        "Python",
        "Django",
        "VueJS",
        "ClickHouse",
        "Apache Airflow",
        "AWS"
      ]
    },
    {
      logo: "/work/devsar.jpeg",
      location: "La Plata, Argentina",
      logoBorderColor: "#7303C0",
      companyName: "DevsAr (Acquired after by Ripio)",
      duration: "May 2016 - July 2019",
      jobScope: [
        "Delivered diverse projects, including Torchweb (a platform for molecular design) and Find Your Trainer (a fitness marketplace).",
        "Worked directly with clients to define requirements and provide tailored solutions.",
      ],
      techStack: [
        "Python",
        "Django",
        "VueJS",
        "PostgreSQL",
        "GraphQL",
        "Stripe",
        "Ionic"
      ]
    },
    {
      companyName: "Idees",
      location: "La Plata, Argentina",
      duration: "2015 - 2016",
      jobScope: [
        "Developed multiple projects using the MEAN stack in a small team environment.",
        "Worked closely with designers and clients to deliver custom web solutions, handling both front-end and back-end development.",
      ],
      techStack: [
        "Node.js",
        "MongoDB",
        "AngularJS",
        "Express"
      ]
    },
    {
      companyName: "Kiuno",
      location: "La Plata, Argentina",
      duration: "2015 - 2016",
      jobScope: [
        "Developed an online system for managing office bookings and delays, with a notification system (SMS, email, and mobile app).",
      ],
      techStack: [
        "Smalltalk",
        "Pharo",
        "PostgreSQL",
        "Twilio",
        "Bootstrap",
        "JQuery"
      ]
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    timeline,
  };
}
