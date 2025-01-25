import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col justify-center px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero - Title Block */}
          <div className="relative">
            {/* Decorative Line */}
            <div className="absolute -left-4 top-1/2 w-1 h-16 bg-black dark:bg-white transform -translate-y-1/2" />
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-black dark:text-white font-geist-sans leading-tight">
              Harnessing the Zen of{" "}
              <span className="text-red-600 dark:text-red-400">
                Martial Arts in Code
              </span>
            </h1>
          </div>

          {/* Hero - Subtitle Block */}
          <div className="border-l-4 border-black dark:border-white pl-4">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Thomas Curtis,{" "}
              <span className="text-black dark:text-white">
                full-stack developer
              </span>{" "}
              balancing creativity and precision.
            </h2>
          </div>

          {/* Hero - Description Block */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Drawing on the principles of martial arts -{/* Core Values */}
            <span className="text-black dark:text-white font-medium">
              Patience
            </span>
            ,{" "}
            <span className="text-black dark:text-white font-medium">
              Perseverance
            </span>
            ,{" "}
            <span className="text-black dark:text-white font-medium">
              Practice Hard
            </span>
            ,{" "}
            <span className="text-black dark:text-white font-medium">
              Practice exactly the way you want to perform
            </span>
            , and{" "}
            <span className="text-black dark:text-white font-medium">
              Meditation
            </span>{" "}
            — I create seamless digital experiences that flow effortlessly for
            end users.
          </p>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="min-h-screen px-8 py-20 bg-gray-50 dark:bg-gray-900">
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
              I'm Thomas Curtis, a full-stack developer with a unique background
              in martial arts—channeling discipline and precision into every
              project. Guided by the principles of patience, perseverance, hard
              practice, performing exactly as I train, and mindful meditation, I
              strive for continuous improvement in both code and character.
              After earning my B.S. in Software Engineering from Bowling Green
              State University, I've dedicated myself to crafting robust,
              innovative solutions that reflect my unwavering commitment to
              detail and excellence.
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
                      Joined Actual Reality Technologies, a dynamic local
                      startup, contributing to innovative web development
                      projects and learning industry best practices.
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

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="min-h-screen px-8 py-20">
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
                  A minimalist portfolio showcasing my journey as a developer,
                  built with modern web technologies and clean design
                  principles.
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

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="min-h-screen px-8 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Contact - Section Header */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 w-1 h-8 bg-black dark:bg-white transform -translate-y-1/2" />
              <h2 className="text-4xl font-bold text-black dark:text-white">
                Let's Connect
              </h2>
            </div>
          </div>

          {/* Contact - Main Content */}
          <div className="space-y-12">
            {/* Contact - Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact - Left Column */}
              <div className="space-y-8">
                {/* Email Block */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-lg text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>

                {/* Location Block */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    LOCATION
                  </h3>
                  <div className="flex items-center gap-3">
                    {/* TODO: Add Ohio state icon/image */}
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-md">
                      {/* Placeholder for Ohio state icon */}
                    </div>
                    <span className="text-lg text-black dark:text-white">
                      Ohio, United States
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact - Right Column */}
              <div className="space-y-8">
                {/* Social Links */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    CONNECT
                  </h3>
                  <div className="flex gap-4">
                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/thomasvcurtis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      {/* TODO: Add LinkedIn icon */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group-hover:bg-gray-300 dark:group-hover:bg-gray-600">
                        {/* Placeholder for LinkedIn icon */}
                      </div>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/thomasvcurtis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      {/* TODO: Add GitHub icon */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group-hover:bg-gray-300 dark:group-hover:bg-gray-600">
                        {/* Placeholder for GitHub icon */}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      <footer className="px-8 py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer - Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-black dark:text-white">
                Thomas Curtis
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full-Stack Developer
              </p>
            </div>

            {/* Footer - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                QUICK LINKS
              </h3>
              <div className="flex flex-col space-y-2">
                <a 
                  href="#about" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Footer - Copyright */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                BUILT WITH
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                  Next 15
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                  Tailwind CSS
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 pt-4">
                © {new Date().getFullYear()} Thomas Curtis. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
