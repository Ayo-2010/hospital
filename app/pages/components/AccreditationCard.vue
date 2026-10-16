<template>
  <div class="card-interactive text-center group">
    <div class="flex h-16 w-16 items-center justify-center rounded-xl mx-auto mb-4 bg-medical-100 dark:bg-medical-900/40 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300">
      <Icon :name="icon" class="h-8 w-8 text-medical-600 dark:text-medical-400 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 class="font-semibold text-slate-900 dark:text-white mb-1">{{ name }}</h3>
    <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">{{ description }}</p>
    <span class="text-xs px-2 py-1 rounded-full bg-medical-100 text-medical-700 dark:bg-medical-900/40 dark:text-medical-300">Accredited {{ year }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  description: string
  icon: string
  year: string
}>()
</script>
