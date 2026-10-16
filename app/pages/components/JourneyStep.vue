<template>
  <div class="relative flex gap-8" :class="side === 'left' ? '' : 'flex-row-reverse'">
    <div class="relative flex-1 max-w-md">
      <div class="card relative p-6" :class="colorClasses">
        <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center text-sm font-bold" :class="numberBgClass">
          {{ number }}
        </div>
        <div class="flex h-12 w-12 items-center justify-center rounded-xl mb-4" :class="iconBgClass">
          <Icon :name="icon" class="h-6 w-6 text-white" />
        </div>
        <h3 class="font-semibold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">{{ description }}</p>
        <ul class="space-y-1">
          <li v-for="detail in details" :key="detail" class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Icon name="i-lucide-check" class="h-3.5 w-3.5" :class="checkColorClass" />
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1 max-w-md" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  number: number
  title: string
  description: string
  icon: string
  details: string[]
  side: 'left' | 'right'
  color: 'medical' | 'healing' | 'emergency' | 'warm'
}>()

const colorClasses = computed(() => ({
  medical: 'border-medical-200 dark:border-medical-800 shadow-medical-500/5',
  healing: 'border-healing-200 dark:border-healing-800 shadow-healing-500/5',
  emergency: 'border-emergency-200 dark:border-emergency-800 shadow-emergency-500/5',
  warm: 'border-warm-200 dark:border-warm-800 shadow-warm-500/5',
}[props.color]))

const iconBgClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  emergency: 'bg-emergency-500',
  warm: 'bg-warm-500',
}[props.color]))

const numberBgClass = computed(() => ({
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
</script>
