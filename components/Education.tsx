"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Edu<span className="gradient-text">cation</span>
      </motion.h2>

      <div className="space-y-6">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors"
          >
            <div className="p-3 rounded-lg bg-blue-500/10 h-fit">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{e.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400">{e.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                {e.year} · {e.grade}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                <span className="font-medium">Coursework:</span> {e.coursework}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}