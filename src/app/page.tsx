import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Headline with decorative element */}
        <div className="relative">
          <div className="absolute -left-4 top-1/2 w-1 h-16 bg-black dark:bg-white transform -translate-y-1/2" />
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-black dark:text-white font-geist-sans leading-tight">
            Harnessing the Zen of{" "}
            <span className="text-red-600 dark:text-red-400">Martial Arts in Code</span>
          </h1>
        </div>

        {/* Subheading with strong visual contrast */}
        <div className="border-l-4 border-black dark:border-white pl-4">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
            Thomas Curtis,{" "}
            <span className="text-black dark:text-white">full-stack developer</span> balancing
            creativity and precision.
          </h2>
        </div>

        {/* Description with proper spacing and readability */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          Drawing on the principles of martial arts - <span className="text-black dark:text-white font-medium">Patience</span>, <span className="text-black dark:text-white font-medium">Perseverance</span>, <span className="text-black dark:text-white font-medium">Practice Hard</span>, <span className="text-black dark:text-white font-medium">Practice exactly the way you want to perform</span>, and <span className="text-black dark:text-white font-medium">Meditation</span> — I create seamless digital experiences that flow effortlessly for end users.
        </p>

        {/* Call to action button */}
        <div className="pt-4">
          <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg 
            transition-colors duration-200 text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100">
            Explore My Work
          </button>
        </div>
      </div>
    </main>
  );
}
