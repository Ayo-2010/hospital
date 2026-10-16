<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=compress&cs=tinysrgb&w=1600&q=80"
        alt="Modern hospital reception and welcome desk"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-medical-950/90 via-medical-900/75 to-medical-800/50" />
    </div>

    <div class="container-main relative py-20 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6">
          <Icon name="i-lucide-message-circle" class="h-4 w-4" aria-hidden="true" />
          We're Here to Help
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
          Contact
          <br />
          <span class="text-gradient">Us</span>
        </h1>
        <p class="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10">
          Have questions? We'd love to hear from you. Reach out through any of the channels below.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+11234567890"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-medical-900 shadow-elevated transition-all hover:bg-medical-50 hover:shadow-glow"
          >
            <Icon name="i-lucide-phone" class="h-5 w-5" />
            Call Now
          </a>
          <NuxtLink
            to="#contact-form"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            <Icon name="i-lucide-send" class="h-5 w-5" />
            Send a Message
          </NuxtLink>
        </div>

        <div class="mt-12 grid grid-cols-3 gap-6 text-white/80">
          <div>
            <p class="text-2xl font-bold text-white">24/7</p>
            <p class="text-xs">Emergency Line</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">&lt; 24h</p>
            <p class="text-xs">Response Time</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">3</p>
            <p class="text-xs">Locations</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Contact Hero Section - Modern image-forward design
</script>