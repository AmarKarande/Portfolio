import React from "react";
import profileImage from "../assets/profile.png";
import { FaBriefcase, FaCheckCircle, FaHeadphones } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-6 py-10 w-full">
        {/* Left Side Image - visible only on desktop (md and up) */}
        <div className="hidden md:flex justify-center md:justify-start">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-3xl w-80 h-auto shadow-xl border-4 border-white"
          />
        </div>

        {/* Right Side Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">About Me</h2>
          <p className="text-gray-500 mb-4">My introduction</p>

          {/* Image for mobile only (<sm), hidden on sm and above */}
          <div className="flex justify-center mb-6 sm:hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-3xl w-48 h-auto shadow-md border-4 border-white"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center bg-white p-2 rounded-xl">
            <div className="p-4 border rounded-xl shadow-sm  bg-gray-50">
              <FaBriefcase className="text-xl mx-auto mb-1" />
              <p className="font-semibold">Experience</p>
              <p className="text-sm text-gray-500">Fresher</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm  bg-gray-50">
              <FaCheckCircle className="text-xl mx-auto mb-1" />
              <p className="font-semibold">Completed</p>
              <p className="text-sm text-gray-500">10+ Projects</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm  bg-gray-50">
              <FaHeadphones className="text-xl mx-auto mb-1" />
              <p className="font-semibold">Support</p>
              <p className="text-sm text-gray-500">Online 24/7</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            Frontend developer, I create web pages with modern UI/UX design. I
            have several years of experience and my clients are always satisfied
            with the quality and results of the projects I deliver.
          </p>

          {/* Download CV Button */}
          <a
            href="/AmarKarandeCV.pdf"
            download
            className="inline-block px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
