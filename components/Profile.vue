<template>
  <section class="profile">
    <div class="w-48 mx-auto lg:ml-0">
      <img
        src="/profile-pics/profile.jpg"
        width="350"
        height="350"
        alt="profile image"
        loading="lazy"
        class="rounded-lg"
      />
    </div>
    <article class="mt-3">
      <h1>Josefina Estevez</h1>
      <p class="text-center lg:text-left">Software Engineer</p>

      <div class="profile-social-icons">
        <a
          href="https://www.linkedin.com/in/josefinaestevez/"
          aria-label="Linkden"
          target="blank"
        >
          <IconsLinkedInIcon />
        </a>

        <a
          href="https://github.com/josefinaestevez"
          aria-label="Github"
          target="blank"
        >
          <IconsGithubIcon />
        </a>

        <a
          href="https://www.instagram.com/jochi.estevez/"
          aria-label="Instagram"
          target="blank"
        >
          <IconsInstaIcon />
        </a>
      </div>
    </article>
  </section>
</template>
