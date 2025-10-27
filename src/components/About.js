export function About() {
  return `
    <!-- About Section -->
    <section id="about" class="min-h-screen flex items-start justify-center px-4 pt-16 pb-32 bg-white dark:bg-neutral-800 border-t-4 border-green-700 dark:border-green-600">
      <div class="max-w-4xl w-full">
        <div class="mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 border-l-4 border-green-700 dark:border-green-600 pl-6">
            About
          </h2>
        </div>

        <div class="space-y-8">
          <div class="prose prose-lg max-w-none">
            <p class="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              First and foremost, I am a <span class="text-green-700 dark:text-green-500 font-semibold">problem solver</span>. Passionate about using my technical expertise and business acumen to deliver top-tier engineering, I bring a fresh perspective and vast skill set to any team.
            </p>
            <p class="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Beyond just writing software, I bring strategic value by optimizing processes, mentoring teams, and driving technical excellence. My expertise extends to building high-performance APIs, complex business systems, and delivering impactful solutions that go beyond development, all with high ownership.
            </p>
          </div>

          <!-- Tech Stack -->
          <div class="mt-12">
            <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Tech Stack & Skills</h3>
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
