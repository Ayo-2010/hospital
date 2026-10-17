<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <NuxtLink to="/nurses" class="hover:text-medical-800">Nursing Team</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">{{ nurse.name }}</span>
      </nav>

      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div class="space-y-6">
          <div class="flex flex-col gap-5 sm:flex-row sm:items-end">
            <img
              :src="nurse.image"
              :alt="nurse.name"
              class="h-48 w-48 shrink-0 rounded-xl border border-slate-200 object-cover"
              loading="lazy"
            />
            <div>
              <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
                {{ nurse.name }}
              </h1>
              <p class="mt-2 text-xl text-medical-700">{{ nurse.title }}</p>
              <p class="mt-1 text-sm font-medium text-slate-600">{{ nurse.specialty }}</p>
            </div>
          </div>

          <p class="text-base leading-7 text-slate-600">{{ nurse.bio }}</p>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Experience</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ nurse.experience }}</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Specialty</h3>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ nurse.specialty }}</p>
            </div>
          </div>

          <div>
            <a href="tel:+2347045033528" class="btn-primary">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              Contact Nursing
            </a>
          </div>

          <p class="text-sm leading-6 text-slate-500">
            Nursing profiles are for reference. Contact the hospital for scheduling
            and availability information.
          </p>
        </div>

        <aside class="space-y-5">
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Department</h2>
            <ul class="mt-3 space-y-2 text-sm">
              <li><NuxtLink to="/departments" class="link">{{ nurse.specialty }}</NuxtLink></li>
              <li><NuxtLink to="/departments" class="link">Patient Care</NuxtLink></li>
            </ul>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Contact</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Nursing Administration<br />
              MedCore Hospital<br />
              Victoria Island Campus, 2nd Floor
            </p>
            <a href="tel:+2347045033528" class="link mt-3 inline-flex items-center gap-2 text-sm">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              0704 503 3528
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const nurseId = route.params.id as string

const nurses: Record<string, any> = {
  'patricia-chen': {
    id: '1',
    slug: 'patricia-chen',
    name: 'Patricia Chen',
    title: 'Chief Nursing Officer',
    specialty: 'Nursing Administration',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    experience: '20+ years',
    bio: 'Advocate for nursing excellence and patient-centered care models. Magnet Recognition Program leader with two decades of clinical and administrative experience.',
  },
  'sarah-mitchell': {
    id: '2',
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    title: 'RN, ICU',
    specialty: 'Critical Care',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    experience: '12 years',
    bio: 'Critical care nurse specializing in intensive care unit management and post-operative recovery care.',
  },
  'michael-rodriguez': {
    id: '3',
    slug: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    title: 'RN, ER',
    specialty: 'Emergency Nursing',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    experience: '9 years',
    bio: 'Emergency department nurse with expertise in trauma care, rapid response, and emergency triage.',
  },
  'emily-watson': {
    id: '4',
    slug: 'emily-watson',
    name: 'Emily Watson',
    title: 'RN, L&D',
    specialty: 'Labor & Delivery',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    experience: '8 years',
    bio: 'Labor and delivery nurse supporting mothers and newborns through birth and postpartum care.',
  },
  'james-thompson': {
    id: '5',
    slug: 'james-thompson',
    name: 'James Thompson',
    title: 'RN, OR',
    specialty: 'Perioperative Nursing',
    image: 'https://images.unsplash.com/photo-1506165006114-8142f0767898?w=400&q=80',
    experience: '14 years',
    bio: 'Perioperative nurse assisting in surgical procedures across general, orthopedic, and cardiac surgery.',
  },
  'rachel-green': {
    id: '6',
    slug: 'rachel-green',
    name: 'Rachel Green',
    title: 'RN, Peds',
    specialty: 'Pediatric Nursing',
    image: 'https://images.unsplash.com/photo-1490313520214-7c88698bd250?w=400&q=80',
    experience: '11 years',
    bio: 'Pediatric nurse dedicated to child health, family-centered care, and adolescent medicine.',
  },
}

const nurse = computed(() => nurses[nurseId] || nurses['patricia-chen'])

useHead({ title: `${nurse.value.name} | MedCore Hospital` })
</script>
