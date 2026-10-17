<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Health information</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Health information
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Evidence-based health resources and patient education materials to help you stay informed
          and make the best decisions about your health.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="article in articles"
          :key="article.id"
          class="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon :name="article.icon" class="h-6 w-6" />
          </div>
          <h3 class="font-display text-lg font-semibold text-slate-950">{{ article.title }}</h3>
          <p class="mt-2 text-sm leading-5 text-slate-600 flex-grow">{{ article.excerpt }}</p>
          <NuxtLink
            :to="article.href"
            class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-medical-800"
          >
            Read more
            <Icon name="i-lucide-arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" src="https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Patient room with large window and modern furnishings" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Comfortable patient rooms — photo by Rameez Nawaz on Pexels.</figcaption>
        </figure>
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" src="https://images.pexels.com/photos/4386479/pexels-photo-4386479.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Medical team in discussion" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Team collaboration — photo by Christina M on Pexels.</figcaption>
        </figure>
        <figure class="m-0">
          <img class="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-cover object-center" src="https://images.pexels.com/photos/5325833/pexels-photo-5325833.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Doctor examining a patient" width="400" height="250" loading="lazy" decoding="async" />
          <figcaption class="mt-1.5 text-xs text-slate-500">Physician consultation — photo by Karolina Grabowska on Pexels.</figcaption>
        </figure>
      </div>

      <div class="mt-12 rounded-lg border border-slate-200 bg-white p-8">
        <h2 class="font-display text-2xl font-semibold text-slate-950">Need personalized advice?</h2>
        <p class="mt-3 text-slate-600">
          Our care team is available to answer your health questions and provide personalized guidance.
        </p>
        <NuxtLink
          to="/appointments/book"
          class="mt-4 inline-flex items-center gap-2 rounded-md bg-medical-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-medical-800"
        >
          Schedule a consultation
          <Icon name="i-lucide-calendar-plus" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Health Information | MedCore Hospital' })

const articles = [
  { id: 'nutrition', title: 'Healthy eating tips', excerpt: 'Evidence-based nutrition guidance for maintaining a balanced diet and managing chronic conditions.', icon: 'i-lucide-apple', href: '#nutrition' },
  { id: 'exercise', title: 'Exercise & fitness', excerpt: 'Safe and effective exercise recommendations for all ages and fitness levels.', icon: 'i-lucide-dumbbell', href: '#exercise' },
  { id: 'mental-health', title: 'Mental wellness', excerpt: 'Resources for managing stress, anxiety, and depression with professional support.', icon: 'i-lucide-brain', href: '#mental-health' },
  { id: 'sleep', title: 'Sleep hygiene', excerpt: 'Practical tips for improving sleep quality and managing sleep disorders.', icon: 'i-lucide-moon', href: '#sleep' },
  { id: 'preventive', title: 'Preventive care', excerpt: 'Guidance on screenings, vaccinations, and health checkups to prevent illness.', icon: 'i-lucide-shield', href: '#preventive' },
  { id: 'chronic', title: 'Chronic disease management', excerpt: 'Tools and strategies for managing diabetes, hypertension, and other chronic conditions.', icon: 'i-lucide-heart-pulse', href: '#chronic' },
]
</script>
