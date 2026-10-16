<template>
  <div class="card-interactive group relative overflow-hidden" :class="colorClasses">
    <div class="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="glowClass" />
    <div class="p-6">
      <div class="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110" :class="iconBgClass">
        <Icon :name="icon" class="h-6 w-6 text-white" />
      </div>
      <h3 class="font-semibold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">{{ description }}</p>
      <div class="space-y-2">
        <div v-for="benefit in benefits" :key="benefit" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Icon name="i-lucide-check" class="h-4 w-4" :class="checkColorClass" />
          {{ benefit }}
        </div>
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
  benefits: string[]
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

const checkColorClass = computed(() => ({
  medical: 'text-medical-600 dark:text-medical-400',
  healing: 'text-healing-600 dark:text-healing-400',
  emergency: 'text-emergency-600 dark:text-emergency-400',
  warm: 'text-warm-600 dark:text-warm-400',
}[props.color]))

const glowClass = computed(() => ({
  medical: 'bg-gradient-to-tr from-medical-500/10 to-transparent',
  healing: 'bg-gradient-to-tr from-healing-500/10 to-transparent',
  emergency: 'bg-gradient-to-tr from-emergency-500/10 to-transparent',
  warm: 'bg-gradient-to-tr from-warm-500/10 to-transparent',
}[props.color]))
</script>
