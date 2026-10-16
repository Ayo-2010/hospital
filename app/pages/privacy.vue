<template>
  <main class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Privacy Policy</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Privacy Policy
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Last updated: October 15, 2026
        </p>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          Demonstration privacy policy. Not a substitute for actual legal counsel.
        </p>
      </div>

      <div class="prose prose-sm max-w-3xl">
        <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>

        <h2>Information we collect</h2>
        <p>We collect information necessary to provide healthcare services, including:</p>
        <ul>
          <li>Personal details (name, address, phone, email)</li>
          <li>Medical history and treatment information</li>
          <li>Payment and insurance information</li>
          <li>Communications with our staff</li>
        </ul>

        <h2>How we use your information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and coordinate your healthcare services</li>
          <li>Communicate with you about your care and appointments</li>
          <li>Billing and insurance processing</li>
          <li>Improve our services and quality of care</li>
        </ul>

        <h2>Data protection and security</h2>
        <p>We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse. All electronic health records are encrypted and access is logged.</p>

        <h2>Your rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your medical records</li>
          <li>Request corrections to your information</li>
          <li>Request a copy of this privacy policy</li>
        </ul>

        <h2>Contact us</h2>
        <p>If you have questions about this privacy policy, contact our Privacy Officer:</p>
        <p>
          Email: <a class="text-medical-800" href="mailto:privacy@medcorehms.com">privacy@medcorehms.com</a><br />
          Phone: <a class="text-medical-800" href="tel:+11234567890">+1 (123) 456-7890</a>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
useHead({ title: 'Privacy Policy | MedCore Hospital' })
</script>
