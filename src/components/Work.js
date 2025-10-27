export function Work() {
  return `
    <!-- Work Experience Section -->
    <section id="work" class="min-h-screen flex items-start justify-center px-4 pt-16 pb-48 bg-white dark:bg-neutral-800 border-t-4 border-green-700 dark:border-green-600">
      <div class="max-w-4xl w-full">
        <div class="mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 border-l-4 border-green-700 dark:border-green-600 pl-6">
            Work Experience
          </h2>
        </div>

        <div class="space-y-8">
          <template x-for="job in workExperience" :key="job.company">
            <div class="pl-6 pb-8"
                 :class="job.current ? 'border-l-4 border-green-700 dark:border-green-600' : 'border-l-4 border-neutral-400 dark:border-neutral-600'">
              <div class="flex items-start gap-4 mb-4">
                <img :src="job.logo" :alt="job.company + ' Logo'"
                     :class="job.logoClass || 'w-24 h-auto'"
                     class="flex-shrink-0 mt-1">
                <div class="flex-1">
                  <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100" x-text="job.role"></h3>
                    <span class="text-neutral-600 dark:text-neutral-400 font-medium" x-text="job.period"></span>
                  </div>
                  <p class="text-xl text-green-700 dark:text-green-500 font-semibold" x-text="job.company"></p>
                </div>
              </div>
              <ul class="space-y-3 text-lg text-neutral-700 dark:text-neutral-300">
                <template x-for="achievement in job.achievements" :key="achievement">
                  <li class="flex gap-3">
                    <span class="text-green-700 dark:text-green-500 flex-shrink-0">•</span>
                    <span x-text="achievement"></span>
                  </li>
                </template>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </section>
  `
}
