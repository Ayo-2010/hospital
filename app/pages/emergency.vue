<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Emergency Care</span>
      </nav>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div>
          <h1 class="font-display text-4xl font-semibold tracking-tight text-emergency-900 sm:text-[44px]">
            Emergency care
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Our emergency department is open 24 hours a day, 7 days a week, providing
            immediate medical attention for life-threatening conditions. Our rapid response
            teams and advanced technology ensure you receive the care you need quickly.
          </p>
        </div>
        <aside class="flex items-start gap-3 rounded-md border border-emergency-200 bg-emergency-50 px-4 py-3.5">
          <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 text-emergency-700" />
          <p class="text-sm leading-5 text-emergency-900">
            <strong class="block font-semibold">Call 112 for life-threatening emergencies</strong>
            For non-emergency medical questions, call our main line at 0704 503 3528.
          </p>
        </aside>
      </div>

      <div class="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div class="space-y-8">
          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">What to expect</h2>
            <ul class="mt-4 space-y-3 text-slate-600">
              <li class="flex items-start gap-3">
                <div class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                  <span class="text-xs font-semibold">1</span>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900">Arrival</h3>
                  <p class="text-sm">Our triage team assesses the urgency of your condition immediately upon arrival.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                  <span class="text-xs font-semibold">2</span>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900">Care</h3>
                  <p class="text-sm">Experienced emergency doctors and nurses provide immediate treatment.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                  <span class="text-xs font-semibold">3</span>
                </div>
                <div>
                  <h3 class="font-semibold text-slate-900">Follow-up</h3>
                  <p class="text-sm">We arrange follow-up care with your family doctor when appropriate.</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Common emergency conditions</h2>
            <ul class="mt-3 grid gap-2 text-slate-600 sm:grid-cols-2">
              <li class="flex items-center gap-2">
                <Icon name="i-lucide-chevron-right" class="h-3.5 w-3.5 text-medical-700" />
                <span>Chest pain & heart attack</span>
              </li>
              <li class="flex items-center gap-2">
                <Icon name="i-lucide-chevron-right" class="h-3.5 w-3.5 text-medical-700" />
                <span>Stroke & neurological emergencies</span>
              </li>
              <li class="flex items-center gap-2">
                <Icon name="i-lucide-chevron-right" class="h-3.5 w-3.5 text-medical-700" />
                <span>Breathing difficulties</span>
              </li>
              <li class="flex items-center gap-2">
                <Icon name="i-lucide-chevron-right" class="h-3.5 w-3.5 text-medical-700" />
                <span>Trauma & fractures</span>
              </li>
              <li class="flex items-center gap-2">
                <Icon name="i-lucide-chevron-right" class="h-3.5 w-3.5 text-medical-700" />
                <span>Severe infections</span>
              </li>
              <li class="flex items-center gap-2">
                <Icon name="i-lucide-chevron-right" class="h-3.5 w-3.5 text-medical-700" />
                <span>Accidents & injuries</span>
              </li>
            </ul>
          </section>

          <section class="rounded-lg border border-medical-200 bg-medical-50 p-6">
            <h2 class="font-display text-xl font-semibold text-medical-950">Emergency department visiting hours</h2>
            <p class="mt-2 text-sm text-medical-800">Open 24 hours a day, 7 days a week — no appointments needed.</p>
            <p class="mt-1 text-xs text-slate-500">Demonstration information.</p>
          </section>
        </div>

        <aside class="space-y-6">
          <div class="rounded-lg border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Hospital location</h2>
            <p class="mt-2 text-sm text-slate-600">
              12 Adeola Odeku Street<br />
              Victoria Island, Lagos 101241
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-medical-800"
            >
              <Icon name="i-lucide-map-pin" class="h-4 w-4" />
              View on map
            </a>
          </div>
          <div class="flex items-start gap-3 rounded-md border border-emergency-200 bg-emergency-50 px-4 py-3.5">
            <Icon name="i-lucide-phone" class="mt-0.5 h-5 w-5 text-emergency-700" />
            <p class="text-sm leading-5 text-emergency-900">
              <strong class="font-semibold">Emergency department: </strong>0704 503 3528
            </p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Emergency Care 24/7 | MedCore Hospital' })
</script>
