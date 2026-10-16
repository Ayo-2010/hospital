<template>
  <section class="section" aria-labelledby="departments-grid-heading">
    <div class="container-main">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in animate-slide-up">
        <div>
          <h2 id="departments-grid-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            All Departments
          </h2>
          <p class="mt-2 text-lg text-slate-600 dark:text-slate-400">
            Browse our comprehensive range of medical specialties and services.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <label for="dept-search" class="sr-only">Search departments</label>
          <div class="relative">
            <Icon name="i-lucide-search" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              id="dept-search"
              type="search"
              placeholder="Search departments..."
              class="input-field pl-10 pr-4 w-64 sm:w-80"
            />
          </div>
          <select class="input-field w-48" aria-label="Filter by category">
            <option value="">All Categories</option>
            <option value="surgical">Surgical</option>
            <option value="medical">Medical</option>
            <option value="diagnostic">Diagnostic</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DepartmentDetailCard
          v-for="dept in departments"
          :key="dept.slug"
          :name="dept.name"
          :description="dept.description"
          :icon="dept.icon"
          :image="dept.image"
          :doctorCount="dept.doctorCount"
          :services="dept.services"
          :slug="dept.slug"
          :color="dept.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DepartmentDetailCard from './DepartmentDetailCard.vue'

const departments = [
  { name: 'Cardiology', slug: 'cardiology', description: 'Comprehensive heart and vascular care including interventional cardiology, electrophysiology, and cardiac surgery.', icon: 'i-lucide-heart', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80', doctorCount: 12, services: ['Interventional Cardiology', 'Heart Rhythm Center', 'Cardiac Surgery', 'Heart Failure Clinic', 'Preventive Cardiology'], color: 'medical' as const },
  { name: 'Pediatrics', slug: 'pediatrics', description: 'Complete children\'s healthcare from newborns to adolescents, including well-child visits, vaccinations, and specialized pediatric care.', icon: 'i-lucide-baby', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', doctorCount: 18, services: ['Well-Child Visits', 'Vaccinations', 'Pediatric Cardiology', 'Neonatal Care', 'Adolescent Medicine'], color: 'healing' as const },
  { name: 'Orthopedics', slug: 'orthopedics', description: 'Expert diagnosis and treatment of bone, joint, and muscle conditions with advanced surgical and non-surgical options.', icon: 'i-lucide-bone', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', doctorCount: 10, services: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Hand Surgery', 'Trauma Care'], color: 'warm' as const },
  { name: 'Neurology', slug: 'neurology', description: 'Specialized care for brain, spine, and nervous system disorders including stroke, epilepsy, and movement disorders.', icon: 'i-lucide-brain', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80', doctorCount: 8, services: ['Stroke Center', 'Epilepsy Clinic', 'Movement Disorders', 'Memory Center', 'Neurophysiology'], color: 'medical' as const },
  { name: 'Obstetrics & Gynecology', slug: 'obstetrics-gynecology', description: 'Comprehensive women\'s health services including maternity care, gynecologic surgery, and reproductive health.', icon: 'i-lucide-heart', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80', doctorCount: 14, services: ['Maternity Care', 'High-Risk Pregnancy', 'GYN Surgery', 'Reproductive Endocrinology', 'Midwifery'], color: 'healing' as const },
  { name: 'Emergency Medicine', slug: 'emergency-medicine', description: '24/7 Level 1 Trauma Center providing immediate care for life-threatening conditions and injuries.', icon: 'i-lucide-heart-pulse', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', doctorCount: 22, services: ['Level 1 Trauma', 'Chest Pain Center', 'Stroke Center', 'Pediatric ER', 'Toxicology'], color: 'emergency' as const },
  { name: 'Oncology', slug: 'oncology', description: 'Multidisciplinary cancer care including medical oncology, radiation oncology, and surgical oncology with clinical trials.', icon: 'i-lucide-droplet', image: 'https://images.unsplash.com/photo-1576091160613-7a5e93b7de0d?w=400&q=80', doctorCount: 9, services: ['Medical Oncology', 'Radiation Oncology', 'Surgical Oncology', 'Clinical Trials', 'Survivorship Care'], color: 'medical' as const },
  { name: 'Radiology', slug: 'radiology', description: 'Advanced diagnostic and interventional imaging including MRI, CT, ultrasound, and image-guided procedures.', icon: 'i-lucide-scan', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80', doctorCount: 11, services: ['MRI', 'CT Scan', 'Ultrasound', 'Interventional Radiology', 'Mammography'], color: 'warm' as const },
  { name: 'General Medicine', slug: 'general-medicine', description: 'Primary care and internal medicine for adults, focusing on prevention, diagnosis, and management of chronic conditions.', icon: 'i-lucide-stethoscope', image: 'https://images.unsplash.com/photo-1576091160613-7a5e93b7de0d?w=400&q=80', doctorCount: 25, services: ['Primary Care', 'Chronic Disease Management', 'Preventive Care', 'Geriatrics', 'Executive Health'], color: 'healing' as const },
]
</script>