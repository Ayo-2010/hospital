<template>
  <TransitionRoot
    :show="open"
    appear
    enter="transition duration-200 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition duration-150 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div
      v-show="open"
      class="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      @click.self="close"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div class="relative w-full max-w-2xl animate-scale-in">
        <div class="card shadow-elevated">
          <div class="relative">
            <label for="search-input" class="sr-only">Search doctors, conditions, or locations</label>
            <Icon
              name="i-lucide-search"
              class="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="search-input"
              v-model="query"
              type="search"
              placeholder="Search doctors, conditions, locations..."
              class="w-full pl-12 pr-12 py-3.5 text-lg bg-transparent placeholder:text-slate-400 focus:outline-none"
              autoFocus
              @keydown.esc="close"
              @keydown.enter="handleSearch"
            />
            <button
              v-if="query"
              @click="clearSearch"
              class="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Clear search"
            >
              <Icon name="i-lucide-x" class="h-5 w-5" />
            </button>
          </div>

          <div v-if="query.length >= 2" class="border-t border-slate-200 dark:border-slate-700">
            <div class="max-h-96 overflow-y-auto">
              <div class="p-3">
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Top Results</p>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="result in filteredResults"
                    :key="result.id"
                    :to="result.url"
                    class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                    @click="close"
                  >
                    <div class="flex h-9 w-9 items-center justify-center rounded-lg" :class="result.iconBg">
                      <Icon :name="result.icon" class="h-5 w-5" :class="result.iconColor" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-slate-900 dark:text-white truncate">{{ result.title }}</p>
                      <p class="text-xs text-slate-500 truncate">{{ result.subtitle }}</p>
                    </div>
                    <Icon name="i-lucide-chevron-right" class="h-4 w-4 text-slate-400" />
                  </NuxtLink>
                </div>
              </div>

              <div class="px-3 pb-3">
                <NuxtLink
                  :to="`/search?q=${encodeURIComponent(query)}`"
                  class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-medical-600 bg-medical-50 hover:bg-medical-100 dark:bg-medical-900/30 dark:text-medical-400 dark:hover:bg-medical-900/50 transition-colors"
                  @click="close"
                >
                  <Icon name="i-lucide-search" class="h-4 w-4" />
                  View all results for "{{ query }}"
                </NuxtLink>
              </div>
            </div>
          </div>

          <div v-else-if="query.length > 0" class="p-6 text-center text-slate-500 text-sm">
            Type at least 2 characters to search
          </div>

          <div v-else class="p-6">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Quick Actions</p>
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink
                to="/appointments/book"
                class="flex items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 dark:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                @click="close"
              >
                <Icon name="i-lucide-calendar-plus" class="h-5 w-5 text-medical-600" />
                Book Appointment
              </NuxtLink>
              <NuxtLink
                to="/doctors"
                class="flex items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 dark:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                @click="close"
              >
                <Icon name="i-lucide-user-round-search" class="h-5 w-5 text-medical-600" />
                Find a Doctor
              </NuxtLink>
              <NuxtLink
                to="/departments"
                class="flex items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 dark:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                @click="close"
              >
                <Icon name="i-lucide-building-2" class="h-5 w-5 text-medical-600" />
                Departments
              </NuxtLink>
              <NuxtLink
                to="/emergency"
                class="flex items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium text-emergency-600 bg-emergency-50 hover:bg-emergency-100 dark:bg-emergency-900/30 dark:text-emergency-400 dark:hover:bg-emergency-900/50 transition-colors"
                @click="close"
              >
                <Icon name="i-lucide-heart-pulse" class="h-5 w-5" />
                Emergency Info
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { navigateTo } from '#app'

const props = defineProps({
  open: { type: Boolean, default: false },
})

const emit = defineEmits<{
  close: []
  'update:open': [value: boolean]
}>()

const query = ref('')

const searchData = [
  { id: '1', title: 'Dr. Sarah Johnson', subtitle: 'Cardiology · 15 years experience', url: '/doctors/1', icon: 'i-lucide-user-round', iconBg: 'bg-medical-100 dark:bg-medical-900/40', iconColor: 'text-medical-600 dark:text-medical-400' },
  { id: '2', title: 'Dr. Michael Chen', subtitle: 'Neurology · Brain & Spine Specialist', url: '/doctors/2', icon: 'i-lucide-user-round', iconBg: 'bg-medical-100 dark:bg-medical-900/40', iconColor: 'text-medical-600 dark:text-medical-400' },
  { id: '3', title: 'Dr. Emily Davis', subtitle: 'Pediatrics · Child Healthcare', url: '/doctors/3', icon: 'i-lucide-user-round', iconBg: 'bg-medical-100 dark:bg-medical-900/40', iconColor: 'text-medical-600 dark:text-medical-400' },
  { id: '4', title: 'Cardiology Department', subtitle: 'Heart & Vascular Care', url: '/departments/cardiology', icon: 'i-lucide-heart', iconBg: 'bg-healing-100 dark:bg-healing-900/40', iconColor: 'text-healing-600 dark:text-healing-400' },
  { id: '5', title: 'Emergency Department', subtitle: '24/7 Emergency Care', url: '/emergency', icon: 'i-lucide-heart-pulse', iconBg: 'bg-emergency-100 dark:bg-emergency-900/40', iconColor: 'text-emergency-600 dark:text-emergency-400' },
  { id: '6', title: 'Orthopedics', subtitle: 'Bone, Joint & Muscle Care', url: '/departments/orthopedics', icon: 'i-lucide-bone', iconBg: 'bg-warm-100 dark:bg-warm-900/40', iconColor: 'text-warm-600 dark:text-warm-400' },
  { id: '7', title: 'Pediatrics', subtitle: 'Children\'s Healthcare', url: '/departments/pediatrics', icon: 'i-lucide-baby', iconBg: 'bg-medical-100 dark:bg-medical-900/40', iconColor: 'text-medical-600 dark:text-medical-400' },
  { id: '8', title: 'Laboratory Services', subtitle: 'Diagnostic Testing', url: '/laboratory', icon: 'i-lucide-flask-conical', iconBg: 'bg-healing-100 dark:bg-healing-900/40', iconColor: 'text-healing-600 dark:text-healing-400' },
  { id: '9', title: 'Pharmacy', subtitle: 'Prescription & Medication', url: '/pharmacy', icon: 'i-lucide-pill', iconBg: 'bg-warm-100 dark:bg-warm-900/40', iconColor: 'text-warm-600 dark:text-warm-400' },
  { id: '10', title: 'Radiology', subtitle: 'Imaging & Diagnostics', url: '/radiology', icon: 'i-lucide-scan', iconBg: 'bg-medical-100 dark:bg-medical-900/40', iconColor: 'text-medical-600 dark:text-medical-400' },
]

const filteredResults = computed(() => {
  if (!query.value || query.value.length < 2) return []
  const q = query.value.toLowerCase()
  return searchData.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.subtitle.toLowerCase().includes(q)
  ).slice(0, 6)
})

const handleSearch = () => {
  if (query.value.length >= 2) {
    close()
    navigateTo(`/search?q=${encodeURIComponent(query.value)}`)
  }
}

const clearSearch = () => {
  query.value = ''
}

const close = () => {
  emit('update:open', false)
  emit('close')
}

watch(() => props.open, (val) => {
  if (val) {
    query.value = ''
    nextTick(() => {
      const input = document.getElementById('search-input')
      input?.focus()
    })
  }
})
</script>