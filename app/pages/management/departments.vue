<template>
  <div class="space-y-6">
    <div><h1 class="font-display text-3xl font-semibold text-slate-950">Departments</h1><p class="mt-1 text-sm text-slate-600">Manage departments</p></div>
    <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><p class="text-slate-600">Department management overview.</p></div>
  </div>
</template>
<script setup lang="ts">definePageMeta({ middleware: ['auth'], roles: ['MANAGEMENT', 'SUPER_ADMIN'], layout: 'dashboard' })</script>