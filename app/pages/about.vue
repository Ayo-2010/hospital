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
          />
        </div>

        <div class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
            <img
              class="h-64 w-full object-cover"
              src="https://images.pexels.com/photos/4386479/pexels-photo-4386479.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
              alt="Medical team collaborating"
              width="1200"
              height="400"
              loading="lazy"
            >
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Team Collaboration</h3>
              <p class="mt-2 mb-6 flex-1 text-sm leading-6 text-slate-600">
                Our multidisciplinary teams work together across departments to deliver
                coordinated, patient-centered care.
              </p>
              <NuxtLink to="/facilities" class="link inline-flex items-center gap-2 text-sm">
                Explore Facilities <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
          <div class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
            <img
              class="h-64 w-full object-cover"
              src="https://images.pexels.com/photos/5325833/pexels-photo-5325833.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
              alt="Doctor examining a patient"
              width="1200"
              height="400"
              loading="lazy"
            >
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Patient-Centered Care</h3>
              <p class="mt-2 mb-6 flex-1 text-sm leading-6 text-slate-600">
                Every patient receives individual attention with personalized treatment plans
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
              src="https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
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

const leaders = [
  { name: 'Dr. Elizabeth Morgan', title: 'Chief Medical Officer', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', bio: 'Board-certified internist with 20+ years in healthcare leadership. Champion of patient safety initiatives.', specialty: 'Internal Medicine' },
  { name: 'Dr. James Anderson', title: 'Chief of Surgery', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', bio: 'Pioneer in minimally invasive surgical techniques. Published 100+ peer-reviewed articles.', specialty: 'General Surgery' },
  { name: 'Dr. Patricia Chen', title: 'Chief Nursing Officer', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', bio: 'Advocate for nursing excellence and patient-centered care models. Magnet Recognition Program leader.', specialty: 'Nursing Administration' },
  { name: 'Dr. Robert Kim', title: 'Chief Innovation Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'Leads digital transformation and AI integration in clinical workflows.', specialty: 'Health Informatics' },
]

useHead({ title: 'About Us | MedCore Hospital' })
</script>
