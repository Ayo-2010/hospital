<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Laboratory</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Laboratory & diagnostics
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Our laboratory provides accurate, timely diagnostic testing using advanced technology
          and certified lab professionals. Results are securely delivered through your patient portal.
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div class="space-y-8">
          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Our services</h2>
            <ul class="mt-4 space-y-2 text-slate-600">
              <li v-for="svc in labServices" :key="svc.name" class="flex items-start gap-3">
                <Icon :name="svc.icon" class="mt-0.5 h-5 w-5 text-medical-700" />
                <div>
                  <h3 class="font-semibold text-slate-900">{{ svc.name }}</h3>
                  <p class="text-sm">{{ svc.description }}</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Lab test preparation</h2>
            <p class="mt-2 text-slate-600">
              Follow these guidelines to ensure accurate test results. Contact us if you have questions.
            </p>
          </section>

          <div class="rounded-lg border border-medical-200 bg-medical-50 p-6">
            <h2 class="font-display text-xl font-semibold text-medical-950">Need lab results?</h2>
            <p class="mt-2 text-sm text-medical-800">
              Lab results are available within 24-48 hours through your patient portal.
            </p>
            <NuxtLink
              to="/auth/login"
              class="mt-3 inline-flex items-center gap-2 rounded-md bg-medical-700 px-4 py-2 text-sm font-semibold text-white hover:bg-medical-800"
            >
              Sign in to patient portal
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <aside class="space-y-5">
          <div class="flex items-start gap-3 rounded-md border border-emergency-200 bg-emergency-50 px-4 py-3.5">
            <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 text-emergency-700" />
            <p class="text-sm leading-5 text-emergency-900">
              <strong class="font-semibold">Medical emergency?</strong> Call 112 or visit the ER.
            </p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Lab hours</h2>
            <div class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-slate-600">Monday – Friday</span><span class="text-slate-900">7:00 AM – 7:00 PM</span></div>
              <div class="flex justify-between"><span class="text-slate-600">Saturday</span><span class="text-slate-900">8:00 AM – 3:00 PM</span></div>
              <div class="flex justify-between"><span class="text-slate-600">Sunday</span><span class="text-slate-600">Closed</span></div>
            </div>
          </div>
        </aside>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Medical team in discussion" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Team collaboration — photo by Christina M on Pexels.</figcaption>
        </figure>
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" src="https://images.pexels.com/photos/5325833/pexels-photo-5325833.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Doctor examining a patient" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Physician consultation — photo by Karolina Grabowska on Pexels.</figcaption>
        </figure>
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" src="https://images.pexels.com/photos/4386783/pexels-photo-4386783.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Emergency medical team" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Emergency care — photo by Karolina Grabowska on Pexels.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Laboratory & Diagnostics | MedCore Hospital' })

const labServices = [
  { name: 'Blood tests', description: 'Complete blood count, metabolic panels, lipid profiles, and specialized markers.', icon: 'i-lucide-test-tube' },
  { name: 'Imaging', description: 'X-rays, ultrasounds, CT scans, and MRI with digital reporting.', icon: 'i-lucide-scan' },
  { name: 'Pathology', description: 'Biopsy analysis, cytology, and histopathology with expert interpretation.', icon: 'i-lucide-microscope' },
  { name: 'Cardiac markers', description: 'Troponin, BNP, and other cardiac biomarkers for heart condition monitoring.', icon: 'i-lucide-heart-pulse' },
]
</script>
