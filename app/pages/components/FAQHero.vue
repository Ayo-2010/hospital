<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Patient and care team in discussion"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-medical-950/90 via-medical-900/75 to-medical-800/50" />
    </div>

    <div class="container-main relative py-20 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
          <Icon name="i-lucide-help-circle" class="h-4 w-4" aria-hidden="true" />
          Quick Answers
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Frequently Asked
          <br />
          <span class="text-gradient">Questions</span>
        </h1>
        <p class="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
          Find answers to common questions about our services, appointments, billing, and more.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="#faq-categories"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-medical-900 shadow-elevated transition-all hover:bg-medical-50 hover:shadow-glow"
          >
            <Icon name="i-lucide-list" class="h-5 w-5" />
            Browse Questions
          </NuxtLink>
          <a
            href="mailto:info@medcorehms.com"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            <Icon name="i-lucide-mail" class="h-5 w-5" />
            Ask a Question
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// FAQ Hero Section - Modern image-forward design
</script>