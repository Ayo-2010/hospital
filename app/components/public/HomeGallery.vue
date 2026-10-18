<template>
  <section class="bg-white" aria-labelledby="home-gallery-title">
    <div class="container-main py-14 sm:py-20">
      <div class="mx-auto max-w-2xl text-center">
        <p class="eyebrow">Inside MedCore</p>
        <h2 id="home-gallery-title" class="mt-3">A look around our hospital</h2>
        <p class="mt-3 text-base leading-7 text-slate-600">
          Our theatres, laboratories, imaging suites and clinics sit on two campuses in Lagos, so
          most of your care happens under one roof.
        </p>
      </div>

      <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="scene in scenes"
          :key="scene.title"
          class="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
        >
          <img
            :src="scene.image"
            :alt="scene.alt"
            class="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            width="600"
            height="450"
            loading="lazy"
            decoding="async"
          >
          <div class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 pt-10">
            <p class="font-display text-base font-semibold text-white">{{ scene.title }}</p>
            <p class="mt-0.5 text-sm text-slate-200">{{ scene.detail }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MEDIA } from '~/data/media'

const scenes = [
  {
    title: 'Operating theatres',
    detail: 'Twelve theatres with minimally invasive equipment',
    image: MEDIA.operatingTheatre,
    alt: 'Surgical team working in an operating theatre',
  },
  {
    title: 'On-site laboratory',
    detail: 'Blood tests and pathology reported the same day',
    image: MEDIA.laboratory,
    alt: 'Laboratory technician pipetting samples',
  },
  {
    title: 'Imaging & radiology',
    detail: 'X-ray, ultrasound, CT and MRI',
    image: MEDIA.ultrasoundScan,
    alt: 'Radiology monitor showing a brain scan',
  },
  {
    title: 'Consultation rooms',
    detail: 'Private rooms for outpatient clinics',
    image: MEDIA.consultationRoom,
    alt: 'Examination room with a clinician and patient',
  },
  {
    title: 'Emergency department',
    detail: 'Open every hour of every day',
    image: MEDIA.emergencyEntrance,
    alt: 'Emergency sign at the hospital entrance',
  },
  {
    title: 'Rehabilitation',
    detail: 'Physiotherapy and cardiac rehabilitation',
    image: MEDIA.physiotherapy,
    alt: 'Patient using rehabilitation pulley equipment',
  },
]
</script>
