<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="font-display text-3xl font-semibold text-slate-950">Admin Dashboard</h1>
        <p class="mt-1 text-sm text-slate-600">Hospital-wide overview</p>
      </div>
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
        <h2 class="font-display text-lg font-semibold text-slate-950">Recent Activity</h2>
        <p class="mt-1 text-sm text-slate-600">System activity and audit trail</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-user-plus" class="h-4 w-4 text-medical-700" />
            <span>New staff registration</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-calendar-check" class="h-4 w-4 text-heal-700" />
            <span>Appointment completed</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-slate-600">
            <Icon name="i-lucide-credit-card" class="h-4 w-4 text-warm-700" />
            <span>Payment received</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Quick Actions</h2>
        <p class="mt-1 text-sm text-slate-600">Common administrative tasks</p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <NuxtLink to="/admin/users" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Manage Users
          </NuxtLink>
          <NuxtLink to="/admin/departments" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Manage Departments
          </NuxtLink>
          <NuxtLink to="/admin/audit-logs" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            View Audit Logs
          </NuxtLink>
          <NuxtLink to="/admin/notifications" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Send Notifications
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['SUPER_ADMIN', 'HOSPITAL_ADMIN', 'MANAGEMENT'],
  layout: 'dashboard',
})
const stats = [
  { label: 'Total Patients', value: '1,245', icon: 'i-lucide-users' },
  { label: 'Active Staff', value: '86', icon: 'i-lucide-user-cog' },
  { label: 'Appointments Today', value: '42', icon: 'i-lucide-calendar' },
  { label: 'Admissions', value: '18', icon: 'i-lucide-bed' },
  { label: 'Surgeries', value: '6', icon: 'i-lucide-scissors' },
  { label: 'Revenue (MTD)', value: '$128.4k', icon: 'i-lucide-dollar-sign' },
]
</script>