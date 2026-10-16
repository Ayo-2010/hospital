<template>
  <section class="section bg-slate-50 dark:bg-slate-900/30" aria-labelledby="emergency-services-heading">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-10 animate-fade-in animate-slide-up">
        <h2 id="emergency-services-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
          Emergency Services & Capabilities
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Comprehensive emergency care with on-site specialists and advanced technology.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <EmergencyServiceCard
          v-for="service in emergencyServices"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
          :features="service.features"
          :color="service.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EmergencyServiceCard from './EmergencyServiceCard.vue'

const emergencyServices = [
  {
    title: 'Trauma Resuscitation',
    description: 'Level 1 trauma bay with full resuscitation capabilities and immediate surgical backup.',
    icon: 'i-lucide-heart-pulse',
    features: ['Trauma Surgeons On-Call', 'Massive Transfusion Protocol', 'Damage Control Surgery', 'Helipad Access'],
    color: 'emergency' as const,
  },
  {
    title: 'Cardiac Emergencies',
    description: 'Accredited Chest Pain Center with rapid STEMI protocol and cath lab activation.',
    icon: 'i-lucide-heart',
    features: ['Door-to-Balloon < 90 min', '24/7 Cath Lab', 'ECG Within 10 Minutes', 'Cardiologists On-Call'],
    color: 'medical' as const,
  },
  {
    title: 'Stroke Care',
    description: 'Primary Stroke Center with tele-neurology and tPA administration capability.',
    icon: 'i-lucide-brain',
    features: ['Door-to-Needle < 60 min', '24/7 Neurology', 'CT/MRI Immediately', 'Thrombectomy Capable'],
    color: 'medical' as const,
  },
  {
    title: 'Pediatric Emergency',
    description: 'Dedicated pediatric emergency area with child-life specialists and pediatric-trained staff.',
    icon: 'i-lucide-baby',
    features: ['Pediatric Emergency Physicians', 'Child-Friendly Environment', 'Pediatric ICU Access', 'Sedation Services'],
    color: 'healing' as const,
  },
  {
    title: 'Toxicology & Poisoning',
    description: 'Regional poison control consultation and advanced antidote availability.',
    icon: 'i-lucide-skull',
    features: ['Poison Control Hotline', 'Antidote Stockpile', 'Toxicology Consultation', 'ICU Monitoring'],
    color: 'warm' as const,
  },
  {
    title: 'Psychiatric Emergency',
    description: 'Safe, secure evaluation area with psychiatric liaison and crisis intervention.',
    icon: 'i-lucide-brain-circuit',
    features: ['Psychiatric Liaison', 'Crisis Intervention', 'Safe Evaluation Rooms', 'Inpatient Psych Access'],
    color: 'healing' as const,
  },
]
</script>