<template>
  <section id="open-positions" class="section bg-white" aria-labelledby="jobs-heading">
    <div class="container-main">
      <div class="mb-8 flex flex-col gap-4 animate-slide-up sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="eyebrow">Open roles</p>
          <h2 id="jobs-heading" class="mt-3">Open Positions</h2>
          <p class="mt-2 text-base leading-7 text-slate-600">
            {{ filteredJobs.length }} opportunities across clinical, administrative, and support roles
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <div class="relative">
            <label for="job-search" class="sr-only">Search jobs</label>
            <Icon name="i-lucide-search" class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id="job-search"
              v-model="searchQuery"
              type="search"
              placeholder="Search by title, keyword..."
              class="input-field pl-10 sm:w-64"
            />
          </div>
          <div>
            <label for="dept-filter" class="sr-only">Filter by department</label>
            <select id="dept-filter" v-model="selectedDepartment" class="input-field sm:w-48">
              <option value="">All Departments</option>
              <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
            </select>
          </div>
          <div>
            <label for="type-filter" class="sr-only">Filter by type</label>
            <select id="type-filter" v-model="selectedType" class="input-field sm:w-40">
              <option value="">All Types</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="per-diem">Per Diem</option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="filteredJobs.length === 0" class="rounded-xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center animate-fade-in">
        <Icon name="i-lucide-search-x" class="mx-auto mb-4 h-12 w-12 text-slate-400" aria-hidden="true" />
        <h3 class="font-display text-lg font-semibold tracking-tight text-slate-950">No positions found</h3>
        <p class="mt-1 text-slate-600">Try adjusting your search or filters</p>
      </div>

      <div v-else class="space-y-4">
        <JobCard
          v-for="job in filteredJobs"
          :key="job.id"
          :job="job"
        />
      </div>

      <div class="mt-8 text-center animate-slide-up">
        <p class="mb-4 text-base leading-7 text-slate-600">Don't see the perfect fit?</p>
        <a href="mailto:careers@medcorehospital.com" class="btn-primary">
          <Icon name="i-lucide-mail" class="h-5 w-5" aria-hidden="true" />
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

const allJobs: {
  id: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'per-diem'
  shift: string
  experience: string
  posted: string
  featured?: boolean
}[] = [
  { id: '1', title: 'Registered Nurse - Med/Surg', department: 'Nursing', location: 'Victoria Island Campus', type: 'full-time', shift: 'Night (7p-7a)', experience: '1+ year', posted: '2024-01-15', featured: true },
  { id: '2', title: 'Registered Nurse - ICU', department: 'Nursing', location: 'Victoria Island Campus', type: 'full-time', shift: 'Day (7a-7p)', experience: '2+ years ICU', posted: '2024-01-14', featured: true },
  { id: '3', title: 'Registered Nurse - ER', department: 'Nursing', location: 'Victoria Island Campus', type: 'full-time', shift: 'Rotating', experience: '1+ year ER preferred', posted: '2024-01-13' },
  { id: '4', title: 'Medical Laboratory Technician', department: 'Laboratory', location: 'Victoria Island Campus', type: 'full-time', shift: 'Day', experience: 'ASCP certification', posted: '2024-01-12' },
  { id: '5', title: 'Pharmacist', department: 'Pharmacy', location: 'Victoria Island Campus', type: 'full-time', shift: 'Rotating', experience: 'PharmD, license', posted: '2024-01-11' },
  { id: '6', title: 'Physical Therapist', department: 'Rehabilitation', location: 'Wellness Center', type: 'full-time', shift: 'Day', experience: 'DPT, license', posted: '2024-01-10' },
  { id: '7', title: 'Patient Access Representative', department: 'Administration', location: 'Victoria Island Campus', type: 'full-time', shift: 'Day', experience: 'Customer service', posted: '2024-01-09' },
  { id: '8', title: 'Environmental Services Tech', department: 'Support Services', location: 'Victoria Island Campus', type: 'full-time', shift: 'Evening', experience: 'Entry level', posted: '2024-01-08' },
  { id: '9', title: 'OR Surgical Technologist', department: 'Surgery', location: 'Victoria Island Campus', type: 'full-time', shift: 'Day', experience: 'CST certification', posted: '2024-01-07' },
  { id: '10', title: 'Radiology Technologist', department: 'Radiology', location: 'Victoria Island Campus', type: 'full-time', shift: 'Rotating', experience: 'ARRT certification', posted: '2024-01-06' },
  { id: '11', title: 'Respiratory Therapist', department: 'Respiratory', location: 'Victoria Island Campus', type: 'full-time', shift: 'Night', experience: 'RRT credential', posted: '2024-01-05' },
  { id: '12', title: 'Clinical Social Worker', department: 'Case Management', location: 'Victoria Island Campus', type: 'full-time', shift: 'Day', experience: 'LCSW, healthcare exp', posted: '2024-01-04' },
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
