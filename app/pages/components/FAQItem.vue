<template>
  <div class="card overflow-hidden">
    <button
      @click="open = !open"
      class="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-medical-500 focus:ring-offset-2 rounded-xl"
      :aria-expanded="open"
    >
      <h3 class="font-medium text-slate-900 dark:text-white pr-4">{{ question }}</h3>
      <Icon
        :name="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
        class="h-5 w-5 text-slate-400 transition-transform duration-200 shrink-0"
      />
    </button>
    <TransitionRoot
      :show="open"
      enter="transition duration-300 ease-out"
      enter-from="opacity-0 max-h-0"
      enter-to="opacity-100 max-h-64"
      leave="transition duration-200 ease-in"
      leave-from="opacity-100 max-h-64"
      leave-to="opacity-0 max-h-0"
    >
      <div class="overflow-hidden">
        <div class="px-5 pb-5 pt-0 border-t border-slate-200 dark:border-slate-700">
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ answer }}</p>
        </div>
      </div>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  question: string
  answer: string
}>()

const open = ref(false)
</script>
