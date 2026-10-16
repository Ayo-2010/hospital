<script setup lang="ts">
withDefaults(defineProps<{
  variant: 'toolbar' | 'rail'
  specialties: string[]
  locations: string[]
  languages: string[]
  activeCount: number
}>(), { activeCount: 0 })

const search = defineModel<string>('search', { default: '' })
const specialty = defineModel<string>('specialty', { default: '' })
const location = defineModel<string>('location', { default: '' })
const language = defineModel<string>('language', { default: '' })
const emit = defineEmits<{ clear: [] }>()
const mobileFiltersId = 'doctor-directory'
</script>

<template>
  <section v-if="variant === 'toolbar'" class="rounded-lg border border-slate-200 bg-white p-5 sm:p-6" aria-label="Search and filter doctors">
    <label :for="`${mobileFiltersId}-search`" class="mb-2 block text-sm font-semibold text-slate-800">Search clinicians</label>
    <div class="flex flex-col gap-2 sm:flex-row">
      <div class="relative min-w-0 flex-1">
        <Icon name="i-lucide-search" class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" aria-hidden="true" />
        <input :id="`${mobileFiltersId}-search`" v-model="search" type="search" autocomplete="off" placeholder="Name, specialty, or location" class="h-12 w-full rounded-md border border-slate-300 bg-white pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-medical-700 focus:outline-none focus:ring-2 focus:ring-medical-700/20">
      </div>
      <button type="button" class="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-medical-700 px-5 text-sm font-semibold text-white hover:bg-medical-800 sm:min-w-32" @click="search = search.trim()">
        Search doctors
      </button>
      <details class="rounded-md border border-slate-300 bg-white md:hidden">
        <summary class="flex h-12 cursor-pointer list-none items-center justify-center gap-2 px-4 text-sm font-semibold text-slate-700">
          <Icon name="i-lucide-list-filter" class="h-4 w-4 text-medical-800" aria-hidden="true" />
          Filters <span class="rounded-sm bg-slate-100 px-1.5 py-0.5 text-xs">{{ activeCount }}</span>
        </summary>
        <div class="grid gap-3 border-t border-slate-200 p-4">
          <label class="text-sm font-semibold text-slate-700">Specialty <select v-model="specialty" class="input-field mt-1.5"><option value="">All specialties</option><option v-for="item in specialties" :key="item">{{ item }}</option></select></label>
          <label class="text-sm font-semibold text-slate-700">Location <select v-model="location" class="input-field mt-1.5"><option value="">All locations</option><option v-for="item in locations" :key="item">{{ item }}</option></select></label>
          <label class="text-sm font-semibold text-slate-700">Language <select v-model="language" class="input-field mt-1.5"><option value="">All languages</option><option v-for="item in languages" :key="item">{{ item }}</option></select></label>
          <button type="button" class="justify-self-start text-sm font-semibold text-medical-800 underline underline-offset-4" @click="emit('clear')">Clear filters</button>
        </div>
      </details>
    </div>
    <div class="mt-5 hidden grid-cols-3 gap-4 border-t border-slate-100 pt-5 md:grid">
      <label class="text-sm font-semibold text-slate-700">Specialty <select v-model="specialty" class="input-field mt-1.5"><option value="">All specialties</option><option v-for="item in specialties" :key="item">{{ item }}</option></select></label>
      <label class="text-sm font-semibold text-slate-700">Location <select v-model="location" class="input-field mt-1.5"><option value="">All locations</option><option v-for="item in locations" :key="item">{{ item }}</option></select></label>
      <label class="text-sm font-semibold text-slate-700">Language <select v-model="language" class="input-field mt-1.5"><option value="">All languages</option><option v-for="item in languages" :key="item">{{ item }}</option></select></label>
    </div>
  </section>

  <aside v-else class="rounded-lg border border-slate-200 bg-white p-5" aria-label="Doctor directory filters">
    <div class="mb-5 flex items-center justify-between gap-2">
      <h2 class="font-display text-lg font-semibold text-slate-900">Filter clinicians</h2>
      <button type="button" class="text-xs font-semibold text-medical-800 underline underline-offset-4" @click="emit('clear')">Clear all</button>
    </div>
    <div class="space-y-4">
      <label class="block text-sm font-semibold text-slate-700">Specialty <select v-model="specialty" class="input-field mt-2 text-sm font-normal"><option value="">All specialties</option><option v-for="item in specialties" :key="item">{{ item }}</option></select></label>
      <label class="block text-sm font-semibold text-slate-700">Location <select v-model="location" class="input-field mt-2 text-sm font-normal"><option value="">All locations</option><option v-for="item in locations" :key="item">{{ item }}</option></select></label>
      <label class="block text-sm font-semibold text-slate-700">Language <select v-model="language" class="input-field mt-2 text-sm font-normal"><option value="">All languages</option><option v-for="item in languages" :key="item">{{ item }}</option></select></label>
    </div>
    <p class="mt-3 text-xs text-slate-500">{{ activeCount }} {{ activeCount === 1 ? 'filter' : 'filters' }} applied</p>
    <details class="mt-6 border-t border-slate-200 pt-4">
      <summary class="cursor-pointer text-sm font-semibold text-slate-700">Browse by department</summary>
      <NuxtLink to="/departments" class="mt-3 inline-flex text-sm font-semibold text-medical-800 underline underline-offset-4">View all departments</NuxtLink>
    </details>
  </aside>
</template>
