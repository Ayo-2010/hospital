<template>
  <section class="border-y border-slate-200 bg-slate-50" aria-labelledby="home-departments-title">
    <div class="container-main py-14 sm:py-20">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <p class="eyebrow">Care areas</p>
          <h2 id="home-departments-title" class="mt-3">Departments &amp; specialties</h2>
          <p class="mt-3 text-base leading-7 text-slate-600">
            Start with the area of care you have in mind and explore the services and clinicians within it.
          </p>
        </div>
        <NuxtLink to="/departments" class="link shrink-0 text-sm">
          View all departments
          <Icon name="i-lucide-arrow-right" class="ml-1 inline h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="department in departments"
          :key="department.slug"
          :to="`/departments/${department.slug}`"
          class="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-medical-300 hover:shadow-card"
        >
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-50 text-medical-700 transition-colors group-hover:bg-medical-700 group-hover:text-white">
            <Icon :name="departmentIcon(department.slug)" class="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 class="mt-4 font-display text-base font-semibold text-slate-950">{{ department.name }}</h3>
          <p class="mt-1.5 flex-1 text-sm leading-6 text-slate-600">{{ department.summary }}</p>
          <span class="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-800">
            Learn more
            <Icon name="i-lucide-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PREVIEW_DEPARTMENTS, departmentIcon } from '~/data/previewDepartments'

const departments = computed(() => PREVIEW_DEPARTMENTS.slice(0, 8))
</script>
