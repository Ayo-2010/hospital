<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Roles & Permissions</h1>
      <p class="mt-1 text-sm text-slate-600">Define roles and assign permissions</p>
    </div>
    <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p class="text-slate-600">Roles and permissions management. Create custom roles, assign permissions, and manage access control.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  roles: ['SUPER_ADMIN', 'HOSPITAL_ADMIN'],
  layout: 'dashboard',
})
</script>