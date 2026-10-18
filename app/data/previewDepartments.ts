import type { DemoDepartment } from '~/types/preview'
import { MEDIA } from './media'

/**
 * Single source of truth for every department shown across the public site.
 * Both the departments listing, the department detail page and the homepage
 * read from this list, so a link from any page always resolves.
 */
export const PREVIEW_DEPARTMENTS: DemoDepartment[] = [
  {
    slug: 'general-medicine',
    name: 'General Medicine',
    group: 'Primary and family care',
    summary: 'Care for common health needs and ongoing visits.',
    description:
      'Our general medicine team is your first point of contact for everyday health concerns, preventive care and long-term condition management. We coordinate referrals to specialists when needed.',
    services: [
      'Routine check-ups and annual physicals',
      'Vaccinations and travel health advice',
      'Management of chronic conditions',
      'Sick visits and minor procedures',
      'Preventive health screening',
    ],
    conditions: [
      'Cold, flu and infections',
      'High blood pressure',
      'Type 2 diabetes',
      'High cholesterol',
      'Asthma and allergies',
      'Fatigue and general wellness concerns',
    ],
    image: MEDIA.bloodPressure,
  },
  {
    slug: 'pediatrics',
    name: 'Paediatrics',
    group: 'Primary and family care',
    summary: 'Medical care for infants, children, and teens.',
    description:
      'Our paediatric team cares for children from birth through adolescence in a calm, child-friendly setting, working closely with families at every stage of growth.',
    services: [
      'Well-child visits and growth checks',
      'Childhood immunisations',
      'Developmental and behavioural assessment',
      'Newborn and infant care',
      'Adolescent health advice',
    ],
    conditions: [
      'Childhood asthma and allergies',
      'Common infections and fevers',
      'Growth and development concerns',
      'Attention and learning difficulties',
      'Nutrition and feeding questions',
    ],
    equipment: 'Age-appropriate examination rooms and dedicated paediatric monitoring equipment.',
    image: MEDIA.paediatrics,
  },
  {
    slug: 'obstetrics-gynecology',
    name: 'Obstetrics & Gynaecology',
    group: 'Primary and family care',
    summary: 'Reproductive and pregnancy-related care.',
    description:
      'We provide compassionate care across pregnancy, childbirth and reproductive health, with continuity from your first antenatal visit through to postnatal support.',
    services: [
      'Antenatal and postnatal care',
      'Labour and delivery support',
      'Routine gynaecological examinations',
      'Family planning and contraception',
      'Fertility assessment and advice',
    ],
    conditions: [
      'Pregnancy and prenatal health',
      'Menstrual concerns',
      'Menopause symptoms',
      'Pelvic pain',
      'Endometriosis and fibroids',
    ],
    equipment: 'Dedicated birthing suites and obstetric ultrasound.',
    image: MEDIA.bedsideCare,
  },
  {
    slug: 'psychiatry-psychology',
    name: 'Psychiatry & Psychology',
    group: 'Primary and family care',
    summary: 'Mental health evaluation and support.',
    description:
      'Our mental health team offers confidential assessment, therapy and medication management for adults and adolescents, in a supportive and non-judgemental environment.',
    services: [
      'Diagnostic mental health assessment',
      'Talking therapies and counselling',
      'Medication review and management',
      'Stress and anxiety programmes',
      'Adolescent mental health support',
    ],
    conditions: [
      'Anxiety and panic',
      'Depression and low mood',
      'Sleep difficulties',
      'Stress and burnout',
      'Bipolar and mood disorders',
    ],
    image: MEDIA.counselling,
  },
  {
    slug: 'cardiology',
    name: 'Cardiology',
    group: 'Specialty care',
    summary: 'Evaluation and care for heart-related conditions.',
    description:
      'Our cardiology team diagnoses and treats heart and blood-vessel conditions using modern imaging and interventional techniques, with a strong focus on prevention.',
    services: [
      'ECG, stress testing and Holter monitoring',
      'Echocardiography and cardiac ultrasound',
      'Cardiac catheterisation and angioplasty',
      'Heart-failure management clinic',
      'Cardiac rehabilitation',
    ],
    conditions: [
      'Coronary artery disease',
      'Heart failure',
      'Arrhythmias and atrial fibrillation',
      'Heart-valve disease',
      'High blood pressure',
    ],
    equipment: 'Modern cardiac ultrasound, digital ECG systems and a flat-panel catheterisation laboratory.',
    image: MEDIA.ecgMonitoring,
  },
  {
    slug: 'orthopedics',
    name: 'Orthopaedics',
    group: 'Specialty care',
    summary: 'Bone, joint, and musculoskeletal care.',
    description:
      'From sports injuries to joint replacement, our orthopaedic team treats the bones, joints and muscles using minimally invasive and robotic-assisted techniques.',
    services: [
      'Joint replacement (hip, knee, shoulder)',
      'Sports injury treatment',
      'Spine care and pain management',
      'Fracture repair and trauma',
      'Arthroscopic surgery',
    ],
    conditions: [
      'Osteoarthritis',
      'Spinal stenosis',
      'Tendon and ligament injuries',
      'Osteoporosis',
      'Back and neck pain',
    ],
    equipment: 'Robotic-arm joint replacement system and computer-assisted navigation.',
    image: MEDIA.physiotherapy,
  },
  {
    slug: 'neurology',
    name: 'Neurology',
    group: 'Specialty care',
    summary: 'Evaluation of brain and nervous system concerns.',
    description:
      'Our neurology team evaluates and treats conditions of the brain, spine and nervous system, supported by modern diagnostic imaging and monitoring.',
    services: [
      'Neurological consultation',
      'EEG and EMG studies',
      'Brain and spine imaging',
      'Stroke assessment and follow-up',
      'Movement-disorder management',
    ],
    conditions: [
      'Stroke and TIA',
      'Epilepsy and seizures',
      'Parkinson’s disease',
      'Multiple sclerosis',
      'Headaches and migraine',
    ],
    equipment: 'High-field MRI, video-EEG telemetry and neurodiagnostic monitoring.',
    image: MEDIA.scanReview,
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    group: 'Specialty care',
    summary: 'Care for skin, hair, and nail concerns.',
    description:
      'Our dermatology team diagnoses and treats conditions affecting the skin, hair and nails, including skin-cancer screening and minor procedures.',
    services: [
      'Skin examination and cancer screening',
      'Eczema and psoriasis management',
      'Acne treatment',
      'Mole and lesion assessment',
      'Minor skin surgery',
    ],
    conditions: [
      'Eczema and dermatitis',
      'Psoriasis',
      'Acne',
      'Skin infections',
      'Suspicious moles and lesions',
    ],
    image: MEDIA.dermatology,
  },
  {
    slug: 'surgery',
    name: 'Surgery',
    group: 'Procedures and diagnostics',
    summary: 'Information about surgical consultations and procedures.',
    description:
      'Our surgical teams provide consultations, planned procedures and aftercare across multiple specialties, using laparoscopic, robotic and minimally invasive techniques where possible.',
    services: [
      'Surgical consultation',
      'Laparoscopic and open surgery',
      'Robotic-assisted surgery',
      'Day-case procedures',
      'Pre- and post-operative care',
    ],
    conditions: [
      'Hernias and gallstones',
      'Joint and musculoskeletal conditions',
      'Soft-tissue and skin conditions',
      'Vascular conditions',
      'Selected tumours',
    ],
    equipment: 'Modern operating suites with laparoscopic towers and robotic-assisted systems.',
    image: MEDIA.operatingTheatre,
  },
  {
    slug: 'radiology',
    name: 'Radiology',
    group: 'Procedures and diagnostics',
    summary: 'Medical imaging and diagnostic services.',
    description:
      'Our imaging centre provides X-ray, ultrasound, CT and MRI services with low-dose equipment and reports delivered securely through the patient portal.',
    services: [
      'X-ray',
      'Ultrasound',
      'CT scanning',
      'MRI',
      'Mammography',
    ],
    conditions: [
      'Bone and joint injuries',
      'Chest and abdominal conditions',
      'Soft-tissue and neurological imaging',
      'Breast screening',
      'Vascular assessment',
    ],
    equipment: 'Digital radiography, ultrasound, CT and MRI scanners with low-dose protocols.',
    image: MEDIA.radiologist,
  },
  {
    slug: 'dentistry',
    name: 'Dentistry',
    group: 'Procedures and diagnostics',
    summary: 'Dental assessment and oral health care.',
    description:
      'Our dental team provides assessment, treatment and preventive advice for oral health, with modern, comfortable facilities.',
    services: [
      'Dental examination and check-ups',
      'Fillings and restorative care',
      'Hygiene and preventive treatment',
      'Tooth extraction',
      'Oral-health advice',
    ],
    conditions: [
      'Tooth decay and cavities',
      'Gum disease',
      'Toothache',
      'Wisdom-tooth problems',
      'Dental sensitivity',
    ],
    image: MEDIA.dentistry,
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    group: 'Procedures and diagnostics',
    summary: 'Eye health and vision-related care.',
    description:
      'Our ophthalmology team assesses and treats conditions affecting the eyes and vision, from routine eye checks to specialist procedures.',
    services: [
      'Comprehensive eye examination',
      'Vision testing and prescription checks',
      'Cataract assessment',
      'Glaucoma monitoring',
      'Minor eye procedures',
    ],
    conditions: [
      'Cataracts',
      'Glaucoma',
      'Macular degeneration',
      'Dry eye and infections',
      'Refractive vision problems',
    ],
    image: MEDIA.ophthalmology,
  },
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    group: 'Procedures and diagnostics',
    summary: 'Movement, rehabilitation, and recovery support.',
    description:
      'Our physiotherapy team helps you recover from injury or surgery and manage long-term conditions through personalised movement and rehabilitation programmes.',
    services: [
      'Musculoskeletal physiotherapy',
      'Post-surgical rehabilitation',
      'Sports injury rehabilitation',
      'Cardiac and pulmonary rehab',
      'Balance and mobility programmes',
    ],
    conditions: [
      'Back and neck pain',
      'Joint and muscle injuries',
      'Post-operative recovery',
      'Sports injuries',
      'Reduced mobility and balance',
    ],
    equipment: 'Rehabilitation gym with specialist exercise and mobility equipment.',
    image: MEDIA.physiotherapyAlt,
  },
  {
    slug: 'emergency-medicine',
    name: 'Emergency Medicine',
    group: 'Procedures and diagnostics',
    summary: 'Emergency information and directions for urgent care.',
    description:
      'Our emergency department is open 24 hours a day, every day, providing immediate care for serious and life-threatening conditions. Call 112 for a life-threatening emergency.',
    services: [
      '24/7 emergency assessment and treatment',
      'Triage and rapid response',
      'Trauma and injury care',
      'Emergency imaging and laboratory',
      'Short-stay observation',
    ],
    conditions: [
      'Chest pain and suspected heart attack',
      'Stroke and neurological emergencies',
      'Breathing difficulties',
      'Trauma and fractures',
      'Severe infections',
    ],
    equipment: 'Resuscitation bays, emergency imaging transfer and dedicated ambulance access.',
    image: MEDIA.paramedics,
  },
]

export const PREVIEW_DEPARTMENT_GROUPS = [
  'Primary and family care',
  'Specialty care',
  'Procedures and diagnostics',
] as const

/** Lucide icon name for each department, keyed by slug. */
const DEPARTMENT_ICONS: Record<string, string> = {
  'general-medicine': 'i-lucide-stethoscope',
  'pediatrics': 'i-lucide-baby',
  'obstetrics-gynecology': 'i-lucide-heart-handshake',
  'psychiatry-psychology': 'i-lucide-brain',
  'cardiology': 'i-lucide-heart-pulse',
  'orthopedics': 'i-lucide-bone',
  'neurology': 'i-lucide-brain',
  'dermatology': 'i-lucide-hand',
  'surgery': 'i-lucide-scissors',
  'radiology': 'i-lucide-scan',
  'dentistry': 'i-lucide-smile',
  'ophthalmology': 'i-lucide-eye',
  'physiotherapy': 'i-lucide-dumbbell',
  'emergency-medicine': 'i-lucide-circle-alert',
}

export function departmentIcon(slug: string) {
  return DEPARTMENT_ICONS[slug] ?? 'i-lucide-activity'
}

export function departmentsByGroup(group: DemoDepartment['group']) {
  return PREVIEW_DEPARTMENTS.filter((department) => department.group === group)
}

export function findDepartment(slug: string) {
  return PREVIEW_DEPARTMENTS.find((department) => department.slug === slug)
}
