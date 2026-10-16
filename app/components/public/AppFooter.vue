<template>
  <footer class="border-t border-slate-200 bg-slate-50 text-slate-600" role="contentinfo">
    <div class="container-main grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-12 lg:py-11">
      <div>
        <NuxtLink to="/" class="inline-flex items-center gap-3 text-medical-900">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-700 text-white">
            <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
          </span>
          <span class="font-display text-lg font-semibold">MedCore Hospital</span>
        </NuxtLink>
        <p class="mt-3 max-w-xs text-sm leading-6 text-slate-600">
          Care information for patients, families, and visitors.
        </p>
        <p class="mt-2 text-xs leading-5 text-slate-500">
          Demonstration website with sample content.
        </p>
      </div>

      <div>
        <h2 class="text-sm font-semibold text-slate-900">Find care</h2>
        <ul class="mt-3 space-y-2.5 text-sm">
          <li><NuxtLink to="/doctors" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Doctors</NuxtLink></li>
          <li><NuxtLink to="/departments" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Departments</NuxtLink></li>
          <li><NuxtLink to="/services" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Services</NuxtLink></li>
          <li><NuxtLink to="/appointments/book" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Appointment request</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h2 class="text-sm font-semibold text-slate-900">Patient information</h2>
        <ul class="mt-3 space-y-2.5 text-sm">
          <li><NuxtLink to="/auth/login" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Patient portal</NuxtLink></li>
          <li><NuxtLink to="/faq" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Frequently asked questions</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Contact</NuxtLink></li>
          <li><NuxtLink to="/privacy" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Privacy</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h2 class="text-sm font-semibold text-slate-900">Visit</h2>
        <ul class="mt-3 space-y-2.5 text-sm">
          <li><NuxtLink to="/emergency" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Emergency information</NuxtLink></li>
          <li><NuxtLink to="/health-information" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Health information</NuxtLink></li>
          <li><NuxtLink to="/careers" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Careers</NuxtLink></li>
          <li><NuxtLink to="/surgery" class="text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline">Surgery &amp; procedures</NuxtLink></li>
        </ul>
      </div>

      <address class="not-italic text-sm leading-6">
        <h2 class="text-sm font-semibold text-slate-900">Contact</h2>
        <p class="mt-3">123 Medical Center Drive<br />Healthcare District, HC 12345</p>
        <a class="mt-2 block text-sm font-semibold text-medical-800 underline decoration-medical-200 underline-offset-4" href="tel:+11234567890">
          +1 (123) 456-7890
        </a>
        <p class="mt-2 text-xs">Demonstration contact details.</p>
      </address>
    </div>

    <div class="border-t border-slate-200">
      <div class="container-main flex flex-col gap-2 py-4 text-xs sm:flex-row sm:items-center sm:justify-between text-slate-500">
        <span>&copy; {{ new Date().getFullYear() }} MedCore Hospital · Demonstration website</span>
        <span>For an immediate emergency in the U.S., call <a class="font-semibold text-emergency-700 underline" href="tel:911">911</a>.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
