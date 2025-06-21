import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import profile from "../assets/profile.png";
import profilee from "../assets/profilee.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row bg-gray-50 items-center justify-between px-8 md:px-16 pt-32 pb-20  min-h-screen"
    >
      {/* Left Side */}
      <div className="space-y-6 max-w-xl z-10 pl-3">
        <div className="space-y-2">
          <h2 className="text-6xl font-bold text-gray-900 pb-4 ">
            Amar Karande{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <p className="text-3xl text-gray-600">Full Stack Developer</p>
        </div>
        <p className="text-gray-500">
          Full stack, full passion—coding my way through front-end beauty and
          back-end logic. Let’s connect!
        </p>
        <div className="flex items-center gap-4 pb-1 text-xl text-gray-600">
          <a
            href="https://www.linkedin.com/in/amar-karande"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-600 transition-transform hover:scale-105 cursor-pointer" />
          </a>

          <a href="mailto:karandeamar45@gmil.com" aria-label="Email">
            <FaEnvelope className="hover:text-red-500 transition-transform hover:scale-105 cursor-pointer" />
          </a>

          <a
            href="https://github.com/AmarKarande"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-black transition-transform hover:scale-105 cursor-pointer" />
          </a>

          <a
            href="https://wa.me/918669438298?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="hover:text-green-500 transition-transform hover:scale-105 cursor-pointer" />
          </a>
        </div>
        <a
          href="https://t.me/amarkarande"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Say Hello <FaPaperPlane />
          </button>
        </a>
      </div>

      {/* Right Side */}
      <div className="w-90 h-90 pl-0.3  hidden md:block rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src={profile}
          alt="Amar Karande"
          className="w-90 h-90 object-cover object-center"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/256"; // Fallback image
          }}
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm mb-1">Scroll down</p>
        <div className="w-4 h-8 border-2 border-gray-400 rounded-full mx-auto flex items-start justify-center">
          <div className="w-1 h-1 bg-gray-400 rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
