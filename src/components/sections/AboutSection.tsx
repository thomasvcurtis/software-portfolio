export function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-8 py-20 relative z-10">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* About - Introduction Block */}
        <div className="space-y-6">
          {/* Section Title with Decorative Line */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-1 h-8 bg-black dark:bg-white transform -translate-y-1/2" />
            <h2 className="text-4xl font-bold text-black dark:text-white">
              About Me
            </h2>
          </div>
          {/* About Content */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {"I'm"} Thomas Curtis, a full-stack developer with a unique
            background in martial arts—channeling discipline and precision into
            every project. I strive for continuous improvement in both code and
            character. After earning my B.S. in Software Engineering from
            Bowling Green State University, {"I've"} dedicated myself to
            crafting robust, innovative solutions that reflect my unwavering
            commitment to detail and excellence.
          </p>
        </div>

        {/* About - Technical Skills Block */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black dark:text-white">
            Technical Techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Frontend
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  React / Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Backend
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  Firebase
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  RESTful APIs
                </li>
              </ul>
            </div>

            {/* Database Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Database
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full"></span>
                  Firestore
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* About - Professional Journey Block */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black dark:text-white">
            Journey
          </h3>
          <div className="relative py-8">
            {/* Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Timeline Connector Line */}
              <div className="absolute left-4 right-4 top-12 h-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

              {/* Journey - Education Card */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                  <h4 className="text-lg font-medium text-black dark:text-white">
                    Software Engineering Graduate
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    April 2024
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    B.S. in Software Engineering from Bowling Green State
                    University
                  </p>
                </div>
              </div>

              {/* Journey - Internship Card */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                  <h4 className="text-lg font-medium text-black dark:text-white">
                    Software Engineering Intern
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Nov 2023 - July 2024
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Joined Actual Reality Technologies, a dynamic local startup,
                    contributing to innovative web development projects and
                    learning industry best practices.
                  </p>
                </div>
              </div>

              {/* Journey - Full-time Position Card */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                  <h4 className="text-lg font-medium text-black dark:text-white">
                    Full-Stack Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    July 2024 - Present
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Developing sophisticated web applications with AI
                    integration at Actual Reality Technologies, focusing on
                    innovative user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
