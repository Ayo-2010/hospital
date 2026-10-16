import { PREVIEW_DOCTORS } from '~/data/previewDoctors'
import { PREVIEW_DEPARTMENTS } from '~/data/previewDepartments'
import type { AppointmentRequestDraft, PreferredTimeOfDay, PreviewDirection } from '~/types/preview'

export const PREVIEW_VISIT_TYPES = [
  { value: 'IN_PERSON', label: 'In-person', description: 'Meet with your clinician at the selected campus.' },
  { value: 'TELEMEDICINE', label: 'Telemedicine', description: 'Request a remote visit, if appropriate.' },
  { value: 'FOLLOW_UP', label: 'Follow-up', description: 'Continue care after a previous visit.' },
  { value: 'SPECIALIST', label: 'Specialist consultation', description: 'Request a visit with this specialty.' },
  { value: 'EMERGENCY_REQUEST', label: 'Emergency / urgent request', description: 'For urgent, non-life-threatening needs. This form is not an emergency response service.' },
] as const

export function usePreviewAppointmentRequest(direction: PreviewDirection) {
  const route = useRoute()
  const routeDoctor = String(route.query.doctor ?? '')
  const selectedDoctor = computed(() => PREVIEW_DOCTORS.find((doctor) => doctor.slug === routeDoctor) ?? PREVIEW_DOCTORS[0]!)
  const hasSelectedDoctor = Boolean(routeDoctor) || direction !== 'department-led'
  const draft = reactive<AppointmentRequestDraft>({
    department: hasSelectedDoctor ? selectedDoctor.value.specialty : '',
    doctorSlug: hasSelectedDoctor ? selectedDoctor.value.slug : '',
    visitType: 'IN_PERSON',
    preferredDate: '',
    preferredTime: '',
    patientName: '',
    email: '',
    phone: '',
    contactPreference: '',
    reason: '',
  })

  const selectedClinician = computed(() => PREVIEW_DOCTORS.find((doctor) => doctor.slug === draft.doctorSlug))
  const availableDoctors = computed(() => PREVIEW_DOCTORS.filter((doctor) => !draft.department || doctor.specialty === draft.department))
  const visitLabel = computed(() => PREVIEW_VISIT_TYPES.find((item) => item.value === draft.visitType)?.label ?? '')
  const timeLabels: Record<PreferredTimeOfDay, string> = { MORNING: 'Morning', AFTERNOON: 'Afternoon', FLEXIBLE: 'Flexible', ANY_TIME: 'Any time' }
  const timeLabel = computed(() => draft.preferredTime ? timeLabels[draft.preferredTime] : '')
  const departmentOptions = computed(() => [...new Set(PREVIEW_DEPARTMENTS.map((department) => department.name))].sort((a, b) => a.localeCompare(b)))
  const missingVisit = computed(() => !draft.department || !draft.doctorSlug || !draft.visitType)
  const missingTime = computed(() => !draft.preferredDate || !draft.preferredTime)
  const missingContact = computed(() => !draft.patientName.trim() || !draft.email.trim() || !draft.contactPreference || (draft.contactPreference === 'PHONE' && !draft.phone.trim()))
  const isComplete = computed(() => !missingVisit.value && !missingTime.value && !missingContact.value)

  function setDepartment(name: string) {
    draft.department = name
    draft.doctorSlug = PREVIEW_DOCTORS.find((doctor) => doctor.specialty === name)?.slug ?? ''
  }

  function formatPreferredDate(value = draft.preferredDate): string {
    if (!value) return ''
    const date = new Date(`${value}T12:00:00`)
    return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)
  }

  const firstStep = direction === 'clinician-first' ? 'visit-type' : 'care'

  return {
    draft,
    selectedDoctor,
    selectedClinician,
    availableDoctors,
    visitLabel,
    timeLabel,
    departmentOptions,
    missingVisit,
    missingTime,
    missingContact,
    isComplete,
    firstStep,
    setDepartment,
    formatPreferredDate,
  }
}
