<template>
  <section class="section bg-slate-50 dark:bg-slate-900/30" aria-labelledby="technology-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-10 animate-fade-in animate-slide-up">
        <h2 id="technology-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Advanced Surgical Technology
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Investing in the latest technology for precision, safety, and better outcomes.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TechCard
          v-for="tech in technologies"
          :key="tech.title"
          :title="tech.title"
          :description="tech.description"
          :icon="tech.icon"
          :color="tech.color"
          :benefits="tech.benefits"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechCard from './TechCard.vue'

const technologies = [
  {
    title: 'Da Vinci Xi Robotic System',
    description: 'Next-generation robotic platform for minimally invasive surgery with enhanced 3D visualization and wristed instruments.',
    icon: 'i-lucide-cpu',
    color: 'medical',
    benefits: ['Smaller incisions', 'Less pain', 'Faster recovery', 'Greater precision'],
  },
  {
    title: 'Intraoperative MRI',
    description: 'Real-time imaging during brain and spine surgery for maximal tumor resection and precision.',
    icon: 'i-lucide-magnet',
    color: 'healing',
    benefits: ['Real-time guidance', 'Complete resection', 'Reduced reoperation', 'Better outcomes'],
  },
  {
    title: 'Surgical Navigation',
    description: 'GPS-like guidance for spine, brain, and ENT procedures with sub-millimeter accuracy.',
    icon: 'i-lucide-navigation',
    color: 'warm',
    benefits: ['Precise targeting', 'Minimally invasive', 'Reduced radiation', 'Complex cases'],
  },
  {
    title: 'Enhanced Recovery (ERAS)',
    description: 'Evidence-based perioperative protocols reducing complications and accelerating recovery.',
    icon: 'i-lucide-trending-up',
    color: 'emergency',
    benefits: ['Shorter hospital stay', 'Less pain', 'Faster return home', 'Lower complications'],
  },
]
</script>