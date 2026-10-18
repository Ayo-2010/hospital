<template>
  <div class="space-y-6">
    <div><h1 class="font-display text-3xl font-semibold text-slate-950">Notifications</h1><p class="mt-1 text-sm text-slate-600">Send system notifications</p></div>
    <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><p class="text-slate-600">Notification centre. Send announcements, alerts and reminders to users.</p></div>
  </div>
</template>
<script setup lang="ts">definePageMeta({ middleware: ['auth'], roles: ['SUPER_ADMIN', 'HOSPITAL_ADMIN'], layout: 'dashboard' })</script>