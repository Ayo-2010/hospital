<script setup lang="ts">
import type { DemoClinician } from '~/types/preview'

const props = withDefaults(defineProps<{ doctor: DemoClinician; tone?: 'blue' | 'slate' | 'green' }>(), { tone: 'blue' })
const initials = computed(() => props.doctor.name.replace(/^Dr\.\s*/, '').split(/\s+/).map((part) => part[0] ?? '').join('').slice(0, 2).toUpperCase())
const tones = { blue: 'bg-medical-100 text-medical-900', slate: 'bg-slate-200 text-slate-700', green: 'bg-healing-100 text-healing-900' }
</script>

<template>
  <img
    v-if="doctor.image"
    :src="doctor.image"
    :alt="doctor.name"
    class="h-14 w-14 shrink-0 rounded-full border border-slate-200 bg-slate-100 object-cover"
    width="56"
    height="56"
    loading="lazy"
    decoding="async"
  >
  <span
    v-else
    aria-hidden="true"
    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-base font-semibold"
    :class="tones[tone]"
  >{{ initials }}</span>
</template>
