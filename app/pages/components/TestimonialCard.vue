<template>
  <div class="card relative">
    <div class="flex items-center gap-1 mb-4">
      <Icon name="i-lucide-star" class="h-5 w-5 fill-current text-warm-500" v-for="i in 5" :key="i" />
    </div>
    <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">"{{ quote }}"</p>
    <div class="flex items-center gap-4">
      <img :src="image" :alt="author" class="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-slate-900" loading="lazy" />
      <div>
        <p class="font-semibold text-slate-900 dark:text-white">{{ author }}</p>
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ role }}</p>
        <p class="text-xs text-medical-600 dark:text-medical-400">{{ department }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  quote: string
  author: string
  role: string
  image: string
  rating: number
  department: string
}>()
</script>
