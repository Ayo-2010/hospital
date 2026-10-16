<template>
  <section class="relative hero-gradient section overflow-hidden">
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-medical-200/50 blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-healing-200/50 blur-3xl animate-pulse-slow" style="animation-delay: 1s" />
    </div>

    <div class="container-main relative">
      <div class="max-w-3xl text-center animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-6">200+ Specialists</span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6">
          Find Your
          <br />
          <span class="text-gradient">Perfect Doctor</span>
        </h1>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          Search by specialty, location, language, or insurance. Book appointments online with our top-rated physicians.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <NuxtLink to="/appointments/book" class="btn-primary text-lg px-8 py-3">
            <Icon name="i-lucide-calendar-plus" class="h-5 w-5" />
            Book Appointment
          </NuxtLink>
          <NuxtLink to="/departments" class="btn-secondary text-lg px-8 py-3">
            Browse by Specialty
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Doctors Hero Section
</script>