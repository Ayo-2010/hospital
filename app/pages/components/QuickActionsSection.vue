<template>
  <section class="section bg-slate-50 dark:bg-slate-900/30" aria-labelledby="quick-actions-heading">
    <div class="container-main">
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <QuickActionCard
          v-for="action in quickActions"
          :key="action.label"
          :icon="action.icon"
          :label="action.label"
          :to="action.to"
          :color="action.color"
          :badge="action.badge"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import QuickActionCard from './QuickActionCard.vue'

const quickActions = [
  { label: 'Find a Doctor', to: '/doctors', icon: 'i-lucide-user-round-search', color: 'medical', badge: 'New' },
  { label: 'Book Appointment', to: '/appointments/book', icon: 'i-lucide-calendar-plus', color: 'medical', badge: 'Popular' },
  { label: 'Emergency Care', to: '/emergency', icon: 'i-lucide-heart-pulse', color: 'emergency' },
  { label: 'Patient Portal', to: '/auth/login', icon: 'i-lucide-log-in', color: 'healing' },
  { label: 'Departments', to: '/departments', icon: 'i-lucide-building-2', color: 'medical' },
  { label: 'Pay Bill', to: '/billing', icon: 'i-lucide-credit-card', color: 'warm' },
]
</script>