<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Nursing Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Patient care overview</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-users" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">My Patients</p>
            <p class="text-2xl font-semibold text-slate-950">24</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-healing-100 text-healing-700">
            <Icon name="i-lucide-activity" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Vitals Due</p>
            <p class="text-2xl font-semibold text-slate-950">8</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-warm-100 text-warm-700">
            <Icon name="i-lucide-pill" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Medications Due</p>
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
            <p class="text-sm text-slate-600">Admissions Today</p>
            <p class="text-2xl font-semibold text-slate-950">3</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Ward Status</h2>
        <p class="mt-1 text-sm text-slate-600">Current occupancy</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Ward A</span>
            <span class="font-medium text-slate-900">18/20 occupied</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Ward B</span>
            <span class="font-medium text-slate-900">22/24 occupied</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">ICU</span>
            <span class="font-medium text-slate-900">8/10 occupied</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Tasks</h2>
        <p class="mt-1 text-sm text-slate-600">Pending nursing tasks</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-square-check" class="h-4 w-4 text-medical-700" />
            <span>Administer morning medicines</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-activity" class="h-4 w-4 text-medical-700" />
            <span>Record vital signs</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-file-text" class="h-4 w-4 text-medical-700" />
            <span>Complete nursing notes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['NURSE'],
  layout: 'dashboard',
})
</script>