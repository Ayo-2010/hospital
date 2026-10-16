<script setup lang="ts">
import PreviewFooter from './PreviewFooter.vue'
import PreviewHeader from './PreviewHeader.vue'

const props = defineProps<{ activePage: 'home' | 'doctors' | 'booking' }>()
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800 antialiased">
    <PreviewHeader direction="care-gateway" :active-page="props.activePage" base-path="" />
    <slot />
    <PreviewFooter direction="care-gateway" base-path="" />
  </div>
</template>
