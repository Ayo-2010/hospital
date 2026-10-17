<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Clinical Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Overview of today's clinical activities</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-calendar" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Today's Patients</p>
            <p class="text-2xl font-semibold text-slate-950">12</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-100 text-warm-700">
            <Icon name="i-lucide-clock" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Waiting</p>
            <p class="text-2xl font-semibold text-slate-950">3</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-healing-100 text-healing-700">
            <Icon name="i-lucide-circle-check" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Completed</p>
            <p class="text-2xl font-semibold text-slate-950">7</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
            <Icon name="i-lucide-circle-alert" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Critical Alerts</p>
            <p class="text-2xl font-semibold text-slate-950">1</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 class="font-display text-lg font-semibold text-slate-950">Today's Appointments</h2>
        <p class="mt-1 text-sm text-slate-600">Schedule for today</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">John Smith</p>
              <p class="text-xs text-slate-500">Cardiology follow-up</p>
            </div>
            <span class="text-xs font-medium text-medical-800">9:00 AM</span>
          </div>
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">Maria Garcia</p>
              <p class="text-xs text-slate-500">New patient consultation</p>
            </div>
            <span class="text-xs font-medium text-medical-800">10:30 AM</span>
          </div>
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">Robert Chen</p>
              <p class="text-xs text-slate-500">Diabetes management</p>
            </div>
            <span class="text-xs font-medium text-medical-800">2:00 PM</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Pending Lab Results</h2>
        <p class="mt-1 text-sm text-slate-600">Awaiting results</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-flask-conical" class="h-4 w-4 text-medical-700" />
            <span>Blood panel — John Smith</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-flask-conical" class="h-4 w-4 text-medical-700" />
            <span>Glucose — Maria Garcia</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['DOCTOR'],
  layout: 'dashboard',
})
</script>