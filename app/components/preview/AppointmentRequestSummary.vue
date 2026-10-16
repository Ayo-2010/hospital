<script setup lang="ts">
import type { AppointmentRequestDraft, PreviewDirection } from '~/types/preview'

withDefaults(defineProps<{
  draft: AppointmentRequestDraft
  direction: PreviewDirection
  doctorName?: string
  specialty?: string
  location?: string
  visitLabel: string
  timeLabel: string
  dateLabel: string
  missingVisit: boolean
  missingTime: boolean
  missingContact: boolean
  isComplete: boolean
}>(), { doctorName: '', specialty: '', location: '' })

const emit = defineEmits<{
  navigate: [section: 'visit' | 'time' | 'contact']
  'preview-submit': []
}>()
</script>

<template>
  <aside class="rounded-lg border border-slate-200 bg-white p-5" :aria-label="direction === 'department-led' ? 'Review your request' : 'Appointment request summary'">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h2 class="font-display text-lg font-semibold text-slate-950">{{ direction === 'care-gateway' ? 'Your request' : 'Review your request' }}</h2>
        <p class="mt-1 text-sm text-slate-500">{{ isComplete ? 'All required preview fields are complete.' : 'Your request details will appear here.' }}</p>
      </div>
      <Icon name="i-lucide-clipboard-list" class="h-5 w-5 text-slate-500" aria-hidden="true" />
    </div>

    <template v-if="direction !== 'department-led'">
      <dl class="mt-5 divide-y divide-slate-200 border-y border-slate-200">
        <div class="py-3"><dt class="text-xs font-medium text-slate-500">Department</dt><dd class="mt-1 text-sm font-semibold text-slate-800">{{ draft.department || 'Choose a department' }}</dd></div>
        <div class="py-3"><dt class="text-xs font-medium text-slate-500">Clinician</dt><dd class="mt-1 text-sm font-semibold text-slate-800">{{ doctorName || 'Choose a clinician' }}</dd><dd v-if="specialty" class="text-sm text-slate-600">{{ specialty }}<template v-if="location"> · {{ location }}</template></dd><dd class="text-xs text-slate-500">Fictional demo clinician</dd></div>
        <div class="py-3"><dt class="text-xs font-medium text-slate-500">Visit type</dt><dd class="mt-1 text-sm font-semibold text-slate-800">{{ visitLabel || 'Choose a visit type' }}</dd></div>
        <div class="py-3"><dt class="text-xs font-medium text-slate-500">Preferred date and time</dt><dd class="mt-1 text-sm text-slate-700">{{ dateLabel || 'Choose your preferences' }}<template v-if="timeLabel"> · {{ timeLabel }}</template></dd></div>
        <div class="py-3"><dt class="text-xs font-medium text-slate-500">Patient and contact details</dt><dd class="mt-1 text-sm text-slate-700">{{ draft.patientName || 'Add in the next step' }}</dd><dd v-if="draft.contactPreference" class="text-sm text-slate-600">Contact by {{ draft.contactPreference === 'PHONE' ? 'phone' : 'email' }}</dd></div>
      </dl>
      <p class="mt-4 flex gap-2.5 text-sm leading-6 text-slate-600"><Icon name="i-lucide-info" class="mt-0.5 h-4 w-4 shrink-0 text-medical-800" aria-hidden="true" /><span>A request is not a confirmed appointment. The preferred time is not a bookable slot.</span></p>
    </template>

    <template v-else>
      <div class="mt-4 border-t border-slate-200 pt-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Still needed</p>
        <ul class="mt-3 space-y-3 text-sm text-slate-700">
          <li class="flex items-start justify-between gap-2"><span>{{ missingVisit ? 'Department, clinician and visit type' : 'Visit details selected' }}</span><button class="shrink-0 text-xs font-semibold text-medical-800 underline underline-offset-4" type="button" @click="emit('navigate', 'visit')">Change</button></li>
          <li class="flex items-start justify-between gap-2"><span>{{ missingTime ? 'Preferred date and time of day' : `${dateLabel} · ${timeLabel}` }}</span><button class="shrink-0 text-xs font-semibold text-medical-800 underline underline-offset-4" type="button" @click="emit('navigate', 'time')">Change</button></li>
          <li class="flex items-start justify-between gap-2"><span>{{ missingContact ? 'Patient contact and preference' : draft.patientName }}</span><button class="shrink-0 text-xs font-semibold text-medical-800 underline underline-offset-4" type="button" @click="emit('navigate', 'contact')">Change</button></li>
        </ul>
      </div>
      <div class="mt-4 rounded-md bg-medical-50 p-3.5 text-sm leading-5 text-medical-950">
        <p class="font-semibold">A request is not a confirmed appointment.</p>
        <p class="mt-1">This preview never sends or confirms a request.</p>
      </div>
    </template>

    <button class="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md px-4 text-sm font-semibold text-white transition-colors" :class="isComplete ? 'cursor-pointer bg-medical-700 hover:bg-medical-800' : 'cursor-not-allowed bg-slate-300'" type="button" :disabled="!isComplete" @click="emit('preview-submit')">
      Submit appointment request
    </button>
    <p class="mt-2 text-center text-xs leading-5 text-slate-500">
      {{ isComplete ? 'Design preview only · no request will be sent.' : 'Complete required fields to continue.' }}
    </p>
  </aside>
</template>
