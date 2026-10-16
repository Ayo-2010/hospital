<script setup lang="ts">

const props = defineProps<{ direction: string; basePath?: string }>()
const base = computed(() => props.basePath ?? `/previews/${props.direction}`)
const homePath = computed(() => base.value || '/')
const isDark = computed(() => props.direction !== 'clinician-first')
</script>

<template>
  <footer :class="isDark ? 'bg-slate-950 text-slate-200' : 'border-t border-slate-200 bg-slate-50 text-slate-600'">
    <div class="container-main grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-12 lg:py-11">
      <div>
        <NuxtLink :to="homePath" class="inline-flex items-center gap-3" :class="isDark ? 'text-white' : 'text-medical-900'">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-700 text-white">
            <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
          </span>
          <span class="font-display text-lg font-semibold">MedCore Hospital</span>
        </NuxtLink>
        <p class="mt-3 max-w-xs text-sm leading-6" :class="isDark ? 'text-slate-300' : 'text-slate-600'">
          Care information for patients, families, and visitors.
        </p>
        <p class="mt-2 text-xs leading-5" :class="isDark ? 'text-slate-400' : 'text-slate-500'">Preview content; sample clinician records are fictional.</p>
      </div>

      <div>
        <h2 class="text-sm font-semibold" :class="isDark ? 'text-white' : 'text-slate-900'">Find care</h2>
        <ul class="mt-3 space-y-2.5 text-sm">
          <li><NuxtLink :to="`${base}/doctors`" class="hover:underline">Doctors</NuxtLink></li>
          <li><NuxtLink to="/departments" class="hover:underline">Departments</NuxtLink></li>
          <li><NuxtLink to="/services" class="hover:underline">Services</NuxtLink></li>
          <li><NuxtLink :to="`${base}/appointments/book`" class="hover:underline">Appointment request</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h2 class="text-sm font-semibold" :class="isDark ? 'text-white' : 'text-slate-900'">Patient information</h2>
        <ul class="mt-3 space-y-2.5 text-sm">
          <li><NuxtLink to="/auth/login" class="hover:underline">Patient portal</NuxtLink></li>
          <li><NuxtLink to="/faq" class="hover:underline">Frequently asked questions</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
          <li><NuxtLink to="/privacy" class="hover:underline">Privacy</NuxtLink></li>
        </ul>
      </div>

      <address class="not-italic text-sm leading-6">
        <h2 class="text-sm font-semibold" :class="isDark ? 'text-white' : 'text-slate-900'">Contact</h2>
        <p class="mt-3">123 Medical Center Drive<br>Healthcare District, HC 12345</p>
        <a class="underline underline-offset-4" :class="isDark ? 'text-white' : 'text-medical-800'" href="tel:+11234567890">+1 (123) 456-7890</a>
        <p class="mt-2 text-xs" :class="isDark ? 'text-slate-400' : 'text-slate-500'">Demonstration contact details.</p>
      </address>
    </div>

    <div :class="isDark ? 'border-t border-slate-800' : 'border-t border-slate-200'">
      <div class="container-main flex flex-col gap-2 py-4 text-xs sm:flex-row sm:items-center sm:justify-between" :class="isDark ? 'text-slate-400' : 'text-slate-500'">
        <span>© {{ new Date().getFullYear() }} MedCore Hospital · Demonstration website</span>
        <span>For an immediate emergency in the U.S., call <a class="font-semibold text-emergency-700 underline" href="tel:911">911</a>.</span>
      </div>
    </div>
  </footer>
</template>
