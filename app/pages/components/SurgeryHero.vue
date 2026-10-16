<template>
  <section class="relative hero-gradient section overflow-hidden">
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-medical-200/50 blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-warm-200/50 blur-3xl animate-pulse-slow" style="animation-delay: 1s" />
    </div>

    <div class="container-main relative">
      <div class="max-w-3xl text-center animate-fade-in animate-slide-up">
        <span class="inline-block badge-medical mb-6">12 Operating Rooms</span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6">
          Advanced Surgical
          <br />
          <span class="text-gradient">Care</span>
        </h1>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          World-class surgical expertise with minimally invasive techniques, robotic surgery, 
          and enhanced recovery programs for faster healing.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-2">
            <Icon name="i-lucide-award" class="h-5 w-5 text-medical-500" />
            <span>5,000+ Surgeries/Year</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="i-lucide-cpu" class="h-5 w-5 text-healing-500" />
            <span>Da Vinci Robotic System</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="i-lucide-heart" class="h-5 w-5 text-warm-500" />
            <span>Enhanced Recovery</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Surgery Hero Section
</script>