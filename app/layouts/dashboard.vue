<template>
  <div class="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
    <DashboardSidebar />
    <div class="flex flex-1 flex-col overflow-hidden">
      <DashboardHeader />
      <main class="flex-1 overflow-y-auto p-4 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardSidebar from '~/components/dashboard/DashboardSidebar.vue'
import DashboardHeader from '~/components/dashboard/DashboardHeader.vue'
</script>
