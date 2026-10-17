<template>
  <section class="border-b border-slate-200 bg-white" aria-labelledby="careers-hero-heading">
    <div class="container-main grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
      <div class="animate-slide-up">
        <p class="eyebrow">Careers</p>
        <h1 id="careers-hero-heading" class="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.4rem]">
          Build a Career<br>
          <span class="text-medical-700">That Matters</span>
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Join 200+ healthcare professionals dedicated to exceptional patient care.
          Grow your career in a supportive, innovative environment with competitive benefits.
        </p>

        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="#open-positions" class="btn-primary btn-lg">
            <Icon name="i-lucide-search" class="h-5 w-5" aria-hidden="true" />
            View Open Positions
          </NuxtLink>
          <a href="mailto:careers@medcorehospital.com" class="btn-secondary btn-lg">
            <Icon name="i-lucide-mail" class="h-5 w-5" aria-hidden="true" />
            Email Us
          </a>
        </div>

        <dl class="mt-10 grid max-w-lg grid-cols-2 gap-4">
          <div
            v-for="highlight in highlights"
            :key="highlight.label"
            class="rounded-xl border border-slate-200 bg-white p-4"
          >
            <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
              <Icon :name="highlight.icon" class="h-5 w-5" aria-hidden="true" />
            </span>
            <dt class="mt-3 text-sm text-slate-500">{{ highlight.label }}</dt>
            <dd class="font-display text-lg font-semibold tracking-tight text-slate-950">{{ highlight.value }}</dd>
          </div>
        </dl>
      </div>

      <figure class="m-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 lg:justify-self-end">
        <img
          src="https://images.unsplash.com/photo-1527613552647-967b7b003264?auto=compress&cs=tinysrgb&w=1600&q=80"
          alt="Healthcare professionals working together in a modern hospital"
          class="h-[280px] w-full object-cover sm:h-[420px]"
          width="1100"
          height="820"
          loading="eager"
          decoding="async"
        >
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
const highlights = [
  { label: 'Salary & Benefits', value: 'Competitive', icon: 'i-lucide-landmark' },
  { label: 'Learning & Development', value: 'Growth', icon: 'i-lucide-graduation-cap' },
]
</script>
