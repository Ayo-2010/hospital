<template>
  <section class="section bg-slate-950 dark:bg-slate-950" aria-labelledby="stats-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 animate-fade-in animate-slide-up">
        <h2 id="stats-heading" class="text-3xl sm:text-4xl font-display font-bold text-white">
          Trusted by Thousands
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Our numbers reflect our commitment to exceptional patient care and clinical excellence.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
        <StatCard
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
          :icon="stat.icon"
          :color="stat.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StatCard from './StatCard.vue'

const stats = [
  { value: '50,000+', label: 'Patients Served', icon: 'i-lucide-users', color: 'medical' },
  { value: '200+', label: 'Medical Professionals', icon: 'i-lucide-user-round', color: 'healing' },
  { value: '15+', label: 'Specialized Departments', icon: 'i-lucide-building-2', color: 'warm' },
  { value: '25+', label: 'Years of Excellence', icon: 'i-lucide-award', color: 'emergency' },
]
</script>