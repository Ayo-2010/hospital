<template>
  <NuxtLink
    :to="to"
    class="card-interactive group flex flex-col items-center text-center p-6"
    :class="colorClasses"
  >
    <div
      class="flex h-14 w-14 items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
      :class="iconBgClass"
    >
      <Icon :name="icon" class="h-7 w-7" :class="iconColorClass" />
    </div>
    <h3 class="font-semibold text-slate-900 dark:text-white mb-1">{{ label }}</h3>
    <span v-if="badge" class="badge" :class="badgeClass">{{ badge }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string
  label: string
  to: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
  badge?: string
}>()

const colorClasses = computed(() => ({
  medical: 'hover:shadow-medical-500/10',
  healing: 'hover:shadow-healing-500/10',
  emergency: 'hover:shadow-emergency-500/10',
  warm: 'hover:shadow-warm-500/10',
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

const badgeClass = computed(() => ({
  medical: 'badge-medical',
  healing: 'badge-healing',
  emergency: 'badge-emergency',
  warm: 'badge-warm',
}[props.color]))
</script>