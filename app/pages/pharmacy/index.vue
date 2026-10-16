<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Pharmacy Dashboard</h1>
      <p class="mt-1 text-sm text-slate-600">Medication management overview</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon name="i-lucide-pill" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Prescriptions Today</p>
            <p class="text-2xl font-semibold text-slate-950">86</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-heal-100 text-heal-700">
            <Icon name="i-lucide-check-circle" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Dispensed</p>
            <p class="text-2xl font-semibold text-slate-950">64</p>
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
            <p class="text-2xl font-semibold text-slate-950">22</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
            <Icon name="i-lucide-package" class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-slate-600">Low Stock</p>
            <p class="text-2xl font-semibold text-slate-950">8</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Inventory Status</h2>
        <p class="mt-1 text-sm text-slate-600">Stock levels by category</p>
        <div class="mt-4 space-y-3">
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Antibiotics</span>
            <span class="font-medium text-slate-900">Adequate</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Pain Management</span>
            <span class="font-medium text-slate-900">Low stock</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Cardiovascular</span>
            <span class="font-medium text-slate-900">Adequate</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600">Diabetes</span>
            <span class="font-medium text-slate-900">Adequate</span>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="font-display text-lg font-semibold text-slate-950">Quick Actions</h2>
        <p class="mt-1 text-sm text-slate-600">Common tasks</p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <NuxtLink to="/pharmacy/prescriptions" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Prescriptions
          </NuxtLink>
          <NuxtLink to="/pharmacy/dispensing" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Dispensing
          </NuxtLink>
          <NuxtLink to="/pharmacy/inventory" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Inventory
          </NuxtLink>
          <NuxtLink to="/pharmacy/suppliers" class="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800">
            Suppliers
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['PHARMACIST'],
  layout: 'dashboard',
})
</script>