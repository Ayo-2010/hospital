<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1527613552647-967b7b003264?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Healthcare professionals working together in a modern hospital"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-medical-950/90 via-medical-900/75 to-medical-800/50" />
    </div>

    <div class="container-main relative py-20 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
          <Icon name="i-lucide-briefcase" class="h-4 w-4" aria-hidden="true" />
          Join Our Team
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Build a Career
          <br />
          <span class="text-gradient">That Matters</span>
        </h1>
        <p class="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
          Join 200+ healthcare professionals dedicated to exceptional patient care.
          Grow your career in a supportive, innovative environment with competitive benefits.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="#open-positions"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-medical-900 shadow-elevated transition-all hover:bg-medical-50 hover:shadow-glow"
          >
            <Icon name="i-lucide-search" class="h-5 w-5" />
            View Open Positions
          </NuxtLink>
          <a
            href="mailto:careers@medcorehms.com"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            <Icon name="i-lucide-mail" class="h-5 w-5" />
            Email Us
          </a>
        </div>

        <div class="mt-12 flex flex-wrap items-center gap-8 text-white/70">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-landmark" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">Competitive</p>
              <p class="text-xs">Salary & Benefits</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-graduation-cap" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">Growth</p>
              <p class="text-xs">Learning & Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Careers Hero Section - Modern image-forward design
</script>