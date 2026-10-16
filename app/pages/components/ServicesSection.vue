<template>
  <section class="section" aria-labelledby="services-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-4">Our Services</span>
        <h2 id="services-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Comprehensive Healthcare Services
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          From routine checkups to complex surgeries, our integrated services ensure seamless, coordinated care.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
          :image="service.image"
          :features="service.features"
          :to="service.to"
          :color="service.color"
        />
      </div>

      <div class="mt-10 text-center animate-fade-in animate-slide-up stagger-3">
        <NuxtLink to="/services" class="btn-secondary text-lg px-8 py-3">
          View All Services
          <Icon name="i-lucide-chevron-right" class="h-5 w-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from './ServiceCard.vue'

const services = [
  {
    title: 'Emergency Care',
    description: '24/7 Level 1 Trauma Center with board-certified emergency physicians and minimal wait times.',
    icon: 'i-lucide-heart-pulse',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
    features: ['Level 1 Trauma Center', 'Pediatric ER', 'Chest Pain Center', 'Stroke Center'],
    to: '/emergency',
    color: 'emergency' as const,
  },
  {
    title: 'Cardiology',
    description: 'Advanced heart and vascular care including interventional cardiology, electrophysiology, and cardiac surgery.',
    icon: 'i-lucide-heart',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
    features: ['Interventional Cardiology', 'Heart Rhythm Center', 'Cardiac Surgery', 'Heart Failure Clinic'],
    to: '/departments/cardiology',
    color: 'medical' as const,
  },
  {
    title: 'Surgery',
    description: 'Minimally invasive and robotic surgery across general, cardiac, orthopedic, and neurosurgical specialties.',
    icon: 'i-lucide-scissors',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80',
    features: ['Robotic Surgery', 'Minimally Invasive', 'Same-Day Surgery', 'Enhanced Recovery'],
    to: '/surgery',
    color: 'warm' as const,
  },
]
</script>