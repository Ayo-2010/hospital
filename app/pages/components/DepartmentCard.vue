<template>
  <NuxtLink :to="`/departments/${slug}`" class="card-interactive group overflow-hidden relative flex flex-col">
    <div class="relative aspect-[4/3] overflow-hidden">
      <img :src="image" :alt="name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      <div class="absolute top-4 left-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl" :class="iconBgClass">
          <Icon :name="icon" class="h-5 w-5 text-white" />
        </div>
      </div>
      <div class="absolute bottom-4 left-4 right-4">
        <span class="badge text-white" :class="badgeClass">{{ doctorCount }} Specialists</span>
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <h3 class="font-semibold text-slate-900 dark:text-white group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">{{ name }}</h3>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-1">{{ description }}</p>
      <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <span class="text-sm font-medium text-medical-600 dark:text-medical-400 flex items-center gap-1 group-hover:gap-2 transition-all">
          Explore Department
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
  name: string
  description: string
  icon: string
  image: string
  doctorCount: number
  slug: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
}>()

const iconBgClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  emergency: 'bg-emergency-500',
  warm: 'bg-warm-500',
}[props.color]))

const badgeClass = computed(() => ({
  medical: 'bg-medical-500/90',
  healing: 'bg-healing-500/90',
  emergency: 'bg-emergency-500/90',
  warm: 'bg-warm-500/90',
}[props.color]))
</script>
