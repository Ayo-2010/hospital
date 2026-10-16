<template>
  <section class="section-sm bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800" aria-labelledby="filters-heading">
    <div class="container-main">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div class="flex flex-wrap items-center gap-4">
          <label for="doctor-search" class="sr-only">Search doctors</label>
          <div class="relative flex-1 min-w-[250px]">
            <Icon name="i-lucide-search" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              id="doctor-search"
              type="search"
              placeholder="Search by name, condition, or specialty..."
              class="input-field pl-10 pr-4"
              v-model="searchQuery"
            />
          </div>

          <div class="flex items-center gap-2">
            <label for="specialty-filter" class="sr-only">Filter by specialty</label>
            <select id="specialty-filter" v-model="selectedSpecialty" class="input-field w-48">
              <option value="">All Specialties</option>
              <option v-for="spec in specialties" :key="spec" :value="spec">{{ spec }}</option>
            </select>

            <label for="location-filter" class="sr-only">Filter by location</label>
            <select id="location-filter" v-model="selectedLocation" class="input-field w-48">
              <option value="">All Locations</option>
              <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
            </select>

            <label for="language-filter" class="sr-only">Filter by language</label>
            <select id="language-filter" v-model="selectedLanguage" class="input-field w-48">
              <option value="">All Languages</option>
              <option v-for="lang in languages" :key="lang" :value="lang">{{ lang }}</option>
            </select>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-sm text-slate-600 dark:text-slate-400">{{ filteredDoctors.length }} doctors found</span>
          <button
            @click="clearFilters"
            v-if="hasActiveFilters"
            class="btn-ghost text-sm"
          >
            <Icon name="i-lucide-x" class="h-4 w-4" />
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedSpecialty = ref('')
const selectedLocation = ref('')
const selectedLanguage = ref('')

const allDoctors = [
  { id: '1', name: 'Dr. Sarah Johnson', specialization: 'Cardiology', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80', rating: 4.9, reviewCount: 287, experience: '15 years', languages: ['English', 'Spanish'], location: 'Main Campus', nextAvailable: 'Tomorrow 10:00 AM', acceptsNew: true },
  { id: '2', name: 'Dr. Michael Chen', specialization: 'Neurology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.8, reviewCount: 194, experience: '12 years', languages: ['English', 'Mandarin'], location: 'Main Campus', nextAvailable: 'Today 2:00 PM', acceptsNew: true },
  { id: '3', name: 'Dr. Emily Davis', specialization: 'Pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.9, reviewCount: 312, experience: '10 years', languages: ['English'], location: 'Medical Office Building', nextAvailable: 'Tomorrow 9:00 AM', acceptsNew: true },
  { id: '4', name: 'Dr. Robert Kim', specialization: 'Orthopedics', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.7, reviewCount: 156, experience: '18 years', languages: ['English', 'Korean'], location: 'Main Campus', nextAvailable: 'This Week', acceptsNew: true },
  { id: '5', name: 'Dr. Lisa Martinez', specialization: 'Obstetrics & Gynecology', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.9, reviewCount: 243, experience: '14 years', languages: ['English', 'Spanish'], location: 'Main Campus', nextAvailable: 'Tomorrow 11:00 AM', acceptsNew: true },
  { id: '6', name: 'Dr. James Wilson', specialization: 'Oncology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.8, reviewCount: 178, experience: '20 years', languages: ['English'], location: 'Main Campus', nextAvailable: 'This Week', acceptsNew: false },
  { id: '7', name: 'Dr. Amanda Foster', specialization: 'Dermatology', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.9, reviewCount: 301, experience: '11 years', languages: ['English', 'French'], location: 'Medical Office Building', nextAvailable: 'Today 3:00 PM', acceptsNew: true },
  { id: '8', name: 'Dr. David Park', specialization: 'Radiology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.7, reviewCount: 134, experience: '16 years', languages: ['English', 'Korean'], location: 'Main Campus', nextAvailable: 'N/A', acceptsNew: false },
  { id: '9', name: 'Dr. Jennifer Lee', specialization: 'Emergency Medicine', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.8, reviewCount: 267, experience: '13 years', languages: ['English', 'Spanish'], location: 'Main Campus', nextAvailable: '24/7', acceptsNew: false },
  { id: '10', name: 'Dr. Christopher Brown', specialization: 'General Medicine', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.9, reviewCount: 412, experience: '22 years', languages: ['English'], location: 'Medical Office Building', nextAvailable: 'Tomorrow 8:00 AM', acceptsNew: true },
  { id: '11', name: 'Dr. Michelle Taylor', specialization: 'Pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.8, reviewCount: 189, experience: '9 years', languages: ['English', 'Spanish'], location: 'Medical Office Building', nextAvailable: 'This Week', acceptsNew: true },
  { id: '12', name: 'Dr. Kevin Anderson', specialization: 'Cardiology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.7, reviewCount: 203, experience: '17 years', languages: ['English'], location: 'Main Campus', nextAvailable: 'This Week', acceptsNew: true },
]

const specialties = [...new Set(allDoctors.map(d => d.specialization))].sort()
const locations = [...new Set(allDoctors.map(d => d.location))].sort()
const languages = [...new Set(allDoctors.flatMap(d => d.languages))].sort()

const filteredDoctors = computed(() => {
  return allDoctors.filter(doctor => {
    const matchesSearch = !searchQuery.value ||
      doctor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesSpecialty = !selectedSpecialty.value || doctor.specialization === selectedSpecialty.value
    const matchesLocation = !selectedLocation.value || doctor.location === selectedLocation.value
    const matchesLanguage = !selectedLanguage.value || doctor.languages.includes(selectedLanguage.value)
    return matchesSearch && matchesSpecialty && matchesLocation && matchesLanguage
  })
})

const hasActiveFilters = computed(() => 
  searchQuery.value || selectedSpecialty.value || selectedLocation.value || selectedLanguage.value
)

const clearFilters = () => {
  searchQuery.value = ''
  selectedSpecialty.value = ''
  selectedLocation.value = ''
  selectedLanguage.value = ''
}
</script>