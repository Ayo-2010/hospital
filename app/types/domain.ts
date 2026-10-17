import type {
  AppointmentStatus,
  AppointmentType,
  Gender,
  InvoiceStatus,
  PatientStatus,
  PrescriptionStatus,
  ResultFlag,
  Role,
  SurgeryPriority,
  SurgeryStatus,
  UserStatus,
} from './index'

export interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
}

export interface User {
  id: string
  email: string
  phone?: string
  firstName: string
  lastName: string
  middleName?: string
  avatarUrl?: string
  status: UserStatus
  roles: Role[]
}

export interface Patient {
  id: string
  patientNumber: string
  userId?: string
  firstName: string
  lastName: string
  middleName?: string
  dateOfBirth: string
  gender: Gender
  bloodGroup?: string
  genotype?: string
  phone: string
  email?: string
  address?: string
  city?: string
  state?: string
  country?: string
  emergencyContact: EmergencyContact
  status: PatientStatus
  createdAt: string
  updatedAt: string
}

export interface Doctor {
  id: string
  staffId: string
  firstName: string
  lastName: string
  specialization: string
  subSpecialization?: string
  departmentId: string
  bio?: string
  yearsExperience: number
  consultationFee: number
  isAvailable: boolean
}

export interface Appointment {
  id: string
  appointmentNumber: string
  patientId: string
  doctorId: string
  departmentId: string
  appointmentType: AppointmentType
  scheduledStart: string
  scheduledEnd: string
  reason?: string
  status: AppointmentStatus
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface MedicalRecord {
  id: string
  patientId: string
  doctorId: string
  appointmentId?: string
  chiefComplaint?: string
  historyOfIllness?: string
  examination?: string
  assessment?: string
  diagnosisSummary?: string
  treatmentPlan?: string
  followUpDate?: string
  createdAt: string
  updatedAt: string
}

export interface Prescription {
  id: string
  prescriptionNumber: string
  patientId: string
  doctorId: string
  medicalRecordId?: string
  status: PrescriptionStatus
  notes?: string
  prescribedAt: string
  updatedAt: string
}

export interface SurgicalCase {
  id: string
  caseNumber: string
  patientId: string
  requestedBy: string
  primarySurgeonId: string
  departmentId: string
  procedureName: string
  diagnosis: string
  priority: SurgeryPriority
  status: SurgeryStatus
  estimatedDurationMinutes: number
  scheduledStart?: string
  scheduledEnd?: string
  operatingRoomId?: string
  specialRequirements?: string
  createdAt: string
  updatedAt: string
}

export interface LaboratoryResult {
  id: string
  orderItemId: string
  resultValue: string
  unit?: string
  referenceRange?: string
  flag?: ResultFlag
  comments?: string
  performedBy: string
  verifiedBy?: string
  verifiedAt?: string
}

export interface Invoice {
  id: string
  invoiceNumber: string
  patientId: string
  status: InvoiceStatus
  subtotal: number
  discount: number
  tax: number
  total: number
  amountPaid: number
  balance: number
  dueDate?: string
  items: InvoiceItem[]
  createdAt: string
  updatedAt: string
}

export interface InvoiceItem {
  id: string
  invoiceId: string
  serviceType: string
  serviceReferenceId?: string
  description: string
  quantity: number
  unitPrice: number
  total: number
}
