<template>
  <div class="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
    <div class="flex h-10 w-10 items-center justify-center rounded-lg" :class="iconBgClass">
      <Icon :name="icon" class="h-5 w-5" :class="iconColorClass" />
    </div>
    <div class="flex-1">
      <p class="text-sm text-slate-600 dark:text-slate-400">{{ label }}</p>
      <div class="flex items-center gap-2">
        <p class="font-semibold text-slate-900 dark:text-white">{{ value }}</p>
        <span v-if="trend" :class="trendClass">
          <Icon :name="trend === 'up' ? 'i-lucide-trending-up' : 'i-lucide-trending-down'" class="h-3 w-3" />
          {{ trendValue }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  value: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
  trend?: 'up' | 'down'
  trendValue?: string
}>()

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

const trendClass = computed(() => ({
  up: 'text-emergency-600 dark:text-emergency-400',
  down: 'text-healing-600 dark:text-healing-400',
}[props.trend || 'down']))
</script>
