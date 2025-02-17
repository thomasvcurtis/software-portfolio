import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="px-8 py-12 bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-gray-800 relative z-10">
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
              <Link
                href="#about"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Footer - Built With */}
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
  );
}
