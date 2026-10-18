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
          <h2 class="mt-3">A nursing team you can rely on</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            Our nurses are registered with the Nursing and Midwifery Council of Nigeria and work
            across every ward, theatre and clinic, supported by ongoing education and clinical
            supervision.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-full bg-medical-50 px-4 py-2 text-sm font-medium text-medical-800">
              <Icon name="i-lucide-medal" class="h-4 w-4" aria-hidden="true" />
              NMCN registered
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
import { NURSES } from '~/data/clinicians'

const nurses = NURSES

useHead({ title: 'Nursing Team | MedCore Hospital' })
</script>
