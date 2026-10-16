<template>
  <div class="card relative overflow-hidden group" :class="colorClasses">
    <div class="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-xl transition-transform duration-500 group-hover:scale-150" :class="glowClass" />
    <div class="relative flex flex-col items-center text-center p-6">
      <div class="flex h-14 w-14 items-center justify-center rounded-xl mb-4" :class="iconBgClass">
        <Icon :name="icon" class="h-7 w-7" :class="iconColorClass" />
      </div>
      <div class="stats-counter text-4xl sm:text-5xl font-bold text-white mb-2">{{ value }}</div>
      <p class="text-slate-400 font-medium">{{ label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: string
  label: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
}>()

const colorClasses = computed(() => ({
  medical: 'border-medical-800 bg-gradient-to-br from-slate-900 via-slate-900 to-medical-900/30',
  healing: 'border-healing-800 bg-gradient-to-br from-slate-900 via-slate-900 to-healing-900/30',
  emergency: 'border-emergency-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emergency-900/30',
  warm: 'border-warm-800 bg-gradient-to-br from-slate-900 via-slate-900 to-warm-900/30',
}[props.color]))

const iconBgClass = computed(() => ({
  medical: 'bg-medical-900/30',
  healing: 'bg-healing-900/30',
  emergency: 'bg-emergency-900/30',
  warm: 'bg-warm-900/30',
}[props.color]))

const iconColorClass = computed(() => ({
  medical: 'text-medical-400',
  healing: 'text-healing-400',
  emergency: 'text-emergency-400',
  warm: 'text-warm-400',
}[props.color]))

const glowClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  emergency: 'bg-emergency-500',
  warm: 'bg-warm-500',
}[props.color]))
</script>
