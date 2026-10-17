<template>
  <HomeHero :base-path="basePath" />
  <HomeQuickActions :base-path="basePath" />
  <HomeDepartments />
  <HomeDoctors :base-path="basePath" />
  <HomeServices />
  <HomeAssurance />
  <HomeCta :base-path="basePath" />
</template>

<script setup lang="ts">
/**
 * The public homepage, composed from focused section components so each block
 * can be reviewed, reordered or reused. The /previews/care-gateway route renders
 * the same sections with a different base path for its links.
 */
import HomeHero from './HomeHero.vue'
import HomeQuickActions from './HomeQuickActions.vue'
import HomeDepartments from './HomeDepartments.vue'
import HomeDoctors from './HomeDoctors.vue'
import HomeServices from './HomeServices.vue'
import HomeAssurance from './HomeAssurance.vue'
import HomeCta from './HomeCta.vue'

withDefaults(defineProps<{ basePath?: string }>(), { basePath: '' })
</script>
