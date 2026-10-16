<template>
  <section class="section bg-slate-950 dark:bg-slate-950" aria-labelledby="testimonials-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-4" style="background: rgba(14, 165, 233, 0.2); color: #38bdf8; border-color: rgba(14, 165, 233, 0.3)">Patient Stories</span>
        <h2 id="testimonials-heading" class="text-3xl sm:text-4xl font-display font-bold text-white">
          Trusted by Our Community
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Real experiences from patients who received exceptional care at MedCore HMS.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :quote="testimonial.quote"
          :author="testimonial.author"
          :role="testimonial.role"
          :image="testimonial.image"
          :rating="testimonial.rating"
          :department="testimonial.department"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue'

const testimonials = [
  {
    id: '1',
    quote: "The care I received in the ER was outstanding. From the moment I arrived, the team was professional, compassionate, and efficient. Dr. Johnson took the time to explain everything and made sure I was comfortable. I'm grateful for the excellent care.",
    author: 'Maria Gonzalez',
    role: 'Cardiology Patient',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
    rating: 5,
    department: 'Emergency / Cardiology',
  },
  {
    id: '2',
    quote: "My daughter's pediatrician, Dr. Davis, is amazing. She's patient, thorough, and genuinely cares about her young patients. The whole staff makes visits stress-free for both kids and parents. We wouldn't go anywhere else.",
    author: 'James & Lisa Thompson',
    role: 'Pediatrics Patients',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    department: 'Pediatrics',
  },
  {
    id: '3',
    quote: "After my knee replacement surgery, the recovery process was smoother than I expected. The orthopedic team, physical therapists, and nursing staff were all incredible. I'm back to hiking and playing with my grandkids. Thank you!",
    author: 'Robert Anderson',
    role: 'Orthopedic Surgery Patient',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    department: 'Orthopedics / Surgery',
  },
]
</script>