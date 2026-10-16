<script setup lang="ts">
import PreviewDemoContentNotice from '../DemoContentNotice.vue'
import { PREVIEW_DOCTORS } from '~/data/previewDoctors'
import { PREVIEW_DEPARTMENTS, PREVIEW_DEPARTMENT_GROUPS } from '~/data/previewDepartments'
import type { DemoDepartment } from '~/types/preview'

const base = '/previews/department-led'
const departmentsByGroup = (group: DemoDepartment['group']) => PREVIEW_DEPARTMENTS.filter((department) => department.group === group)
const departmentGroupId = (group: string) => `department-group-${group.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
const startActions = [
  { title: 'Find a doctor', detail: 'Search by name, specialty, location, or language.', to: `${base}/doctors`, tone: 'medical' },
  { title: 'Browse departments and services', detail: 'See care areas and what each department covers.', to: '/departments', tone: 'medical' },
  { title: 'Book an appointment', detail: 'Choose a clinician and request a visit time.', to: `${base}/appointments/book`, tone: 'medical' },
  { title: 'Emergency information', detail: 'For a life-threatening emergency in the U.S., call 911.', to: '/emergency', tone: 'emergency' },
]
const steps = [
  { title: 'Choose a department', detail: 'Browse the care areas above and open one to learn what it covers.' },
  { title: 'Find a doctor', detail: 'Review clinician profiles and select the one you would like to see.' },
  { title: 'Request a visit', detail: 'Share a preferred visit type and time, then review your request.' },
]
const serviceLinks = [
  { title: 'Medical services', detail: 'Browse services and care information.', to: '/services' },
  { title: 'Laboratory', detail: 'Learn about laboratory services.', to: '/laboratory' },
  { title: 'Surgery and procedures', detail: 'Read about consultations and surgical services.', to: '/surgery' },
  { title: 'Hospital facilities', detail: 'Learn about the hospital and its facilities.', to: '/about' },
]
</script>

<template>
  <main>
    <section class="border-b border-slate-200 bg-medical-50/70" aria-labelledby="department-home-title">
      <div class="container-main grid gap-7 py-10 sm:py-12 lg:grid-cols-[.94fr_1fr_1.1fr] lg:items-center lg:gap-10 lg:py-14">
        <div class="max-w-lg">
          <p class="mb-3 text-sm font-semibold text-medical-800">MedCore Hospital</p>
          <h1 id="department-home-title" class="font-display text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">Care starts with a clear next step.</h1>
          <p class="mt-5 text-base leading-7 text-slate-700">Find the right department, explore clinician profiles, or send an appointment request. If you already know where to begin, choose a department below.</p>
        </div>

        <div class="rounded-lg border border-slate-200 bg-white px-5 py-5 sm:px-6">
          <h2 class="font-display text-xl font-semibold text-slate-900">Where should I start?</h2>
          <ul class="mt-3 divide-y divide-slate-200">
            <li v-for="action in startActions" :key="action.title" class="group flex items-center justify-between gap-4 py-3.5">
              <NuxtLink :to="action.to" class="flex-1">
                <span class="block text-sm font-semibold" :class="action.tone === 'emergency' ? 'text-emergency-800' : 'text-slate-900 group-hover:text-medical-800'">{{ action.title }}</span>
                <span class="mt-1 block text-sm leading-5 text-slate-600">{{ action.detail }}</span>
              </NuxtLink>
              <Icon name="i-lucide-arrow-right" class="h-4 w-4 shrink-0" :class="action.tone === 'emergency' ? 'text-emergency-700' : 'text-medical-700'" aria-hidden="true" />
            </li>
          </ul>
        </div>

        <figure class="relative m-0 min-h-[280px] overflow-hidden rounded-lg bg-slate-200 lg:min-h-[350px]">
          <img class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/4431986/pexels-photo-4431986.jpeg?auto=compress&cs=tinysrgb&w=1100&q=80" alt="Hospital directional signage inside a contemporary corridor. Photo by Shuxuan Cao via Pexels." width="1100" height="733" loading="lazy" decoding="async">
          <figcaption class="absolute inset-x-0 bottom-0 bg-slate-950/75 px-4 py-3 text-sm leading-5 text-white">Clear directions and practical information for your visit.</figcaption>
        </figure>
      </div>
    </section>

    <section id="departments" class="container-main py-12 sm:py-16 lg:py-20" aria-labelledby="grouped-departments-title">
      <div class="grid gap-8 lg:grid-cols-[.72fr_1.8fr] lg:gap-14">
        <div class="max-w-sm">
          <h2 id="grouped-departments-title" class="font-display text-3xl font-semibold text-slate-950 sm:text-4xl">Browse by department</h2>
          <p class="mt-4 text-base leading-7 text-slate-700">Start with the area of care you have in mind. Each department can help you explore its services and clinician profiles.</p>
          <NuxtLink to="/departments" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-medical-800 underline underline-offset-4">View all departments <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" /></NuxtLink>
        </div>
        <div class="grid gap-x-8 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
          <section v-for="group in PREVIEW_DEPARTMENT_GROUPS" :key="group" :aria-labelledby="departmentGroupId(group)">
            <h3 :id="departmentGroupId(group)" class="mb-3 border-b border-slate-200 pb-3 text-base font-semibold text-slate-900">{{ group }}</h3>
            <ul class="space-y-4">
              <li v-for="department in departmentsByGroup(group)" :key="department.slug">
                <NuxtLink :to="`/departments/${department.slug}`" class="group block">
                  <span class="flex items-center justify-between gap-2 text-sm font-semibold text-slate-800 group-hover:text-medical-800">{{ department.name }}<Icon name="i-lucide-arrow-right" class="h-4 w-4 text-slate-400 group-hover:text-medical-700" aria-hidden="true" /></span>
                  <span class="mt-1 block text-sm leading-5 text-slate-600">{{ department.summary }}</span>
                </NuxtLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-3 border border-emergency-200 bg-emergency-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div><h3 class="font-semibold text-emergency-900">Emergency Medicine</h3><p class="mt-1 text-sm leading-5 text-emergency-900/80">For a life-threatening emergency in the U.S., call 911. For department information, visit Emergency Services.</p></div>
        <NuxtLink to="/emergency" class="shrink-0 text-sm font-semibold text-emergency-800 underline underline-offset-4">Emergency information <Icon name="i-lucide-arrow-right" class="ml-1 inline h-4 w-4" aria-hidden="true" /></NuxtLink>
      </div>
    </section>

    <section class="border-y border-slate-200 bg-slate-50" aria-labelledby="department-process-title">
      <div class="container-main grid gap-8 py-12 sm:py-16 lg:grid-cols-[.72fr_1.8fr] lg:gap-14">
        <div><h2 id="department-process-title" class="font-display text-3xl font-semibold text-slate-950">From department to appointment request</h2><p class="mt-4 text-sm leading-6 text-slate-700">Choose a starting point that feels right. Review your selections before sending a request.</p></div>
        <ol class="grid gap-x-8 gap-y-6 sm:grid-cols-3">
          <li v-for="(step, index) in steps" :key="step.title" class="border-t-2 pt-4" :class="index === 0 ? 'border-medical-600' : 'border-slate-300'"><p class="text-sm font-semibold" :class="index === 0 ? 'text-medical-800' : 'text-slate-900'">{{ ['01 ·', '02 ·', '03 ·'][index] }} {{ step.title }}</p><p class="mt-2 text-sm leading-6 text-slate-700">{{ step.detail }}</p></li>
        </ol>
      </div>
    </section>

    <section class="container-main py-12 sm:py-16" aria-labelledby="department-sample-doctors-title">
      <div class="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between"><div><h2 id="department-sample-doctors-title" class="font-display text-3xl font-semibold text-slate-950">Meet a few sample clinicians</h2><p class="mt-2 text-sm text-slate-600">Fictional demonstration profiles — not real physicians.</p></div><NuxtLink :to="`${base}/doctors`" class="text-sm font-semibold text-medical-800 underline underline-offset-4">Browse the doctor directory <Icon name="i-lucide-arrow-right" class="ml-1 inline h-4 w-4" aria-hidden="true" /></NuxtLink></div>
      <PreviewDemoContentNotice class="mt-3" compact />
      <div class="divide-y divide-slate-200"><NuxtLink v-for="doctor in PREVIEW_DOCTORS.slice(0, 3)" :key="doctor.id" :to="`/doctors/${doctor.slug}`" class="group grid gap-2 py-4 sm:grid-cols-[1.25fr_1fr_1fr_auto] sm:items-center sm:gap-5"><span class="font-semibold text-slate-900 group-hover:text-medical-800">{{ doctor.name }}</span><span class="text-sm text-slate-700">{{ doctor.specialty }}</span><span class="text-sm text-slate-600">{{ doctor.location }}</span><span class="inline-flex items-center gap-2 text-sm font-semibold text-medical-800">View profile <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" /></span></NuxtLink></div>
    </section>

    <section class="border-y border-slate-200 bg-medical-50/60" aria-labelledby="care-facilities-title">
      <div class="container-main grid gap-8 py-10 sm:grid-cols-[.72fr_1.8fr] sm:items-center"><div><h2 id="care-facilities-title" class="font-display text-2xl font-semibold text-slate-900">Care and facilities</h2><p class="mt-2 text-sm leading-6 text-slate-700">Find practical details about services, tests, procedures, and hospital facilities.</p></div><div class="grid gap-x-8 gap-y-4 sm:grid-cols-2"><NuxtLink v-for="link in serviceLinks" :key="link.title" :to="link.to" class="group flex items-center justify-between gap-4 border-b border-slate-200 pb-3"><span><span class="block text-sm font-semibold text-slate-900 group-hover:text-medical-800">{{ link.title }}</span><span class="mt-1 block text-sm text-slate-600">{{ link.detail }}</span></span><Icon name="i-lucide-arrow-right" class="h-4 w-4 text-medical-700" aria-hidden="true" /></NuxtLink></div></div>
    </section>

    <section class="container-main grid gap-8 py-10 sm:grid-cols-[1.15fr_.85fr] sm:items-center" aria-labelledby="department-contact-title">
      <div><h2 id="department-contact-title" class="font-display text-2xl font-semibold text-slate-900">Need help finding the right place?</h2><p class="mt-3 text-sm leading-6 text-slate-700">Our contact team can help with general hospital questions and directions. For urgent, life-threatening emergencies in the U.S., call 911.</p></div>
      <address class="not-italic text-sm leading-6 text-slate-600 sm:border-l-2 sm:border-medical-200 sm:pl-6"><strong class="block text-slate-900">Contact MedCore</strong><a class="mt-2 inline-block underline underline-offset-4" href="tel:+11234567890">+1 (123) 456-7890</a><a class="mt-1 block underline underline-offset-4" href="mailto:info@medcorehms.com">info@medcorehms.com</a><p class="mt-1">123 Medical Center Drive, Healthcare District</p><p class="mt-1 text-xs text-slate-500">Sample contact details for this demonstration site.</p></address>
    </section>
  </main>
</template>
