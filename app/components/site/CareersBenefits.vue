<template>
  <section class="section bg-slate-50" aria-labelledby="benefits-heading">
    <div class="container-main">
      <div class="mx-auto mb-10 max-w-2xl text-center animate-slide-up">
        <p class="eyebrow">Benefits</p>
        <h2 id="benefits-heading" class="mt-3">Why Choose MedCore Hospital</h2>
        <p class="mt-4 text-base leading-7 text-slate-600">
          We invest in our people so they can invest in our patients.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <BenefitCard
          v-for="benefit in benefits"
          :key="benefit.title"
          :title="benefit.title"
          :description="benefit.description"
          :icon="benefit.icon"
        />
      </div>

      <div class="mt-12 rounded-2xl bg-medical-900 px-6 py-10 text-center sm:px-12 sm:py-12 animate-slide-up stagger-2">
        <h3 class="text-white">Ready to Make an Impact?</h3>
        <p class="mx-auto mt-3 max-w-xl text-base leading-7 text-medical-100">
          Explore our current openings and find your place on our team.
        </p>
        <NuxtLink to="#open-positions" class="btn btn-lg mt-6 bg-white text-medical-800 hover:bg-medical-50">
          View All Positions
          <Icon name="i-lucide-arrow-right" class="h-5 w-5" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BenefitCard from './BenefitCard.vue'

const benefits = [
  { title: 'Competitive Compensation', description: 'Market-leading salaries with annual reviews, performance bonuses, and shift differentials.', icon: 'i-lucide-dollar-sign' },
  { title: 'Comprehensive Benefits', description: 'Medical, dental, vision, life insurance, 401(k) with match, and generous PTO starting day one.', icon: 'i-lucide-shield-check' },
  { title: 'Professional Growth', description: 'Tuition reimbursement, certification support, leadership development, and clear career pathways.', icon: 'i-lucide-graduation-cap' },
  { title: 'Work-Life Balance', description: 'Flexible scheduling, self-scheduling options, wellness programs, and employee assistance program.', icon: 'i-lucide-heart-handshake' },
  { title: 'Cutting-Edge Technology', description: 'Work with the latest medical technology, EHR systems, and innovation lab opportunities.', icon: 'i-lucide-cpu' },
  { title: 'Magnet Recognition', description: 'ANCC Magnet-recognized for nursing excellence - a testament to our supportive culture.', icon: 'i-lucide-award' },
  { title: 'Diversity & Inclusion', description: 'Commitment to equity with employee resource groups, bias training, and inclusive policies.', icon: 'i-lucide-users' },
  { title: 'Community Impact', description: 'Volunteer opportunities, community health initiatives, and global health partnerships.', icon: 'i-lucide-globe' },
]
</script>
