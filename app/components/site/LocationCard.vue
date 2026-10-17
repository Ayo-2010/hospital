<template>
  <article class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-card">
    <div class="relative aspect-video overflow-hidden bg-slate-100">
      <img
        :src="image"
        :alt="`${name} — exterior view`"
        class="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      >
      <span v-if="isMain" class="badge-medical absolute left-3 top-3 shadow-soft">
        <Icon name="i-lucide-building" class="h-3.5 w-3.5" aria-hidden="true" />
        Main campus
      </span>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">
        <NuxtLink v-if="link" :to="link" class="hover:text-medical-800">
          {{ name }}
        </NuxtLink>
        <template v-else>{{ name }}</template>
      </h3>

      <address class="mt-2 text-sm not-italic leading-6 text-slate-600">
        <span v-for="(line, index) in addressLines" :key="index" class="block">{{ line }}</span>
      </address>

      <div class="mt-4 space-y-2 text-sm text-slate-600">
        <a :href="`tel:${phone.replace(/\D/g, '')}`" class="link inline-flex items-center gap-2">
          <Icon name="i-lucide-phone" class="h-4 w-4 text-medical-700" aria-hidden="true" />
          {{ phone }}
        </a>
        <div class="flex items-start gap-2">
          <Icon name="i-lucide-clock" class="mt-0.5 h-4 w-4 shrink-0 text-medical-700" aria-hidden="true" />
          <span>
            <span v-for="(line, index) in hoursLines" :key="index" class="block">{{ line }}</span>
          </span>
        </div>
      </div>

      <ul v-if="services.length" class="mt-5 flex flex-1 flex-wrap content-start gap-1.5">
        <li
          v-for="service in services"
          :key="service"
          class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
        >
          {{ service }}
        </li>
      </ul>

      <NuxtLink v-if="link" :to="link" class="link mt-5 inline-flex items-center gap-1.5 text-sm">
        View location
        <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  address: string
  phone: string
  hours: string
  services: string[]
  image: string
  isMain?: boolean
  link?: string
}>()

const addressLines = computed(() => props.address.split('\n').filter(Boolean))
const hoursLines = computed(() => props.hours.split('\n').filter(Boolean))
</script>
