import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJunit5,
} from "react-icons/si";
import { BsDiagram3 } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const categorizedSkills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "CRUD APIs", icon: <SiJunit5 className="text-blue-400" /> },
  ],
  Programming: [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "OOPs", icon: <BsDiagram3 className="text-indigo-600" /> },
    { name: "JDBC", icon: <FaDatabase className="text-gray-700" /> },
    { name: "DSA", icon: <BsDiagram3 className="text-emerald-600" /> },
    { name: "Algorithms", icon: <BsDiagram3 className="text-rose-500" /> },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "DBMS", icon: <FaDatabase className="text-gray-800" /> },
  ],
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen  bg-gray-50 text-black px-6 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-3">My Skils</h2>
        <p className="text-gray-500 mb-12 text-lg">
          Technologies & Languages .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(categorizedSkills).map(
            ([category, skills], index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-6 border-b border-indigo-200 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition duration-300 transform hover:scale-105 hover:bg-indigo-100 shadow-sm"
                    >
                      <span className="text-lg transition-transform duration-300 group-hover:rotate-6">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
