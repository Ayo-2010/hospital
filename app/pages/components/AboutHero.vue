<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Modern hospital exterior with glass facade and greenery"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-medical-950/90 via-medical-900/80 to-medical-800/60" />
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
    </div>

    <div class="container-main relative py-20 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
          <Icon name="i-lucide-shield-check" class="h-4 w-4" aria-hidden="true" />
          Since 1999
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Compassionate Care,
          <br />
          <span class="text-gradient">Advanced Medicine.</span>
        </h1>
        <p class="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
          For over 25 years, MedCore Hospital has been dedicated to providing exceptional healthcare to our community.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="/about#mission"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-medical-900 shadow-elevated transition-all hover:bg-medical-50 hover:shadow-glow"
          >
            <Icon name="i-lucide-heart-handshake" class="h-5 w-5" />
            Our Mission
          </NuxtLink>
          <NuxtLink
            to="/departments"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            <Icon name="i-lucide-building-2" class="h-5 w-5" />
            Explore Departments
          </NuxtLink>
        </div>

        <div class="mt-12 flex flex-wrap items-center gap-8 text-white/70">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-users" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">200+</p>
              <p class="text-xs">Medical Staff</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-bed" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">450</p>
              <p class="text-xs">Patient Beds</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <Icon name="i-lucide-award" class="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p class="text-2xl font-bold text-white">Level 1</p>
              <p class="text-xs">Trauma Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// About Hero Section - Modern image-forward design
</script>