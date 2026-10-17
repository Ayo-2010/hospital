<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Head of Surgery Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Surgical department overview</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-scissors" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Total Surgeries</p>
            <p class="text-2xl font-semibold text-slate-950">42</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-healing-100 text-healing-700">
            <Icon name="i-lucide-users" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Active Surgeons</p>
            <p class="text-2xl font-semibold text-slate-950">12</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-100 text-warm-700">
            <Icon name="i-lucide-door-open" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Operating Rooms</p>
            <p class="text-2xl font-semibold text-slate-950">6</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
            <Icon name="i-lucide-trending-up" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Outcomes Rate</p>
            <p class="text-2xl font-semibold text-slate-950">98.5%</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Pending Approvals</h2>
        <p class="mt-1 text-sm text-slate-600">Cases requiring approval</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">Complex spine surgery</p>
              <p class="text-xs text-slate-500">Dr. Robert Kim</p>
            </div>
            <span class="text-xs font-medium text-warm-800">Pending review</span>
          </div>
          <div class="flex items-center justify-between rounded-md bg-slate-50 p-3 text-sm">
            <div>
              <p class="font-medium text-slate-900">Cardiac valve replacement</p>
              <p class="text-xs text-slate-500">Dr. James Anderson</p>
            </div>
            <span class="text-xs font-medium text-warm-800">Pending review</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Quick Actions</h2>
        <p class="mt-1 text-sm text-slate-600">Common tasks</p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <NuxtLink to="/head-of-surgery/cases" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Surgical Cases
          </NuxtLink>
          <NuxtLink to="/head-of-surgery/approvals" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Approvals
          </NuxtLink>
          <NuxtLink to="/head-of-surgery/surgeons" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Surgeons
          </NuxtLink>
          <NuxtLink to="/head-of-surgery/analytics" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Analytics
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['HEAD_OF_SURGERY'],
  layout: 'dashboard',
})
</script>