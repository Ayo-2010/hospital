<script setup lang="ts">
definePageMeta({ layout: false })

const directions = [
  {
    slug: 'care-gateway',
    name: 'Care gateway',
    summary: 'Start with the next action: find a clinician, request a visit, or get emergency information.',
    pages: ['Home', 'Find a doctor', 'Appointment request'],
  },
  {
    slug: 'clinician-first',
    name: 'Clinician-first',
    summary: 'Search and compare sample clinician profiles, then carry your selection into a visit request.',
    pages: ['Home', 'Doctor directory', 'Visit request'],
  },
  {
    slug: 'department-led',
    name: 'Department-led',
    summary: 'Choose a care area first, narrow the clinician list, then share your preferred visit details.',
    pages: ['Home', 'Department-aware directory', 'Request worksheet'],
  },
]

useHead({ title: 'Patient-access design previews · MedCore' })
</script>

<template>
  <main class="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:py-20">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <NuxtLink to="/" class="inline-flex items-center gap-3 text-medical-900">
            <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-700 text-white"><Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" /></span>
            <span class="font-display text-xl font-bold">MedCore</span>
          </NuxtLink>
          <h1 class="mt-7 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Patient access designs</h1>
          <p class="mt-3 max-w-2xl text-lg leading-7 text-slate-600">Compare three ways to help visitors find care and request an appointment. These previews do not change the existing public pages.</p>
        </div>
        <NuxtLink to="/" class="text-sm font-semibold text-medical-800 underline underline-offset-4">Return to the live homepage</NuxtLink>
      </div>

      <div class="mt-8 grid gap-5 lg:grid-cols-3">
        <article v-for="(direction, index) in directions" :key="direction.slug" class="flex flex-col border border-slate-200 bg-white p-6 shadow-xs sm:p-7" :class="index === 0 ? 'border-t-4 border-t-medical-700' : index === 1 ? 'border-t-4 border-t-healing-600' : 'border-t-4 border-t-warm-600'">
          <p class="text-sm font-semibold text-medical-800">Design direction {{ index + 1 }}</p>
          <h2 class="mt-2 font-display text-2xl font-semibold text-slate-950">{{ direction.name }}</h2>
          <p class="mt-3 min-h-20 text-sm leading-6 text-slate-600">{{ direction.summary }}</p>
          <ul class="mt-5 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <li v-for="page in direction.pages" :key="page" class="flex items-center gap-2"><Icon name="i-lucide-check" class="h-4 w-4 text-healing-700" aria-hidden="true" />{{ page }}</li>
          </ul>
          <NuxtLink :to="`/previews/${direction.slug}`" class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-medical-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-medical-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-700">
            Open {{ direction.name }}
            <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </article>
      </div>

      <p class="mt-8 text-sm leading-6 text-slate-500">Preview content uses fictional clinician details and does not submit appointment requests.</p>
    </div>
  </main>
</template>
