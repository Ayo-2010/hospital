<template>
  <div class="flex items-center justify-between">
    <slot name="header">
      <div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">{{ title }}</h1>
        <p v-if="description" class="text-sm text-slate-600 dark:text-slate-400">{{ description }}</p>
      </div>
    </slot>
    <div v-if="$slots.actions" class="flex items-center gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>
