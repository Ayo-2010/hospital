<template>
  <header class="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950 lg:px-8">
    <div class="flex items-center gap-4">
      <UButton icon="i-lucide-menu" color="neutral" variant="ghost" class="lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen" />
      <Breadcrumbs />
    </div>
    <div class="flex items-center gap-2">
      <UButton icon="i-lucide-search" color="neutral" variant="ghost" />
      <NotificationBell />
      <UserMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
