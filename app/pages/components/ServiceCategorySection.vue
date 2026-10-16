<template>
  <div class="animate-fade-in animate-slide-up">
    <div class="flex items-center gap-3 mb-6">
      <div class="flex h-12 w-12 items-center justify-center rounded-xl" :class="iconBgClass">
        <Icon :name="icon" class="h-6 w-6 text-white" />
      </div>
      <div>
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white">{{ title }}</h2>
        <p class="text-slate-600 dark:text-slate-400">{{ description }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceItemCard
        v-for="service in services"
        :key="service.name"
        :name="service.name"
        :description="service.description"
        :icon="service.icon"
        :color="color"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ServiceItemCard from './ServiceItemCard.vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
  services: { name: string; description: string; icon: string }[]
}>()

const iconBgClass = computed(() => ({
  medical: 'bg-medical-500',
  healing: 'bg-healing-500',
  emergency: 'bg-emergency-500',
  warm: 'bg-warm-500',
}[props.color]))
</script>
