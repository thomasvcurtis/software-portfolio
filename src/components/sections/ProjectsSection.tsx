import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen px-8 py-20 relative z-10">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Projects - Section Header */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-1 h-8 bg-black dark:bg-white transform -translate-y-1/2" />
            <h2 className="text-4xl font-bold text-black dark:text-white">
              Projects
            </h2>
          </div>
        </div>

        {/* Projects - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Card - Portfolio */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-full">
            {/* Card - Header Information */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-medium text-black dark:text-white">
                Personal Software Portfolio
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A software portfolio showcasing my journey as a developer, built
                with modern web technologies and clean design principles.
              </p>
            </div>

            {/* Card - Technology Stack */}
            <div className="p-6 pt-0 space-y-6">
              {/* Stack - Framework & Libraries */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  FRAMEWORK & LIBRARIES
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                    Next.js 15
                  </span>
                  <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                    React
                  </span>
                </div>
              </div>

              {/* Stack - Languages */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  LANGUAGES
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Stack - Styling */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  STYLING
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Card - Action Links */}
            <div className="p-6 pt-0 flex gap-4 mt-auto">
              <Link
                href="https://github.com/thomasvcurtis/software-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                View Source →
              </Link>
              <Link
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Visit Site →
              </Link>
            </div>
          </div>

          {/* Space for Additional Projects */}
        </div>
      </div>
    </section>
  );
}
