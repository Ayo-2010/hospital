<template>
  <div class="space-y-1">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-white">{{ title }}</h1>
    <p v-if="description" class="text-slate-600 dark:text-slate-400">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>
