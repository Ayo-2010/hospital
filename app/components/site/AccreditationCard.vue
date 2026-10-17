<template>
  <div class="card-interactive text-center">
    <span class="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-healing-50 text-healing-700">
      <Icon :name="icon" class="h-7 w-7" aria-hidden="true" />
    </span>
    <h3 class="mt-4 font-display text-base font-semibold tracking-tight text-slate-950">{{ name }}</h3>
    <p class="mt-1 text-sm leading-6 text-slate-600">{{ description }}</p>
    <span class="badge-healing mt-3">Accredited {{ year }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  description: string
  icon: string
  year: string
}>()
</script>
