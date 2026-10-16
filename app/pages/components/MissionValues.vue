<template>
  <section class="section" aria-labelledby="mission-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-4">Our Foundation</span>
        <h2 id="mission-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Mission, Vision & Values
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Guiding principles that shape every decision and interaction at MedCore Hospital.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <MissionCard
          v-for="(item, index) in missionItems"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :color="item.color"
          :delay="index * 100"
        />
      </div>

      <div class="mt-16 divider" />

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mt-16">
        <ValueCard
          v-for="(value, index) in values"
          :key="value.title"
          :title="value.title"
          :description="value.description"
          :icon="value.icon"
          :delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MissionCard from './MissionCard.vue'
import ValueCard from './ValueCard.vue'

const missionItems = [
  {
    title: 'Our Mission',
    description: 'To provide accessible, high-quality healthcare services with compassion and integrity, improving the health and well-being of every individual in our community.',
    icon: 'i-lucide-heart-handshake',
    color: 'medical',
  },
  {
    title: 'Our Vision',
    description: 'To be the leading healthcare provider known for excellence, innovation, and patient-centered care, setting the standard for clinical quality and compassionate service.',
    icon: 'i-lucide-eye',
    color: 'healing',
  },
  {
    title: 'Our Promise',
    description: 'Every patient deserves respect, dignity, and the highest standard of care. We promise to listen, to heal, and to never compromise on quality or safety.',
    icon: 'i-lucide-shield-check',
    color: 'warm',
  },
]

const values = [
  { title: 'Compassion', description: 'We treat every patient with empathy, kindness, and respect.', icon: 'i-lucide-heart' },
  { title: 'Excellence', description: 'We pursue the highest standards in clinical quality and safety.', icon: 'i-lucide-award' },
  { title: 'Innovation', description: 'We embrace new technologies and evidence-based practices.', icon: 'i-lucide-lightbulb' },
  { title: 'Integrity', description: 'We act with honesty, transparency, and ethical responsibility.', icon: 'i-lucide-shield' },
]
</script>