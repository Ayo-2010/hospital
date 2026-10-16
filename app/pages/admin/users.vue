<template>
  <div class="space-y-6">
    <div>
      <h1 class="font-display text-3xl font-semibold text-slate-950">Manage Users</h1>
      <p class="mt-1 text-sm text-slate-600">View and manage user accounts and roles</p>
    </div>
    <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p class="text-slate-600">User management interface. Add, edit, and remove users, assign roles, and manage access permissions.</p>
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