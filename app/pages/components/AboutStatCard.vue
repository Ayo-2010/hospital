<template>
  <div class="relative overflow-hidden group" :class="colorClasses">
    <div class="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-xl transition-transform duration-500 group-hover:scale-150" :class="glowClass" />
    <div class="relative p-6 text-center">
      <div class="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-4" :class="iconBgClass">
        <Icon :name="icon" class="h-6 w-6 text-white" />
      </div>
      <div class="stats-counter text-3xl sm:text-4xl font-bold text-white mb-1">{{ value }}</div>
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
