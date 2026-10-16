import { PREVIEW_DOCTORS } from '~/data/previewDoctors'
import type { DemoClinician, PreviewDirection } from '~/types/preview'

function queryString(value: unknown): string {
  return Array.isArray(value) ? String(value[0] ?? '') : String(value ?? '')
}

export function usePreviewDoctorFilters(direction: PreviewDirection) {
  const route = useRoute()
  const router = useRouter()
  let clearDepartmentDefault = false
  const search = ref(queryString(route.query.q))
  const specialty = ref(queryString(route.query.specialty))
  const location = ref(queryString(route.query.location))
  const language = ref(queryString(route.query.language) || (direction === 'department-led' ? 'English' : ''))
  const showAll = ref(false)

  const filteredDoctors = computed(() => {
    const term = search.value.trim().toLocaleLowerCase()
    return PREVIEW_DOCTORS.filter((doctor) => {
      const text = [doctor.name, doctor.specialty, doctor.location, ...doctor.languages].join(' ').toLowerCase()
      return (!term || text.includes(term))
        && (!specialty.value || doctor.specialty === specialty.value)
        && (!location.value || doctor.location === location.value)
        && (!language.value || doctor.languages.includes(language.value))
    })
  })

  const visibleDoctors = computed(() => showAll.value ? filteredDoctors.value : filteredDoctors.value.slice(0, 4))
  const specialties = computed(() => [...new Set(PREVIEW_DOCTORS.map((doctor) => doctor.specialty))].sort())
  const locations = computed(() => [...new Set(PREVIEW_DOCTORS.map((doctor) => doctor.location))].sort())
  const languages = computed(() => [...new Set(PREVIEW_DOCTORS.flatMap((doctor) => doctor.languages))].sort())
  const activeFilters = computed(() => [
    ...(search.value.trim() ? [{ key: 'q', label: `Name: ${search.value.trim()}` }] : []),
    ...(specialty.value ? [{ key: 'specialty', label: `Specialty: ${specialty.value}` }] : []),
    ...(location.value ? [{ key: 'location', label: `Location: ${location.value}` }] : []),
    ...(language.value ? [{ key: 'language', label: `Language: ${language.value}` }] : []),
  ])

  function removeFilter(key: string) {
    if (key === 'q') search.value = ''
    if (key === 'specialty') specialty.value = ''
    if (key === 'location') location.value = ''
    if (key === 'language') {
      clearDepartmentDefault = true
      language.value = ''
    }
    showAll.value = false
  }

  function clearFilters() {
    clearDepartmentDefault = true
    search.value = ''
    specialty.value = ''
    location.value = ''
    language.value = ''
    showAll.value = false
  }

  watch([search, specialty, location, language], () => {
    const query = { ...route.query }
    for (const key of ['q', 'specialty', 'location', 'language']) delete query[key]
    if (search.value.trim()) query.q = search.value.trim()
    if (specialty.value) query.specialty = specialty.value
    if (location.value) query.location = location.value
    if (language.value && !(direction === 'department-led' && language.value === 'English')) query.language = language.value
    void router.replace({ query })
  })

  watch(() => route.query, (query) => {
    const nextSearch = queryString(query.q)
    const nextSpecialty = queryString(query.specialty)
    const nextLocation = queryString(query.location)
    const nextLanguage = queryString(query.language) || (direction === 'department-led' && !clearDepartmentDefault ? 'English' : '')
    if (search.value !== nextSearch) search.value = nextSearch
    if (specialty.value !== nextSpecialty) specialty.value = nextSpecialty
    if (location.value !== nextLocation) location.value = nextLocation
    if (language.value !== nextLanguage) language.value = nextLanguage
  })

  function doctorsBySpecialty(doctors: DemoClinician[] = visibleDoctors.value) {
    return doctors.reduce<Record<string, DemoClinician[]>>((groups, doctor) => {
      ;(groups[doctor.specialty] ??= []).push(doctor)
      return groups
    }, {})
  }

  return {
    search,
    specialty,
    location,
    language,
    showAll,
    filteredDoctors,
    visibleDoctors,
    specialties,
    locations,
    languages,
    activeFilters,
    removeFilter,
    clearFilters,
    doctorsBySpecialty,
  }
}
