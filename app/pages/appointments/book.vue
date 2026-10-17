<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 flex items-center gap-2 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Request an appointment</span>
      </nav>

      <div class="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
            Request an appointment
          </h1>
          <p class="mt-2 max-w-2xl text-base leading-6 text-slate-600">
            Tell us what care you need and when you prefer to visit. Our team will follow up to confirm a time.
          </p>
        </div>
        <NuxtLink
          to="/auth/login"
          class="text-sm font-semibold text-medical-800 underline decoration-medical-200 underline-offset-4"
        >
          Sign in instead
          <span class="sr-only">to book directly in the patient portal</span>
        </NuxtLink>
      </div>

      <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_328px] lg:gap-10">
        <form
          class="min-w-0 rounded-lg border border-slate-200 bg-white p-6 sm:p-8"
          aria-label="Appointment request form"
          @submit.prevent="handleBooking"
        >
          <div class="mb-6 flex items-start gap-4">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-800 text-sm font-semibold text-white">1</span>
            <div>
              <h2 class="font-display text-xl font-semibold text-slate-900">Care selected</h2>
              <p class="mt-1 text-sm text-slate-500">Choose a department and visit type.</p>
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <label class="block text-sm font-semibold text-slate-700">
              Department <span class="text-emergency-700">*</span>
              <select
                v-model="form.department"
                class="input-field mt-1.5 text-sm font-normal"
                required
                @change="onDepartmentChange"
              >
                <option value="">Select a department</option>
                <option v-for="dept in departments" :key="dept.value" :value="dept.value">
                  {{ dept.label }}
                </option>
              </select>
            </label>

            <label class="block text-sm font-semibold text-slate-700">
              Doctor or clinician <span class="text-emergency-700">*</span>
              <select
                v-model="form.doctor"
                class="input-field mt-1.5 text-sm font-normal"
                required
                :disabled="!form.department"
              >
                <option value="">
                  {{ form.department ? 'Select a clinician' : 'Choose a department first' }}
                </option>
                <option v-for="doctor in visibleDoctors" :key="doctor.value" :value="doctor.value">
                  {{ doctor.label }}
                </option>
              </select>
              <span class="mt-1.5 block text-xs font-normal text-slate-500">
                Only clinicians in the selected department are listed.
              </span>
            </label>

            <fieldset class="sm:col-span-2">
              <legend class="mb-2.5 text-sm font-semibold text-slate-700">
                Appointment type <span class="text-emergency-700">*</span>
              </legend>
              <div class="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                <label
                  v-for="type in appointmentTypes"
                  :key="type.value"
                  class="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-md border px-3.5 text-sm transition-colors"
                  :class="form.type === type.value ? 'border-medical-700 bg-medical-50 text-medical-950' : 'border-slate-300 text-slate-700 hover:bg-slate-50'"
                >
                  <input
                    v-model="form.type"
                    class="h-4 w-4 accent-medical-700"
                    type="radio"
                    name="appointment-type"
                    :value="type.value"
                  />
                  {{ type.label }}
                </label>
              </div>
            </fieldset>
          </div>

          <div class="mt-6 mb-6 flex items-start gap-4">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-800 text-sm font-semibold text-white">2</span>
            <div>
              <h2 class="font-display text-xl font-semibold text-slate-900">Date and time</h2>
              <p class="mt-1 text-sm text-slate-500">Share a preferred date. We’ll contact you to confirm availability.</p>
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <label class="block text-sm font-semibold text-slate-700">
              Preferred date <span class="text-emergency-700">*</span>
              <input
                v-model="form.date"
                class="input-field mt-1.5 text-sm"
                type="date"
                :min="minDate"
                required
              />
            </label>
            <label class="block text-sm font-semibold text-slate-700">
              Preferred time of day <span class="text-emergency-700">*</span>
              <select v-model="form.time" class="input-field mt-1.5 text-sm font-normal" required>
                <option value="">Select a preference</option>
                <option v-for="slot in timePreferences" :key="slot.value" :value="slot.value">
                  {{ slot.label }}
                </option>
              </select>
              <span class="mt-1.5 block text-xs font-normal text-slate-500">
                A time preference — not a bookable slot. We’ll confirm with you.
              </span>
            </label>
          </div>

          <div class="mt-6 mb-6 flex items-start gap-4">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-800 text-sm font-semibold text-white">3</span>
            <div>
              <h2 class="font-display text-xl font-semibold text-slate-900">Your details</h2>
              <p class="mt-1 text-sm text-slate-500">Add your contact details and reason for the visit.</p>
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <label class="block text-sm font-semibold text-slate-700">
              Full name <span class="text-emergency-700">*</span>
              <input
                v-model="form.patientName"
                autocomplete="name"
                class="input-field mt-1.5 text-sm font-normal"
                placeholder="Full name"
                required
              />
            </label>
            <label class="block text-sm font-semibold text-slate-700">
              Email address <span class="text-emergency-700">*</span>
              <input
                v-model="form.email"
                autocomplete="email"
                class="input-field mt-1.5 text-sm font-normal"
                type="email"
                placeholder="name@example.com"
                required
              />
            </label>
            <label class="block text-sm font-semibold text-slate-700 sm:col-span-2">
              Reason for visit <span class="font-normal text-slate-500">(optional)</span>
              <textarea
                v-model="form.reason"
                class="textarea-field mt-1.5 text-sm font-normal"
                placeholder="Briefly tell us what you'd like help with"
                rows="3"
              ></textarea>
            </label>
          </div>

          <div class="mt-8 flex items-start gap-3">
            <input
              id="privacy-agree"
              v-model="form.privacy"
              type="checkbox"
              class="mt-1 h-4 w-4 rounded border-slate-300 text-medical-600 focus:ring-medical-500"
              required
            />
            <label for="privacy-agree" class="text-sm text-slate-600">
              I agree to the
              <NuxtLink to="/privacy" class="font-semibold text-medical-800 underline underline-offset-2">Privacy Policy</NuxtLink>
              and understand my information will be used to respond to my inquiry.
            </label>
          </div>

          <div v-if="notice" role="status" class="mt-4 rounded-md border border-medical-200 bg-medical-50 p-3 text-sm text-medical-900">
            {{ notice }}
          </div>

          <UButton
            type="submit"
            size="lg"
            class="mt-6 w-full sm:w-auto"
            :loading="loading"
            color="primary"
          >
            Submit request
          </UButton>

          <div class="mt-4 flex items-start gap-3 rounded-md border border-warm-200 bg-warm-50 px-4 py-3 text-sm text-warm-900">
            <Icon name="i-lucide-circle-alert" class="mt-0.5 h-4 w-4 shrink-0 text-warm-700" aria-hidden="true" />
            <p>
              This is a request only — nothing is confirmed until a care team member contacts you. For a medical
              emergency, call
              <a class="font-semibold underline underline-offset-2" href="tel:112">112</a>.
            </p>
          </div>
        </form>

        <aside class="space-y-5">
          <div class="rounded-lg border border-emergency-200 bg-emergency-50 px-4 py-3.5">
            <div class="flex items-start gap-3">
              <Icon name="i-lucide-circle-alert" class="mt-0.5 h-5 w-5 text-emergency-700" />
              <p class="text-sm leading-5 text-emergency-900">
                <strong class="block font-semibold">Need urgent help?</strong>
                For a medical emergency, call
                <a class="font-semibold underline underline-offset-2" href="tel:112">112</a> or
                <NuxtLink class="font-semibold underline underline-offset-2" to="/emergency">view emergency care</NuxtLink>.
              </p>
            </div>
          </div>

          <PreviewDemoContentNotice compact />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useToast } from '#ui/composables/useToast'
import PreviewDemoContentNotice from '~/components/preview/DemoContentNotice.vue'

definePageMeta({ layout: 'public' })
useHead({ title: 'Request an Appointment | MedCore Hospital' })

const toast = useToast()
const loading = ref(false)
const notice = ref('')

const form = reactive({
  department: '',
  doctor: '',
  date: '',
  time: '',
  type: 'IN_PERSON',
  patientName: '',
  email: '',
  phone: '',
  reason: '',
  privacy: false,
})

const minDate = new Date().toISOString().slice(0, 10)

const departments = [
  { label: 'General Medicine', value: 'general-medicine' },
  { label: 'Cardiology', value: 'cardiology' },
  { label: 'Orthopedics', value: 'orthopedics' },
  { label: 'Pediatrics', value: 'pediatrics' },
  { label: 'Neurology', value: 'neurology' },
  { label: 'Psychiatry & Psychology', value: 'psychiatry-psychology' },
]

const allDoctors = [
  { label: 'Dr. Sarah Johnson — Cardiology', value: 'sarah-johnson', dept: 'cardiology' },
  { label: 'Dr. Michael Chen — Neurology', value: 'michael-chen', dept: 'neurology' },
  { label: 'Dr. Emily Davis — Pediatrics', value: 'emily-davis', dept: 'pediatrics' },
  { label: 'Dr. James Wilson — General Medicine', value: 'james-wilson', dept: 'general-medicine' },
  { label: 'Dr. Lisa Anderson — Orthopedics', value: 'lisa-anderson', dept: 'orthopedics' },
]

const visibleDoctors = computed(() => {
  if (!form.department) return []
  return allDoctors.filter((d) => d.dept === form.department)
})

const timePreferences = [
  { label: 'Morning', value: 'morning' },
  { label: 'Afternoon', value: 'afternoon' },
  { label: 'Any time', value: 'any' },
]

const appointmentTypes = [
  { label: 'In-person visit', value: 'IN_PERSON' },
  { label: 'Telemedicine', value: 'TELEMEDICINE' },
  { label: 'Follow-up', value: 'FOLLOW_UP' },
  { label: 'Specialist referral', value: 'SPECIALIST' },
]

function onDepartmentChange() {
  form.doctor = ''
}

async function handleBooking() {
  if (!form.privacy) {
    toast.add({ title: 'Agreement required', description: 'Please agree to the privacy policy to continue.', color: 'error' })
    return
  }
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    notice.value = 'This is a demonstration form. Your request has been recorded but no real appointment was scheduled.'
    toast.add({ title: 'Request submitted', description: 'We will contact you within 24-48 hours to confirm your appointment.', color: 'success' })
  } catch {
    toast.add({ title: 'Error', description: 'Failed to submit request. Please try again.', color: 'error' })
  } finally {
    loading.value = false
  }
}
</script>
