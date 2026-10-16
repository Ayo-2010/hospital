<script setup lang="ts">
import AppointmentRequestForm from '~/components/preview/AppointmentRequestForm.vue'
import type { PreviewDirection } from '~/types/preview'
definePageMeta({ layout: 'previews' })
useHead({ title: 'Request an appointment · Clinician-first preview' })
const direction: PreviewDirection = 'clinician-first'
</script>
<template><AppointmentRequestForm :direction="direction" /></template>
