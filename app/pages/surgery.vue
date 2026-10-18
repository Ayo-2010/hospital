<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Surgery</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Surgical services
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Our surgical department offers comprehensive surgical services using advanced techniques
          including minimally invasive, laparoscopic, and robotic surgery. Our surgical teams work
          collaboratively to provide safe, effective care.
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div class="space-y-8">
          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Surgical specialties</h2>
            <ul class="mt-4 space-y-3 text-slate-600">
              <li v-for="spec in specialties" :key="spec.id" class="flex items-start gap-3">
                <Icon :name="spec.icon" class="mt-0.5 h-5 w-5 text-medical-700" />
                <div>
                  <h3 class="font-semibold text-slate-900">{{ spec.name }}</h3>
                  <p class="text-sm">{{ spec.description }}</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">What to expect</h2>
            <ol class="mt-4 space-y-3 text-slate-600">
              <li class="flex items-start gap-3">
                <div class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                  <span class="text-xs font-semibold">1</span>
                </div>
                <p>Pre-operative consultation and testing at least 48 hours before surgery.</p>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                  <span class="text-xs font-semibold">2</span>
                </div>
                <p>Arrive at the surgical center 2 hours before your scheduled procedure.</p>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                  <span class="text-xs font-semibold">3</span>
                </div>
                <p>Recovery in our dedicated post-anaesthesia care unit.</p>
              </li>
              <li class="flex items-start gap-3">
                <div class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-medical-100 text-medical-700">
                  <span class="text-xs font-semibold">4</span>
                </div>
                <p>Follow-up appointment with your surgeon within 7-14 days.</p>
              </li>
            </ol>
          </section>

          <div class="rounded-lg border border-medical-200 bg-medical-50 p-6">
            <h2 class="font-display text-xl font-semibold text-medical-950">Preparing for surgery</h2>
            <p class="mt-2 text-sm text-medical-800">Contact our surgical scheduling team with any questions about your upcoming procedure.</p>
            <a
              href="tel:+2347045033528"
              class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-medical-800"
            >
              <Icon name="i-lucide-phone" class="h-4 w-4" />
              0704 503 3528
            </a>
          </div>
        </div>

        <aside class="space-y-5">
          <div class="flex items-start gap-3 rounded-md border border-emergency-200 bg-emergency-50 px-4 py-3.5">
            <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 text-emergency-700" />
            <p class="text-sm leading-5 text-emergency-900">
              <strong class="font-semibold">After-hours emergencies?</strong> Call 112 or go to the emergency department.
            </p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Contact surgical scheduling</h2>
            <p class="mt-2 text-sm text-slate-600">Monday–Friday, 7am – 6pm</p>
            <p class="mt-1 text-xs text-slate-500">Demonstration contact details.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Surgical Services | MedCore Hospital' })

const specialties = [
  { id: 'general', name: 'General Surgery', description: 'Treatment of conditions affecting the abdomen, breast, skin, and soft tissues.', icon: 'i-lucide-scissors' },
  { id: 'orthopedic', name: 'Orthopaedic Surgery', description: 'Joint replacement, spine surgery, sports medicine, and fracture repair.', icon: 'i-lucide-bone' },
  { id: 'cardiothoracic', name: 'Cardiothoracic Surgery', description: 'Heart and lung surgery for complex cardiovascular conditions.', icon: 'i-lucide-heart-pulse' },
  { id: 'neurosurgery', name: 'Neurosurgery', description: 'Surgical treatment of brain, spine, and nervous system disorders.', icon: 'i-lucide-brain' },
  { id: 'plastic', name: 'Plastic Surgery', description: 'Reconstructive and aesthetic surgery with advanced techniques.', icon: 'i-lucide-cake-slice' },
]
</script>
