<template>
  <main class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <NuxtLink to="/departments" class="hover:text-medical-800">Departments</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">{{ department.name }}</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          {{ department.name }}
        </h1>
        <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {{ department.longDescription }}
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div class="space-y-8">
          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Our services</h2>
            <ul class="mt-4 space-y-2 text-slate-600">
              <li v-for="svc in department.services" :key="svc" class="flex items-start gap-3">
                <Icon name="i-lucide-check-circle" class="mt-0.5 h-5 w-5 text-heal-600" />
                <span>{{ svc }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Conditions treated</h2>
            <ul class="mt-4 grid gap-2 sm:grid-cols-2 text-slate-600">
              <li v-for="cond in department.conditions" :key="cond" class="flex items-start gap-2">
                <Icon name="i-lucide-chevron-right" class="mt-0.5 h-4 w-4 text-medical-700" />
                <span>{{ cond }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl font-semibold text-slate-950">Equipment</h2>
            <p class="mt-3 text-slate-600">{{ department.equipment }}</p>
          </section>

          <section class="flex items-start gap-4 rounded-lg border border-medical-200 bg-medical-50 p-6">
            <Icon name="i-lucide-calendar-plus" class="mt-0.5 h-6 w-6 text-medical-700" />
            <div>
              <h3 class="font-display text-lg font-semibold text-medical-950">Need an appointment?</h3>
              <p class="mt-1 text-sm text-medical-800">
                Schedule an appointment with one of our specialists. No referral needed for most services.
              </p>
              <NuxtLink
                :to="`/appointments/book?department=${department.id}`"
                class="mt-3 inline-flex items-center gap-2 rounded-md bg-medical-700 px-4 py-2 text-sm font-semibold text-white hover:bg-medical-800"
              >
                Book online
                <Icon name="i-lucide-arrow-right" class="h-4 w-4" />
              </NuxtLink>
            </div>
          </section>
        </div>

        <aside class="space-y-5">
          <div class="flex items-start gap-3">
            <div class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-emergency-100 text-emergency-700">
              <Icon name="i-lucide-circle-alert" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-display text-sm font-semibold text-emergency-950">Medical emergency?</h3>
              <p class="mt-1 text-sm text-slate-700">
                Call <a class="font-bold text-emergency-700" href="tel:911">911</a> or
                <NuxtLink to="/emergency" class="font-semibold text-medical-800">go to the ER</NuxtLink>.
              </p>
            </div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-white p-5">
            <h2 class="font-display text-lg font-semibold text-slate-950">Contact us</h2>
            <p class="mt-2 text-sm text-slate-600">
              Department phone: <a class="text-medical-800" href="tel:+11234567890">+1 (123) 456-7890</a>
            </p>
            <p class="mt-1 text-xs text-slate-500">Demonstration contact details.</p>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const departmentSlug = route.params.slug as string

const departmentData: Record<string, any> = {
  cardiology: {
    id: 'cardiology',
    name: 'Cardiology',
    longDescription: 'Our Cardiology department provides comprehensive care for heart conditions. From routine checkups to advanced interventions, we use cutting-edge technology to diagnose and treat cardiovascular disease. Our cardiologists specialize in interventional cardiology, electrophysiology, and preventive heart care.',
    services: [
      'Cardiac catheterization and angioplasty',
      'Electrocardiogram (ECG) and stress tests',
      'Echocardiograms and cardiac ultrasound',
      'Holter monitor and event monitoring',
      'Heart failure management clinic',
      'Cardiac rehabilitation',
    ],
    conditions: [
      'Coronary artery disease',
      'Heart failure',
      'Arrhythmias',
      'Heart valve disease',
      'Atrial fibrillation',
      'Hypertension',
    ],
    equipment: 'Philips Azurite ultrasound system, GE mac 5500 ECG, and Cath lab with flat-panel fluoroscopy for minimally invasive procedures.',
  },
  orthopedics: {
    id: 'orthopedics',
    name: 'Orthopedics',
    longDescription: 'The Orthopedics department offers comprehensive musculoskeletal care. We specialize in joint replacement, sports medicine, spine surgery, and fracture treatment using advanced techniques including minimally invasive and robotic-assisted procedures.',
    services: [
      'Joint replacement surgery (hip, knee, shoulder)',
      'Sports medicine and injury treatment',
      'Spine surgery and pain management',
      'Fracture repair and orthopedic trauma',
      'Arthroscopic surgery',
      'Bone density screening (DEXA)',
    ],
    conditions: [
      'Osteoarthritis',
      'Rheumatoid arthritis',
      'Spinal stenosis',
      'Tendon and ligament injuries',
      'Osteoporosis',
      'Back and neck pain',
    ],
    equipment: 'Mako robotic-arm system for precise joint replacements, O-arm surgical imaging, and computer navigation systems.',
  },
  neurology: {
    id: 'neurology',
    name: 'Neurology',
    longDescription: 'Our Neurology department provides specialized care for disorders of the brain, spine, and nervous system. We offer comprehensive diagnostic capabilities and treatment for conditions ranging from common headaches to complex neurological disorders.',
    services: [
      'Neurological evaluation and consultation',
      'EEG and EMG studies',
      'Brain and spine MRI and CT scans',
      'Stroke care and thrombectomy',
      'Movement disorder treatment',
      'Neuropsychological testing',
    ],
    conditions: [
      'Stroke and TIA',
      'Epilepsy and seizures',
      'Parkinson\'s disease',
      'Alzheimer\'s and dementia',
      'Multiple sclerosis',
      'Headaches and migraines',
    ],
    equipment: '1.5T and 3T MRI scanners, video-EEG telemetry, and neurointerventional fluoroscopy suite.',
  },
  pediatrics: {
    id: 'pediatrics',
    name: 'Pediatrics',
    longDescription: 'The Pediatrics department provides comprehensive healthcare for infants, children, and adolescents. Our board-certified pediatricians and specialists deliver child-friendly care in a supportive environment designed specifically for young patients.',
    services: [
      'Routine well-child visits and vaccinations',
      'Pediatric emergency care',
      'Developmental and behavioral screening',
      'Newborn care and nursery services',
      'Pediatric specialty consultations',
      'Adolescent health and counseling',
    ],
    conditions: [
      'Childhood asthma and allergies',
      'Attention deficit disorders',
      'Congenital conditions',
      'Growth and development concerns',
      'Pediatric infections',
      'Adolescent mental health',
    ],
    equipment: 'Age-appropriate exam rooms, pediatric monitoring equipment, and specialized diagnostic tools for young patients.',
  },
  surgery: {
    id: 'surgery',
    name: 'Surgery',
    longDescription: 'Our Surgery department offers multi-specialty surgical services using advanced techniques including laparoscopic, robotic, and minimally invasive procedures. We provide comprehensive pre-operative, operative, and post-operative care across general surgery, orthopedic surgery, and more.',
    services: [
      'General surgery (laparoscopic and open)',
      'Robotic surgery with da Vinci system',
      'Orthopedic and spine surgery',
      'Plastic and reconstructive surgery',
      'Vascular surgery',
      'Pre-operative evaluation clinic',
    ],
    conditions: [
      'Hernias and gallstones',
      'Solid organ tumors',
      'Soft tissue and skin cancers',
      'Degenerative joint disease',
      'Spinal disorders',
      'Vascular conditions',
    ],
    equipment: 'da Vinci Xi robotic surgical system, laparoscopic towers, and advanced imaging for precision procedures.',
  },
}

const department = computed(() => departmentData[departmentSlug] || departmentData.cardiology)
</script>
