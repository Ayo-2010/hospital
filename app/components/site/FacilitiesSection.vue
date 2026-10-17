<template>
  <section class="section bg-slate-50" aria-labelledby="facilities-heading">
    <div class="container-main">
      <div class="mx-auto mb-12 max-w-2xl text-center animate-fade-in animate-slide-up">
        <p class="eyebrow">Our Facilities</p>
        <h2 id="facilities-heading" class="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          State-of-the-Art Healing Environment
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600">
          Modern facilities designed for patient comfort, safety, and optimal clinical outcomes.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-card">
          <div class="aspect-video overflow-hidden bg-slate-100">
            <img class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="Main Hospital Campus exterior" width="400" height="250" loading="lazy" decoding="async" >
          </div>
          <div class="p-6">
            <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Main Hospital Campus</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">Our flagship 450-bed facility featuring advanced surgical suites, comprehensive emergency department, and specialized care units.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="badge-medical">450 Beds</span>
              <span class="badge-medical">12 OR Suites</span>
              <span class="badge-medical">Level 1 Trauma</span>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-card">
          <div class="aspect-video overflow-hidden bg-slate-100">
            <img class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Ikoyi Specialist Centre entrance" width="400" height="250" loading="lazy" decoding="async" >
          </div>
          <div class="p-6">
            <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Ikoyi Specialist Centre</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">Outpatient specialty clinics, diagnostic imaging, laboratory services, and physician offices in a convenient, patient-friendly setting.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="badge-medical">30+ Clinics</span>
              <span class="badge-medical">Imaging Center</span>
              <span class="badge-medical">Lab Services</span>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-card">
          <div class="aspect-video overflow-hidden bg-slate-100">
            <img class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" alt="Wellness & Rehabilitation Center therapy space" width="400" height="250" loading="lazy" decoding="async" >
          </div>
          <div class="p-6">
            <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">Wellness &amp; Rehab Center</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">Comprehensive physical therapy, occupational therapy, cardiac rehabilitation, and wellness programs in a modern facility.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="badge-medical">PT/OT Gym</span>
              <span class="badge-medical">Cardiac Rehab</span>
              <span class="badge-medical">Pool Therapy</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center animate-fade-in animate-slide-up">
        <NuxtLink to="/facilities" class="btn-secondary btn-lg">
          Virtual Tour
          <Icon name="i-lucide-chevron-right" class="h-5 w-5" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Facilities section — flat cards showing the hospital's main sites.
</script>
