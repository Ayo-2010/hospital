<template>
  <UDropdown
    :items="items"
    :ui="{ width: 'w-72', content: 'p-1' }"
    placement="bottom-end"
  >
    <button
      type="button"
      class="relative flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
      aria-label="Notifications"
    >
      <Icon name="i-lucide-bell" class="h-5 w-5" />
      <span
        v-if="unreadCount > 0"
        class="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emergency-500 text-[10px] font-semibold text-white"
        >{{ unreadCount }}
      </span>
    </button>
  </UDropdown>
</template>

<script setup lang="ts">
const unreadCount = ref(0)

const items = [
  [
    {
      label: 'No new notifications',
      disabled: true,
      class: 'text-slate-400',
    },
  ],
]
</script>
