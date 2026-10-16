<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Radiology Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Imaging overview</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-scan" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Orders Today</p>
            <p class="text-2xl font-semibold text-slate-950">38</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-heal-100 text-heal-700">
            <Icon name="i-lucide-check-circle" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Completed</p>
            <p class="text-2xl font-semibold text-slate-950">30</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-100 text-warm-700">
            <Icon name="i-lucide-clock" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Pending</p>
            <p class="text-2xl font-semibold text-slate-950">8</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
            <Icon name="i-lucide-alert-circle" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Urgent</p>
            <p class="text-2xl font-semibold text-slate-950">4</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Imaging Types</h2>
        <p class="mt-1 text-sm text-slate-600">Breakdown by modality</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">X-Ray</span>
            <span class="font-medium text-slate-900">14</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">CT Scan</span>
            <span class="font-medium text-slate-900">10</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">MRI</span>
            <span class="font-medium text-slate-900">8</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Ultrasound</span>
            <span class="font-medium text-slate-900">6</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Quick Actions</h2>
        <p class="mt-1 text-sm text-slate-600">Common tasks</p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <NuxtLink to="/radiology/orders" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Orders
          </NuxtLink>
          <NuxtLink to="/radiology/schedule" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Schedule
          </NuxtLink>
          <NuxtLink to="/radiology/reports" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Reports
          </NuxtLink>
          <NuxtLink to="/radiology/equipment" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Equipment
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['RADIOLOGIST'],
  layout: 'dashboard',
})
</script>