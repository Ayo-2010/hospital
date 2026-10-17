<template>
  <HomePage />
</template>

<script setup lang="ts">
import HomePage from '~/components/public/HomePage.vue'

definePageMeta({ layout: 'public' })
useHead({
  title: 'MedCore Hospital — Compassionate Care, Advanced Medicine',
  meta: [
    {
      name: 'description',
      content:
        'MedCore Hospital delivers compassionate, coordinated care — emergency, surgery, diagnostics and specialist clinics — with appointments you can book online.',
    },
  ],
})
</script>
