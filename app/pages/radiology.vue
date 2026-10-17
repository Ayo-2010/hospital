<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Radiology</span>
      </nav>

      <div class="mb-10">
        <p class="eyebrow">Imaging &amp; diagnostics</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Radiology &amp; imaging
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Our imaging centre uses modern, low-dose equipment and board-certified radiologists to
          deliver clear results, fast — with reports shared securely through your patient portal.
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div class="space-y-8">
          <section aria-labelledby="radiology-services-title">
            <h2 id="radiology-services-title" class="font-display text-2xl font-semibold text-slate-950">Imaging services</h2>
            <ul class="mt-4 space-y-4">
              <li v-for="service in services" :key="service.name" class="flex items-start gap-3">
                <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
                  <Icon :name="service.icon" class="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 class="font-semibold text-slate-900">{{ service.name }}</h3>
                  <p class="text-sm leading-6 text-slate-600">{{ service.description }}</p>
                </div>
              </li>
            </ul>
          </section>

          <section aria-labelledby="radiology-prep-title">
            <h2 id="radiology-prep-title" class="font-display text-2xl font-semibold text-slate-950">Preparing for your scan</h2>
            <ul class="mt-4 space-y-2.5 text-sm leading-6 text-slate-600">
              <li v-for="tip in prep" :key="tip" class="flex items-start gap-2.5">
                <Icon name="i-lucide-check" class="mt-1 h-4 w-4 shrink-0 text-healing-600" aria-hidden="true" />
                {{ tip }}
              </li>
            </ul>
          </section>

          <div class="rounded-xl border border-medical-200 bg-medical-50 p-6">
            <h2 class="font-display text-xl font-semibold text-medical-950">Viewing your results</h2>
            <p class="mt-2 text-sm leading-6 text-medical-900/80">
              Imaging reports and images are available through the patient portal, usually within 24–48 hours.
            </p>
            <NuxtLink to="/auth/login" class="btn-primary mt-4">
              Sign in to patient portal
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <aside class="space-y-5">
          <div class="flex items-start gap-3 rounded-lg border border-emergency-200 bg-emergency-50 px-4 py-3.5">
            <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 shrink-0 text-emergency-700" aria-hidden="true" />
            <p class="text-sm leading-5 text-emergency-900">
              <strong class="font-semibold">Medical emergency?</strong> Call 112 or go to the emergency department.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Imaging hours</h2>
            <dl class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between gap-4">
                <dt class="text-slate-600">Monday – Friday</dt>
                <dd class="font-medium text-slate-900">7:00 AM – 8:00 PM</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-slate-600">Saturday</dt>
                <dd class="font-medium text-slate-900">8:00 AM – 4:00 PM</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt class="text-slate-600">Sunday</dt>
                <dd class="text-slate-500">Closed</dd>
              </div>
            </dl>
            <p class="mt-3 border-t border-slate-100 pt-3 text-xs leading-5 text-slate-500">
              Emergency imaging is available 24/7. Demonstration information.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Booking a scan</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Most scans need a referral from your clinician. Once referred, our team will contact you
              to schedule.
            </p>
            <a href="tel:+2347045033528" class="link mt-3 inline-flex items-center gap-2 text-sm">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              0704 503 3528
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Radiology & Imaging | MedCore Hospital' })

const services = [
  { name: 'X-ray', description: 'Fast digital imaging for bones, chest and abdomen.', icon: 'i-lucide-scan' },
  { name: 'Ultrasound', description: 'General, vascular and obstetric ultrasound.', icon: 'i-lucide-audio-waveform' },
  { name: 'CT scan', description: 'Detailed cross-sectional imaging for a wide range of conditions.', icon: 'i-lucide-scan-line' },
  { name: 'MRI', description: 'High-resolution imaging of soft tissue, brain and joints.', icon: 'i-lucide-activity' },
  { name: 'Mammography', description: 'Screening and diagnostic breast imaging.', icon: 'i-lucide-heart-pulse' },
]

const prep = [
  'Bring your referral, photo ID and insurance details to your appointment.',
  'Tell us if you are — or may be — pregnant before any imaging.',
  'Fasting or contrast preparation may apply to some CT and MRI scans; we will tell you in advance.',
  'Arrive 15 minutes early so we can complete a short safety checklist.',
]
</script>
