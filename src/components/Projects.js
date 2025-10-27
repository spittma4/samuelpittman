export function Projects() {
  return `
    <!-- Projects Section -->
    <section id="projects" class="min-h-screen flex items-start justify-center px-4 pt-16 pb-32 bg-neutral-50 dark:bg-neutral-900 border-t-4 border-green-700 dark:border-green-600">
      <div class="max-w-4xl w-full">
        <div class="mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 border-l-4 border-green-700 dark:border-green-600 pl-6">
            Projects & Ventures
          </h2>
        </div>

        <div class="space-y-6">
          <template x-for="project in projects" :key="project.title">
            <div class="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow">
              <h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3" x-text="project.title"></h3>
              <p class="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed" x-text="project.description"></p>
              <div class="mt-4 flex flex-wrap gap-2">
                <template x-for="tag in project.tags" :key="tag">
                  <span class="px-3 py-1 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-300 text-sm rounded-md border border-green-200 dark:border-green-700" x-text="tag"></span>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  `
}
