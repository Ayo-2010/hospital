<template>
  <div class="space-y-6">
    <div><h1 class="font-display text-3xl font-semibold text-slate-950">Audit Logs</h1><p class="mt-1 text-sm text-slate-600">System activity and audit trail</p></div>
    <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><p class="text-slate-600">Audit log viewer. Review system activity, user actions, and security events.</p></div>
  </div>
</template>
<script setup lang="ts">definePageMeta({ middleware: ['auth'], roles: ['SUPER_ADMIN', 'HOSPITAL_ADMIN'], layout: 'dashboard' })</script>