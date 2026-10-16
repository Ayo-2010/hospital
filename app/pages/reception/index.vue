<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Reception Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Front desk overview</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-calendar" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Today's Appointments</p>
            <p class="text-2xl font-semibold text-slate-950">42</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-heal-100 text-heal-700">
            <Icon name="i-lucide-users" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Checked In</p>
            <p class="text-2xl font-semibold text-slate-950">28</p>
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
            <p class="text-2xl font-semibold text-slate-950">14</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
            <Icon name="i-lucide-bed" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Admissions</p>
            <p class="text-2xl font-semibold text-slate-950">6</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Waiting Room</h2>
        <p class="mt-1 text-sm text-slate-600">Patients awaiting check-in</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">John Smith</p>
              <p class="text-xs text-slate-500">Cardiology — Dr. Johnson</p>
            </div>
            <span class="text-xs font-medium text-warm-800">Waiting</span>
          </div>
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">Maria Garcia</p>
              <p class="text-xs text-slate-500">Neurology — Dr. Chen</p>
            </div>
            <span class="text-xs font-medium text-warm-800">Waiting</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Quick Actions</h2>
        <p class="mt-1 text-sm text-slate-600">Common front desk tasks</p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <NuxtLink to="/reception/check-in" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Check In
          </NuxtLink>
          <NuxtLink to="/reception/appointments" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Appointments
          </NuxtLink>
          <NuxtLink to="/reception/patients" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Patients
          </NuxtLink>
          <NuxtLink to="/reception/admissions" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Admissions
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['RECEPTIONIST'],
  layout: 'dashboard',
})
</script>