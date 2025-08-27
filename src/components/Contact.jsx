import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          📩 Contact Me
        </motion.h2>
        <p className="text-lg mb-4">
          I'm open to collaboration and exciting opportunities. Feel free to
          reach out!
        </p>
        <div className="space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:parameshdurai346@gmail.com"
              className="text-blue-400 underline"
            >
              parameshdurai346@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/paramesh25-luv"
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/paramesh25-luv
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
