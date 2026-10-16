<template>
  <section class="section" aria-labelledby="doctors-heading">
    <div class="container-main">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 animate-fade-in animate-slide-up">
        <div>
          <span class="inline-block badge-medical mb-3">Our Specialists</span>
          <h2 id="doctors-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Meet Our Expert Physicians
          </h2>
          <p class="mt-2 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            Board-certified specialists dedicated to providing personalized, compassionate care.
          </p>
        </div>
        <NuxtLink to="/doctors" class="btn-secondary self-start">
          View All Doctors
          <Icon name="i-lucide-chevron-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DoctorPreviewCard
          v-for="doctor in doctors"
          :key="doctor.id"
          :name="doctor.name"
          :specialization="doctor.specialization"
          :image="doctor.image"
          :rating="doctor.rating"
          :reviewCount="doctor.reviewCount"
          :experience="doctor.experience"
          :languages="doctor.languages"
          :nextAvailable="doctor.nextAvailable"
          :slug="doctor.slug"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DoctorPreviewCard from './DoctorPreviewCard.vue'

const doctors = [
  { id: '1', name: 'Dr. Sarah Johnson', specialization: 'Cardiology', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80', rating: 4.9, reviewCount: 287, experience: '15 years', languages: ['English', 'Spanish'], nextAvailable: 'Tomorrow 10:00 AM', slug: 'sarah-johnson' },
  { id: '2', name: 'Dr. Michael Chen', specialization: 'Neurology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.8, reviewCount: 194, experience: '12 years', languages: ['English', 'Mandarin'], nextAvailable: 'Today 2:00 PM', slug: 'michael-chen' },
  { id: '3', name: 'Dr. Emily Davis', specialization: 'Pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.9, reviewCount: 312, experience: '10 years', languages: ['English'], nextAvailable: 'Tomorrow 9:00 AM', slug: 'emily-davis' },
]
</script>