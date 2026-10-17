<template>
  <div class="rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-card">
    <div class="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div class="min-w-0 flex-1">
        <div class="mb-2 flex flex-wrap items-center gap-3">
          <h3 class="font-display text-base font-semibold tracking-tight text-slate-950">{{ job.title }}</h3>
          <span v-if="job.featured" class="badge-medical">Featured</span>
        </div>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
          <span class="flex items-center gap-1.5">
            <Icon name="i-lucide-building" class="h-4 w-4 text-slate-400" aria-hidden="true" />
            {{ job.department }}
          </span>
          <span class="flex items-center gap-1.5">
            <Icon name="i-lucide-map-pin" class="h-4 w-4 text-slate-400" aria-hidden="true" />
            {{ job.location }}
          </span>
          <span class="flex items-center gap-1.5">
            <Icon name="i-lucide-clock" class="h-4 w-4 text-slate-400" aria-hidden="true" />
            {{ job.type === 'full-time' ? 'Full-Time' : job.type === 'part-time' ? 'Part-Time' : 'Per Diem' }}
          </span>
          <span class="flex items-center gap-1.5">
            <Icon name="i-lucide-sun-moon" class="h-4 w-4 text-slate-400" aria-hidden="true" />
            {{ job.shift }}
          </span>
        </div>
      </div>
      <div class="flex items-center gap-3 sm:ml-4">
        <div class="hidden text-right sm:block">
          <p class="text-xs text-slate-500">Posted</p>
          <p class="text-sm font-semibold text-slate-900">{{ formatDate(job.posted) }}</p>
        </div>
        <button type="button" class="btn-primary btn-sm">
          Apply Now
          <Icon name="i-lucide-arrow-right" class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div class="border-t border-slate-200 px-5 py-3">
      <p class="text-sm leading-6 text-slate-600">Experience: {{ job.experience }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  job: {
    id: string
    title: string
    department: string
    location: string
    type: 'full-time' | 'part-time' | 'per-diem'
    shift: string
    experience: string
    posted: string
    featured?: boolean
  }
}>()

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
