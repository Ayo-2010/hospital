<template>
  <aside class="hidden w-64 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:flex">
    <div class="flex h-16 items-center px-6 border-b border-slate-200 dark:border-slate-800">
      <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-medical-600">
        <Icon name="i-lucide-heart-pulse" class="h-8 w-8" />
        <span>{{ appName }}</span>
      </NuxtLink>
    </div>
    <nav class="flex-1 overflow-y-auto py-4 px-3">
      <ul class="space-y-1">
        <li v-for="item in items" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            :class="{ 'bg-medical-50 text-medical-600 dark:bg-medical-950 dark:text-medical-400': isActive(item.to) }"
          >
            <Icon :name="item.icon" class="h-5 w-5" />
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="border-t border-slate-200 p-4 dark:border-slate-800">
      <UserMenu />
    </div>
  </aside>
</template>

<script setup lang="ts">
const appName = useRuntimeConfig().public.appName
const route = useRoute()
const items = computed(() => {
  const role = route.path.split('/')[1]
  return getNavForRole(role.toUpperCase())
})

function isActive(to: string) {
  return route.path === to || (to !== '/' && route.path.startsWith(to))
}
</script>
