<template>
  <section class="section-sm bg-emergency-50 dark:bg-emergency-900/20 border-y border-emergency-200 dark:border-emergency-800" aria-labelledby="emergency-actions-heading">
    <div class="container-main">
      <h2 id="emergency-actions-heading" class="sr-only">Emergency Quick Actions</h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <EmergencyActionCard
          v-for="action in actions"
          :key="action.label"
          :label="action.label"
          :description="action.description"
          :icon="action.icon"
          :href="action.href"
          :color="action.color"
          :primary="action.primary"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EmergencyActionCard from './EmergencyActionCard.vue'

const actions = [
  { label: 'Call 911', description: 'Life-threatening emergencies', icon: 'i-lucide-phone', href: 'tel:911', color: 'emergency', primary: true },
  { label: 'Ambulance', description: 'Emergency medical transport', icon: 'i-lucide-truck', href: 'tel:+11234567890', color: 'emergency', primary: false },
  { label: 'ER Directions', description: 'Get directions to our ER', icon: 'i-lucide-map-pin', href: '/emergency#directions', color: 'medical', primary: false },
  { label: 'Wait Times', description: 'Current ER wait: 12 min', icon: 'i-lucide-clock', href: '/emergency#wait-times', color: 'healing', primary: false },
]
</script>