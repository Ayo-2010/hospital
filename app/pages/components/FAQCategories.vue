<template>
  <section class="section" aria-labelledby="faq-categories-heading">
    <div class="container-main">
      <div class="flex flex-col lg:flex-row gap-8">
        <nav class="lg:w-64 flex-shrink-0 animate-fade-in animate-slide-up" aria-label="FAQ Categories">
          <ul class="space-y-1">
            <li v-for="category in categories" :key="category.id">
              <button
                @click="activeCategory = category.id"
                class="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                :class="activeCategory === category.id
                  ? 'bg-medical-600 text-white shadow-soft'
                  : 'text-slate-600 hover:text-medical-600 hover:bg-medical-50 dark:text-slate-300 dark:hover:text-medical-400 dark:hover:bg-medical-900/30'"
              >
                {{ category.label }}
              </button>
            </li>
          </ul>
        </nav>

        <div class="flex-1 animate-fade-in animate-slide-up stagger-1">
          <div v-for="category in categories" :key="category.id" v-show="activeCategory === category.id">
            <h2 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">{{ category.label }}</h2>
            <div class="space-y-3">
              <FAQItem
                v-for="faq in category.faqs"
                :key="faq.question"
                :question="faq.question"
                :answer="faq.answer"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center animate-fade-in animate-slide-up stagger-2">
        <p class="text-slate-600 dark:text-slate-400 mb-4">Didn't find what you're looking for?</p>
        <NuxtLink to="/contact" class="btn-primary">
          <Icon name="i-lucide-message-circle" class="h-5 w-5" />
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FAQItem from './FAQItem.vue'

const activeCategory = ref('appointments')

const categories = [
  {
    id: 'appointments',
    label: 'Appointments',
    faqs: [
      { question: 'How do I book an appointment?', answer: 'You can book an appointment online through our website, call our scheduling line at +1 (123) 456-7891, or use the patient portal. Online booking is available 24/7 for most specialties.' },
      { question: 'Can I book a same-day appointment?', answer: 'Yes, we offer same-day appointments for urgent needs. Call our scheduling line early in the day for best availability, or check online for real-time openings.' },
      { question: 'What do I need to bring to my appointment?', answer: 'Bring your photo ID, insurance card(s), list of current medications, and any relevant medical records or test results. New patients should arrive 15 minutes early.' },
      { question: 'How do I cancel or reschedule?', answer: 'You can cancel or reschedule online through the patient portal, call our scheduling line, or reply to your appointment reminder text/email. Please give at least 24 hours notice.' },
      { question: 'Do you offer virtual visits?', answer: 'Yes, we offer telehealth visits for many specialties including primary care, follow-ups, behavioral health, and certain specialist consultations. Check availability when booking online.' },
    ],
  },
  {
    id: 'insurance',
    label: 'Insurance & Billing',
    faqs: [
      { question: 'What insurance plans do you accept?', answer: 'We accept most major insurance plans including Medicare, Medicaid, and major commercial carriers. Visit our insurance page for a complete list or call our billing department to verify your specific plan.' },
      { question: 'How can I pay my bill?', answer: 'Pay online through the patient portal, by phone, by mail, or in person. We offer payment plans and financial assistance for those who qualify. Contact billing for details.' },
      { question: 'What if I don\'t have insurance?', answer: 'We offer a self-pay discount and financial assistance program based on income. Our financial counselors can help you explore options including Medicaid enrollment.' },
      { question: 'How do I get an itemized bill?', answer: 'Itemized statements are available in the patient portal under "Billing" or can be requested by calling our billing department at +1 (123) 456-7892.' },
    ],
  },
  {
    id: 'records',
    label: 'Medical Records',
    faqs: [
      { question: 'How do I access my medical records?', answer: 'Use the patient portal for immediate access to visit summaries, test results, and visit notes. For complete records, submit a records request form online or contact Health Information Management.' },
      { question: 'Can I share records with another provider?', answer: 'Yes, you can authorize release of records to other providers through the patient portal or by completing a release of information form. We can send records electronically or by mail.' },
      { question: 'How long does it take to get records?', answer: 'Portal access is immediate. Formal records requests typically take 5-10 business days. Urgent requests for continuity of care are prioritized.' },
      { question: 'Is there a fee for medical records?', answer: 'There is no fee for records sent directly to another healthcare provider for continuity of care. Personal copies may have a reasonable fee per state guidelines.' },
    ],
  },
  {
    id: 'general',
    label: 'General Information',
    faqs: [
      { question: 'What are your visiting hours?', answer: 'General visiting hours are 8:00 AM to 8:00 PM daily. ICU and specialty units may have different hours. Check with the specific unit for details. Children under 12 must be accompanied by an adult.' },
      { question: 'Where can I park?', answer: 'Free parking is available in our main garage and surface lots. Valet parking is available at the main entrance for a fee. Designated accessible parking is available at all entrances.' },
      { question: 'Do you have a pharmacy on-site?', answer: 'Yes, our retail pharmacy is located in the main lobby and Medical Office Building. Hours: Mon-Fri 7 AM-8 PM, Sat 9 AM-5 PM, Sun 10 AM-2 PM. We offer prescription delivery.' },
      { question: 'Is there a cafeteria or food options?', answer: 'Our main cafeteria serves breakfast, lunch, and dinner daily. Coffee shops are located in the main lobby and Medical Office Building. Vending machines available 24/7.' },
      { question: 'How do I provide feedback or file a complaint?', answer: 'We welcome feedback! Use the contact form on our website, call patient relations at +1 (123) 456-7894, or speak with any staff member. All concerns are reviewed promptly.' },
    ],
  },
]
</script>