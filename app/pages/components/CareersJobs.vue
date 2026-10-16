<template>
  <section id="open-positions" class="section" aria-labelledby="jobs-heading">
    <div class="container-main">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 animate-fade-in animate-slide-up">
        <div>
          <h2 id="jobs-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Open Positions
          </h2>
          <p class="mt-2 text-lg text-slate-600 dark:text-slate-400">
            {{ filteredJobs.length }} opportunities across clinical, administrative, and support roles
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <label for="job-search" class="sr-only">Search jobs</label>
          <div class="relative">
            <Icon name="i-lucide-search" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              id="job-search"
              type="search"
              v-model="searchQuery"
              placeholder="Search by title, keyword..."
              class="input-field pl-10 pr-4 w-64"
            />
          </div>
          <label for="dept-filter" class="sr-only">Filter by department</label>
          <select id="dept-filter" v-model="selectedDepartment" class="input-field w-48">
            <option value="">All Departments</option>
            <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
          </select>
          <label for="type-filter" class="sr-only">Filter by type</label>
          <select id="type-filter" v-model="selectedType" class="input-field w-40">
            <option value="">All Types</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="per-diem">Per Diem</option>
          </select>
        </div>
      </div>

      <div v-if="filteredJobs.length === 0" class="text-center py-16 animate-fade-in">
        <Icon name="i-lucide-search-x" class="h-12 w-12 text-slate-400 mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">No positions found</h3>
        <p class="text-slate-600 dark:text-slate-400">Try adjusting your search or filters</p>
      </div>

      <div v-else class="space-y-4">
        <JobCard
          v-for="job in filteredJobs"
          :key="job.id"
          :job="job"
        />
      </div>

      <div class="mt-8 text-center animate-fade-in animate-slide-up">
        <p class="text-slate-600 dark:text-slate-400 mb-4">Don't see the perfect fit?</p>
        <a href="mailto:careers@medcorehms.com" class="btn-primary">
          <Icon name="i-lucide-mail" class="h-5 w-5" />
          Send Your Resume
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import JobCard from './JobCard.vue'

const searchQuery = ref('')
const selectedDepartment = ref('')
const selectedType = ref('')

const allJobs = [
  { id: '1', title: 'Registered Nurse - Med/Surg', department: 'Nursing', location: 'Main Campus', type: 'full-time', shift: 'Night (7p-7a)', experience: '1+ year', posted: '2024-01-15', featured: true },
  { id: '2', title: 'Registered Nurse - ICU', department: 'Nursing', location: 'Main Campus', type: 'full-time', shift: 'Day (7a-7p)', experience: '2+ years ICU', posted: '2024-01-14', featured: true },
  { id: '3', title: 'Registered Nurse - ER', department: 'Nursing', location: 'Main Campus', type: 'full-time', shift: 'Rotating', experience: '1+ year ER preferred', posted: '2024-01-13' },
  { id: '4', title: 'Medical Laboratory Technician', department: 'Laboratory', location: 'Main Campus', type: 'full-time', shift: 'Day', experience: 'ASCP certification', posted: '2024-01-12' },
  { id: '5', title: 'Pharmacist', department: 'Pharmacy', location: 'Main Campus', type: 'full-time', shift: 'Rotating', experience: 'PharmD, license', posted: '2024-01-11' },
  { id: '6', title: 'Physical Therapist', department: 'Rehabilitation', location: 'Wellness Center', type: 'full-time', shift: 'Day', experience: 'DPT, license', posted: '2024-01-10' },
  { id: '7', title: 'Patient Access Representative', department: 'Administration', location: 'Main Campus', type: 'full-time', shift: 'Day', experience: 'Customer service', posted: '2024-01-09' },
  { id: '8', title: 'Environmental Services Tech', department: 'Support Services', location: 'Main Campus', type: 'full-time', shift: 'Evening', experience: 'Entry level', posted: '2024-01-08' },
  { id: '9', title: 'OR Surgical Technologist', department: 'Surgery', location: 'Main Campus', type: 'full-time', shift: 'Day', experience: 'CST certification', posted: '2024-01-07' },
  { id: '10', title: 'Radiology Technologist', department: 'Radiology', location: 'Main Campus', type: 'full-time', shift: 'Rotating', experience: 'ARRT certification', posted: '2024-01-06' },
  { id: '11', title: 'Respiratory Therapist', department: 'Respiratory', location: 'Main Campus', type: 'full-time', shift: 'Night', experience: 'RRT credential', posted: '2024-01-05' },
  { id: '12', title: 'Clinical Social Worker', department: 'Case Management', location: 'Main Campus', type: 'full-time', shift: 'Day', experience: 'LCSW, healthcare exp', posted: '2024-01-04' },
]

const departments = [...new Set(allJobs.map(j => j.department))].sort()

const filteredJobs = computed(() => {
  return allJobs.filter(job => {
    const matchesSearch = !searchQuery.value ||
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesDept = !selectedDepartment.value || job.department === selectedDepartment.value
    const matchesType = !selectedType.value || job.type === selectedType.value
    return matchesSearch && matchesDept && matchesType
  })
})
</script>