<template>
  <NuxtLink :to="`/health-information/${slug}`" class="card-interactive group overflow-hidden flex flex-col">
    <div class="aspect-video relative overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div class="absolute top-3 left-3">
        <span class="badge badge-medical">{{ category }}</span>
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
        <time :dateTime="date">{{ formatDate(date) }}</time>
        <span>•</span>
        <span>{{ readTime }}</span>
      </div>
      <h3 class="font-semibold text-slate-900 dark:text-white group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors mb-2">{{ title }}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 flex-1">{{ excerpt }}</p>
      <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div class="flex items-center gap-2 text-sm">
          <div class="flex h-7 w-7 items-center justify-center rounded-full bg-medical-100 dark:bg-medical-900/40">
            <Icon name="i-lucide-user" class="h-4 w-4 text-medical-600 dark:text-medical-400" />
          </div>
          <span class="font-medium text-slate-700 dark:text-slate-300">{{ author }}</span>
        </div>
        <Icon name="i-lucide-chevron-right" class="h-5 w-5 text-slate-400 group-hover:text-medical-500 transition-all" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
}>()

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
</script>
