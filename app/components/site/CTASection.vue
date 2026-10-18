<template>
  <section class="bg-slate-50" aria-labelledby="cta-heading">
    <div class="container-main py-14 sm:py-20">
      <div
        class="rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16"
        style="background-image: radial-gradient(120% 140% at 100% 0%, #075985 0%, #0c4a6e 60%)"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-medical-200">Ready to schedule</p>
        <h2 id="cta-heading" class="mx-auto mt-3 max-w-2xl text-white">
          Book your visit with MedCore
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-medical-100">
          Request an appointment online and our team will follow up to confirm your time, clinician
          and location — no waiting on hold.
        </p>

        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink to="/appointments/book" class="btn btn-lg bg-white text-medical-800 hover:bg-medical-50">
            <Icon name="i-lucide-calendar-plus" class="h-5 w-5" aria-hidden="true" />
            Book an appointment
          </NuxtLink>
          <a href="tel:+2347045033528" class="btn btn-lg border border-white/30 text-white hover:bg-white/10">
            <Icon name="i-lucide-phone" class="h-5 w-5" aria-hidden="true" />
            0704 503 3528
          </a>
        </div>

        <ul class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-medical-100">
          <li v-for="item in assurances" :key="item" class="inline-flex items-center gap-2">
            <Icon name="i-lucide-check" class="h-4 w-4 text-healing-400" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const assurances = [
  'Same-day appointments available',
  'Most HMOs accepted',
  'Convenient location with parking',
]
</script>
