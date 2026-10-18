<template>
  <div class="flex min-h-screen">
    <aside
      class="hidden bg-medical-900 p-12 text-white lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center"
    >
      <div class="max-w-md text-center">
        <span class="mx-auto flex h-20 w-20 items-center justify-center rounded-xl bg-white/10">
          <Icon name="i-lucide-key-round" class="h-10 w-10" aria-hidden="true" />
        </span>
        <p class="mt-6 font-display text-3xl font-semibold tracking-tight">
          Reset your password
        </p>
        <p class="mt-4 text-medical-100">
          Enter the email address on your MedCore account and we will send you a secure link to
          choose a new password.
        </p>
      </div>
    </aside>

    <div class="flex flex-1 items-center justify-center bg-slate-50 px-4 py-12">
      <div class="w-full max-w-md">
        <div class="mb-8 text-center lg:hidden">
          <NuxtLink to="/" class="inline-flex items-center gap-3 text-medical-900">
            <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-700 text-white">
              <Icon name="i-lucide-heart-pulse" class="h-5 w-5" aria-hidden="true" />
            </span>
            <span class="font-display text-lg font-semibold">MedCore Hospital</span>
          </NuxtLink>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
          <template v-if="sent">
            <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-healing-50 text-healing-700">
              <Icon name="i-lucide-mail-check" class="h-6 w-6" aria-hidden="true" />
            </span>
            <h1 class="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-950">
              Check your email
            </h1>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              If an account exists for <strong class="font-semibold text-slate-900">{{ submittedEmail }}</strong>,
              we have sent a password-reset link. The link expires in 30 minutes.
            </p>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Did not get the email? Check your spam folder or
              <button type="button" class="link" @click="sent = false">try another address</button>.
            </p>
            <NuxtLink to="/auth/login" class="btn-secondary mt-6 w-full">
              <Icon name="i-lucide-arrow-left" class="h-4 w-4" aria-hidden="true" />
              Back to sign in
            </NuxtLink>
          </template>

          <template v-else>
            <h1 class="font-display text-3xl font-semibold tracking-tight text-slate-950">
              Forgot your password?
            </h1>
            <p class="mt-2 text-sm text-slate-600">
              We will email you a link to reset it.
            </p>

            <form class="mt-6 space-y-5" @submit.prevent="handleSubmit">
              <div>
                <label for="reset-email" class="label-field">Email address</label>
                <input
                  id="reset-email"
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="input-field"
                  placeholder="name@example.com"
                >
              </div>

              <UButton type="submit" block color="primary" :loading="loading">
                Send reset link
              </UButton>

              <p class="text-center text-sm text-slate-600">
                Remembered it?
                <NuxtLink to="/auth/login" class="link">Back to sign in</NuxtLink>
              </p>
            </form>
          </template>
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
useHead({ title: 'Reset Password | MedCore Hospital' })

const email = ref('')
const submittedEmail = ref('')
const sent = ref(false)
const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  try {
    await $fetch('/api/v1/auth/forgot-password', {
      method: 'POST',
      body: { email: email.value },
    }).catch(() => {
      // The endpoint only acknowledges the request; an unknown address is not
      // revealed, so a failure here is treated the same as a success.
    })
    submittedEmail.value = email.value
    sent.value = true
  } finally {
    loading.value = false
  }
}
</script>
