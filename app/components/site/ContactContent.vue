<template>
  <section class="section" aria-labelledby="contact-heading">
    <div class="container-main">
      <div class="mx-auto max-w-2xl text-center animate-fade-in">
        <p class="eyebrow">Get in touch</p>
        <h2 id="contact-heading" class="mt-3">Contact us</h2>
        <p class="mt-4 text-base leading-7 text-slate-600">
          Have questions or need assistance? Reach out through any of the channels below.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="space-y-6 animate-fade-in">
          <ContactInfoCard
            v-for="info in contactInfo"
            :key="info.title"
            :title="info.title"
            :description="info.description"
            :icon="info.icon"
            :links="info.links"
            :color="info.color"
          />
        </div>

        <div class="space-y-6 lg:col-span-2">
          <div id="contact-form" class="card animate-fade-in stagger-1">
            <h2 class="font-display text-xl font-semibold tracking-tight text-slate-950">Send us a message</h2>
            <p class="mt-2 text-sm text-slate-600">
              Fields marked <span aria-hidden="true">*</span> are required.
            </p>

            <form class="mt-6 space-y-5" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label for="name" class="label-field">Full name <span aria-hidden="true">*</span></label>
                  <input id="name" v-model="form.name" type="text" autocomplete="name" class="input-field" required>
                </div>
                <div>
                  <label for="email" class="label-field">Email address <span aria-hidden="true">*</span></label>
                  <input id="email" v-model="form.email" type="email" autocomplete="email" class="input-field" required>
                </div>
              </div>

              <div>
                <label for="phone" class="label-field">Phone number</label>
                <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" class="input-field">
              </div>

              <div>
                <label for="subject" class="label-field">Subject <span aria-hidden="true">*</span></label>
                <select id="subject" v-model="form.subject" class="input-field" required>
                  <option value="">Select a topic</option>
                  <option value="appointment">Appointment Scheduling</option>
                  <option value="billing">Billing &amp; Insurance</option>
                  <option value="records">Medical Records</option>
                  <option value="feedback">Feedback &amp; Complaints</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="label-field">Message <span aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  v-model="form.message"
                  :rows="5"
                  class="textarea-field"
                  placeholder="Please describe how we can help you..."
                  required
                />
              </div>

              <div class="flex items-start gap-3">
                <input
                  id="privacy"
                  v-model="form.privacy"
                  type="checkbox"
                  required
                  class="mt-1 h-4 w-4 rounded border-slate-300 text-medical-700 focus:ring-medical-600"
                >
                <label for="privacy" class="text-sm leading-6 text-slate-600">
                  I agree to the <NuxtLink to="/privacy" class="link">Privacy Policy</NuxtLink> and understand my
                  information will be used to respond to my inquiry.
                </label>
              </div>

              <button type="submit" class="btn-primary btn-lg" :disabled="loading">
                <Icon name="i-lucide-send" class="h-5 w-5" aria-hidden="true" />
                {{ loading ? 'Sending…' : 'Send message' }}
              </button>
            </form>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="card animate-fade-in stagger-2">
              <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-medical-50 text-medical-700">
                <Icon name="i-lucide-map-pin" class="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 class="mt-4 font-display text-base font-semibold tracking-tight text-slate-950">Visit our reception</h3>
              <address class="mt-2 text-sm not-italic leading-6 text-slate-600">
                12 Adeola Odeku Street<br>
                Victoria Island, Lagos 101241
              </address>
              <NuxtLink to="/locations" class="link mt-4 inline-flex items-center gap-1.5 text-sm">
                Find a location
                <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
              </NuxtLink>
            </div>

            <div class="card animate-fade-in stagger-2">
              <h3 class="font-display text-base font-semibold tracking-tight text-slate-950">Quick answers</h3>
              <ul class="mt-4 space-y-3 text-sm text-slate-600">
                <li class="flex items-start gap-2.5">
                  <Icon name="i-lucide-circle-alert" class="mt-0.5 h-4 w-4 shrink-0 text-emergency-700" aria-hidden="true" />
                  <span>For medical emergencies, call <strong class="font-semibold text-slate-900">112</strong> immediately.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <Icon name="i-lucide-phone" class="mt-0.5 h-4 w-4 shrink-0 text-medical-700" aria-hidden="true" />
                  <span>For appointment changes, call <a href="tel:+2347045033528" class="link">0704 503 3528</a>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <Icon name="i-lucide-mail" class="mt-0.5 h-4 w-4 shrink-0 text-medical-700" aria-hidden="true" />
                  <span>For billing questions, email <a href="mailto:billing@medcorehospital.com" class="link">billing@medcorehospital.com</a>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <Icon name="i-lucide-log-in" class="mt-0.5 h-4 w-4 shrink-0 text-medical-700" aria-hidden="true" />
                  <span>For medical records, use the <NuxtLink to="/auth/login" class="link">patient portal</NuxtLink>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <Icon name="i-lucide-clock" class="mt-0.5 h-4 w-4 shrink-0 text-medical-700" aria-hidden="true" />
                  <span>Typical response time: <strong class="font-semibold text-slate-900">24–48 hours</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section class="mt-16 animate-fade-in stagger-3" aria-labelledby="contact-locations-heading">
        <div class="text-center">
          <p class="eyebrow">Visit us</p>
          <h2 id="contact-locations-heading" class="mt-3">Our locations</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">Visit any of our three convenient campuses.</p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LocationCard
            v-for="location in locations"
            :key="location.name"
            :name="location.name"
            :address="location.address"
            :phone="location.phone"
            :hours="location.hours"
            :services="location.services"
            :image="location.image"
            :is-main="location.isMain"
            link="/locations"
          />
        </div>

        <div class="mt-8 text-center">
          <NuxtLink to="/locations" class="btn-secondary">
            View all locations
            <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToast } from '#ui/composables/useToast'
import ContactInfoCard from './ContactInfoCard.vue'
import LocationCard from './LocationCard.vue'
import { MEDIA } from '~/data/media'

const toast = useToast()
const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false,
})

async function handleSubmit() {
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.add({ title: 'Message sent', description: 'We\'ll get back to you within 24-48 hours.', color: 'success' })
    Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '', privacy: false })
  } catch {
    toast.add({ title: 'Error', description: 'Failed to send message. Please try again.', color: 'error' })
  } finally {
    loading.value = false
  }
}

const contactInfo: {
  title: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
  links: { label: string; href: string }[]
}[] = [
  {
    title: 'General Inquiries',
    description: 'Questions about our services, departments, or general information.',
    icon: 'i-lucide-message-circle',
    color: 'medical',
    links: [
      { label: 'info@medcorehospital.com', href: 'mailto:info@medcorehospital.com' },
      { label: '0704 503 3528', href: 'tel:+2347045033528' },
    ],
  },
  {
    title: 'Patient Services',
    description: 'Appointments, medical records, billing, and patient portal assistance.',
    icon: 'i-lucide-user-round',
    color: 'healing',
    links: [
      { label: 'patients@medcorehospital.com', href: 'mailto:patients@medcorehospital.com' },
      { label: '0704 503 3528', href: 'tel:+2347045033528' },
      { label: 'Patient Portal', href: '/auth/login' },
    ],
  },
  {
    title: 'Emergency',
    description: 'For life-threatening emergencies, call 112 immediately.',
    icon: 'i-lucide-heart-pulse',
    color: 'emergency',
    links: [
      { label: 'Emergency Dept: 0704 503 3528', href: 'tel:+2347045033528' },
      { label: 'Ambulance: 112', href: 'tel:112' },
      { label: 'Emergency directions', href: '/emergency' },
    ],
  },
]

const locations = [
  {
    name: 'Victoria Island Campus',
    address: '12 Adeola Odeku Street\nVictoria Island, Lagos 101241',
    phone: '0704 503 3528',
    hours: 'Open 24/7 (Emergency)\nMon–Fri: 6am - 8pm (Main Entrance)',
    services: ['Emergency', 'Inpatient', 'Surgery', 'ICU', 'Imaging', 'Pharmacy'],
    image: MEDIA.wayfinding,
    isMain: true,
  },
  {
    name: 'Ikoyi Specialist Centre',
    address: '24 Bourdillon Road, Suite 200\nIkoyi, Lagos 106104',
    phone: '0704 503 3529',
    hours: 'Mon–Fri: 8am - 6pm\nSat: 8am - 12pm',
    services: ['Outpatient Clinics', 'Imaging', 'Laboratory', 'Pharmacy'],
    image: MEDIA.consultationRoom,
    isMain: false,
  },
  {
    name: 'Wellness & Rehabilitation Centre',
    address: '8 Musa Yar\'Adua Street\nVictoria Island, Lagos 101241',
    phone: '0704 503 3530',
    hours: 'Mon–Fri: 7am - 7pm\nSat: 8am - 2pm',
    services: ['Physiotherapy', 'Cardiac Rehab', 'Fitness', 'Hydrotherapy'],
    image: MEDIA.physiotherapy,
    isMain: false,
  },
]
</script>
