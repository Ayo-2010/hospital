<script setup lang="ts">
import PreviewAppointmentRequestSummary from './AppointmentRequestSummary.vue'
import PreviewAppointmentRequestSteps from './AppointmentRequestSteps.vue'
import PreviewDoctorInitials from './DoctorInitials.vue'
import { PREVIEW_VISIT_TYPES, usePreviewAppointmentRequest } from '~/composables/usePreviewAppointmentRequest'
import type { PreferredTimeOfDay, PreviewDirection } from '~/types/preview'

const props = defineProps<{ direction: PreviewDirection }>()
const request = usePreviewAppointmentRequest(props.direction)
const draft = request.draft
const selectedDoctor = computed(() => request.selectedDoctor.value)
const selectedClinician = computed(() => request.selectedClinician.value)
const availableDoctors = computed(() => request.availableDoctors.value)
const departmentOptions = computed(() => request.departmentOptions.value)
const visitLabel = computed(() => request.visitLabel.value)
const timeLabel = computed(() => request.timeLabel.value)
const missingVisit = computed(() => request.missingVisit.value)
const missingTime = computed(() => request.missingTime.value)
const missingContact = computed(() => request.missingContact.value)
const requestComplete = computed(() => request.isComplete.value)
const isCare = props.direction === 'care-gateway'
const isClinician = props.direction === 'clinician-first'
const isDepartment = props.direction === 'department-led'
const active = ref(isCare ? 'time' : request.firstStep)
const notice = ref('')
const detailsRef = ref<HTMLElement | null>(null)
const visitRef = ref<HTMLElement | null>(null)
const timeRef = ref<HTMLElement | null>(null)
const minDate = new Date().toISOString().slice(0, 10)
const timePreferences: { value: PreferredTimeOfDay; label: string }[] = isCare
  ? [{ value: 'MORNING', label: 'Morning' }, { value: 'AFTERNOON', label: 'Afternoon' }, { value: 'ANY_TIME', label: 'Any time' }]
  : [{ value: 'MORNING', label: 'Morning' }, { value: 'AFTERNOON', label: 'Afternoon' }, { value: 'FLEXIBLE', label: 'Flexible' }]

function onDepartmentChange(event: Event) {
  request.setDepartment((event.target as HTMLSelectElement).value)
}

watch(() => draft.department, (value) => {
  if (value && !request.departmentOptions.value.includes(value)) request.setDepartment('')
})

function navigate(section: 'visit' | 'time' | 'contact') {
  active.value = section === 'visit'
    ? (isClinician ? 'visit-type' : 'care')
    : section === 'time'
      ? (isClinician ? 'date-time' : 'time')
      : 'details'
  const target = section === 'visit' ? visitRef.value : section === 'time' ? timeRef.value : detailsRef.value
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  target?.querySelector<HTMLElement>('input, select, textarea')?.focus({ preventScroll: true })
}

function onPreviewSubmit() {
  notice.value = 'This is a design preview. No appointment request was sent.'
}
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 pb-12 pt-7 sm:px-6 lg:px-8">
    <nav class="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
      <NuxtLink :to="`/previews/${direction}`" class="hover:text-medical-800">Home</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page" class="font-medium text-slate-700">Request an appointment</span>
    </nav>

    <div class="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <h1 class="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Request an appointment</h1>
        <p class="mt-2 max-w-2xl text-base leading-6 text-slate-600">
          {{ isClinician ? 'Choose the kind of visit you need. We’ll ask for a preferred time and confirm availability before anything is scheduled.' : 'Tell us what care you need and when you prefer to visit. Our team will follow up to confirm a time.' }}
        </p>
      </div>
      <p class="text-sm text-slate-500">Preview screen · clinician details are fictional</p>
    </div>

    <section v-if="isClinician" class="mb-7 rounded-lg border border-slate-200 bg-white px-5 py-4" aria-labelledby="selected-doctor-title">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <PreviewDoctorInitials :doctor="selectedClinician ?? selectedDoctor" />
        <div class="min-w-0 flex-1">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Selected clinician · fictional demo profile</p>
          <h2 id="selected-doctor-title" class="mt-1 font-display text-lg font-semibold text-slate-900">
            {{ selectedClinician?.name ?? selectedDoctor.name }}
            <span class="font-normal text-slate-500">· {{ selectedClinician?.specialty ?? selectedDoctor.specialty }}</span>
          </h2>
          <p class="mt-1 text-sm text-slate-600"><Icon name="i-lucide-map-pin" class="mr-1 inline h-4 w-4" aria-hidden="true" />{{ selectedClinician?.location ?? selectedDoctor.location }}</p>
        </div>
        <NuxtLink :to="`/previews/${direction}/doctors`" class="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-300 px-4 text-sm font-semibold text-slate-700 hover:border-medical-700 hover:text-medical-800">
          Change doctor <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>

    <PreviewAppointmentRequestSteps v-if="!isDepartment" :direction="direction" :active="active" />

    <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_328px] lg:gap-10">
      <form class="min-w-0 rounded-lg border border-slate-200 bg-white" aria-label="Appointment request preview" @submit.prevent>
        <section v-if="!isClinician" id="visit" ref="visitRef" class="border-b border-slate-200 px-5 py-6 sm:px-8">
          <div class="mb-5 flex items-start gap-4">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-800 text-sm font-semibold text-white">1</span>
            <div>
              <h2 class="font-display text-xl font-semibold text-slate-900">{{ isCare ? 'Care selected' : 'Visit' }}</h2>
              <p class="mt-1 text-sm text-slate-500">Choose a department, clinician, and type of visit.</p>
            </div>
          </div>
          <div class="ml-0 grid gap-x-5 gap-y-4 sm:ml-12 sm:grid-cols-2">
            <label class="block text-sm font-semibold text-slate-700">Department <span class="text-emergency-700">*</span>
              <select v-model="draft.department" class="input-field mt-1.5 text-sm font-normal" required @change="onDepartmentChange">
                <option value="">Select a department</option>
                <option v-for="department in departmentOptions" :key="department">{{ department }}</option>
              </select>
            </label>
            <label class="block text-sm font-semibold text-slate-700">Doctor or clinician <span class="text-emergency-700">*</span>
              <select v-model="draft.doctorSlug" class="input-field mt-1.5 text-sm font-normal" required :disabled="!draft.department">
                <option value="">{{ draft.department ? 'Select a clinician' : 'Choose a department first' }}</option>
                <option v-for="doctor in availableDoctors" :key="doctor.slug" :value="doctor.slug">{{ doctor.name }}</option>
              </select>
              <span class="mt-1.5 block text-xs font-normal text-slate-500">Only clinicians in the selected department are listed.</span>
            </label>
            <fieldset class="sm:col-span-2">
              <legend class="mb-2.5 text-sm font-semibold text-slate-700">Appointment type <span class="text-emergency-700">*</span></legend>
              <div class="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                <label v-for="type in PREVIEW_VISIT_TYPES" :key="type.value" class="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-md border px-3.5 text-sm transition-colors" :class="draft.visitType === type.value ? 'border-medical-700 bg-medical-50 text-medical-950' : type.value === 'EMERGENCY_REQUEST' ? 'border-warm-300 bg-warm-50 text-slate-700' : 'border-slate-300 text-slate-700 hover:bg-slate-50'">
                  <input v-model="draft.visitType" class="h-4 w-4 accent-medical-700" type="radio" name="preview-visit-type" :value="type.value">{{ type.label }}
                </label>
              </div>
            </fieldset>
          </div>
        </section>

        <section v-if="isClinician" id="visit" ref="visitRef" class="border-b border-slate-200 px-5 py-6 sm:px-8">
          <div class="mb-5 flex items-start gap-4">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-800 text-sm font-semibold text-white">1</span>
            <div><p class="text-sm font-semibold text-medical-800">Step 1 of 4</p><h2 class="mt-1 font-display text-2xl font-semibold text-slate-950">What kind of visit do you need?</h2><p class="mt-2 text-sm leading-6 text-slate-600">Choose the option that best describes your request.</p></div>
          </div>
          <fieldset class="ml-0 sm:ml-12"><legend class="sr-only">Choose an appointment type</legend><div class="grid gap-3 sm:grid-cols-2">
            <label v-for="type in PREVIEW_VISIT_TYPES" :key="type.value" class="flex cursor-pointer gap-3 rounded-md border p-4 transition-colors" :class="draft.visitType === type.value ? 'border-medical-700 bg-medical-50' : type.value === 'EMERGENCY_REQUEST' ? 'border-warm-300 bg-warm-50' : 'border-slate-200 hover:border-slate-400'">
              <input v-model="draft.visitType" class="mt-1 h-4 w-4 accent-medical-800" type="radio" name="preview-visit-type" :value="type.value">
              <span><span class="block text-sm font-semibold text-slate-900">{{ type.label }}</span><span class="mt-1 block text-sm leading-5 text-slate-600">{{ type.description }}</span></span>
            </label>
          </div></fieldset>
          <div class="ml-0 mt-5 flex items-start gap-2.5 rounded-md bg-warm-50 px-4 py-3 text-sm leading-5 text-warm-900 sm:ml-12"><Icon name="i-lucide-circle-alert" class="mt-0.5 h-4 w-4 shrink-0 text-warm-700" aria-hidden="true" /><p>If you may be experiencing a life-threatening emergency, call your local emergency number now. <NuxtLink class="font-semibold underline underline-offset-2" to="/emergency">View emergency information</NuxtLink>.</p></div>
          <div class="ml-0 mt-6 border-t border-slate-200 pt-5 sm:ml-12"><h3 class="font-display text-lg font-semibold text-slate-900">What you’ll be asked next</h3><div class="mt-4 grid gap-5 sm:grid-cols-3"><div><p class="text-sm font-semibold text-slate-800">Date and time</p><p class="mt-1.5 text-sm leading-5 text-slate-600">Share a preference. We’ll confirm availability.</p></div><div><p class="text-sm font-semibold text-slate-800">Your details</p><p class="mt-1.5 text-sm leading-5 text-slate-600">Patient details, reason for visit, and how to contact you.</p></div><div><p class="text-sm font-semibold text-slate-800">Review</p><p class="mt-1.5 text-sm leading-5 text-slate-600">Check the request before any real submission.</p></div></div></div>
          <div class="ml-0 mt-6 border-t border-slate-200 pt-5 sm:ml-12"><button type="button" class="min-h-11 w-full rounded-md bg-medical-800 px-5 text-sm font-semibold text-white hover:bg-medical-900 sm:w-auto" @click="active = 'date-time'; timeRef?.scrollIntoView({ behavior: 'smooth', block: 'start' })">Continue to date and time <Icon name="i-lucide-arrow-right" class="ml-2 inline h-4 w-4" aria-hidden="true" /></button></div>
        </section>

        <section id="time" ref="timeRef" class="border-b border-slate-200 px-5 py-6 sm:px-8">
          <div class="mb-5 flex items-start gap-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-800 text-sm font-semibold text-white">2</span><div><h2 class="font-display text-xl font-semibold text-slate-900">{{ isCare ? 'Choose a preferred date and time' : 'Time' }}</h2><p class="mt-1 text-sm text-slate-500">{{ isCare ? 'This is a request only. We’ll contact you to confirm an available appointment.' : 'Share a preferred date and time of day.' }}</p></div></div>
          <div class="ml-0 sm:ml-12">
            <p class="mb-4 flex items-start gap-2.5 rounded-md bg-medical-50 px-4 py-3 text-sm leading-5 text-medical-950"><Icon name="i-lucide-info" class="mt-0.5 h-4 w-4 shrink-0 text-medical-800" aria-hidden="true" />This is a preferred-time request, not a confirmed appointment. No bookable slots are shown in this preview.</p>
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="block text-sm font-semibold text-slate-700">Preferred date <span class="text-emergency-700">*</span><input v-model="draft.preferredDate" class="input-field mt-1.5 text-sm" type="date" :min="minDate" required></label>
              <fieldset><legend class="mb-2 text-sm font-semibold text-slate-700">Preferred time of day <span class="text-emergency-700">*</span></legend><div class="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm text-slate-700"><label v-for="slot in timePreferences" :key="slot.value" class="inline-flex cursor-pointer items-center gap-2"><input v-model="draft.preferredTime" class="h-4 w-4 accent-medical-700" type="radio" name="preview-time-preference" :value="slot.value">{{ slot.label }}</label></div></fieldset>
            </div>
            <p class="mt-2 text-xs leading-5 text-slate-500">A time preference—not a bookable slot. The care team would need to confirm availability.</p>
          </div>
        </section>

        <section id="contact" ref="detailsRef" class="border-b border-slate-200 px-5 py-6 sm:px-8">
          <div class="mb-5 flex items-start gap-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medical-800 text-sm font-semibold text-white">3</span><div><h2 class="font-display text-xl font-semibold text-slate-900">Your details</h2><p class="mt-1 text-sm text-slate-500">Add your contact details and how you’d like us to reach you.</p></div></div>
          <div class="ml-0 grid gap-x-5 gap-y-4 sm:ml-12 sm:grid-cols-2">
            <label class="block text-sm font-semibold text-slate-700">Patient name <span class="text-emergency-700">*</span><input v-model="draft.patientName" autocomplete="name" class="input-field mt-1.5 text-sm font-normal" placeholder="Full name" required></label>
            <label class="block text-sm font-semibold text-slate-700">Email address <span class="text-emergency-700">*</span><input v-model="draft.email" autocomplete="email" class="input-field mt-1.5 text-sm font-normal" type="email" placeholder="name@example.com" required></label>
            <label class="block text-sm font-semibold text-slate-700">Phone number<input v-model="draft.phone" autocomplete="tel" class="input-field mt-1.5 text-sm font-normal" type="tel" placeholder="(555) 000-0000" :required="draft.contactPreference === 'PHONE'"></label>
            <fieldset><legend class="mb-2 text-sm font-semibold text-slate-700">Preferred way to contact you <span class="text-emergency-700">*</span></legend><div class="flex h-11 items-center gap-5 text-sm text-slate-700"><label class="inline-flex cursor-pointer items-center gap-2"><input v-model="draft.contactPreference" class="h-4 w-4 accent-medical-700" type="radio" name="preview-contact-preference" value="EMAIL">Email</label><label class="inline-flex cursor-pointer items-center gap-2"><input v-model="draft.contactPreference" class="h-4 w-4 accent-medical-700" type="radio" name="preview-contact-preference" value="PHONE">Phone</label></div></fieldset>
            <label class="block text-sm font-semibold text-slate-700 sm:col-span-2">Reason for visit <span class="font-normal text-slate-500">(optional)</span><textarea v-model="draft.reason" class="textarea-field mt-1.5 text-sm font-normal" placeholder="Briefly tell us what you’d like help with" rows="2"></textarea></label>
          </div>
        </section>

        <div v-if="isCare" class="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p class="max-w-md text-sm leading-5 text-slate-500">Your preferred date and time are requests. Nothing is confirmed by this screen.</p><button type="button" class="min-h-11 rounded-md bg-medical-800 px-5 text-sm font-semibold text-white hover:bg-medical-900" @click="active = 'details'; detailsRef?.scrollIntoView({ behavior: 'smooth', block: 'start' })">Continue to your details <Icon name="i-lucide-arrow-right" class="ml-2 inline h-4 w-4" aria-hidden="true" /></button></div>
      </form>

      <div class="lg:sticky lg:top-5">
        <PreviewAppointmentRequestSummary :draft="draft" :direction="direction" :doctor-name="selectedClinician?.name" :specialty="selectedClinician?.specialty" :location="selectedClinician?.location" :visit-label="visitLabel" :time-label="timeLabel" :date-label="request.formatPreferredDate()" :missing-visit="missingVisit" :missing-time="missingTime" :missing-contact="missingContact" :is-complete="requestComplete" @navigate="navigate" @preview-submit="onPreviewSubmit" />
        <p v-if="isClinician" class="mt-4 text-xs leading-5 text-slate-500">Fictional demo clinician details. Sign-in and submission are not connected in this preview.</p>
        <p v-if="notice" role="status" class="mt-3 rounded-md border border-medical-200 bg-medical-50 p-3 text-sm text-medical-900">{{ notice }}</p>
        <div v-if="isCare" class="mt-5 border-l-2 border-emergency-500 py-1 pl-4"><h2 class="text-sm font-semibold text-slate-900">Need urgent care?</h2><p class="mt-1 text-sm leading-5 text-slate-600">For a medical emergency, call 112.</p><a class="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emergency-800 underline underline-offset-4" href="tel:112"><Icon name="i-lucide-phone" class="h-4 w-4" aria-hidden="true" />Call 112</a></div>
      </div>
    </div>
    <p v-if="isCare" class="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500">© {{ new Date().getFullYear() }} MedCore Hospital · Example interface with fictional clinician details.</p>
  </main>
</template>
