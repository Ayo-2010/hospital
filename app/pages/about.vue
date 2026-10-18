<template>
  <div>
    <AboutHero />

    <MissionValues />

    <section class="section bg-slate-50" aria-labelledby="leadership-heading">
      <div class="container-main">
        <div class="mx-auto mb-16 max-w-2xl text-center animate-fade-in animate-slide-up">
          <p class="eyebrow">Leadership Team</p>
          <h2 id="leadership-heading" class="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Guiding Our Mission Forward
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            Experienced leaders committed to clinical excellence and compassionate care.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <LeaderCard
            v-for="leader in leaders"
            :key="leader.name"
            :name="leader.name"
            :title="leader.title"
            :image="leader.image"
            :bio="leader.bio"
            :specialty="leader.specialty"
            :to="leader.to"
          />
        </div>

        <div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
            <img
              class="h-64 w-full object-cover"
              :src="MEDIA.clinicalTeam"
              alt="Medical team collaborating"
              width="1200"
              height="400"
              loading="lazy"
            >
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Team Collaboration</h3>
              <p class="mt-2 mb-6 flex-1 text-sm leading-6 text-slate-600">
                Our multidisciplinary teams work together across departments to deliver
                coordinated, patient-centred care.
              </p>
              <NuxtLink to="/facilities" class="link inline-flex items-center gap-2 text-sm">
                Explore Facilities <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
          <div class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
            <img
              class="h-64 w-full object-cover"
              :src="MEDIA.consultation"
              alt="Doctor examining a patient"
              width="1200"
              height="400"
              loading="lazy"
            >
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Patient-Centred Care</h3>
              <p class="mt-2 mb-6 flex-1 text-sm leading-6 text-slate-600">
                Every patient receives individual attention with personalised treatment plans
                tailored to their unique needs.
              </p>
              <NuxtLink to="/departments" class="link inline-flex items-center gap-2 text-sm">
                View Departments <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
          <div class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
            <img
              class="h-64 w-full object-cover"
              :src="MEDIA.compassionateCare"
              alt="Comfortable patient room"
              width="1200"
              height="400"
              loading="lazy"
            >
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Healing Environment</h3>
              <p class="mt-2 mb-6 flex-1 text-sm leading-6 text-slate-600">
                Designed for comfort and recovery, our facilities promote healing and wellbeing.
              </p>
              <NuxtLink to="/locations" class="link inline-flex items-center gap-2 text-sm">
                Find a Location <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FacilitiesSection />

    <Accreditations />

    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
import AboutHero from '~/components/site/AboutHero.vue'
import MissionValues from '~/components/site/MissionValues.vue'
import LeaderCard from '~/components/site/LeaderCard.vue'
import FacilitiesSection from '~/components/site/FacilitiesSection.vue'
import Accreditations from '~/components/site/Accreditations.vue'
import CTASection from '~/components/site/CTASection.vue'
import { MEDIA, PORTRAITS } from '~/data/media'

const leaders = [
  { name: 'Dr. Elizabeth Adewale', title: 'Chief Medical Officer', image: PORTRAITS.women[12]!, to: undefined, bio: 'Consultant physician with two decades of clinical leadership. Leads patient safety, clinical governance and quality improvement across the hospital.', specialty: 'Internal Medicine' },
  { name: 'Dr. Chidi Okonkwo', title: 'Chief of Surgery', image: PORTRAITS.men[8]!, to: '/surgeons/chidi-okonkwo', bio: 'Consultant surgeon specialising in minimally invasive techniques. Leads our surgical division, theatre governance and surgical training programme.', specialty: 'General Surgery' },
  { name: 'Chiamaka Obi', title: 'Chief Nursing Officer', image: PORTRAITS.women[6]!, to: '/nurses/chiamaka-obi', bio: 'Leads nursing practice, staffing and education. A long-standing advocate for patient-centred care and clinical excellence at the bedside.', specialty: 'Nursing Administration' },
  { name: 'Dr. Samuel Bello', title: 'Chief Innovation Officer', image: PORTRAITS.men[12]!, to: undefined, bio: 'Leads our electronic records programme, clinical informatics and the digital tools that keep care teams connected.', specialty: 'Health Informatics' },
]

useHead({ title: 'About Us | MedCore Hospital' })
</script>
