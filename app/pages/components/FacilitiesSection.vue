<template>
  <section class="section bg-slate-50 dark:bg-slate-900/30" aria-labelledby="facilities-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-3">Our Facilities</span>
        <h2 id="facilities-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          State-of-the-Art Healing Environment
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Modern facilities designed for patient comfort, safety, and optimal clinical outcomes.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-soft hover:shadow-elevated transition-shadow">
          <div class="aspect-video overflow-hidden">
            <img class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://images.pexels.com/photos/1519494026892-80bbd2d6fd0d.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Main Hospital Campus" width="400" height="250" loading="lazy" />
          </div>
          <div class="p-6">
            <h3 class="font-display text-xl font-semibold text-slate-900 dark:text-white">Main Hospital Campus</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Our flagship 450-bed facility featuring advanced surgical suites, comprehensive emergency department, and specialized care units.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="badge-medical text-xs">450 Beds</span>
              <span class="badge-medical text-xs">12 OR Suites</span>
              <span class="badge-medical text-xs">Level 1 Trauma</span>
            </div>
          </div>
        </div>

        <div class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-soft hover:shadow-elevated transition-shadow">
          <div class="aspect-video overflow-hidden">
            <img class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://images.pexels.com/photos/1576091160399-112ba8d25d1d.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Medical Office Building" width="400" height="250" loading="lazy" />
          </div>
          <div class="p-6">
            <h3 class="font-display text-xl font-semibold text-slate-900 dark:text-white">Medical Office Building</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Outpatient specialty clinics, diagnostic imaging, laboratory services, and physician offices in a convenient, patient-friendly setting.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="badge-medical text-xs">30+ Clinics</span>
              <span class="badge-medical text-xs">Imaging Center</span>
              <span class="badge-medical text-xs">Lab Services</span>
            </div>
          </div>
        </div>

        <div class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-soft hover:shadow-elevated transition-shadow">
          <div class="aspect-video overflow-hidden">
            <img class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://images.pexels.com/photos/1576091160550-2173dba999ef.jpeg?auto=compress&cs=tinysrgb&w=800&q=80" alt="Wellness & Rehabilitation Center" width="400" height="250" loading="lazy" />
          </div>
          <div class="p-6">
            <h3 class="font-display text-xl font-semibold text-slate-900 dark:text-white">Wellness & Rehab Center</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Comprehensive physical therapy, occupational therapy, cardiac rehabilitation, and wellness programs in a modern facility.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="badge-medical text-xs">PT/OT Gym</span>
              <span class="badge-medical text-xs">Cardiac Rehab</span>
              <span class="badge-medical text-xs">Pool Therapy</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center animate-fade-in animate-slide-up stagger-3">
        <NuxtLink to="/facilities" class="btn-secondary text-lg px-8 py-3">
          Virtual Tour
          <Icon name="i-lucide-chevron-right" class="h-5 w-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Facilities Section - Care Gateway design with images
</script>