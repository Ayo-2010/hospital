<script setup lang="ts">
import type { PreviewDirection } from '~/types/preview'

const props = defineProps<{ direction: PreviewDirection; active: string }>()
const careSteps = [
  { id: 'care', label: 'Care' },
  { id: 'time', label: 'Time' },
  { id: 'details', label: 'Your details' },
  { id: 'review', label: 'Review' },
]
const clinicianSteps = [
  { id: 'visit-type', label: 'Visit type' },
  { id: 'date-time', label: 'Date and time' },
  { id: 'details', label: 'Your details' },
  { id: 'review', label: 'Review' },
]
const steps = computed(() => props.direction === 'clinician-first' ? clinicianSteps : careSteps)
</script>

<template>
  <ol aria-label="Appointment request steps" class="mb-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-slate-200 py-4 sm:grid-cols-4">
    <li v-for="(step, index) in steps" :key="step.id" class="flex items-center gap-2.5" :aria-current="active === step.id ? 'step' : undefined" :aria-label="`${step.label}, ${active === step.id ? 'current step' : index < steps.findIndex(item => item.id === active) ? 'complete' : 'not started'}`">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold" :class="active === step.id ? 'border-2 border-medical-800 bg-white text-medical-800' : index < steps.findIndex(item => item.id === active) ? 'bg-medical-800 text-white' : 'border border-slate-300 bg-white text-slate-500'">
        <Icon v-if="index < steps.findIndex(item => item.id === active)" name="i-lucide-check" class="h-4 w-4" aria-hidden="true" />
        <span v-else>{{ index + 1 }}</span>
      </span>
      <span class="min-w-0 text-sm font-medium" :class="active === step.id ? 'text-medical-900' : 'text-slate-600'">{{ step.label }}</span>
    </li>
  </ol>
</template>
