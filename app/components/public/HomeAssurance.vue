<template>
  <section class="bg-medical-900 text-white" aria-labelledby="home-assurance-title">
    <div class="container-main grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-medical-300">Why MedCore</p>
        <h2 id="home-assurance-title" class="mt-3 text-white">Care you can count on</h2>
        <p class="mt-4 max-w-xl text-base leading-7 text-medical-100">
          One connected team across emergency, surgery, diagnostics and outpatient care — so your
          records, clinicians and follow-up stay in step from the first visit onwards.
        </p>

        <ul class="mt-7 space-y-3.5">
          <li v-for="point in points" :key="point" class="flex items-start gap-3 text-sm leading-6 text-medical-50">
            <Icon name="i-lucide-check" class="mt-0.5 h-4.5 w-4.5 shrink-0 text-healing-400" aria-hidden="true" />
            {{ point }}
          </li>
        </ul>
      </div>

      <dl class="grid grid-cols-2 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur"
        >
          <dt class="text-sm text-medical-100">{{ stat.label }}</dt>
          <dd class="mt-1 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>

  <section class="border-b border-slate-200 bg-white" aria-label="Accreditations and assurances">
    <div class="container-main grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="badge in accreditations" :key="badge.label" class="flex items-center gap-3">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-medical-700">
          <Icon :name="badge.icon" class="h-5 w-5" aria-hidden="true" />
        </span>
        <div class="text-sm leading-5">
          <p class="font-semibold text-slate-900">{{ badge.label }}</p>
          <p class="text-slate-500">{{ badge.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  'Specialists across 14 departments and clinics',
  'One secure record shared across every care team',
  'Same-day and next-day appointment options',
  'Clear cost estimates before most procedures',
]

const stats = [
  { value: '60+', label: 'Physicians & specialists' },
  { value: '24/7', label: 'Emergency department' },
  { value: '12', label: 'Operating suites' },
  { value: '98%', label: 'Patient satisfaction' },
]

const accreditations = [
  { label: 'JCI accredited', detail: 'Accredited hospital', icon: 'i-lucide-award' },
  { label: 'NDPR compliant', detail: 'Protected health data', icon: 'i-lucide-shield-check' },
  { label: 'MDCN registered', detail: 'Licensed practitioners', icon: 'i-lucide-medal' },
  { label: 'Most HMOs accepted', detail: 'Transparent billing', icon: 'i-lucide-credit-card' },
]
</script>
