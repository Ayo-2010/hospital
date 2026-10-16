<template>
  <div>
    <ContactHero />
    <ContactContent />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
import ContactHero from './components/ContactHero.vue'
import ContactContent from './components/ContactContent.vue'
import CTASection from './components/CTASection.vue'

useHead({ title: 'Contact Us - MedCore HMS' })
</script>