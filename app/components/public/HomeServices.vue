<template>
  <section class="border-y border-slate-200 bg-slate-50" aria-labelledby="home-services-title">
    <div class="container-main grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div class="max-w-md">
        <p class="eyebrow">Services &amp; facilities</p>
        <h2 id="home-services-title" class="mt-3">Everything your visit involves</h2>
        <p class="mt-3 text-base leading-7 text-slate-600">
          Practical information about the services, tests and support you may need — before, during
          and after your appointment.
        </p>
        <NuxtLink to="/services" class="btn-secondary mt-6">
          All medical services
          <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <NuxtLink
          v-for="service in services"
          :key="service.to"
          :to="service.to"
          class="group flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-medical-300 hover:bg-medical-50/40"
        >
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-medical-700 transition-colors group-hover:bg-white">
            <Icon :name="service.icon" class="h-5 w-5" aria-hidden="true" />
          </span>
          <span class="min-w-0">
            <span class="block text-sm font-semibold text-slate-900">{{ service.title }}</span>
            <span class="mt-0.5 block text-sm leading-5 text-slate-600">{{ service.detail }}</span>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { title: 'Laboratory & diagnostics', detail: 'Blood work, imaging and pathology.', icon: 'i-lucide-flask-conical', to: '/laboratory' },
  { title: 'Pharmacy', detail: 'Prescriptions and medication advice.', icon: 'i-lucide-pill', to: '/pharmacy' },
  { title: 'Surgery & procedures', detail: 'From consultation to recovery.', icon: 'i-lucide-scissors', to: '/surgery' },
  { title: 'Imaging & radiology', detail: 'X-ray, ultrasound, CT and MRI.', icon: 'i-lucide-scan', to: '/radiology' },
  { title: 'Locations & parking', detail: 'Find a campus and how to get there.', icon: 'i-lucide-map-pin', to: '/locations' },
  { title: 'Hospital facilities', detail: 'Rooms, amenities and visitor services.', icon: 'i-lucide-building', to: '/facilities' },
]
</script>
