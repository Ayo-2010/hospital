<template>
  <div class="flex gap-4">
    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-emergency-100 dark:bg-emergency-900/40 shrink-0">
      <span class="text-sm font-bold text-emergency-600 dark:text-emergency-400">{{ number }}</span>
    </div>
    <div>
      <div class="flex items-center gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-emergency-100 dark:bg-emergency-900/40">
          <Icon :name="icon" class="h-4 w-4 text-emergency-600 dark:text-emergency-400" />
        </div>
        <h4 class="font-semibold text-slate-900 dark:text-white">{{ title }}</h4>
      </div>
      <p class="mt-1 ml-11 text-sm text-slate-600 dark:text-slate-400">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  number: number
  title: string
  description: string
  icon: string
}>()
</script>
