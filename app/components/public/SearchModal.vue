<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
      >
        <div class="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" @click="close" />

        <div class="relative w-full max-w-xl animate-scale-in rounded-xl border border-slate-200 bg-white shadow-elevated">
          <div class="relative border-b border-slate-200">
            <label for="site-search" class="sr-only">Search doctors, departments and services</label>
            <Icon
              name="i-lucide-search"
              class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="site-search"
              ref="inputRef"
              v-model="query"
              type="search"
              class="w-full rounded-t-xl bg-transparent py-4 pl-12 pr-12 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
              placeholder="Search doctors, departments, services…"
              autocomplete="off"
              @keydown.esc="close"
              @keydown.enter="goToFirst"
            />
            <kbd
              class="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 sm:block"
            >
              ESC
            </kbd>
          </div>

          <div class="max-h-80 overflow-y-auto p-2">
            <template v-if="query.trim().length >= 2">
              <template v-if="results.length">
                <p class="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Results
                </p>
                <NuxtLink
                  v-for="result in results"
                  :key="result.to"
                  :to="result.to"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                  @click="close"
                >
                  <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" :class="result.tone">
                    <Icon :name="result.icon" class="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="block truncate text-sm font-semibold text-slate-900">{{ result.title }}</span>
                    <span class="block truncate text-xs text-slate-500">{{ result.subtitle }}</span>
                  </span>
                  <Icon name="i-lucide-arrow-up-right" class="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                </NuxtLink>
              </template>
              <p v-else class="px-3 py-8 text-center text-sm text-slate-500">
                No matches. Try “cardiology”, “paediatrics” or a doctor’s name.
              </p>
            </template>

            <template v-else>
              <p class="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Popular searches
              </p>
              <div class="grid grid-cols-2 gap-1.5 p-1">
                <button
                  v-for="quick in quickActions"
                  :key="quick.label"
                  type="button"
                  class="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  @click="selectQuick(quick)"
                >
                  <Icon :name="quick.icon" class="h-4.5 w-4.5 shrink-0" :class="quick.iconClass" aria-hidden="true" />
                  {{ quick.label }}
                </button>
              </div>
            </template>
          </div>

          <div class="flex items-center justify-between border-t border-slate-200 px-4 py-2.5 text-xs text-slate-500">
            <span>Press <kbd class="font-sans font-semibold text-slate-700">Enter</kbd> to open the first result</span>
            <NuxtLink to="/doctors" class="font-semibold text-medical-800 hover:underline" @click="close">
              Browse all doctors
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { PREVIEW_DOCTORS } from '~/data/previewDoctors'
import { PREVIEW_DEPARTMENTS } from '~/data/previewDepartments'

const open = defineModel<boolean>('open', { default: false })

const query = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

interface Result {
  to: string
  title: string
  subtitle: string
  icon: string
  tone: string
}

const staticPages: Result[] = [
  { to: '/departments', title: 'Departments', subtitle: 'Browse care by specialty', icon: 'i-lucide-building', tone: 'bg-slate-100 text-slate-700' },
  { to: '/services', title: 'Medical services', subtitle: 'What we offer', icon: 'i-lucide-stethoscope', tone: 'bg-slate-100 text-slate-700' },
  { to: '/laboratory', title: 'Laboratory & diagnostics', subtitle: 'Tests and imaging', icon: 'i-lucide-flask-conical', tone: 'bg-slate-100 text-slate-700' },
  { to: '/pharmacy', title: 'Pharmacy', subtitle: 'Prescriptions and medication', icon: 'i-lucide-pill', tone: 'bg-slate-100 text-slate-700' },
  { to: '/emergency', title: 'Emergency care', subtitle: 'Open 24/7', icon: 'i-lucide-circle-alert', tone: 'bg-emergency-50 text-emergency-700' },
]

const quickActions = [
  { label: 'Book appointment', to: '/appointments/book', icon: 'i-lucide-calendar-plus', iconClass: 'text-medical-700' },
  { label: 'Find a doctor', to: '/doctors', icon: 'i-lucide-user-round-search', iconClass: 'text-medical-700' },
  { label: 'Departments', to: '/departments', icon: 'i-lucide-building', iconClass: 'text-medical-700' },
  { label: 'Emergency info', to: '/emergency', icon: 'i-lucide-heart-pulse', iconClass: 'text-emergency-700' },
]

const results = computed<Result[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (q.length < 2) return []

  const doctors: Result[] = PREVIEW_DOCTORS
    .filter(d => d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q))
    .slice(0, 4)
    .map(d => ({
      to: `/doctors/${d.slug}`,
      title: d.name,
      subtitle: d.specialty,
      icon: 'i-lucide-user-round',
      tone: 'bg-medical-50 text-medical-700',
    }))

  const departments: Result[] = PREVIEW_DEPARTMENTS
    .filter(d => d.name.toLowerCase().includes(q) || d.summary.toLowerCase().includes(q))
    .slice(0, 3)
    .map(d => ({
      to: `/departments/${d.slug}`,
      title: d.name,
      subtitle: 'Department',
      icon: 'i-lucide-building',
      tone: 'bg-slate-100 text-slate-700',
    }))

  const pages = staticPages.filter(p => p.title.toLowerCase().includes(q)).slice(0, 2)

  return [...doctors, ...departments, ...pages].slice(0, 7)
})

function close() {
  open.value = false
}

function selectQuick(quick: { to: string }) {
  close()
  navigateTo(quick.to)
}

function goToFirst() {
  const first = results.value[0]
  if (first) {
    close()
    navigateTo(first.to)
  }
  else if (query.value.trim().length >= 2) {
    close()
    navigateTo('/doctors')
  }
}

watch(open, async (isOpen) => {
  if (isOpen) {
    query.value = ''
    await nextTick()
    inputRef.value?.focus()
  }
})
</script>
