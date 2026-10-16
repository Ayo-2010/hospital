<template>
  <div class="card-interactive group relative overflow-hidden" :class="colorClasses">
    <div class="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="glowClass" />
    <div class="p-6">
      <div class="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110" :class="iconBgClass">
        <Icon :name="icon" class="h-6 w-6 text-white" />
      </div>
      <h3 class="font-semibold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">{{ description }}</p>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="feature in features" :key="feature" class="text-xs px-2 py-1 rounded-full" :class="featureBadgeClass">{{ feature }}</span>
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
  features: string[]
  color: 'medical' | 'healing' | 'emergency' | 'warm'
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

const featureBadgeClass = computed(() => ({
  medical: 'bg-medical-100 text-medical-700 dark:bg-medical-900/40 dark:text-medical-300',
  healing: 'bg-healing-100 text-healing-700 dark:bg-healing-900/40 dark:text-healing-300',
  emergency: 'bg-emergency-100 text-emergency-700 dark:bg-emergency-900/40 dark:text-emergency-300',
  warm: 'bg-warm-100 text-warm-700 dark:bg-warm-900/40 dark:text-warm-300',
}[props.color]))

const glowClass = computed(() => ({
  medical: 'bg-gradient-to-tr from-medical-500/10 to-transparent',
  healing: 'bg-gradient-to-tr from-healing-500/10 to-transparent',
  emergency: 'bg-gradient-to-tr from-emergency-500/10 to-transparent',
  warm: 'bg-gradient-to-tr from-warm-500/10 to-transparent',
}[props.color]))
</script>
