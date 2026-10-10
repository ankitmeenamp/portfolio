"use client";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {personal.about}
        </p>
      </motion.div>
    </section>
  );
}