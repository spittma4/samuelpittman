export function About() {
  return `
    <!-- About Section -->
    <section id="about" class="min-h-screen flex items-start justify-center px-4 pt-16 pb-32 bg-white dark:bg-neutral-800 border-t-4 border-green-700 dark:border-green-600">
      <div class="max-w-4xl w-full">
        <div class="mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 border-l-4 border-green-700 dark:border-green-600 pl-6">
            About
          </h2>
        </div>

        <div class="space-y-12">

          <!-- What I Do -->
          <div>
            <h3 class="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">
              What I Do
            </h3>
            <p class="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I specialize in <span class="text-green-700 dark:text-green-500 font-semibold">building scalable web applications</span> from concept to production and everywhere in between. My expertise lies in the Laravel ecosystem, where I have proven experience architecting and developing complex business systems, high-performance APIs, and data-intensive applications that handle real-world scale.
            </p>
          </div>

          <!-- How I Work -->
          <div>
            <h3 class="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">
              How I Work
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div class="flex items-start justify-between mb-2">
                  <h4 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Full Ownership
                  </h4>
                  <span class="text-green-700 dark:text-green-500" x-html="getIcon('shield', 'w-7 h-7')"></span>
                </div>
                <p class="text-neutral-700 dark:text-neutral-300">
                  I have experience taking projects from initial requirements through deployment and beyond, I know how to ship projects! 🚢
                </p>
              </div>
              <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div class="flex items-start justify-between mb-2">
                  <h4 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Laravel + Livewire Specialist
                  </h4>
                  <span class="text-green-700 dark:text-green-500" x-html="getIcon('laravel', 'w-7 h-7')"></span>
                </div>
                <p class="text-neutral-700 dark:text-neutral-300">
                  Deep expertise in the Laravel ecosystem, building reactive, modern applications that leverage Livewire for exceptional user experiences and 
                  fast pace of development.
                </p>
              </div>
              <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div class="flex items-start justify-between mb-2">
                  <h4 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Pragmatic Solutions
                  </h4>
                  <span class="text-green-700 dark:text-green-500" x-html="getIcon('lightbulb', 'w-7 h-7')"></span>
                </div>
                <p class="mb-2">
                  I build what you <span class="text-green-700 dark:text-green-500 font-semibold">need.</span>
                </p>
                <p class="text-neutral-700 dark:text-neutral-300">
                  I balance technical excellence with business needs, allowing me to deliver solutions tailored to the use case and needs of the business.
                </p>
              </div>
              <div class="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <div class="flex items-start justify-between mb-2">
                  <h4 class="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    API's Built for Scale
                  </h4>
                  <span class="text-green-700 dark:text-green-500" x-html="getIcon('trendingup', 'w-7 h-7')"></span>
                </div>
                <p class="text-neutral-700 dark:text-neutral-300">
                  I architect systems that handle real-world growth, from database optimization to API design that performs under load.
                </p>
              </div>
            </div>
          </div>

          <!-- Beyond Code -->
          <div>
            <h3 class="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">
              Beyond Code
            </h3>
            <div class="space-y-4">
              <div class="flex gap-4 items-start">
                <svg class="w-6 h-6 text-green-700 dark:text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <div>
                  <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Technical Leadership
                  </h4>
                  <p class="text-neutral-700 dark:text-neutral-300">
                    I can work effectively with engineers and stakeholders, mentor engineers, lead code reviews, and establish best practices that elevate entire teams.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <svg class="w-6 h-6 text-green-700 dark:text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <div>
                  <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Process Optimization
                  </h4>
                  <p class="text-neutral-700 dark:text-neutral-300">
                    I identify bottlenecks and implement workflows that increase team velocity and code quality.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <svg class="w-6 h-6 text-green-700 dark:text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <div>
                  <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Stakeholder Communication
                  </h4>
                  <p class="text-neutral-700 dark:text-neutral-300">
                    I translate technical complexity into clear business value, ensuring alignment across all levels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Stack -->
          <div>
            <h3 class="text-3xl font-bold text-green-800 dark:text-green-400 mb-6">
              Tech Stack & Skills
            </h3>
            <div class="flex flex-wrap gap-3">
              <template x-for="tech in techStack" :key="tech.label">
                <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium border"
                      :class="tech.featured ?
                        'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700' :
                        'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-600'">
                  <span x-html="getIcon(tech.icon)"></span>
                  <span x-text="tech.label"></span>
                </span>
              </template>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}
