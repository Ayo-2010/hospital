<template>
  <section class="section bg-slate-50 dark:bg-slate-900/30" aria-labelledby="departments-heading">
    <div class="container-main">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 animate-fade-in animate-slide-up">
        <div>
          <span class="inline-block badge-medical mb-3">Medical Departments</span>
          <h2 id="departments-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Specialized Care Departments
          </h2>
          <p class="mt-2 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            Expert physicians across 15+ specialties providing comprehensive, coordinated care.
          </p>
        </div>
        <NuxtLink to="/departments" class="btn-secondary self-start">
          View All Departments
          <Icon name="i-lucide-chevron-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DepartmentCard
          v-for="dept in departments"
          :key="dept.slug"
          :name="dept.name"
          :description="dept.description"
          :icon="dept.icon"
          :image="dept.image"
          :doctorCount="dept.doctorCount"
          :slug="dept.slug"
          :color="dept.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DepartmentCard from './DepartmentCard.vue'

const departments = [
  { name: 'Cardiology', slug: 'cardiology', description: 'Heart & vascular care', icon: 'i-lucide-heart', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&q=80', doctorCount: 12, color: 'medical' as const },
  { name: 'Pediatrics', slug: 'pediatrics', description: 'Children\'s healthcare', icon: 'i-lucide-baby', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80', doctorCount: 18, color: 'healing' as const },
  { name: 'Orthopedics', slug: 'orthopedics', description: 'Bone, joint & muscle', icon: 'i-lucide-bone', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&q=80', doctorCount: 10, color: 'warm' as const },
  { name: 'Neurology', slug: 'neurology', description: 'Brain & nervous system', icon: 'i-lucide-brain', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&q=80', doctorCount: 8, color: 'medical' as const },
  { name: 'Obstetrics & Gynecology', slug: 'obstetrics-gynecology', description: 'Women\'s health & maternity', icon: 'i-lucide-heart', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&q=80', doctorCount: 14, color: 'healing' as const },
  { name: 'Emergency Medicine', slug: 'emergency-medicine', description: '24/7 emergency services', icon: 'i-lucide-heart-pulse', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&q=80', doctorCount: 22, color: 'emergency' as const },
  { name: 'Oncology', slug: 'oncology', description: 'Cancer care & treatment', icon: 'i-lucide-droplet', image: 'https://images.unsplash.com/photo-1576091160613-7a5e93b7de0d?w=300&q=80', doctorCount: 9, color: 'medical' as const },
  { name: 'Radiology', slug: 'radiology', description: 'Imaging & diagnostics', icon: 'i-lucide-scan', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=300&q=80', doctorCount: 11, color: 'warm' as const },
]
</script>