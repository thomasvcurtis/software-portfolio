import Image from "next/image";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-8 snap-start">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Title */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-1 h-16 bg-black dark:bg-white transform -translate-y-1/2" />
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-black dark:text-white font-geist-sans leading-tight">
              Harnessing the Zen of{" "}
              <span className="text-red-600 dark:text-red-400">Martial Arts in Code</span>
            </h1>
          </div>

          {/* Hero Subtitle */}
          <div className="border-l-4 border-black dark:border-white pl-4">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Thomas Curtis,{" "}
              <span className="text-black dark:text-white">full-stack developer</span> balancing
              creativity and precision.
            </h2>
          </div>

          {/* Hero Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Drawing on the principles of martial arts - <span className="text-black dark:text-white font-medium">Patience</span>, <span className="text-black dark:text-white font-medium">Perseverance</span>, <span className="text-black dark:text-white font-medium">Practice Hard</span>, <span className="text-black dark:text-white font-medium">Practice exactly the way you want to perform</span>, and <span className="text-black dark:text-white font-medium">Meditation</span> — I create seamless digital experiences that flow effortlessly for end users.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen px-8 py-20 bg-gray-50 dark:bg-gray-900 snap-start">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* About Me Introduction */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-1/2 w-1 h-8 bg-black dark:bg-white transform -translate-y-1/2" />
              <h2 className="text-4xl font-bold text-black dark:text-white">About Me</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Thomas Curtis, a full-stack developer with a unique background in martial arts—channeling discipline and precision into every project. Guided by the principles of patience, perseverance, hard practice, performing exactly as I train, and mindful meditation, I strive for continuous improvement in both code and character. After earning my B.S. in Software Engineering from Bowling Green State University, I've dedicated myself to crafting robust, innovative solutions that reflect my unwavering commitment to detail and excellence.
            </p>
          </div>

          {/* Technical Skills Section */}
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

          {/* Professional Journey Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-black dark:text-white">Journey</h3>
            <div className="relative py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Timeline Connector */}
                <div className="absolute left-4 right-4 top-12 h-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                
                {/* Education Milestone */}
                <div className="relative">
                  <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                    <h4 className="text-lg font-medium text-black dark:text-white">Software Engineering Graduate</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">April 2024</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      B.S. in Software Engineering from Bowling Green State University
                    </p>
                  </div>
                </div>

                {/* Internship Milestone */}
                <div className="relative">
                  <div className="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-lg h-48">
                    <h4 className="text-lg font-medium text-black dark:text-white">Software Engineering Intern</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Nov 2023 - July 2024</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Joined Actual Reality Technologies, a dynamic local startup, contributing to innovative web development projects and learning industry best practices.
                    </p>
                  </div>
                </div>

                {/* Full-time Position Milestone */}
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
    </main>
  );
}
