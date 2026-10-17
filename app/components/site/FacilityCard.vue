<template>
  <article class="flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-card">
    <div class="aspect-video overflow-hidden rounded-xl bg-slate-100">
      <img :src="image" :alt="title" class="h-full w-full object-cover" loading="lazy" />
    </div>

    <div class="mt-4 flex flex-1 flex-col">
      <h3 class="font-display text-lg font-semibold text-slate-950">{{ title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-6 text-slate-600">{{ description }}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="feature in features" :key="feature" class="badge-slate">{{ feature }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  features: string[]
}>()
</script>
