<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Management Overview</h1>
      <p class="mt-1 text-sm text-slate-600">Executive hospital overview</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
          <Icon :name="stat.icon" class="h-6 w-6" />
        </div>
        <div>
          <p class="text-sm text-slate-600">{{ stat.label }}</p>
          <p class="text-2xl font-semibold text-slate-950">{{ stat.value }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Department Performance</h2>
        <p class="mt-1 text-sm text-slate-600">Key metrics by department</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Cardiology</span>
            <span class="font-medium text-slate-900">96% utilization</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Emergency</span>
            <span class="font-medium text-slate-900">14 min wait</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Surgery</span>
            <span class="font-medium text-slate-900">12 ORs active</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Management Links</h2>
        <p class="mt-1 text-sm text-slate-600">Navigate to management sections</p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <NuxtLink to="/management/departments" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Departments
          </NuxtLink>
          <NuxtLink to="/management/staff" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Staff
          </NuxtLink>
          <NuxtLink to="/management/finance" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Finance
          </NuxtLink>
          <NuxtLink to="/management/analytics" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
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
  roles: ['MANAGEMENT', 'SUPER_ADMIN'],
  layout: 'dashboard',
})
const stats = [
  { label: 'Patient Volume', value: '342', icon: 'i-lucide-users' },
  { label: 'Revenue (MTD)', value: '$1.24M', icon: 'i-lucide-dollar-sign' },
  { label: 'Avg Wait Time', value: '18 min', icon: 'i-lucide-clock' },
  { label: 'Bed Occupancy', value: '84%', icon: 'i-lucide-bed' },
  { label: 'Appt Utilization', value: '92%', icon: 'i-lucide-calendar' },
  { label: 'Patient Satisfaction', value: '4.8/5', icon: 'i-lucide-heart' },
]
</script>