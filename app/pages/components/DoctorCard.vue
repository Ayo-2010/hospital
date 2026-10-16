<template>
  <div class="card-interactive group overflow-hidden flex flex-col">
    <div class="relative aspect-square overflow-hidden">
      <img :src="doctor.image" :alt="doctor.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div class="absolute top-3 right-3">
        <span v-if="doctor.acceptsNew" class="badge badge-healing">Accepting New Patients</span>
        <span v-else class="badge badge-warm">Not Accepting New Patients</span>
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <NuxtLink :to="`/doctors/${doctor.slug}`" class="btn-primary w-full text-center text-sm py-2">
          View Profile & Book
        </NuxtLink>
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <div class="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 class="font-semibold text-slate-900 dark:text-white">{{ doctor.name }}</h3>
          <p class="text-sm text-medical-600 dark:text-medical-400 font-medium">{{ doctor.specialization }}</p>
        </div>
        <div class="flex items-center gap-1 text-warm-500">
          <Icon name="i-lucide-star" class="h-4 w-4 fill-current" />
          <span class="text-sm font-semibold">{{ doctor.rating }}</span>
          <span class="text-xs text-slate-500">({{ doctor.reviewCount }})</span>
        </div>
      </div>
      <div class="mb-3 flex flex-wrap gap-2 text-xs">
        <span class="px-2 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ doctor.experience }}</span>
        <span class="px-2 py-1 rounded-full bg-medical-100 text-medical-700 dark:bg-medical-900/40 dark:text-medical-300">{{ doctor.location }}</span>
        <span v-for="lang in doctor.languages" :key="lang" class="px-2 py-1 rounded-full bg-healing-100 text-healing-700 dark:bg-healing-900/40 dark:text-healing-300">{{ lang }}</span>
      </div>
      <div class="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
        <div class="flex items-center gap-2 text-sm">
          <Icon name="i-lucide-calendar-clock" class="h-4 w-4 text-healing-600 dark:text-healing-400" />
          <span class="text-slate-600 dark:text-slate-400">Next available:</span>
          <span class="font-medium text-slate-900 dark:text-white">{{ doctor.nextAvailable }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  doctor: {
    id: string
    name: string
    specialization: string
    image: string
    rating: number
    reviewCount: number
    experience: string
    languages: string[]
    location: string
    nextAvailable: string
    acceptsNew: boolean
    slug: string
  }
}>()
</script>
