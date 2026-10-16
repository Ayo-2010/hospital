<template>
  <div class="card-interactive relative overflow-hidden group" :class="colorClasses">
    <div class="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-xl transition-transform duration-500 group-hover:scale-150" :class="glowClass" />
    <div class="relative p-6">
      <div class="flex h-14 w-14 items-center justify-center rounded-xl mb-4" :class="iconBgClass">
        <Icon :name="icon" class="h-7 w-7 text-white" />
      </div>
      <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-3">{{ title }}</h3>
      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'warm'
  delay: number
}>()

const colorClasses = computed(() => ({
  medical: 'border-medical-200 dark:border-medical-800 hover:shadow-medical-500/10',
  healing: 'border-healing-200 dark:border-healing-800 hover:shadow-healing-500/10',
  warm: 'border-warm-200 dark:border-warm-800 hover:shadow-warm-500/10',
}[props.color]))

const iconBgClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  warm: 'bg-warm-500',
}[props.color]))

const glowClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  warm: 'bg-warm-500',
}[props.color]))
</script>
