<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Medical specialists collaborating in a modern hospital"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-medical-950/90 via-medical-900/75 to-medical-800/50" />
    </div>

    <div class="container-main relative py-20 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
          <Icon name="i-lucide-stethoscope" class="h-4 w-4" aria-hidden="true" />
          15+ Specialties
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Specialized Medical
          <br />
          <span class="text-gradient">Departments</span>
        </h1>
        <p class="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
          Expert physicians across every major specialty, working together to provide
          comprehensive, coordinated care for you and your family.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="/departments"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-medical-900 shadow-elevated transition-all hover:bg-medical-50 hover:shadow-glow"
          >
            <Icon name="i-lucide-grid-3x3" class="h-5 w-5" />
            Browse All Departments
          </NuxtLink>
          <NuxtLink
            to="/doctors"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            <Icon name="i-lucide-user-round-search" class="h-5 w-5" />
            Find a Specialist
          </NuxtLink>
        </div>

        <div class="mt-12 flex flex-wrap items-center gap-8 text-white/70">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-users" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">200+</p>
              <p class="text-xs">Specialists</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-calendar" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">Same-Day</p>
              <p class="text-xs">Appointments</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-map-pin" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">3</p>
              <p class="text-xs">Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Departments Hero Section - Modern image-forward design
</script>