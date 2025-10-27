export function Header() {
  return `
    <!-- Header Section -->
    <section id="header" class="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div class="max-w-4xl w-full">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
          <!-- Profile Picture -->
          <div class="flex-shrink-0">
            <img src="/sam_cover.png" alt="Sam Pittman" class="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-green-700 dark:border-green-600">
          </div>

          <!-- Name and Info -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Sam Pittman
            </h1>
            <p class="text-xl md:text-2xl text-green-700 dark:text-green-500 font-semibold mb-4">
              Senior Software Engineer
            </p>
            <p class="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6 max-w-2xl">
              <span class="text-orange-600 dark:text-orange-500 font-semibold">Problem solver</span> passionate about delivering top-tier engineering guided by technical expertise and business acumen
            </p>

            <!-- Current Position -->
            <div class="flex items-center justify-center md:justify-start gap-2 mb-6">
              <svg class="w-5 h-5 text-red-600 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-lg text-neutral-600 dark:text-neutral-400">Ann Arbor, Michigan</span>
            </div>

            <!-- Contact Links -->
            <div class="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="mailto:sam.r.pittman@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors shadow-md hover:shadow-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email
              </a>
              <a href="https://linkedin.com/in/samuel-pittman" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-md hover:shadow-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/spittma4" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-md hover:shadow-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="mt-16 flex justify-center">
          <a href="#about" class="text-neutral-500 dark:text-neutral-400 hover:text-green-700 dark:hover:text-green-500 transition-colors animate-bounce">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
}
