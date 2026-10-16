<template>
  <a
    :href="href"
    class="card-interactive relative overflow-hidden group flex flex-col items-center text-center p-6"
    :class="colorClasses"
  >
    <div class="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="glowClass" />
    <div
      class="flex h-14 w-14 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
      :class="iconBgClass"
    >
      <Icon :name="icon" class="h-7 w-7" :class="iconColorClass" />
    </div>
    <h3 class="font-semibold text-slate-900 dark:text-white mb-1">{{ label }}</h3>
    <p class="text-sm text-slate-600 dark:text-slate-400">{{ description }}</p>
    <span v-if="primary" class="mt-3 badge badge-emergency animate-pulse-subtle">PRIMARY</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  description: string
  icon: string
  href: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
  primary: boolean
}>()

const colorClasses = computed(() => ({
  medical: 'hover:shadow-medical-500/10 border-medical-200 dark:border-medical-800',
  healing: 'hover:shadow-healing-500/10 border-healing-200 dark:border-healing-800',
  emergency: 'hover:shadow-emergency-500/10 border-emergency-200 dark:border-emergency-800',
  warm: 'hover:shadow-warm-500/10 border-warm-200 dark:border-warm-800',
}[props.color]))

const iconBgClass = computed(() => ({
  medical: 'bg-medical-100 dark:bg-medical-900/40',
  healing: 'bg-healing-100 dark:bg-healing-900/40',
  emergency: 'bg-emergency-100 dark:bg-emergency-900/40',
  warm: 'bg-warm-100 dark:bg-warm-900/40',
}[props.color]))

const iconColorClass = computed(() => ({
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
