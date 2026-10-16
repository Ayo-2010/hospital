<template>
  <div class="flex min-h-screen flex-col bg-white text-slate-800 antialiased">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/public/AppHeader.vue'
import AppFooter from '~/components/public/AppFooter.vue'
</script>
