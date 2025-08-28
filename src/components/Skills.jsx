import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Programming & Development",
      items: [
        "Python (NLP, Numpy, Pandas, Matplotlib, Data Science)",
        "Java (Basic-Beginner)",
        "HTML, CSS, JavaScript, React, Node.js(Beginner)",
        "MySQL & Database Management(Inermediate)",
        "PCB Design (EasyEDA)",
        "VLSI Design (Beginner)",
      ],
    },
    {
      category: "Electronics & Hardware",
      items: [
        "Arduino, ESP32, NodeMCU projects",
        "LoRa & IoT communication systems",
        "Sensor interfacing & automation",
        "Circuit design & troubleshooting",
      ],
    },
    {
      category: "Electrician Skills",
      items: [
        "House Wiring & Electrical Layouts",
        "Switches, Sockets, and Fan Installation",
        "Troubleshooting & Maintenance",
        "Load calculation & safety practices",
      ],
    },
  ];

  return (
    <section id="skills" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
