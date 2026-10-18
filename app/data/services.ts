import { MEDIA } from './media'

/**
 * The medical services directory.
 *
 * A service *category* (for example "Primary Care") is a landing page that
 * introduces the area of care and links to each individual service beneath it.
 * Every listed service is itself a page, so a card in the listing never points
 * at an anchor or a dead link.
 */
export interface ServiceItem {
  slug: string
  name: string
  summary: string
  description: string
  /** What the appointment typically covers, shown as a checklist. */
  includes: string[]
  /** Who the service is for. */
  suitableFor?: string
}

export interface ServiceCategory {
  slug: string
  name: string
  summary: string
  description: string
  icon: string
  image: string
  items: ServiceItem[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'primary-care',
    name: 'Primary Care',
    summary: 'Routine check-ups, preventive care and chronic disease management for the whole family.',
    description:
      'Primary care is your first point of contact for everyday health concerns. Our doctors look after prevention, diagnosis and long-term conditions, and coordinate referrals to specialists when you need them.',
    icon: 'i-lucide-stethoscope',
    image: MEDIA.bloodPressure,
    items: [
      {
        slug: 'annual-physicals',
        name: 'Annual physicals',
        summary: 'A yearly head-to-toe health review with your doctor.',
        description:
          'An annual physical is a scheduled review of your overall health. Your doctor checks your vital signs, reviews your history and medicines, and agrees any screening or lifestyle changes with you.',
        includes: [
          'Blood pressure, pulse, weight and BMI',
          'Heart and lung examination',
          'Medication and vaccination review',
          'Blood tests and screening where appropriate',
          'A written summary and follow-up plan',
        ],
        suitableFor: 'Adults of any age, usually once a year.',
      },
      {
        slug: 'vaccinations',
        name: 'Vaccinations',
        summary: 'Routine, travel and seasonal immunisations for children and adults.',
        description:
          'Our immunisation clinics follow the national schedule and also provide travel and seasonal vaccines. A nurse reviews your record, gives the vaccine and updates your card.',
        includes: [
          'Childhood immunisation schedule',
          'Adult boosters and catch-up doses',
          'Travel vaccines and malaria advice',
          'Seasonal influenza vaccination',
          'Vaccination records for school or travel',
        ],
        suitableFor: 'Babies, children, adults and travellers.',
      },
      {
        slug: 'health-screenings',
        name: 'Health screenings',
        summary: 'Checks for common conditions before symptoms appear.',
        description:
          'Screening looks for early signs of conditions such as high blood pressure, diabetes and raised cholesterol, when treatment is most effective.',
        includes: [
          'Blood pressure and blood sugar checks',
          'Cholesterol and lipid profile',
          'Body composition and lifestyle review',
          'Cancer screening referrals where recommended',
          'Personal risk assessment',
        ],
        suitableFor: 'Adults, particularly from mid-life onwards.',
      },
      {
        slug: 'chronic-condition-management',
        name: 'Chronic condition management',
        summary: 'Ongoing care for long-term conditions such as diabetes and hypertension.',
        description:
          'If you live with a long-term condition, we agree a care plan with you, review it at regular intervals and adjust treatment as your needs change.',
        includes: [
          'A written, personalised care plan',
          'Regular monitoring and blood tests',
          'Medication review and adjustment',
          'Diet, activity and lifestyle support',
          'Coordination with specialists and nurses',
        ],
        suitableFor: 'Anyone managing a long-term health condition.',
      },
    ],
  },
  {
    slug: 'emergency-care',
    name: 'Emergency Care',
    summary: '24/7 emergency and trauma care with rapid-assessment teams.',
    description:
      'Our emergency department is open every hour of every day. A triage nurse assesses every patient on arrival, and the most seriously unwell are seen first.',
    icon: 'i-lucide-heart-pulse',
    image: MEDIA.emergencyEntrance,
    items: [
      {
        slug: 'emergency-department',
        name: 'Emergency department',
        summary: 'Immediate assessment for serious illness and injury.',
        description:
          'The emergency department treats chest pain, breathing difficulty, severe pain, injuries, high fever and other urgent problems, with on-site diagnostics and resuscitation facilities.',
        includes: [
          'Triage within minutes of arrival',
          '24/7 on-site laboratory and imaging',
          'Resuscitation and monitoring bays',
          'Observation and short-stay beds',
          'Direct admission when needed',
        ],
        suitableFor: 'Any sudden or severe symptom.',
      },
      {
        slug: 'trauma-care',
        name: 'Trauma care',
        summary: 'Coordinated care for major injuries.',
        description:
          'Major injuries are managed by a trauma team that brings together emergency doctors, surgeons, anaesthetists and radiographers in a single pathway.',
        includes: [
          'Trauma team activation',
          'Rapid imaging and blood products',
          'Emergency operating theatre access',
          'Critical care beds',
          'Post-injury rehabilitation planning',
        ],
      },
      {
        slug: 'ambulance-transport',
        name: 'Ambulance transport',
        summary: 'Emergency and inter-facility patient transport.',
        description:
          'Our ambulance service provides emergency response, transfers between facilities and transport for patients who cannot travel safely by other means.',
        includes: [
          'Emergency response with trained paramedics',
          'Inter-facility transfers',
          'Basic and advanced life support',
          'Transport monitoring and oxygen',
        ],
      },
      {
        slug: 'same-day-clinic',
        name: 'Same-day clinic',
        summary: 'Same-day care for problems that cannot wait.',
        description:
          'For minor injuries and illnesses that need prompt attention but are not emergencies, our same-day clinic offers assessment without an emergency department wait.',
        includes: [
          'Cuts, sprains and minor fractures',
          'Urinary and ear infections',
          'Fever and dehydration',
          'Wound dressing and suturing',
          'Sick notes and follow-up referrals',
        ],
      },
    ],
  },
  {
    slug: 'specialty-care',
    name: 'Specialty Care',
    summary: 'Consultant-led care in cardiology, neurology, orthopaedics and more.',
    description:
      'Our specialists work from shared clinics, so imaging, laboratory results and clinical notes are available in one place and your care stays coordinated between visits.',
    icon: 'i-lucide-star',
    image: MEDIA.clinicalTeam,
    items: [
      {
        slug: 'cardiology-services',
        name: 'Cardiology',
        summary: 'Heart and blood-vessel assessment and treatment.',
        description:
          'Cardiology covers heart rhythm problems, chest pain, heart failure and blood-pressure management, supported by on-site ECG, echocardiography and stress testing.',
        includes: [
          'ECG, Holter and stress testing',
          'Echocardiography',
          'Heart-failure clinic',
          'Cardiac rehabilitation',
          'Preventive cardiology review',
        ],
      },
      {
        slug: 'orthopaedic-services',
        name: 'Orthopaedics',
        summary: 'Bone, joint and musculoskeletal care.',
        description:
          'From sports injuries to joint replacement, our orthopaedic team assesses the whole pathway — imaging, surgery if required, and rehabilitation afterwards.',
        includes: [
          'Fracture and sports-injury clinics',
          'Joint replacement assessment',
          'Spine and back pain clinics',
          'Minimally invasive surgery',
          'Post-operative physiotherapy',
        ],
      },
      {
        slug: 'neurology-services',
        name: 'Neurology',
        summary: 'Assessment of brain, spine and nervous-system conditions.',
        description:
          'Our neurologists investigate headache, seizure, stroke, tremor and memory concerns, with rapid access to imaging and neurophysiology.',
        includes: [
          'Stroke and TIA assessment',
          'Epilepsy and seizure clinic',
          'Headache clinic',
          'Movement disorder clinic',
          'Nerve conduction studies',
        ],
      },
      {
        slug: 'paediatric-services',
        name: 'Paediatrics',
        summary: 'Medical care for infants, children and adolescents.',
        description:
          'Our paediatricians care for children from birth through adolescence in a calm, child-friendly setting, working closely with families.',
        includes: [
          'Well-child and growth checks',
          'Childhood immunisations',
          'Developmental assessment',
          'Asthma and allergy clinic',
          'Newborn and infant care',
        ],
      },
      {
        slug: 'surgical-services',
        name: 'Surgery',
        summary: 'Consultant-led surgical assessment and procedures.',
        description:
          'Our surgical teams cover general, orthopaedic, gynaecological and day-case surgery, with pre-assessment and recovery support in one pathway.',
        includes: [
          'Surgical consultation and pre-assessment',
          'Day-case and inpatient procedures',
          'Minimally invasive techniques',
          'Anaesthetic review',
          'Follow-up and wound care',
        ],
      },
    ],
  },
  {
    slug: 'diagnostics',
    name: 'Diagnostics',
    summary: 'Laboratory, imaging and pathology services for accurate diagnosis.',
    description:
      'Diagnostics bring together our laboratory, imaging and pathology teams. Most results are reported the same day and are shared directly with the clinician who requested them.',
    icon: 'i-lucide-scan',
    image: MEDIA.laboratory,
    items: [
      {
        slug: 'medical-imaging',
        name: 'Medical imaging',
        summary: 'MRI, CT, X-ray and ultrasound scans.',
        description:
          'Our imaging department provides plain X-ray, ultrasound, CT and MRI, with radiologist-reported results and interventional procedures where needed.',
        includes: [
          'X-ray and ultrasound',
          'CT and MRI scanning',
          'Image-guided biopsy and drainage',
          'Screening mammography',
          'Same-day reporting for urgent studies',
        ],
      },
      {
        slug: 'laboratory-testing',
        name: 'Laboratory testing',
        summary: 'Blood, urine and microbiology testing.',
        description:
          'Our laboratory handles routine and specialist testing, including haematology, biochemistry, microbiology and hormone assays.',
        includes: [
          'Full blood count and blood chemistry',
          'Urine and stool analysis',
          'Microbiology and culture',
          'Hormone and tumour-marker assays',
          'Home sample collection where available',
        ],
      },
      {
        slug: 'pathology',
        name: 'Pathology',
        summary: 'Tissue analysis and diagnostic reporting.',
        description:
          'Pathologists examine biopsy and surgical specimens to confirm diagnoses and guide treatment, working directly with your clinical team.',
        includes: [
          'Histopathology reporting',
          'Biopsy and specimen analysis',
          'Multidisciplinary case review',
          'Second-opinion review',
        ],
      },
      {
        slug: 'cardiac-diagnostics',
        name: 'Cardiac diagnostics',
        summary: 'Heart rhythm and function testing.',
        description:
          'Non-invasive heart testing helps us diagnose rhythm problems and assess how well the heart is pumping, usually within a single visit.',
        includes: [
          'Resting and ambulatory ECG',
          'Echocardiography',
          'Exercise stress testing',
          'Blood-pressure monitoring',
        ],
      },
    ],
  },
  {
    slug: 'surgery-and-procedures',
    name: 'Surgery & Procedures',
    summary: 'Multi-specialty surgery, from consultation through to recovery.',
    description:
      'Our theatres support day-case and inpatient surgery across several specialties, with pre-operative assessment, modern anaesthesia and a structured recovery plan.',
    icon: 'i-lucide-scissors',
    image: MEDIA.operatingTheatre,
    items: [
      {
        slug: 'general-surgery',
        name: 'General surgery',
        summary: 'Common abdominal and soft-tissue procedures.',
        description:
          'General surgeons treat conditions of the abdomen, skin and soft tissue, using open or keyhole techniques depending on what is right for you.',
        includes: [
          'Hernia repair',
          'Gallbladder surgery',
          'Appendix surgery',
          'Lump and skin lesion removal',
          'Endoscopy referrals',
        ],
      },
      {
        slug: 'minimally-invasive-surgery',
        name: 'Minimally invasive surgery',
        summary: 'Keyhole surgery for smaller scars and faster recovery.',
        description:
          'Keyhole techniques use small incisions and a camera, which usually means less pain and a shorter stay in hospital than open surgery.',
        includes: [
          'Laparoscopic procedures',
          'Diagnostic keyhole surgery',
          'Day-case suitability assessment',
          'Enhanced recovery planning',
        ],
      },
      {
        slug: 'day-case-surgery',
        name: 'Day-case surgery',
        summary: 'Procedures with same-day discharge.',
        description:
          'Many procedures can be done as a day case: you arrive on the morning of surgery and go home the same day once you have recovered from the anaesthetic.',
        includes: [
          'Pre-operative assessment',
          'Same-day admission and discharge',
          'Take-home medication and instructions',
          'Nurse follow-up call',
        ],
      },
      {
        slug: 'post-operative-care',
        name: 'Post-operative care',
        summary: 'Wound care, pain management and recovery support.',
        description:
          'After surgery, our team monitors your recovery, manages pain and reviews your wound, with rehabilitation arranged where you need it.',
        includes: [
          'Wound review and dressing changes',
          'Pain management',
          'Physiotherapy referral',
          'Diet and activity advice',
          'Follow-up outpatient appointment',
        ],
      },
    ],
  },
  {
    slug: 'maternity-care',
    name: 'Maternity Care',
    summary: 'Antenatal, delivery and postnatal care for mother and baby.',
    description:
      'Our maternity service follows you from your first antenatal visit through delivery and postnatal review, with a named midwifery team and obstetric cover throughout.',
    icon: 'i-lucide-baby',
    image: MEDIA.paediatrics,
    items: [
      {
        slug: 'antenatal-care',
        name: 'Antenatal care',
        summary: 'Regular pregnancy checks for you and your baby.',
        description:
          'Antenatal appointments monitor your health and your baby\u2019s growth, with ultrasound scans, blood tests and screening offered at the recommended stages.',
        includes: [
          'Scheduled pregnancy reviews',
          'Obstetric ultrasound scans',
          'Routine blood and urine tests',
          'Screening and genetic counselling',
          'Birth-plan discussion',
        ],
      },
      {
        slug: 'labour-and-delivery',
        name: 'Labour & delivery',
        summary: 'Delivery suites with midwifery and obstetric support.',
        description:
          'Our delivery suites are staffed by midwives with obstetricians and anaesthetists available around the clock, including for caesarean delivery.',
        includes: [
          'Midwife-led delivery suites',
          'Epidural and pain relief options',
          'Emergency caesarean facilities',
          'Neonatal resuscitation team on site',
          'Partner and birth-partner support',
        ],
      },
      {
        slug: 'newborn-care',
        name: 'Newborn care',
        summary: 'Immediate and early care for your baby.',
        description:
          'Paediatricians review newborns after birth, carry out the newborn examination and provide feeding and jaundice support where needed.',
        includes: [
          'Newborn physical examination',
          'Jaundice monitoring and treatment',
          'Feeding and lactation support',
          'Newborn screening tests',
          'Vaccination planning',
        ],
      },
      {
        slug: 'postnatal-support',
        name: 'Postnatal support',
        summary: 'Recovery, feeding and wellbeing support after birth.',
        description:
          'Postnatal reviews cover your physical recovery and emotional wellbeing as well as your baby\u2019s growth and feeding.',
        includes: [
          'Six-week postnatal review',
          'Contraception and family-planning advice',
          'Postnatal mental-health support',
          'Baby growth and feeding checks',
          'Physiotherapy for pelvic health',
        ],
      },
    ],
  },
]

/** Every service across every category, flattened for lookups and listings. */
export interface FlatService extends ServiceItem {
  categorySlug: string
  categoryName: string
}

export const ALL_SERVICES: FlatService[] = SERVICE_CATEGORIES.flatMap(category =>
  category.items.map(item => ({
    ...item,
    categorySlug: category.slug,
    categoryName: category.name,
  })),
)

export function findServiceCategory(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find(category => category.slug === slug)
}

export function findService(slug: string): FlatService | undefined {
  return ALL_SERVICES.find(service => service.slug === slug)
}
