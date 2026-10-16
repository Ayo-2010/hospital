<template>
  <main class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Departments</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Departments & specialties
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Browse our comprehensive range of medical departments and specialties. Each
          department provides specialized care with advanced technology and expert
          clinicians.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="dept in departments"
          :key="dept.id"
          class="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon :name="dept.icon" class="h-6 w-6" />
          </div>
          <h3 class="font-display text-lg font-semibold text-slate-950 group-hover:text-medical-800">{{ dept.name }}</h3>
          <p class="mt-2 text-sm leading-5 text-slate-600 flex-grow">{{ dept.description }}</p>
          <NuxtLink
            :to="dept.href"
            class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-medical-800 group-hover:underline"
          >
            Learn more
            <Icon name="i-lucide-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Departments & Specialties | MedCore Hospital' })

const departments = [
  { id: 'cardiology', name: 'Cardiology', description: 'Diagnosis and treatment of heart conditions using advanced imaging and interventional procedures.', icon: 'i-lucide-heart-pulse', href: '/departments/cardiology' },
  { id: 'orthopedics', name: 'Orthopedics', description: 'Comprehensive musculoskeletal care including joint replacement, sports medicine, and spine surgery.', icon: 'i-lucide-bone', href: '/departments/orthopedics' },
  { id: 'neurology', name: 'Neurology', description: 'Specialized treatment for neurological conditions including stroke, epilepsy, and headaches.', icon: 'i-lucide-brain', href: '/departments/neurology' },
  { id: 'pediatrics', name: 'Pediatrics', description: 'Dedicated pediatric care for infants, children, and adolescents in a child-friendly environment.', icon: 'i-lucide-baby', href: '/departments/pediatrics' },
  { id: 'surgery', name: 'Surgery', description: 'Multi-specialty surgical services with minimally invasive and advanced surgical techniques.', icon: 'i-lucide-scissors', href: '/departments/surgery' },
  { id: 'emergency', name: 'Emergency Medicine', description: '24/7 emergency care for life-threatening conditions with rapid response teams.', icon: 'i-lucide-circle-alert', href: '/emergency' },
]
</script>
