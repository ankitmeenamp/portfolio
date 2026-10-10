"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Tech <span className="gradient-text">Stack</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}