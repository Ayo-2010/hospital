<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <NuxtLink to="/nurses" class="hover:text-medical-800">Nursing Team</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">{{ nurse.name }}</span>
      </nav>

      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div class="space-y-6">
          <div class="flex flex-col gap-5 sm:flex-row sm:items-end">
            <img
              :src="nurse.image"
              :alt="nurse.name"
              class="h-48 w-48 shrink-0 rounded-xl border border-slate-200 object-cover"
              loading="lazy"
            />
            <div>
              <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
                {{ nurse.name }}
              </h1>
              <p class="mt-2 text-xl text-medical-700">{{ nurse.title }}</p>
              <p class="mt-1 text-sm font-medium text-slate-600">{{ nurse.specialty }}</p>
            </div>
          </div>

          <p class="text-base leading-7 text-slate-600">{{ nurse.bio }}</p>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Experience</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ nurse.experience }}</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Specialty</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ nurse.specialty }}</p>
            </div>
          </div>

          <div>
            <a href="tel:+2347045033528" class="btn-primary">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              Contact Nursing
            </a>
          </div>

          <p class="text-sm leading-6 text-slate-500">
            Nursing profiles are for reference. Contact the hospital for scheduling
            and availability information.
          </p>
        </div>

        <aside class="space-y-5">
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Department</h2>
            <ul class="mt-3 space-y-2 text-sm">
              <li><NuxtLink to="/departments" class="link">{{ nurse.specialty }}</NuxtLink></li>
              <li><NuxtLink to="/departments" class="link">Patient Care</NuxtLink></li>
            </ul>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Contact</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Nursing Administration<br />
              MedCore Hospital<br />
              Victoria Island Campus, 2nd Floor
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
import { findNurse } from '~/data/clinicians'

const route = useRoute()
const slug = route.params.slug as string

const nurse = findNurse(slug)

if (!nurse) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Nurse not found',
    fatal: true,
  })
}

useHead({ title: () => `${nurse.name} | Nursing Team | MedCore Hospital` })
</script>
