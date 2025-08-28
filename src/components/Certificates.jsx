import React from "react";
import { motion } from "framer-motion";

const certificates = [
  { name: "Internship Certificate", file: "/certificates/internship.pdf" },
  { name: "Industrial Visit Certificate", file: "/certificates/iv-chennai.pdf" },
  { name: "Award – 2nd Rank in ECE Dept", file: "/certificates/award.pdf" },
  { name: "Plant Visit Certificate", file: "/certificates/plant-visit.pdf" },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-indigo-700 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📜 Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {cert.name}
              </h3>
              <iframe
                src={cert.file}
                title={cert.name}
                className="w-full h-96 rounded-lg border"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
