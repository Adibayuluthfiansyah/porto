import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#1a1a1a] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-sans">
        <div className="flex items-center">
          <p>© {new Date().getFullYear()} Adibayu Luthfiansyah.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Link
            href="#about"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://github.com/Adibayuluthfiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/adibayuluthfiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/adibayuluthfiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
