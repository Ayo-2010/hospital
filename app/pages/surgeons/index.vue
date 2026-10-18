<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Surgeons</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Our Surgical Team
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Board-certified surgeons at MedCore Hospital perform thousands of procedures each year,
          from routine operations to complex, life-saving surgeries using minimally invasive techniques.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SurgeonCard
          v-for="surgeon in surgeons"
          :key="surgeon.id"
          :name="surgeon.name"
          :title="surgeon.title"
          :specialty="surgeon.specialty"
          :image="surgeon.image"
          :experience="surgeon.experience"
          :bio="surgeon.bio"
          :slug="surgeon.slug"
        />
      </div>

      <section class="mt-14 border-t border-slate-200 bg-white py-14 sm:py-20">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Surgical Excellence</p>
          <h2 class="mt-3">Advanced Surgical Care</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            Our surgeons use advanced techniques including laparoscopic, robotic, and minimally
            invasive procedures for faster recovery and better outcomes.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-full bg-medical-50 px-4 py-2 text-sm font-medium text-medical-800">
              <Icon name="i-lucide-scissors" class="h-4 w-4" aria-hidden="true" />
              12 Operating Theatres
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              <Icon name="i-lucide-award" class="h-4 w-4" aria-hidden="true" />
              Board Certified
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-healing-50 px-4 py-2 text-sm font-medium text-healing-800">
              <Icon name="i-lucide-heart-pulse" class="h-4 w-4" aria-hidden="true" />
              24/7 Surgical Coverage
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import SurgeonCard from '~/components/site/SurgeonCard.vue'
import { SURGEONS } from '~/data/clinicians'

const surgeons = SURGEONS

useHead({ title: 'Surgical Team | MedCore Hospital' })
</script>
