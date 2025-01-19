<template>
  <header class="headerHeight">
    <TransitionGroup name="list" tag="div" class="header-bg">
      <div
        v-for="(rectang, index) in columns"
        :key="`rectang-${index}`"
        :style="rectang"
      ></div>
      <img
        :class="showBgImg ? 'opacity-100' : 'opacity-0'"
        key="home-background-image"
        src="/smokey-background.jpg"
        width="1920"
        height="1280"
        alt="blue red fusion"
      />
    </TransitionGroup>
    <div class="content" :class="showContent ? 'opacity-100' : 'opacity-0'">
      <h1 class="leading-3">
        <span class="text-4xl md:text-5xl font-semibold">{{
          introObj.lineOne
        }}</span>
        <br />
        <span class="text-2xl md:text-3xl font-medium">{{
          introObj.lineTwo
        }}</span>
        <br />
        <span class="text-xl md:text-xl">{{ introObj.lineThree }}</span>
      </h1>
    </div>
  </header>
</template>
<script setup>
import { ref, watchEffect, onMounted } from 'vue';
import { useTransitionTracking } from '@/composables/useTransitionTracking';

const columns = ref([]);
const counter = ref(0);
const numOfColumns = ref(4);
const currentLeftPosition = ref(20);
const width = 2;
const typeSpeed = 50;
const columnSpeed = 100;
const rectangDelay = ref(1300);
const typeWriterDelay = ref(2800);
const contentContainerDelay = ref(2500);
const showBgImg = ref(false);
const showContent = ref(false);
const isMobile = ref(false);

const { transitionCompletedOnce } = useTransitionTracking();

const i = ref(0);
const j = ref(0);
const introObj = ref({
  lineOne: '',
  lineTwo: '',
  lineThree: '',
});
const intro = [
  'Josefina Estevez',
  'Software Engineer',
  'Passionate developer with extensive experience building web applications, microservices, and shared libraries.',
];

const addColumns = () => {
  if (counter.value < numOfColumns.value) {
    const positionY = 0;
    const styling = `height: 100%; width: ${width}%; top: ${positionY}; left: ${currentLeftPosition.value}%`;
    columns.value.push(styling);
    currentLeftPosition.value += 20;
    counter.value++;
    setTimeout(addColumns, columnSpeed);
  }
};

const typeWriter = () => {
  const currentLine =
    j.value === 0 ? 'lineOne' : j.value === 1 ? 'lineTwo' : 'lineThree';
  if (j.value < 3) {
    if (i.value < intro[j.value].length) {
      introObj.value[currentLine] += intro[j.value][i.value];
      i.value++;
      setTimeout(typeWriter, typeSpeed);
    } else {
      if (j.value < 2) i.value = 0;
      j.value++;
      if (j.value < 3) setTimeout(typeWriter, typeSpeed);
    }
  }
};

const assignDelayAmount = () => {
  if (window.innerWidth < 500) {
    isMobile.value = true;
    rectangDelay.value = 0;
    contentContainerDelay.value = 1200;
    typeWriterDelay.value = 1500;
  } else {
    rectangDelay.value = transitionCompletedOnce.value ? 0 : 1300;
    contentContainerDelay.value = transitionCompletedOnce.value ? 1200 : 2500;
    typeWriterDelay.value = transitionCompletedOnce.value ? 1500 : 2800;
  }
};

const triggerRevealBackground = () => {
  if (counter.value === 4) {
    setTimeout(() => {
      showBgImg.value = true;
    }, 200);
  }
};

watchEffect(() => {
  triggerRevealBackground();
});

onMounted(() => {
  assignDelayAmount();
  setTimeout(() => {
    addColumns();
  }, rectangDelay.value);
  triggerRevealBackground();
  setTimeout(() => {
    showContent.value = true;
  }, contentContainerDelay.value);
  setTimeout(() => {
    typeWriter();
  }, typeWriterDelay.value);
});
</script>
<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 70px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
