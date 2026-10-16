export type PreviewDirection = 'care-gateway' | 'clinician-first' | 'department-led'
export type PreviewPage = 'home' | 'doctors' | 'booking'

export type AppointmentVisitType =
  | 'IN_PERSON'
  | 'TELEMEDICINE'
  | 'FOLLOW_UP'
  | 'SPECIALIST'
  | 'EMERGENCY_REQUEST'

export type PreferredTimeOfDay = 'MORNING' | 'AFTERNOON' | 'FLEXIBLE' | 'ANY_TIME'
export type ContactPreference = 'EMAIL' | 'PHONE'
export type PreviewDepartmentGroup = DemoDepartment['group']

export interface DemoClinician {
  id: string
  slug: string
  name: string
  specialty: string
  location: string
  languages: string[]
  experienceYears: number
}

export interface DemoDepartment {
  slug: string
  name: string
  group: 'Primary and family care' | 'Specialty care' | 'Procedures and diagnostics'
  summary: string
  image?: string
}

export interface AppointmentRequestDraft {
  department: string
  doctorSlug: string
  visitType: AppointmentVisitType | ''
  preferredDate: string
  preferredTime: PreferredTimeOfDay | ''
  patientName: string
  email: string
  phone: string
  contactPreference: ContactPreference | ''
  reason: string
}
