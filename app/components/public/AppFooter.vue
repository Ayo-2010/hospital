<template>
  <footer class="border-t border-slate-200 bg-slate-50" role="contentinfo">
    <div class="container-main grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
      <div class="max-w-xs">
        <NuxtLink to="/" class="inline-flex items-center gap-2.5 text-medical-950" aria-label="MedCore Hospital — home">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-700 text-white">
            <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
          </span>
          <span class="font-display text-lg font-semibold">MedCore Hospital</span>
        </NuxtLink>
        <p class="mt-4 text-sm leading-6 text-slate-600">
          Compassionate care and advanced medicine for our community — from emergency and surgery to everyday check-ups.
        </p>

        <div class="mt-5 space-y-2 text-sm">
          <a href="tel:+2347045033528" class="flex items-center gap-2 font-semibold text-medical-800 hover:underline">
            <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
            0704 503 3528
          </a>
          <p class="flex items-start gap-2 text-slate-600">
            <Icon name="i-lucide-map-pin" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>12 Adeola Odeku Street<br>Victoria Island, Lagos 101241</span>
          </p>
        </div>
      </div>

      <nav aria-labelledby="footer-care">
        <h2 id="footer-care" class="text-sm font-semibold text-slate-900">Find care</h2>
        <ul class="mt-3.5 space-y-2.5 text-sm">
          <li v-for="link in careLinks" :key="link.to">
            <NuxtLink :to="link.to" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-centers">
        <h2 id="footer-centers" class="text-sm font-semibold text-slate-900">Centers &amp; services</h2>
        <ul class="mt-3.5 space-y-2.5 text-sm">
          <li v-for="link in centerLinks" :key="link.to">
            <NuxtLink :to="link.to" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-hospital">
        <h2 id="footer-hospital" class="text-sm font-semibold text-slate-900">Hospital</h2>
        <ul class="mt-3.5 space-y-2.5 text-sm">
          <li v-for="link in hospitalLinks" :key="link.to">
            <NuxtLink :to="link.to" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="border-t border-slate-200">
      <div class="container-main flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ new Date().getFullYear() }} MedCore Hospital · Demonstration website</p>
        <p>
          For an immediate emergency, call
          <a class="font-semibold text-emergency-700 underline underline-offset-2" href="tel:112">112</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const careLinks = [
  { label: 'Find a doctor', to: '/doctors' },
  { label: 'Departments', to: '/departments' },
  { label: 'Medical services', to: '/services' },
  { label: 'Request an appointment', to: '/appointments/book' },
]

const centerLinks = [
  { label: 'Emergency care', to: '/emergency' },
  { label: 'Laboratory & diagnostics', to: '/laboratory' },
  { label: 'Pharmacy', to: '/pharmacy' },
  { label: 'Surgery & procedures', to: '/surgery' },
]

const hospitalLinks = [
  { label: 'Patient portal', to: '/auth/login' },
  { label: 'Health information', to: '/health-information' },
  { label: 'Frequently asked questions', to: '/faq' },
  { label: 'About us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]
</script>
