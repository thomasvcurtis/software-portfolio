import Image from "next/image";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen px-8 py-20 relative z-10">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Contact - Section Header */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-1 h-8 bg-black dark:bg-white transform -translate-y-1/2" />
            <h2 className="text-4xl font-bold text-black dark:text-white">
              {"Let's"} Connect
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
                <Link
                  href="mailto:your.email@example.com"
                  className="text-lg text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  girdles.session_0t@icloud.com
                </Link>
              </div>

              {/* Location Block */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  LOCATION
                </h3>
                <div className="flex flex-col items-start gap-4">
                  <div className="w-40 h-40 rounded-lg flex items-center justify-center">
                    <Image
                      src="/ohio.png"
                      alt="Ohio State"
                      width={1000}
                      height={1000}
                      className="dark:invert w-full h-full object-contain"
                    />
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
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  CONNECT
                </h3>
                <div className="flex gap-6">
                  {/* LinkedIn */}
                  <Link
                    href="https://linkedin.com/in/thomasvcurtis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-40 h-40 rounded-lg flex items-center justify-center">
                      <Image
                        src="/linkedIn.png"
                        alt="LinkedIn Logo"
                        width={1000}
                        height={1000}
                        className="dark:invert w-full h-full object-contain"
                      />
                    </div>
                  </Link>

                  {/* GitHub */}
                  <Link
                    href="https://github.com/thomasvcurtis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-40 h-40 rounded-lg flex items-center justify-center">
                      <Image
                        src="/github.png"
                        alt="GitHub Logo"
                        width={1000}
                        height={1000}
                        className="dark:invert w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
