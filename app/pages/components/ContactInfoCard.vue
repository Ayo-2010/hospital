<template>
  <div class="card relative overflow-hidden group" :class="colorClasses">
    <div class="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-xl transition-transform duration-500 group-hover:scale-150" :class="glowClass" />
    <div class="relative p-6">
      <div class="flex h-12 w-12 items-center justify-center rounded-xl mb-4" :class="iconBgClass">
        <Icon :name="icon" class="h-6 w-6 text-white" />
      </div>
      <h3 class="font-semibold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">{{ description }}</p>
      <div class="space-y-2">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : link.href"
          :href="link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? link.href : undefined"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm font-medium text-medical-600 dark:text-medical-400 hover:underline transition-colors"
        >
          {{ link.label }}
          <Icon v-if="link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')" name="i-lucide-external-link" class="h-3 w-3" />
          <Icon v-else name="i-lucide-chevron-right" class="h-3 w-3" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
  links: { label: string; href: string }[]
}>()

const colorClasses = computed(() => ({
  medical: 'border-medical-200 dark:border-medical-800 hover:shadow-medical-500/10',
  healing: 'border-healing-200 dark:border-healing-800 hover:shadow-healing-500/10',
  emergency: 'border-emergency-200 dark:border-emergency-800 hover:shadow-emergency-500/10',
  warm: 'border-warm-200 dark:border-warm-800 hover:shadow-warm-500/10',
}[props.color]))

const iconBgClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  emergency: 'bg-emergency-500',
  warm: 'bg-warm-500',
}[props.color]))

const glowClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  emergency: 'bg-emergency-500',
  warm: 'bg-warm-500',
}[props.color]))
</script>
