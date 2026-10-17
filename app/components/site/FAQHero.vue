<template>
  <section aria-labelledby="faq-hero-heading">
    <div class="container-main py-14 sm:py-20">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p class="eyebrow">Quick answers</p>
          <h1 id="faq-hero-heading" class="mt-3">Frequently asked questions</h1>
          <p class="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Find answers to common questions about our services, appointments, billing, insurance,
            and medical records at MedCore Hospital.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="#faq-categories" class="btn-primary btn-lg">
              <Icon name="i-lucide-list" class="h-5 w-5" aria-hidden="true" />
              Browse questions
            </NuxtLink>
            <a href="mailto:info@medcorehospital.com" class="btn-secondary btn-lg">
              <Icon name="i-lucide-mail" class="h-5 w-5" aria-hidden="true" />
              Ask a question
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=compress&cs=tinysrgb&w=1200&q=80"
          alt="Patient and care team in discussion"
          class="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-slate-100 object-cover object-center"
          width="720"
          height="540"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>
