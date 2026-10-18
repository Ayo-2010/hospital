<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <NuxtLink to="/departments" class="hover:text-medical-800">Departments</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">{{ department.name }}</span>
      </nav>

      <header class="mb-10 max-w-3xl">
        <p class="eyebrow">{{ department.group }}</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          {{ department.name }}
        </h1>
        <p v-if="department.description" class="mt-4 text-base leading-7 text-slate-600">
          {{ department.description }}
        </p>
      </header>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div class="space-y-10">
          <figure v-if="department.image" class="m-0">
            <img
              :src="department.image"
              :alt="`${department.name} at MedCore Hospital`"
              class="aspect-[16/7] w-full rounded-xl border border-slate-200 bg-slate-100 object-cover object-center"
              width="960"
              height="420"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <section v-if="department.services?.length" aria-labelledby="department-services-title">
            <h2 id="department-services-title" class="font-display text-2xl font-semibold text-slate-950">
              Services
            </h2>
            <ul class="mt-4 space-y-2.5 text-slate-600">
              <li v-for="service in department.services" :key="service" class="flex items-start gap-3">
                <Icon name="i-lucide-circle-check" class="mt-0.5 h-5 w-5 shrink-0 text-healing-600" aria-hidden="true" />
                <span>{{ service }}</span>
              </li>
            </ul>
          </section>

          <section v-if="department.conditions?.length" aria-labelledby="department-conditions-title">
            <h2 id="department-conditions-title" class="font-display text-2xl font-semibold text-slate-950">
              Conditions we treat
            </h2>
            <ul class="mt-4 grid gap-2 text-slate-600 sm:grid-cols-2">
              <li v-for="condition in department.conditions" :key="condition" class="flex items-start gap-2">
                <Icon name="i-lucide-chevron-right" class="mt-0.5 h-4 w-4 shrink-0 text-medical-700" aria-hidden="true" />
                <span>{{ condition }}</span>
              </li>
            </ul>
          </section>

          <section v-if="department.equipment" aria-labelledby="department-equipment-title">
            <h2 id="department-equipment-title" class="font-display text-2xl font-semibold text-slate-950">
              Facilities &amp; equipment
            </h2>
            <p class="mt-3 leading-7 text-slate-600">{{ department.equipment }}</p>
          </section>

          <div class="rounded-xl border border-medical-200 bg-medical-50 p-6">
            <h2 class="font-display text-xl font-semibold text-medical-950">Need an appointment?</h2>
            <p class="mt-2 text-sm leading-6 text-medical-900/80">
              Book a consultation with one of our {{ department.name.toLowerCase() }} specialists. No referral
              is needed for most services.
            </p>
            <NuxtLink
              :to="`/appointments/book?department=${department.slug}`"
              class="btn-primary mt-4"
            >
              Book an appointment
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>
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
            <h2 class="font-display text-lg font-semibold text-slate-950">Contact the department</h2>
            <dl class="mt-3 space-y-3 text-sm">
              <div>
                <dt class="text-slate-500">Phone</dt>
                <dd class="mt-0.5">
                  <a href="tel:+2347045033528" class="link">0704 503 3528</a>
                </dd>
              </div>
              <div>
                <dt class="text-slate-500">Hours</dt>
                <dd class="mt-0.5 font-medium text-slate-900">Mon – Fri, 8am – 6pm</dd>
              </div>
            </dl>
            <p class="mt-3 border-t border-slate-100 pt-3 text-xs leading-5 text-slate-500">
              Demonstration contact details.
            </p>
          </div>

          <div v-if="relatedDepartments.length" class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Related departments</h2>
            <ul class="mt-3 space-y-2.5 text-sm">
              <li v-for="related in relatedDepartments" :key="related.slug">
                <NuxtLink
                  :to="`/departments/${related.slug}`"
                  class="group flex items-center justify-between gap-3 text-slate-700 hover:text-medical-800"
                >
                  <span class="font-medium">{{ related.name }}</span>
                  <Icon name="i-lucide-arrow-right" class="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-medical-700" aria-hidden="true" />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <NuxtLink to="/departments" class="btn-secondary w-full">
            <Icon name="i-lucide-arrow-left" class="h-4 w-4" aria-hidden="true" />
            All departments
          </NuxtLink>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PREVIEW_DEPARTMENTS, findDepartment } from '~/data/previewDepartments'

const route = useRoute()
const slug = route.params.slug as string

const department = findDepartment(slug)

if (!department) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Department not found',
    fatal: true,
  })
}

const relatedDepartments = computed(() =>
  PREVIEW_DEPARTMENTS.filter(
    (item) => item.group === department.group && item.slug !== department.slug,
  ).slice(0, 4),
)

useHead({ title: () => `${department.name} | Departments | MedCore Hospital` })
</script>
