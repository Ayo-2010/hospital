<template>
  <div class="card-interactive text-center animate-fade-in animate-slide-up">
    <span class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
      <Icon :name="icon" class="h-6 w-6" aria-hidden="true" />
    </span>
    <h3 class="mt-4 font-display text-base font-semibold tracking-tight text-slate-950">{{ title }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>
