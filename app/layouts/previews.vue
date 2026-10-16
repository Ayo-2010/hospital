<script setup lang="ts">
import PreviewFooter from '~/components/preview/PreviewFooter.vue'
import PreviewHeader from '~/components/preview/PreviewHeader.vue'


const route = useRoute()
const direction = computed(() => route.path.split('/')[2] || 'care-gateway')
const basePath = computed(() => `/previews/${direction.value}`)
const page = computed<'home' | 'doctors' | 'booking'>(() => route.path.endsWith('/doctors') ? 'doctors' : route.path.includes('/appointments/') ? 'booking' : 'home')
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800 antialiased">
    <PreviewHeader :direction="direction" :active-page="page" :base-path="basePath" />
    <slot />
    <PreviewFooter :direction="direction" :base-path="basePath" />
  </div>
</template>
