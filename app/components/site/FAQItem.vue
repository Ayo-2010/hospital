<template>
  <div class="card overflow-hidden p-0">
    <h3 class="text-base leading-6">
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 hover:bg-slate-50"
        :aria-expanded="open"
        :aria-controls="panelId"
        @click="open = !open"
      >
        <span class="text-base leading-6 font-semibold text-slate-950">{{ question }}</span>
        <Icon
          :name="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
          class="h-5 w-5 shrink-0 text-slate-400"
          aria-hidden="true"
        />
      </button>
    </h3>
    <div :id="panelId" :hidden="!open" class="border-t border-slate-200 px-5 py-4">
      <p class="text-sm leading-6 text-slate-600">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useId } from 'vue'

defineProps<{
  question: string
  answer: string
}>()

const open = ref(false)
const panelId = useId()
</script>
