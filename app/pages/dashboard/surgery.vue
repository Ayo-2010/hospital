<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Surgery Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Surgical overview</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-scissors" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Scheduled Today</p>
            <p class="text-2xl font-semibold text-slate-950">4</p>
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
            <p class="text-2xl font-semibold text-slate-950">3</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-100 text-warm-700">
            <Icon name="i-lucide-clock" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">In Progress</p>
            <p class="text-2xl font-semibold text-slate-950">1</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
            <Icon name="i-lucide-door-open" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">ORs Active</p>
            <p class="text-2xl font-semibold text-slate-950">2</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Today's Schedule</h2>
        <p class="mt-1 text-sm text-slate-600">Operating room assignments</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">OR-3</p>
              <p class="text-xs text-slate-500">Laparoscopic cholecystectomy</p>
            </div>
            <span class="text-xs font-medium text-medical-800">8:00 AM</span>
          </div>
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">OR-5</p>
              <p class="text-xs text-slate-500">Knee replacement</p>
            </div>
            <span class="text-xs font-medium text-medical-800">1:00 PM</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Quick Actions</h2>
        <p class="mt-1 text-sm text-slate-600">Common surgical tasks</p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <NuxtLink to="/surgery/schedule" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Schedule
          </NuxtLink>
          <NuxtLink to="/surgery/patients" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Patients
          </NuxtLink>
          <NuxtLink to="/surgery/operating-rooms" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Operating Rooms
          </NuxtLink>
          <NuxtLink to="/surgery/cases" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Cases
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['SURGEON', 'HEAD_OF_SURGERY'],
  layout: 'dashboard',
})
</script>