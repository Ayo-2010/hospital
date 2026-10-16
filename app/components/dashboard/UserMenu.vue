<template>
  <UDropdown
    :items="items"
    :ui="{
      width: 'w-56',
      content: 'p-1',
    }"
    placement="bottom-end"
  >
    <button
      type="button"
      class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
    >
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-medical-100 text-medical-700">
        <Icon name="i-lucide-user" class="h-4 w-4" />
      </div>
      <span>{{ userName }}</span>
      <Icon name="i-lucide-chevron-down" class="h-4 w-4 text-slate-500" />
    </button>
  </UDropdown>
</template>

<script setup lang="ts">
const router = useRouter()
const { user } = useSession()
const userName = computed(() => user.value?.name || 'Account')

const items = [
  [
    {
      label: 'Your Profile',
      icon: 'i-lucide-user',
      click: () => navigateTo('/patient/profile'),
    },
    {
      label: 'Settings',
      icon: 'i-lucide-settings',
      click: () => navigateTo('/patient/settings'),
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card',
      click: () => navigateTo('/patient/bills'),
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-lucide-log-out',
      click: async () => {
        await signOut()
        await router.push('/auth/login')
      },
      class: 'text-emergency-600 hover:bg-emergency-50 dark:text-emergency-400 dark:hover:bg-emergency-900/20',
    },
  ],
]
</script>
