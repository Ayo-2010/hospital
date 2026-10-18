<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Pharmacy</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Pharmacy
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Our pharmacy provides convenient prescription filling, over-the-counter medicines, and
          medication counseling. Our pharmacists work closely with your clinical team to ensure
          safe and effective treatment.
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div class="space-y-8">
          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Pharmacy services</h2>
            <ul class="mt-4 space-y-2 text-slate-600">
              <li v-for="svc in services" :key="svc.name" class="flex items-start gap-3">
                <Icon :name="svc.icon" class="mt-0.5 h-5 w-5 text-medical-700" />
                <div>
                  <h3 class="font-semibold text-slate-900">{{ svc.name }}</h3>
                  <p class="text-sm">{{ svc.description }}</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Prescription refills</h2>
            <p class="mt-2 text-slate-600">
              Request refills through your patient portal or by calling the pharmacy directly.
              Allow 24-48 hours for processing.
            </p>
            <NuxtLink
              to="/auth/login"
              class="mt-3 inline-flex items-center gap-2 rounded-md bg-medical-700 px-4 py-2 text-sm font-semibold text-white hover:bg-medical-800"
            >
              Request refill online
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </section>

          <div class="rounded-lg border border-medical-200 bg-medical-50 p-6">
            <h2 class="font-display text-xl font-semibold text-medical-950">Questions for your pharmacist?</h2>
            <p class="mt-2 text-sm text-medical-800">
              Our pharmacists are available to answer medication questions and provide counseling.
            </p>
          </div>
        </div>

        <aside class="space-y-5">
          <div class="flex items-start gap-3 rounded-md border border-emergency-200 bg-emergency-50 px-4 py-3.5">
            <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 text-emergency-700" />
            <p class="text-sm leading-5 text-emergency-900">
              <strong class="font-semibold">Medical emergency?</strong> Call 112 or visit the emergency department.
            </p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Pharmacy hours</h2>
            <div class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-slate-600">Monday – Friday</span><span class="text-slate-900">8am – 8pm</span></div>
              <div class="flex justify-between"><span class="text-slate-600">Saturday</span><span class="text-slate-900">9am – 5pm</span></div>
              <div class="flex justify-between"><span class="text-slate-600">Sunday</span><span class="text-slate-900">10am – 4pm</span></div>
            </div>
          </div>
        </aside>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" :src="MEDIA.pharmacy" alt="Pharmacist at the dispensary counter" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Pharmacy services</figcaption>
        </figure>
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" :src="MEDIA.clinicalTeam" alt="Group of doctors and nurses" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Team collaboration</figcaption>
        </figure>
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" :src="MEDIA.consultation" alt="Clinician speaking with a patient" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Physician consultation</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MEDIA } from '~/data/media'
useHead({ title: 'Pharmacy | MedCore Hospital' })

const services = [
  { name: 'Prescription filling', description: 'We fill prescriptions from MedCore doctors and accept most HMO plans.', icon: 'i-lucide-pill' },
  { name: 'Over-the-counter medicines', description: 'Pain relievers, allergy medicines, digestive aids and other over-the-counter products.', icon: 'i-lucide-store' },
  { name: 'Medication counseling', description: 'Personalized counseling on proper usage, side effects, and drug interactions.', icon: 'i-lucide-message-circle' },
  { name: 'Delivery service', description: 'Prescription delivery available within a 10-mile radius of the hospital.', icon: 'i-lucide-truck' },
]
</script>
