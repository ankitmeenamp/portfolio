// import { Github, Linkedin, Mail } from "lucide-react";
import {
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {year} {personal.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <a href={personal.github} target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href={personal.linkedin} target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${personal.email}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}