<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300" aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Our services</span>
      </nav>

      <header class="mb-10 max-w-3xl">
        <p class="eyebrow">Medical services</p>
        <h1 class="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Services at MedCore Hospital
        </h1>
        <p class="mt-4 text-base leading-7 text-slate-600">
          Care is organised into six service areas. Choose an area to see what it covers, or open any
          individual service for details of what the appointment involves.
        </p>
      </header>

      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="category in categories"
          :key="category.slug"
          class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-card"
        >
          <img
            :src="category.image"
            :alt="`${category.name} at MedCore Hospital`"
            class="aspect-[16/7] w-full bg-slate-100 object-cover object-center"
            width="800"
            height="350"
            loading="lazy"
            decoding="async"
          >

          <div class="flex flex-1 flex-col p-6">
            <div class="flex items-start gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
                <Icon :name="category.icon" class="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 class="font-display text-xl font-semibold text-slate-950">
                  <NuxtLink :to="`/services/${category.slug}`" class="hover:text-medical-800">
                    {{ category.name }}
                  </NuxtLink>
                </h2>
                <p class="mt-1.5 text-sm leading-6 text-slate-600">{{ category.summary }}</p>
              </div>
            </div>

            <ul class="mt-5 flex-1 space-y-2 border-t border-slate-100 pt-4">
              <li v-for="item in category.items" :key="item.slug">
                <NuxtLink
                  :to="`/services/${item.slug}`"
                  class="group flex items-start gap-2 text-sm text-slate-700 hover:text-medical-800"
                >
                  <Icon name="i-lucide-chevron-right" class="mt-0.5 h-4 w-4 shrink-0 text-medical-600" aria-hidden="true" />
                  <span class="font-medium">{{ item.name }}</span>
                </NuxtLink>
              </li>
            </ul>

            <NuxtLink :to="`/services/${category.slug}`" class="link mt-5 inline-flex items-center gap-2 text-sm">
              About {{ category.name }}
              <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="mt-12 rounded-2xl bg-medical-900 p-8 text-center text-white sm:p-10">
        <h2 class="font-display text-2xl font-semibold sm:text-3xl">Not sure which service you need?</h2>
        <p class="mx-auto mt-3 max-w-2xl text-medical-100">
          Tell us what is going on and our team will point you to the right clinic, or contact your
          general doctor for advice.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <NuxtLink to="/appointments/book" class="btn bg-white text-medical-900 hover:bg-medical-50">
            <Icon name="i-lucide-calendar-plus" class="h-4 w-4" aria-hidden="true" />
            Request an appointment
          </NuxtLink>
          <a href="tel:+2347045033528" class="btn border border-white/30 text-white hover:bg-white/10">
            <Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />
            0704 503 3528
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SERVICE_CATEGORIES } from '~/data/services'

definePageMeta({ layout: 'public' })

const categories = SERVICE_CATEGORIES

useHead({
  title: 'Medical Services | MedCore Hospital',
  meta: [
    {
      name: 'description',
      content:
        'Explore the medical services at MedCore Hospital, from primary and emergency care to surgery, diagnostics and maternity.',
    },
  ],
})
</script>
