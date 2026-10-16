<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white">
    <EmergencyBanner />

    <nav class="container-main flex min-h-18 items-center justify-between gap-4 py-3" aria-label="Main navigation">
      <NuxtLink to="/" class="flex shrink-0 items-center gap-3" aria-label="MedCore HMS Home">
        <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-700 text-white">
          <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
        </span>
        <span class="leading-tight">
          <span class="block font-display text-lg font-bold tracking-tight text-medical-900">{{ appName }}</span>
          <span class="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Hospital
          </span>
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-medical-800"
          :class="isActive(item.to) ? 'bg-medical-50 font-semibold text-medical-800' : ''"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <NuxtLink
          to="/auth/login"
          class="hidden text-sm font-medium text-slate-600 underline-offset-4 hover:text-medical-800 hover:underline sm:inline-flex"
        >
          Patient portal
        </NuxtLink>
        <NuxtLink
          to="/appointments/book"
          class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-medical-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-medical-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-700"
        >
          <Icon name="i-lucide-calendar-days" class="h-4 w-4" aria-hidden="true" />
          <span class="hidden sm:inline">Book appointment</span>
          <span class="sm:hidden">Book</span>
        </NuxtLink>
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-700 lg:hidden"
          :aria-expanded="mobileMenuOpen"
          :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="mobileMenuOpen"
        :id="menuId"
        class="border-t border-slate-200 bg-white lg:hidden"
      >
        <nav class="container-main space-y-1 py-3" aria-label="Mobile navigation">
          <NuxtLink
            v-for="item in navItems"
            :key="`mobile-${item.to}`"
            :to="item.to"
            class="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800"
            :class="isActive(item.to) ? 'bg-medical-50 text-medical-800' : ''"
            :aria-current="isActive(item.to) ? 'page' : undefined"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="border-t border-slate-200 pt-2 space-y-2">
            <NuxtLink
              to="/auth/login"
              class="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-medical-50 hover:text-medical-800"
              @click="mobileMenuOpen = false"
            >
              Patient portal
            </NuxtLink>
            <NuxtLink
              to="/appointments/book"
              class="flex items-center justify-center gap-2 rounded-lg bg-medical-700 px-4 py-3 text-sm font-semibold text-white hover:bg-medical-800"
              @click="mobileMenuOpen = false"
            >
              <Icon name="i-lucide-calendar-days" class="h-4 w-4" aria-hidden="true" />
              Book appointment
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRuntimeConfig } from '#app'
import EmergencyBanner from './EmergencyBanner.vue'

const appName = useRuntimeConfig().public.appName
const mobileMenuOpen = ref(false)
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
