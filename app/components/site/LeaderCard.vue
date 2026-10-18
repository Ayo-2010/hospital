<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-card">
    <div class="aspect-square overflow-hidden bg-slate-100">
      <img
        :src="image"
        :alt="`Portrait of ${name}`"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="400"
        height="400"
        loading="lazy"
        decoding="async"
      >
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">{{ name }}</h3>
      <p class="mt-1 text-sm font-medium text-medical-800">{{ title }}</p>
      <div class="mt-3">
        <span class="badge-medical">{{ specialty }}</span>
      </div>
      <p class="mt-4 flex-1 text-sm leading-6 text-slate-600">{{ bio }}</p>
      <NuxtLink v-if="to" :to="to" class="link mt-5 inline-flex items-center gap-2 text-sm">
        View Profile
        <Icon name="i-lucide-chevron-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  title: string
  image: string
  bio: string
  specialty: string
  /** Profile page for this leader, when they also appear in a directory. */
  to?: string
}>()
</script>
