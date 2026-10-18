<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <NuxtLink to="/services" class="hover:text-medical-800">Services</NuxtLink>
        <template v-if="service">
          <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
          <NuxtLink :to="`/services/${service.categorySlug}`" class="hover:text-medical-800">
            {{ service.categoryName }}
          </NuxtLink>
        </template>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">{{ pageTitle }}</span>
      </nav>

      <header class="mb-10 max-w-3xl">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          {{ pageTitle }}
        </h1>
        <p class="mt-4 text-base leading-7 text-slate-600">{{ pageSummary }}</p>
      </header>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div class="space-y-10">
          <figure class="m-0">
            <img
              :src="pageImage"
              :alt="`${pageTitle} at MedCore Hospital`"
              class="aspect-[16/7] w-full rounded-xl border border-slate-200 bg-slate-100 object-cover object-center"
              width="960"
              height="420"
              loading="lazy"
              decoding="async"
            >
          </figure>

          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">About this service</h2>
            <p class="mt-3 leading-7 text-slate-600">{{ pageDescription }}</p>
          </section>

          <!-- Category page: the services that sit underneath it. -->
          <section v-if="category" aria-labelledby="category-services-title">
            <h2 id="category-services-title" class="font-display text-2xl font-semibold text-slate-950">
              What this includes
            </h2>
            <p class="mt-2 text-sm text-slate-600">Choose a service to see what the appointment involves.</p>
            <ul class="mt-5 grid gap-3 sm:grid-cols-2">
              <li v-for="item in category.items" :key="item.slug">
                <NuxtLink
                  :to="`/services/${item.slug}`"
                  class="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-medical-300 hover:shadow-card"
                >
                  <span class="font-display text-base font-semibold text-slate-950 group-hover:text-medical-800">
                    {{ item.name }}
                  </span>
                  <span class="mt-1.5 flex-1 text-sm leading-6 text-slate-600">{{ item.summary }}</span>
                  <span class="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-800">
                    Learn more
                    <Icon name="i-lucide-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </section>

          <!-- Service page: the checklist and the category it belongs to. -->
          <template v-else-if="service">
            <section aria-labelledby="service-includes-title">
              <h2 id="service-includes-title" class="font-display text-2xl font-semibold text-slate-950">
                What the appointment involves
              </h2>
              <ul class="mt-4 space-y-2.5 text-slate-600">
                <li v-for="point in service.includes" :key="point" class="flex items-start gap-3">
                  <Icon name="i-lucide-circle-check" class="mt-0.5 h-5 w-5 shrink-0 text-healing-600" aria-hidden="true" />
                  <span>{{ point }}</span>
                </li>
              </ul>
              <p v-if="service.suitableFor" class="mt-5 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
                <strong class="font-semibold text-slate-900">Who it is for: </strong>{{ service.suitableFor }}
              </p>
            </section>

            <section v-if="parentCategory" aria-labelledby="service-category-title">
              <h2 id="service-category-title" class="font-display text-2xl font-semibold text-slate-950">
                Part of {{ parentCategory.name }}
              </h2>
              <p class="mt-3 leading-7 text-slate-600">{{ parentCategory.description }}</p>
              <ul class="mt-5 grid gap-2 sm:grid-cols-2">
                <li v-for="item in parentCategory.items" :key="item.slug">
                  <NuxtLink
                    :to="`/services/${item.slug}`"
                    class="flex items-start gap-2 text-sm text-slate-700 hover:text-medical-800"
                    :class="item.slug === service.slug ? 'font-semibold text-medical-900' : ''"
                  >
                    <Icon name="i-lucide-chevron-right" class="mt-0.5 h-4 w-4 shrink-0 text-medical-600" aria-hidden="true" />
                    <span>{{ item.name }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </section>
          </template>

          <div class="rounded-xl border border-medical-200 bg-medical-50 p-6">
            <h2 class="font-display text-xl font-semibold text-medical-950">Ready to book?</h2>
            <p class="mt-2 text-sm leading-6 text-medical-900/80">
              Request an appointment online and our team will confirm a time that works for you. No
              referral is needed for most services.
            </p>
            <div class="mt-4 flex flex-wrap items-center gap-4">
              <NuxtLink :to="`/appointments/book?service=${slug}`" class="btn-primary">
                <Icon name="i-lucide-calendar-plus" class="h-4 w-4" aria-hidden="true" />
                Request an appointment
              </NuxtLink>
              <a href="tel:+2347045033528" class="link inline-flex items-center gap-2 text-sm">
                <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
                0704 503 3528
              </a>
            </div>
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

          <div v-if="relatedServices.length" class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Related services</h2>
            <ul class="mt-3 space-y-2.5 text-sm">
              <li v-for="related in relatedServices" :key="related.slug">
                <NuxtLink
                  :to="`/services/${related.slug}`"
                  class="group flex items-center justify-between gap-3 text-slate-700 hover:text-medical-800"
                >
                  <span class="font-medium">{{ related.name }}</span>
                  <Icon name="i-lucide-arrow-right" class="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-medical-700" aria-hidden="true" />
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div v-if="relatedDepartment" class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Related department</h2>
            <NuxtLink
              :to="`/departments/${relatedDepartment.slug}`"
              class="group mt-3 flex items-center justify-between gap-3 text-slate-700 hover:text-medical-800"
            >
              <span class="font-medium">{{ relatedDepartment.name }}</span>
              <Icon name="i-lucide-arrow-right" class="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-medical-700" aria-hidden="true" />
            </NuxtLink>
          </div>

          <NuxtLink to="/services" class="btn-secondary w-full">
            <Icon name="i-lucide-arrow-left" class="h-4 w-4" aria-hidden="true" />
            All services
          </NuxtLink>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { findDepartment } from '~/data/previewDepartments'
import { findService, findServiceCategory } from '~/data/services'

definePageMeta({ layout: 'public' })

const route = useRoute()
const slug = route.params.slug as string

const category = findServiceCategory(slug)
const service = findService(slug)

if (!category && !service) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found',
    fatal: true,
  })
}

/** Individual services reuse the image of the category they belong to. */
const fallbackImage = findServiceCategory('primary-care')!.image

const parentCategory = computed(() => findServiceCategory(category?.slug ?? service?.categorySlug ?? ''))

const pageTitle = computed(() => category?.name ?? service?.name ?? '')
const pageSummary = computed(() => category?.summary ?? service?.summary ?? '')
const pageDescription = computed(() => category?.description ?? service?.description ?? '')
const pageImage = computed(() => category?.image ?? parentCategory.value?.image ?? fallbackImage)
const eyebrow = computed(() => (category ? 'Service area' : service?.categoryName ?? 'Service'))

const relatedServices = computed(() => {
  if (category) return []
  if (!service) return []
  const parent = findServiceCategory(service.categorySlug)
  return parent?.items.filter(item => item.slug !== service.slug).slice(0, 5) ?? []
})

/** Map a service area to a department where one exists, for cross-linking. */
const relatedDepartment = computed(() => {
  const key = category?.slug ?? service?.categorySlug
  const map: Record<string, string> = {
    'maternity-care': 'obstetrics-gynecology',
    diagnostics: 'radiology',
    'surgery-and-procedures': 'surgery',
  }
  const slugToFind = key ? map[key] : undefined
  return slugToFind ? findDepartment(slugToFind) : undefined
})

useHead({
  title: () => `${pageTitle.value} | Services | MedCore Hospital`,
  meta: [{ name: 'description', content: () => pageSummary.value }],
})
</script>
