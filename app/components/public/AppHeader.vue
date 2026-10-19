<template>
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-medical-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      Skip to content
    </a>

    <EmergencyBanner />

    <nav class="container-main flex min-h-16 items-center justify-between gap-4 py-2.5" aria-label="Main">
      <NuxtLink to="/" class="flex shrink-0 items-center gap-2.5" aria-label="MedCore Hospital — home">
        <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-700 text-white">
          <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
        </span>
        <span class="leading-tight">
          <span class="block font-display text-base font-semibold tracking-tight text-medical-950 sm:text-lg">
            MedCore
          </span>
          <span class="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Hospital
          </span>
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-0.5 xl:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-medical-800"
          :class="isActive(item.to) ? 'bg-medical-50 text-medical-800' : ''"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-medical-800"
          aria-label="Search doctors, departments and services"
          @click="searchOpen = true"
        >
          <Icon name="i-lucide-search" class="h-5 w-5" aria-hidden="true" />
        </button>

        <NuxtLink
          to="/auth/login"
          class="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-medical-800 md:inline-flex"
        >
          Patient portal
        </NuxtLink>

        <NuxtLink
          to="/appointments/book"
          class="hidden items-center justify-center gap-2 rounded-lg bg-medical-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-medical-800 sm:inline-flex"
        >
          <Icon name="i-lucide-calendar-days" class="h-4 w-4" aria-hidden="true" />
          Book appointment
        </NuxtLink>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 xl:hidden"
          :aria-expanded="mobileMenuOpen"
          :aria-controls="menuId"
          :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="mobileMenuOpen" :id="menuId" class="border-t border-slate-200 bg-white xl:hidden">
        <nav class="container-main space-y-1 py-3" aria-label="Mobile">
          <NuxtLink
            v-for="item in navItems"
            :key="`mobile-${item.to}`"
            :to="item.to"
            class="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-medical-50 hover:text-medical-800"
            :class="isActive(item.to) ? 'bg-medical-50 text-medical-800' : ''"
            :aria-current="isActive(item.to) ? 'page' : undefined"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="space-y-2 border-t border-slate-200 pt-3">
            <NuxtLink
              to="/auth/login"
              class="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-medical-50 hover:text-medical-800"
              @click="mobileMenuOpen = false"
            >
              Patient portal
            </NuxtLink>
            <NuxtLink
              to="/appointments/book"
              class="flex items-center justify-center gap-2 rounded-lg bg-medical-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-medical-800"
              @click="mobileMenuOpen = false"
            >
              <Icon name="i-lucide-calendar-days" class="h-4 w-4" aria-hidden="true" />
              Book appointment
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>

    <SearchModal v-model:open="searchOpen" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EmergencyBanner from './EmergencyBanner.vue'
import SearchModal from './SearchModal.vue'

const mobileMenuOpen = ref(false)
const searchOpen = ref(false)
const menuId = 'public-main-menu'

const route = useRoute()

function isActive(to: string) {
  return route.path === to || (to !== '/' && route.path.startsWith(to))
}

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Departments', to: '/departments' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Services', to: '/services' },
  { label: 'Emergency', to: '/emergency' },
  { label: 'Contact', to: '/contact' },
]
</script>
