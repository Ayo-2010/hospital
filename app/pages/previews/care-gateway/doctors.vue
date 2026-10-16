<script setup lang="ts">
import CareGatewayDoctors from '~/components/preview/doctors/CareGatewayDoctors.vue'
definePageMeta({ layout: 'previews' })
useHead({ title: 'Find a doctor · Care gateway preview' })
</script>
<template><CareGatewayDoctors basePath="/previews/care-gateway" /></template>
