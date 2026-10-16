<script setup lang="ts">
import PreviewDoctorInitials from './DoctorInitials.vue'
import type { DemoClinician } from '~/types/preview'

const props = withDefaults(defineProps<{
  doctor: DemoClinician
  direction: 'care-gateway' | 'clinician-first' | 'department-led'
  bookingBase: string
  initialsTone?: 'blue' | 'slate' | 'green'
}>(), { initialsTone: 'blue' })
const isCompact = props.direction === 'department-led'
</script>

<template>
  <article class="grid gap-4 py-5 first:pt-3 sm:items-center" :class="direction === 'care-gateway' ? 'sm:grid-cols-[56px_minmax(0,1fr)_190px]' : 'sm:grid-cols-[56px_minmax(0,1fr)_auto]'">
    <PreviewDoctorInitials :doctor="doctor" :tone="initialsTone" />
    <div class="min-w-0">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 class="font-display text-lg font-semibold leading-6 text-slate-950">{{ doctor.name }}</h3>
        <span class="text-sm font-semibold text-medical-800">{{ doctor.specialty }}</span>
      </div>
      <p v-if="direction !== 'care-gateway'" class="mt-1 text-sm text-slate-600">{{ doctor.experienceYears }} years’ experience</p>
      <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm leading-5 text-slate-600">
        <span class="inline-flex items-center gap-1.5"><Icon name="i-lucide-map-pin" class="h-4 w-4 text-slate-500" aria-hidden="true" />{{ doctor.location }}</span>
        <span class="inline-flex items-center gap-1.5"><Icon name="i-lucide-languages" class="h-4 w-4 text-slate-500" aria-hidden="true" />{{ doctor.languages.join(', ') }}</span>
        <span v-if="direction === 'care-gateway'">{{ doctor.experienceYears }} years’ experience</span>
      </div>
      <p v-if="direction !== 'department-led'" class="mt-2 flex items-center gap-1.5 text-sm text-slate-600"><Icon name="i-lucide-calendar-days" class="h-4 w-4 text-slate-500" aria-hidden="true" />Check appointment options</p>
    </div>
    <div class="flex flex-wrap items-center gap-2 pl-[4.5rem] sm:justify-end sm:pl-0" :class="direction === 'care-gateway' ? 'sm:flex-col sm:items-stretch' : ''">
      <NuxtLink :to="`/doctors/${doctor.slug}`" class="inline-flex min-h-10 items-center justify-center rounded-md px-3.5 text-sm font-semibold text-medical-800 underline underline-offset-4 hover:text-medical-950" :class="isCompact ? '' : 'border border-slate-300 bg-white hover:bg-slate-50'">View profile</NuxtLink>
      <NuxtLink :to="`${bookingBase}/appointments/book?doctor=${doctor.slug}`" class="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md bg-medical-700 px-3.5 text-sm font-semibold text-white hover:bg-medical-800">
        {{ direction === 'care-gateway' ? 'Choose this doctor' : 'Choose this doctor' }}
        <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
      </NuxtLink>
    </div>
  </article>
</template>
