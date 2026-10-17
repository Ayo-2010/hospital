import type { DemoClinician } from '~/types/preview'

/** Fictional profiles from the existing demonstration directory. */
export const PREVIEW_DOCTORS: DemoClinician[] = [
  { id: '1', slug: 'sarah-johnson', name: 'Dr. Sarah Johnson', specialty: 'Cardiology', location: 'Victoria Island Campus', languages: ['English', 'Spanish'], experienceYears: 15 },
  { id: '2', slug: 'michael-chen', name: 'Dr. Michael Chen', specialty: 'Neurology', location: 'Victoria Island Campus', languages: ['English', 'Mandarin'], experienceYears: 12 },
  { id: '3', slug: 'emily-davis', name: 'Dr. Emily Davis', specialty: 'Pediatrics', location: 'Ikoyi Specialist Centre', languages: ['English'], experienceYears: 10 },
  { id: '4', slug: 'robert-kim', name: 'Dr. Robert Kim', specialty: 'Orthopedics', location: 'Victoria Island Campus', languages: ['English', 'Korean'], experienceYears: 18 },
  { id: '5', slug: 'lisa-martinez', name: 'Dr. Lisa Martinez', specialty: 'Obstetrics & Gynecology', location: 'Victoria Island Campus', languages: ['English', 'Spanish'], experienceYears: 14 },
  { id: '6', slug: 'james-wilson', name: 'Dr. James Wilson', specialty: 'Oncology', location: 'Victoria Island Campus', languages: ['English'], experienceYears: 20 },
  { id: '7', slug: 'amanda-foster', name: 'Dr. Amanda Foster', specialty: 'Dermatology', location: 'Ikoyi Specialist Centre', languages: ['English', 'French'], experienceYears: 11 },
  { id: '8', slug: 'david-park', name: 'Dr. David Park', specialty: 'Radiology', location: 'Victoria Island Campus', languages: ['English', 'Korean'], experienceYears: 16 },
  { id: '9', slug: 'jennifer-lee', name: 'Dr. Jennifer Lee', specialty: 'Emergency Medicine', location: 'Victoria Island Campus', languages: ['English', 'Spanish'], experienceYears: 13 },
  { id: '10', slug: 'christopher-brown', name: 'Dr. Christopher Brown', specialty: 'General Medicine', location: 'Ikoyi Specialist Centre', languages: ['English'], experienceYears: 22 },
  { id: '11', slug: 'michelle-taylor', name: 'Dr. Michelle Taylor', specialty: 'Pediatrics', location: 'Ikoyi Specialist Centre', languages: ['English', 'Spanish'], experienceYears: 9 },
  { id: '12', slug: 'kevin-anderson', name: 'Dr. Kevin Anderson', specialty: 'Cardiology', location: 'Victoria Island Campus', languages: ['English'], experienceYears: 17 },
]

export const PREVIEW_DOCTOR_DEPARTMENTS = [
  'General Medicine',
  'Pediatrics',
  'Cardiology',
  'Orthopedics',
  'Neurology',
  'Obstetrics & Gynecology',
  'Surgery',
  'Emergency Medicine',
  'Dermatology',
  'Dentistry',
  'Ophthalmology',
  'Radiology',
  'Psychiatry & Psychology',
  'Physiotherapy',
] as const
