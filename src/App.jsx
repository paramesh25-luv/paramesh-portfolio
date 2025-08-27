import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />   {/* ✅ Your detailed projects */}
      <Contact />    {/* ✅ Your email + GitHub */}
      <Footer />
    </div>
  );
}
