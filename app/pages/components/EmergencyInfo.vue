<template>
  <section class="section" aria-labelledby="emergency-info-heading">
    <div class="container-main">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="animate-fade-in animate-slide-up">
          <h2 id="emergency-info-heading" class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            What to Expect in Our ER
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Our emergency department is staffed 24/7 by board-certified emergency physicians, 
            trauma surgeons, and specialized nursing staff. We treat over 50,000 patients annually 
            with an average wait time of just 12 minutes.
          </p>

          <div class="space-y-4">
            <EmergencyStep
              v-for="(step, index) in steps"
              :key="step.title"
              :number="index + 1"
              :title="step.title"
              :description="step.description"
              :icon="step.icon"
            />
          </div>
        </div>

        <div class="animate-fade-in animate-slide-up stagger-1">
          <div class="card relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 rounded-full bg-emergency-500/10 blur-xl" />
            <div class="relative p-6">
              <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">Live ER Status</h3>
              <div class="space-y-4">
                <ERStatusItem label="Current Wait Time" value="12 min" icon="i-lucide-clock" color="healing" trend="down" trendValue="3 min" />
                <ERStatusItem label="Patients in ER" value="23" icon="i-lucide-users" color="medical" />
                <ERStatusItem label="Trauma Bays Open" value="4 of 6" icon="i-lucide-door-open" color="warm" />
                <ERStatusItem label="Board-Certified MDs On Duty" value="6" icon="i-lucide-user-round" color="healing" />
                <ERStatusItem label="Last Updated" value="2 minutes ago" icon="i-lucide-refresh-cw" color="medical" />
              </div>
              <p class="mt-4 text-sm text-slate-500 dark:text-slate-400">Wait times are estimates and can change rapidly based on patient acuity.</p>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4">
            <div class="card text-center p-6 bg-emergency-50 dark:bg-emergency-900/20 border-emergency-200 dark:border-emergency-800">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-3 bg-emergency-100 dark:bg-emergency-900/40">
                <Icon name="i-lucide-shield-check" class="h-6 w-6 text-emergency-600 dark:text-emergency-400" />
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white">Level 1 Trauma Center</h4>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">Highest level of trauma care</p>
            </div>
            <div class="card text-center p-6 bg-healing-50 dark:bg-healing-900/20 border-healing-200 dark:border-healing-800">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-3 bg-healing-100 dark:bg-healing-900/40">
                <Icon name="i-lucide-heart" class="h-6 w-6 text-healing-600 dark:text-healing-400" />
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white">Chest Pain Center</h4>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">Accredited cardiac emergency care</p>
            </div>
            <div class="card text-center p-6 bg-medical-50 dark:bg-medical-900/20 border-medical-200 dark:border-medical-800">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-3 bg-medical-100 dark:bg-medical-900/40">
                <Icon name="i-lucide-brain" class="h-6 w-6 text-medical-600 dark:text-medical-400" />
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white">Primary Stroke Center</h4>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">Rapid stroke diagnosis & treatment</p>
            </div>
            <div class="card text-center p-6 bg-warm-50 dark:bg-warm-900/20 border-warm-200 dark:border-warm-800">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-3 bg-warm-100 dark:bg-warm-900/40">
                <Icon name="i-lucide-baby" class="h-6 w-6 text-warm-600 dark:text-warm-400" />
              </div>
              <h4 class="font-semibold text-slate-900 dark:text-white">Pediatric ER</h4>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">Specialized children's emergency care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EmergencyStep from './EmergencyStep.vue'
import ERStatusItem from './ERStatusItem.vue'

const steps = [
  { title: 'Arrival & Triage', description: 'Immediate assessment by a triage nurse to determine urgency level and prioritize care.', icon: 'i-lucide-clipboard-check' },
  { title: 'Registration', description: 'Quick registration while care begins. We collect essential information for your medical record.', icon: 'i-lucide-user-plus' },
  { title: 'Medical Evaluation', description: 'Board-certified emergency physician performs examination and orders necessary tests.', icon: 'i-lucide-stethoscope' },
  { title: 'Treatment & Testing', description: 'On-site lab, imaging (CT, X-ray, ultrasound) and specialized treatments available immediately.', icon: 'i-lucide-flask-conical' },
  { title: 'Disposition', description: 'Discharge with follow-up instructions, admission to hospital, or transfer to specialized facility.', icon: 'i-lucide-arrow-right' },
]
</script>