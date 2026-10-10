"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-500 dark:text-gray-400 mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6"
        >
          {personal.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-gray-700 dark:text-gray-300 mb-8 text-lg"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <Button asChild size="lg" className="glow">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={personal.resume} download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-110 transition-all"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-110 transition-all"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-110 transition-all"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}