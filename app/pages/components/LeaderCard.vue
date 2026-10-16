<template>
  <div class="card-interactive group overflow-hidden flex flex-col">
    <div class="aspect-square relative overflow-hidden">
      <img :src="image" :alt="name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div class="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
        <span class="badge badge-medical">{{ specialty }}</span>
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <h3 class="font-semibold text-slate-900 dark:text-white">{{ name }}</h3>
      <p class="text-sm text-medical-600 dark:text-medical-400 font-medium mb-3">{{ title }}</p>
      <p class="text-sm text-slate-600 dark:text-slate-400 flex-1">{{ bio }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  title: string
  image: string
  bio: string
  specialty: string
}>()
</script>
