<template>
  <div>
    <FAQHero />
    <FAQCategories />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })

import FAQHero from '~/components/site/FAQHero.vue'
import FAQCategories from '~/components/site/FAQCategories.vue'
import CTASection from '~/components/site/CTASection.vue'

useHead({ title: 'Frequently Asked Questions | MedCore Hospital' })
</script>
