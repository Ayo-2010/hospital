<template>
  <section class="section bg-slate-950 dark:bg-slate-950" aria-labelledby="stats-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-4">By the Numbers</span>
        <h2 id="stats-heading" class="text-3xl sm:text-4xl font-display font-bold text-white">
          A Hospital Built on Care
        </h2>
        <p class="mt-4 text-lg text-slate-300">
          Our commitment to exceptional healthcare is reflected in every metric.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
        <AboutStatCard
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
          :icon="stat.icon"
          :color="stat.color"
        />
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="rounded-2xl overflow-hidden border border-slate-700">
          <img class="h-64 w-full object-cover" src="https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Patient room" width="400" height="250" loading="lazy" />
          <div class="bg-slate-800 p-4">
            <h3 class="font-display text-lg font-semibold text-white">Comfortable Patient Rooms</h3>
            <p class="mt-1 text-sm text-slate-400">Designed for recovery and comfort</p>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden border border-slate-700">
          <img class="h-64 w-full object-cover" src="https://images.pexels.com/photos/4386479/pexels-photo-4386479.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Medical team" width="400" height="250" loading="lazy" />
          <div class="bg-slate-800 p-4">
            <h3 class="font-display text-lg font-semibold text-white">Collaborative Care Teams</h3>
            <p class="mt-1 text-sm text-slate-400">Multidisciplinary specialists working together</p>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden border border-slate-700">
          <img class="h-64 w-full object-cover" src="https://images.pexels.com/photos/5325833/pexels-photo-535833.jpg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Doctor examining patient" width="400" height="250" loading="lazy" />
          <div class="bg-slate-800 p-4">
            <h3 class="font-display text-lg font-semibold text-white">Personalized Care</h3>
            <p class="mt-1 text-sm text-slate-400">Every patient receives individual attention</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutStatCard from './AboutStatCard.vue'

const stats = [
  { value: '25+', label: 'Years Serving', icon: 'i-lucide-calendar', color: 'medical' },
  { value: '50,000+', label: 'Patients Served', icon: 'i-lucide-users', color: 'healing' },
  { value: '200+', label: 'Medical Staff', icon: 'i-lucide-user-round', color: 'warm' },
  { value: '15+', label: 'Specialties', icon: 'i-lucide-building-2', color: 'emergency' },
  { value: '98%', label: 'Patient Satisfaction', icon: 'i-lucide-heart', color: 'healing' },
  { value: '4.9/5', label: 'Google Rating', icon: 'i-lucide-star', color: 'warm' },
  { value: '12 min', label: 'Avg ER Wait', icon: 'i-lucide-clock', color: 'emergency' },
  { value: 'Level 1', label: 'Trauma Center', icon: 'i-lucide-badge-check', color: 'medical' },
]
</script>