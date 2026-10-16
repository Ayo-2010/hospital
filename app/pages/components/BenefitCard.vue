<template>
  <div class="card-interactive group text-center">
    <div class="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" :class="iconBgClass">
      <Icon :name="icon" class="h-6 w-6 text-white" />
    </div>
    <h3 class="font-semibold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
    <p class="text-sm text-slate-600 dark:text-slate-400">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
}>()

const iconBgClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  emergency: 'bg-emergency-500',
  warm: 'bg-warm-500',
}[props.color]))
</script>
