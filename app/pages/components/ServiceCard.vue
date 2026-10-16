<template>
  <NuxtLink :to="to" class="card-interactive group overflow-hidden relative">
    <div class="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="glowClass" />
    <div class="aspect-video relative overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      <div class="absolute top-4 left-4">
        <span class="badge" :class="badgeClass">
          <Icon :name="icon" class="h-3 w-3 mr-1" />
          {{ title }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">{{ title }}</h3>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{{ description }}</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <span v-for="feature in features" :key="feature" class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ feature }}</span>
      </div>
      <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <span class="text-sm font-medium text-medical-600 dark:text-medical-400 flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More
          <Icon name="i-lucide-chevron-right" class="h-4 w-4" />
        </span>
        <Icon name="i-lucide-arrow-up-right" class="h-5 w-5 text-slate-400 group-hover:text-medical-500 transition-all" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  image: string
  features: string[]
  to: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
}>()

const badgeClass = computed(() => ({
  medical: 'badge-medical',
  healing: 'badge-healing',
  emergency: 'badge-emergency',
  warm: 'badge-warm',
}[props.color]))

const glowClass = computed(() => ({
  medical: 'bg-gradient-to-tr from-medical-500/20 to-transparent',
  healing: 'bg-gradient-to-tr from-healing-500/20 to-transparent',
  emergency: 'bg-gradient-to-tr from-emergency-500/20 to-transparent',
  warm: 'bg-gradient-to-tr from-warm-500/20 to-transparent',
}[props.color]))
</script>
