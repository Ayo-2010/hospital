<template>
  <section class="section" aria-labelledby="surgery-specialties-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-10 animate-fade-in animate-slide-up">
        <h2 id="surgery-specialties-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Surgical Specialties
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Board-certified surgeons across every major surgical discipline.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SurgerySpecialtyCard
          v-for="specialty in specialties"
          :key="specialty.title"
          :title="specialty.title"
          :description="specialty.description"
          :image="specialty.image"
          :procedures="specialty.procedures"
          :surgeons="specialty.surgeons"
          :color="specialty.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SurgerySpecialtyCard from './SurgerySpecialtyCard.vue'

const specialties = [
  {
    title: 'General Surgery',
    description: 'Comprehensive surgical care for abdominal, endocrine, breast, and soft tissue conditions using minimally invasive techniques.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
    procedures: ['Laparoscopic Cholecystectomy', 'Hernia Repair', 'Appendectomy', 'Colon Resection', 'Breast Surgery', 'Thyroid/Parathyroid'],
    surgeons: 8,
    color: 'medical' as const,
  },
  {
    title: 'Cardiac Surgery',
    description: 'Heart and thoracic surgical procedures including bypass, valve repair/replacement, and aortic surgery.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
    procedures: ['CABG', 'Valve Repair/Replacement', 'Aortic Surgery', 'MAZE Procedure', 'VAD Implant', 'Heart Transplant'],
    surgeons: 4,
    color: 'emergency' as const,
  },
  {
    title: 'Orthopedic Surgery',
    description: 'Joint replacement, sports medicine, spine surgery, and trauma care with advanced navigation and robotic assistance.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80',
    procedures: ['Total Joint Replacement', 'Arthroscopy', 'Spine Fusion', 'Fracture Repair', 'Sports Injuries', 'Hand Surgery'],
    surgeons: 6,
    color: 'warm' as const,
  },
  {
    title: 'Neurosurgery',
    description: 'Brain, spine, and peripheral nerve surgery with intraoperative MRI, navigation, and neuromonitoring.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80',
    procedures: ['Brain Tumor Resection', 'Spine Decompression', 'Deep Brain Stimulation', 'Cerebrovascular Surgery', 'Peripheral Nerve', 'Pediatric Neurosurgery'],
    surgeons: 3,
    color: 'medical' as const,
  },
  {
    title: 'Robotic Surgery',
    description: 'Da Vinci Xi system for minimally invasive procedures across urology, gynecology, general, and thoracic surgery.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
    procedures: ['Prostatectomy', 'Hysterectomy', 'Colectomy', 'Lobectomy', 'Nephrectomy', 'Bariatric Surgery'],
    surgeons: 10,
    color: 'healing' as const,
  },
  {
    title: 'Pediatric Surgery',
    description: 'Specialized surgical care for infants, children, and adolescents in a child-friendly environment.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80',
    procedures: ['Neonatal Surgery', 'Pediatric Urology', 'Chest Wall Reconstruction', 'Minimally Invasive', 'Oncologic Surgery', 'Trauma'],
    surgeons: 3,
    color: 'healing' as const,
  },
]
</script>