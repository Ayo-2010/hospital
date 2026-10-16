<template>
  <div class="card-interactive group">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-3 flex-wrap mb-2">
          <h3 class="font-semibold text-slate-900 dark:text-white">{{ job.title }}</h3>
          <span v-if="job.featured" class="badge badge-warm">Featured</span>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span class="flex items-center gap-1">
            <Icon name="i-lucide-building-2" class="h-4 w-4" />
            {{ job.department }}
          </span>
          <span class="flex items-center gap-1">
            <Icon name="i-lucide-map-pin" class="h-4 w-4" />
            {{ job.location }}
          </span>
          <span class="flex items-center gap-1">
            <Icon name="i-lucide-clock" class="h-4 w-4" />
            {{ job.type === 'full-time' ? 'Full-Time' : job.type === 'part-time' ? 'Part-Time' : 'Per Diem' }}
          </span>
          <span class="flex items-center gap-1">
            <Icon name="i-lucide-sun-moon" class="h-4 w-4" />
            {{ job.shift }}
          </span>
        </div>
      </div>
      <div class="flex items-center gap-3 sm:ml-4">
        <div class="text-right hidden sm:block">
          <p class="text-xs text-slate-500">Posted</p>
          <p class="text-sm font-medium text-slate-900 dark:text-white">{{ formatDate(job.posted) }}</p>
        </div>
        <UButton color="medical" size="sm" class="whitespace-nowrap">
          Apply Now
          <Icon name="i-lucide-arrow-right" class="h-4 w-4" />
        </UButton>
      </div>
    </div>
    <div class="px-5 pb-5 pt-0 border-t border-slate-200 dark:border-slate-700">
      <p class="text-sm text-slate-600 dark:text-slate-400">Experience: {{ job.experience }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  job: {
    id: string
    title: string
    department: string
    location: string
    type: 'full-time' | 'part-time' | 'per-diem'
    shift: string
    experience: string
    posted: string
    featured: boolean
  }
}>()

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
