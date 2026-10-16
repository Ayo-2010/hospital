<template>
  <section class="section" aria-labelledby="contact-heading">
    <div class="container-main">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="lg:col-span-1 space-y-6 animate-fade-in animate-slide-up">
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

        <div class="lg:col-span-2 animate-fade-in animate-slide-up stagger-1">
          <div class="card">
            <h2 class="text-xl font-semibold text-slate-900 dark:text-white mb-6">Send Us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="name" class="label-field">Full Name *</label>
                  <input id="name" type="text" v-model="form.name" required class="input-field" />
                </div>
                <div>
                  <label for="email" class="label-field">Email Address *</label>
                  <input id="email" type="email" v-model="form.email" required class="input-field" />
                </div>
              </div>
              <div>
                <label for="phone" class="label-field">Phone Number</label>
                <input id="phone" type="tel" v-model="form.phone" class="input-field" />
              </div>
              <div>
                <label for="subject" class="label-field">Subject *</label>
                <select id="subject" v-model="form.subject" required class="input-field">
                  <option value="">Select a topic</option>
                  <option value="appointment">Appointment Scheduling</option>
                  <option value="billing">Billing & Insurance</option>
                  <option value="records">Medical Records</option>
                  <option value="feedback">Feedback & Complaints</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label for="message" class="label-field">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  :rows="5"
                  required
                  class="textarea-field"
                  placeholder="Please describe how we can help you..."
                />
              </div>
              <div class="flex items-start gap-3">
                <input type="checkbox" id="privacy" v-model="form.privacy" required class="mt-1 h-4 w-4 rounded border-slate-300 text-medical-600 focus:ring-medical-500" />
                <label for="privacy" class="text-sm text-slate-600 dark:text-slate-400">
                  I agree to the <NuxtLink to="/privacy" class="text-medical-600 hover:underline">Privacy Policy</NuxtLink> and understand my information will be used to respond to my inquiry.
                </label>
              </div>
              <UButton type="submit" color="medical" size="lg" class="w-full sm:w-auto" :loading="loading">
                <Icon name="i-lucide-send" class="h-5 w-5" />
                Send Message
              </UButton>
            </form>
          </div>

          <div class="mt-6 card bg-medical-50 dark:bg-medical-900/20 border-medical-200 dark:border-medical-800">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-100 dark:bg-medical-900/40 shrink-0">
                <Icon name="i-lucide-info" class="h-5 w-5 text-medical-600 dark:text-medical-400" />
              </div>
              <div>
                <h3 class="font-semibold text-medical-800 dark:text-medical-200">Quick Answers</h3>
                <ul class="mt-2 space-y-1 text-sm text-medical-700 dark:text-medical-300">
                  <li>• For medical emergencies, call <strong>911</strong> immediately</li>
                  <li>• For appointment changes, call <strong>+1 (123) 456-7890</strong></li>
                  <li>• For billing questions, contact <strong>billing@medcorehms.com</strong></li>
                  <li>• For medical records, use the <NuxtLink to="/auth/login" class="underline">Patient Portal</NuxtLink></li>
                  <li>• Typical response time: <strong>24-48 hours</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 animate-fade-in animate-slide-up stagger-2">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Our Locations</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LocationCard
            v-for="location in locations"
            :key="location.name"
            :name="location.name"
            :address="location.address"
            :phone="location.phone"
            :hours="location.hours"
            :services="location.services"
            :image="location.image"
            :isMain="location.isMain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToast } from '#ui/composables/useToast'
import ContactInfoCard from './ContactInfoCard.vue'
import LocationCard from './LocationCard.vue'

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.add({ title: 'Message Sent', description: 'We\'ll get back to you within 24-48 hours.', color: 'success' })
    Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '', privacy: false })
  } catch {
    toast.add({ title: 'Error', description: 'Failed to send message. Please try again.', color: 'error' })
  } finally {
    loading.value = false
  }
}

const contactInfo = [
  {
    title: 'General Inquiries',
    description: 'Questions about our services, departments, or general information.',
    icon: 'i-lucide-message-circle',
    color: 'medical',
    links: [
      { label: 'info@medcorehms.com', href: 'mailto:info@medcorehms.com' },
      { label: '+1 (123) 456-7890', href: 'tel:+11234567890' },
    ],
  },
  {
    title: 'Patient Services',
    description: 'Appointments, medical records, billing, and patient portal assistance.',
    icon: 'i-lucide-user-round',
    color: 'healing',
    links: [
      { label: 'patients@medcorehms.com', href: 'mailto:patients@medcorehms.com' },
      { label: '+1 (123) 456-7891', href: 'tel:+11234567891' },
      { label: 'Patient Portal', href: '/auth/login' },
    ],
  },
  {
    title: 'Emergency',
    description: 'For life-threatening emergencies, call 911 immediately.',
    icon: 'i-lucide-heart-pulse',
    color: 'emergency',
    links: [
      { label: 'Emergency Dept: +1 (123) 456-7890', href: 'tel:+11234567890' },
      { label: 'Ambulance: 911', href: 'tel:911' },
      { label: 'ER Directions', href: '/emergency' },
    ],
  },
]

const locations = [
  {
    name: 'Main Hospital Campus',
    address: '123 Medical Center Drive\nHealthcare District, HC 12345',
    phone: '+1 (123) 456-7890',
    hours: 'Open 24/7 (Emergency)\nMon-Fri: 6 AM - 8 PM (Main Entrance)',
    services: ['Emergency', 'Inpatient', 'Surgery', 'ICU', 'Imaging'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80',
    isMain: true,
  },
  {
    name: 'Medical Office Building',
    address: '450 Health Plaza, Suite 200\nHealthcare District, HC 12345',
    phone: '+1 (123) 456-7892',
    hours: 'Mon-Fri: 8 AM - 6 PM\nSat: 8 AM - 12 PM',
    services: ['Outpatient Clinics', 'Imaging', 'Lab', 'Pharmacy'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
    isMain: false,
  },
  {
    name: 'Wellness & Rehab Center',
    address: '789 Wellness Way\nHealthcare District, HC 12345',
    phone: '+1 (123) 456-7893',
    hours: 'Mon-Fri: 7 AM - 7 PM\nSat: 8 AM - 2 PM',
    services: ['Physical Therapy', 'Cardiac Rehab', 'Fitness', 'Pool'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
    isMain: false,
  },
]
</script>