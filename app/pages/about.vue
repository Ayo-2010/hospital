<template>
  <div>
    <AboutHero />
    <AboutStats />
    <LeadershipTeam />
    <FacilitiesSection />
    <Accreditations />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' })
import AboutHero from './components/AboutHero.vue'
import MissionValues from './components/MissionValues.vue'
import AboutStats from './components/AboutStats.vue'
import LeadershipTeam from './components/LeadershipTeam.vue'
import FacilitiesSection from './components/FacilitiesSection.vue'
import Accreditations from './components/Accreditations.vue'
import CTASection from './components/CTASection.vue'

useHead({ title: 'About Us - MedCore HMS' })
</script>