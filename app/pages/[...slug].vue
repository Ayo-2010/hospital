<template>
  <div class="mx-auto max-w-5xl space-y-6">
    <nav aria-label="Breadcrumb" class="text-sm text-slate-500">
      <NuxtLink :to="dashboardPath" class="hover:text-medical-800">{{ workspaceLabel }}</NuxtLink>
      <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
      <span aria-current="page" class="font-medium text-slate-700">{{ title }}</span>
    </nav>

    <header>
      <p class="text-xs font-semibold uppercase tracking-[0.14em] text-medical-700">{{ workspaceLabel }}</p>
      <h1 class="mt-2 flex items-center gap-3 font-display text-3xl font-semibold text-slate-950">
        <span v-if="icon" class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
          <Icon :name="icon" class="h-5 w-5" aria-hidden="true" />
        </span>
        {{ title }}
      </h1>
      <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
        This module is part of the {{ workspaceLabel }} workspace, alongside the other tools listed
        below. Use the workspace navigation to move between modules.
      </p>
    </header>

    <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="font-display text-lg font-semibold text-slate-950">Modules in this workspace</h2>
      <ul class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="item in modules" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="flex h-full items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition-colors"
            :class="
              item.to === route.path
                ? 'border-medical-300 bg-medical-50 text-medical-900'
                : 'border-slate-200 text-slate-700 hover:border-medical-300 hover:bg-medical-50/50 hover:text-medical-800'
            "
            :aria-current="item.to === route.path ? 'page' : undefined"
          >
            <Icon :name="item.icon" class="h-5 w-5 shrink-0" aria-hidden="true" />
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="font-display text-lg font-semibold text-slate-950">About this module</h2>
      <p class="mt-2 text-sm leading-6 text-slate-600">
        {{ title }} is one of the staff tools inside MedCore Hospital. The layout, navigation and
        access rules are in place; clinical and financial records are provided by the hospital
        systems once a staff account is connected.
      </p>
      <div class="mt-5 flex flex-wrap items-center gap-3">
        <NuxtLink :to="dashboardPath" class="btn-primary">
          <Icon name="i-lucide-arrow-left" class="h-4 w-4" aria-hidden="true" />
          Back to {{ workspaceLabel }}
        </NuxtLink>
        <NuxtLink to="/" class="btn-secondary">
          <Icon name="i-lucide-house" class="h-4 w-4" aria-hidden="true" />
          Public website
        </NuxtLink>
        <NuxtLink to="/contact" class="link inline-flex items-center gap-2 text-sm">
          <Icon name="i-lucide-life-buoy" class="h-4 w-4" aria-hidden="true" />
          Need help? Contact IT support
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { findNavItem, getNavForPath, WORKSPACE_LABELS, workspaceKeyFromPath } from '~/composables/useNavigation'

definePageMeta({ layout: 'dashboard' })

const route = useRoute()

/** The path being rendered, without a trailing slash. */
const path = computed(() => (route.path.length > 1 ? route.path.replace(/\/+$/, '') : route.path))

const workspaceKey = computed(() => workspaceKeyFromPath(path.value))
const modules = computed(() => getNavForPath(path.value))

/**
 * Anything under a staff workspace resolves to this screen, so a link in a
 * dashboard sidebar never dead-ends in a 404. Paths outside the known
 * workspaces are a genuine miss and are handed to the 404 page.
 */
if (!modules.value.length) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}

const navItem = computed(() => findNavItem(path.value))
const title = computed(() => navItem.value?.label ?? 'Workspace module')
const icon = computed(() => navItem.value?.icon ?? 'i-lucide-square')
const workspaceLabel = computed(
  () => WORKSPACE_LABELS[workspaceKey.value] ?? 'Staff workspace',
)
const dashboardPath = computed(() => modules.value[0]?.to ?? '/')

useHead({
  title: () => `${title.value} | ${workspaceLabel.value} | MedCore Hospital`,
})
</script>
