<template>
  <section class="border-b border-slate-200 bg-slate-50" aria-labelledby="contact-hero-heading">
    <div class="container-main py-12 sm:py-16">
      <div class="max-w-3xl animate-fade-in">
        <p class="eyebrow">Contact MedCore Hospital</p>
        <h1 id="contact-hero-heading" class="mt-3">
          We're here to help
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Questions about your care, an appointment or a bill? Reach our team by phone, email
          or the message form below — we usually reply within 24–48 hours.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contact-form" class="btn-primary btn-lg">
            <Icon name="i-lucide-send" class="h-5 w-5" aria-hidden="true" />
            Send a message
          </a>
          <a href="tel:+2347045033528" class="btn-secondary btn-lg">
            <Icon name="i-lucide-phone" class="h-5 w-5" aria-hidden="true" />
            0704 503 3528
          </a>
        </div>
      </div>

      <dl class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="rounded-xl border border-slate-200 bg-white p-5 animate-fade-in"
          :class="`stagger-${index + 1}`"
        >
          <dt class="text-sm text-slate-600">{{ stat.label }}</dt>
          <dd class="mt-1 font-display text-2xl font-semibold tracking-tight text-slate-950">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '24/7', label: 'Emergency line' },
  { value: 'Under 24h', label: 'Typical response time' },
  { value: '3', label: 'Hospital locations' },
]
</script>
