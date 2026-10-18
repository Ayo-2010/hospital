<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Facilities</span>
      </nav>

      <div class="mb-12">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          State-of-the-Art Facilities
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Our modern facilities are designed for patient comfort, safety, and optimal clinical outcomes.
          From advanced surgical suites to serene recovery spaces, every detail supports healing.
        </p>
      </div>

      <section class="mb-14">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Our Facilities</p>
          <h2 class="mt-3">Explore Our Campuses</h2>
          <p class="mt-3 text-base leading-7 text-slate-600">
            Multiple convenient locations across Lagos.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <FacilityCard
            v-for="facility in facilities"
            :key="facility.id"
            :title="facility.name"
            :description="facility.description"
            :image="facility.image"
            :features="facility.features"
          />
        </div>
      </section>

      <section class="mb-14 border-t border-slate-200 bg-white py-14 sm:py-20">
        <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p class="eyebrow text-emergency-700">Emergency Care</p>
            <h2 class="mt-3">24/7 Emergency &amp; Trauma Care</h2>
            <p class="mt-4 text-base leading-7 text-slate-600">
              Our emergency department operates 24 hours a day with emergency doctors,
              trauma surgeons and critical care nurses ready to respond to any medical emergency.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <span class="inline-flex items-center gap-2 rounded-full bg-emergency-50 px-4 py-2 text-sm font-medium text-emergency-800">
                <Icon name="i-lucide-activity" class="h-4 w-4" aria-hidden="true" />
                Open 24 Hours
              </span>
              <span class="inline-flex items-center gap-2 rounded-full bg-emergency-50 px-4 py-2 text-sm font-medium text-emergency-800">
                <Icon name="i-lucide-ambulance" class="h-4 w-4" aria-hidden="true" />
                Ambulance Bays
              </span>
              <span class="inline-flex items-center gap-2 rounded-full bg-emergency-50 px-4 py-2 text-sm font-medium text-emergency-800">
                <Icon name="i-lucide-heart-pulse" class="h-4 w-4" aria-hidden="true" />
                Critical Care
              </span>
            </div>
          </div>

          <div class="relative">
            <img
              :src="MEDIA.emergencyEntrance"
              alt="Emergency department sign at the hospital entrance"
              class="h-72 w-full rounded-xl border border-slate-200 object-cover sm:h-96"
              loading="lazy"
            />
            <div class="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emergency-50 text-emergency-700">
                <Icon name="i-lucide-phone" class="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 class="font-display text-base font-semibold text-slate-950">Emergency Line</h3>
                <p class="text-sm text-slate-600">0704 503 3528</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Supporting Facilities</p>
          <h2 class="mt-3">Comprehensive Care Environment</h2>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="amenity in amenities" :key="amenity.id" class="card-hover flex flex-col">
            <span class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 text-medical-700">
              <Icon :name="amenity.icon" class="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 class="font-display text-lg font-semibold text-slate-950">{{ amenity.name }}</h3>
            <p class="mt-2 flex-1 text-sm leading-6 text-slate-600">{{ amenity.description }}</p>
            <NuxtLink :to="amenity.link" class="link mt-4 inline-flex items-center gap-1 text-sm">
              Learn more
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <div class="mt-14 text-center">
        <NuxtLink to="/contact" class="btn-primary btn-lg">
          <Icon name="i-lucide-map-pin" class="h-5 w-5" aria-hidden="true" />
          Visit Our Facilities
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FacilityCard from '~/components/site/FacilityCard.vue'
import { MEDIA } from '~/data/media'

const facilities = [
  {
    id: 'victoria-island',
    slug: 'victoria-island',
    name: 'Victoria Island Campus',
    description: 'Our flagship 450-bed facility, with advanced surgical suites, a 24-hour emergency department, intensive care and specialist units across all major specialties.',
    image: MEDIA.wayfinding,
    features: ['450 Beds', '12 Operating Theatres', '24/7 Emergency', 'ICU', 'Imaging Centre'],
  },
  {
    id: 'ikoyi-specialist-centre',
    slug: 'ikoyi-specialist-centre',
    name: 'Ikoyi Specialist Centre',
    description: 'Outpatient specialty clinics, diagnostic imaging, laboratory services and consulting rooms in a convenient, patient-friendly setting.',
    image: MEDIA.consultationRoom,
    features: ['30+ Clinics', 'Imaging Centre', 'Laboratory', 'Pharmacy'],
  },
  {
    id: 'wellness-rehab',
    slug: 'wellness-rehab',
    name: 'Wellness & Rehabilitation Centre',
    description: 'Physiotherapy, occupational therapy, cardiac rehabilitation and wellness programmes in a purpose-built facility.',
    image: MEDIA.physiotherapy,
    features: ['Physiotherapy Gym', 'Cardiac Rehab', 'Hydrotherapy', 'Fitness Suite'],
  },
]

const amenities = [
  {
    id: 'pharmacy',
    name: 'On-Site Pharmacy',
    description: 'Prescription filling, medication counselling and delivery within Victoria Island and Ikoyi.',
    icon: 'i-lucide-pill',
    link: '/pharmacy',
  },
  {
    id: 'laboratory',
    name: 'Laboratory Services',
    description: 'Blood tests, pathology and cardiac markers with fast turnaround and secure digital results.',
    icon: 'i-lucide-flask-conical',
    link: '/laboratory',
  },
  {
    id: 'radiology',
    name: 'Imaging Centre',
    description: 'X-ray, ultrasound, CT and MRI with digital reporting by consultant radiologists.',
    icon: 'i-lucide-scan',
    link: '/radiology',
  },
  {
    id: 'surgery',
    name: 'Surgical Suites',
    description: 'Twelve operating theatres with laparoscopic and minimally invasive equipment.',
    icon: 'i-lucide-scissors',
    link: '/surgery',
  },
]

useHead({ title: 'Hospital Facilities | MedCore Hospital' })
</script>
