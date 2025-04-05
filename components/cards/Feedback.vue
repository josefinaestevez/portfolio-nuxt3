<script setup lang="ts">
import { defineProps } from 'vue'
import type { FeedbackEntry, Author } from '~/types'

defineProps({
  feedback: {
    type: Object as () => FeedbackEntry,
    required: true,
  },
})

function formatDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  return formatter.format(date)
}

function formatInitials(author: Author): string {
  return `${author.firstName[0]}${author.lastName[0]}`
}

function formatName(author: Author): string {
  return `${author.firstName} ${author.lastName}`
}
</script>
<template>
  <div
    class="p-8 hover:shadow-2xl relative bg-white dark:bg-[#1c1c1c] border border-white hover:border-gray-600 dark:border-[#1c1c1c] dark:hover:border-white rounded shadow-lg mt-14 transition ease-out duration-300"
  >
    <div class="flex items-center mb-6">
      <div
        class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl"
      >
        {{ formatInitials(feedback.author) }}
      </div>
      <div class="ml-4">
        <h3 class="font-semibold text-xl text-gray-500">
          {{ formatName(feedback.author) }}
        </h3>
        <p class="text-sm text-gray-500">
          {{ feedback.author.role }} - {{ feedback.author.company }}
        </p>
        <p class="text-xs text-gray-700 mt-1">
          {{ formatDate(feedback.givenAt) }}
        </p>
      </div>
    </div>
    <p class="text-gray-700 italic mb-4">"{{ feedback.feedback }}"</p>
  </div>
</template>
