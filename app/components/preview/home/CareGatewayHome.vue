<script setup lang="ts">
/**
 * Care-gateway preview route. It reuses the production homepage sections,
 * pointing their internal links at the preview sub-tree.
 */
import HomePage from '~/components/public/HomePage.vue'

withDefaults(defineProps<{ basePath?: string }>(), { basePath: '/previews/care-gateway' })
</script>

<template>
  <HomePage :base-path="basePath" />
</template>
