<template>
  <div class="min-h-[70vh] bg-slate-50">
    <div class="container-main py-7 sm:py-10">
      <nav aria-label="Breadcrumb" class="mb-5 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-medical-800">Home</NuxtLink>
        <span class="mx-2 text-slate-300">/</span>
        <span aria-current="page" class="font-medium text-slate-700">Surgeons</span>
      </nav>

      <div class="mb-10">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-[44px]">
          Our Surgical Team
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Board-certified surgeons at MedCore Hospital perform thousands of procedures each year,
          from routine operations to complex, life-saving surgeries using minimally invasive techniques.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SurgeonCard
          v-for="surgeon in surgeons"
          :key="surgeon.id"
          :name="surgeon.name"
          :title="surgeon.title"
          :specialty="surgeon.specialty"
          :image="surgeon.image"
          :experience="surgeon.experience"
          :bio="surgeon.bio"
          :slug="surgeon.slug"
        />
      </div>

      <section class="mt-14 border-t border-slate-200 bg-white py-14 sm:py-20">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Surgical Excellence</p>
          <h2 class="mt-3">Advanced Surgical Care</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            Our surgeons use advanced techniques including laparoscopic, robotic, and minimally
            invasive procedures for faster recovery and better outcomes.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <span class="inline-flex items-center gap-2 rounded-full bg-medical-50 px-4 py-2 text-sm font-medium text-medical-800">
              <Icon name="i-lucide-scissors" class="h-4 w-4" aria-hidden="true" />
              12 OR Suites
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              <Icon name="i-lucide-award" class="h-4 w-4" aria-hidden="true" />
              Board Certified
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-healing-50 px-4 py-2 text-sm font-medium text-healing-800">
              <Icon name="i-lucide-heart-pulse" class="h-4 w-4" aria-hidden="true" />
              24/7 Surgical Coverage
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import SurgeonCard from '~/components/site/SurgeonCard.vue'

const surgeons = [
  {
    id: '1',
    slug: 'james-anderson',
    name: 'Dr. James Anderson',
    title: 'Chief of Surgery',
    specialty: 'General Surgery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    experience: '22 years',
    bio: 'Pioneer in minimally invasive surgical techniques. Published 100+ peer-reviewed articles and leads the surgical residency program.',
  },
  {
    id: '2',
    slug: 'robert-kim',
    name: 'Dr. Robert Kim',
    title: 'Cardiothoracic Surgeon',
    specialty: 'Cardiothoracic Surgery',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    experience: '18 years',
    bio: 'Specialist in heart and lung surgery with expertise in complex cardiovascular procedures and transplant surgery.',
  },
  {
    id: '3',
    slug: 'susan-martinez',
    name: 'Dr. Susan Martinez',
    title: 'Orthopedic Surgeon',
    specialty: 'Orthopedic Surgery',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    experience: '15 years',
    bio: 'Joint replacement and sports medicine specialist. Performs 200+ joint replacements annually with excellent outcomes.',
  },
  {
    id: '4',
    slug: 'david-chen',
    name: 'Dr. David Chen',
    title: 'Neurosurgeon',
    specialty: 'Neurosurgery',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    experience: '14 years',
    bio: 'Brain and spine surgery specialist with expertise in minimally invasive neurosurgical techniques and tumor removal.',
  },
  {
    id: '5',
    slug: 'lisa-williams',
    name: 'Dr. Lisa Williams',
    title: 'Plastic Surgeon',
    specialty: 'Plastic & Reconstructive Surgery',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    experience: '11 years',
    bio: 'Reconstructive and aesthetic surgeon specializing in post-cancer reconstruction, burn care, and cosmetic procedures.',
  },
  {
    id: '6',
    slug: 'mark-thompson',
    name: 'Dr. Mark Thompson',
    title: 'Vascular Surgeon',
    specialty: 'Vascular Surgery',
    image: 'https://images.unsplash.com/photo-1506165006114-8142f0767898?w=400&q=80',
    experience: '16 years',
    bio: 'Vascular and endovascular surgeon treating arterial disease, aneurysms, and circulation disorders.',
  },
]

useHead({ title: 'Surgical Team | MedCore Hospital' })
</script>
