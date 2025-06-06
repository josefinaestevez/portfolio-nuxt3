<template>
  <nav
    id="nav-bar"
    class="navPadding"
    :class="navBgTextColor"
    style="height: 70px"
  >
    <div v-if="!loading" class="nav-links">
      <TransitionGroup appear @before-enter="before" @enter="entering">
        <NuxtLink
          v-for="(item, index) in navigation"
          :key="item.id"
          :data-index="index"
          :href="item.href"
          class="underAnimation"
          >{{ item.name }}</NuxtLink
        >
      </TransitionGroup>
    </div>
    <div class="lg:w-1/12 flex items-center justify-end gap-4">
      <Menu as="div" class="mobile-hamburger">
        <div class="menu-button">
          <MenuButton aria-label="Menu">
            <Bars3Icon />
          </MenuButton>
        </div>
        <Transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems class="menu-items">
            <div class="menu-item-padding">
              <MenuItem
                v-for="item in navigation"
                :key="item"
                v-slot="{ active }"
              >
                <NuxtLink
                  :href="item.href"
                  :class="[
                    active ? 'bg-gray-500 text-white' : 'text-gray-900',
                    'group',
                  ]"
                >
                  {{ item.name }}
                </NuxtLink>
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  </nav>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { gsap } from 'gsap'
import blackWhiteFavicon from '/favicon-bw.png'
import whiteBlackFavicon from '/favicon-wb.png'

useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`,
    },
  ],
})

const { trackTransitionCompleted, transitionCompletedOnce } =
  useTransitionTracking()

const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Feedback',
    href: '/feedback',
  },
  {
    name: 'Skills',
    href: '/skills',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

let loading = ref(transitionCompletedOnce.value ? false : true)

const navBgTextColor = ref('bg-black text-white')
const logo = ref(whiteBlackFavicon)

// animation
const before = (el) => {
  gsap.set(el, {
    opacity: 0,
  })
}

const entering = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    // duration: 1.0,
    duration: 0.8,
    delay: el.dataset.index * 0.2,
    onComplete: done,
  })
}

watchEffect(() => {
  navBgTextColor.value = 'bg-white text-black dark:bg-[#121212]'
  logo.value = blackWhiteFavicon
})

onMounted(() => {
  loading.value = false
  setTimeout(() => {
    trackTransitionCompleted()
  }, 3000)
})
</script>
<style lang="scss" scoped>
.underAnimation {
  position: relative;
}

.underAnimation::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #b45380;
  /* #3cefff */
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.underAnimation:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.fadeIn-enter-active {
  animation: fadeIn 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-leave-active {
  transition: all 0.5s ease;
  width: 100%;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
