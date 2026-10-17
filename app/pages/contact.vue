<template>
  <div>
    <ContactHero />
    <ContactContent />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
import ContactHero from '~/components/site/ContactHero.vue'
import ContactContent from '~/components/site/ContactContent.vue'
import CTASection from '~/components/site/CTASection.vue'

useHead({ title: 'Contact Us | MedCore Hospital' })
</script>
