<template>
  <div     class="card-interactive text-center group animate-fade-in animate-slide-up" :style="{ animationDelay: `${delay}ms` }">
    <div class="flex h-14 w-14 items-center justify-center rounded-xl mx-auto mb-4 bg-medical-100 dark:bg-medical-900/40 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300">
      <Icon :name="icon" class="h-7 w-7 text-medical-600 dark:text-medical-400 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 class="font-semibold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
    <p class="text-sm text-slate-600 dark:text-slate-400">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon: string
  delay: number
}>()
</script>
