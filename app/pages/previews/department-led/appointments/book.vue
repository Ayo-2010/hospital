<script setup lang="ts">
import AppointmentRequestForm from '~/components/preview/AppointmentRequestForm.vue'
import type { PreviewDirection } from '~/types/preview'
definePageMeta({ layout: 'previews' })
useHead({ title: 'Request an appointment · Department-led preview' })
const direction: PreviewDirection = 'department-led'
</script>
<template><AppointmentRequestForm :direction="direction" /></template>
