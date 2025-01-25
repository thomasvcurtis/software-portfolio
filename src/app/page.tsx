import Image from "next/image";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      {/* ===== HERO SECTION ===== */}
      <section className="h-screen flex flex-col justify-center px-8 snap-start">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero - Title Block */}
          <div className="relative">
            {/* Decorative Line */}
            <div className="absolute -left-4 top-1/2 w-1 h-16 bg-black dark:bg-white transform -translate-y-1/2" />
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-black dark:text-white font-geist-sans leading-tight">
              Harnessing the Zen of{" "}
              <span className="text-red-600 dark:text-red-400">Martial Arts in Code</span>
            </h1>
          </div>

          {/* Hero - Subtitle Block */}
          <div className="border-l-4 border-black dark:border-white pl-4">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Thomas Curtis,{" "}
              <span className="text-black dark:text-white">full-stack developer</span> balancing
              creativity and precision.
            </h2>
          </div>

          {/* Hero - Description Block */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Drawing on the principles of martial arts - 
            {/* Core Values */}
            <span className="text-black dark:text-white font-medium">Patience</span>,{" "}
            <span className="text-black dark:text-white font-medium">Perseverance</span>,{" "}
            <span className="text-black dark:text-white font-medium">Practice Hard</span>,{" "}
            <span className="text-black dark:text-white font-medium">Practice exactly the way you want to perform</span>, and{" "}
            <span className="text-black dark:text-white font-medium">Meditation</span> — 
            I create seamless digital experiences that flow effortlessly for end users.
          </p>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="h-screen px-8 py-20 bg-gray-50 dark:bg-gray-900 snap-start">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* About - Introduction Block */}
          <div className="space-y-6">
            {/* Section Title with Decorative Line */}
            <div className="relative">
              <div className="absolute -left-4 top-1/2 w-1 h-8 bg-black dark:bg-white transform -translate-y-1/2" />
              <h2 className="text-4xl font-bold text-black dark:text-white">About Me</h2>
            </div>
            {/* About Content */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Thomas Curtis, a full-stack developer with a unique background in martial arts—channeling discipline and precision into every project. Guided by the principles of patience, perseverance, hard practice, performing exactly as I train, and mindful meditation, I strive for continuous improvement in both code and character. After earning my B.S. in Software Engineering from Bowling Green State University, I've dedicated myself to crafting robust, innovative solutions that reflect my unwavering commitment to detail and excellence.
            </p>
          </div>

          {/* About - Technical Skills Block */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-black dark:text-white">Technical Techniques</h3>
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
            <h3 className="text-2xl font-medium text-black dark:text-white">Journey</h3>
            <div className="relative py-8">
              {/* Timeline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Timeline Connector Line */}
                <div className="absolute left-4 right-4 top-12 h-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                
                {/* Journey - Education Card */}
                <div className="relative">
                  <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                    <h4 className="text-lg font-medium text-black dark:text-white">Software Engineering Graduate</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">April 2024</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      B.S. in Software Engineering from Bowling Green State University
                    </p>
                  </div>
                </div>

                {/* Journey - Internship Card */}
                <div className="relative">
                  <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                    <h4 className="text-lg font-medium text-black dark:text-white">Software Engineering Intern</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Nov 2023 - July 2024</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Joined Actual Reality Technologies, a dynamic local startup, contributing to innovative web development projects and learning industry best practices.
                    </p>
                  </div>
                </div>

                {/* Journey - Full-time Position Card */}
                <div className="relative">
                  <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                    <h4 className="text-lg font-medium text-black dark:text-white">Full-Stack Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">July 2024 - Present</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Developing sophisticated web applications with AI integration at Actual Reality Technologies, focusing on innovative user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="min-h-screen px-8 py-20 snap-start">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Projects - Section Header */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 w-1 h-8 bg-black dark:bg-white transform -translate-y-1/2" />
              <h2 className="text-4xl font-bold text-black dark:text-white">Projects</h2>
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
                  A minimalist portfolio showcasing my journey as a developer, built with modern web technologies and clean design principles.
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
                      Next.js 14
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
                <a 
                  href="https://github.com/yourusername/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  View Source →
                </a>
                <a 
                  href="https://yourportfolio.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  Visit Site →
                </a>
              </div>
            </div>

            {/* Space for Additional Projects */}
          </div>
        </div>
      </section>
    </main>
  );
}
