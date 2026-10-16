<template>
  <section class="relative hero-gradient section overflow-hidden">
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-medical-200/50 blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-healing-200/50 blur-3xl animate-pulse-slow" style="animation-delay: 1s" />
    </div>

    <div class="container-main relative">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="animate-fade-in animate-slide-up">
          <div class="inline-flex items-center gap-2 rounded-full bg-medical-100/80 px-4 py-1.5 text-sm font-medium text-medical-700 dark:bg-medical-900/40 dark:text-medical-300 mb-6 stagger-1">
            <span class="relative flex h-2 w-2">
              <span class="absolute inset-0 rounded-full bg-medical-500 animate-ping" />
              <span class="relative block h-full w-full rounded-full bg-medical-500" />
            </span>
            ER Wait Time: 12 minutes
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-slate-900 dark:text-white leading-tight stagger-2">
            Compassionate Care.
            <br />
            <span class="text-gradient">Advanced Medicine.</span>
            <br />
            Better Outcomes.
          </h1>

          <p class="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed stagger-3">
            Access trusted medical professionals, modern facilities, specialist services, diagnostics, surgery, pharmacy, and coordinated patient care—all from one integrated healthcare platform.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row gap-4 stagger-4">
            <NuxtLink to="/appointments/book" class="btn-primary text-lg px-8 py-4">
              <Icon name="i-lucide-calendar-plus" class="h-5 w-5" />
              Book an Appointment
            </NuxtLink>
            <NuxtLink to="/doctors" class="btn-secondary text-lg px-8 py-4">
              <Icon name="i-lucide-user-round-search" class="h-5 w-5" />
              Find a Doctor
            </NuxtLink>
          </div>

          <div class="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 stagger-5">
            <div class="flex items-center gap-2">
              <Icon name="i-lucide-shield-check" class="h-5 w-5 text-medical-500" />
              <span>HIPAA Compliant</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="i-lucide-award" class="h-5 w-5 text-healing-500" />
              <span>Joint Commission Accredited</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="i-lucide-clock" class="h-5 w-5 text-warm-500" />
              <span>24/7 Emergency Care</span>
            </div>
          </div>
        </div>

        <div class="relative animate-scale-in stagger-6" style="animation-delay: 300ms">
          <div class="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              alt="Modern hospital facility with medical staff"
              class="w-full h-auto object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div class="absolute bottom-6 left-6 right-6">
              <div class="flex flex-wrap items-center gap-4 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div class="flex items-center gap-3">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Icon name="i-lucide-heart-pulse" class="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-white/70">Patient Satisfaction</p>
                    <p class="text-2xl font-bold text-white">98%</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 border-l border-white/20 pl-4 ml-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Icon name="i-lucide-star" class="h-6 w-6 text-warm-400" />
                  </div>
                  <div>
                    <p class="text-sm text-white/70">Google Rating</p>
                    <p class="text-2xl font-bold text-white">4.9/5</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 border-l border-white/20 pl-4 ml-2">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Icon name="i-lucide-clock" class="h-6 w-6 text-medical-300" />
                  </div>
                  <div>
                    <p class="text-sm text-white/70">Avg. Wait Time</p>
                    <p class="text-2xl font-bold text-white">12 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8">
            <div class="glass rounded-2xl p-4 shadow-elevated border border-white/30">
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-emergency-100 dark:bg-emergency-900/40">
                  <Icon name="i-lucide-ambulance" class="h-5 w-5 text-emergency-600 dark:text-emergency-400" />
                </div>
                <div>
                  <p class="text-sm font-medium text-slate-900 dark:text-white">Emergency Department</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Open 24/7 · Level 1 Trauma Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section with hospital imagery and key stats
</script>