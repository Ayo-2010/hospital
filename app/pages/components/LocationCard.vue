<template>
  <NuxtLink :to="`/locations/${name.toLowerCase().replace(/\s+/g, '-')}`" class="card-interactive group overflow-hidden flex flex-col">
    <div class="relative aspect-video overflow-hidden">
      <img :src="image" :alt="name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div class="absolute top-3 left-3">
        <span v-if="isMain" class="badge badge-medical">Main Campus</span>
      </div>
      <div class="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
        <span class="btn-primary text-sm px-4 py-2">Get Directions</span>
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <h3 class="font-semibold text-slate-900 dark:text-white">{{ name }}</h3>
      <address class="mt-2 text-sm text-slate-600 dark:text-slate-400 not-italic mb-3">{{ address }}</address>
      <div class="space-y-1 text-sm text-slate-600 dark:text-slate-400 mb-3">
        <a :href="`tel:${phone.replace(/\D/g, '')}`" class="flex items-center gap-2 hover:text-medical-600 dark:hover:text-medical-400 transition-colors">
          <Icon name="i-lucide-phone" class="h-4 w-4" />
          {{ phone }}
        </a>
        <div class="flex items-center gap-2">
          <Icon name="i-lucide-clock" class="h-4 w-4" />
          <span>{{ hours.split('\n')[0] }}</span>
        </div>
      </div>
      <div class="mt-auto flex flex-wrap gap-1.5">
        <span v-for="service in services" :key="service" class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ service }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  address: string
  phone: string
  hours: string
  services: string[]
  image: string
  isMain: boolean
}>()
</script>
