<template>
  <section id="mission" class="section" aria-labelledby="mission-heading">
    <div class="container-main">
      <div class="mx-auto mb-12 max-w-2xl text-center animate-fade-in animate-slide-up">
        <p class="eyebrow">Our Foundation</p>
        <h2 id="mission-heading" class="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Mission, Vision &amp; Values
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600">
          Guiding principles that shape every decision and interaction at MedCore Hospital.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <MissionCard
          v-for="item in missionItems"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :color="item.color"
        />
      </div>

      <hr class="mt-16 border-slate-200">

      <div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <ValueCard
          v-for="(value, index) in values"
          :key="value.title"
          :title="value.title"
          :description="value.description"
          :icon="value.icon"
          :class="`stagger-${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MissionCard from './MissionCard.vue'
import ValueCard from './ValueCard.vue'

type AccentColor = 'medical' | 'healing' | 'warm'

const missionItems: { title: string; description: string; icon: string; color: AccentColor }[] = [
  {
    title: 'Our Mission',
    description: 'To provide accessible, high-quality healthcare services with compassion and integrity, improving the health and well-being of every individual in our community.',
    icon: 'i-lucide-heart-handshake',
    color: 'medical',
  },
  {
    title: 'Our Vision',
    description: 'To be the leading healthcare provider known for excellence, innovation, and patient-centred care, setting the standard for clinical quality and compassionate service.',
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
