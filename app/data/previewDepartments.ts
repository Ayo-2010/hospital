import type { DemoDepartment } from '~/types/preview'

export const PREVIEW_DEPARTMENTS: DemoDepartment[] = [
  { slug: 'general-medicine', name: 'General Medicine', group: 'Primary and family care', summary: 'Care for common health needs and ongoing visits.', image: 'https://images.pexels.com/photos/7590569/pexels-photo-7590569.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'pediatrics', name: 'Pediatrics', group: 'Primary and family care', summary: 'Medical care for infants, children, and teens.', image: 'https://images.pexels.com/photos/4484205/pexels-photo-4484205.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'obstetrics-gynecology', name: 'Obstetrics & Gynecology', group: 'Primary and family care', summary: 'Reproductive and pregnancy-related care.', image: 'https://images.pexels.com/photos/5235447/pexels-photo-52535447.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'psychiatry-psychology', name: 'Psychiatry & Psychology', group: 'Primary and family care', summary: 'Mental health evaluation and support.', image: 'https://images.pexels.com/photos/4386479/pexels-photo-4386479.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'cardiology', name: 'Cardiology', group: 'Specialty care', summary: 'Evaluation and care for heart-related conditions.', image: 'https://images.pexels.com/photos/9588163/pexels-photo-9588163.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'orthopedics', name: 'Orthopedics', group: 'Specialty care', summary: 'Bone, joint, and musculoskeletal care.', image: 'https://images.pexels.com/photos/8307103/pexels-photo-8307103.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'neurology', name: 'Neurology', group: 'Specialty care', summary: 'Evaluation of brain and nervous system concerns.', image: 'https://images.pexels.com/photos/7573338/pexels-photo-7573338.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'dermatology', name: 'Dermatology', group: 'Specialty care', summary: 'Care for skin, hair, and nail concerns.', image: 'https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'surgery', name: 'Surgery', group: 'Procedures and diagnostics', summary: 'Information about surgical consultations and procedures.', image: 'https://images.pexels.com/photos/12765566/pexels-photo-12765566.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'radiology', name: 'Radiology', group: 'Procedures and diagnostics', summary: 'Medical imaging and diagnostic services.', image: 'https://images.pexels.com/photos/4386479/pexels-photo-4386479.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'dentistry', name: 'Dentistry', group: 'Procedures and diagnostics', summary: 'Dental assessment and oral health care.', image: 'https://images.pexels.com/photos/7577949/pexels-photo-7577949.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'ophthalmology', name: 'Ophthalmology', group: 'Procedures and diagnostics', summary: 'Eye health and vision-related care.', image: 'https://images.pexels.com/photos/5243049/pexels-photo-5243049.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'physiotherapy', name: 'Physiotherapy', group: 'Procedures and diagnostics', summary: 'Movement, rehabilitation, and recovery support.', image: 'https://images.pexels.com/photos/8293825/pexels-photo-8293825.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
  { slug: 'emergency-medicine', name: 'Emergency Medicine', group: 'Procedures and diagnostics', summary: 'Emergency information and directions for urgent care.', image: 'https://images.pexels.com/photos/4386783/pexels-photo-4386783.jpeg?auto=compress&cs=tinysrgb&w=800&q=80' },
]

export const PREVIEW_DEPARTMENT_GROUPS = [
  'Primary and family care',
  'Specialty care',
  'Procedures and diagnostics',
] as const
