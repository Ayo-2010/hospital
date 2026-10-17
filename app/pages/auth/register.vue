<template>
  <div class="flex min-h-screen">
    <aside
      class="hidden bg-medical-900 p-12 text-white lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center"
    >
      <div class="max-w-md text-center">
        <span class="mx-auto flex h-20 w-20 items-center justify-center rounded-xl bg-white/10">
          <Icon name="i-lucide-user-plus" class="h-10 w-10" aria-hidden="true" />
        </span>
        <p class="mt-6 font-display text-3xl font-semibold tracking-tight">
          Create your patient account
        </p>
        <p class="mt-4 text-medical-100">
          Register for secure access to your patient portal. Manage appointments, view records, and
          communicate with your care team.
        </p>
        <dl class="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <dt class="text-xs text-medical-200">Secure</dt>
            <dd class="mt-1 font-display text-2xl font-semibold">Protected</dd>
          </div>
          <div>
            <dt class="text-xs text-medical-200">Fast</dt>
            <dd class="mt-1 font-display text-2xl font-semibold">Setup</dd>
          </div>
          <div>
            <dt class="text-xs text-medical-200">Free</dt>
            <dd class="mt-1 font-display text-2xl font-semibold">Registration</dd>
          </div>
        </dl>
      </div>
    </aside>

    <div class="flex flex-1 items-center justify-center bg-slate-50 px-4 py-12">
      <div class="w-full max-w-lg">
        <div class="mb-8 text-center lg:hidden">
          <NuxtLink to="/" class="inline-flex items-center gap-3 text-medical-900">
            <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-700 text-white">
              <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
            </span>
            <span class="font-display text-lg font-semibold">MedCore Hospital</span>
          </NuxtLink>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
          <h1 class="font-display text-3xl font-semibold tracking-tight text-slate-950">
            Create your patient account
          </h1>
          <p class="mt-2 text-sm text-slate-600">
            Register for secure access to your patient portal and appointment booking.
          </p>

          <form class="mt-6 space-y-5" @submit.prevent="handleRegister">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label for="firstName" class="label-field">First name</label>
                <input
                  id="firstName"
                  v-model="firstName"
                  type="text"
                  autocomplete="given-name"
                  required
                  class="input-field"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label for="lastName" class="label-field">Last name</label>
                <input
                  id="lastName"
                  v-model="lastName"
                  type="text"
                  autocomplete="family-name"
                  required
                  class="input-field"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label for="email" class="label-field">Email address</label>
              <input
                id="email"
                v-model="email"
                type="email"
                autocomplete="email"
                required
                class="input-field"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label for="phone" class="label-field">Phone number</label>
              <input
                id="phone"
                v-model="phone"
                type="tel"
                autocomplete="tel"
                class="input-field"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label for="password" class="label-field">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                autocomplete="new-password"
                required
                class="input-field"
                placeholder="••••••••"
              />
              <p class="mt-1 text-xs text-slate-500">
                At least 8 characters with one number and one symbol.
              </p>
            </div>

            <div>
              <label for="confirmPassword" class="label-field">Confirm password</label>
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                autocomplete="new-password"
                required
                class="input-field"
                placeholder="••••••••"
              />
            </div>

            <div class="flex items-start gap-3">
              <input
                id="terms-agree"
                v-model="agreeToTerms"
                type="checkbox"
                required
                class="mt-1 h-4 w-4 rounded border-slate-300 text-medical-600 focus:ring-medical-500"
              />
              <label for="terms-agree" class="text-sm text-slate-600">
                I agree to the
                <NuxtLink to="/terms" class="link">Terms &amp; Conditions</NuxtLink>
                and
                <NuxtLink to="/privacy" class="link">Privacy Policy</NuxtLink>
              </label>
            </div>

            <UButton type="submit" block color="primary" :loading="loading">
              Create account
            </UButton>

            <p class="text-center text-sm text-slate-600">
              Already have an account?
              <NuxtLink to="/auth/login" class="link">Sign in</NuxtLink>
            </p>

            <p class="text-center text-xs text-slate-500">
              By registering, you agree to receive communications from MedCore Hospital.
            </p>
          </form>
        </div>

        <p class="mt-6 text-center text-xs text-slate-500">
          For a medical emergency, call <a class="font-semibold text-emergency-700" href="tel:112">112</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['guest'], layout: 'auth' })
useHead({ title: 'Create Patient Account | MedCore Hospital' })

const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeToTerms = ref(false)
const loading = ref(false)
const toast = useToast()

async function handleRegister() {
  if (password.value !== confirmPassword.value) {
    toast.add({ title: 'Passwords do not match', color: 'error' })
    return
  }
  loading.value = true
  try {
    await $fetch('/api/v1/auth/register', {
      method: 'POST',
      body: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      },
    })
    await router.push('/auth/login')
    toast.add({ title: 'Account created', description: 'Please sign in', color: 'success' })
  } catch (error: any) {
    toast.add({ title: error?.data?.statusMessage || 'Registration failed', color: 'error' })
  } finally {
    loading.value = false
  }
}
</script>
