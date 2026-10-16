<template>
  <section class="section" aria-labelledby="journey-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-10 animate-fade-in animate-slide-up">
        <h2 id="journey-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Your Surgical Journey
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Comprehensive support from consultation through recovery.
        </p>
      </div>

      <div class="relative">
        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
        <div class="space-y-12">
          <JourneyStep
            v-for="(step, index) in journeySteps"
            :key="step.title"
            :number="index + 1"
            :title="step.title"
            :description="step.description"
            :icon="step.icon"
            :details="step.details"
            :side="index % 2 === 0 ? 'left' : 'right'"
            :color="step.color"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import JourneyStep from './JourneyStep.vue'

const journeySteps = [
  {
    title: 'Consultation & Planning',
    description: 'Meet with your surgeon to discuss the procedure, review imaging, and create a personalized surgical plan.',
    icon: 'i-lucide-user-round-search',
    details: ['Pre-operative testing', 'Medication review', 'Insurance authorization', 'Surgical scheduling'],
    color: 'medical',
  },
  {
    title: 'Pre-Operative Preparation',
    description: 'Complete pre-surgical requirements including labs, imaging, and education for a smooth experience.',
    icon: 'i-lucide-clipboard-check',
    details: ['Pre-admission testing', 'Anesthesia evaluation', 'Patient education class', 'Home preparation guide'],
    color: 'healing',
  },
  {
    title: 'Day of Surgery',
    description: 'Arrive at our state-of-the-art surgical center where our team ensures your comfort and safety.',
    icon: 'i-lucide-hospital',
    details: ['Pre-op holding area', 'Anesthesia consultation', 'Surgical time-out', 'Family waiting area'],
    color: 'emergency',
  },
  {
    title: 'Recovery & Monitoring',
    description: 'Post-anesthesia care with specialized nursing monitoring vital signs and managing comfort.',
    icon: 'i-lucide-heart-pulse',
    details: ['PACU monitoring', 'Pain management', 'Nausea prevention', 'Mobility progression'],
    color: 'medical',
  },
  {
    title: 'Enhanced Recovery (ERAS)',
    description: 'Evidence-based protocol for faster recovery including early mobilization, nutrition, and multimodal pain control.',
    icon: 'i-lucide-trending-up',
    details: ['Early ambulation', 'Oral nutrition', 'Non-opioid pain control', 'Discharge criteria'],
    color: 'warm',
  },
  {
    title: 'Follow-Up & Healing',
    description: 'Scheduled follow-up visits, wound care, physical therapy coordination, and return-to-activity guidance.',
    icon: 'i-lucide-calendar-check',
    details: ['Post-op visit (1-2 weeks)', 'Wound assessment', 'PT referral if needed', 'Activity progression guide'],
    color: 'healing',
  },
]
</script>