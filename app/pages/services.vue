<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Our services</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Medical services at MedCore
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          We offer comprehensive medical services across multiple specialties. From routine checkups
          to advanced procedures, our expert clinicians use cutting-edge technology to deliver
          exceptional care.
        </p>
      </div>

      <div class="grid gap-10 sm:gap-8 lg:grid-cols-2">
        <div
          v-for="service in services"
          :key="service.id"
          class="flex gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div class="mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-medical-100 text-medical-700">
            <Icon :name="service.icon" class="h-6 w-6" />
          </div>
          <div class="flex-1">
            <h3 class="font-display text-xl font-semibold text-slate-950">{{ service.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ service.description }}</p>
            <ul class="mt-3 space-y-1 text-sm text-slate-500">
              <li v-for="item in service.items" :key="item" class="flex items-start gap-2">
                <Icon name="i-lucide-chevron-right" class="mt-0.5 h-3.5 w-3.5 text-medical-700" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
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

      <div class="mt-12 rounded-lg border border-medical-200 bg-medical-50 p-8 text-center">
        <h2 class="font-display text-2xl font-semibold text-medical-950">Ready to schedule?</h2>
        <p class="mt-3 text-slate-700">Book an appointment online or call our main line.</p>
        <div class="mt-5 flex justify-center gap-4">
          <NuxtLink
            to="/appointments/book"
            class="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-medical-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-medical-800"
          >
            Book online
            <Icon name="i-lucide-calendar-plus" class="h-4 w-4" />
          </NuxtLink>
          <a
            href="tel:+2347045033528"
            class="inline-flex items-center gap-2 text-sm font-semibold text-medical-800"
          >
            <Icon name="i-lucide-phone" class="h-4 w-4" />
            Call 0704 503 3528
          </a>
        </div>
        <p class="mt-3 text-xs text-slate-500">Demonstration contact details.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Medical Services | MedCore Hospital' })

const services = [
  {
    id: 'primary-care',
    title: 'Primary Care',
    description: 'Routine checkups, preventive care, and chronic disease management for the whole family.',
    icon: 'i-lucide-heart-pulse',
    items: ['Annual physicals', 'Vaccinations', 'Health screenings', 'Chronic condition management'],
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 emergency services for life-threatening conditions with rapid response teams.',
    icon: 'i-lucide-circle-alert',
    items: ['ER services', 'Trauma center', 'Ambulance transport', 'Observational care'],
  },
  {
    id: 'specialty',
    title: 'Specialty Care',
    description: 'Advanced care in subspecialties including cardiology, orthopedics, and neurology.',
    icon: 'i-lucide-star',
    items: ['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics', 'Surgery'],
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    description: 'State-of-the-art imaging and lab services for accurate diagnosis and treatment planning.',
    icon: 'i-lucide-scan',
    items: ['MRI & CT scans', 'X-ray & ultrasound', 'Laboratory testing', 'Pathology'],
  },
  {
    id: 'surgery',
    title: 'Surgery',
    description: 'Multi-specialty surgical services including minimally invasive and robotic procedures.',
    icon: 'i-lucide-scissors',
    items: ['General surgery', 'Robotic surgery', 'Orthopedic surgery', 'Outpatient surgery'],
  },
  {
    id: 'maternity',
    title: 'Maternity Care',
    description: 'Comprehensive prenatal, delivery, and postpartum care in a supportive environment.',
    icon: 'i-lucide-baby',
    items: ['Prenatal care', 'Labor & delivery', 'Newborn care', 'Postpartum support'],
  },
]
</script>
