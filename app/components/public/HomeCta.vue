<template>
  <section class="bg-slate-50" aria-labelledby="home-cta-title">
    <div class="container-main py-14 sm:py-20">
      <div
        class="relative overflow-hidden rounded-2xl bg-medical-800 px-6 py-12 text-center sm:px-12 sm:py-16"
        style="background-image: radial-gradient(120% 140% at 100% 0%, #075985 0%, #0c4a6e 60%)"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-medical-200">Ready when you are</p>
        <h2 id="home-cta-title" class="mx-auto mt-3 max-w-2xl text-white">
          Book your visit in a few minutes
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-medical-100">
          Send an appointment request online and our team will follow up to confirm your time,
          clinician and location.
        </p>

        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            :to="`${basePath}/appointments/book`"
            class="btn bg-white text-medical-800 hover:bg-medical-50 btn-lg"
          >
            <Icon name="i-lucide-calendar-plus" class="h-5 w-5" aria-hidden="true" />
            Request an appointment
          </NuxtLink>
          <a
            href="tel:+2347045033528"
            class="btn border border-white/30 text-white hover:bg-white/10 btn-lg"
          >
            <Icon name="i-lucide-phone" class="h-5 w-5" aria-hidden="true" />
            0704 503 3528
          </a>
        </div>

        <p class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-medical-200">
          <span class="inline-flex items-center gap-2">
            <Icon name="i-lucide-clock" class="h-4 w-4" aria-hidden="true" />
            Emergency care open 24/7
          </span>
          <span class="inline-flex items-center gap-2">
            <Icon name="i-lucide-map-pin" class="h-4 w-4" aria-hidden="true" />
            12 Adeola Odeku Street
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ basePath?: string }>(), { basePath: '' })
const basePath = computed(() => props.basePath)
</script>
