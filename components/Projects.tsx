"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
 
  CheckCircle2,
} from "lucide-react";
// import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{p.subtitle}</p>
              </div>
              <Badge variant="secondary">{p.year}</Badge>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {p.description}
            </p>

            <ul className="space-y-2 mb-6">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaGithub className="h-4 w-4" /> Code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
