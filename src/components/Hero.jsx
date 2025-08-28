import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
      {/* ✅ Profile Photo */}
      <img
        src="profile.jpg"   // profile photo from public/profile.jpg
        alt="Paramesh Profile"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-white mb-6"
      />

      {/* ✅ Intro Text */}
      <h1 className="text-5xl font-bold">Hi, I'm Paramesh 👋</h1>
      <p className="text-lg mt-4 max-w-xl">
        Electronics & Communication | Web Developer | Data Science Enthusiast
      </p>

      {/* ✅ Button */}
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl shadow-lg hover:bg-gray-200 transition"
      >
        See My Projects
      </a>
    </section>
  );
};

export default Hero;
