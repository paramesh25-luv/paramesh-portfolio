import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LoRa-based Cycle Speedometer",
    description:
      "A wireless speedometer system using LoRa SX1278 and microcontrollers to measure and display real-time cycle speed over long distances. Designed for reliable low-power communication.",
  },
  {
    title: "LoRa Walkie-Talkie",
    description:
      "A custom walkie-talkie built with LoRa SX1278 modules and controllers for long-range wireless communication, optimized for industrial and rural communication use cases.",
  },
  {
    title: "Home Automation with ESP32",
    description:
      "Smart control of ceiling fans and bulbs using ESP32, SPST manual switches, IoT cloud integration, and Google Assistant voice commands. Features timer-based relay automation.",
  },
  {
    title: "Fake News Detection with NLP",
    description:
      "Developed NLP models (LSTM and BERT) to classify news as real or fake. Preprocessing text, training models, and evaluating performance metrics for accuracy and F1-score.",
  },
  {
    title: "Industrial Experience",
    description:
      "Visited IV at Chennai and DM50 Thor Plant at Ambur. Hands-on exposure to Auto-transformers, PID Controllers, LDC Signal Conditioners, and industrial control systems.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          🚀 My Projects & Experience
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-700">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
