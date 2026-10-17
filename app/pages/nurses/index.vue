<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Nursing Team</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Our Nursing Team
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Compassionate, skilled nurses are the heart of MedCore Hospital. Meet the professionals
          who provide round-the-clock care to our patients.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NurseCard
          v-for="nurse in nurses"
          :key="nurse.id"
          :name="nurse.name"
          :title="nurse.title"
          :specialty="nurse.specialty"
          :image="nurse.image"
          :experience="nurse.experience"
          :bio="nurse.bio"
          :slug="nurse.slug"
        />
      </div>

      <section class="mt-14 border-t border-slate-200 bg-white py-14 sm:py-20">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Nursing Excellence</p>
          <h2 class="mt-3">Magnet Recognition Program</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            MedCore Hospital is proud to hold Magnet Recognition, the highest honor for nursing
            excellence and quality patient care.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-full bg-medical-50 px-4 py-2 text-sm font-medium text-medical-800">
              <Icon name="i-lucide-medal" class="h-4 w-4" aria-hidden="true" />
              Magnet Recognized
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              <Icon name="i-lucide-award" class="h-4 w-4" aria-hidden="true" />
              200+ Nurses
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-healing-50 px-4 py-2 text-sm font-medium text-healing-800">
              <Icon name="i-lucide-heart" class="h-4 w-4" aria-hidden="true" />
              24/7 Coverage
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import NurseCard from '~/components/site/NurseCard.vue'

const nurses = [
  {
    id: '1',
    slug: 'patricia-chen',
    name: 'Patricia Chen',
    title: 'Chief Nursing Officer',
    specialty: 'Nursing Administration',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    experience: '20+ years',
    bio: 'Advocate for nursing excellence and patient-centered care models. Magnet Recognition Program leader with two decades of clinical and administrative experience.',
  },
  {
    id: '2',
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    title: 'RN, ICU',
    specialty: 'Critical Care',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    experience: '12 years',
    bio: 'Critical care nurse specializing in intensive care unit management and post-operative recovery care.',
  },
  {
    id: '3',
    slug: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    title: 'RN, ER',
    specialty: 'Emergency Nursing',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    experience: '9 years',
    bio: 'Emergency department nurse with expertise in trauma care, rapid response, and emergency triage.',
  },
  {
    id: '4',
    slug: 'emily-watson',
    name: 'Emily Watson',
    title: 'RN, L&D',
    specialty: 'Labor & Delivery',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    experience: '8 years',
    bio: 'Labor and delivery nurse supporting mothers and newborns through birth and postpartum care.',
  },
  {
    id: '5',
    slug: 'james-thompson',
    name: 'James Thompson',
    title: 'RN, OR',
    specialty: 'Perioperative Nursing',
    image: 'https://images.unsplash.com/photo-1506165006114-8142f0767898?w=400&q=80',
    experience: '14 years',
    bio: 'Perioperative nurse assisting in surgical procedures across general, orthopedic, and cardiac surgery.',
  },
  {
    id: '6',
    slug: 'rachel-green',
    name: 'Rachel Green',
    title: 'RN, Peds',
    specialty: 'Pediatric Nursing',
    image: 'https://images.unsplash.com/photo-1490313520214-7c88698bd250?w=400&q=80',
    experience: '11 years',
    bio: 'Pediatric nurse dedicated to child health, family-centered care, and adolescent medicine.',
  },
]

useHead({ title: 'Nursing Team | MedCore Hospital' })
</script>
