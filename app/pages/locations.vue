<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 flex items-center gap-2 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Locations</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Our locations
        </h1>
        <p class="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          Visit us at any of our convenient locations across Lagos.
          Each campus offers specialized services and expert care.
        </p>
      </div>

      <section class="mb-14 animate-fade-in" aria-label="Hospital locations">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LocationCard
            v-for="location in locations"
            :key="location.name"
            :name="location.name"
            :address="location.address"
            :phone="location.phone"
            :hours="location.hours"
            :services="location.services"
            :image="location.image"
            :is-main="location.isMain"
          />
        </div>
      </section>

      <section class="border-t border-slate-200 py-14" aria-labelledby="directions-heading">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Getting here</p>
          <h2 id="directions-heading" class="mt-3">Directions &amp; parking</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            All MedCore Hospital locations offer free valet and self-parking.
            Public transportation stops are within walking distance of each campus.
          </p>

          <div class="mt-8 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
            <div class="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
                <Icon name="i-lucide-car" class="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 class="font-display text-base font-semibold tracking-tight text-slate-950">Free parking</h3>
                <p class="mt-1 text-sm leading-6 text-slate-600">
                  Complimentary valet and self-parking available at all locations.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
                <Icon name="i-lucide-bus" class="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 class="font-display text-base font-semibold tracking-tight text-slate-950">Public transit</h3>
                <p class="mt-1 text-sm leading-6 text-slate-600">
                  Bus and rail stops within a 5-minute walk of each campus entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-center animate-fade-in stagger-1" aria-label="Contact a location">
        <NuxtLink to="/contact" class="btn-primary btn-lg">
          <Icon name="i-lucide-phone" class="h-5 w-5" aria-hidden="true" />
          Contact a location
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationCard from '~/components/site/LocationCard.vue'

const locations = [
  {
    name: 'Main Hospital Campus',
    address: '12 Adeola Odeku Street\nVictoria Island, Lagos 101241',
    phone: '0704 503 3528',
    hours: 'Open 24/7 (Emergency)\nMon-Fri: 6 AM - 8 PM (Main Entrance)',
    services: ['Emergency', 'Inpatient', 'Surgery', 'ICU', 'Imaging', 'Pharmacy'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    isMain: true,
  },
  {
    name: 'Ikoyi Specialist Centre',
    address: '450 Health Plaza, Suite 200\nVictoria Island, Lagos 101241',
    phone: '0704 503 3528',
    hours: 'Mon-Fri: 8 AM - 6 PM\nSat: 8 AM - 12 PM',
    services: ['Outpatient Clinics', 'Imaging', 'Lab', 'Pharmacy'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    isMain: false,
  },
  {
    name: 'Wellness & Rehab Center',
    address: '789 Wellness Way\nVictoria Island, Lagos 101241',
    phone: '0704 503 3528',
    hours: 'Mon-Fri: 7 AM - 7 PM\nSat: 8 AM - 2 PM',
    services: ['Physical Therapy', 'Cardiac Rehab', 'Fitness', 'Pool'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    isMain: false,
  },
]

useHead({ title: 'Hospital Locations | MedCore Hospital' })
</script>
