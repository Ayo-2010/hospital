<script setup lang="ts">

const props = defineProps<{
  direction: string
  activePage: 'home' | 'doctors' | 'booking'
  basePath?: string
}>()

const open = ref(false)
const base = computed(() => props.basePath ?? `/previews/${props.direction}`)
const homePath = computed(() => base.value || '/')
const isCareGateway = computed(() => props.direction === 'care-gateway')
const isDepartmentLed = computed(() => props.direction === 'department-led')
const menuId = computed(() => `preview-menu-${props.direction}`)

const directionLabel = computed(() => ({
  'care-gateway': 'Care gateway',
  'clinician-first': 'Clinician-first',
  'department-led': 'Department-led',
}[props.direction] ?? 'MedCore preview'))

const navItems = computed(() => [
  { label: 'Departments', to: '/departments', page: '' },
  { label: 'Doctors', to: `${base.value}/doctors`, page: 'doctors' },
  { label: 'Services', to: '/services', page: '' },
  ...(isCareGateway.value ? [{ label: 'Emergency', to: '/emergency', page: '' }] : []),
  ...(!isCareGateway.value ? [{ label: 'About', to: '/about', page: '' }] : []),
  { label: 'Contact', to: '/contact', page: '' },
])
</script>

<template>
  <div v-if="isCareGateway" class="border-b border-slate-200 bg-slate-50">
    <div class="container-main flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-sm">
      <span class="text-slate-600">MedCore Hospital · Patient and visitor information</span>
      <a class="inline-flex items-center gap-2 font-semibold text-emergency-700 underline decoration-emergency-300 underline-offset-4 hover:text-emergency-800" href="tel:112">
        <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
        Emergency? Call 112
      </a>
    </div>
  </div>

  <div v-else-if="!isDepartmentLed" class="border-b border-emergency-100 bg-emergency-50 text-emergency-900">
    <div class="container-main flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-sm">
      <p class="flex items-center gap-2">
        <Icon name="i-lucide-phone" class="h-4 w-4 text-emergency-700" aria-hidden="true" />
        <span>For a medical emergency, call <strong>112</strong>.</span>
      </p>
      <a class="font-semibold text-emergency-800 underline decoration-emergency-300 underline-offset-4 hover:text-emergency-950" href="tel:112">Call 112</a>
    </div>
  </div>

  <div v-else class="border-b border-slate-200 bg-slate-50">
    <div class="container-main flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-sm">
      <p class="flex items-center gap-2 text-slate-700">
        <span class="h-2 w-2 rounded-full bg-emergency-600" aria-hidden="true" />
        Emergency? <a class="font-semibold text-emergency-700 underline decoration-emergency-300 underline-offset-4" href="tel:112">Call 112</a>
      </p>
      <span class="text-slate-600">Main line <a class="font-semibold text-slate-800" href="tel:+2347045033528">0704 503 3528</a></span>
    </div>
  </div>

  <header class="border-b border-slate-200 bg-white">
    <nav class="container-main flex min-h-18 items-center justify-between gap-4 py-3" aria-label="Main navigation">
      <NuxtLink :to="homePath" class="flex shrink-0 items-center gap-3" aria-label="MedCore preview home">
        <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-700 text-white">
          <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
        </span>
        <span class="leading-tight">
          <span class="block font-display text-lg font-bold tracking-tight text-medical-900">MedCore</span>
          <span class="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            {{ isCareGateway ? 'Hospital' : directionLabel }}
          </span>
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to + item.label"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-medical-800"
          :class="item.page === activePage ? 'bg-medical-50 font-semibold text-medical-800' : 'text-slate-600'"
          :aria-current="item.page === activePage ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <NuxtLink class="hidden text-sm font-medium text-slate-600 hover:text-medical-800 sm:inline-flex" to="/auth/login">Patient portal</NuxtLink>
        <NuxtLink :to="`${base}/appointments/book`" class="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-medical-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-medical-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-700">
          <Icon name="i-lucide-calendar-days" class="h-4 w-4" aria-hidden="true" />
          <span class="hidden sm:inline">{{ isDepartmentLed ? 'Request an appointment' : 'Book appointment' }}</span>
          <span class="sm:hidden">Book</span>
        </NuxtLink>
        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-700 lg:hidden"
          type="button"
          :aria-expanded="open"
          :aria-controls="menuId"
          :aria-label="open ? 'Close navigation menu' : 'Open navigation menu'"
          @click="open = !open"
        >
          <Icon :name="open ? 'i-lucide-x' : 'i-lucide-menu'" class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <div v-if="open" :id="menuId" class="border-t border-slate-200 bg-white lg:hidden">
      <nav class="container-main space-y-1 py-3" aria-label="Mobile navigation">
        <NuxtLink
          v-for="item in navItems"
          :key="`mobile-${item.to}-${item.label}`"
          :to="item.to"
          class="block rounded-md px-3 py-3 text-sm font-medium hover:bg-medical-50 hover:text-medical-800"
          :class="item.page === activePage ? 'bg-medical-50 text-medical-800' : 'text-slate-700'"
          :aria-current="item.page === activePage ? 'page' : undefined"
          @click="open = false"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink class="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-medical-50" to="/auth/login" @click="open = false">Patient portal</NuxtLink>
      </nav>
    </div>
  </header>
</template>
