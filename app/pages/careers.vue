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
import CareersHero from '~/components/site/CareersHero.vue'
import CareersBenefits from '~/components/site/CareersBenefits.vue'
import CareersJobs from '~/components/site/CareersJobs.vue'
import CTASection from '~/components/site/CTASection.vue'

useHead({ title: 'Careers | MedCore Hospital' })
</script>
