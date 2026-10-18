<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Terms & Conditions</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Terms & Conditions
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Last updated: October 15, 2026
        </p>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          Demonstration terms. Not a substitute for actual legal counsel.
        </p>
      </div>

      <div class="prose">
        <p>By using our services, you agree to the following terms and conditions.</p>

        <h2>Acceptance of Terms</h2>
        <p>These terms apply to all visitors, patients, and users of our healthcare services and platforms.</p>

        <h2>Service Usage</h2>
        <p>Our services are intended for legitimate healthcare purposes. Misuse may result in restricted access.</p>

        <h2>Online Scheduling</h2>
        <p>We do not guarantee specific appointment times through online scheduling. Urgent matters should be directed to our main phone line or emergency department.</p>

        <h2>Medical Information</h2>
        <p>Health information provided on this site is for educational purposes only and should not replace professional medical advice.</p>

        <h2>Third-Party Links</h2>
        <p>Our site may contain links to third-party services. We are not responsible for the content or practices of these services.</p>

        <h2>Limitation of Liability</h2>
        <p>We strive for accuracy but do not warrant completeness. Always consult a qualified clinician.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
useHead({ title: 'Terms & Conditions | MedCore Hospital' })
</script>
