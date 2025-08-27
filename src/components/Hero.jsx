import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">Hi, I'm Paramesh 👋</h1>
      <p className="text-lg mt-4">Electronics & Communication | Web Developer | Data Science Enthusiast</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl shadow-lg hover:bg-gray-200 transition"
      >
        See My Projects
      </a>
    </section>
  );
};

export default Hero;   // <-- this was missing
