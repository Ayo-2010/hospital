<template>
  <section class="section" aria-labelledby="leadership-heading">
    <div class="container-main">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 animate-fade-in animate-slide-up">
        <div>
          <span class="inline-block badge-medical mb-3">Leadership Team</span>
          <h2 id="leadership-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Guiding Our Mission Forward
          </h2>
          <p class="mt-2 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            Experienced leaders committed to clinical excellence and compassionate care.
          </p>
        </div>
        <NuxtLink to="/about#leadership" class="btn-secondary self-start">
          View All Leaders
          <Icon name="i-lucide-chevron-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <LeaderCard
          v-for="leader in leaders"
          :key="leader.name"
          :name="leader.name"
          :title="leader.title"
          :image="leader.image"
          :bio="leader.bio"
          :specialty="leader.specialty"
        />
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <img class="h-48 w-full object-cover" src="https://images.pexels.com/photos/4386479/pexels-photo-4386479.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Medical team" width="400" height="200" loading="lazy" />
          <div class="p-4 bg-white dark:bg-slate-800">
            <h3 class="font-display font-semibold text-slate-900 dark:text-white">Team Collaboration</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Working together for better outcomes</p>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <img class="h-48 w-full object-cover" src="https://images.pexels.com/photos/5325833/pexels-photo-535833.jpg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Doctor examining patient" width="400" height="200" loading="lazy" />
          <div class="p-4 bg-white dark:bg-slate-800">
            <h3 class="font-display font-semibold text-slate-900 dark:text-white">Patient Care</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Personalized attention for every patient</p>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <img class="h-48 w-full object-cover" src="https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Patient room" width="400" height="200" loading="lazy" />
          <div class="p-4 bg-white dark:bg-slate-800">
            <h3 class="font-display font-semibold text-slate-900 dark:text-white">Healing Environment</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Designed for comfort and recovery</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LeaderCard from './LeaderCard.vue'

const leaders = [
  { name: 'Dr. Elizabeth Morgan', title: 'Chief Medical Officer', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80', bio: 'Board-certified internist with 20+ years in healthcare leadership. Champion of patient safety initiatives.', specialty: 'Internal Medicine' },
  { name: 'Dr. James Anderson', title: 'Chief of Surgery', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', bio: 'Pioneer in minimally invasive surgical techniques. Published 100+ peer-reviewed articles.', specialty: 'General Surgery' },
  { name: 'Dr. Patricia Chen', title: 'Chief Nursing Officer', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', bio: 'Advocate for nursing excellence and patient-centered care models. Magnet Recognition Program leader.', specialty: 'Nursing Administration' },
  { name: 'Dr. Robert Kim', title: 'Chief Innovation Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80', bio: 'Leads digital transformation and AI integration in clinical workflows. Former health tech entrepreneur.', specialty: 'Health Informatics' },
]
</script>