<template>
  <CareGatewayDoctors basePath="" />
</template>

<script setup lang="ts">
import CareGatewayDoctors from '~/components/preview/doctors/CareGatewayDoctors.vue'

definePageMeta({ layout: 'public' })
useHead({ title: 'Find a Doctor | MedCore Hospital' })
</script>
