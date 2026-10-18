<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <NuxtLink to="/surgeons" class="hover:text-medical-800">Surgeons</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">{{ surgeon.name }}</span>
      </nav>

      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div class="space-y-6">
          <div class="flex flex-col gap-5 sm:flex-row sm:items-end">
            <img
              :src="surgeon.image"
              :alt="surgeon.name"
              class="h-48 w-48 shrink-0 rounded-xl border border-slate-200 object-cover"
              loading="lazy"
            />
            <div>
              <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
                {{ surgeon.name }}
              </h1>
              <p class="mt-2 text-xl text-medical-700">{{ surgeon.title }}</p>
              <p class="mt-1 text-sm font-medium text-slate-600">{{ surgeon.specialty }}</p>
            </div>
          </div>

          <p class="text-base leading-7 text-slate-600">{{ surgeon.bio }}</p>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Experience</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ surgeon.experience }}</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Specialty</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ surgeon.specialty }}</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink
              :to="`/appointments/book?surgeon=${surgeon.slug}`"
              class="btn-primary"
            >
              <Icon name="i-lucide-calendar-plus" class="h-4 w-4" aria-hidden="true" />
              Book Consultation
            </NuxtLink>
            <a href="tel:+2347045033528" class="link inline-flex items-center gap-2 text-sm">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              0704 503 3528
            </a>
          </div>

          <p class="text-sm leading-6 text-slate-500">
            Surgeon profiles are for reference. Confirm availability and specialty
            with the hospital before scheduling.
          </p>
        </div>

        <aside class="space-y-5">
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Department</h2>
            <ul class="mt-3 space-y-2 text-sm">
              <li><NuxtLink to="/departments" class="link">{{ surgeon.specialty }}</NuxtLink></li>
              <li><NuxtLink to="/surgery" class="link">Surgery &amp; Procedures</NuxtLink></li>
            </ul>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Contact</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Surgical Scheduling<br />
              MedCore Hospital<br />
              Victoria Island Campus, Surgical Wing
            </p>
            <a href="tel:+2347045033528" class="link mt-3 inline-flex items-center gap-2 text-sm">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              0704 503 3528
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { findSurgeon } from '~/data/clinicians'

const route = useRoute()
const slug = route.params.slug as string

const surgeon = findSurgeon(slug)

if (!surgeon) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Surgeon not found',
    fatal: true,
  })
}

useHead({ title: () => `${surgeon.name} | Surgical Team | MedCore Hospital` })
</script>
