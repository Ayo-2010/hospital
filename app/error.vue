<template>
  <NuxtLayout :name="layoutName">
    <div class="min-h-[70vh] bg-slate-50">
      <div class="container-main py-14 sm:py-20">
        <div class="mx-auto max-w-2xl">
          <nav aria-label="Breadcrumb" class="text-sm text-slate-500">
            <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
            <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
            <span aria-current="page" class="font-medium text-slate-700">Page not found</span>
          </nav>

          <p class="mt-8 flex items-center gap-3 text-6xl font-semibold tracking-tight text-medical-700 sm:text-7xl">
            <Icon name="i-lucide-compass" class="h-12 w-12 shrink-0 text-medical-300 sm:h-16 sm:w-16" aria-hidden="true" />
            {{ isNotFound ? '404' : statusCode }}
          </p>

          <h1 class="mt-5 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
            {{ heading }}
          </h1>
          <p class="mt-4 text-base leading-7 text-slate-600">
            {{ explainer }}
          </p>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <NuxtLink to="/" class="btn-primary">
              <Icon name="i-lucide-house" class="h-4 w-4" aria-hidden="true" />
              Go to the homepage
            </NuxtLink>
            <button type="button" class="btn-secondary" @click="goBack">
              <Icon name="i-lucide-arrow-left" class="h-4 w-4" aria-hidden="true" />
              Go back
            </button>
            <a href="tel:+2347045033528" class="link inline-flex items-center gap-2 text-sm">
              <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
              Call 0704 503 3528
            </a>
          </div>

          <div class="mt-10 rounded-xl border border-emergency-200 bg-emergency-50 px-5 py-4">
            <p class="flex items-start gap-3 text-sm leading-6 text-emergency-900">
              <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 shrink-0 text-emergency-700" aria-hidden="true" />
              <span>
                <strong class="font-semibold">If this is a medical emergency,</strong>
                call
                <a href="tel:112" class="font-semibold underline underline-offset-2">112</a>
                or go straight to our emergency department — we are open 24 hours a day.
                <NuxtLink to="/emergency" class="font-semibold underline underline-offset-2">Emergency information</NuxtLink>
              </span>
            </p>
          </div>

          <section class="mt-10" aria-labelledby="error-links-title">
            <h2 id="error-links-title" class="font-display text-lg font-semibold text-slate-950">
              Popular pages
            </h2>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li v-for="link in links" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-medical-300 hover:shadow-card"
                >
                  <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700 transition-colors group-hover:bg-medical-700 group-hover:text-white">
                    <Icon :name="link.icon" class="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span class="min-w-0">
                    <span class="block text-sm font-semibold text-slate-900">{{ link.title }}</span>
                    <span class="mt-0.5 block text-sm leading-5 text-slate-600">{{ link.detail }}</span>
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { ROLE_BY_SEGMENT, workspaceKeyFromPath } from '~/composables/useNavigation'

const props = defineProps<{ error: NuxtError }>()

const route = useRoute()

/**
 * An error thrown from inside a staff workspace keeps the dashboard chrome,
 * everything else falls back to the public site shell. Without this the shell
 * would follow the layout of the page that threw, which is confusing when the
 * page that threw was the catch-all behind a 404.
 */
const layoutName = computed(() =>
  ROLE_BY_SEGMENT[workspaceKeyFromPath(route.path)] ? 'dashboard' : 'public',
)

const statusCode = computed(() => props.error?.statusCode ?? 500)
const isNotFound = computed(() => statusCode.value === 404)

const heading = computed(() =>
  isNotFound.value ? 'We can’t find that page' : 'Something went wrong on our side',
)

const explainer = computed(() => {
  if (isNotFound.value) {
    return 'The page you were looking for may have moved, been renamed, or never existed. Try one of the links below, or use the menu to find what you need.'
  }
  return 'The page could not be displayed. Please try again in a moment, or use one of the links below to continue browsing.'
})

const links = [
  { title: 'Departments & specialties', detail: 'Browse every care area.', icon: 'i-lucide-building', to: '/departments' },
  { title: 'Find a doctor', detail: 'Search our consultants by specialty.', icon: 'i-lucide-user-round-search', to: '/doctors' },
  { title: 'Medical services', detail: 'What each service includes.', icon: 'i-lucide-stethoscope', to: '/services' },
  { title: 'Book an appointment', detail: 'Request a visit online.', icon: 'i-lucide-calendar-plus', to: '/appointments/book' },
  { title: 'Locations & directions', detail: 'Campuses, hours and parking.', icon: 'i-lucide-map-pin', to: '/locations' },
  { title: 'Contact us', detail: 'Phone, email and enquiries.', icon: 'i-lucide-mail', to: '/contact' },
]

function goBack() {
  if (import.meta.client && window.history.length > 1) {
    useRouter().back()
    return
  }
  clearError({ redirect: '/' })
}

useHead({
  title: () => (isNotFound.value ? 'Page not found | MedCore Hospital' : 'Something went wrong | MedCore Hospital'),
})
</script>
