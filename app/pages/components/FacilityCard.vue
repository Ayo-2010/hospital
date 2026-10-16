<template>
  <div class="card-interactive group overflow-hidden flex flex-col">
    <div class="aspect-video relative overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div class="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
        <span class="badge badge-medical">Explore Facility</span>
      </div>
    </div>
    <div class="p-6 flex-1 flex flex-col">
      <h3 class="font-semibold text-slate-900 dark:text-white mb-3">{{ title }}</h3>
      <p class="text-slate-600 dark:text-slate-400 mb-4 flex-1">{{ description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="feature in features" :key="feature" class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ feature }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  image: string
  features: string[]
}>()
</script>
