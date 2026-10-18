<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <NuxtLink to="/doctors" class="hover:text-medical-800">Find a doctor</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">{{ doctor.name }}</span>
      </nav>

      <div class="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
        <div class="space-y-8">
          <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              :src="doctor.image"
              :alt="doctor.name"
              class="h-40 w-40 shrink-0 rounded-xl border border-slate-200 bg-slate-100 object-cover"
              width="160"
              height="160"
              loading="eager"
              decoding="async"
            >
            <div class="min-w-0">
              <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
                {{ doctor.name }}
              </h1>
              <p class="mt-2 text-xl text-medical-700">{{ doctor.title }}</p>
              <p class="mt-1 text-sm font-medium text-slate-600">
                {{ doctor.specialty }} · {{ doctor.location }}
              </p>
              <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                <span class="inline-flex items-center gap-2">
                  <Icon name="i-lucide-badge-check" class="h-4 w-4 text-slate-400" aria-hidden="true" />
                  {{ doctor.experienceYears }} years experience
                </span>
                <span class="inline-flex items-center gap-2">
                  <Icon name="i-lucide-languages" class="h-4 w-4 text-slate-400" aria-hidden="true" />
                  {{ doctor.languages.join(' · ') }}
                </span>
              </div>
            </div>
          </div>

          <p v-if="doctor.bio" class="max-w-3xl text-base leading-7 text-slate-700">{{ doctor.bio }}</p>

          <section v-if="department" class="space-y-4">
            <h2 class="font-display text-2xl font-semibold text-slate-950">
              Care in {{ department.name }}
            </h2>
            <p class="max-w-3xl leading-7 text-slate-600">{{ department.description }}</p>
            <ul v-if="department.services?.length" class="grid gap-2 text-slate-600 sm:grid-cols-2">
              <li v-for="service in department.services.slice(0, 6)" :key="service" class="flex items-start gap-2">
                <Icon name="i-lucide-circle-check" class="mt-0.5 h-4.5 w-4.5 shrink-0 text-healing-600" aria-hidden="true" />
                <span>{{ service }}</span>
              </li>
            </ul>
            <NuxtLink :to="`/departments/${department.slug}`" class="link inline-flex items-center gap-2 text-sm">
              More about {{ department.name }}
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </section>

          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink :to="`/appointments/book?doctor=${doctor.slug}`" class="btn-primary">
              <Icon name="i-lucide-calendar-plus" class="h-4 w-4" aria-hidden="true" />
              Book an appointment
            </NuxtLink>
            <a href="tel:+2347045033528" class="link inline-flex items-center gap-2 text-sm">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              0704 503 3528
            </a>
          </div>

          <p class="text-sm leading-6 text-slate-500">
            Clinician profiles are for reference. Confirm availability and specialty with the
            hospital before scheduling.
          </p>
        </div>

        <aside class="space-y-5">
          <div class="flex items-start gap-3 rounded-lg border border-emergency-200 bg-emergency-50 px-4 py-3.5">
            <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 shrink-0 text-emergency-700" aria-hidden="true" />
            <p class="text-sm leading-5 text-emergency-900">
              <strong class="font-semibold">Medical emergency?</strong> Call
              <a href="tel:112" class="font-semibold underline underline-offset-2">112</a> or
              <NuxtLink to="/emergency" class="font-semibold underline underline-offset-2">go to the emergency department</NuxtLink>.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Clinic hours</h2>
            <dl class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between gap-4">
                <dt class="text-slate-600">Monday – Friday</dt>
                <dd class="text-slate-900">8am – 5pm</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-slate-600">Saturday</dt>
                <dd class="text-slate-900">9am – 1pm</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-slate-600">Sunday</dt>
                <dd class="text-slate-600">Closed</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Practises at</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ doctor.location }}</p>
            <NuxtLink to="/locations" class="link mt-3 inline-flex items-center gap-2 text-sm">
              See locations and directions
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>

          <div v-if="relatedDoctors.length" class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Other {{ doctor.specialty }} clinicians</h2>
            <ul class="mt-3 space-y-3">
              <li v-for="related in relatedDoctors" :key="related.slug">
                <NuxtLink
                  :to="`/doctors/${related.slug}`"
                  class="group flex items-center gap-3 text-slate-700 hover:text-medical-800"
                >
                  <img
                    :src="related.image"
                    :alt="related.name"
                    class="h-10 w-10 shrink-0 rounded-full border border-slate-200 object-cover"
                    width="40"
                    height="40"
                    loading="lazy"
                    decoding="async"
                  >
                  <span class="min-w-0">
                    <span class="block truncate text-sm font-medium">{{ related.name }}</span>
                    <span class="block text-xs text-slate-500">{{ related.location }}</span>
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <NuxtLink to="/doctors" class="btn-secondary w-full">
            <Icon name="i-lucide-arrow-left" class="h-4 w-4" aria-hidden="true" />
            All doctors
          </NuxtLink>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PREVIEW_DOCTORS, findDoctor } from '~/data/previewDoctors'
import { findDepartment } from '~/data/previewDepartments'

const route = useRoute()
const slug = route.params.slug as string

const doctor = findDoctor(slug)

if (!doctor) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Doctor not found',
    fatal: true,
  })
}

const department = computed(() => findDepartment(doctor.specialty.toLowerCase().replace(/\s+/g, '-')))

const relatedDoctors = computed(() =>
  PREVIEW_DOCTORS.filter(
    item => item.specialty === doctor.specialty && item.slug !== doctor.slug,
  ).slice(0, 4),
)

useHead({ title: () => `${doctor.name} | Find a Doctor | MedCore Hospital` })
</script>
