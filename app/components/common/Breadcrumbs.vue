<template>
  <nav class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
    <NuxtLink to="/" class="hover:text-medical-600 dark:hover:text-medical-400">Home</NuxtLink>
    <template v-for="(crumb, index) in crumbs" :key="index">
      <Icon name="i-lucide-chevron-right" class="h-4 w-4 text-slate-400" />
      <NuxtLink :to="crumb.to" class="hover:text-medical-600 dark:hover:text-medical-400">
        {{ crumb.label }}
      </NuxtLink>
    </template>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const crumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const path = []
  return segments.map((segment, index) => {
    const to = '/' + segments.slice(0, index + 1).join('/')
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      to,
    }
  })
})
</script>
