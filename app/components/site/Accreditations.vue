<template>
  <section class="section" aria-labelledby="accreditations-heading">
    <div class="container-main">
      <div class="mx-auto mb-10 max-w-2xl text-center animate-fade-in animate-slide-up">
        <p class="eyebrow">Quality &amp; Safety</p>
        <h2 id="accreditations-heading" class="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Accreditations &amp; Certifications
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600">
          Recognised for meeting the highest national and international standards in healthcare quality and patient safety.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        <AccreditationCard
          v-for="accred in accreditations"
          :key="accred.name"
          :name="accred.name"
          :description="accred.description"
          :icon="accred.icon"
          :year="accred.year"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AccreditationCard from './AccreditationCard.vue'

const accreditations = [
  { name: 'Joint Commission International', description: 'Gold Seal of Approval', icon: 'i-lucide-award', year: '2024' },
  { name: 'MDCN registered', description: 'Licensed practitioners', icon: 'i-lucide-medal', year: '2023' },
  { name: 'ISO 9001:2015', description: 'Quality management', icon: 'i-lucide-star', year: '2024' },
  { name: 'COHSASA accredited', description: 'Patient safety', icon: 'i-lucide-shield-check', year: '2024' },
  { name: 'NDPR compliant', description: 'Privacy & security', icon: 'i-lucide-lock', year: '2024' },
]
</script>
