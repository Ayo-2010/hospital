<template>
  <div class="flex min-h-screen">
    <div class="hidden lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center bg-gradient-to-br from-medical-700 via-medical-800 to-medical-900 p-12 text-white">
      <div class="max-w-md text-center">
        <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm mx-auto">
          <Icon name="i-lucide-heart-pulse" class="h-10 w-10" />
        </div>
        <h2 class="font-display text-3xl font-bold">Welcome to MedCore Hospital</h2>
        <p class="mt-4 text-medical-100">Access your patient portal to manage appointments, view records, and communicate with your care team.</p>
        <div class="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <p class="text-2xl font-bold">24/7</p>
            <p class="text-xs text-medical-200">ER Access</p>
          </div>
          <div>
            <p class="text-2xl font-bold">50k+</p>
            <p class="text-xs text-medical-200">Patients</p>
          </div>
          <div>
            <p class="text-2xl font-bold">4.9</p>
            <p class="text-xs text-medical-200">Rating</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-1 items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
      <div class="w-full max-w-md">
        <div class="mb-8 text-center lg:hidden">
          <NuxtLink to="/" class="inline-flex items-center gap-3 text-medical-900">
            <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-700 text-white">
              <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
            </span>
            <span class="font-display text-xl font-bold">MedCore Hospital</span>
          </NuxtLink>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 class="font-display text-3xl font-semibold text-slate-950">
            Sign in to your account
          </h1>
          <p class="mt-2 text-sm text-slate-600">
            Access your patient portal, appointments, and medical records.
          </p>

          <form @submit.prevent="handleLogin" class="mt-6 space-y-5">
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
              <label for="password" class="label-field">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                autocomplete="current-password"
                required
                class="input-field"
                placeholder="••••••••"
              />
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" v-model="rememberMe" class="h-4 w-4 rounded border-slate-300 text-medical-600" />
                Remember me
              </label>
              <NuxtLink to="/auth/forgot-password" class="text-sm font-semibold text-medical-800 hover:underline">
                Forgot password?
              </NuxtLink>
            </div>

            <UButton type="submit" block color="medical" :loading="loading">
              Sign in
            </UButton>

            <div class="relative my-5">
              <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div>
              <span class="relative inline-block px-3 text-xs uppercase text-slate-500">or</span>
            </div>

            <p class="text-center text-sm text-slate-600">
              Don't have an account?
              <NuxtLink to="/auth/register" class="font-semibold text-medical-800 hover:underline">
                Create a patient account
              </NuxtLink>
            </p>

            <p class="text-center text-xs text-slate-500">
              By signing in, you agree to our
              <NuxtLink to="/privacy" class="underline">Privacy Policy</NuxtLink>
              and
              <NuxtLink to="/terms" class="underline">Terms of Use</NuxtLink>
            </p>
          </form>
        </div>

        <div class="mt-6 text-center">
          <p class="text-xs text-slate-500">
            For a medical emergency, call <a class="font-semibold text-emergency-700" href="tel:911">911</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['guest'], layout: 'auth' })
useHead({ title: 'Sign In | MedCore Hospital' })

const router = useRouter()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)
const toast = useToast()

async function handleLogin() {
  loading.value = true
  try {
    await $fetch('/api/v1/auth/login', {
      method: 'POST',
      body: { email: email.value, password: password.value },
    })
    await router.push('/')
    toast.add({ title: 'Welcome back', color: 'success' })
  } catch (error: any) {
    toast.add({ title: error?.data?.statusMessage || 'Login failed', color: 'error' })
  } finally {
    loading.value = false
  }
}
</script>
