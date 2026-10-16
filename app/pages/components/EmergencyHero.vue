<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Emergency medical team attending to a patient"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-emergency-950/92 via-emergency-900/80 to-emergency-800/55" />
    </div>

    <div class="container-main relative py-20 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 rounded-full bg-emergency-500/30 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
          <span class="relative flex h-2 w-2">
            <span class="absolute inset-0 rounded-full bg-white animate-ping" />
            <span class="relative block h-full w-full rounded-full bg-white" />
          </span>
          <strong>OPEN 24/7</strong> · Level 1 Trauma Center
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Emergency
          <br />
          <span class="text-gradient">Care</span>
        </h1>

        <p class="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
          Our Level 1 Trauma Center provides expert emergency care 24 hours a day, 7 days a week.
          Board-certified emergency physicians and specialized trauma teams are ready to treat any medical emergency.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:911"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-emergency-500 px-8 py-4 text-base font-semibold text-white shadow-elevated transition-all hover:bg-emergency-600 animate-pulse-subtle"
          >
            <Icon name="i-lucide-phone" class="h-5 w-5" />
            Call 911 for Emergencies
          </a>
          <a
            href="tel:+11234567890"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            <Icon name="i-lucide-truck" class="h-5 w-5" />
            Ambulance: +1 (123) 456-7890
          </a>
        </div>

        <div class="mt-12 grid grid-cols-3 gap-6 text-white/80">
          <div>
            <p class="text-2xl font-bold text-white">12 min</p>
            <p class="text-xs">Avg ER Wait</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">24/7</p>
            <p class="text-xs">Available</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">Level 1</p>
            <p class="text-xs">Trauma Center</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Emergency Hero Section - Modern image-forward design
</script>