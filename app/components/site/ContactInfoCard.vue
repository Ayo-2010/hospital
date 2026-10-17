<template>
  <div class="card flex flex-col">
    <span class="flex h-11 w-11 items-center justify-center rounded-lg" :class="accent.iconBg">
      <Icon :name="icon" class="h-5 w-5" :class="accent.iconColor" aria-hidden="true" />
    </span>

    <h3 class="mt-4 font-display text-lg font-semibold tracking-tight text-slate-950">{{ title }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-600">{{ description }}</p>

    <ul class="mt-4 space-y-2.5">
      <li v-for="link in links" :key="link.label">
        <a
          v-if="isExternal(link.href)"
          :href="link.href"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="inline-flex items-center gap-1.5 text-sm"
          :class="linkClass"
        >
          {{ link.label }}
          <Icon v-if="link.href.startsWith('http')" name="i-lucide-external-link" class="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        <NuxtLink v-else :to="link.href" class="inline-flex items-center gap-1.5 text-sm" :class="linkClass">
          {{ link.label }}
          <Icon name="i-lucide-chevron-right" class="h-3.5 w-3.5" aria-hidden="true" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: string
  color: 'medical' | 'healing' | 'emergency' | 'warm'
  links: { label: string; href: string }[]
}>()

const accents = {
  medical: { iconBg: 'bg-medical-50', iconColor: 'text-medical-700' },
  healing: { iconBg: 'bg-healing-50', iconColor: 'text-healing-700' },
  emergency: { iconBg: 'bg-emergency-50', iconColor: 'text-emergency-700' },
  warm: { iconBg: 'bg-warm-50', iconColor: 'text-warm-700' },
} as const

const accent = computed(() => accents[props.color])

const linkClass = computed(() =>
  props.color === 'emergency'
    ? 'font-semibold text-emergency-700 underline-offset-4 transition-colors hover:text-emergency-800 hover:underline'
    : 'link',
)

function isExternal(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
}
</script>
