<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Patient Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Welcome to your patient portal</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-calendar" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Upcoming Appointments</p>
            <p class="text-2xl font-semibold text-slate-950">3</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-healing-100 text-healing-700">
            <Icon name="i-lucide-pill" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Active Prescriptions</p>
            <p class="text-2xl font-semibold text-slate-950">2</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-100 text-warm-700">
            <Icon name="i-lucide-flask-conical" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Pending Results</p>
            <p class="text-2xl font-semibold text-slate-950">1</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
            <Icon name="i-lucide-credit-card" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Outstanding Balance</p>
            <p class="text-2xl font-semibold text-slate-950">$250.00</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 class="font-display text-lg font-semibold text-slate-950">Upcoming Appointments</h2>
        <p class="mt-1 text-sm text-slate-600">Scheduled visits</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">Dr. Adaeze Nwosu</p>
              <p class="text-xs text-slate-500">Cardiology</p>
            </div>
            <span class="text-xs font-medium text-medical-800">18 Oct 2026, 10:00</span>
          </div>
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">Dr. Emeka Nwankwo</p>
              <p class="text-xs text-slate-500">Neurology</p>
            </div>
            <span class="text-xs font-medium text-medical-800">22 Oct 2026, 14:30</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Current Medications</h2>
        <p class="mt-1 text-sm text-slate-600">Active prescriptions</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-pill" class="h-4 w-4 text-medical-700" />
            <span>Lisinopril 10mg</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-pill" class="h-4 w-4 text-medical-700" />
            <span>Metformin 500mg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['PATIENT'],
  layout: 'dashboard',
})
</script>