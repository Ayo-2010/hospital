<template>
  <section class="section" aria-labelledby="health-categories-heading">
    <div class="container-main">
      <div class="flex flex-col lg:flex-row gap-8">
        <nav class="lg:w-64 flex-shrink-0 animate-fade-in animate-slide-up" aria-label="Health Topics">
          <ul class="space-y-1">
            <li v-for="category in categories" :key="category.id">
              <button
                @click="activeCategory = category.id"
                class="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                :class="activeCategory === category.id
                  ? 'bg-medical-600 text-white shadow-soft'
                  : 'text-slate-600 hover:text-medical-600 hover:bg-medical-50 dark:text-slate-300 dark:hover:text-medical-400 dark:hover:bg-medical-900/30'"
              >
                {{ category.label }} ({{ category.articles.length }})
              </button>
            </li>
          </ul>
        </nav>

        <div class="flex-1 animate-fade-in animate-slide-up stagger-1">
          <div v-for="category in categories" :key="category.id" v-show="activeCategory === category.id">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">{{ category.label }}</h2>
              <NuxtLink :to="`/health-information/${category.id}`" class="text-sm font-medium text-medical-600 hover:underline">
                View All
                <Icon name="i-lucide-chevron-right" class="h-4 w-4 inline" />
              </NuxtLink>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <HealthArticleCard
                v-for="article in category.articles"
                :key="article.slug"
                :title="article.title"
                :excerpt="article.excerpt"
                :image="article.image"
                :author="article.author"
                :date="article.date"
                :readTime="article.readTime"
                :category="article.category"
                :slug="article.slug"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center animate-fade-in animate-slide-up stagger-2">
        <p class="text-slate-600 dark:text-slate-400 mb-4">Looking for something specific?</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input type="search" placeholder="Search health topics..." class="input-field w-full sm:w-64" />
          <NuxtLink to="/health-information/all" class="btn-primary">
            Browse All Articles
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HealthArticleCard from './HealthArticleCard.vue'

const activeCategory = ref('wellness')

const categories = [
  {
    id: 'wellness',
    label: 'Wellness & Prevention',
    articles: [
      { title: '10 Tips for a Healthier Heart', excerpt: 'Simple lifestyle changes that can significantly reduce your risk of cardiovascular disease.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80', author: 'Dr. Sarah Johnson', date: '2024-01-20', readTime: '5 min', category: 'Cardiology', slug: 'healthier-heart-tips' },
      { title: 'Building a Balanced Plate', excerpt: 'Nutrition fundamentals for optimal health at every age. Learn the plate method for easy meal planning.', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80', author: 'RDN Maria Chen', date: '2024-01-18', readTime: '7 min', category: 'Nutrition', slug: 'balanced-plate-guide' },
      { title: 'Exercise for Every Body', excerpt: 'Safe, effective exercise recommendations regardless of fitness level or chronic conditions.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', author: 'Dr. Robert Kim', date: '2024-01-15', readTime: '6 min', category: 'Sports Medicine', slug: 'exercise-for-every-body' },
    ],
  },
  {
    id: 'conditions',
    label: 'Conditions & Treatments',
    articles: [
      { title: 'Understanding Type 2 Diabetes', excerpt: 'Comprehensive guide to diagnosis, management, and living well with diabetes.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', author: 'Dr. Lisa Martinez', date: '2024-01-22', readTime: '8 min', category: 'Endocrinology', slug: 'understanding-diabetes' },
      { title: 'Managing Chronic Back Pain', excerpt: 'Non-surgical approaches to back pain relief including physical therapy, lifestyle changes, and when to see a specialist.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', author: 'Dr. James Wilson', date: '2024-01-19', readTime: '7 min', category: 'Orthopedics', slug: 'managing-back-pain' },
      { title: 'Breast Cancer Screening Guidelines', excerpt: 'Latest recommendations for mammograms, self-exams, and risk assessment by age and family history.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80', author: 'Dr. Amanda Foster', date: '2024-01-17', readTime: '6 min', category: 'Oncology', slug: 'breast-cancer-screening' },
    ],
  },
  {
    id: 'mental-health',
    label: 'Mental Health',
    articles: [
      { title: 'Recognizing Anxiety & Depression', excerpt: 'Signs, symptoms, and when to seek professional help for common mental health conditions.', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&q=80', author: 'Dr. Jennifer Lee', date: '2024-01-21', readTime: '8 min', category: 'Psychiatry', slug: 'anxiety-depression-guide' },
      { title: 'Stress Management Techniques', excerpt: 'Evidence-based strategies for reducing stress and building resilience in daily life.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80', author: 'Dr. Christopher Brown', date: '2024-01-16', readTime: '5 min', category: 'Behavioral Health', slug: 'stress-management' },
    ],
  },
  {
    id: 'parenting',
    label: 'Parenting & Children',
    articles: [
      { title: 'Childhood Vaccination Schedule', excerpt: 'Complete guide to recommended vaccines from birth through adolescence.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', author: 'Dr. Emily Davis', date: '2024-01-23', readTime: '6 min', category: 'Pediatrics', slug: 'vaccination-schedule' },
      { title: 'When to Call the Pediatrician', excerpt: 'Fever, rashes, breathing issues - a parent\'s guide to knowing when to seek care.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80', author: 'Dr. Michelle Taylor', date: '2024-01-14', readTime: '7 min', category: 'Pediatrics', slug: 'when-to-call-pediatrician' },
    ],
  },
]
</script>