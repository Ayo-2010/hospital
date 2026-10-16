<template>
  <div class="card-interactive group relative overflow-hidden">
    <div class="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="glowClass" />
    <div class="p-5">
      <div class="flex items-start gap-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110" :class="iconBgClass">
          <Icon :name="icon" class="h-5 w-5" :class="iconColorClass" />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-slate-900 dark:text-white group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">{{ name }}</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
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

const glowClass = computed(() => ({
  medical: 'bg-gradient-to-tr from-medical-500/10 to-transparent',
  healing: 'bg-gradient-to-tr from-healing-500/10 to-transparent',
  emergency: 'bg-gradient-to-tr from-emergency-500/10 to-transparent',
  warm: 'bg-gradient-to-tr from-warm-500/10 to-transparent',
}[props.color]))
</script>
