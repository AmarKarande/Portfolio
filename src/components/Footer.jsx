import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Amar Karande</h2>

        <nav className="mb-6">
          <ul className="flex justify-center gap-8 text-sm font-medium">
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaCheckCircle className="text-green-400" />
              <a href="#about">About</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaBriefcase className="text-blue-400" />
              <a href="#project">Projects</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <FaEnvelope className="text-yellow-400" />
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Amarkarande. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
