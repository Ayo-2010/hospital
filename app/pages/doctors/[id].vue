<template>
  <main class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <NuxtLink to="/doctors" class="hover:text-medical-800">Find a doctor</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Dr. {{ doctor.lastName }}</span>
      </nav>

      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div class="space-y-6">
          <div>
            <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
              Dr. {{ doctor.name }}
            </h1>
            <p class="mt-3 text-xl text-medical-700">{{ doctor.title }}</p>
            <p class="mt-2 text-sm font-medium text-slate-600">{{ doctor.department }}</p>
          </div>

          <p class="text-base leading-7 text-slate-700">{{ doctor.bio }}</p>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-lg border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Education</h3>
              <p class="mt-1 text-sm text-slate-600">{{ doctor.education }}</p>
            </div>
            <div class="rounded-lg border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Experience</h3>
              <p class="mt-1 text-sm text-slate-600">{{ doctor.experience }}</p>
            </div>
            <div class="rounded-lg border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Specialty</h3>
              <p class="mt-1 text-sm text-slate-600">{{ doctor.specialization }}</p>
            </div>
            <div class="rounded-lg border border-slate-200 bg-white p-4">
              <h3 class="font-display text-sm font-semibold text-slate-950">Languages</h3>
              <p class="mt-1 text-sm text-slate-600">{{ doctor.languages }}</p>
            </div>
          </div>

          <div class="flex items-center gap-4 pt-2">
            <NuxtLink
              :to="`/appointments/book?doctor=${doctor.id}`"
              class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-medical-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-medical-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Book appointment
              <Icon name="i-lucide-calendar-plus" class="h-4 w-4" />
            </NuxtLink>
            <a
              href="tel:+11234567890"
              class="inline-flex items-center gap-2 text-sm font-semibold text-medical-800"
            >
              <Icon name="i-lucide-phone" class="h-4 w-4" />
              +1 (123) 456-7890
            </a>
          </div>

          <p class="text-sm text-slate-500">
            Clinician profiles are for reference. Confirm availability and specialty
            with the hospital before scheduling.
          </p>
        </div>

        <aside class="space-y-5">
          <div class="rounded-lg border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Office hours</h2>
            <div class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-slate-600">Monday – Friday</span><span class="text-slate-900">8:00 AM – 5:00 PM</span></div>
              <div class="flex justify-between"><span class="text-slate-600">Saturday</span><span class="text-slate-900">9:00 AM – 1:00 PM</span></div>
              <div class="flex justify-between"><span class="text-slate-600">Sunday</span><span class="text-slate-600">Closed</span></div>
            </div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Departments</h2>
            <ul class="mt-3 space-y-2 text-sm">
              <li><NuxtLink to="/departments" class="text-medical-800 hover:underline">Cardiology</NuxtLink></li>
              <li><NuxtLink to="/departments" class="text-medical-800 hover:underline">Preventive cardiology</NuxtLink></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const route = useRoute()
const doctorId = route.params.id as string

const doctor = computed(() => ({
  id: doctorId,
  name: 'Sarah Johnson',
  lastName: 'Johnson',
  title: 'MD, FACC — Cardiologist',
  department: 'Cardiology',
  specialization: 'Interventional Cardiology, Preventive Cardiology',
  education: 'Harvard Medical School, MD · Completed Cardiology Residency',
  experience: '15 years of practice',
  languages: 'English, Spanish',
  bio: 'Dr. Johnson specializes in interventional cardiology and preventive cardiology. She is board-certified and has led numerous clinical trials in cardiovascular disease prevention. Her research focuses on women\'s heart health and outpatient cardiac procedures.',
}))

useHead({ title: `Dr. ${doctor.value.name} | MedCore Hospital` })
</script>
