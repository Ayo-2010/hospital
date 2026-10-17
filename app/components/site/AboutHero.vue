<template>
  <section class="border-b border-slate-200 bg-white" aria-labelledby="about-hero-heading">
    <div class="container-main grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
      <div class="animate-fade-in animate-slide-up">
        <p class="eyebrow">Since 1999</p>
        <h1 id="about-hero-heading" class="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl">
          Compassionate Care,<br>
          <span class="text-medical-700">Advanced Medicine.</span>
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          For over 25 years, MedCore Hospital has been dedicated to providing exceptional healthcare to our community.
        </p>

        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/about#mission" class="btn-primary btn-lg">
            <Icon name="i-lucide-heart-handshake" class="h-5 w-5" aria-hidden="true" />
            Our Mission
          </NuxtLink>
          <NuxtLink to="/departments" class="btn-secondary btn-lg">
            <Icon name="i-lucide-building" class="h-5 w-5" aria-hidden="true" />
            Explore Departments
          </NuxtLink>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
              <Icon name="i-lucide-users" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p class="font-display text-xl font-semibold text-slate-950">200+</p>
              <p class="text-xs text-slate-500">Medical Staff</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
              <Icon name="i-lucide-bed" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p class="font-display text-xl font-semibold text-slate-950">450</p>
              <p class="text-xs text-slate-500">Patient Beds</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
              <Icon name="i-lucide-award" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p class="font-display text-xl font-semibold text-slate-950">Level 1</p>
              <p class="text-xs text-slate-500">Trauma Center</p>
            </div>
          </div>
        </div>
      </div>

      <div class="animate-fade-in animate-scale-in lg:justify-self-end">
        <figure class="m-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=compress&cs=tinysrgb&w=1600&q=80"
            alt="Modern hospital exterior with glass facade and greenery"
            class="h-[280px] w-full object-cover sm:h-[420px]"
            width="1100"
            height="820"
            loading="eager"
            decoding="async"
          >
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// About hero — a calm, image-forward introduction to the hospital.
</script>
