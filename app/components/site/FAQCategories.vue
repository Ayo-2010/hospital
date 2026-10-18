<template>
  <section id="faq-categories" class="section bg-slate-50" aria-label="Frequently asked questions">
    <div class="container-main">
      <div class="flex flex-col gap-8 lg:flex-row">
        <nav class="shrink-0 animate-fade-in lg:w-64" aria-label="FAQ categories">
          <ul class="space-y-1">
            <li v-for="category in categories" :key="category.id">
              <button
                type="button"
                class="w-full rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-colors duration-150"
                :class="activeCategory === category.id
                  ? 'bg-medical-700 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-medical-800'"
                :aria-current="activeCategory === category.id ? 'true' : undefined"
                @click="activeCategory = category.id"
              >
                {{ category.label }}
              </button>
            </li>
          </ul>
        </nav>

        <div class="flex-1 animate-fade-in">
          <div v-for="category in categories" :key="category.id" v-show="activeCategory === category.id">
            <h2 class="mb-6">{{ category.label }}</h2>
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

      <div class="mt-12 flex flex-col items-center gap-4 text-center animate-fade-in">
        <p class="text-slate-600">Didn't find what you're looking for?</p>
        <NuxtLink to="/contact" class="btn-primary">
          <Icon name="i-lucide-message-circle" class="h-5 w-5" aria-hidden="true" />
          Contact us
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
      { question: 'How do I book an appointment?', answer: 'You can book online through our website, call our appointment line on 0704 503 3529, or use the patient portal. Online booking is available at any time for most clinics.' },
      { question: 'Can I book a same-day appointment?', answer: 'Yes, we keep same-day appointments for urgent needs. Call our appointment line early in the day for the best availability, or check online for real-time openings.' },
      { question: 'What do I need to bring to my appointment?', answer: 'Bring a photo ID, your HMO or insurance card if you have one, a list of your current medicines, and any relevant records or test results. New patients should arrive 15 minutes early.' },
      { question: 'How do I cancel or reschedule?', answer: 'You can cancel or reschedule online through the patient portal, or by calling our appointment line. Please give at least 24 hours notice so the slot can be offered to another patient.' },
      { question: 'Do you offer virtual visits?', answer: 'Yes, we offer virtual appointments for many clinics, including general medicine, follow-ups, mental health and some specialist consultations. Check availability when booking.' },
    ],
  },
  {
    id: 'insurance',
    label: 'Insurance & Billing',
    faqs: [
      { question: 'What insurance plans do you accept?', answer: 'We accept most major HMOs and health insurance plans, including NHIA-registered schemes, and we welcome self-paying patients. Call our billing team on 0704 503 3530 to confirm your plan before your visit.' },
      { question: 'How can I pay my bill?', answer: 'Pay online through the patient portal, by bank transfer or card, or in person at our billing desk. We offer payment plans and financial assistance for patients who qualify.' },
      { question: 'What if I don\'t have insurance?', answer: 'We offer a self-pay discount and financial assistance based on need. Our financial counsellors can help you explore your options, including your HMO and the National Health Insurance Authority (NHIA) scheme.' },
      { question: 'How do I get an itemised bill?', answer: 'Itemised statements are available in the patient portal under "Billing", or can be requested by calling our billing team on 0704 503 3530.' },
    ],
  },
  {
    id: 'records',
    label: 'Medical Records',
    faqs: [
      { question: 'How do I access my medical records?', answer: 'Use the patient portal for immediate access to visit summaries, test results and clinic notes. For complete records, submit a records request form online or contact our Health Information team.' },
      { question: 'Can I share records with another hospital?', answer: 'Yes, you can authorise the release of your records to another hospital or clinician through the patient portal, or by completing a release-of-information form. We can send records electronically or by post.' },
      { question: 'How long does it take to get records?', answer: 'Portal access is immediate. Formal records requests usually take 5-10 working days. Requests needed for continuing care are prioritised.' },
      { question: 'Is there a fee for medical records?', answer: 'There is no fee for records sent directly to another hospital or clinician for continuing care. Personal copies may attract a small administrative fee.' },
    ],
  },
  {
    id: 'general',
    label: 'General Information',
    faqs: [
      { question: 'What are your visiting hours?', answer: 'General visiting hours are 8am to 8pm daily. The ICU and some specialty units keep different hours, so please check with the ward. Children under 12 must be accompanied by an adult.' },
      { question: 'Where can I park?', answer: 'Parking is available in our main car park and surface lots at both campuses. Designated accessible parking is provided at every entrance.' },
      { question: 'Do you have a pharmacy on-site?', answer: 'Yes, our pharmacy is located in the main lobby at Victoria Island and at the Ikoyi Specialist Centre. Hours: Mon–Fri, 7am-8pm; Sat, 9am-5pm; Sun, 10am-2pm. Prescription delivery is available.' },
      { question: 'Is there a cafeteria or food options?', answer: 'Our main cafeteria serves breakfast, lunch and dinner daily, and coffee is available in the main lobby and at the Ikoyi Specialist Centre. Vending machines are available 24/7.' },
      { question: 'How do I provide feedback or file a complaint?', answer: 'We welcome feedback. Use the contact form on our website, call patient relations on 0704 503 3532, or speak to any member of staff. All concerns are reviewed promptly.' },
    ],
  },
]
</script>
