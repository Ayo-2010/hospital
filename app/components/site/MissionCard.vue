<template>
  <div class="card-interactive">
    <span class="flex h-12 w-12 items-center justify-center rounded-lg" :class="iconClasses">
      <Icon :name="icon" class="h-6 w-6" aria-hidden="true" />
    </span>
    <h3 class="mt-4 font-display text-lg font-semibold tracking-tight text-slate-950">{{ title }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'warm'
}>()

const iconClasses = computed(() => ({
  medical: 'bg-medical-50 text-medical-700',
  healing: 'bg-healing-50 text-healing-700',
  warm: 'bg-warm-50 text-warm-700',
}[props.color]))
</script>
