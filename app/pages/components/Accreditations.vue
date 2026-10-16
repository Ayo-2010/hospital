<template>
  <section class="section" aria-labelledby="accreditations-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-10 animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-3">Quality & Safety</span>
        <h2 id="accreditations-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Accreditations & Certifications
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Recognized for meeting the highest national standards in healthcare quality and patient safety.
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
  { name: 'The Joint Commission', description: 'Gold Seal of Approval', icon: 'i-lucide-award', year: '2024' },
  { name: 'Magnet Recognition', description: 'Nursing Excellence', icon: 'i-lucide-medal', year: '2023' },
  { name: 'CMS 5-Star Rating', description: 'Overall Hospital Quality', icon: 'i-lucide-star', year: '2024' },
  { name: 'Leapfrog Grade A', description: 'Patient Safety', icon: 'i-lucide-shield-check', year: '2024' },
  { name: 'HIPAA Compliant', description: 'Privacy & Security', icon: 'i-lucide-lock', year: '2024' },
]
</script>