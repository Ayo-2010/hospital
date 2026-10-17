<template>
  <section class="bg-white" aria-labelledby="home-doctors-title">
    <div class="container-main py-14 sm:py-20">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <p class="eyebrow">Our specialists</p>
          <h2 id="home-doctors-title" class="mt-3">Meet a few of our doctors</h2>
          <p class="mt-3 text-base leading-7 text-slate-600">
            Read each profile to check specialty, practice location and languages before you book.
          </p>
        </div>
        <NuxtLink :to="`${basePath}/doctors`" class="link shrink-0 text-sm">
          Browse all doctors
          <Icon name="i-lucide-arrow-right" class="ml-1 inline h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(doctor, index) in doctors"
          :key="doctor.id"
          class="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-card"
        >
          <div class="flex items-center gap-4">
            <span
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold"
              :class="tones[index % tones.length]"
              aria-hidden="true"
            >
              {{ initials(doctor.name) }}
            </span>
            <div class="min-w-0">
              <h3 class="truncate font-display text-lg font-semibold text-slate-950">{{ doctor.name }}</h3>
              <p class="text-sm font-medium text-medical-800">{{ doctor.specialty }}</p>
            </div>
          </div>

          <dl class="mt-5 space-y-2.5 text-sm text-slate-600">
            <div class="flex items-center gap-2.5">
              <dt class="sr-only">Location</dt>
              <Icon name="i-lucide-map-pin" class="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              <dd>{{ doctor.location }}</dd>
            </div>
            <div class="flex items-center gap-2.5">
              <dt class="sr-only">Languages</dt>
              <Icon name="i-lucide-languages" class="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              <dd>{{ doctor.languages.join(' · ') }}</dd>
            </div>
            <div class="flex items-center gap-2.5">
              <dt class="sr-only">Experience</dt>
              <Icon name="i-lucide-badge-check" class="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              <dd>{{ doctor.experienceYears }} years experience</dd>
            </div>
          </dl>

          <div class="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
            <NuxtLink :to="`/doctors/${doctor.slug}`" class="btn-secondary btn-sm flex-1">
              View profile
            </NuxtLink>
            <NuxtLink :to="`${basePath}/appointments/book`" class="btn-primary btn-sm flex-1">
              Book visit
            </NuxtLink>
          </div>
        </article>
      </div>

      <p class="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500">
        <Icon name="i-lucide-info" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-medical-700" aria-hidden="true" />
        Clinician profiles shown here are fictional demonstration records, not verified provider listings.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PREVIEW_DOCTORS } from '~/data/previewDoctors'

const props = withDefaults(defineProps<{ basePath?: string }>(), { basePath: '' })
const basePath = computed(() => props.basePath)

const doctors = computed(() => PREVIEW_DOCTORS.slice(0, 3))

const tones = [
  'bg-medical-50 text-medical-800',
  'bg-healing-50 text-healing-800',
  'bg-slate-100 text-slate-700',
]

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join('')
}
</script>
