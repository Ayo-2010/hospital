<template>
  <section
    class="relative overflow-hidden border-b border-slate-200"
    style="background-image: radial-gradient(120% 120% at 100% 0%, #f0f9ff 0%, #ffffff 45%)"
  >
    <div class="container-main grid items-center gap-10 py-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:py-20">
      <div class="animate-fade-in animate-slide-up">
        <p class="eyebrow">MedCore Hospital · Lagos</p>
        <h1 class="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.4rem]">
          Expert care,<br>
          <span class="text-medical-700">close to home.</span>
        </h1>
        <p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          From routine check-ups to complex surgery, our specialists deliver compassionate,
          coordinated care — with a full emergency department open around the clock.
        </p>

        <form class="mt-7 max-w-xl" role="search" @submit.prevent="searchDoctors">
          <label for="home-search" class="mb-2 block text-sm font-semibold text-slate-800">
            Find a doctor
          </label>
          <div class="flex flex-col gap-2 rounded-xl border border-slate-300 bg-white p-1.5 shadow-soft sm:flex-row sm:items-center">
            <span class="flex flex-1 items-center gap-2.5 px-2.5">
              <Icon name="i-lucide-search" class="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
              <input
                id="home-search"
                v-model="search"
                type="search"
                class="min-h-11 w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="Name or specialty, e.g. Cardiology"
              >
            </span>
            <button type="submit" class="btn-primary sm:px-6">
              Search
            </button>
          </div>
        </form>

        <div class="mt-4 flex flex-wrap items-center gap-2">
          <span class="text-sm text-slate-500">Popular:</span>
          <NuxtLink
            v-for="specialty in specialties"
            :key="specialty"
            :to="`${basePath}/doctors?specialty=${encodeURIComponent(specialty)}`"
            class="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-medical-400 hover:text-medical-800"
          >
            {{ specialty }}
          </NuxtLink>
        </div>

        <ul class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
          <li class="flex items-center gap-2">
            <Icon name="i-lucide-clock" class="h-4.5 w-4.5 text-medical-700" aria-hidden="true" />
            Emergency open 24/7
          </li>
          <li class="flex items-center gap-2">
            <Icon name="i-lucide-shield-check" class="h-4.5 w-4.5 text-medical-700" aria-hidden="true" />
            JCI accredited
          </li>
          <li class="flex items-center gap-2">
            <Icon name="i-lucide-credit-card" class="h-4.5 w-4.5 text-medical-700" aria-hidden="true" />
            Most HMOs accepted
          </li>
        </ul>
      </div>

      <div class="relative w-full animate-fade-in animate-scale-in">
        <figure class="m-0 h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card">
          <img
            :src="MEDIA.heroConsultation"
            alt="A clinician speaking with a patient in a bright treatment room."
            class="h-[360px] w-full object-cover object-center sm:h-[520px] lg:h-full lg:min-h-[600px]"
            width="900"
            height="1100"
            loading="eager"
            decoding="async"
          >
        </figure>

        <div class="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-elevated backdrop-blur sm:left-6 sm:right-auto sm:max-w-xs">
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-healing-50 text-healing-700">
            <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
          </span>
          <p class="text-sm leading-5">
            <span class="block font-display text-xl font-bold text-slate-950">98%</span>
            <span class="text-slate-600">patient satisfaction</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MEDIA } from '~/data/media'

const props = withDefaults(defineProps<{ basePath?: string }>(), { basePath: '' })

const basePath = computed(() => props.basePath)
const search = ref('')
const specialties = ['Cardiology', 'Paediatrics', 'Orthopaedics', 'Neurology']

function searchDoctors() {
  return navigateTo({
    path: `${basePath.value}/doctors`,
    query: search.value.trim() ? { q: search.value.trim() } : {},
  })
}
</script>
