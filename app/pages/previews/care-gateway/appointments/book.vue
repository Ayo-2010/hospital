<script setup lang="ts">
import AppointmentRequestForm from '~/components/preview/AppointmentRequestForm.vue'
import type { PreviewDirection } from '~/types/preview'
definePageMeta({ layout: 'previews' })
useHead({ title: 'Request an appointment · Care gateway preview' })
const direction: PreviewDirection = 'care-gateway'
</script>
<template><AppointmentRequestForm :direction="direction" /></template>
