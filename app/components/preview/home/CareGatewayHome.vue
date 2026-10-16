<script setup lang="ts">
import PreviewDemoContentNotice from '../DemoContentNotice.vue'
import { PREVIEW_DOCTORS } from '~/data/previewDoctors'
import { PREVIEW_DEPARTMENTS } from '~/data/previewDepartments'

const props = withDefaults(defineProps<{ basePath?: string }>(), { basePath: '/previews/care-gateway' })
const base = computed(() => props.basePath)
const search = ref('')
const departmentColumns = [PREVIEW_DEPARTMENTS.slice(0, 7), PREVIEW_DEPARTMENTS.slice(7)]

function searchDoctors() {
  return navigateTo({ path: `${base.value}/doctors`, query: search.value.trim() ? { q: search.value.trim() } : {} })
}