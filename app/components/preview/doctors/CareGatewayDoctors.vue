<script setup lang="ts">
import PreviewDemoContentNotice from '../DemoContentNotice.vue'
import PreviewDoctorDirectoryFilters from '../DoctorDirectoryFilters.vue'
import PreviewDoctorResultRow from '../DoctorResultRow.vue'
import { usePreviewDoctorFilters } from '~/composables/usePreviewDoctorFilters'
import type { PreviewDirection } from '~/types/preview'

const filters = usePreviewDoctorFilters('care-gateway')
const direction: PreviewDirection = 'care-gateway'
const props = withDefaults(defineProps<{ basePath?: string }>(), { basePath: '/previews/care-gateway' })
const base = computed(() => props.basePath || '')
const activeCount = computed(() => filters.activeFilters.value.length)
</script>

<template>
  <main class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500"><NuxtLink :to="base || '/'" class="hover:text-medical-800">Home</NuxtLink><span class="mx-2 text-slate-300">/</span><span aria-current="page" class="font-medium text-slate-700">Find a doctor</span></nav>
      <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
        <div><h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">Find a doctor</h1><p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">Search by name or specialty. Compare clinicians and check appointment options before choosing who to see.</p></div>
        <aside class="flex items-start gap-3 rounded-md border border-emergency-200 bg-emergency-50 px-4 py-3.5" aria-label="Emergency contact"><Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 text-emergency-700" aria-hidden="true" /><p class="text-sm leading-5 text-emergency-900"><strong class="block">Need urgent help?</strong>For a medical emergency, call <a class="font-bold underline underline-offset-2" href="tel:911">911</a> or <NuxtLink class="font-semibold underline underline-offset-2" to="/emergency">view emergency care</NuxtLink>.</p></aside>
      </div>

      <div class="mt-7"><PreviewDoctorDirectoryFilters variant="toolbar" :specialties="filters.specialties.value" :locations="filters.locations.value" :languages="filters.languages.value" :active-count="activeCount" v-model:search="filters.search.value" v-model:specialty="filters.specialty.value" v-model:location="filters.location.value" v-model:language="filters.language.value" @clear="filters.clearFilters" /></div>

      <div class="mt-5 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between"><div class="flex flex-wrap items-center gap-2"><span class="text-sm font-semibold text-slate-900">{{ filters.filteredDoctors.value.length }} matching sample {{ filters.filteredDoctors.value.length === 1 ? 'profile' : 'profiles' }}</span><span class="text-sm text-slate-500">Fictional demo clinicians</span></div><div v-if="activeCount" class="flex flex-wrap items-center gap-2"><span class="text-sm text-slate-500">Applied:</span><span v-for="filter in filters.activeFilters.value" :key="filter.key" class="inline-flex items-center gap-1 rounded-sm border border-medical-200 bg-medical-50 px-2.5 py-1.5 text-xs font-medium text-medical-950">{{ filter.label }}<button type="button" class="inline-flex h-5 w-5 items-center justify-center rounded hover:bg-medical-100" :aria-label="`Remove ${filter.label} filter`" @click="filters.removeFilter(filter.key)"><Icon name="i-lucide-x" class="h-3.5 w-3.5" aria-hidden="true" /></button></span><button type="button" class="text-xs font-semibold text-medical-800 underline underline-offset-4" @click="filters.clearFilters">Clear all</button></div></div>

      <div class="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <section aria-labelledby="gateway-results-title"><div class="mb-2 flex items-baseline justify-between gap-4"><h2 id="gateway-results-title" class="font-display text-xl font-semibold text-slate-950">Doctors matching your search</h2><span class="hidden text-sm text-slate-500 sm:inline">Sample directory</span></div>
          <div v-if="filters.filteredDoctors.value.length" class="divide-y divide-slate-200">
            <PreviewDoctorResultRow v-for="(doctor, index) in filters.visibleDoctors.value" :key="doctor.id" :doctor="doctor" :direction="direction" :booking-base="base" :initials-tone="index === 1 ? 'slate' : index === 2 ? 'green' : 'blue'" />
          </div>
          <div v-else class="border-y border-slate-200 py-12 text-center"><span class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600"><Icon name="i-lucide-search-x" class="h-6 w-6" aria-hidden="true" /></span><h3 class="mt-4 font-display text-lg font-semibold text-slate-950">No doctors found</h3><p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">Try a broader name or specialty, adjust a filter, or browse departments to find a place to start.</p><button type="button" class="mt-4 text-sm font-semibold text-medical-800 underline underline-offset-4" @click="filters.clearFilters">Clear search and filters</button></div>
          <div v-if="filters.filteredDoctors.value.length > filters.visibleDoctors.value.length" class="border-t border-slate-200 py-5 text-center"><button class="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50" type="button" @click="filters.showAll.value = true">Load more doctors <Icon name="i-lucide-chevron-down" class="ml-1 inline h-4 w-4" aria-hidden="true" /></button></div>
          <p class="mt-3 text-sm leading-6 text-slate-500">Doctor profiles in this preview are illustrative. Confirm provider details and appointment options with the hospital before scheduling.</p>
        </section>
        <aside class="space-y-5">
          <section class="rounded-lg border border-slate-200 bg-white p-5"><h2 class="font-display text-lg font-semibold text-slate-950">Not sure where to start?</h2><p class="mt-2 text-sm leading-6 text-slate-600">Browse care by department if you are not sure which specialty to search for.</p><NuxtLink to="/departments" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-medical-800">Browse departments <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" /></NuxtLink></section>
          <section class="rounded-lg border border-slate-200 bg-slate-100 p-5"><h2 class="font-display text-base font-semibold text-slate-900">Need help booking?</h2><p class="mt-2 text-sm leading-5 text-slate-600">Call our main line for non-urgent questions.</p><a class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline underline-offset-4" href="tel:+11234567890"><Icon name="i-lucide-phone" class="h-4 w-4 text-medical-800" aria-hidden="true" />+1 (123) 456-7890</a><p class="mt-2 text-xs text-slate-500">Demonstration contact details.</p></section>
          <PreviewDemoContentNotice compact />
        </aside>
      </div>
    </div>
  </main>
</template>
