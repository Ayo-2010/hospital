<template>
  <section class="section" aria-labelledby="services-categories-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-10 animate-fade-in animate-slide-up">
        <h2 id="services-categories-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Our Service Categories
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Explore our comprehensive range of medical services organized by category.
        </p>
      </div>

      <div class="space-y-12">
        <ServiceCategorySection
          v-for="category in serviceCategories"
          :key="category.id"
          :title="category.title"
          :description="category.description"
          :icon="category.icon"
          :color="category.color"
          :services="category.services"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCategorySection from './ServiceCategorySection.vue'

const serviceCategories = [
  {
    id: 'emergency',
    title: 'Emergency & Critical Care',
    description: '24/7 emergency services with Level 1 Trauma Center certification and specialized critical care units.',
    icon: 'i-lucide-heart-pulse',
    color: 'emergency',
    services: [
      { name: 'Level 1 Trauma Center', description: 'Highest level of trauma care available 24/7', icon: 'i-lucide-shield-check' },
      { name: 'Emergency Department', description: 'Board-certified emergency physicians', icon: 'i-lucide-heart-pulse' },
      { name: 'Pediatric Emergency', description: 'Specialized emergency care for children', icon: 'i-lucide-baby' },
      { name: 'Chest Pain Center', description: 'Accredited chest pain evaluation', icon: 'i-lucide-heart' },
      { name: 'Stroke Center', description: 'Primary stroke center certification', icon: 'i-lucide-brain' },
      { name: 'Medical Transport', description: 'Ground and air ambulance services', icon: 'i-lucide-truck' },
    ],
  },
  {
    id: 'surgical',
    title: 'Surgical Services',
    description: 'Advanced surgical care including minimally invasive, robotic, and complex procedures across all specialties.',
    icon: 'i-lucide-scissors',
    color: 'warm',
    services: [
      { name: 'General Surgery', description: 'Abdominal, endocrine, and breast surgery', icon: 'i-lucide-scissors' },
      { name: 'Cardiac Surgery', description: 'Heart bypass, valve repair, and transplant', icon: 'i-lucide-heart' },
      { name: 'Orthopedic Surgery', description: 'Joint replacement, sports medicine, spine', icon: 'i-lucide-bone' },
      { name: 'Neurosurgery', description: 'Brain, spine, and peripheral nerve surgery', icon: 'i-lucide-brain' },
      { name: 'Robotic Surgery', description: 'Da Vinci Xi system for minimally invasive procedures', icon: 'i-lucide-cpu' },
      { name: 'Same-Day Surgery', description: 'Outpatient surgical center', icon: 'i-lucide-clock' },
    ],
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic & Imaging',
    description: 'State-of-the-art diagnostic imaging and laboratory services for accurate, timely diagnosis.',
    icon: 'i-lucide-scan',
    color: 'medical',
    services: [
      { name: 'MRI', description: '3T and 1.5T high-field MRI', icon: 'i-lucide-magnet' },
      { name: 'CT Scan', description: '64-slice and 128-slice CT scanners', icon: 'i-lucide-box' },
      { name: 'Ultrasound', description: 'General, vascular, and obstetric ultrasound', icon: 'i-lucide-waveform' },
      { name: 'X-Ray & Fluoroscopy', description: 'Digital radiography and live imaging', icon: 'i-lucide-scan' },
      { name: 'Mammography', description: '3D tomosynthesis breast imaging', icon: 'i-lucide-circle' },
      { name: 'Interventional Radiology', description: 'Image-guided minimally invasive procedures', icon: 'i-lucide-target' },
      { name: 'Laboratory Services', description: 'Full-service clinical laboratory', icon: 'i-lucide-flask-conical' },
      { name: 'Pathology', description: 'Anatomic and clinical pathology', icon: 'i-lucide-microscope' },
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty Medical Services',
    description: 'Comprehensive specialty care across all major medical disciplines.',
    icon: 'i-lucide-stethoscope',
    color: 'healing',
    services: [
      { name: 'Cardiology', description: 'Heart and vascular care', icon: 'i-lucide-heart' },
      { name: 'Neurology', description: 'Brain and nervous system disorders', icon: 'i-lucide-brain' },
      { name: 'Oncology', description: 'Cancer diagnosis and treatment', icon: 'i-lucide-droplet' },
      { name: 'Pulmonology', description: 'Lung and respiratory care', icon: 'i-lucide-lungs' },
      { name: 'Gastroenterology', description: 'Digestive system disorders', icon: 'i-lucide-activity' },
      { name: 'Nephrology', description: 'Kidney care and dialysis', icon: 'i-lucide-droplet' },
      { name: 'Endocrinology', description: 'Diabetes and hormone disorders', icon: 'i-lucide-gauge' },
      { name: 'Rheumatology', description: 'Autoimmune and joint conditions', icon: 'i-lucide-hand' },
    ],
  },
  {
    id: 'women-children',
    title: 'Women\'s & Children\'s Health',
    description: 'Specialized care for women at every life stage and comprehensive pediatric services.',
    icon: 'i-lucide-heart',
    color: 'healing',
    services: [
      { name: 'Obstetrics', description: 'Prenatal, delivery, and postpartum care', icon: 'i-lucide-baby' },
      { name: 'Gynecology', description: 'Women\'s reproductive health', icon: 'i-lucide-female' },
      { name: 'High-Risk Pregnancy', description: 'Maternal-fetal medicine', icon: 'i-lucide-heart-pulse' },
      { name: 'Pediatrics', description: 'Newborn to adolescent care', icon: 'i-lucide-baby' },
      { name: 'Neonatal ICU', description: 'Level III NICU', icon: 'i-lucide-heart' },
      { name: 'Pediatric Specialties', description: 'Cardiology, neurology, surgery', icon: 'i-lucide-stethoscope' },
    ],
  },
  {
    id: 'support',
    title: 'Support & Wellness Services',
    description: 'Comprehensive support services to enhance healing and promote wellness.',
    icon: 'i-lucide-heart-handshake',
    color: 'medical',
    services: [
      { name: 'Pharmacy', description: 'Full-service retail and clinical pharmacy', icon: 'i-lucide-pill' },
      { name: 'Physical Therapy', description: 'Rehabilitation and sports therapy', icon: 'i-lucide-dumbbell' },
      { name: 'Occupational Therapy', description: 'Daily living skills rehabilitation', icon: 'i-lucide-hand' },
      { name: 'Speech Therapy', description: 'Communication and swallowing disorders', icon: 'i-lucide-message-circle' },
      { name: 'Cardiac Rehab', description: 'Medically supervised exercise programs', icon: 'i-lucide-heart' },
      { name: 'Nutrition Services', description: 'Registered dietitians and counseling', icon: 'i-lucide-apple' },
      { name: 'Mental Health', description: 'Counseling and psychiatric services', icon: 'i-lucide-brain' },
      { name: 'Pain Management', description: 'Comprehensive pain treatment', icon: 'i-lucide-pill' },
    ],
  },
]
</script>