<template>
  <div>
    <CareersHero />
    <CareersBenefits />
    <CareersJobs />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
import CareersHero from './components/CareersHero.vue'
import CareersBenefits from './components/CareersBenefits.vue'
import CareersJobs from './components/CareersJobs.vue'
import CTASection from './components/CTASection.vue'

useHead({ title: 'Careers - MedCore HMS' })
</script>
