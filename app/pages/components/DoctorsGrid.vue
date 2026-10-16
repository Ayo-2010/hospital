<template>
  <section class="section" aria-labelledby="doctors-grid-heading">
    <div class="container-main">
      <div class="mb-8 animate-fade-in animate-slide-up">
        <h2 id="doctors-grid-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Our Physicians
        </h2>
        <p class="mt-2 text-lg text-slate-600 dark:text-slate-400">
          {{ filteredDoctors.length }} specialists available for appointments
        </p>
      </div>

      <div v-if="filteredDoctors.length === 0" class="text-center py-16">
        <Icon name="i-lucide-search-x" class="h-12 w-12 text-slate-400 mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">No doctors found</h3>
        <p class="text-slate-600 dark:text-slate-400">Try adjusting your search or filters</p>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DoctorCard
          v-for="doctor in filteredDoctors"
          :key="doctor.id"
          :doctor="doctor"
        />
      </div>

      <div v-if="filteredDoctors.length > 12" class="mt-10 text-center animate-fade-in animate-slide-up">
        <button class="btn-secondary text-lg px-8 py-3">
          Load More Doctors
          <Icon name="i-lucide-chevron-down" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DoctorCard from './DoctorCard.vue'

const searchQuery = inject('searchQuery', ref(''))
const selectedSpecialty = inject('selectedSpecialty', ref(''))
const selectedLocation = inject('selectedLocation', ref(''))
const selectedLanguage = inject('selectedLanguage', ref(''))

const allDoctors = [
  { id: '1', name: 'Dr. Sarah Johnson', specialization: 'Cardiology', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80', rating: 4.9, reviewCount: 287, experience: '15 years', languages: ['English', 'Spanish'], location: 'Main Campus', nextAvailable: 'Tomorrow 10:00 AM', acceptsNew: true, slug: 'sarah-johnson' },
  { id: '2', name: 'Dr. Michael Chen', specialization: 'Neurology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.8, reviewCount: 194, experience: '12 years', languages: ['English', 'Mandarin'], location: 'Main Campus', nextAvailable: 'Today 2:00 PM', acceptsNew: true, slug: 'michael-chen' },
  { id: '3', name: 'Dr. Emily Davis', specialization: 'Pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.9, reviewCount: 312, experience: '10 years', languages: ['English'], location: 'Medical Office Building', nextAvailable: 'Tomorrow 9:00 AM', acceptsNew: true, slug: 'emily-davis' },
  { id: '4', name: 'Dr. Robert Kim', specialization: 'Orthopedics', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.7, reviewCount: 156, experience: '18 years', languages: ['English', 'Korean'], location: 'Main Campus', nextAvailable: 'This Week', acceptsNew: true, slug: 'robert-kim' },
  { id: '5', name: 'Dr. Lisa Martinez', specialization: 'Obstetrics & Gynecology', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.9, reviewCount: 243, experience: '14 years', languages: ['English', 'Spanish'], location: 'Main Campus', nextAvailable: 'Tomorrow 11:00 AM', acceptsNew: true, slug: 'lisa-martinez' },
  { id: '6', name: 'Dr. James Wilson', specialization: 'Oncology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.8, reviewCount: 178, experience: '20 years', languages: ['English'], location: 'Main Campus', nextAvailable: 'This Week', acceptsNew: false, slug: 'james-wilson' },
  { id: '7', name: 'Dr. Amanda Foster', specialization: 'Dermatology', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.9, reviewCount: 301, experience: '11 years', languages: ['English', 'French'], location: 'Medical Office Building', nextAvailable: 'Today 3:00 PM', acceptsNew: true, slug: 'amanda-foster' },
  { id: '8', name: 'Dr. David Park', specialization: 'Radiology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.7, reviewCount: 134, experience: '16 years', languages: ['English', 'Korean'], location: 'Main Campus', nextAvailable: 'N/A', acceptsNew: false, slug: 'david-park' },
  { id: '9', name: 'Dr. Jennifer Lee', specialization: 'Emergency Medicine', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.8, reviewCount: 267, experience: '13 years', languages: ['English', 'Spanish'], location: 'Main Campus', nextAvailable: '24/7', acceptsNew: false, slug: 'jennifer-lee' },
  { id: '10', name: 'Dr. Christopher Brown', specialization: 'General Medicine', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.9, reviewCount: 412, experience: '22 years', languages: ['English'], location: 'Medical Office Building', nextAvailable: 'Tomorrow 8:00 AM', acceptsNew: true, slug: 'christopher-brown' },
  { id: '11', name: 'Dr. Michelle Taylor', specialization: 'Pediatrics', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80', rating: 4.8, reviewCount: 189, experience: '9 years', languages: ['English', 'Spanish'], location: 'Medical Office Building', nextAvailable: 'This Week', acceptsNew: true, slug: 'michelle-taylor' },
  { id: '12', name: 'Dr. Kevin Anderson', specialization: 'Cardiology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80', rating: 4.7, reviewCount: 203, experience: '17 years', languages: ['English'], location: 'Main Campus', nextAvailable: 'This Week', acceptsNew: true, slug: 'kevin-anderson' },
]

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
</script>