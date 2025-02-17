import { FlipWords } from "@/components/ui/flip-words";

const flipWords = [
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Maintenance",
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 relative">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Hero - Title Block */}
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-black dark:text-white font-geist-sans leading-tight">
            Harnessing the Zen of{" "}
            <span className="text-red-600 dark:text-red-400">
              Martial Arts{" "}
            </span>
            <span className="text-black dark:text-white">in</span>
            <span className="text-red-600 dark:text-red-400">
              <br></br>
              <FlipWords words={flipWords} />
            </span>
          </h1>
        </div>

        {/* Hero - Subtitle Block */}
        <div className="border-l-4 border-black dark:border-white pl-4">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
            Thomas Curtis,{" "}
            <span className="text-black dark:text-white">
              full-stack engineer
            </span>{" "}
            balancing creativity with technical techniques.
          </h2>
        </div>
      </div>
    </section>
  );
}
