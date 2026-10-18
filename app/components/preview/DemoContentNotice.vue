<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
</script>

<template>
  <p class="flex items-start gap-2.5 text-sm leading-6 text-slate-600" :class="compact ? '' : 'border-y border-slate-200 py-3'">
    <Icon name="i-lucide-info" class="mt-0.5 h-4 w-4 shrink-0 text-medical-700" aria-hidden="true" />
    <span><strong class="font-semibold text-slate-800">Demonstration content:</strong> Clinician names and profile details are fictional examples, not verified clinician records.</span>
  </p>
</template>
