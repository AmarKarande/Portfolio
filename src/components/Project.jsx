import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Companion AI ",
    description:
      " A modern, full-stack SaaS application that empowers users to create, manage, and chat with personalized AI companions in real-time. Designed with Next.js 14 App Router, Clerk for authentication, and Supabase for data storage, this platform delivers a sleek and scalable AI experience",
    tech: [
      "React",
      "Tailwind CSS",
      "Next Js",
      "Supabase",
      "Clerk",
      "Supabase JS",
      "Server Actions",
      "Cache APIs",
    ],
    github: "https://github.com/AmarKarande/saas-app",
    live: "https://companionai-mu.vercel.app",
  },
  {
    title: "Travel Buddy",
    description:
      "An advanced travel assistant application built with Google Maps, featuring real-time geolocation, smart place searching, and data fetching from multiple APIs. Users can explore nearby restaurants, hotels, and attractions dynamically, with location-based filtering and an interactive map interface.",
    tech: [
      "React",
      "Material UI",
      "Google Maps JavaScript API",
      "RapidAPI (Places, Hotels, Restaurants)",
    ],
    github: "https://github.com/AmarKarande/TravelBuddy",
    live: "https://travelbuddyadviser.netlify.app/",
  },
  {
    title: "Personal Porfolio",
    description:
      "A modern, responsive, and visually appealing personal portfolio website built using React.js and Tailwind CSS. The project showcases my web development skills, technical projects, resume, and social links in an interactive and user-friendly interface also enabling secure and easy email submissions.",
    tech: [
      "React js",
      "JSX",
      "React Hooks",
      "Tailwind CSS",
      "React Icons",
      "getform.io",
    ],
    github: "https://github.com/AmarKarande/Portfolio",
    live: "https://portfolio-theta-three-17.vercel.app",
  },
];

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="project"
      className="min-h-screen bg-white text-black px-6 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-3" data-aos="fade-up">
          My Projects
        </h2>
        <p className="text-gray-600 mb-12 text-lg" data-aos="fade-up">
          A few projects I've built recently
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 text-left transition duration-300 hover:shadow-indigo-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-black"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-600 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-12" data-aos="fade-up">
          <a
            href="https://github.com/AmarKarande"
            className="inline-block px-6 py-3 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
