<template>
  <div>
    <FAQHero />
    <FAQCategories />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
import FAQHero from './components/FAQHero.vue'
import FAQCategories from './components/FAQCategories.vue'
import CTASection from './components/CTASection.vue'

useHead({ title: 'Frequently Asked Questions - MedCore HMS' })
</script>
