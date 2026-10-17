<template>
  <article class="flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-card">
    <div class="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
      <img :src="image" :alt="name" class="h-full w-full object-cover" loading="lazy" />
    </div>

    <div class="mt-4 flex flex-1 flex-col">
      <h3 class="font-display text-lg font-semibold text-slate-950">{{ name }}</h3>
      <p class="mt-0.5 text-sm font-medium text-medical-800">{{ title }}</p>

      <div class="mt-3">
        <span class="badge-medical">{{ specialty }}</span>
      </div>

      <p class="mt-3 text-sm leading-6 text-slate-600">{{ experience }} experience</p>
      <p class="mt-2 text-sm leading-6 text-slate-600">{{ bio }}</p>

      <NuxtLink
        v-if="slug"
        :to="`/nurses/${slug}`"
        class="link mt-4 inline-flex items-center gap-1 text-sm"
      >
        View profile
        <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  title: string
  specialty: string
  image: string
  experience: string
  bio: string
  slug?: string
}>()
</script>
