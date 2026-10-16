<template>
  <NuxtLink :to="`/surgery/${title.toLowerCase().replace(/\s+/g, '-')}`" class="card-interactive group overflow-hidden flex flex-col">
    <div class="relative aspect-[4/3] overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      <div class="absolute top-4 left-4">
        <span class="badge text-white" :class="badgeClass">{{ surgeons }} Surgeons</span>
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <h3 class="font-semibold text-slate-900 dark:text-white group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">{{ title }}</h3>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-1">{{ description }}</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <span v-for="proc in procedures.slice(0, 4)" :key="proc" class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ proc }}</span>
        <span v-if="procedures.length > 4" class="text-xs px-2 py-1 rounded-full bg-medical-100 text-medical-700 dark:bg-medical-900/40 dark:text-medical-300">+{{ procedures.length - 4 }} more</span>
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
  image: string
  procedures: string[]
  surgeons: number
  color: 'medical' | 'healing' | 'emergency' | 'warm'
}>()

const badgeClass = computed(() => ({
  medical: 'bg-medical-500/90',
  healing: 'bg-healing-500/90',
  emergency: 'bg-emergency-500/90',
  warm: 'bg-warm-500/90',
}[props.color]))
</script>
