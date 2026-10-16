<template>
  <section class="section" aria-labelledby="cta-heading">
    <div class="container-main">
      <div class="gradient-border p-1">
        <div class="rounded-2xl bg-gradient-to-r from-medical-600 via-medical-700 to-medical-800 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-10" aria-hidden="true">
            <div class="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl" />
            <div class="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-healing-300 blur-3xl" />
          </div>

          <div class="relative animate-fade-in animate-slide-up">
            <span class="inline-block badge mb-6" style="background: rgba(255,255,255,0.2); color: white; border-color: rgba(255,255,255,0.3)">
              Ready to Schedule Your Visit?
            </span>
            <h2 id="cta-heading" class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Experience the MedCore Difference
            </h2>
            <p class="text-lg sm:text-xl text-medical-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 50,000+ patients who trust us for their healthcare needs. Book an appointment online or call us today.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NuxtLink to="/appointments/book" class="btn-primary bg-white text-medical-700 hover:bg-medical-50 text-lg px-10 py-4 shadow-lg">
                <Icon name="i-lucide-calendar-plus" class="h-5 w-5" />
                Book Appointment Online
              </NuxtLink>
              <a href="tel:+11234567890" class="btn-secondary border-white/30 text-white hover:bg-white/10 dark:hover:bg-white/10 text-lg px-10 py-4">
                <Icon name="i-lucide-phone" class="h-5 w-5" />
                Call: +1 (123) 456-7890
              </a>
            </div>

            <div class="mt-10 flex flex-wrap items-center justify-center gap-6 text-medical-200">
              <div class="flex items-center gap-2">
                <Icon name="i-lucide-shield-check" class="h-5 w-5" />
                <span>Same-day appointments available</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="i-lucide-credit-card" class="h-5 w-5" />
                <span>Most insurance accepted</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="i-lucide-map-pin" class="h-5 w-5" />
                <span>Convenient location with parking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>