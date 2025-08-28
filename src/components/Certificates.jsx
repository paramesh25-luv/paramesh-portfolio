import React from "react";
import { motion } from "framer-motion";

// Use relative paths (no leading slash) for GitHub Pages compatibility
const certificates = [
  {
    name: "TechSaksham IR 4.0 Foundation Course",
    file: "certificates/techsaksham.jpg",
    description:
      "Certificate for completing the IR 4.0 Foundation Course by TechSaksham, focusing on Industry 4.0 technologies and digital skills.",
  },
  {
    name: "Full Stack Web Development Course Completion",
    file: "certificates/course.jpg",
    description:
      "Course completion certificate for Full Stack Web Development, covering HTML, CSS, JavaScript, React, Node.js, and database management.",
  },
  {
    name: "Industrial Visit Certificate – Kashiv Info Tech",
    file: "certificates/iv.jpg",
    description:
      "Certificate for participating in an industrial visit at Kashiv Info Tech company, gaining insights into industry practices and technologies.",
  },
  {
    name: "Award – 2nd Rank Holder in ECE Dept",
    file: "certificates/award.jpg",
    description:
      "Awarded for securing 2nd rank in the Electronics and Communication Engineering department at my college.",
  },
  {
    name: "Internship Certificate – TVS, Polambakkam",
    file: "certificates/internship.jpg",
    description:
      "Certificate for successfully completing an internship at TVS, Polambakkam, with hands-on experience in industry projects.",
  },
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <img
                src={cert.file}
                alt={cert.name}
                className="w-full h-auto rounded-lg border object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;