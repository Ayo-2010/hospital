<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Cardiology diagnostic equipment and heart care"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-medical-950/90 via-medical-900/75 to-medical-800/50" />
    </div>

    <div class="container-main relative py-20 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
          <Icon name="i-lucide-stethoscope" class="h-4 w-4" aria-hidden="true" />
          Comprehensive Care
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Healthcare
          <br />
          <span class="text-gradient">Services</span>
        </h1>
        <p class="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
          From preventive care to complex treatments, our integrated services ensure
          seamless, coordinated care for every stage of life.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="/services#services-grid"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-medical-900 shadow-elevated transition-all hover:bg-medical-50 hover:shadow-glow"
          >
            <Icon name="i-lucide-grid" class="h-5 w-5" />
            Explore Services
          </NuxtLink>
          <NuxtLink
            to="/departments"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            <Icon name="i-lucide-building-2" class="h-5 w-5" />
            View Departments
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Services Hero Section - Modern image-forward design
</script>