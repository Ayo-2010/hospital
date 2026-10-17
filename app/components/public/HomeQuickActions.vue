<template>
  <section class="bg-white" aria-labelledby="quick-access-title">
    <div class="container-main py-12 sm:py-14">
      <h2 id="quick-access-title" class="sr-only">Quick access</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="action in actions"
          :key="action.title"
          :to="action.to"
          class="card-interactive group flex flex-col"
          :class="action.emergency ? 'border-emergency-200 bg-emergency-50/60' : ''"
        >
          <span
            class="flex h-11 w-11 items-center justify-center rounded-lg"
            :class="action.emergency ? 'bg-emergency-100 text-emergency-700' : 'bg-medical-50 text-medical-700'"
          >
            <Icon :name="action.icon" class="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 class="mt-4 font-display text-base font-semibold" :class="action.emergency ? 'text-emergency-900' : 'text-slate-950'">
            {{ action.title }}
          </h3>
          <p class="mt-1.5 flex-1 text-sm leading-6" :class="action.emergency ? 'text-emergency-900/80' : 'text-slate-600'">
            {{ action.detail }}
          </p>
          <span
            class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
            :class="action.emergency ? 'text-emergency-800' : 'text-medical-800'"
          >
            {{ action.cta }}
            <Icon name="i-lucide-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ basePath?: string }>(), { basePath: '' })
const base = computed(() => props.basePath)

const actions = computed(() => [
  {
    title: 'Book an appointment',
    detail: 'Request a visit online and our team will confirm a time that works for you.',
    cta: 'Start a request',
    icon: 'i-lucide-calendar-plus',
    to: `${base.value}/appointments/book`,
    emergency: false,
  },
  {
    title: 'Find a doctor',
    detail: 'Search our specialists by name, specialty, location or language.',
    cta: 'Browse doctors',
    icon: 'i-lucide-user-round-search',
    to: `${base.value}/doctors`,
    emergency: false,
  },
  {
    title: 'Explore departments',
    detail: 'See every area of care and what each department can help with.',
    cta: 'View departments',
    icon: 'i-lucide-building',
    to: '/departments',
    emergency: false,
  },
  {
    title: 'Emergency care',
    detail: 'Our emergency department is open 24/7. Call 112 for a life-threatening emergency.',
    cta: 'Emergency information',
    icon: 'i-lucide-circle-alert',
    to: '/emergency',
    emergency: true,
  },
])
</script>
