<template>
  <section class="section bg-slate-50 dark:bg-slate-900/30" aria-labelledby="benefits-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-10 animate-fade-in animate-slide-up">
        <h2 id="benefits-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Why Choose MedCore HMS
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
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
          :color="benefit.color"
        />
      </div>

      <div class="mt-12 p-8 rounded-2xl bg-gradient-to-r from-medical-600 to-medical-700 text-white animate-fade-in animate-slide-up stagger-2">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-2xl font-semibold mb-3">Ready to Make an Impact?</h3>
          <p class="text-medical-100 mb-6">Explore our current openings and find your place on our team.</p>
          <NuxtLink to="#open-positions" class="btn-secondary bg-white text-medical-700 hover:bg-medical-50 px-8 py-3">
            View All Positions
            <Icon name="i-lucide-arrow-right" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BenefitCard from './BenefitCard.vue'

const benefits = [
  { title: 'Competitive Compensation', description: 'Market-leading salaries with annual reviews, performance bonuses, and shift differentials.', icon: 'i-lucide-dollar-sign', color: 'healing' },
  { title: 'Comprehensive Benefits', description: 'Medical, dental, vision, life insurance, 401(k) with match, and generous PTO starting day one.', icon: 'i-lucide-shield-check', color: 'medical' },
  { title: 'Professional Growth', description: 'Tuition reimbursement, certification support, leadership development, and clear career pathways.', icon: 'i-lucide-graduation-cap', color: 'warm' },
  { title: 'Work-Life Balance', description: 'Flexible scheduling, self-scheduling options, wellness programs, and employee assistance program.', icon: 'i-lucide-heart-handshake', color: 'healing' },
  { title: 'Cutting-Edge Technology', description: 'Work with the latest medical technology, EHR systems, and innovation lab opportunities.', icon: 'i-lucide-cpu', color: 'medical' },
  { title: 'Magnet Recognition', description: 'ANCC Magnet-recognized for nursing excellence - a testament to our supportive culture.', icon: 'i-lucide-award', color: 'warm' },
  { title: 'Diversity & Inclusion', description: 'Commitment to equity with employee resource groups, bias training, and inclusive policies.', icon: 'i-lucide-users', color: 'healing' },
  { title: 'Community Impact', description: 'Volunteer opportunities, community health initiatives, and global health partnerships.', icon: 'i-lucide-globe', color: 'medical' },
]
</script>