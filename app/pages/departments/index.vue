<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Departments</span>
      </nav>

      <header class="mb-12 max-w-3xl">
        <p class="eyebrow">Care areas</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Departments &amp; specialties
        </h1>
        <p class="mt-4 text-base leading-7 text-slate-600">
          Browse our range of medical departments and specialties. Each is led by experienced
          clinicians and supported by modern facilities and equipment.
        </p>
      </header>

      <div class="space-y-12">
        <section
          v-for="group in PREVIEW_DEPARTMENT_GROUPS"
          :key="group"
          :aria-labelledby="groupHeadingId(group)"
        >
          <div class="flex items-center gap-4">
            <h2 :id="groupHeadingId(group)" class="font-display text-2xl font-semibold text-slate-950">
              {{ group }}
            </h2>
            <span class="h-px flex-1 bg-slate-200" aria-hidden="true" />
          </div>

          <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="department in departmentsByGroup(group)"
              :key="department.slug"
              :to="`/departments/${department.slug}`"
              class="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-medical-300 hover:shadow-card"
            >
              <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-medical-50 text-medical-700 transition-colors group-hover:bg-medical-700 group-hover:text-white">
                <Icon :name="departmentIcon(department.slug)" class="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 class="mt-4 font-display text-lg font-semibold text-slate-950">{{ department.name }}</h3>
              <p class="mt-2 flex-1 text-sm leading-6 text-slate-600">{{ department.summary }}</p>
              <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-800">
                Learn more
                <Icon name="i-lucide-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PREVIEW_DEPARTMENT_GROUPS,
  departmentsByGroup,
  departmentIcon,
} from '~/data/previewDepartments'

useHead({ title: 'Departments & Specialties | MedCore Hospital' })

function groupHeadingId(group: string) {
  return `departments-${group.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
}
</script>
